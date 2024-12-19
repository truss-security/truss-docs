---
sidebar_position: 5
title: Products Explorer
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Products Explorer</h1>
</div>

<div className="text-center mb-12">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
    Welcome to the Products Explorer, your gateway to discovering and analyzing security intelligence. Think of this as your personal security research library, where each piece of intelligence is beautifully organized and easily accessible.
  </p>
  <p className="text-xl italic text-gray-600 max-w-3xl mx-auto">
    The Products Explorer provides detailed intelligence data based on your selected filters and search criteria.
  </p>
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Navigating the Products Interface

<p className="text-lg mb-6">
  Using the filter that was applied from the 
  <a href="/truss-docs/insight" className="text-blue-600 underline">Insight's Dashboard</a>, 
  let's explore how to effectively use the Products Explorer interface.
</p>

### Understanding the Layout

<div className="my-6">
  <img 
    src="/truss-docs/img/6 - Products - Initial.png"
    alt="Products Default View"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

<div className="mb-8 text-lg">
  The Products Explorer interface consists of five main sections:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Breadcrumbs:</span> Top area used for searching and view options</li>
    <li><span className="font-semibold">Total Products:</span> The total number of products found with the selected filters</li>
    <li><span className="font-semibold">Date Range:</span> The date range to use for given query</li>
    <li><span className="font-semibold">Page:</span> The current page of results being displayed</li>
    <li><span className="font-semibold">Attributes Panel:</span> The metadata associated with the the current set of products</li>
  </ul>
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

### Looking at Single Products

<div className="my-6">
  <img 
    src="/truss-docs/img/7 - Products - Highlight Card.png"
    alt="Products Filter Panel"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

<div className="mb-8 text-lg">
  By hovering over a product card, you can see the following attributes:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Title:</span> The title of the product</li>
    <li><span className="font-semibold">Source:</span> The source of the product</li>
    <li><span className="font-semibold">Author:</span> The author of the product</li>
    <li><span className="font-semibold">Publication Date:</span> The date the product was published</li>
    <li><span className="font-semibold">Categories:</span> The categories associated with the product</li>
    <li><span className="font-semibold">Regions:</span> The regions associated with the product</li>
    <li><span className="font-semibold">Industries:</span> The industries associated with the product</li>
  </ul>
  Clicking on the card will open a detailed view of the product.
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

### Detailed Intelligence View

<div className="my-6">
  <img 
    src="/truss-docs/img/9 - Products - Modal Details.png"
    alt="Detailed Intelligence View"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

<div className="mb-8 text-lg">
  Clicking on a card reveals comprehensive details and metadata associated with the product:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Region:</span> Again, you see the region associated with the product</li>
    <li><span className="font-semibold">References:</span> The references and URL links associated with the product</li>
    <li><span className="font-semibold">Tags:</span> The tags associated with the product</li>
    <li><span className="font-semibold">Indicators:</span> The indicators associated with the product</li>
  </ul>
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Pro Search Tips

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Advanced Search Techniques</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="font-semibold">Basic Search:</span> Use keywords and phrases</li>
      <li><span className="font-semibold">Query Language:</span> Write complex search queries</li>
      <li><span className="font-semibold">Filter Combinations:</span> Combine multiple criteria</li>
      <li><span className="font-semibold">Save Searches:</span> Bookmark frequent queries</li>
    </ul>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Best Practices</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Start with broad searches, then refine</li>
      <li>Use multiple filters for precision</li>
      <li>Check related intelligence</li>
      <li>Export findings for reporting</li>
    </ul>
  </div>
</div>

<div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100 text-center">
  <p className="text-lg font-medium text-blue-800">
    The Products Explorer is your comprehensive tool for discovering and analyzing security intelligence. Use these features to make informed security decisions based on the latest intelligence data.
  </p>
</div>