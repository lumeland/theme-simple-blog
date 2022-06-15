import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";

import type { Page, Site } from "lume/core.ts";

export default function () {
  return (site: Site) => {
    // Configure the site
    site.use(postcss())
      .use(basePath())
      .use(codeHighlight())
      .use(date())
      .use(metas())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(terser())
      .copy("fonts")
      .preprocess([".md"], (page: Page) => {
        page.data.excerpt ??= page.data.content.split("<!--more-->")[0];
      });

    // Add remote files
    const files = [
      "_includes/css/fonts.css",
      "_includes/css/navbar.css",
      "_includes/css/page.css",
      "_includes/css/post-list.css",
      "_includes/css/post.css",
      "_includes/css/reset.css",
      "_includes/css/variables.css",
      "_includes/layouts/archive_result.njk",
      "_includes/layouts/archive.njk",
      "_includes/layouts/base.njk",
      "_includes/layouts/page.njk",
      "_includes/layouts/post.njk",
      "_includes/templates/post-details.njk",
      "_includes/templates/post-list.njk",
      "fonts/inter.woff2",
      "fonts/inter-italic.woff2",
      "posts/_data.yml",
      "_data.yml",
      "404.md",
      "about.md",
      "archive_result.tmpl.js",
      "archive.tmpl.js",
      "feed.tmpl.js",
      "feed.xml.njk",
      "index.njk",
      "robots.txt.njk",
      "sitemap.xml.njk",
      "styles.css",
    ];

    const base = new URL("./", import.meta.url);

    for (const file of files) {
      site.remoteFile(file, new URL(file, base).href);
    }

    // Highlight.js stylesheet
    site.remoteFile(
      "_includes/css/code.css",
      "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.0/build/styles/github-dark.min.css",
    );
  };
}
