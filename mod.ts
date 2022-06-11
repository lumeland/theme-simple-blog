import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";

import type { Page, Site } from "lume/core.ts";

export default function () {
  return (site: Site) => {
    // Configure the site
    site.copy("img")
      .use(postcss())
      .use(terser())
      .use(date())
      .use(codeHighlight())
      .use(basePath())
      .use(slugifyUrls({ alphanumeric: false }))
      .use(resolveUrls())
      .preprocess([".md"], (page: Page) => {
        page.data.excerpt ??= page.data.content.split("<!--more-->")[0];
      });

    // Add remote files
    const files = [
      "_includes/css/navbar.css",
      "_includes/css/page.css",
      "_includes/css/post-list.css",
      "_includes/css/post.css",
      "_includes/css/reset.css",
      "_includes/css/variables.css",
      "_includes/layouts/archive.njk",
      "_includes/layouts/base.njk",
      "_includes/layouts/post.njk",
      "_includes/layouts/tag.njk",
      "_includes/templates/post-details.njk",
      "_includes/templates/post-list.njk",
      "posts/_data.yml",
      "_data.yml",
      "404.md",
      "about.md",
      "archive.tmpl.js",
      "feed.tmpl.js",
      "feed.xml.njk",
      "index.njk",
      "robots.txt.njk",
      "sitemap.xml.njk",
      "styles.css",
      "tag.tmpl.js",
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
