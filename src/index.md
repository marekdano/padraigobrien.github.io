---
title: Blogging about learning about frontmatter
layout: layout.njk
---
{% assign posts = collections.posts | reverse %}

{%- for post in collections.posts -%}
      <div class="py-8 flex border-t-2 border-gray-200 flex-wrap md:flex-no-wrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="tracking-widest font-medium title-font text-gray-900">{{post.data.category}}</span>
          <span class="mt-1 text-gray-500 text-sm">{{post.data.postDate}}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{{post.data.title}}</h2>
          <p class="leading-relaxed">{{post.data.subtitle}}</p>
          <a class="text-teal-500 inline-flex items-center mt-4">Read More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
{%- endfor -%}