# Simple Blog

Lume theme to create a simple blog.

- It supports tags and post authors.
- RSS (Atom and JSON).
- Sitemap and SEO features.

## Install

Add this code to your `_config.ts` file:

```ts
import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.1.0/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

## Usage

- Copy the [`_data.yml`](_data.yml) file in your blog root folder and edit it
  with your own data.
- Save the posts in the `posts` folder. For example: `posts/my-first-posts.md`.
- See [lume.land](https://lume.land) for more info.
