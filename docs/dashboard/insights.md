---
sidebar_position: 2
title: Insights Dashboard
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Intelligent Insights</h1>
</div>

<div className="text-center mb-12">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
    Welcome to the Insights Dashboard, your window into the dynamic world of security intelligence. Here, complex data transforms into clear, actionable insights, helping you understand the ever-evolving security landscape at a glance.
  </p>
  <p className="text-xl italic text-gray-600 max-w-3xl mx-auto">
    The Insights Dashboard is a 7-day view of trending data across all security categories.
  </p>
</div>

## { /* Navigating Insights Trending Data */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Navigating Insights Trending Data </h2>

<p className="text-lg mb-6">Let's walk through an example of how to use the Insights Trending Data.</p>

### { /* Exploring the Initial View */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Exploring the Initial View</h3>

<div className="my-6">
  <img 
    src="/truss-docs/img/1 - Insights - Default.png"
    alt="Default Insights View"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

<div className="mb-8 text-lg">
  When you first land on the Insights dashboard, you'll see each of the unique Trends chart displaying their lasts trend information. This gives you a comprehensive view of how different datasets are shifting over time.
</div>

### { /* Exploring Category Data */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Exploring Category Data</h3>  
<div className="my-6">
  <img 
    src="/truss-docs/img/2 - Insights - Interaction.png"
    alt="Remove OSINT Items"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

By clicking on an item, in this example, OSINT (Open Source Intelligence), we can remove or add that category from the view. Notice how the layers of data fluctuates over the 7-day period, giving you insights into:
<ul className="list-disc pl-6 my-4">
  <li>Peaks and troughs in Category activity</li>
  <li>Relative proportion of various categories compared to others</li>
  <li>Providing a temporal pattern to the data within the category field</li>
</ul>

### { /* Analyzing Malware Trends */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Analyzing Malware Trends</h3>  
<div className="my-6">
  <img 
    src="/truss-docs/img/3 - Insights - Item Values.png"
    alt="Malware Selection"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

By hovering your cursor over a given legend item, we can observe only that item's trending data over the last 7 days:
<ul className="list-disc pl-6 my-4">
  <li>Malware related items increased by roughly 5% each day from from 12/4/2024 to 12/6/2024</li>
  <li>The percentage of malware-related intelligence varying from 29.79% to 74.69% over the last 7 days</li>
  <li>Clear patterns of malware activity are visible across each day of activity</li>
</ul>

### { /* Identifying Key Data Points */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Identifying Key Data Points</h3>  
<div className="my-6">
  <img 
    src="/truss-docs/img/4 - Insights - Filter specific value.png"
    alt="Data Point Selection"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

By hovering over specific day value points, you can:
<ul className="list-disc pl-6 my-4">
  <li>See exact percentages for that item on that day</li>
  <li>Identify precise timestamps for significant events</li>
  <li>You can also double-click that node and add that category item to the Filters panel.</li>
</ul>

### { /* Applying Filters */ }
<h3 className="text-2xl font-semibold mb-4 text-blue-800">Applying Filters</h3>  
<div className="my-6">
  <img 
    src="/truss-docs/img/5 - Insights to Products - Filter Selection.png"
    alt="Filter Application"
    className="rounded-lg shadow-lg w-full max-w-4xl mx-auto" 
  />
</div>

Once a particular item is filtered, we navigate to the Products section to see the detailed intelligence for that item:
<ul className="list-disc pl-6 my-4">
  <li>Use the Filters panel to select categories of interest</li>
  <li>In this case, we've filtered to show only Malware-related intelligence</li>
  <li>This filtered view can be carried over to the Products section for detailed analysis</li>
</ul>

## { /* Interactive Analysis Tips */ }
<h2 className="text-3xl font-bold mt-12 mb-6 border-b pb-2">Interactive Analysis Tips</h2>

### { /* Making the Most of Visualizations */ }
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Making the Most of Visualizations</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="font-semibold">Hover and Click:</span> Interact with data points to reveal detailed information</li>
      <li><span className="font-semibold">Time Navigation:</span> Identify specific dates of activity</li>
      <li><span className="font-semibold">Category Toggle:</span> Click legend items to show/hide specific categories</li>
      <li><span className="font-semibold">Filter Combinations:</span> Combine multiple filters for complex analysis</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Pattern Recognition</h3>
    <p className="mb-2 font-medium">Watch for:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Sudden spikes in activity</li>
      <li>Correlations between categories</li>
      <li>Cyclical patterns</li>
      <li>Long-term trends</li>
    </ul>
  </div>
</div>

## { /* Pro Tips for Daily Analysis */ }
<h2 className="text-3xl font-bold mt-12 mb-6 border-b pb-2">Pro Tips for Daily Analysis</h2>
<div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
  <ul className="list-disc pl-6 space-y-3">
    <li>Start with the full view to get context</li>
    <li>Look for intersections between different categories</li>
    <li>Save important filter combinations</li>
    <li>Track daily changes in key categories</li>
    <li>Use the percentage indicators to gauge severity</li>
  </ul>
</div>

<div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100 text-center">
  <p className="text-lg font-medium text-blue-800">
    Remember, the Insights Dashboard is your first step in understanding the security landscape. Use these visualizations to guide your investigation and inform your security decisions.
  </p>
</div>
