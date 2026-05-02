export const pagingExample = {
  curl: `curl -sS -X POST "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d @- <<'EOF' | jq .
{
  "days": 7,
  "limit": 10,
  "page": 1
}
EOF`,

  javascript: `const YOUR_API_KEY = 'YOUR_API_KEY';

async function fetchAllPages(baseBody) {
  const url = 'https://api.truss-security.com/product/search';
  const all = [];
  let page = 1;

  while (true) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'x-api-key': YOUR_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...baseBody, page }),
    });
    if (!res.ok) throw new Error(await res.text());
    const data = await res.json();
    all.push(...data.products);
    if (!data.hasMore) break;
    page += 1;
  }
  return all;
}`,

  python: `import requests

API_KEY = 'YOUR_API_KEY'

def fetch_all_pages(base_body):
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
    }
    all_products = []
    page = 1
    while True:
        body = { **base_body, 'page': page }
        r = requests.post(url, headers=headers, json=body)
        r.raise_for_status()
        data = r.json()
        all_products.extend(data.get('products', []))
        if not data.get('hasMore'):
            break
        page += 1
    return all_products`,

  ruby: `require 'net/http'
require 'uri'
require 'json'

API_KEY = 'YOUR_API_KEY'

def fetch_all_pages(base_body)
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  all_products = []
  page = 1
  loop do
    body = base_body.merge('page' => page)
    request = Net::HTTP::Post.new(uri)
    request['x-api-key'] = API_KEY
    request['Content-Type'] = 'application/json'
    request.body = body.to_json
    response = http.request(request)
    data = JSON.parse(response.body)
    all_products.concat(data['products'] || [])
    break unless data['hasMore']
    page += 1
  end
  all_products
end`,

  go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

const apiKey = "YOUR_API_KEY"

func fetchAllPages(base map[string]interface{}) ([]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    var all []interface{}
    page := 1
    for {
        base["page"] = page
        body, _ := json.Marshal(base)
        req, _ := http.NewRequest("POST", url, bytes.NewReader(body))
        req.Header.Set("x-api-key", apiKey)
        req.Header.Set("Content-Type", "application/json")
        resp, err := http.DefaultClient.Do(req)
        if err != nil {
            return nil, err
        }
        b, _ := io.ReadAll(resp.Body)
        resp.Body.Close()
        var data map[string]interface{}
        if err := json.Unmarshal(b, &data); err != nil {
            return nil, err
        }
        if prods, ok := data["products"].([]interface{}); ok {
            all = append(all, prods...)
        }
        if hm, ok := data["hasMore"].(bool); !ok || !hm {
            break
        }
        page++
    }
    return all, nil
}`,

  rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn fetch_all_pages(mut base: Value) -> Result<Vec<Value>> {
    let client = Client::new();
    let mut all = Vec::new();
    let mut page = 1i64;
    loop {
        base["page"] = json!(page);
        let response = client
            .post("https://api.truss-security.com/product/search")
            .header("x-api-key", API_KEY)
            .header("Content-Type", "application/json")
            .json(&base)
            .send()
            .await?;
        let data: Value = response.json().await?;
        if let Some(arr) = data["products"].as_array() {
            all.extend(arr.iter().cloned());
        }
        if !data["hasMore"].as_bool().unwrap_or(false) {
            break;
        }
        page += 1;
    }
    Ok(all)
}`,
};
