import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function TrussApi(): JSX.Element {
  return (
    <section className="docs-home-section">
      <div className="container">
        <div className="card docs-home-card">
          <div className="card__body">
            <Heading as="h2">API and developer surface</Heading>
            <p>
              Programmatic access to Truss intelligence with workflows designed for defenders and builders.
              Use these docs to authenticate, query, and integrate with your existing tooling.
            </p>
            <div className="docs-home-inline-actions">
              <Link to="/api/" className="button button--primary button--sm">Open API docs</Link>
              <Link to="/data/api" className="button button--secondary button--sm">API usage guide</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
