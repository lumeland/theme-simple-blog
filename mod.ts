import site from "./_config.ts";

export interface Config {
  location?: URL;
}

export default function (config: Config = {}) {
  if (config.location) {
    site.config.location = config.location;
  }

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

  return site;
}
