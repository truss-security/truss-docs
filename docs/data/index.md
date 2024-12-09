---
sidebar_position: 1
title: Truss API Overview
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Security Products</h1>
</div>

<div className="text-center mb-12">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
    Truss is dedicated to delivering the latest security data and actionable intelligence from across the globe. The Truss network offers a means for security experts worldwide to share and access the latest security data.
    Truss further simplifies the sharing process by providing a secure and easy to use API.
  </p>
  <p className="text-xl italic text-gray-600 max-w-3xl mx-auto">
    Truss connects organizations to the security data they need, precisely when they need it, offering a dynamic and responsive approach to threat intelligence.
  </p>
</div>

## { /* Truss API */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Truss API</h2>

<p className="text-lg mb-6">
  At the heart of Truss is its <a href="/data/api" className="text-blue-600 underline">Security API</a>. The API also called a Remote Procedure Call (RPC), provides users with access to an extensive repository of continually populating security data and intelligence.
</p>

<p className="text-lg mb-6">
  The Truss API allows users to query for and extract data from the Truss platform programatically and use that data in their security tools. It also allows for the creation of custom applications that can be used to query Truss more frequently, enabling your security tools to remain up to date with the security data you care about in near real-time.
</p>

## { /* Truss Products */ }
<h2 className="text-3xl font-bold mb-6 border-b pb-2">Truss Products</h2>

<p className="text-lg mb-6">
  Truss Products are collect security data that is uploaded to the Truss platform and returned to requesting users via the Truss RPC.
</p>

<p className="text-lg mb-6">
  The following fields are returned for each product:
</p>

<ul className="list-disc pl-6 my-4">
  <li><span className="font-semibold">id:</span> The unique identifier for the product.</li>
  <li><span className="font-semibold">version:</span> The version of the product. If the same security product is updated over time, the version will increment.</li>
  <li><span className="font-semibold">latestVersion:</span> The latest version of the product.</li>
  <li><span className="font-semibold">*timestamp:</span> The timestamp of when the product was created in the Truss database.</li>
  <li><span className="font-semibold">*title:</span> The title of the product.</li>
  <li><span className="font-semibold">*author:</span> The authors of the product.</li>
  <li><span className="font-semibold">*type:</span> The type of the product. Currently, the only type is "Indicator".</li>
  <li><span className="font-semibold">*category:</span> The category of the product.</li>
  <li><span className="font-semibold">*source:</span> The source of the product.</li>
  <li><span className="font-semibold">*pubDate:</span> The publication date of the product.</li>
  <li><span className="font-semibold">*reference:</span> The reference URLs of the product.</li>
  <li><span className="font-semibold">*tags:</span> The tags associated with the product.</li>
  <li><span className="font-semibold">*industry:</span> The industries associated with the product.</li>
  <li><span className="font-semibold">*region:</span> The regions associated with the product.</li>
  <li><span className="font-semibold">*indicators:</span> The indicators associated with the product.</li>
  <li><span className="font-semibold">*contributor:</span> The security team or individual that contributed the product.</li>
</ul>

<p className="text-lg mb-6">
  <span className="font-semibold text-xl">*</span> <i className="text-base">These fields can be used as query parameters within both the Truss RPC and the Truss Dashboard, allowing for flexible and powerful data filtering capabilities.</i>
</p>

## { /* Getting Started */ }
<h2 className="text-3xl font-bold mt-12 mb-6 border-b pb-2">Getting Started</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Navigation Tips</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Start with basic date-based queries</li>
      <li>Explore different filter combinations</li>
      <li>Use the API documentation as reference</li>
      <li>Test queries with small date ranges first</li>
    </ul>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Best Practices</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Always include error handling</li>
      <li>Cache responses when appropriate</li>
      <li>Use pagination for large datasets</li>
      <li>Keep your API key secure</li>
    </ul>
  </div>
</div>

<div className="mt-12 p-6 bg-blue-50 rounded-lg shadow-md border border-blue-100 text-center">
  <p className="text-lg font-medium text-blue-800">
    The Truss API is your gateway to accessing comprehensive security intelligence data, enabling you to make informed decisions and protect your organization effectively.
  </p>
</div>