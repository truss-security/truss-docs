---
sidebar_position: 1
---

# Security Products

Truss is dedicated to delivering security intelligence through a network of security experts worldwide. Truss simplifies the process of cybersecurity data collection and distribution, enabling IT and security teams to interact with and protect against threats more effectively. Truss connects organizations to the security data they need, precisely when they need it, offering a dynamic and responsive approach to threat intelligence.

## Truss API

At the heart of Truss is its [Security API](/data/api), which provides users with access to an extensive repository of threat intelligence. The API allows organizations to quickly identify and request the security data most relevant to their needs, supported by a continually adapting security pipeline that filters out the noise and focuses on critical threats.

## Truss Products

Truss Products are the collection of data returned from the Truss API. The following fields are returned for each product:

- id - The unique identifier for the product.
- version - The version of the product. If the same security product is updated over time, the version will increment.
- latestVersion - The latest version of the product.
- timestamp - The timestamp of when the product was created in the Truss database.
- title - The title of the product.
- author - The authors of the product.
- type - The type of the product. Currently, the only type is "Indicator".
- category - The category of the product.
- source - The source of the product.
- pubDate - The publication date of the product.
- reference - The reference URLs of the product.
- tags - The tags associated with the product.
- industry - The industries associated with the product.
- region - The regions associated with the product.
- indicators - The indicators associated with the product.
- contributor - The security team or individual that contributed the product.

The following is an example of a Truss Product returned from the API:

```json
{
  "id": "01JEF7J9V20DX9RZ6AMQ7BTXZ5",
  "version": 0,
  "latestVersion": 0,
  "timestamp": 1733530560355,
  "title": "Threatview-Domains_ru_krd_12/07/2024",
  "author": [
    "MohitK_",
    "Threatview.io",
    "Community"
  ],
  "type": "Indicator",
  "category": "OSINT",
  "source": "Threatview.io",
  "pubDate": "December 07, 2024",
  "reference": [
    "https://threatview.io/",
    "https://threatview.io/Downloads/DOMAIN-High-Confidence-Feed.txt",
    "https://www.reddit.com/r/HomeNetworking/comments/m8j6mh/integrate_threat_intelligence_in_home_labs/"
  ],
  "tags": [
    "Threatview.io",
    "Domains",
    "Truss Automation",
    "ru",
    "krd",
    "High Confidence"
  ],
  "industry": [
    "All"
  ],
  "region": [
    "All"
  ],
  "indicators": {
    "DOMAIN": [
      "krd-afisha.ru",
      "krd-croparena.ru",
      "krd-stadium.ru"
    ]
  },
  "contributor": "Truss Automation"
}
```
