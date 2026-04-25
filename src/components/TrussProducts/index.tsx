import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function TrussProducts(): JSX.Element {
  return (
    <section className="docs-home-section">
      <div className="container">
        <div className="card docs-home-card">
          <div className="card__body">
            <Heading as="h2">Intelligence products and operations</Heading>
            <p>
              Use account and product documentation to manage access, billing, and operational workflows for
              secure, repeatable delivery across teams.
            </p>
            <div className="docs-home-inline-actions">
              <Link to="/account/" className="button button--primary button--sm">Account overview</Link>
              <Link to="/account/billing" className="button button--secondary button--sm">Billing docs</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 