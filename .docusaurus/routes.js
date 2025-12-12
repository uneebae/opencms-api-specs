import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/opencms-api-specs/api-specifications',
    component: ComponentCreator('/opencms-api-specs/api-specifications', '613'),
    exact: true,
    showNavLink: false,
    id: "openCMS",
    label: "API Specifications",
    route: "/api-specifications",
    configuration: {"_integration":"docusaurus","url":"openapi/OpenCMS-3.3.yml","layout":"modern","theme":"default","darkMode":true,"defaultOpenAllTags":false,"hideModels":false,"hideTestRequestButton":false,"hideSearch":false,"hideDarkModeToggle":false,"hideLogo":true,"branding":{"title":"Open CMS API","logo":"/img/PaysysLogo.png","favicon":"/img/favicon.png"}}
  },
  {
    path: '/opencms-api-specs/markdown-page',
    component: ComponentCreator('/opencms-api-specs/markdown-page', '176'),
    exact: true
  },
  {
    path: '/opencms-api-specs/docs',
    component: ComponentCreator('/opencms-api-specs/docs', '392'),
    routes: [
      {
        path: '/opencms-api-specs/docs',
        component: ComponentCreator('/opencms-api-specs/docs', '4d9'),
        routes: [
          {
            path: '/opencms-api-specs/docs',
            component: ComponentCreator('/opencms-api-specs/docs', 'a36'),
            routes: [
              {
                path: '/opencms-api-specs/docs/APISpecification',
                component: ComponentCreator('/opencms-api-specs/docs/APISpecification', '1fb'),
                exact: true
              },
              {
                path: '/opencms-api-specs/docs/ApiSpecification/manage-users',
                component: ComponentCreator('/opencms-api-specs/docs/ApiSpecification/manage-users', 'e15'),
                exact: true
              },
              {
                path: '/opencms-api-specs/docs/ApiSpecification/settings',
                component: ComponentCreator('/opencms-api-specs/docs/ApiSpecification/settings', '01a'),
                exact: true
              },
              {
                path: '/opencms-api-specs/docs/backOffice',
                component: ComponentCreator('/opencms-api-specs/docs/backOffice', '468'),
                exact: true
              },
              {
                path: '/opencms-api-specs/docs/dataTypeRef',
                component: ComponentCreator('/opencms-api-specs/docs/dataTypeRef', '75a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/opencms-api-specs/docs/developerWorkflow',
                component: ComponentCreator('/opencms-api-specs/docs/developerWorkflow', '601'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/opencms-api-specs/docs/introduction',
                component: ComponentCreator('/opencms-api-specs/docs/introduction', '4a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/opencms-api-specs/docs/response',
                component: ComponentCreator('/opencms-api-specs/docs/response', 'f88'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/opencms-api-specs/docs/users',
                component: ComponentCreator('/opencms-api-specs/docs/users', '63d'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/opencms-api-specs/',
    component: ComponentCreator('/opencms-api-specs/', 'f5b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
