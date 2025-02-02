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

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Understanding Query Language

<p className="text-lg mb-6">Let's explore how to effectively use the Query Language for advanced filtering.</p>

### Basic Query Structure

<div className="mb-8 text-lg">
  First, the filter page will display the current filter within the visual Truss Query Language (TQL) format.

  The TQL will be displayed in the breadcrumb filter display and can be manipulated with the following options:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Field Names:</span> category, region, tags, etc.</li>
    <li><span className="font-semibold">Attribute Panel:</span> Clicking on the attribute panel items will add them to the filter</li>
    <li><span className="font-semibold">Charts Page:</span> Clicking on the charts page panels will add them to the filter</li>
    <li><span className="font-semibold">Filter Tags:</span> Clicking on the filter tags will remove them from the filter</li>
  </ul>
</div>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/15 - Query Language Bar - Changing Filters1.png"
    alt="Basic Query View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

### Switch the filter view

<div className="mb-8 text-lg">
  You can switch between the Breadcrumb TQL Filter and the Textual TQL Filter display.
  The same filter addition options will be available in both views (attribute panel or charts page additions).
  But within the QL view, you will be able to see the TQL syntax and can manipulate the filter with the following options:
</div>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/16 - Query Language Bar - Changing Filters2.png"
    alt="Query Results View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Operators:</span> AND, OR for combining conditions</li>
    <li><span className="font-semibold">Values:</span> Enclosed in quotes for exact matching</li>
    <li><span className="font-semibold">Customizable:</span> Here you can add new filter names that are not currently available in the attribute panel or charts page.</li>
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

### Complex Query Combinations

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/17 - Query Language Bar - Complex Filter1.png"
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
  Example: <code>(region="Russia") AND (tags="APT27" OR tags="APT28")</code>
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Save and Load Filters

### Save Filter
<div className="mb-8 text-lg">
  Once you have a filter set you want to save, you can do so by clicking the 'Save Filter' button.
</div>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/18 - Query Language Bar - Save Filter1.png"
    alt="Complex Query View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  A modal will appear where you can give your filter a name and description.
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Filter Name:</span> A name for your filter</li>
    <li><span className="font-semibold">Filter Description:</span> A description for your filter</li>
  </ul>
</div>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/19 - Query Language Bar - Save Filter2.png"
    alt="Complex Query View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

### Load Filter

<div className="mb-8 text-lg">
  You can also load a saved filter by clicking the 'Load Filter' button.
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Load Filter:</span> Click the 'Load Filter' button</li>
    <li><span className="font-semibold">Select Filter:</span> Select the filter you want to load</li>
  </ul>
</div>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/20 - Query Language Bar - Load Filter1.png"
    alt="Complex Query View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  After selecting the filter you want to load, the filter will be applied and the products associated with the filter will be displayed.
</div>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/21 - Query Language Bar - Load Filter2.png"
    alt="Complex Query View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Pro Query Tips

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