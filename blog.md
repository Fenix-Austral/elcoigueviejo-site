---
layout: default
title: Blog
permalink: /blog/
---

# Blog

{% for post in site.posts %}
  <div class="post-item">
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p>{{ post.date | date: "%d de %B, %Y" }}</p>
    <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
{% endfor %}

{% if site.posts.size == 0 %}
  <p>No hay publicaciones aún.</p>
{% endif %}