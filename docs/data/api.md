---
sidebar_position: 2
title: Truss API Guide
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import { codeTabs as CodeTabs } from '@site/src/components/APIExamples/codeTabs';
import { basicSearchExample as BasicSearchExample } from '@site/src/components/APIExamples/basicSearchExample';
import { pagingExample as PagingExample } from '@site/src/components/APIExamples/pagingExamples';
import { dateSearchExample as DateSearchExample } from '@site/src/components/APIExamples/dateSearchExamples';
import { daysExample as DaysExample } from '@site/src/components/APIExamples/daysExamples';
import { filterExample as FilterExample } from '@site/src/components/APIExamples/filterExamples';

<div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Using the API</h1>
</div>

<div className="text-center mb-12">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
    The Truss API facilitates powerful endpoint query operations to provide access to Truss' security data. The API is designed to be used by developers to retrieve, filter, and analyze data efficiently.
  </p>
  <p className="text-xl italic text-gray-600 max-w-3xl mx-auto">
    Truss allows organizations to access the security data they need, in a way that is efficient and easy to use.
  </p>
</div>

## { /* Truss Search Endpoint */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Truss Search Endpoint</h2>

<p className="text-lg mb-6">
  The Truss <code>/product/search</code> endpoint is designed to accommodate most data access needs. This endpoint allows you to retrieve comprehensive slices of security data based on a variety of filter parameters.
</p>

<CodeTabs example={BasicSearchExample} />

## { /* Paging */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Paging</h2>

<p className="text-lg mb-6">
  When a product search results in a large number of products, only a subset of the total will be returned by each call to the <code>/product/search</code> endpoint. In these cases, the initial calls will return metadata in the form of a <code>LastEvaluatedKey</code> that can be used to page through the results.
</p>

<CodeTabs example={PagingExample} />

## { /* Search by Date */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Search by Date</h2>

There are several ways to search by date. The following parameters are supported:

* **startdate:** Return products uploaded on or after this date.
* **enddate:** Return products uploaded on or before this date.
* **days:** Return products uploaded since N days ago.

Searches may be time boxed using the `startdate` and `enddate` parameters. Different date formats are supported:

- *unix epoch time* in milliseconds (e.g., "1717379710282")
- *ISO* format (e.g., "2024-06-02")
- *Human readable* format (e.g., "March 20, 2024")

For example, the following example will return all security products entered since the specified start date (Sun Jun 2 2024) and before the specified end date (Mon Jun 3 2024).

<CodeTabs example={DateSearchExample} />

If a `days` parameter is included the search returns security products entered since that number of days in the past to the current time. This parameter will be used in place of `startdate` and `enddate` parameters.

:::info
When a `days` parameter is entered, `startdate` and `enddate` parameters will be ignored.
:::

<CodeTabs example={DaysExample} />

## { /* Boolean Search Filters */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Boolean Search Filters</h2>

<p className="text-lg mb-6">
  Boolean search filters can be used to narrow down the results of a query. Boolean search filters contain both the date parameters and the product parameters and are passed directly into the data field of the search request.
</p>

The following product parameters support boolean search filters:

* **category:** Array of category names (e.g., ["Ransomware", "OSINT"]).
* **source:** Array of source names (e.g., ["TOR Project"]).
* **author:** Array of author names (e.g., ["MohitK_"]).
* **industry:** Array of industry names (e.g., ["Finance"]).
* **region:** Array of region names (e.g., ["Europe"]).
* **reference:** Array of reference strings (e.g., ["https://threatview.io/"]).
* **tags:** Array of tags (e.g., ["C2", "AlphV"]).

### { /* 'OR' Filtering */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">'OR' Filtering</h3>

When searching for multiple values for a single parameter, the search performs an `OR` between the strings passed as an array to a single parameter. For example, if the values ["Ransomware", "OSINT"] are passed to the `category` parameter, the search will return all security products where the `category` is "Ransomware" OR "OSINT".

### { /* 'AND' Filtering */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">'AND' Filtering</h3>

If more than one parameter is specified in a search (e.g., `category` and `source`), then the search will return those products that satisfy BOTH of the specified parameters. In other words, the search performs an `AND` between the different parameters.

For example, if ["Ransomeware"] is passed to the `category` parameter and the ["TOR Project"] is passed to the `source` parameter, the search will return all security products where the `category` is "Ransomeware" AND where the `source` is "TOR Project".

Consider the following filter:

<CodeTabs example={FilterExample} />

## { /* Pro API Tips */ }
<h2 className="text-3xl font-bold mt-12 mb-6 border-b pb-2">Pro API Tips</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Advanced API Techniques</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="font-semibold">Pagination:</span> Handle large result sets efficiently by adding pagination to your client</li>
      <li><span className="font-semibold">Filter Chaining:</span> Combine multiple filters for precise results</li>
      <li><span className="font-semibold">Date Formatting:</span> You can use various date formats for flexibility. epoch, day range, or human readable</li>
      <li><span className="font-semibold">Error Handling:</span> Implement robust error handling through your client to handle errors gracefully</li>
    </ul>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">API Best Practices</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Cache responses when appropriate</li>
      <li>Implement rate limiting in your client</li>
      <li>Use proper error handling and retries</li>
      <li>Your API key is sensitive to your account. Do not share it with anyone.</li>
    </ul>
  </div>
</div>

<div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100 text-center">
  <p className="text-lg font-medium text-blue-800">
    The Truss API is your tool for accessing and managing security intelligence data. Use these endpoints to retrieve, filter, and analyze data efficiently.
  </p>
</div>
