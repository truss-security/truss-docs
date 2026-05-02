import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function TrussCharts(): React.ReactElement {
  return (
    <section className="docs-home-section">
      <div className="container">
        <div className="card docs-home-card">
          <div className="card__body">
            <Heading as="h2">Search and structured data</Heading>
            <p>
              The API guide covers FilterQL, pagination, and product fields so you can query and interpret intelligence
              consistently.
            </p>
            <div className="docs-home-inline-actions">
              <Link to="/data/api" className="button button--primary button--sm">API usage guide</Link>
              <Link to="/api/" className="button button--secondary button--sm">OpenAPI reference</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
