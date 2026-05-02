export const filteredQueryExample = {
  curl: `curl -sS -X POST "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d @- <<'EOF' | jq .
{
  "startDate": "2024-12-01",
  "endDate": "2024-12-31",
  "filterExpression": "source = 'OpenPhish'",
  "page": 1,
  "limit": 10
}
EOF`,

  javascript: `const YOUR_API_KEY = 'YOUR_API_KEY';

async function filteredSearch() {
  const res = await fetch('https://api.truss-security.com/product/search', {
    method: 'POST',
    headers: {
      'x-api-key': YOUR_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      filterExpression: "source = 'OpenPhish'",
      page: 1,
      limit: 10,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}`,

  python: `import requests

API_KEY = 'YOUR_API_KEY'

def filtered_search():
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
    }
    data = {
        'startDate': '2024-12-01',
        'endDate': '2024-12-31',
        'filterExpression': "source = 'OpenPhish'",
        'page': 1,
        'limit': 10,
    }
    r = requests.post(url, headers=headers, json=data)
    r.raise_for_status()
    return r.json()`,

  ruby: `require 'net/http'
require 'uri'
require 'json'

API_KEY = 'YOUR_API_KEY'

def filtered_search
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  request = Net::HTTP::Post.new(uri)
  request['x-api-key'] = API_KEY
  request['Content-Type'] = 'application/json'
  request.body = {
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    filterExpression: "source = 'OpenPhish'",
    page: 1,
    limit: 10
  }.to_json
  response = http.request(request)
  JSON.parse(response.body)
end`,

  go: `package main

import (
    "bytes"
    "encoding/json"
    "io"
    "net/http"
)

const apiKey = "YOUR_API_KEY"

func filteredSearch() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    body := map[string]interface{}{
        "startDate":        "2024-12-01",
        "endDate":          "2024-12-31",
        "filterExpression": "source = 'OpenPhish'",
        "page":             1,
        "limit":            10,
    }
    jsonData, _ := json.Marshal(body)
    req, _ := http.NewRequest("POST", url, bytes.NewReader(jsonData))
    req.Header.Set("x-api-key", apiKey)
    req.Header.Set("Content-Type", "application/json")
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()
    b, _ := io.ReadAll(resp.Body)
    var out map[string]interface{}
    json.Unmarshal(b, &out)
    return out, nil
}`,

  rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn filtered_search() -> Result<Value> {
    let client = Client::new();
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "startDate": "2024-12-01",
            "endDate": "2024-12-31",
            "filterExpression": "source = 'OpenPhish'",
            "page": 1,
            "limit": 10
        }))
        .send()
        .await?;
    Ok(response.json().await?)
}`,
};

export const nextPageExample = {
  curl: `curl -sS -X POST "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d @- <<'EOF' | jq .
{
  "startDate": "2024-12-01",
  "endDate": "2024-12-31",
  "filterExpression": "source = 'OpenPhish'",
  "page": 2,
  "limit": 10
}
EOF`,

  javascript: `const YOUR_API_KEY = 'YOUR_API_KEY';

async function sameSearchNextPage() {
  const res = await fetch('https://api.truss-security.com/product/search', {
    method: 'POST',
    headers: {
      'x-api-key': YOUR_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      filterExpression: "source = 'OpenPhish'",
      page: 2,
      limit: 10,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}`,

  python: `import requests

API_KEY = 'YOUR_API_KEY'

def same_search_next_page():
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json',
    }
    data = {
        'startDate': '2024-12-01',
        'endDate': '2024-12-31',
        'filterExpression': "source = 'OpenPhish'",
        'page': 2,
        'limit': 10,
    }
    r = requests.post(url, headers=headers, json=data)
    r.raise_for_status()
    return r.json()`,

  ruby: `require 'net/http'
require 'uri'
require 'json'

API_KEY = 'YOUR_API_KEY'

def same_search_next_page
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  request = Net::HTTP::Post.new(uri)
  request['x-api-key'] = API_KEY
  request['Content-Type'] = 'application/json'
  request.body = {
    startDate: '2024-12-01',
    endDate: '2024-12-31',
    filterExpression: "source = 'OpenPhish'",
    page: 2,
    limit: 10
  }.to_json
  response = http.request(request)
  JSON.parse(response.body)
end`,

  go: `package main

import (
    "bytes"
    "encoding/json"
    "io"
    "net/http"
)

const apiKey = "YOUR_API_KEY"

func nextPage() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    body := map[string]interface{}{
        "startDate":        "2024-12-01",
        "endDate":          "2024-12-31",
        "filterExpression": "source = 'OpenPhish'",
        "page":             2,
        "limit":            10,
    }
    jsonData, _ := json.Marshal(body)
    req, _ := http.NewRequest("POST", url, bytes.NewReader(jsonData))
    req.Header.Set("x-api-key", apiKey)
    req.Header.Set("Content-Type", "application/json")
    resp, err := http.DefaultClient.Do(req)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()
    b, _ := io.ReadAll(resp.Body)
    var out map[string]interface{}
    json.Unmarshal(b, &out)
    return out, nil
}`,

  rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn next_page() -> Result<Value> {
    let client = Client::new();
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "startDate": "2024-12-01",
            "endDate": "2024-12-31",
            "filterExpression": "source = 'OpenPhish'",
            "page": 2,
            "limit": 10
        }))
        .send()
        .await?;
    Ok(response.json().await?)
}`,
};
