# Simple Blog

Lume theme to create a simple blog.

- It supports tags and post authors.
- RSS (Atom and JSON).
- Sitemap and SEO features.

## Install

```ts
import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

## Usage

- Copy the `_data.yml` file in your blog root folder and edit with your blog
  data.
- Save your posts in the `posts` folder. For example: `posts/my-first-posts.md`.
- See [lume.land](https://lume.land) for more info.
