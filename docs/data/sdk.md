---
sidebar_position: 3
title: Truss SDK Guide
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-4xl font-bold mb-4">Truss TypeScript SDK</h1>
</div>

<div className="text-center mb-12">
  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
    The Truss SDK provides a simple and type-safe way to interact with the Truss API from TypeScript/JavaScript applications.
    It handles authentication, request formatting, and response parsing, allowing you to focus on using the security data in your application.
  </p>
</div>

## Installation

```bash
npm install @truss-security/sdk
```

## Quick Start

```typescript
import { TrussSDK } from '@truss-security/sdk';

const sdk = new TrussSDK({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.truss-security.com'
});

// Basic search example
const results = await sdk.searchProducts({
  category: ['malware'],
  tags: ['ransomware'],
  days: 7
});
```

## Examples

The SDK comes with several example files demonstrating common usage patterns. You can find these in the `examples/` directory of the SDK repository:

### Basic Search

The [`basic-search.ts`](https://github.com/truss/truss-sdk/blob/main/examples/basic-search.ts) example shows how to perform simple searches with the SDK:

```typescript
const searchFilter = {
  category: ['malware'],
  tags: ['ransomware', 'critical'],
  days: 7 // Last 30 days
};

const results = await sdk.searchProducts(searchFilter);
```

### Date-Based Search

The [`date-search.ts`](https://github.com/truss/truss-sdk/blob/main/examples/date-search.ts) example demonstrates different ways to search by date:

```typescript
// Search by date range
const dateRangeFilter = {
  startdate: '2024-06-02',
  enddate: '2024-06-03',
  category: ['malware']
};

// Search by days
const daysFilter = {
  days: 7, // Last 7 days
  category: ['web']
};
```

### Boolean Filters

The [`filter-search.ts`](https://github.com/truss/truss-sdk/blob/main/examples/filter-search.ts) example shows how to use OR and AND filtering:

```typescript
// OR filtering within a parameter
const orFilter = {
  category: ['ransomware', 'osint'], // Will match either category
  days: 7
};

// AND filtering across parameters
const andFilter = {
  category: ['ransomware'],
  source: ['TOR Project'],
  industry: ['finance'],
  region: ['europe'],
  tags: ['C2', 'AlphV']
};
```

### Pagination

The [`pagination.ts`](https://github.com/truss/truss-sdk/blob/main/examples/pagination.ts) example demonstrates how to handle large result sets:

```typescript
let lastKey = undefined;
const filter = {
  category: ['web'],
  tags: ['critical'],
  days: 7
};

do {
  const searchFilter = {
    ...filter,
    LastEvaluatedKey: lastKey
  };

  const results = await sdk.searchProducts(searchFilter);
  // Process results...
  
  lastKey = results.data.lastEvaluatedKey;
} while (lastKey);
```

## API Reference

The SDK provides TypeScript types for all request and response objects. The main types you'll work with are:

- `SearchFilter`: Defines the parameters available for searching
- `Product`: Represents a security product in the response
- `SearchResponse`: The complete response from a search request

For detailed API documentation, see the [API Guide](./api.md).

## Best Practices

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Error Handling</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Always wrap SDK calls in try/catch blocks</li>
      <li>Check response status codes</li>
      <li>Handle rate limiting gracefully</li>
      <li>Log errors appropriately</li>
    </ul>
  </div>

  <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-green-100">
    <h3 className="text-xl font-bold mb-4 text-blue-800">Performance Tips</h3>
    <ul className="list-disc pl-6 space-y-2">
      <li>Use pagination for large result sets</li>
      <li>Cache results when appropriate</li>
      <li>Limit search ranges when possible</li>
      <li>Reuse the SDK instance</li>
    </ul>
  </div>
</div>

## Environment Variables

The SDK looks for the following environment variables:

- `TRUSS_API_KEY`: Your Truss API key
- `TRUSS_API_URL`: The Truss API URL (defaults to https://api.truss-security.com)

You can also provide these values directly when initializing the SDK.

## Contributing

The SDK is open source and we welcome contributions! Please see our [Contributing Guide](https://github.com/truss/truss-sdk/blob/main/CONTRIBUTING.md) for details. 