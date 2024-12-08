---
sidebar_position: 4
title: Query Bar Explorer
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Query Bar Explorer</h1>
</div>

<div className="text-center mb-12">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
    Welcome to the Query Bar Explorer, where you can craft precise search queries using the Truss Query Language (TQL). This powerful tool allows you to create complex filters and combine multiple search criteria.
  </p>
  <p className="text-xl italic text-gray-600 max-w-3xl mx-auto">
    The Query Bar provides advanced filtering capabilities through a flexible query language syntax.
  </p>
</div>

## { /* Understanding Query Language */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Understanding Query Language</h2>

<p className="text-lg mb-6">Let's explore how to effectively use the Query Language for advanced filtering.</p>

### { /* Basic Query Structure */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Basic Query Structure</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/15 - Query Language Bar - Searching.png"
    alt="Basic Query View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  First, click on the QL icon in the top right of the page.
  
  This will return the current filter within the Truss Query Language format:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Field Names:</span> category, region, tags, etc.</li>
    <li><span className="font-semibold">Operators:</span> AND, OR for combining conditions</li>
    <li><span className="font-semibold">Values:</span> Enclosed in quotes for exact matching</li>
  </ul>
  Example: <code>category="Malware" AND region="Russia" AND tags="APT27"</code>
</div>

### { /* Complex Query Combinations */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Complex Query Combinations</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/16 - Query Language Bar - Advanced Searching.png"
    alt="Complex Query View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  More sophisticated queries can be created using parentheses and multiple operators:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Grouping:</span> Use parentheses to group conditions</li>
    <li><span className="font-semibold">Multiple Values:</span> Combine related criteria with OR</li>
    <li><span className="font-semibold">Field Combinations:</span> Mix different fields for precise filtering</li>
  </ul>
  Example: <code>(region="Russia" OR region="China") AND (tags="APT27" OR tags="APT28" OR tags="APT10")</code>
</div>

### { /* Query Results */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Query Results</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/17 - Query Language Bar - To Filter.png"
    alt="Query Results View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  You can switch between the Query Language Bar and the Breadcrumb Filter display at will
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Filter Tags:</span> Visual and Textual representation of active filters</li>
    <li><span className="font-semibold">Product Count:</span> Updated total matching your criteria</li>
    <li><span className="font-semibold">Results Display:</span> Filtered product cards matching your query</li>
  </ul>
</div>

## { /* Pro Query Tips */ }
<h2 className="text-3xl font-bold mt-12 mb-6 border-b pb-2">Pro Query Tips</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Query Strategies</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="font-semibold">Field Names:</span> Use exact field names from the UI</li>
      <li><span className="font-semibold">Grouping:</span> Organize conditions logically</li>
      <li><span className="font-semibold">Operators:</span> Combine AND/OR effectively</li>
      <li><span className="font-semibold">Validation:</span> Check syntax before updating</li>
    </ul>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Best Practices</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Start with simple queries and build up</li>
      <li>Use parentheses for clear grouping</li>
      <li>Test queries incrementally</li>
      <li>Save complex queries for future use</li>
    </ul>
  </div>
</div>

<div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100 text-center">
  <p className="text-lg font-medium text-blue-800">
    The Query Bar is your advanced tool for precise data filtering.
    Master the Query Language to create sophisticated searches and unlock deeper insights into your security intelligence.
  </p>
</div>