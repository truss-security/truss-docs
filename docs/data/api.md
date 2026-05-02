---
sidebar_position: 2
title: Truss API
toc_min_heading_level: 2
toc_max_heading_level: 3
---

import { codeTabs as CodeTabs } from '@site/src/components/APIExamples/codeTabs';
import { basicSearchExample as BasicSearchExample } from '@site/src/components/APIExamples/basicSearchExample';
import { pagingExample as PagingExample } from '@site/src/components/APIExamples/pagingExamples';
import { dateSearchExample as DateSearchExample } from '@site/src/components/APIExamples/dateSearchExamples';
import { daysExample as DaysExample } from '@site/src/components/APIExamples/daysExamples';
import { filterExample as FilterExample } from '@site/src/components/APIExamples/filterExamples';
import { filteredQueryExample as FilteredQueryExample, nextPageExample as NextPageExample } from '@site/src/components/APIExamples/lastEvaluatedKeyExamples';

<div className="text-center">
  <h1 className="text-3xl font-bold mb-4 max-w-4xl">Using the API</h1>
</div>

<div className="text-left mb-12">
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4">
    The public Truss API is HTTPS JSON. The main data access path is <code>POST /product/search</code>, which accepts <strong>FilterQL</strong> in <code>filterExpression</code> plus optional time range and pagination fields. You can also load a single product with <code>GET /product/:id</code> (numeric id or <code>truss_prod_id</code>).
  </p>
  <p className="text-xl italic text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
    For the live contract (schemas, examples, try-it-out), open the <a href="/api" className="underline">API reference</a>. For typed clients, use <a href="/data/sdk" className="underline"><code>@truss-security/truss-sdk</code></a>.
  </p>
</div>

## Authentication and base URL

- **Base URL:** <code>https://api.truss-security.com</code>
- **Header:** <code>x-api-key: &lt;your API key&gt;</code> on every request
- **Content-Type:** <code>application/json</code> for POST bodies

## Product search (`POST /product/search`)

The body is a single JSON object. Allowed keys include:

| Field | Purpose |
|--------|---------|
| <code>filterExpression</code> | Optional **FilterQL** string (see below). Omit or use an empty string for no attribute filter. |
| <code>startDate</code> / <code>endDate</code> | Optional time window on product <code>timestamp</code> (string or Unix **milliseconds**). If you pass <code>endDate</code>, you must also pass <code>startDate</code> or <code>days</code>. |
| <code>days</code> | Optional non-negative number; when **greater than zero**, the window start is derived from “now minus N days” (and interacts with explicit dates per server rules). |
| <code>page</code> | 1-based page index (default <code>1</code>). |
| <code>limit</code> | Page size (integer ≥ 1; the server applies an effective maximum—see OpenAPI). |
| <code>order_by</code> | One of: <code>pub_date</code>, <code>downloads</code>, <code>rating</code>, <code>timestamp</code> (optional; defaults apply). |
| <code>order_direction</code> | <code>asc</code> or <code>desc</code> (optional). |

Successful responses include <code>products</code>, <code>total</code>, <code>page</code>, <code>limit</code>, and <code>hasMore</code>. Product objects use **snake_case** fields (for example <code>pub_date</code>, <code>truss_prod_id</code>).

<CodeTabs example={BasicSearchExample} />

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Search by date

Supported time filters:

- <code>startDate</code> — products with <code>timestamp</code> on or after this instant.
- <code>endDate</code> — on or before this instant (requires <code>startDate</code> or <code>days</code>).
- <code>days</code> — rolling window when set to a **positive** number; <code>0</code> is accepted but does not apply a “last N days” window.

Date values can be ISO strings, human-readable strings, or Unix epoch **milliseconds** as a number. The API normalizes to UTC.

<CodeTabs example={DateSearchExample} />

When <code>days</code> &gt; 0, the server derives the start of the time window from the current time; explicit <code>startDate</code> / <code>endDate</code> still participate according to validation rules—prefer one mental model: either a **fixed range** (<code>startDate</code> + <code>endDate</code>) or a **rolling window** (<code>days</code>), and test edge cases in the <a href="/api">explorer</a> if you combine fields.

