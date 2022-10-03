import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import pagefind from "lume/plugins/pagefind.ts";

import type { Page, Site } from "lume/core.ts";

/** Configure the site */
export default function () {
  return (site: Site) => {
    site.use(postcss())
      .use(basePath())
      .use(codeHighlight())
      .use(date())
      .use(metas())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(pagefind())
      .use(terser())
      .copy("fonts")
      .copy("favicon.png")
      .preprocess([".md"], (page: Page) => {
        page.data.excerpt ??=
          (page.data.content as string).split("<!--more-->")[0];
      });

    // Highlight.js stylesheet
    site.remoteFile(
      "_includes/css/code.css",
      "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.0/build/styles/github-dark.min.css",
    );
  };
}
