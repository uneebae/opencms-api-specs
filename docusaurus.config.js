// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open CMS',
  tagline: 'Enterprise Card Management System',
  favicon: 'img/favicon.png',

  url: 'https://uneebae.github.io',
  baseUrl: '/opencms-api-specs/',
  organizationName: 'uneebae',
  projectName: 'opencms-api-specs',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
      onBrokenMarkdownImages: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/uneebae/opencms-api-specs/tree/UNEEB2/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@scalar/docusaurus',
      {
        id: 'openCMS',
        route: '/api-specifications',
        showNavLink: false,
        configuration: {
          url: '/openapi/OpenCMS-3.3.yml',
          layout: 'modern',
          theme: 'default',
          darkMode: true,
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'Paysys Labs Logo',
        src: 'img/PaysysLogo.png',
        href: '/opencms-api-specs/docs/introduction',
      },
      items: [
        { to: '/docs/introduction', label: 'Overview', position: 'left' },
        { to: '/api-specifications', label: 'API Specifications', position: 'left' },
        {
          href: 'https://github.com/uneebae/opencms-api-specs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Getting Started', to: '/docs/introduction' },
            { label: 'API Reference', to: '/api-specifications' },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.nightOwl,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
