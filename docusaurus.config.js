// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Truss Documentation',
  tagline: 'Documentation for Truss Protocol and the Truss Marketplace',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://truss-security.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/truss-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'truss-security', // Usually your GitHub org/user name.
  projectName: 'truss-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
            'https://github.com/truss-security/truss-docs/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'openapi/trussapi.json',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
/*    [
      'docusaurus-plugin-openapi',
      {
        api: {
          path: 'openapi/trussapi.json',
          routeBasePath: 'api',
        }
      },
    ],*/
  ],
/*
  plugins: [
    [
      'docusaurus-plugin-openapi',
      {
        id: 'api',
        path: 'openapi/trussapi.yaml',
        routeBasePath: 'api',
        // ... other options
      },
    ]
  ],
*/
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Truss / Docs',
        logo: {
          alt: 'Truss Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'trussSidebar',
            position: 'left',
            label: 'Truss Protocol',
          },
          {
            type: 'docSidebar',
            sidebarId: 'marketplaceSidebar',
            position: 'left',
            label: 'Truss Marketplace',
          },
          {
            to: '/api',
            position: 'left',
            label: 'API',
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
            title: 'Docs',
            items: [
              {
                label: 'Truss Protocol',
                to: '/truss',
              },
              {
                label: 'Truss Marketplace',
                to: '/marketplace',
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
                label: 'Twitter',
                href: 'https://twitter.com/Truss_Security',
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
