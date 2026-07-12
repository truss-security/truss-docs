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
    The Truss MCP endpoint lets AI agents query Truss threat intelligence through structured tools. Connect with <strong>OAuth</strong> (recommended) so your agent opens a browser, you sign in to Truss, and you approve access—no API key in the client config.
  </p>
  <p className="text-xl italic text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
    MCP is best for agent workflows that need safe, structured threat-intelligence lookups instead of natural-language scraping.
  </p>
</div>

## Before you start

- A Truss account at <a href="https://dashboard.truss-security.com" className="underline">dashboard.truss-security.com</a>
- A **Growth** or **Scale** plan (Community cannot approve MCP access)
- An MCP host that supports remote HTTP servers and OAuth (for example, Cursor)

**MCP endpoint:** <code>https://api.truss-security.com/mcp</code>

## Connect with OAuth (recommended)

Modern MCP clients discover how to authenticate automatically. You only need the MCP URL—no API key in the config.

OAuth is not complete until you **approve the connection in the Truss dashboard**. Your MCP host starts the flow, but Truss requires you to sign in and explicitly allow access before any tools can run.

### What happens when you connect

1. Your agent or MCP host contacts <code>https://api.truss-security.com/mcp</code>.
2. Truss responds with OAuth discovery metadata.
3. Your browser opens to the Truss dashboard.
4. If you are not signed in, log in at <a href="https://dashboard.truss-security.com/login" className="underline">dashboard.truss-security.com</a>. You are returned to the consent screen automatically.
5. On the **Connect Truss MCP** consent page, review which client is requesting access and your plan.
6. Click **Allow access** to authorize the connection, or **Deny** to cancel.
7. The browser redirects back to your MCP host. The host stores tokens and can call Truss tools on your behalf.

You do not need a separate dashboard step before connecting—consent happens in the browser the first time your host requests authentication (and again if you reconnect or tokens expire).

### Approve access in the dashboard

When OAuth starts, you should land on a Truss page titled **Connect Truss MCP** at <code>dashboard.truss-security.com/oauth/consent</code>.

On that screen you will see:

- The **MCP client name** requesting access (for example, your IDE or agent host)
- Your **Truss plan** (Growth or Scale is required to approve)
- **Allow access** and **Deny** buttons

Click **Allow access** only if you recognize the client and want it to query Truss on your behalf. If you deny the request, return to your MCP host and click **Connect** again when you are ready.

Community accounts can view the request but cannot approve it. Upgrade on the dashboard **Billing** page, then retry **Connect** in your MCP host.

### Configure Cursor

1. Open **Cursor Settings → Tools & MCP** (or edit <code>.cursor/mcp.json</code> / <code>~/.cursor/mcp.json</code>).
2. Add the Truss remote server:

```json
{
  "mcpServers": {
    "truss-security": {
      "url": "https://api.truss-security.com/mcp"
    }
  }
}
```

3. Save the file. In **Tools & MCP**, Truss should appear—often labeled as needing authentication.
4. Click **Connect** (or invoke a Truss tool from chat). Your browser opens to the Truss dashboard consent screen.
5. Sign in if prompted, then on **Connect Truss MCP** click **Allow access**.
6. Return to Cursor. Confirm Truss tools are listed and ready.

Example prompts after connecting:

- “Use Truss to search for recent Malware products from the last 7 days.”
- “Look up this domain in Truss: example.com”

### Configure other OAuth-capable MCP clients

If your host supports remote Streamable HTTP + OAuth, point it at the same URL and complete the browser consent flow when prompted:

```json
{
  "url": "https://api.truss-security.com/mcp"
}
```

Choose **HTTP** or **Streamable HTTP** if the client asks for a transport type. Do not add custom OAuth scopes unless your client documentation requires them—Truss discovers authorization through standard MCP protected-resource metadata.

## Connect with an API key (alternative)

Use an API key when your MCP host does not support remote OAuth yet (common with local bridges such as <code>mcp-remote</code>), or when you prefer key-based automation.

- Use the same API key as the Truss REST API
- Send it as <code>x-api-key</code>
- Community keys cannot call MCP

### Claude Desktop (API key bridge)

Claude Desktop expects a local command-based MCP entry. Bridge to the remote endpoint with <code>mcp-remote</code> in <code>claude_desktop_config.json</code>:

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

Fully quit and restart Claude Desktop after changing the config. Keep the key in the host env block or a secret store—do not commit it to a repository.

### Other clients with static headers

```json
{
  "url": "https://api.truss-security.com/mcp",
  "headers": {
    "x-api-key": "YOUR_TRUSS_API_KEY"
  }
}
```

Many clients add protocol headers automatically. If yours does not, also set:

- <code>Accept: application/json, text/event-stream</code>
- <code>Content-Type: application/json</code>

## Available tools

| Tool | Use it for |
| ---- | ---------- |
| <code>lookup_ioc</code> | Check one IP, domain, URL, MD5, SHA-1, or SHA-256 value against Truss products. |
| <code>search_threats</code> | Search products by structured fields such as category, region, source, tags, author, type, and date range. |
| <code>get_product</code> | Fetch one product as JSON after search returns an <code>id</code> or <code>truss_prod_id</code>. |
| <code>get_product_stix</code> | Fetch one product as a STIX 2.1 bundle. |
| <code>search_stix</code> | Search products and return a STIX 2.1 bundle for interoperable security tooling. |

Search tools default to the last 7 days and small result sets. You can override with fields such as <code>days</code>, <code>startDate</code>, <code>endDate</code>, <code>page</code>, and <code>limit</code>.

## Tips

- Prefer **OAuth** for interactive agents so credentials stay out of config files.
- Start with <code>lookup_ioc</code> when you have a concrete indicator.
- Use <code>search_threats</code> for analyst-style discovery and summaries.
- Call <code>get_product</code> after a search when you need full JSON detail.
- Use STIX tools only when your workflow expects STIX 2.1 objects.
- Keep <code>limit</code> small in agent workflows so responses fit comfortably in model context.

## Troubleshooting

| Symptom | What to try |
| ------- | ----------- |
| Browser never shows **Connect Truss MCP** | Click **Connect** again in your MCP host. Check that pop-ups are allowed and you are signing in at dashboard.truss-security.com. |
| Consent page says your plan cannot approve MCP | Upgrade to Growth or Scale on the dashboard **Billing** page, then retry **Connect**. |
| Browser opens but tools never appear | Finish **Allow access** on the dashboard consent page, then reload MCP in the host. Use the same Truss account that holds your plan. |
| <code>401</code> / needs authentication | For OAuth hosts, click **Connect** again and complete dashboard consent. For API key setups, confirm <code>x-api-key</code> is set and valid. |
| Community account denied | MCP requires Growth or Scale. |

## Related docs

- [Truss API](./api.md) — REST search, FilterQL, dates, and pagination.
- [Truss SDK](./sdk.md) — TypeScript client for application and pipeline integrations.
