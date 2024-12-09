export const basicSearchExample = {
    curl: `curl -X 'POST' \\
  "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "days": 2
  }'`,

    javascript: `import axios from 'axios';

const YOUR_API_KEY = 'YOUR_API_KEY';

async function searchProducts() {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://api.truss-security.com/product/search',
      headers: { 
        'x-api-key': YOUR_API_KEY,
        'Content-Type': 'application/json'
      },
      data: {
        days: 2
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`,

    python: `import requests
import json

API_KEY = 'YOUR_API_KEY'

def search_products():
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
    data = {
        'days': 2
    }
    
    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        raise`,

    ruby: `require 'net/http'
require 'uri'
require 'json'

API_KEY = 'YOUR_API_KEY'

def search_products
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  
  request = Net::HTTP::Post.new(uri)
  request['x-api-key'] = API_KEY
  request['Content-Type'] = 'application/json'
  request.body = { days: 2 }.to_json
  
  begin
    response = http.request(request)
    JSON.parse(response.body)
  rescue StandardError => e
    puts "Error: #{e.message}"
    raise
  end
end`,

    go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

const apiKey = "YOUR_API_KEY"

type SearchRequest struct {
    Days int \`json:"days"\`
}

func searchProducts() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    data := SearchRequest{Days: 2}
    
    jsonData, err := json.Marshal(data)
    if err != nil {
        return nil, fmt.Errorf("error marshaling JSON: %v", err)
    }
    
    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    if err != nil {
        return nil, fmt.Errorf("error creating request: %v", err)
    }
    
    req.Header.Set("x-api-key", apiKey)
    req.Header.Set("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        return nil, fmt.Errorf("error making request: %v", err)
    }
    defer resp.Body.Close()
    
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return nil, fmt.Errorf("error reading response: %v", err)
    }
    
    var result map[string]interface{}
    if err := json.Unmarshal(body, &result); err != nil {
        return nil, fmt.Errorf("error parsing response: %v", err)
    }
    
    return result, nil
}`,

    rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn search_products() -> Result<Value> {
    let client = Client::new();
    
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "days": 2
        }))
        .send()
        .await?;
    
    let data = response.json::<Value>().await?;
    Ok(data)
}`,

    rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn search_products() -> Result<Value> {
    let client = Client::new();
    
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "days": 2
        }))
        .send()
        .await?;
    
    let data = response.json::<Value>().await?;
    Ok(data)
}`,

    rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn search_products() -> Result<Value> {
    let client = Client::new();
    
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "days": 2
        }))
        .send()
        .await?;
    
    let data = response.json::<Value>().await?;
    Ok(data)
}`
};