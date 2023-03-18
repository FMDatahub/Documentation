export default {
  title: "Dokumentation",
  description: "Dokumentation for Datahub",
  srcDir: "./",
  lastUpdated: false,
  base: "/Documentation/",
  ///cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    algolia: {
      appId: "L8J7OTWO4E",
      apiKey: "2e16bb09684bc1e95c25894db01b7d9d",
      indexName: "umentation",
    },
    editLink: {
      pattern:
        "https://github.com/FMDatahub/Documentation/tree/main/docs/:path",
      text: "Rediger denne side på GitHub",
    },
    sidebar: [
      {
        items: [
          {
            text: "Frontend",
            collapsed: true,
            link: "/Frontend/",
            items: [
              {
                text: "Pages",
                link: "Frontend/Pages/",
              },
              {
                text: "State",
                link: "Frontend/State/",
              },
              {
                text: "Components",
                collapsed: true,
                link: "Frontend/Components/",
                items: [
                  {
                    text: "Visninger",
                    collapsed: true,
                    link: "Backend/Databases/",
                    items: [
                      {
                        text: "Jordstykker",
                        link: "Backend/Storage/",
                      },
                      {
                        text: "Bygninger",
                        link: "Backend/Databases/",
                      },
                      {
                        text: "Etager",
                        link: "Backend/Storage/",
                      },
                    ],
                  },
                  {
                    text: "Header",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "Bygningsdele",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "Documents",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "Ejendomsstruktur",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "EjendomsstrukturEditor",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "GlbViewer",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "Mapbox",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "MapboxEditor",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "SvgViewer",
                    link: "Backend/Storage/",
                  },
                  {
                    text: "User",
                    link: "Backend/Storage/",
                  },
                ],
              },
            ],
          },
          {
            text: "Backend",
            collapsed: true,
            link: "/Backend/",
            items: [
              {
                text: "Databases",
                link: "Backend/Databases/",
              },

              {
                text: "Storage",
                link: "Backend/Storage/",
              },
            ],
          },
          {
            text: "API",
            collapsed: true,
            link: "/API/",
            items: [
              {
                text: "Routers",
                collapsed: true,
                link: "API/Routers/",
                items: [
                  {
                    text: "DataExchange",
                    link: "API/Routers/DataExchange/",
                  },
                  {
                    text: "Documents",
                    link: "API/Routers/Documents/",
                  },
                  {
                    text: "Foundation",
                    link: "API/Routers/Foundation/",
                  },
                  {
                    text: "Services",
                    link: "API/Routers/Services/",
                  },
                ],
              },
              {
                text: "Active Directory",
                link: "API/ActiveDirectory/",
              },
              {
                text: "API Management",
                link: "API/APIManagement/",
              },
            ],
          },
          {
            text: "Devops",
            collapsed: true,
            link: "/Devops/",
            items: [
              {
                text: "Branches",
                link: "Devops/Branches/",
              },
              {
                text: "Keyvault",
                link: "Devops/Keyvault/",
              },
              {
                text: "Pipelines",
                link: "Devops/Pipelines/",
              },
              {
                text: "InfrastructureAsCode",
                link: "Devops/InfrastructureAsCode/",
              },
            ],
          },
          {
            text: "Events",
            collapsed: true,
            link: "/Events/",
            items: [
              {
                text: "Eventhub",
                link: "Events/Eventhub/",
              },
              {
                text: "Queues",
                link: "Events/Queues/",
              },
            ],
          },
          {
            text: "Integrationer",
            collapsed: true,
            link: "/Integrationer/",
            items: [
              {
                text: "Fagsystemer",
                link: "Integrationer/Fagsystemer/",
              },
              {
                text: "Offentlige registre",
                link: "Integrationer/Offentlige/",
              },
            ],
          },
        ],
      },
      {
        text: "Links",
        items: [
          {
            text: "Portal",
            link: "https://fmdatahub.github.io/Portal/",
          },
        ],
      },
    ],
  },
};
