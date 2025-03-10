export const dateSearchExample = {
    curl: `curl -X 'POST' \\
  "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "startDate": "2024-06-02",
    "endDate": "2024-06-03"
  }'`,

    javascript: `import axios from 'axios';

const YOUR_API_KEY = 'YOUR_API_KEY';

async function searchByDate() {
  try {
    const response = await axios({
      method: 'POST',
      url: 'https://api.truss-security.com/product/search',
      headers: { 
        'x-api-key': YOUR_API_KEY,
        'Content-Type': 'application/json'
      },
      data: {
        startDate: "2024-06-02",
        endDate: "2024-06-03"
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

def search_by_date():
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
    data = {
        'startDate': '2024-06-02',
        'endDate': '2024-06-03'
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

def search_by_date
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  
  request = Net::HTTP::Post.new(uri)
  request['x-api-key'] = API_KEY
  request['Content-Type'] = 'application/json'
  request.body = {
    startDate: '2024-06-02',
    endDate: '2024-06-03'
  }.to_json
  
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

type DateSearchRequest struct {
    StartDate string \`json:"startDate"\`
    EndDate   string \`json:"endDate"\`
}

func searchByDate() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    data := DateSearchRequest{
        StartDate: "2024-06-02",
        EndDate:   "2024-06-03",
    }
    
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

async fn search_by_date() -> Result<Value> {
    let client = Client::new();
    
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "startDate": "2024-06-02",
            "endDate": "2024-06-03"
        }))
        .send()
        .await?;
    
    let data = response.json::<Value>().await?;
    Ok(data)
}

#[tokio::main]
async fn main() -> Result<()> {
    match search_by_date().await {
        Ok(data) => println!("Response: {:?}", data),
        Err(e) => eprintln!("Error: {}", e),
    }
    Ok(())
}`
};