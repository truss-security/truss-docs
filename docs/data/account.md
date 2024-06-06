---
sidebar_position: 4
title: Keys and Accounts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Keys and Accounts

## 1. Sign up to Truss
Sign up for an account on the Truss website, enter your details, and select CREATE A FREE ACCOUNT.

To activate your account, verify your email address by clicking the link sent to your inbox.

## 2. Configure your API key
Once verified, you’ll be taken to the Truss dashboard where you can configure your auto-generated API key.

:::info
Truss will automatically generate the My First Key API key for you.
:::

## 3. Send requests
Use the API key when sending requests. The following examples interact with the Truss network by sending requests using HTTP.

:::info
* Replace `YOUR-API-KEY` with your own unique API key.
:::

Use a tool such as the [Client Uniform Resource Locator (curl)](https://curl.se/) or [Postman](https://www.postman.com/downloads/) to make requests. We recommend using Postman if you're a Windows user.


### 3.1 Search products

Retrieve the 2 most recently added security products:

<Tabs>
  <TabItem value="curl" label="curl" >
```
  curl https://api.trus-security.com/v1/products/search \
      -X POST \
      -H "Content-Type: application/json" \
      -H "Authentication: YOUR-API-KEY" \
      --data '{
        "category": "Malware",
        "startDate": 1716773365530,
        "limit": 2
      }'
```
  </TabItem>
  <TabItem value="javascript" label="javascript">
```javascript
  const searchParams = {
    category: 'Malware',
    startdate: 1716773365530,
    limit: 2
  }
  const { response } = await searchProducts(searchParams);
  console.log(response)
```
  </TabItem>
</Tabs>


You'll receive a response similar to:

```json
{
  "response": {
      "$metadata": {
          "httpStatusCode": 200,
          "requestId": "VCQ9ORC1S4DUT6001VG5TF91VBVV4KQNSO5AEMVJF66Q9ASUAAJG",
          "attempts": 1,
          "totalRetryDelay": 0
      },
      "Count": 2,
      "Items": [
          {
              "id": "01HQ8XD8S0V8QVXE8AY2ZY78DZ",
              "version": 0,
              "latestVersion": 0,
              "timestamp": 1716773365036,
              "title": "opendir_AbuseCH-URLhaus_02/21/2024",
              "author": [
                  "abuse_ch"
              ],
              "type": "Indicator",
              "category": "Malware",
              "source": "",
              "reference": [
                  "https://urlhaus.abuse.ch/url/2766339/",
                  "https://urlhaus.abuse.ch/url/2766759/"
              ],
              "tags": [
                  "DarkGate",
                  "opendir",
                  "vbs",
                  "ascii",
                  "Encoded",
                  "GuLoader",
                  "encrypted"
              ],
              "industry": [],
              "region": [],
              "indicators": {
                  "URL": [
                      "https://computersupportexperts.com/css/cab/1%20(31).vbs",
                      "http://rowtechequipments.com/iz/Colmanh.pfb",
                      "http://rowtechequipments.com/iz/GmXqgExpUzCakBKX138.bin"
                  ]
              },
              "indicatorsHash": "5234d9c9a0ec1c8b26cdafc8f912e32aa4c97456ab830ee9b3af8d1640ef680c",
              "validators": [],
              "downloads": -1,
              "rating": -1
          },
          {
              "id": "01HQ8XD8WS10ZD6MJ2691JEJJZ",
              "version": 0,
              "latestVersion": 0,
              "timestamp": 1716773365092,
              "title": "Rhadamanthys_AbuseCH-URLhaus_02/21/2024",
              "author": [
                  "abuse_ch"
              ],
              "type": "Indicator",
              "category": "Malware",
              "source": "",
              "reference": [
                  "https://urlhaus.abuse.ch/url/2766459/",
                  "https://urlhaus.abuse.ch/url/2766460/"
              ],
              "tags": [
                  "Rhadamanthys",
                  "exe"
              ],
              "industry": [],
              "region": [],
              "indicators": {
                  "URL": [
                      "http://whitemansearch.shop/setup",
                      "http://whitemansearch.shop/ClassroomEc.exe"
                  ]
              },
              "indicatorsHash": "9924d29ac83e2657b3f7d52b53f630199f3f9de17ba6fcc59df4e3b983169436",
              "validators": [],
              "downloads": -1,
              "rating": -1
          }
      ],
      "LastEvaluatedKey": {
          "GSI2PK": "Malware",
          "SK": "VER#0",
          "PK": "PROD#01HQ8XD8WS10ZD6MJ2691JEJJZ",
          "GSI2SK": 1716773365092
      },
      "ScannedCount": 2
  }
}
```

## 4. View your project stats
From the Stats page of the Truss dashboard, you can view real-time statistics about your API usage. Optimize your app and better understand your users by reviewing your API request stats regularly.


## 5. Manage your account
Find additional settings in Settings to manage your account. You can:

* Set notifications for daily limits from the Account option.
* Manage your billing information in the Billing option.
* Manage shared API keys in the Key Sharing option.

