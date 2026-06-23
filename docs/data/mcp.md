---
sidebar_position: 4
title: Truss MCP
toc_min_heading_level: 2
toc_max_heading_level: 3
---

<div className="text-center">
  <h1 className="text-3xl font-bold mb-4 max-w-4xl">Use Truss with MCP</h1>
</div>

<div className="text-left mb-12">
  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-4">
    The Truss MCP endpoint lets AI tools query Truss threat intelligence through structured tools. It uses the same Truss API key as the REST API and exposes the same public search, product detail, and STIX capabilities.
  </p>
  <p className="text-xl italic text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
    MCP is best for agent workflows that need safe, structured threat-intelligence lookups instead of natural-language scraping.
  </p>
</div>

## Endpoint and authentication

- **Endpoint:** <code>https://api.truss-security.com/mcp</code>
- **Method:** <code>POST</code>
- **API key header:** <code>x-api-key: YOUR_KEY</code>
- **Content type:** <code>application/json</code>
- **Accept:** <code>application/json, text/event-stream</code>

Use the same API key you already use for the Truss REST API. Community access is not included for MCP.

## Available tools

| Tool | Use it for |
| ---- | ---------- |
| <code>lookup_ioc</code> | Check one IP, domain, URL, MD5, SHA-1, or SHA-256 value against Truss products. |
| <code>search_threats</code> | Search products by structured fields such as category, region, source, tags, author, type, and date range. |
| <code>get_product</code> | Fetch one product as JSON after search returns an <code>id</code> or <code>truss_prod_id</code>. |
| <code>get_product_stix</code> | Fetch one product as a STIX 2.1 bundle. |
| <code>search_stix</code> | Search products and return a STIX 2.1 bundle for interoperable security tooling. |

Search tools default to the last 7 days and small result sets. You can override with fields such as <code>days</code>, <code>startDate</code>, <code>endDate</code>, <code>page</code>, and <code>limit</code>.

## Configure Claude Desktop

Claude Desktop expects local command-based MCP server entries. Use a remote bridge such as <code>mcp-remote</code> in <code>claude_desktop_config.json</code>:

```json
{
  "mcpServers": {
    "truss-security": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://api.truss-security.com/mcp",
        "--header",
        "x-api-key:${TRUSS_API_KEY}"
      ],
      "env": {
        "TRUSS_API_KEY": "YOUR_TRUSS_API_KEY"
      }
    }
  }
}
```

After changing the config, fully quit and restart Claude Desktop. In a new chat, ask Claude to use Truss, for example: “Use Truss to search for recent Malware products from the last 7 days.”

## Configure other MCP clients

Some MCP hosts support remote Streamable HTTP servers directly. In those clients, configure:

```json
{
  "url": "https://api.truss-security.com/mcp",
  "headers": {
    "x-api-key": "YOUR_TRUSS_API_KEY"
  }
}
```

If your MCP client asks for transport type, choose HTTP or Streamable HTTP. If it lets you add extra headers, add <code>Accept: application/json, text/event-stream</code> and <code>Content-Type: application/json</code>. Many clients add these protocol headers automatically.

Keep the API key in your MCP host's secret store or environment-variable mechanism. Do not commit it to a repository.

## Example JSON-RPC calls

List tools:

```bash
curl -sS -X POST "https://api.truss-security.com/mcp" \
  -H "x-api-key: YOUR_KEY" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "mcp-protocol-version: 2025-03-26" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | jq .
```

Search for recent malware products:

```bash
curl -sS -X POST "https://api.truss-security.com/mcp" \
  -H "x-api-key: YOUR_KEY" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -H "mcp-protocol-version: 2025-03-26" \
  -d @- <<'EOF' | jq .
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "tools/call",
  "params": {
    "name": "search_threats",
    "arguments": {
      "category": "Malware",
      "days": 7,
      "limit": 5
    }
  }
}
EOF
```

Look up an IOC:

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "lookup_ioc",
    "arguments": {
      "indicator_type": "domain",
      "value": "example.com",
      "limit": 5
    }
  }
}
```

## Tips

- Start with <code>lookup_ioc</code> when you have a concrete indicator.
- Use <code>search_threats</code> for analyst-style discovery and summaries.
- Call <code>get_product</code> after a search when you need full JSON detail.
- Use STIX tools only when your workflow expects STIX 2.1 objects.
- Keep <code>limit</code> small in agent workflows so responses fit comfortably in model context.

## Related docs

- [Truss API](./api.md) — REST search, FilterQL, dates, and pagination.
- [Truss SDK](./sdk.md) — TypeScript client for application and pipeline integrations.
