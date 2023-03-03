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
            text: "Datahub",
            link: "/Datahub/",
          },
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
                text: "Active Directory",
                link: "Backend/ActiveDirectory/",
              },
              {
                text: "API",
                link: "Backend/API/",
              },
              {
                text: "API Management",
                link: "Backend/APIManagement/",
              },
              {
                text: "Databases",
                link: "Backend/Databases/",
              },
              {
                text: "Eventgrid",
                link: "Backend/Eventgrid/",
              },
              {
                text: "Functions",
                link: "Backend/Functions/",
              },
              {
                text: "Keyvault",
                link: "Backend/Keyvault/",
              },
              {
                text: "Queues",
                link: "Backend/Queues/",
              },
              {
                text: "Storage",
                link: "Backend/Storage/",
              },
            ],
          },
          {
            text: "Devops",
            collapsed: true,
            link: "/Devops/",
            items: [
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
        ],
      },
    ],
  },
};
