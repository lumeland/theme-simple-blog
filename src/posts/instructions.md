---
title: How to install this theme
date: 2022-06-12
author: Óscar Otero
tags:
  - Instructions
---

**Simple blog** is a clean and minimal blog theme for Lume, with support for
tags and authors. It allows you to build your own blog **in seconds**, and
provides Atom and JSON feeds for your subscribers.

<!--more-->

The **fastest and easiest** way to configure this theme is the
[Lume init command](https://deno.land/x/lume_init), which you can also copy
easily from the [Simple Blog theme page](https://lume.land/theme/simple-blog/).
Running:

```bash
deno run -A https://lume.land/init.ts --theme=simple-blog
```

will create a new project with Simple Blog configured. Edit the `_data.yml` file
in your blog root folder with your data to customize the site title,
description, and metadata.

Posts must be saved in the `posts` folder. For example,
`posts/my-first-posts.md`.

## Install as a remote theme

To add the theme to an existing Lume project, import it in your `_config.ts`
file as a remote module. Update it by changing the version number in the import
URL:

```ts
import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.15.6/mod.ts";

const site = lume();

site.use(blog());

export default site;
```

Copy the
[`_data.yml`](https://github.com/lumeland/theme-simple-blog/blob/main/src/_data.yml)
file to your blog root folder and edit it with your data.

## Customization

> [!tip]
>
> You can use [lumeCMS](https://lume.land/cms) to customize the blog and add
> content easily
