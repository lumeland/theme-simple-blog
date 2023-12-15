---
title: How to install this theme
date: 2022-06-12
author: Óscar Otero
tags:
  - Instructions
comments:
  src: https://mastodon.gal/@misteroom/110810445656343599
---

**Simple blog** is a clean and minimal blog theme for Lume, with support for
tags and authors. It allows to build your own blog **in seconds**, providing
also support for RSS.

<!--more-->

To use it, just import the theme in your `_config.ts` file:

```js
import lume from "lume";
import blog from "https://deno.land/x/lume_theme_simple_blog/mod.ts";

const site = lume();
site.use(blog());

export default site;
```

[Download the `_data.yml` file](https://github.com/lumeland/theme-simple-blog/blob/main/src/_data.yml)
into your project and change the blog name, add links to the menu, etc.

## Custom styles

This blog uses [lumeland/ds](https://github.com/lumeland/ds) for basic styling.
To customize the font and colors, you can override the
[CSS variables defined here](https://github.com/lumeland/ds/blob/main/src/variables.css).

Create the `extra_head` variable in your `_data.yml` file. This variable allows
to add HTML code to the `<head>`, for example:

```yml
extra_head: |
  <style>
    :root {
        --color-text: blue;
    }
  </style>
```

If you prefer an external file, create the css file (for example: `/custom.css`)
and use the `extra_head` variable to import it:

```yml
extra_head: <link rel="stylesheet" href="/custom.css">
```
