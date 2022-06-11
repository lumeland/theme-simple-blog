import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";

const site = lume();

export default site
  .ignore("README.md")
  .copy("img")
  .use(postcss())
  .use(terser())
  .use(date())
  .use(codeHighlight())
  .use(basePath())
  .use(slugifyUrls({ alphanumeric: false }))
  .use(resolveUrls())
  .preprocess([".md"], (page) => {
    page.data.excerpt ??= page.data.content.split("<!--more-->")[0];
  })
  .remoteFile(
    "_includes/css/code.css",
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.0.0/build/styles/github-dark.min.css",
  );
