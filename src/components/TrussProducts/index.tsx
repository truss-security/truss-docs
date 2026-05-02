import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function TrussProducts(): React.ReactElement {
  return (
    <section className="docs-home-section">
      <div className="container">
        <div className="card docs-home-card">
          <div className="card__body">
            <Heading as="h2">Products and integrations</Heading>
            <p>
              Read the overview for how Truss models security products, then use the SDK for typed access in your own
              tools and pipelines.
            </p>
            <div className="docs-home-inline-actions">
              <Link to="/data" className="button button--primary button--sm">Documentation overview</Link>
              <Link to="/data/sdk" className="button button--secondary button--sm">TypeScript SDK</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
