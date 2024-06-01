---
title: How to install this theme
date: 2022-06-12
author: Óscar Otero
tags:
  - Instructions
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

## Customization

> [!tip]
>
> You can use [lumeCMS](https://lume.land/cms) to customize the blog and add
> content easily
