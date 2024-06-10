---
sidebar_position: 2
---

# Using the API

Documentation on using the API

# Search

`/product/search`

The Truss search function is a powerful endpoint that is designed to accommodate most data access needs. This endpoint allows users to retrieve comprehensive slices of security data efficiently and effectively. There are two types of search parameters: primary and secondary. The primary search parameters are indexed in the database and are used to limit the number of records returned by the search. The secondary search parameters are used to filter the data returned from search before returning it.

## By Date 

* **startdate:** Return products uploaded on or after this date.
* **enddate:** Return products uploaded on or before this date.
* **days:** Return products uploaded since N days ago.

Searches may be time boxed using the `startdate` and `enddate` parameters using *unix epoch time* in milliseconds. For example, the following example will return all security products entered since the specified start date (Sun Jun  2 19:55:10 MDT 2024).

```javascript
{
  startDate: 1717379710282
}
```

If a `days` parameter is included the search returns security products entered since that number of days in the past to the current time. This parameter will be used in place of `startdate` and `enddate` parameters.

:::info
When a `days` parameter is entered, `startdate` and `enddate` parameters will be ignored.
:::

```javascript
{
  days: 7
}
```
## By category and source

* **category:** Exact match for category name.
* **source:** Exact match for source name.

These primary parameters are indexed in the database, ensuring optimized and quick data retrieval.

## Using Filters

There are also several secondary search parameters that can be used to further filter the search results. These include:

`author | title | tags | validators | industry | region`

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

This will return all security products where the `author` is "Researcher 1" `AND` where the `tags` are "C2" OR "AlphV".

## By indicators

Indicators in a product have a format like the following:

```javascript
indicators: {
    IPV4: ["94.103.91.246"],
    URL: [
      "http://94.103.91.246/incrementLaunch",
      "http://94.103.91.246/upload",
      "http://94.103.91.246/addInfection"
    ],
    FILENAME: ["*.ghost"]
  }
```

It is possible to search for one or more indicators. For example, the following search will return all security products that have been entered since the specified start date, with the `category` of "Ransomeware" and `IP` indicators "45.61.138.109" OR "185.141.62.123" OR the `SHA1` indicator "bbfc22ac7985902fdf0dd91c5bf270967cf1f474".

```javascript
{
  category: "Ransomware",
  startDate: 1717379710282,
  indicators: {
    IP: ["45.61.138.109", "185.141.62.123"],
    SHA1: ["bbfc22ac7985902fdf0dd91c5bf270967cf1f474"]
  }
{
```

## Using limit

* **limit:** The maximum number of records to return.

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

To get the next page of the data you pass this object in as the `LastEvaluatedKey` for the next search.
startKey: Used to page through the data. If a query returns a chunk of data with more available, you can use the LastEvaluatedKey from the previous search to continue retrieving data.

```javascript
{
  category: "Ransomware",
  LastEvaluatedKey: {
    GSI1PK: 'PROD',
    SK: 'VER#0',
    GSI1SK: 1717377712019,
    PK: 'PROD#01HKDT164VYRS50ZQ8RJEHHBH0'
  }
}
```

## Examples

Often, you will want to combine primary search parameters with secondary filters. For example, the following example will return all security products entered since the specified start date with the indicators "94.103.91.246" OR "*.ghost"

```javascript
{
  startDate: 1717379710282,
  tags: ["C2"]
}
```

