---
layout: singlepost
tags: post
title: "Interviewing"
subtitle: "What i learned from doing 100 interviews with graduates."
description: "I spent about 100 hours talking with software engineering graduates who found it difficult to find jobs in the last 18 months" # Quotation marks allow colons, semicolons, etc.
author: Padraig O'Brien
date: 2021-05-08T21:30:00 # This would be 9:30 PM (2130) UTC on February 28, 2020
lastmod: 2020-05-08T21:30:00 # Comment-out this line with a # if content is unchanged
draft: false # Make it "true" if you don't want Hugo to "publish" yet
featured_image: globe-life-park-rangers-1402096_6000x4000.jpg # Or whatever image you want to use
featured_image_alt: "Baseball game at Globe Life Park, Arlington, Texas" # Always include an ALT tag for accessibility --  Quotation marks allow colons, semicolons, etc.
featured_image_caption: "Image: rwelborn; Pixabay" # Quotation marks allow colons, semicolons, etc.
---

Your opening text goes here.

## In-article heading --- it's an H2 because your title is the H1

And after another paragraph or two or three, you may want to add a *subheading*, which would be an H3, so it would be like the following.[^fnExample]

[^fnExample]: Also, if you want to do footnotes in Markdown, this is how it's done. There's code in the `.eleventy.js` file to handle it properly (including **not** encasing the body copy's footnote reference numbers in brackets, thus overriding what unfortunately is the typical behavior with the usual plugin for the `markdown-it` parser.)

### Subheading (H3)

Text here.

Maybe you want a code block to illustrate something. Here's one:

{% raw %}
```js

/* =========
This is some simple JavaScript, 
just so you can see how Eleventy handles 
a code block (with the help of PrismJS).
It doesn't **do** anything here, of course.
Helpful on a dev blog, eh?
========= */

var i, j
for(i = 0; i < 10; i++) {
  j = i
  console.log(j)
}

/* ========= 
When run, the above would output:

0
1
2
3
4
5
6
7
8
9
========= */

```
{% endraw %}

Closing text. That ends Post 7!