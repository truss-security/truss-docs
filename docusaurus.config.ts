import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Truss Docs',
  tagline: 'Documentation for the Security Information Exchange.',
  favicon: 'img/Truss_favicon.ico',

  // Set the production url of your site here
  url: 'https://truss-security.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'truss-security', // Usually your GitHub org/user name.
  projectName: 'truss-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/truss-security/truss-docs/blob/main/',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Truss Docs',
      logo: {
        alt: 'Truss Logo',
        src: 'img/Truss Logo IconOnly_Color.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          label: 'API',
          to: '/api',
          position: 'left',
        },
        {
          href: 'https://github.com/truss-security/truss-docs/tree/main/docs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Platform',
          items: [
            {
              label: 'Website',
              href: 'https://www.truss-security.com',
            }
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: '/data',
            },
            {
              label: 'API',
              to: '/api',
            },
            {
              label: 'SDK',
              to: '/data/sdk',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/zerVhHtfxJ',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/truss-security',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://www.truss-security.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/truss-security',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Truss Security, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  customFields: {
    // Add any custom fields you need
  },
  stylesheets: [
    // Add any additional stylesheets
  ],
};

export default config;
