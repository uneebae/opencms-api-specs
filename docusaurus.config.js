// @ts-check
// Docusaurus site configuration

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open CMS',
  tagline: 'Enterprise Card Management System',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://opencms-docs.paysyslabs.com',
  baseUrl: '/',

  organizationName: 'UsamaAbdulJabbar',
  projectName: 'OpenCMS',

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/UsamaAbdulJabbar/OpenCMS/tree/main/',
        },

        // BLOG DISABLED to fix author & blog errors
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/OpenCMS.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      logo: {
        alt: 'Open CMS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'APISpecification',
          position: 'left',
          label: 'API Specification',
        },
        {
          href: 'https://github.com/UsamaAbdulJabbar/OpenCMS',
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
            {
              label: 'Getting Started',
              to: '/docs',
            },
            {
              label: 'API Reference',
              to: '/docs/APISpecification',
            },
            {
              label: 'Developer Workflow',
              to: '/docs/developerWorkflow',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Back Office',
              to: '/docs/backOffice',
            },
            {
              label: 'Data Types',
              to: '/docs/dataTypeRef',
            },
            {
              label: 'Response Codes',
              to: '/docs/response',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              href: 'https://paysyslabs.com/privacy',
            },
            {
              label: 'Terms of Service',
              href: 'https://paysyslabs.com/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paysys Labs. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.nightOwl,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
