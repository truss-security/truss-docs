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
          Start here to explore the dashboard, integrate with API and SDK workflows, and operate with
          account-level governance.
        </p>
        <div className="docs-home-hero__actions">
          <Link to="/dashboard/" className="button button--primary">Get Started</Link>
          <Link to="/api/" className="button button--secondary">API Reference</Link>
          <Link to="/dashboard/" className="button button--secondary">Dashboard Docs</Link>
          <Link to="/account/" className="button button--secondary">Account Docs</Link>
        </div>
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
                <p>Use dashboard workflows to search, filter, and inspect intelligence context quickly.</p>
                <Link to="/dashboard/" className="button button--primary button--sm">Open Dashboard Docs</Link>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--quickstart">
              <div className="card__body">
                <Heading as="h3">Integrate</Heading>
                <p className="docs-home-card__audience">For developers and platform engineers</p>
                <p>Connect Truss data with REST and SDK patterns for repeatable tool integrations.</p>
                <Link to="/api/" className="button button--primary button--sm">Open API Docs</Link>
              </div>
            </div>
          </div>
          <div className="col col--4 margin-vert--md">
            <div className="card docs-home-card docs-home-card--quickstart">
              <div className="card__body">
                <Heading as="h3">Operate</Heading>
                <p className="docs-home-card__audience">For admins and team leads</p>
                <p>Manage access, billing, and account settings for governed, production-ready usage.</p>
                <Link to="/account/" className="button button--primary button--sm">Open Account Docs</Link>
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
          <div className="col col--3 margin-vert--md">
            <div className="card docs-home-card docs-home-card--directory">
              <div className="card__body">
                <Heading as="h3">Product guides</Heading>
                <ul>
                  <li><Link to="/dashboard/">Dashboard overview</Link></li>
                  <li><Link to="/dashboard/charts">Charts and analytics</Link></li>
                  <li><Link to="/dashboard/insights">Insights workflows</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--3 margin-vert--md">
            <div className="card docs-home-card docs-home-card--directory">
              <div className="card__body">
                <Heading as="h3">API and reference</Heading>
                <ul>
                  <li><Link to="/api/">API section overview</Link></li>
                  <li><Link to="/api/">OpenAPI reference</Link></li>
                  <li><Link to="/data/api">API usage guide</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--3 margin-vert--md">
            <div className="card docs-home-card docs-home-card--directory">
              <div className="card__body">
                <Heading as="h3">Account and admin</Heading>
                <ul>
                  <li><Link to="/account/">Account overview</Link></li>
                  <li><Link to="/account/useraccount">Profile and settings</Link></li>
                  <li><Link to="/account/billing">Billing and plans</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col--3 margin-vert--md">
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

function WhatsNew() {
  return (
    <section className="docs-home-section docs-home-section--whats-new">
      <div className="container">
        <div className="docs-home-section__header">
          <Heading as="h2">What&apos;s new</Heading>
          <p>Recent additions and recommended starting points.</p>
        </div>
        <div className="row">
          <div className="col col--6 margin-vert--md">
            <div className="card docs-home-card docs-home-card--whats-new">
              <div className="card__body">
                <Heading as="h3">Start with the API reference</Heading>
                <p>Begin implementation with endpoint-level details and authentication guidance.</p>
                <Link to="/api/" className="button button--secondary button--sm">Go to API Reference</Link>
              </div>
            </div>
          </div>
          <div className="col col--6 margin-vert--md">
            <div className="card docs-home-card docs-home-card--whats-new">
              <div className="card__body">
                <Heading as="h3">Review dashboard workflows</Heading>
                <p>See current docs for exploration, filtering, charts, and operational usage patterns.</p>
                <Link to="/dashboard/" className="button button--secondary button--sm">Go to Dashboard Docs</Link>
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
        <WhatsNew />
        <AdditionalResources />
      </main>
    </Layout>
  );
}
