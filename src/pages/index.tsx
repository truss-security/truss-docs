import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import AdditionalResources from '../components/AdditionalResources';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const trussLogoUrl = useBaseUrl('/img/Truss Logo IconOnly_Color.png');

  return (
    <header className="docs-home-hero">
      <div className="container">
        <img src={trussLogoUrl} alt="Truss" className="docs-home-hero__logo" />
        <Heading as="h1" className="docs-home-hero__title">
          {siteConfig.title}
        </Heading>
        <p className="docs-home-hero__tagline">
          {siteConfig.tagline}
        </p>
        <p className="docs-home-hero__intro">
          Start here to read the guides and integrate with the HTTP API and TypeScript SDK.
        </p>
      </div>
    </header>
  );
}

function QuickstartPathways() {
  return (
    <section className="docs-home-section docs-home-section--quickstart">
      <div className="container">
        <div className="docs-home-section__header">
          <Heading as="h2">Quickstart pathways</Heading>
          <p>Choose the workflow that matches your role and current objective.</p>
        </div>
        <div className="row">
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--quickstart">
              <div className="card__body">
                <Heading as="h3">Explore</Heading>
                <p className="docs-home-card__audience">For analysts and responders</p>
                <p>Use the guides to understand products, filters, and how data is shaped in the API.</p>
                <Link to="/data" className="button button--primary button--sm">Open guides</Link>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--quickstart">
              <div className="card__body">
                <Heading as="h3">Integrate</Heading>
                <p className="docs-home-card__audience">For developers and platform engineers</p>
                <p>Connect Truss data with REST and SDK patterns for repeatable tool integrations.</p>
                <Link to="/api/" className="button button--primary button--sm">Open API docs</Link>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--quickstart">
              <div className="card__body">
                <Heading as="h3">Build</Heading>
                <p className="docs-home-card__audience">For application and pipeline authors</p>
                <p>Use the official client for typed requests, FilterQL helpers, and STIX helpers.</p>
                <Link to="/data/sdk" className="button button--primary button--sm">SDK documentation</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocsDirectory() {
  return (
    <section className="docs-home-section docs-home-section--directory">
      <div className="container">
        <div className="docs-home-section__header">
          <Heading as="h2">Docs directory</Heading>
          <p>Navigate directly to core documentation areas.</p>
        </div>
        <div className="row">
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--directory">
              <div className="card__body">
                <Heading as="h3">Guides</Heading>
                <ul>
                  <li><Link to="/data">Overview</Link></li>
                  <li><Link to="/data/api">API usage guide</Link></li>
                  <li><Link to="/data/sdk">TypeScript SDK</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--directory">
              <div className="card__body">
                <Heading as="h3">API and reference</Heading>
                <ul>
                  <li><Link to="/api/">OpenAPI reference</Link></li>
                  <li><Link to="/data/api">Authentication and search</Link></li>
                  <li><Link to="/data/sdk">SDK quick start</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--directory">
              <div className="card__body">
                <Heading as="h3">External resources</Heading>
                <ul>
                  <li><Link href="https://www.truss-security.com">Truss website</Link></li>
                  <li><Link href="https://github.com/truss-security">GitHub organization</Link></li>
                  <li><Link href="https://discord.com/invite/zerVhHtfxJ">Discord community</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <QuickstartPathways />
        <DocsDirectory />
        <AdditionalResources />
      </main>
    </Layout>
  );
}
