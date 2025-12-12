// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open CMS',
  tagline: 'Enterprise Card Management System',
  favicon: 'img/favicon.png',

<<<<<<< HEAD
  // ✅ GitHub Pages config (repo: uneebae/opencms-api-specs)
  url: 'https://uneebae.github.io',
  baseUrl: '/opencms-api-specs/',

  organizationName: 'uneebae',
  projectName: 'opencms-api-specs',
=======
  // Vercel URL (final domain set hone ke baad update kar sakte ho)
  url: 'https://opencms-api-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'uneebae',
  projectName: 'opencms-api-docs',
>>>>>>> 59d8b18 (Updated configurations and removed unused files)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
<<<<<<< HEAD
          // 👇 Docs repo edit link
          editUrl: 'https://github.com/uneebae/opencms-api-specs/tree/main/',
          // routeBasePath default "docs" hi rahe gi
=======
          editUrl:
            'https://github.com/uneebae/opencms-api-docs/tree/main/',
>>>>>>> 59d8b18 (Updated configurations and removed unused files)
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

<<<<<<< HEAD
  // ⭐ Scalar plugin – API Specifications
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

        // 👇 THIS FIXES YOUR LOGO ISSUE COMPLETELY
        hideLogo: true, 
        branding: {
          title: 'Open CMS API',
          logo: '/img/PaysysLogo.png',       // YOUR PAYSYS LOGO
          favicon: '/img/favicon.png'
        },
      },
    },
  ],
],

=======
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
>>>>>>> 59d8b18 (Updated configurations and removed unused files)

  themeConfig: {
    image: 'img/OpenCMS.png',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Paysys Labs Logo',
        // 🔥 yahan tumhara Paysys wala Logo.png use ho raha hai
        src: 'img/PaysysLogo.png',
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
<<<<<<< HEAD
          href: 'https://github.com/uneebae/opencms-api-specs',
=======
          href: 'https://github.com/uneebae/opencms-api-docs',
>>>>>>> 59d8b18 (Updated configurations and removed unused files)
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
<<<<<<< HEAD
            // 🔗 directly docs ke real routes pe – /docs/introduction etc
            {label: 'Getting Started', to: '/docs/introduction'},
=======
            {label: 'Getting Started', to: '/docs'},
>>>>>>> 59d8b18 (Updated configurations and removed unused files)
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
