import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function AdditionalResources(): JSX.Element {
  return (
    <section className="docs-home-section docs-home-section--ecosystem">
      <div className="container">
        <div className="docs-home-section__header">
          <Heading as="h2">Ecosystem links</Heading>
          <p>Connect with the Truss platform, open-source resources, and support channels.</p>
        </div>
        <div className="row">
          <div className="col col--3 margin-vert--md">
            <div className="card docs-home-card docs-home-card--ecosystem">
              <div className="card__body">
                <Heading as="h3">Truss website</Heading>
                <p>Platform overview and broader product context.</p>
                <Link className="button button--secondary button--sm" href="https://www.truss-security.com">
                  Visit website
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--3 margin-vert--md">
            <div className="card docs-home-card docs-home-card--ecosystem">
              <div className="card__body">
                <Heading as="h3">GitHub</Heading>
                <p>Repositories for SDKs, examples, and integrations.</p>
                <Link className="button button--secondary button--sm" href="https://github.com/truss-security">
                  Open GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--3 margin-vert--md">
            <div className="card docs-home-card docs-home-card--ecosystem">
              <div className="card__body">
                <Heading as="h3">Discord community</Heading>
                <p>Ask implementation questions and share workflows.</p>
                <Link className="button button--secondary button--sm" href="https://discord.com/invite/zerVhHtfxJ">
                  Join Discord
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--3 margin-vert--md">
            <div className="card docs-home-card docs-home-card--ecosystem">
              <div className="card__body">
                <Heading as="h3">LinkedIn updates</Heading>
                <p>Follow product and company updates from Truss Security.</p>
                <Link className="button button--secondary button--sm" href="https://www.linkedin.com/company/truss-security/">
                  Follow on LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 