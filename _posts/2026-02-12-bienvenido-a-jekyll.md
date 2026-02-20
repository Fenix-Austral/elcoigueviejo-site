---
layout: post
title: "Bienvenido a tu nuevo sitio Jekyll"
date: 2026-02-12 20:00:00 -0000
author: Tu Nombre
tags: [jekyll, tutorial, seo]
description: "Esta es tu primera publicación en Jekyll. Aprende cómo crear contenido optimizado para SEO."
---

¡Bienvenido a tu nuevo sitio Jekyll! Este es un post de ejemplo que muestra las capacidades de Jekyll con optimización SEO.

## ¿Qué es Jekyll?

Jekyll es un generador de sitios estáticos que te permite crear sitios web rápidos, seguros y optimizados para motores de búsqueda. Es perfecto para blogs, portafolios y sitios de documentación.

## Características principales

- **Rápido**: Los sitios estáticos se cargan increíblemente rápido
- **Seguro**: No hay base de datos ni backend vulnerable
- **Optimizado para SEO**: Con plugins como jekyll-seo-tag, tu sitio estará optimizado para buscadores
- **Markdown**: Escribe en Markdown y Jekyll lo convierte en HTML

## Cómo crear un nuevo post

Para crear un nuevo post, simplemente crea un archivo en el directorio `_posts/` con el formato:

```
YYYY-MM-DD-titulo-del-post.md
```

Por ejemplo:
- `2026-02-12-mi-primer-post.md`
- `2026-03-15-tutorial-jekyll.md`

## Front Matter

Cada post debe comenzar con un bloque de Front Matter en YAML:

```yaml
---
layout: post
title: "Título de tu post"
date: 2026-02-12
author: Tu Nombre
tags: [jekyll, tutorial]
description: "Descripción para SEO"
---
```

## Contenido en Markdown

Puedes usar todas las características de Markdown:

### Listas

- Elemento 1
- Elemento 2
- Elemento 3

### Enlaces

Visita [Jekyll](https://jekyllrb.com) para más información.

### Código

```ruby
def saludo
  puts "¡Hola, mundo!"
end
```

### Énfasis

Puedes usar **negrita** y *cursiva* en tu texto.

## Optimización SEO

Este sitio viene preconfigurado con:

- **jekyll-seo-tag**: Genera automáticamente etiquetas meta para SEO
- **jekyll-sitemap**: Crea un sitemap.xml para motores de búsqueda
- **jekyll-feed**: Genera un feed RSS para suscriptores

## Próximos pasos

1. Edita el archivo `_config.yml` con tu información
2. Personaliza los estilos en `_sass/main.scss`
3. Crea nuevos posts en el directorio `_posts/`
4. Despliega tu sitio en GitHub Pages, Netlify o cualquier servidor web

¡Feliz blogging!
