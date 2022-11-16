import date from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import prism, { Options as PrismOptions } from "lume/plugins/prism.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import pagefind from "lume/plugins/pagefind.ts";
import sitemap from "https://raw.githubusercontent.com/lumeland/experimental-plugins/b75edba434ab80d0b9033233f6ade19c09825eb7/sitemap/sitemap.ts";

import type { Page, Site } from "lume/core.ts";

export interface Options {
  prism?: Partial<PrismOptions>;
}

/** Configure the site */
export default function (options: Options = {}) {
  return (site: Site) => {
    site.use(postcss())
      .use(basePath())
      .use(prism(options.prism))
      .use(date())
      .use(metas())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(pagefind())
      .use(terser())
      .use(sitemap())
      .copy("fonts")
      .copy("favicon.png")
      .preprocess([".md"], (page: Page) => {
        page.data.excerpt ??= (page.data.content as string).split(
          /<!--\s*more\s*-->/i,
        )[0];
      });

    // Highlight.js stylesheet
    site.remoteFile(
      "_includes/css/code.css",
      "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-okaidia.min.css",
    );
  };
}
