import React from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

export default function AdditionalResources(): JSX.Element {
  return (
    <div className="container margin-vert--lg">
      <div className="text--center margin-bottom--xl">
        <Heading as="h2" className="text-3xl font-bold mb-4">Additional Resources</Heading>
        <p className="text-gray-600">Connect with Truss across our various platforms</p>
      </div>
      <div className="row">
        <div className="col col--4 margin-vert--md">
          <div className="card shadow--md">
            <div className="card__body text--center">
              <div className="avatar avatar--vertical margin-bottom--sm">
                <img
                  className="avatar__photo avatar__photo--xl"
                  src="/truss-docs/img/Truss Logo IconOnly_Color.png"
                  alt="Truss Logo"
                  style={{ padding: '8px' }}
                />
              </div>
              <Heading as="h3" className="text-xl font-bold mb-2">Truss Homepage</Heading>
              <p className="mb-4">Visit our main website</p>
              <Link
                className="button button--primary"
                href="https://www.truss-security.com">
                Visit Homepage
              </Link>
            </div>
          </div>
        </div>
        <div className="col col--4 margin-vert--md">
          <div className="card shadow--md">
            <div className="card__body text--center">
              <div className="avatar avatar--vertical margin-bottom--sm">
                <img
                  className="avatar__photo avatar__photo--xl"
                  src="/truss-docs/img/discord-logo.svg"
                  alt="Discord Logo"
                  style={{ padding: '8px' }}
                />
              </div>
              <Heading as="h3" className="text-xl font-bold mb-2">Community</Heading>
              <p className="mb-4">Join our Discord community</p>
              <Link
                className="button button--primary"
                href="https://discord.com/invite/zerVhHtfxJ">
                Join Discord
              </Link>
            </div>
          </div>
        </div>
        <div className="col col--4 margin-vert--md">
          <div className="card shadow--md">
            <div className="card__body text--center">
              <div className="avatar avatar--vertical margin-bottom--sm">
                <img
                  className="avatar__photo avatar__photo--xl"
                  src="/truss-docs/img/linkedin-logo.svg"
                  alt="LinkedIn Logo"
                  style={{ padding: '8px' }}
                />
              </div>
              <Heading as="h3" className="text-xl font-bold mb-2">Professional Network</Heading>
              <p className="mb-4">Connect on LinkedIn</p>
              <Link
                className="button button--primary"
                href="https://www.linkedin.com/company/truss-security/">
                Follow Us
              </Link>
            </div>
          </div>
        </div>
        <div className="col col--4 margin-vert--md">
          <div className="card shadow--md">
            <div className="card__body text--center">
              <div className="avatar avatar--vertical margin-bottom--sm">
                <img
                  className="avatar__photo avatar__photo--xl"
                  src="/truss-docs/img/youtube-logo.svg"
                  alt="YouTube Logo"
                  style={{ padding: '8px' }}
                />
              </div>
              <Heading as="h3" className="text-xl font-bold mb-2">Video Content</Heading>
              <p className="mb-4">Watch our tutorials and demos</p>
              <Link
                className="button button--primary"
                href="https://www.youtube.com/channel/UCjzO-8_mv3iKKf6baDWaYfw">
                Watch Videos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 