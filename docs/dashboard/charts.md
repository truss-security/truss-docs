---
sidebar_position: 6
title: Charts & Analytics
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Charts & Analytics</h1>
</div>

<div className="text-center mb-12">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
    Welcome to the Charts & Analytics explorer, where data transforms into visual insights. This powerful visualization tool helps you understand patterns and relationships across your security intelligence data.
  </p>
  <p className="text-xl italic text-gray-600 max-w-3xl mx-auto">
    The Charts explorer provides multiple views and interactive visualizations of your filtered data.
  </p>
</div>

## { /* Understanding Chart Types */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Understanding Chart Types</h2>

<p className="text-lg mb-6">Let's explore the various chart types and visualization options available.</p>

<p className="text-lg mb-6">
  Its important to note that the charts view is highly interactive.
</p>

<p className="text-lg mb-6 italic">
  The Attribute Panel and Breadcrumbs|TQL filters are global and affect the data displayed in the charts.
</p>

### { /* Initial Chart Display */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Regional Distribution</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/18 - Charts - Regional.png"
    alt="Regional Distribution Map"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  The initial display for the charts page is the regional distribution view:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">World Map:</span> Interactive visualization of geographic distribution</li>
    <li><span className="font-semibold">Regions:</span> Detailed breakdown of data by country</li>
    <li><span className="font-semibold">Industries:</span> Overall number of items in the current view</li>
    <li><span className="font-semibold">Category:</span> Chart view can be filtered by category</li>
    <li><span className="font-semibold">Tags:</span> Tags can be used to filter the view</li>
  </ul>
</div>

### { /* Chart Type Selection */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Chart Type Selection</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/19 - Charts - Graph Pull Down.png"
    alt="Chart Type Options"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  Each data category can be visualized in different ways:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Pie Charts:</span> Show proportional distribution</li>
    <li><span className="font-semibold">Bar Charts:</span> Compare quantities across categories</li>
    <li><span className="font-semibold">Heatmap Charts:</span> Display density and patterns</li>
    <li><span className="font-semibold">Treemap Charts:</span> Hierarchical data visualization</li>
    <li><span className="font-semibold">Funnel Charts:</span> Show stage-based progression</li>
  </ul>
</div>

### { /* Data Interaction */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Data Interaction</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/20 - Charts - Change views.png"
    alt="Interactive Bar Chart"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  Charts are fully interactive and each graph can be filtered and drilled down into by selecting or deselecting the items within the legend:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Click Selection:</span> Choose specific data points</li>
    <li><span className="font-semibold">Value Display:</span> See exact numbers on hover</li>
    <li><span className="font-semibold">Filter Integration:</span> Selections update global filters</li>
  </ul>
</div>

### { /* Add Filters from Charts */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Add Filters from Charts</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/21 - Charts - Filter from Chart.png"
    alt="Source and Author Analytics"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  Double click on a chart item to add that item to the global filters:
</div>

### { /* Global Filters with Charts */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Global Filters with Charts</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/22 - Charts - With new filter.png"
    alt="Technical Indicators View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  Global Filters will affect the metadata displayed across <i><b>ALL</b></i> the charts:
</div>

### { /* Chart View Options */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Chart View Options</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/23 - Charts - Change Chart Types.png"
    alt="Chart View Options"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  The chart visualizations can be changed to allow for different types of understanding and analysis:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Regional:</span> Geographic distribution of data</li>
    <li><span className="font-semibold">Source:</span> Analysis of data sources</li>
    <li><span className="font-semibold">Indicators:</span> Technical indicator breakdowns</li>
  </ul>
  Select the view that best suits your analysis needs.
</div>

### { /* Source Analysis */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Source Analysis</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/24 - Charts - Source Charts.png"
    alt="Source Analysis View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  The Source view provides detailed insights into data origins:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Source Distribution:</span> View data by source</li>
    <li><span className="font-semibold">Author Analysis:</span> See author contributions</li>
    <li><span className="font-semibold">Reference Tracking:</span> Explore data references</li>
    <li><span className="font-semibold">Tag Analysis:</span> View associated tags</li>
  </ul>
</div>

### { /* Indicator Analysis */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Indicator Analysis</h3>

<div className="my-6 flex justify-center">
  <img 
    src="/truss-docs/img/25 - Charts - Indicator Charts.png"
    alt="Indicator Analysis View"
    className="rounded-lg shadow-lg max-h-[500px] object-contain" 
  />
</div>

<div className="mb-8 text-lg">
  The Indicators view focuses on technical details:
  <ul className="list-disc pl-6 my-4">
    <li><span className="font-semibold">Category Breakdown:</span> View distribution by category</li>
    <li><span className="font-semibold">Technical Tags:</span> Analyze technical indicators</li>
    <li><span className="font-semibold">Reference Links:</span> Explore related references</li>
    <li><span className="font-semibold">Indicator Types:</span> See different indicator classifications</li>
  </ul>
</div>

## { /* Pro Visualization Tips */ }
<h2 className="text-3xl font-bold mt-12 mb-6 border-b pb-2">Pro Visualization Tips</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Interactive Features</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="font-semibold">Legend Interaction:</span> Click items to show/hide specific data</li>
      <li><span className="font-semibold">Double-Click:</span> Add items to global filters directly from charts</li>
      <li><span className="font-semibold">View Switching:</span> Toggle between Regional, Source, and Indicators views</li>
      <li><span className="font-semibold">Chart Types:</span> Switch between Pie, Bar, Heatmap, and other visualizations</li>
    </ul>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Analysis Strategies</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Start with Regional view for geographic context</li>
      <li>Use Source view to understand data origins</li>
      <li>Switch to Indicators view for technical details</li>
      <li>Combine global filters with chart interactions for deep analysis</li>
    </ul>
  </div>
</div>

<div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100 text-center">
  <p className="text-lg font-medium text-blue-800">
    Remember: All chart interactions work with global filters. Changes in the Attribute Panel or TQL will update all chart visualizations automatically.
  </p>
</div>