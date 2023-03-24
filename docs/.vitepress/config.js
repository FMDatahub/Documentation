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
                link: "/Frontend/Pages/",
              },
              {
                text: "State",
                link: "/Frontend/State/",
              },
              {
                text: "Packages",
                collapsed: true,
                link: "/Frontend/Packages/",
                items: [
                  {
                    text: "Vue",
                    link: "/Frontend/Packages/Vue",
                  },
                  {
                    text: "Mapbox",
                    link: "/Frontend/Packages/Mapbox",
                  },
                  {
                    text: "Syncfusion",
                    link: "/Frontend/Packages/Syncfusion",
                  },
                ],
              },
              {
                text: "Components",
                collapsed: true,
                link: "/Frontend/Components/",
                items: [
                  {
                    text: "Visninger",
                    collapsed: true,
                    link: "/Backend/Databases/",
                    items: [
                      {
                        text: "Jordstykker",
                        link: "/Backend/Storage/",
                      },
                      {
                        text: "Bygninger",
                        link: "/Backend/Databases/",
                      },
                      {
                        text: "Etager",
                        link: "/Backend/Storage/",
                      },
                    ],
                  },
                  {
                    text: "Header",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "Bygningsdele",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "Documents",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "Ejendomsstruktur",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "EjendomsstrukturEditor",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "GlbViewer",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "Mapbox",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "MapboxEditor",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "SvgViewer",
                    link: "/Backend/Storage/",
                  },
                  {
                    text: "User",
                    link: "/Backend/Storage/",
                  },
                ],
              },
            ],
          },
          {
            text: "Databases",
            collapsed: true,
            link: "/Databases/",
            items: [
              {
                text: "DataExchange",
                collapsed: true,
                link: "/Databases/DataExchange/",
                items: [
                  {
                    text: "Contexts",
                    link: "/Databases/DataExchange/Contexts",
                  },
                  {
                    text: "Projects",
                    link: "/Databases/DataExchange/Projects",
                  },
                  {
                    text: "Sites",
                    link: "/Databases/DataExchange/Sites",
                  },
                  {
                    text: "Buildings",
                    link: "/Databases/DataExchange/Buildings",
                  },
                  {
                    text: "Buildingstoreys",
                    link: "/Databases/DataExchange/Buildingstoreys",
                  },
                  {
                    text: "Zones",
                    link: "/Databases/DataExchange/Zones",
                  },
                  {
                    text: "Spaces",
                    link: "/Databases/DataExchange/Spaces",
                  },
                  {
                    text: "Elements",
                    link: "/Databases/DataExchange/Elements",
                  },
                  {
                    text: "PropertySets",
                    link: "/Databases/DataExchange/PropertySets",
                  },
                  {
                    text: "DocumentInformations",
                    link: "/Databases/DataExchange/DocumentInformations",
                  },
                ],
              },
              {
                text: "Foundation",
                collapsed: true,
                link: "/Databases/Foundation/",
                items: [
                  {
                    text: "Brugere",
                    link: "/Databases/Foundation/Users",
                  },
                  {
                    text: "Organisationer",
                    link: "/Databases/Foundation/Organisations",
                  },
                ],
              },
            ],
          },
          {
            text: "Datalake",
            collapsed: true,
            link: "/Datalake/",
            items: [
              {
                text: "Ingest",
                link: "/Datalake/Ingest/",
              },
              {
                text: "Transform",
                link: "/Datalake/Transform/",
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
                link: "/API/Routers/",
                items: [
                  {
                    text: "DataExchange",
                    link: "/API/Routers/DataExchange/",
                  },
                  {
                    text: "Documents",
                    link: "/API/Routers/Documents/",
                  },
                  {
                    text: "Foundation",
                    link: "/API/Routers/Foundation/",
                  },
                  {
                    text: "Services",
                    link: "/API/Routers/Services/",
                  },
                ],
              },
              {
                text: "Active Directory",
                link: "/API/ActiveDirectory/",
              },
              {
                text: "API Management",
                link: "/API/APIManagement/",
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
                link: "/Devops/Branches/",
              },
              {
                text: "Keyvault",
                link: "/Devops/Keyvault/",
              },
              {
                text: "Pipelines",
                link: "/Devops/Pipelines/",
              },
              {
                text: "InfrastructureAsCode",
                link: "/Devops/InfrastructureAsCode/",
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
                link: "/Events/Eventhub/",
              },
              {
                text: "Queues",
                link: "/Events/Queues/",
              },
              {
                text: "Functions",
                collapsed: true,
                link: "/Events/Functions/",
                items: [
                  {
                    text: "IfcToDB",
                    link: "/Events/Eventhub/",
                  },
                  {
                    text: "IfcToSvg",
                    link: "/Events/Queues/",
                  },
                  {
                    text: "IfcToGlb",
                    link: "/Events/Functions/",
                  },
                ],
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
                link: "/Integrationer/Fagsystemer/",
              },
              {
                text: "Offentlige registre",
                link: "/Integrationer/Offentlige/",
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
