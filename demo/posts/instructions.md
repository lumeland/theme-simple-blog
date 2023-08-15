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

## Customization

You can customize the blog creating the remote files in your local folder. For
example, to change some style variables, create the file
`_includes/css/variables.css` file in your local folder and edit the variables
values:

```css
:root {
  /* Light colors */
  color-scheme: light;
  --color-base: hsl(220, 30%, 10%);
  --color-text: hsl(220, 30%, 20%);
  --color-dim: hsl(220, 30%, 40%);
  --color-link: hsl(220, 30%, 10%);
  --color-link-hover: hsl(220, 30%, 40%);
  --color-line: hsl(220, 30%, 90%);
  --color-background: hsl(220, 30%, 100%);

  /* Fonts */
  --font-family-code: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
  --font-family-ui: -apple-system, system-ui, sans-serif;

  --font-code: 1rem/1.5 var(--font-family-code);
  --font-display: bold clamp(2rem, 10vw, 4rem)/1 var(--font-family-ui);
  --font-display-spacing: -0.02em;
  --font-title: bold clamp(1.5rem, 8vw, 2rem)/1.2 var(--font-family-ui);
  --font-title-spacing: -0.015em;
  --font-body: clamp(1rem, 5vw, 1.2rem)/1.5 var(--font-family-ui);
  --font-body-bold: bold var(--font-body);
  --font-ui: 1rem/1.4 var(--font-family-ui);
  --font-small: 0.85rem/1.4 var(--font-family-ui);

  /* Space */
  --row-gap-small: 2.5rem;
  --row-gap-medium: clamp(2rem, 5vh, 5rem);
}

/* Dark colors */
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --color-base: hsl(220, 20%, 100%);
    --color-text: hsl(220, 20%, 80%);
    --color-dim: hsl(220, 20%, 60%);
    --color-link: hsl(220, 20%, 100%);
    --color-link-hover: hsl(220, 20%, 70%);
    --color-line: hsl(220, 20%, 20%);
    --color-background: hsl(220, 20%, 10%);
  }
}
```
