// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open CMS',
  tagline: 'Enterprise Card Management System',
  favicon: 'img/favicon.png',

  // Vercel URL (final domain set hone ke baad update kar sakte ho)
  url: 'https://opencms-api-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'uneebae',
  projectName: 'opencms-api-docs',

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
            'https://github.com/uneebae/opencms-api-docs/tree/main/',
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
        label: 'API Specifications',
        route: '/api-specifications',
        showNavLink: false,
        configuration: {
          url: 'openapi/OpenCMS-3.3.yml',
          layout: 'modern',
          theme: 'default',
          darkMode: true,
          defaultOpenAllTags: false,
          hideModels: false,
          hideTestRequestButton: false,
          hideSearch: false,
          hideDarkModeToggle: false,
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
          label: 'Overview',
        },
        {
          to: '/api-specifications',
          position: 'left',
          label: 'API Specifications',
        },
        {
          type: 'doc',
          docId: 'backOffice',
          position: 'left',
          label: 'Back Office',
        },
        {
          href: 'https://github.com/uneebae/opencms-api-docs',
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
            {label: 'Getting Started', to: '/docs'},
            {label: 'API Reference', to: '/api-specifications'},
            {label: 'Developer Workflow', to: '/docs/developerWorkflow'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Back Office', to: '/docs/backOffice'},
            {label: 'Data Types', to: '/docs/dataTypeRef'},
            {label: 'Response Codes', to: '/docs/response'},
          ],
        },
        {
          title: 'Legal',
          items: [
            {label: 'Privacy Policy', href: 'https://paysyslabs.com/privacy'},
            {label: 'Terms of Service', href: 'https://paysyslabs.com/terms'},
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
