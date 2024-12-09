export const pagingExample = {
    curl: `curl -X 'POST' \\
  "https://api.truss-security.com/product/search" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "days": 2,
    "LastEvaluatedKey": {
      "GSI1PK": "PROD",
      "SK": "VER#0",
      "GSI1SK": 1717377712019,
      "PK": "PROD#01HKDT164VYRS50ZQ8RJEHHBH0"
    }
  }'`,

    javascript: `import axios from 'axios';

const YOUR_API_KEY = 'YOUR_API_KEY';

export const trussApi = async (filter) => {
  const server = 'https://api.truss-security.com'
  const searchEndpoint = '/product/search'
  const url = server + searchEndpoint
  try {
    const options = {
      method: 'POST',
      headers: { 
        'x-api-key': YOUR_API_KEY
      },
      data: filter,
      url,
    };
    const response = await axios(options);
    return response.data
  } catch (err) {
    console.log('HTTP Error: ', err)
    throw err
  }
}

export async function fetchAllPages(filter) {
  const allItems = [];
  let lastEvaluatedKey;
  
  try {
    do {
      const currentFilter = {
        ...filter,
        LastEvaluatedKey: lastEvaluatedKey
      };
      const { result } = await trussApi(currentFilter);
      allItems.push(...result.Items);
      lastEvaluatedKey = result.LastEvaluatedKey;
    } while (lastEvaluatedKey);

    return allItems;
  } catch (error) {
    throw new Error(\`Failed to fetch pages: \${error.message}\`);
  }
}`,

    python: `import requests
import json

API_KEY = 'YOUR_API_KEY'

def fetch_all_pages(filter_params):
    url = 'https://api.truss-security.com/product/search'
    headers = {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
    }
    all_items = []
    last_evaluated_key = None
    
    try:
        while True:
            if last_evaluated_key:
                filter_params['LastEvaluatedKey'] = last_evaluated_key
                
            response = requests.post(url, headers=headers, json=filter_params)
            response.raise_for_status()
            result = response.json()['result']
            
            all_items.extend(result['Items'])
            last_evaluated_key = result.get('LastEvaluatedKey')
            
            if not last_evaluated_key:
                break
                
        return all_items
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        raise`,

    ruby: `require 'net/http'
require 'uri'
require 'json'

API_KEY = 'YOUR_API_KEY'

def fetch_all_pages(filter_params)
  uri = URI('https://api.truss-security.com/product/search')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  
  all_items = []
  last_evaluated_key = nil
  
  begin
    loop do
      filter_params['LastEvaluatedKey'] = last_evaluated_key if last_evaluated_key
      
      request = Net::HTTP::Post.new(uri)
      request['x-api-key'] = API_KEY
      request['Content-Type'] = 'application/json'
      request.body = filter_params.to_json
      
      response = http.request(request)
      result = JSON.parse(response.body)['result']
      
      all_items.concat(result['Items'])
      last_evaluated_key = result['LastEvaluatedKey']
      
      break unless last_evaluated_key
    end
    
    all_items
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
    LastEvaluatedKey map[string]interface{} \`json:"LastEvaluatedKey,omitempty"\`
}

func fetchAllPages(filter SearchRequest) ([]map[string]interface{}, error) {
    url := "https://api.truss-security.com/product/search"
    var allItems []map[string]interface{}
    
    for {
        jsonData, err := json.Marshal(filter)
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
        
        body, err := ioutil.ReadAll(resp.Body)
        resp.Body.Close()
        if err != nil {
            return nil, fmt.Errorf("error reading response: %v", err)
        }
        
        var result map[string]interface{}
        if err := json.Unmarshal(body, &result); err != nil {
            return nil, fmt.Errorf("error parsing response: %v", err)
        }
        
        resultData := result["result"].(map[string]interface{})
        items := resultData["Items"].([]interface{})
        for _, item := range items {
            allItems = append(allItems, item.(map[string]interface{}))
        }
        
        lastEvaluatedKey, exists := resultData["LastEvaluatedKey"]
        if !exists || lastEvaluatedKey == nil {
            break
        }
        
        filter.LastEvaluatedKey = lastEvaluatedKey.(map[string]interface{})
    }
    
    return allItems, nil
}`,

    rust: `use reqwest::Client;
use serde_json::{json, Value};
use anyhow::Result;

const API_KEY: &str = "YOUR_API_KEY";

async fn fetch_all_pages(mut filter: Value) -> Result<Vec<Value>> {
    let client = Client::new();
    let mut all_items = Vec::new();
    
    loop {
        let response = client
            .post("https://api.truss-security.com/product/search")
            .header("x-api-key", API_KEY)
            .header("Content-Type", "application/json")
            .json(&filter)
            .send()
            .await?;
        
        let result = response.json::<Value>().await?;
        let items = result["result"]["Items"].as_array()
            .ok_or_else(|| anyhow::anyhow!("Invalid response format"))?;
        all_items.extend(items.clone());
        
        if let Some(last_key) = result["result"]["LastEvaluatedKey"].as_object() {
            filter["LastEvaluatedKey"] = json!(last_key);
        } else {
            break;
        }
    }
    
    Ok(all_items)
}

#[tokio::main]
async fn main() -> Result<()> {
    let filter = json!({
        "days": 2
    });
    
    match fetch_all_pages(filter).await {
        Ok(items) => println!("Total items: {}", items.len()),
        Err(e) => eprintln!("Error: {}", e),
    }
    Ok(())
}`
};