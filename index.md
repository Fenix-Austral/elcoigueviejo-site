---
layout: default
title: Inicio
---

<div class="home-hero">
  <h1>Bienvenido a {{ site.title }}</h1>
  <p>{{ site.description }}</p>
</div>

<section class="posts-list">
  <h2>Últimas Publicaciones</h2>
  
  {% for post in site.posts limit:5 %}
    <div class="post-item">
      <h3>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <p class="post-meta">
        <time datetime="{{ post.date | date_to_xmlschema }}">
          {{ post.date | date: "%d de %B, %Y" }}
        </time>
      </p>
      <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </div>
  {% endfor %}
  
  {% if site.posts.size == 0 %}
    <p>No hay publicaciones aún. ¡Pronto habrá contenido nuevo!</p>
  {% endif %}
</section>
