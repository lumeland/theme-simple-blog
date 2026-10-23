import { getFiles } from "@lumeland/core/utils/cdn.ts";
import type { Archetype } from "@lumeland/core/archetypes.ts";
import date, { type Options as DateOptions } from "@lumeland/plugin-date";
import lightningcss from "@lumeland/plugin-lightningcss";
import terser from "@lumeland/plugin-terser";
import prism, { type Options as PrismOptions } from "@lumeland/plugin-prism";
import basePath from "@lumeland/plugin-base-path";
import slugifyUrls from "@lumeland/plugin-slugify-urls";
import resolveUrls from "@lumeland/plugin-resolve-urls";
import metas from "@lumeland/plugin-metas";
import pagefind, { type Options as PagefindOptions } from "@lumeland/plugin-pagefind";
import sitemap from "@lumeland/plugin-sitemap";
import feed, { type Options as FeedOptions } from "@lumeland/plugin-feed";
import readingInfo from "@lumeland/plugin-reading-info";
import { merge } from "@lumeland/core/utils/object.ts";
import toc from "@lumeland/plugin-toc";
import lumeCms from "@lumeland/plugin-cms";
import cms from "./cms.ts";

// import image from "https://deno.land/x/lume_markdown_plugins@v0.9.0/image.ts";
// import footnotes from "https://deno.land/x/lume_markdown_plugins@v0.9.0/footnotes.ts";
import { alert } from "@mdit/plugin-alert";

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
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
      .use(basePath())
      .use(toc())
      .use(prism(options.prism))
      .use(readingInfo())
      .use(date(options.date))
      .use(metas())
      .use(lumeCms({ cms }))
      // .use(image())
      // .use(footnotes())
      .use(resolveUrls())
      .use(slugifyUrls())
      .use(
        pagefind({
          componentUI: {
            placeholder: "/** pagefind */",
          },
        }),
      )
      .use(terser())
      .use(lightningcss())
      .use(sitemap())
      .use(feed(options.feed))
      .add("fonts")
      .add([".css"])
      .add("js")
      .add("favicon.png")
      .add("uploads")
      .mergeKey("extra_head", "stringArray")
      .preprocess([".md"], (pages) => {
        for (const page of pages) {
          page.data.excerpt ??= (page.data.content as string).split(/<!--\s*more\s*-->/i)[0];
        }
      });

    // Alert plugin
    site.hooks.addMarkdownItPlugin(alert);

    // Mastodon comment system
    site.remoteFile("/js/comments.js", "npm:@oom/mastodon-comments@0.3.2/src/comments.js");

    // Remote files
    const files = ["_includes/**", "_data/**", "**/_data.yml", "js/**", "*.{md,js,vto,css,png}"];
    site.remote("/", import.meta.resolve("./src"), files);
  };
}

export const setup: Archetype = async function* () {
  const specifier = import.meta.resolve("./src");
  const patterns = ["/_data.yml", "/404.md", "/favicon.png", "/posts/*.md", "/pages/*.md"];

  for (const [path, url] of await getFiles(specifier, patterns)) {
    yield {
      path,
      overwrite: true,
      content: new URL(url),
    };
  }
};
