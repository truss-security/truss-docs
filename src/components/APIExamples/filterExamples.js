export const filterExample = {
  curl: `curl -sS -X POST "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d @- <<'EOF' | jq .
{
  "days": 7,
  "filterExpression": "(category = 'Ransomware' OR category = 'OSINT') AND source = 'TOR Project'",
  "limit": 10
}
EOF`,

  javascript: `const YOUR_API_KEY = 'YOUR_API_KEY';

async function searchWithFilters() {
  const res = await fetch('https://api.truss-security.com/product/search', {
    method: 'POST',
    headers: {
      'x-api-key': YOUR_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      days: 7,
      filterExpression:
        "(category = 'Ransomware' OR category = 'OSINT') AND source = 'TOR Project'",
      limit: 10,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}`,

  python: `import requests

API_KEY = 'YOUR_API_KEY'

def search_with_filters():
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
    }
    data = {
        'days': 7,
        'filterExpression': "(category = 'Ransomware' OR category = 'OSINT') AND source = 'TOR Project'",
        'limit': 10,
    }
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()`,

  ruby: `require 'net/http'
require 'uri'
require 'json'

API_KEY = 'YOUR_API_KEY'

def search_with_filters
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  request = Net::HTTP::Post.new(uri)
  request['x-api-key'] = API_KEY
  request['Content-Type'] = 'application/json'
  request.body = {
    days: 7,
    filterExpression: "(category = 'Ransomware' OR category = 'OSINT') AND source = 'TOR Project'",
    limit: 10
  }.to_json
  response = http.request(request)
  JSON.parse(response.body)
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

func searchWithFilters() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    body := map[string]interface{}{
        "days": 7,
        "filterExpression": "(category = 'Ransomware' OR category = 'OSINT') AND source = 'TOR Project'",
        "limit": 10,
    }
    jsonData, err := json.Marshal(body)
    if err != nil {
        return nil, err
    }
    req, err := http.NewRequest("POST", url, bytes.NewReader(jsonData))
    if err != nil {
        return nil, err
    }
    req.Header.Set("x-api-key", apiKey)
    req.Header.Set("Content-Type", "application/json")
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()
    b, err := io.ReadAll(resp.Body)
    if err != nil {
        return nil, err
    }
    var out map[string]interface{}
    if err := json.Unmarshal(b, &out); err != nil {
        return nil, err
    }
    return out, nil
}`,

  rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn search_with_filters() -> Result<Value> {
    let client = Client::new();
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "days": 7,
            "filterExpression": "(category = 'Ransomware' OR category = 'OSINT') AND source = 'TOR Project'",
            "limit": 10
        }))
        .send()
        .await?;
    Ok(response.json().await?)
}`,
};
