---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Using the API

## Truss Search Endpoint

The Truss `/product/search` endpoint is designed to accommodate most data access needs. This endpoint allows you to retrieve comprehensive slices of security data based on a variety of filter parameters.

At the simplest level, you will want to specify a `startdate` or `days` parameter to target a specific time period for the security products you want to retrieve.

```shell
curl -X 'POST' \
  "https://api.truss-security.com/product/search" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "days": 2
  }'
```

## Paging

When a product search results in a large number of products, only a subset of the total will be returned by each call to the `/product/search` endpoint. In these cases the initial calls will return metadata in the form of a `LastEvaluatedKey` that can be used to page through the results.

The format of `LastEvaluatedKey`:

```json
LastEvaluatedKey: {
  "GSI1PK": "PROD",
  "SK": "VER#0",
  "GSI1SK": 1717377712019,
  "PK": "PROD#01HKDT164VYRS50ZQ8RJEHHBH0"
}
```

To get the next page of the data you pass this object in as a `LastEvaluatedKey` parameter for the next search.

<Tabs>
  <TabItem value="curl" label="curl" default>
```shell
curl -X 'POST' \
  "https://api.truss-security.com/product/search" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "days": 2,
    "LastEvaluatedKey": {
      "GSI1PK": "PROD",
      "SK": "VER#0",
      "GSI1SK": 1717377712019,
      "PK": "PROD#01HKDT164VYRS50ZQ8RJEHHBH0"
    }
  }'
```
  </TabItem>
  <TabItem value="javascript" label="javascript">
```javascript
import axios from 'axios';

const YOUR_API_KEY = '1234567890'

export const trussApi = async (filter) => {
  const server = 'https://api.truss-security.com'
  const searchEndpoint = '/product/search'
  const url = server + searchEndpoint
  try {
    const options = {
      method: 'POST',
      headers: { 
        'x-api-key': YOUR_API_KEY
      },
      data: filter,
      url,
    };
    const response = await axios(options);
    return response.data
  } catch (err) {
    console.log('HTTP Error: ', err)
    throw err
  }
}

export async function fetchAllPages(filter) {
  const allItems = [];
  let lastEvaluatedKey;
  
  try {
    do {
      const currentFilter = {
        ...filter,
        LastEvaluatedKey: lastEvaluatedKey
      };
      const { result } = await trussApi(currentFilter);
      allItems.push(...result.Items);
      lastEvaluatedKey = result.LastEvaluatedKey;
    } while (lastEvaluatedKey);

    return allItems;
  } catch (error) {
    throw new Error(`Failed to fetch pages: ${error.message}`);
  }
}

const fetchExample = async () => {
  try {
    const filter = {
      startdate: 1731369600000,
      enddate: 1731455999999,
      category: ['TOR', 'Malware']
    };
    
    const allItems = await fetchAllPages(filter);

    console.log('Total Items:', allItems.length);
  } catch (error) {
    console.error('Test failed:', error);
  }
};

fetchExample()
```
  </TabItem>
</Tabs>

## Search by Date 

There are several ways to search by date. The following parameters are supported:

* **startdate:** Return products uploaded on or after this date.
* **enddate:** Return products uploaded on or before this date.
* **days:** Return products uploaded since N days ago.

Searches may be time boxed using the `startdate` and `enddate` parameters. Different date formats are supported:

- *unix epoch time* in milliseconds (e.g., "1717379710282")
- *ISO* format (e.g., "2024-06-02")
- *Human readable* format (e.g., "March 20, 2024")
- *Relative date* format (e.g., "today", "yesterday", "last week", "next week", "last month", "next month")

For example, the following example will return all security products entered since the specified start date (Sun Jun 2 2024) and before the specified end date (Mon Jun 3 2024).

```shell
curl -X 'POST' \
  "https://api.truss-security.com/product/search" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "startDate": "2024-06-02",
    "endDate": "2024-06-03"
  }'
```

If a `days` parameter is included the search returns security products entered since that number of days in the past to the current time. This parameter will be used in place of `startdate` and `enddate` parameters.

:::info
When a `days` parameter is entered, `startdate` and `enddate` parameters will be ignored.
:::

```shell
curl -X 'POST' \
  "https://api.truss-security.com/product/search" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "days": 3
  }'
```

## Search Filters

Search filters are used to narrow down the results of a search. They contain both the date parameters and the product parameters and are passed directly into the data field of the search request.

In addition to the date parameters, the following product parameters are supported:

* **category:** Array of category names (e.g., ["Ransomware", "OSINT"]).
* **source:** Array of source names (e.g., ["TOR Project"]).
* **author:** Array of author names (e.g., ["MohitK_"]).
* **industry:** Array of industry names (e.g., ["Finance"]).
* **region:** Array of region names (e.g., ["Europe"]).
* **reference:** Array of reference strings (e.g., ["https://threatview.io/"]).
* **tags:** Array of tags (e.g., ["C2", "AlphV"]).

When searching for multiple values for a single parameter, the search performs an `OR` between the strings passed as an array to a single parameter. For example, if the values ["Ransomware", "OSINT"] are passed to the `category` parameter, the search will return all security products where the `category` is "Ransomware" OR "OSINT".

If more than one parameter is specified in a search (e.g., `category` and `source`), then the search will return those products that satisfy BOTH of the specified parameters. In other words, the search performs an `AND` between the different parameters. For example, if ["Ransomeware"] is passed to the `category` parameter and the ["TOR Project"] is passed to the `source` parameter, the search will return all security products where the `category` is "Ransomeware" AND where the `source` is "TOR Project".

Consider the following filter:

```shell
curl -X 'POST' \
  "https://api.truss-security.com/product/search" \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "days": 3,
    "author": ["TOR Project"],
    "tags": ["C2", "AlphV"]
  }'
```

This will return all security products where the `author` is "TOR Project" `AND` where the `tags` are "C2" `OR` "AlphV".



