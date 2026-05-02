---
sidebar_position: 3
title: Truss SDK
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-3xl font-bold mb-4 max-w-4xl">Truss TypeScript SDK</h1>
</div>

<div className="text-left mb-12">
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4">
    <code>@truss-security/truss-sdk</code> is the official client for the <strong>public</strong> Truss HTTP API. It uses native <code>fetch</code>, typed requests and responses, optional retries, and helpers for FilterQL and STIX.
  </p>
</div>

## Installation

Requires **Node.js 18+** (built-in <code>fetch</code>).

```bash
npm install @truss-security/truss-sdk
```

## Quick start

```typescript
import { TrussClient, filter } from '@truss-security/truss-sdk';

const truss = new TrussClient({
  baseUrl: 'https://api.truss-security.com',
  apiKey: process.env.TRUSS_API_KEY!,
});

const results = await truss.search.products({
  filter: filter.and(
    filter.eq('category', 'Malware'),
    filter.notEq('source', 'Example Source')
  ),
  days: 7,
  limit: 10,
});

console.log(results.products, results.total, results.hasMore);
```

You can pass raw FilterQL instead of building a <code>filter</code> AST:

```typescript
await truss.search.products({
  filterExpression: "category = 'Phishing' AND source = 'OpenPhish'",
  startDate: '2025-01-01',
  endDate: '2025-01-31',
  page: 1,
  limit: 10,
});
```

## Public API surface

The client exposes <code>truss.search</code>:

- <code>products(params)</code> — <code>POST /product/search</code>; JSON product hits and <code>hasMore</code> pagination.
- <code>productsAll(params, options?)</code> — same search, flattened into one array; optional <code>maxPages</code> cap.
- <code>iterProducts(params, options?)</code> — async iterator for ingestion; optional <code>maxPages</code>.
- <code>product(id)</code> — <code>GET /product/:id</code>; one JSON product (numeric id or <code>truss_prod_id</code> string).
- <code>productStix(id)</code> — <code>GET /product/:id/stix</code> (numeric id or <code>truss_prod_id</code> string).
- <code>productsStix(params)</code> — <code>POST /product/search/stix</code>; STIX bundle plus optional pagination headers.

## Filters (FilterQL)

Use the <code>filter</code> helper to build a typed AST, then let the SDK serialize it to <code>filterExpression</code> on the wire:

```typescript
import { filter } from '@truss-security/truss-sdk';

const ast = filter.and(
  filter.eq('category', 'Malware'),
  filter.like('title', 'ransomware')
);
// Or: filter.expression(ast) if you only need the string
```

Supported attributes include <code>category</code>, <code>source</code>, <code>type</code>, <code>title</code>, <code>author</code>, <code>industry</code>, <code>region</code>, <code>reference</code>, <code>tags</code>, <code>validators</code>, and <code>indicators</code> (see package exports for the full <code>ProductAttribute</code> union).

## Pagination

Search is **page-based**: responses include <code>page</code>, <code>limit</code>, <code>total</code>, and <code>hasMore</code>. The server caps effective page size (see API reference). Prefer <code>iterProducts</code> or <code>productsAll</code> instead of hand-rolling loops when you need every row.

```typescript
for await (const product of truss.search.iterProducts({ days: 7, limit: 10 })) {
  await indexProduct(product);
}
```

## STIX

```typescript
const bundle = await truss.search.productStix('01JEMBFNT12JV97ZT3GVBF2X2J');

const stixPage = await truss.search.productsStix({
  filterExpression: "category = 'Malware'",
  days: 14,
  limit: 10,
});
```

## Configuration and errors

```typescript
const truss = new TrussClient({
  baseUrl: 'https://api.truss-security.com',
  apiKey: process.env.TRUSS_API_KEY,
  timeout: 30_000,
  retries: 3,
  retryDelayMs: 250,
  userAgent: 'my-app/1.0',
});

import { TrussApiError, TrussTimeoutError } from '@truss-security/truss-sdk';

try {
  await truss.search.products({ days: 7 });
} catch (e) {
  if (e instanceof TrussApiError) console.error(e.status, e.response?.data);
  else if (e instanceof TrussTimeoutError) console.error('timeout');
  else throw e;
}
```

## Environment variables

Examples and the CLI accept:

- <code>TRUSS_API_KEY</code> — required for calls
- <code>TRUSS_API_URL</code> — optional base URL override

## Examples in the SDK repo

From a clone of <a href="https://github.com/truss-security/truss-sdk" target="_blank" rel="noopener noreferrer">truss-security/truss-sdk</a>:

```bash
cp env.example .env   # set TRUSS_API_KEY
npm install
npm run example              # interactive picker
npm run example:basic
npm run example:typed-filter
npm run example:iterate
npm run example:stix
```

Or without cloning:

```bash
npx -p @truss-security/truss-sdk@latest truss examples --list
```

## More documentation

- [API guide](./api.md) — HTTP, FilterQL, dates, pagination
- [Interactive OpenAPI](/api) — request/response schemas
- SDK README and <code>examples/</code> in the repository