<CodeTabs example={DaysExample} />

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## FilterQL (attribute filters)

Use **FilterQL** in <code>filterExpression</code> to filter on attributes such as <code>category</code>, <code>source</code>, <code>type</code>, <code>title</code>, <code>author</code>, <code>industry</code>, <code>region</code>, <code>reference</code>, <code>tags</code>, <code>validators</code>, and <code>indicators</code>.

- Combine predicates with <code>AND</code> / <code>OR</code>.
- Compare with <code>=</code>, <code>!=</code>, and <code>LIKE</code> where supported.
- **OR within one attribute:** e.g. two categories—<code>category = 'Ransomware' OR category = 'OSINT'</code>.
- **AND across attributes:** e.g. <code>category = 'Ransomware' AND source = 'TOR Project'</code>.

<CodeTabs example={FilterExample} />

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Pagination

Pagination is **page-based**, not cursor-based. Increase <code>page</code> while <code>hasMore</code> is true. Reuse the same filter and <code>limit</code> for each page.

<CodeTabs example={PagingExample} />

### Example: filtered query

<CodeTabs example={FilteredQueryExample} />

### Example: next page

Use the same body as before but increment <code>page</code>.

<CodeTabs example={NextPageExample} />

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Single product (`GET /product/:id`)

Returns a JSON body with a top-level <code>product</code> object—the same snake_case shape as rows in <code>POST /product/search</code>. The path parameter is either the numeric <code>id</code> or the string <code>truss_prod_id</code> (ULID). Use the SDK helper <code>search.product(id)</code> to unwrap the body to a typed object.

```bash
curl -sS "https://api.truss-security.com/product/01ARZ3NDEKTSV4RRFFQ69G5FAV" \
  -H "x-api-key: YOUR_KEY"
```

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## STIX

Public STIX endpoints (same API key):

- <code>GET /product/:id/stix</code> — STIX bundle for one product (numeric id or ULID <code>truss_prod_id</code>).
- <code>POST /product/search/stix</code> — search with the same filter/date fields as JSON search; STIX responses include pagination-related headers documented in OpenAPI.

Example (body is the same shape as JSON search; response is <code>application/stix+json</code>):

```bash
curl -sS -X POST "https://api.truss-security.com/product/search/stix" \
  -H "x-api-key: YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d @- <<'EOF' | jq .
{
  "filterExpression": "",
  "page": 1,
  "limit": 10,
  "startDate": "2026-04-25T17:45:00.000Z",
  "endDate": "2026-05-02T17:45:59.999Z"
}
EOF
```

Use <code>@truss-security/truss-sdk</code> helpers <code>search.productStix</code> and <code>search.productsStix</code> if you prefer TypeScript.

<div className="relative my-12">
  <div className="absolute inset-0 flex items-center" aria-hidden="true">
    <div className="w-full border-t border-gray-300 dark:border-gray-600" />
  </div>
  <div className="relative flex justify-center">
    <span className="bg-white dark:bg-[var(--ifm-background-color)] px-3 text-base text-gray-500">•</span>
  </div>
</div>

## Tips

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg shadow-md border border-green-100 dark:border-green-900/40 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Requests</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Prefer small <code>limit</code> values while prototyping, then page with <code>hasMore</code></li>
      <li>Keep FilterQL readable; build complex filters in the SDK with the <code>filter</code> helper</li>
      <li>Validate date assumptions in the <a href="/api">OpenAPI UI</a> against your timezone</li>
    </ul>
  </div>

  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg shadow-md border border-green-900/40 my-6">
    <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Security</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Treat API keys like passwords; never commit them</li>
      <li>Use retries with backoff for <code>429</code> and transient <code>5xx</code> (the SDK does this)</li>
      <li>Log request ids or timestamps when reporting failures to support</li>
    </ul>
  </div>
</div>

<div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-lg shadow-md border border-blue-100 dark:border-blue-900/40 text-center">
  <p className="text-lg font-medium text-blue-800 dark:text-blue-200">
    The <a href="/api" className="underline">interactive reference</a> stays aligned with the public SDK and production routes.
  </p>
</div>
