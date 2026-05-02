---
sidebar_position: 1
title: Overview
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-3xl font-bold mb-4 max-w-4xl">Security products</h1>
</div>

<div className="text-left mb-12">
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4">
    Truss delivers current security data and actionable intelligence. The network helps experts share and consume data through a secure, straightforward HTTP API.
  </p>
  <p className="text-xl italic text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
    Truss connects organizations to the intelligence they need, when they need it.
  </p>
</div>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Truss API

<p className="text-lg mb-6">
  The <a href="/data/api" className="text-blue-600 dark:text-blue-400 underline">API guide</a> describes how to call the public Truss HTTP API. Requests are authenticated with an API key (<code>x-api-key</code>). Product search uses <strong>FilterQL</strong> in the JSON field <code>filterExpression</code> (plus optional date and pagination fields). A single product can be loaded with <code>GET /product/:id</code> (JSON) or <code>GET /product/:id/stix</code>. For an interactive contract, use the <a href="/api" className="text-blue-600 dark:text-blue-400 underline">OpenAPI explorer</a>.
</p>

<p className="text-lg mb-6">
  Use the <a href="/data/sdk" className="text-blue-600 dark:text-blue-400 underline">TypeScript SDK</a> (<code>@truss-security/truss-sdk</code>) for typed clients, FilterQL helpers, retries, and STIX helpers—ideal for apps, pipelines, and automation.
</p>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Truss products

<p className="text-lg mb-6">
  A <strong>product</strong> is a unit of security content in Truss (reports, feeds, and similar). Data is indexed for search and returned as structured JSON (and optionally STIX). Field names in API JSON use <strong>snake_case</strong> (for example <code>pub_date</code>, <code>truss_prod_id</code>).
</p>

<p className="text-lg mb-6">
  Typical fields include:
</p>

<ul className="list-disc pl-6 my-4">
  <li><span className="font-semibold">id</span> — Numeric primary key.</li>
  <li><span className="font-semibold">truss_prod_id</span> — Stable product identifier (ULID string).</li>
  <li><span className="font-semibold">version</span> / <span className="font-semibold">latest_version</span> — Versioning when content is updated.</li>
  <li><span className="font-semibold">timestamp</span> — When the record was created in Truss (API responses serialize as ISO timestamps).</li>
  <li><span className="font-semibold">title</span> — Display title.</li>
  <li><span className="font-semibold">type</span>, <span className="font-semibold">category</span>, <span className="font-semibold">source</span> — Classification and provenance.</li>
  <li><span className="font-semibold">pub_date</span> — Publication date when available.</li>
  <li><span className="font-semibold">author</span>, <span className="font-semibold">industry</span>, <span className="font-semibold">region</span>, <span className="font-semibold">tags</span>, <span className="font-semibold">reference</span>, <span className="font-semibold">validators</span> — Arrays of related metadata.</li>
  <li><span className="font-semibold">indicators</span> — Map of indicator type → string values.</li>
  <li><span className="font-semibold">downloads</span>, <span className="font-semibold">rating</span>, <span className="font-semibold">indicators_hash</span> — Optional analytics fields when present.</li>
</ul>

<p className="text-lg mb-6">
  Filter and slice products with <strong>FilterQL</strong> in <code>filterExpression</code> (see the <a href="/data/api" className="text-blue-600 dark:text-blue-400 underline">API guide</a>). The API and SDK use the same attribute names for filtering.
</p>

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Getting started

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg shadow-md border border-green-100 dark:border-green-900/40 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">First steps</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Read the <a href="/data/api" className="underline">API guide</a> and try the <a href="/api" className="underline">OpenAPI explorer</a></li>
      <li>Install <code>@truss-security/truss-sdk</code> for TypeScript (see <a href="/data/sdk" className="underline">SDK</a>)</li>
      <li>Start with a narrow date range or small <code>limit</code>, then widen</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg shadow-md border border-green-100 dark:border-green-900/40 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Best practices</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Keep API keys secret; prefer environment variables</li>
      <li>Use pagination (<code>page</code> / <code>hasMore</code>) for large result sets</li>
      <li>Handle errors and rate limits in your client</li>
      <li>Cache only where it matches your freshness needs</li>
    </ul>
  </div>
</div>

<div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg shadow-md border border-blue-100 dark:border-blue-900/40 text-center">
  <p className="text-lg font-medium text-blue-800 dark:text-blue-200">
    The Truss API is the supported way to access Truss intelligence in your own tools and workflows.
  </p>
</div>
