---
title: This post shows how to localize some of the static text
date: 2023-05-07
author: Reed von Redwitz
excerpt: Read on if you want to change "Table of Contents", "Older post", and other stuff!
tags:
  - Instructions
static_text:
    toc_name: Inhalt
    next_post: neuerer Beitrag →
    previous_post: ← vorheriger Beitrag
    by: von
    reading_time: Minuten Lesezeit
---

Look, the content of this is in English, but the markup of the page has changed to German. Instead of "Table of Contents" we now have "Inhalt". And people say that German words are so much longer! How can you do the same?

<!--more-->

## Overrides within a Post
In the front matter for a specific post you can do something like this:
```md
static_text:
    toc_name: Inhalt
    next_post: neuerer Beitrag →
    previous_post: ← vorheriger Beitrag
    by: von
    reading_time: Minuten Lesezeit
```
(These are currently all the overrides that are available.) You should probably pick different words, unless your site is in German.

## Overrides for the Site
That's a bit annoying though, as per the DRY principle. So of course we can leverage the [Shared data](https://lume.land/docs/creating-pages/shared-data/) feature, built right into Lume. In the `_data.yml` at the root level, I have the following defined:
```md
mergedKeys:
  static_text: object

static_text:
  toc_name: Table of Contents
```

Why? Simply to demonstrate two things:
1. That shared data actually works with this feature.
2. That I can successfully override something on a particular page. Confused about `mergedKeys`? You obviously haven't read the [documentation](https://lume.land/docs/core/merged-keys/) enough times. Get to it!
