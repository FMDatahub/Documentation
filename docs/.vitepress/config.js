import {createRequire} from "module";
const require = createRequire(import.meta.url);

const fs = require("fs");
const path = require("path");

function extractTitle(content) {
  const titleRegex = /^#\s+(.+)$/m;
  const match = content.match(titleRegex);
  return match ? match[1] : null;
}

const sortOrder = [
  "Frontend",
  "API",
  "Events",
  "Integrationer",
  "Devops",
  "Databases",
  "Datalakes",
];

function sortEntries(a, b) {
  const aIndex = sortOrder.indexOf(a.name);
  const bIndex = sortOrder.indexOf(b.name);

  if (aIndex > -1 && bIndex > -1) {
    return aIndex - bIndex;
  } else if (aIndex > -1) {
    return -1;
  } else if (bIndex > -1) {
    return 1;
  }

  if (a.isDirectory() && b.isDirectory()) {
    return a.name.localeCompare(b.name);
  }
  return a.isDirectory()
    ? -1
    : b.isDirectory()
    ? 1
    : a.name.localeCompare(b.name);
}

function generateSidebar(dir = "../../docs", basePath = "/") {
  const docsDir = path.resolve(__dirname, dir);
  let entries = [];

  try {
    entries = fs.readdirSync(docsDir, {withFileTypes: true});
  } catch (err) {
    console.error(`Error reading directory "${docsDir}":`, err.message);
    return [];
  }

  entries.sort(sortEntries);

  const sidebar = entries
    .filter(
      (entry) =>
        !entry.name.startsWith(".") &&
        (entry.isDirectory() || entry.name.endsWith(".md"))
    )
    .map((entry) => {
      if (entry.isDirectory()) {
        const folderPath = path.join(basePath, entry.name);
        const indexPath = path.join(folderPath, "index");
        const children = generateSidebar(
          path.join(dir, entry.name),
          folderPath
        );

        const indexFilePath = path.join(docsDir, entry.name, "index.md");

        let title = entry.name;
        if (fs.existsSync(indexFilePath)) {
          // Read the content of the index.md file
          const indexContent = fs.readFileSync(indexFilePath, "utf-8");

          // Extract the title from the content
          title = extractTitle(indexContent) || entry.name;
        }

        return {
          text: title,
          link: indexPath,
          items: children,
          collapsed: true,
        };
      } else {
        const fileWithoutExtension = entry.name.replace(/.md$/, "");
        const filePath = path.join(basePath, fileWithoutExtension);

        if (fileWithoutExtension !== "index") {
          // Read the content of the .md file
          const content = fs.readFileSync(
            path.join(docsDir, entry.name),
            "utf-8"
          );

          // Extract the title from the content
          const title = extractTitle(content) || fileWithoutExtension;

          return {
            text: title,
            link: filePath,
          };
        }
      }
    })
    .filter((entry) => entry !== undefined);

  return sidebar;
}

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
    sidebar: generateSidebar(),
  },
};
