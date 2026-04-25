import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function TrussCharts(): React.ReactElement {
  return (
    <section className="docs-home-section">
      <div className="container">
        <div className="card docs-home-card">
          <div className="card__body">
            <Heading as="h2">Analyst-grade exploration</Heading>
            <p>
              Dashboard documentation covers search, filtering, attributes, products, and charts so analysts can
              move from signals to decision-ready context quickly.
            </p>
            <div className="docs-home-inline-actions">
              <Link to="/dashboard/" className="button button--primary button--sm">Dashboard overview</Link>
              <Link to="/dashboard/charts" className="button button--secondary button--sm">Charts docs</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 