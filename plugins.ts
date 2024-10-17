import date, {Options as DateOptions} from "lume/plugins/date.ts";
import postcss from "lume/plugins/postcss.ts";
import terser from "lume/plugins/terser.ts";
import prism, {Options as PrismOptions} from "lume/plugins/prism.ts";
import basePath from "lume/plugins/base_path.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import metas from "lume/plugins/metas.ts";
import pagefind, {Options as PagefindOptions} from "lume/plugins/pagefind.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed, {Options as FeedOptions} from "lume/plugins/feed.ts";
import readingInfo from "lume/plugins/reading_info.ts";
import {merge} from "lume/core/utils/object.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.7.1/toc.ts";
import image from "https://deno.land/x/lume_markdown_plugins@v0.7.1/image.ts";
import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.7.1/footnotes.ts";
import {alert} from "npm:@mdit/plugin-alert@0.13.1";
// code highlighting
// inline images and svgs and js
import inline from "lume/plugins/inline.ts";
// math rendering
import katex from "lume/plugins/katex.ts";
// minify it
import minifyHTML from "lume/plugins/minify_html.ts";
// mermaid
// import mermaid from "@ooker777/lume-mermaid-plugin/";
import mermaid from "./customPlugins/mermaid/mod.js";
// for rendering jsx components in markdown template engine
import jsx from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";


import "lume/types.ts";

export interface Options {
  prism?: Partial<PrismOptions>;
  date?: Partial<DateOptions>;
  pagefind?: Partial<PagefindOptions>;
  feed?: Partial<FeedOptions>;
}

export const defaults: Options = {
  feed: {
    output: ["/feed.xml", "/feed.json"],
    query: "type=post",
    info: {
      title: "=metas.site",
      description: "=metas.description",
    },
    items: {
      title: "=title",
    },
  },
  prism:
    {
      theme: [
        {
          name: "funky",
          path: "/_includes/css/code_light.css",
        },
        {
          name: "funky",
          path: "/_includes/css/code_dark.css",
        },
      ]
    },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site.use(postcss())
      .use(basePath())
      .use(toc())
      .use(prism(options.prism))
      .use(readingInfo({
        wordsPerMinute: 275,
        extensions: [".md", ".mdx"],
      }))
      .use(date(options.date))
      .use(metas())
      .use(image())
      .use(footnotes())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(terser())
      .use(pagefind(options.pagefind))
      .use(sitemap())
      .use(feed(options.feed))
      .use(inline())
      .use(katex())
      .use(mermaid())
      .use(minifyHTML())
      .use(jsx())
      .use(mdx(/* Options */))
      .copy("fonts")
      .copy("js")
      .copy("favicon.png")
      .copy("uploads")
      .mergeKey("extra_head", "stringArray")
      .copy("assets")
      .ignore("README.md", "CHANGELOG.md", "node_modules")
      .preprocess([".md", ".mdx"], (pages) => {
        for (const page of pages) {
          page.data.excerpt ??= (page.data.content as string).split(
            /<!--\s*more\s*-->/i,
          )[0];
        }
      });

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);

    // Mastodon comment system
    site.remoteFile(
      "/js/comments.js",
      "https://unpkg.com/@oom/mastodon-comments@0.2.2/src/comments.js",
    );
  };
}
