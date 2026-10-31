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
import markdownFootnotes from "@lumeland/plugin-markdown-footnotes";
import lumeCms from "@lumeland/plugin-cms";
import cms from "./cms.ts";

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
      image: "$ img attr(src)",
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
      .use(markdownFootnotes())
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
    site.remote("/js/comments.js", "npm:@oom/mastodon-comments@0.3.2/src/comments.js");

    // Remote files
    const files = ["_includes/**", "_data/**", "**/_data.yml", "js/**", "*.{md,js,vto,css,png}"];
    site.remote("/", import.meta.resolve("./src"), files);
  };
}

export const setup: Lume.Archetype = function* () {
  yield {
    url: import.meta.resolve("./src"),
    files: ["/_data.yml", "/404.md", "/favicon.png", "/posts/*.md", "/pages/*.md"],
  };

  yield {
    path: "/uploads/.gitkeep",
    content: "",
  };
};
