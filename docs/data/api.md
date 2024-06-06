---
sidebar_position: 2
---

# Using the API

Documentation on using the API

## Search

`/product/search`

The Truss search function is a powerful endpoint that is designed to accommodate most data access needs. This endpoint allows users to retrieve comprehensive slices of security data efficiently and effectively. There are two types of search parameters: primary and secondary. The primary search parameters are indexed in the database and are used to limit the number of records returned by the search. The secondary search parameters are used to filter the data returned from search before returning it.

#### Primary Search Parameters:

* **startdate:** Return products uploaded on or after this date.
* **enddate:** Return products uploaded on or before this date.
* **category:** Exact match for category name.
* **source:** Exact match for source name.
* **limit:** The maximum number of records to return.

These primary parameters are indexed in the database, ensuring optimized and quick data retrieval.

:::info
The `limit` parameter specifies the number of records that are returned by the Primary Search (before filtering). By default, the search will return approximately 1MB of data if no limit is specified.
:::

#### Secondary Filter Parameters:

There are also several secondary search parameters that can be used to further filter the search results. These include:

`author | title | tags | validators | industry | region | indicators`

If more than one secondary parameter is specified in a search, then the search will return those products that satisfy both of the specified parameters. In other words, the search performs an `AND` between the different parameters.

Secondary search parameters that are of type `string` (e.g., title) only allow you to pass in a single string. The search will return any security products where that parameter CONTAINS that string.

Secondary search parameters that are of type `array of strings` (e.g., author, tags, validators, industry, region, indicators) allow you to pass in an array of strings. The search will return any security products where ANY of the strings are found. In other words, the search performs an `OR` between the strings passed as an array to a single parameter.

Consider the following search:

```javascript
{
  author: ["Researcher 1"],
  tags: ["C2", "AlphV"],
}
```

This will return all security products where the `author` is "Researcher 1" `AND` where the `tags` are "C2" and "AlphV".

## Paging

Searches where Primary Search Parameters are not specified or which return a large number of products may only return a subset of the total number of products that would be satified by the search. In these cases the search will return metadata in the form of a `LastEvaluatedKey`. 

The format of `LastEvaluatedKey`:

```javascript
LastEvaluatedKey: {
  GSI1PK: 'PROD',
  SK: 'VER#0',
  GSI1SK: 1717377712019,
  PK: 'PROD#01HKDT164VYRS50ZQ8RJEHHBH0'
}
```

To get the next page of the data you pass this object in as the `startKey` for the next search.
startKey: Used to page through the data. If a query returns a chunk of data with more available, you can use the LastEvaluatedKey from the previous search to continue retrieving data.

```javascript
{
  author: ["Researcher 1"],
  tags: ["C2", "AlphV"],
  startKey: {
    GSI1PK: 'PROD',
    SK: 'VER#0',
    GSI1SK: 1717377712019,
    PK: 'PROD#01HKDT164VYRS50ZQ8RJEHHBH0'
  }
}
```


### /product/\{id}
