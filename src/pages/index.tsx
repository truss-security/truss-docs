import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import TrussApi from '../components/TrussApi';
import TrussProducts from '../components/TrussProducts';
import TrussCharts from '../components/TrussCharts';
import AdditionalResources from '../components/AdditionalResources';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="py-16 text-center">
      <div className="container">
        <Heading as="h1" className="text-5xl font-bold mb-6">
          {siteConfig.title}
        </Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  );
}

function DocumentationOverview() {
  return (
    <div className="container margin-vert--lg">
      <div className="row">
        <div className="col col--12 margin-vert--md">
          <TrussApi />
        </div>
        <div className="col col--12 margin-vert--md">
          <TrussCharts />
        </div>
        <div className="col col--12 margin-vert--md">
          <TrussProducts />
        </div>
      </div>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="container margin-vert--lg">
      <div className="text--center margin-bottom--xl">
        <Heading as="h2" className="text-3xl font-bold mb-4">Quick Links</Heading>
        <p className="text-gray-600">Jump directly to key documentation sections</p>
      </div>
      <div className="row">
        <div className="col col--4 margin-vert--md">
          <div className="card shadow--md">
            <div className="card__body text--center">
              <Heading as="h3" className="text-xl font-bold mb-2">API Documentation</Heading>
              <p className="mb-4">Access our comprehensive API documentation</p>
              <a href="/truss-docs/api" className="button button--primary">View API Docs</a>
            </div>
          </div>
        </div>
        <div className="col col--4 margin-vert--md">
          <div className="card shadow--md">
            <div className="card__body text--center">
              <Heading as="h3" className="text-xl font-bold mb-2">Dashboard Guide</Heading>
              <p className="mb-4">Learn about our dashboard features</p>
              <a href="/truss-docs/dashboard" className="button button--primary">Explore Dashboard</a>
            </div>
          </div>
        </div>
        <div className="col col--4 margin-vert--md">
          <div className="card shadow--md">
            <div className="card__body text--center">
              <Heading as="h3" className="text-xl font-bold mb-2">Account Management</Heading>
              <p className="mb-4">Manage your account and settings</p>
              <a href="/truss-docs/account" className="button button--primary">Account Guide</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <DocumentationOverview />
        <QuickLinks />
        <AdditionalResources />
      </main>
    </Layout>
  );
}
