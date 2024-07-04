---
sidebar_position: 1
title: Dashboard
---

# Truss Dashboard

The Truss dashboard and graph engine (coming soon!) provides for the exploration and cataloging of threat intelligence, enabling you to leverage security data tailored to your infrastructure, applications, software, and the key threats you care about most.

The database contains curated security information and intelligence products from decentralized sources and intelligence outlets. The dashboard provides various functionalities to search, filter, and export data, as well as insights on the most frequent categories, authors, tags, and regions.

## Page Descriptions and Operations

### Home Page
The Home page serves as the main entry point of the Truss Dashboard. It provides an overview of the product trends, including top categories, total products and indicators, and top authors and tags.

#### Home
**Display:**
- Displays the total products and indicators.
- Lists the top five categories, authors, and tags with links to filter the Dashboard page.

**Functionality:**
- Hyperlinks allow for easy point and click redirection to dynamic search operations.
    - Top 5 Categories
    - Top 10 Authors
    - Top 20 Tags

### Dashboard Page (Dashboard.tsx and Dashboard.css)
The Dashboard page is the main interface for searching, filtering, and managing the data.

#### Dashboard
**Display:**
- Displays search fields, timeframe inputs, and buttons for search, select all, and export.
- Shows product insights in an everpresent left-hand pane, providing additional insight into displayed security products.
- Individual product cards are displayed in the main content area, allowing users to dive into each security product.
- Selection and exporting of security products provides users with JSON formatted data for easy consumption.

**Effect Hooks:**
- Initialize search fields and input values based on URL parameters.
- Fetch and filter data from the GraphQL endpoint based on search fields and sort direction.
