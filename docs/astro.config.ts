import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";

import markdocGrammar from "./grammars/markdoc.tmLanguage.json";

const site =
  (process.env.CONTEXT === "deploy-preview" ||
  process.env.CONTEXT === "branch-deploy"
    ? process.env.DEPLOY_PRIME_URL
    : process.env.URL) ?? "https://astro-contributors.netlify.app";

export default defineConfig({
  site,
  redirects: {
    "/all-contributors": "/components/all-contributors/",
    "/parameters": "/components/contributor-list/",
  },
  integrations: [
    starlight({
      credits: true,
      components: {
        Footer: "./src/components/Footer.astro",
      },
      title: "Astro Contributors",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: new URL("og.png", site).href,
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "Display a list of all contributors to your project.",
          },
        },
      ],
      editLink: {
        baseUrl:
          "https://github.com/trueberryless/astro-contributors/edit/main/docs/",
      },
      customCss: ["./src/styles/custom.css"],
      expressiveCode: { shiki: { langs: [markdocGrammar] } },
      sidebar: [
        { slug: "getting-started" },
        {
          label: "Components",
          items: [
            { slug: "components/contributor-list" },
            { slug: "components/all-contributors" },
          ],
        },
      ],
      social: [
        {
          icon: "blueSky",
          label: "BlueSky",
          href: "https://bsky.app/profile/felixs.dev",
        },
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless/astro-contributors",
        },
      ],
      plugins: [
        starlightPluginsDocsComponents({
          pluginName: "astro-contributors",
        }),
      ],
    }),
  ],
});
