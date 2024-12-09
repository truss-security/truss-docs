export const daysExample = {
    curl: `curl -X 'POST' \\
  "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "days": 3
  }'`,

    javascript: `import axios from 'axios';

const YOUR_API_KEY = 'YOUR_API_KEY';

async function searchByDays() {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://api.truss-security.com/product/search',
      headers: { 
        'x-api-key': YOUR_API_KEY,
        'Content-Type': 'application/json'
      },
      data: {
        days: 3
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

def search_by_days():
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
    data = {
        'days': 3
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

def search_by_days
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  
  request = Net::HTTP::Post.new(uri)
  request['x-api-key'] = API_KEY
  request['Content-Type'] = 'application/json'
  request.body = { days: 3 }.to_json
  
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

type DaysSearchRequest struct {
    Days int \`json:"days"\`
}

func searchByDays() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    data := DaysSearchRequest{Days: 3}
    
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

async fn search_by_days() -> Result<Value> {
    let client = Client::new();
    
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "days": 3
        }))
        .send()
        .await?;
    
    let data = response.json::<Value>().await?;
    Ok(data)
}

#[tokio::main]
async fn main() -> Result<()> {
    match search_by_days().await {
        Ok(data) => println!("Response: {:?}", data),
        Err(e) => eprintln!("Error: {}", e),
    }
    Ok(())
}`
};