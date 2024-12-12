export const initialQueryExample = {
    curl: `curl -X 'POST' \\
  "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "startdate": 1733616000000,
    "enddate": 1733961599999,
    "source": [
        "OpenPhish"
    ]
  }' | jq`,

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
        startdate: 1733616000000,
        enddate: 1733961599999,
        source: ["OpenPhish"]
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
        'startdate': 1733616000000,
        'enddate': 1733961599999,
        'source': ['OpenPhish']
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
  request.body = {
    startdate: 1733616000000,
    enddate: 1733961599999,
    source: ['OpenPhish']
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

type SearchRequest struct {
    StartDate int64    \`json:"startdate"\`
    EndDate   int64    \`json:"enddate"\`
    Source    []string \`json:"source"\`
}

func searchProducts() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    data := SearchRequest{
        StartDate: 1733616000000,
        EndDate:   1733961599999,
        Source:    []string{"OpenPhish"},
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

async fn search_products() -> Result<Value> {
    let client = Client::new();
    
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&json!({
            "startdate": 1733616000000,
            "enddate": 1733961599999,
            "source": ["OpenPhish"]
        }))
        .send()
        .await?;
    
    let data = response.json::<Value>().await?;
    Ok(data)
}`
};

export const lastEvaluatedKeyExample = {
    curl: `curl -X 'POST' \\
  "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "startdate": 1733616000000,
    "enddate": 1733961599999,
    "source": [
        "OpenPhish"
    ],
    "LastEvaluatedKey": {
      "SK": "VER#0",
      "GSI3PK": "OpenPhish",
      "PK": "PROD#01JEMBFNT12JV97ZT3GVBF2X2J",
      "GSI3SK": 1733702440770
    }
  }' | jq`,

    javascript: `import axios from 'axios';

const YOUR_API_KEY = 'YOUR_API_KEY';

async function fetchAllResults() {
  const baseQuery = {
    startdate: 1733616000000,
    enddate: 1733961599999,
    source: ["OpenPhish"]
  };

  try {
    // Initial query
    let response = await axios({
      method: 'POST',
      url: 'https://api.truss-security.com/product/search',
      headers: { 
        'x-api-key': YOUR_API_KEY,
        'Content-Type': 'application/json'
      },
      data: baseQuery
    });

    let results = response.data;
    
    // If LastEvaluatedKey exists, fetch next page
    if (results.LastEvaluatedKey) {
      const nextQuery = {
        ...baseQuery,
        LastEvaluatedKey: results.LastEvaluatedKey
      };

      response = await axios({
        method: 'POST',
        url: 'https://api.truss-security.com/product/search',
        headers: { 
          'x-api-key': YOUR_API_KEY,
          'Content-Type': 'application/json'
        },
        data: nextQuery
      });
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`,

    python: `import requests
import json

API_KEY = 'YOUR_API_KEY'

def fetch_all_results():
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
    base_query = {
        'startdate': 1733616000000,
        'enddate': 1733961599999,
        'source': ['OpenPhish']
    }
    
    try:
        # Initial query
        response = requests.post(url, headers=headers, json=base_query)
        response.raise_for_status()
        results = response.json()
        
        # If LastEvaluatedKey exists, fetch next page
        if 'LastEvaluatedKey' in results:
            next_query = base_query.copy()
            next_query['LastEvaluatedKey'] = results['LastEvaluatedKey']
            
            response = requests.post(url, headers=headers, json=next_query)
            response.raise_for_status()
            
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        raise`,

    ruby: `require 'net/http'
require 'uri'
require 'json'

API_KEY = 'YOUR_API_KEY'

def fetch_all_results
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  
  base_query = {
    startdate: 1733616000000,
    enddate: 1733961599999,
    source: ['OpenPhish']
  }
  
  begin
    # Initial query
    request = Net::HTTP::Post.new(uri)
    request['x-api-key'] = API_KEY
    request['Content-Type'] = 'application/json'
    request.body = base_query.to_json
    
    response = http.request(request)
    results = JSON.parse(response.body)
    
    # If LastEvaluatedKey exists, fetch next page
    if results['LastEvaluatedKey']
      next_query = base_query.merge({
        'LastEvaluatedKey' => results['LastEvaluatedKey']
      })
      
      request.body = next_query.to_json
      response = http.request(request)
    end
    
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

type QueryRequest struct {
    StartDate        int64                    \`json:"startdate"\`
    EndDate          int64                    \`json:"enddate"\`
    Source           []string                 \`json:"source"\`
    LastEvaluatedKey map[string]interface{}   \`json:"LastEvaluatedKey,omitempty"\`
}

func fetchAllResults() (map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    baseQuery := QueryRequest{
        StartDate: 1733616000000,
        EndDate:   1733961599999,
        Source:    []string{"OpenPhish"},
    }
    
    // Initial query
    jsonData, err := json.Marshal(baseQuery)
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
    
    // If LastEvaluatedKey exists, fetch next page
    if lastKey, exists := result["LastEvaluatedKey"].(map[string]interface{}); exists {
        baseQuery.LastEvaluatedKey = lastKey
        
        jsonData, _ = json.Marshal(baseQuery)
        req, _ = http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
        req.Header.Set("x-api-key", apiKey)
        req.Header.Set("Content-Type", "application/json")
        
        resp, err = client.Do(req)
        if err != nil {
            return nil, fmt.Errorf("error making request: %v", err)
        }
        defer resp.Body.Close()
        
        body, _ = ioutil.ReadAll(resp.Body)
        json.Unmarshal(body, &result)
    }
    
    return result, nil
}`,

    rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn fetch_all_results() -> Result<Value> {
    let client = Client::new();
    let base_query = json!({
        "startdate": 1733616000000,
        "enddate": 1733961599999,
        "source": ["OpenPhish"]
    });
    
    // Initial query
    let response = client
        .post("https://api.truss-security.com/product/search")
        .header("x-api-key", API_KEY)
        .header("Content-Type", "application/json")
        .json(&base_query)
        .send()
        .await?;
    
    let mut result = response.json::<Value>().await?;
    
    // If LastEvaluatedKey exists, fetch next page
    if let Some(last_key) = result["LastEvaluatedKey"].as_object() {
        let mut next_query = base_query.as_object().unwrap().clone();
        next_query.insert("LastEvaluatedKey".to_string(), json!(last_key));
        
        let response = client
            .post("https://api.truss-security.com/product/search")
            .header("x-api-key", API_KEY)
            .header("Content-Type", "application/json")
            .json(&next_query)
            .send()
            .await?;
            
        result = response.json::<Value>().await?;
    }
    
    Ok(result)
}`
}; 