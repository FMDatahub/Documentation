export default {
  title: "Dokumentation",
  description: "Dokumentation for Datahub",
  srcDir: "./",
  base: "/Documentation/",
  ///cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    sidebar: [
      {
        items: [
          {
            text: "Frontend",
            collapsed: true,
            link: "/Frontend/",
            items: [
              {
                text: "Components",
                link: "Frontend/Components/",
              },
              {
                text: "Pages",
                link: "Frontend/Pages/",
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
              {
                text: "Pipelines",
                link: "Devops/Pipelines/",
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
                text: "Offentlige",
                link: "Integrationer/Offentlige/",
              },
            ],
          },

          {
            text: "Datadictionary",
            link: "/Datadictionary/",
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
