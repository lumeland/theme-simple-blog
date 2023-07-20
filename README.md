# Simple Blog

[Lume](https://lume.land) theme to create a simple blog.

- It supports tags and post authors.
- RSS (Atom and JSON).
- Sitemap and SEO features.
- Instant search engine.

## Install as a remote theme

The **fastest and easiest** way to use this theme is by importing it as a remote
module. It allows to create a blog in seconds and update it at any time just by
changing the version number in the import URL. Just add the following code to
your `_config.ts` file:

```ts
import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.10.2/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

You can see an example in the [demo](./demo) folder. To customize it copy the
[`_data.yml`](./src/_data.yml) file in your blog root folder and edit it with
your data. The posts must be saved in the `posts` folder. For example
`posts/`my-first-posts.md`.

## Use it as a base template

To use this theme as a base template for a more customized blog, clone this repo
and edit the [_config.ts](./_config.ts) file. The source files are in the
[src](./src/) folder. And you can remove the `/demo` folder.
