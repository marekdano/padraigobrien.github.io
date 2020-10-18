---
title: Books on why software engineering sucks
layout: layout.njk
---
<ul>

{%- for book in collections.book -%}
  <li><a href="{{book.url}}"> {{ book.data.title }} </a></li>
{%- endfor -%}
</ul>