# elcoigueviejo-v2 - Sitio web en Jekyll

Sitio web desarrollado con Jekyll, optimizado para SEO y adaptado a la estructura de "El Coigüe Viejo".

## 🚀 Características

- Estructura completa de Jekyll con layouts y includes
- Optimización SEO con jekyll-seo-tag
- Sitemap automático con jekyll-sitemap
- Feed RSS con jekyll-feed
- Estilos SASS y CSS personalizados
- Diseño responsive y moderno
- Ejemplo de post incluido

## 📁 Estructura del Proyecto

```
elcoigueviejo-v2/
├── _config.yml              # Configuración principal del sitio
├── Gemfile                  # Dependencias de Ruby
├── index.md                 # Página de inicio
├── about.md                 # Página "Sobre nosotros"
├── blog.md                  # Página de blog
├── contact.md               # Página de contacto
│
├── _layouts/                # Plantillas de diseño
│   ├── default.html         # Layout base
│   ├── home.html            # Layout de inicio
│   └── post.html            # Layout para posts
│
├── _includes/               # Componentes reutilizables
│   ├── head.html            # Meta tags y SEO
│   ├── header.html          # Cabecera del sitio
│   └── footer.html          # Pie de página
│
├── _posts/                  # Publicaciones del blog
│   └── 2026-02-12-bienvenido-a-jekyll.md
│
├── _sass/                   # Estilos SASS
│   ├── _syntax.scss         # Resaltado de sintaxis
│   └── main.scss            # Estilos principales
│
├── assets/                  # Recursos estáticos
│   ├── css/
│   │   ├── elcoigue.css     # CSS generado
│   │   └── styles.scss      # SCSS principal
│   ├── js/
│   │   ├── elcoigue.js      # JS personalizado
│   │   └── main.js          # JS principal
│   └── images/              # Imágenes organizadas por secciones
│
└── _site/                   # Sitio generado (no editar manualmente)
```

## 🛠️ Instalación

### Prerrequisitos

- Ruby 2.5 o superior
- RubyGems
- GCC y Make

### Pasos de Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/USUARIO/elcoigueviejo-v2.git
   cd elcoigueviejo-v2
   ```

2. **Instalar Bundler**

   ```bash
   gem install bundler
   ```

3. **Instalar dependencias**

   ```bash
   bundle install
   ```

4. **Construir el sitio**

   ```bash
   bundle exec jekyll build
   ```

5. **Servir el sitio localmente**

   ```bash
   bundle exec jekyll serve
   ```

   Visita `http://localhost:4000` en tu navegador.

## ⚙️ Configuración

### \_config.yml

Personaliza tu sitio editando `_config.yml`:

```yaml
title: El Coigüe Viejo # Título del sitio
description: Hostería y servicios turísticos en la Patagonia
author: Tu Nombre # Tu nombre
email: tu@email.com # Tu email
url: "https://tudominio.com" # URL de tu sitio
baseurl: "" # Subdirectorio si aplica
```

### Plugins Incluidos

- **jekyll-seo-tag**: Genera automáticamente meta tags para SEO
- **jekyll-sitemap**: Crea sitemap.xml para motores de búsqueda
- **jekyll-feed**: Genera feed RSS/Atom

## 📝 Crear Contenido

### Crear un Nuevo Post

1. Crea un archivo en `_posts/` con el formato:

   ```
   YYYY-MM-DD-titulo-del-post.md
   ```

2. Agrega el Front Matter al inicio del archivo:

   ```yaml
   ---
   layout: post
   title: "Título de tu Post"
   date: 2026-02-12 20:00:00 -0000
   author: Tu Nombre
   tags: [blog, ejemplo]
   description: "Descripción para SEO"
   ---
   ```

3. Escribe tu contenido en Markdown debajo del Front Matter.

### Ejemplo de Post

```markdown
---
layout: post
title: "Mi Primer Post"
date: 2026-02-12
tags: [ejemplo, tutorial]
---

# Mi Primer Post

Este es el contenido de mi post en **Markdown**.

## Subtítulo

- Lista item 1
- Lista item 2
```

## 🎨 Personalización de Estilos

Los estilos principales están en `_sass/main.scss` y `assets/css/styles.scss`. Puedes personalizar:

- Colores
- Tipografía
- Espaciados
- Diseño responsive

Ejemplo para cambiar el color principal:

```scss
.site-header {
  background-color: #tu-color; // Cambia este valor
}
```

## 🌐 Deployment

Puedes desplegar el sitio en cualquier servicio de hosting estático, como:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3
- Surge.sh

### Despliegue en GitHub Pages

1. Ve a Settings > Pages en tu repositorio
2. Selecciona la rama `main` como fuente
3. El sitio estará disponible en `https://tu-usuario.github.io/elcoigueviejo-v2/`

### Despliegue en Cloudflare Pages

Este sitio está configurado para desplegarse en Cloudflare Pages usando Wrangler.

**Configuración en el Dashboard de Cloudflare Pages:**

1. **Build command:** `npm run build` (construye el sitio Jekyll)
2. **Build output directory:** `_site`
3. **Build command (deploy):** `npm run pages:deploy` (despliega con Wrangler)

O alternativamente, usa un solo comando:

- **Build command:** `npm run deploy` (construye y despliega en un paso)

**Scripts disponibles:**

```bash
npm run build          # Construye el sitio Jekyll
npm run serve          # Sirve el sitio localmente
npm run deploy         # Construye y despliega en Cloudflare
npm run pages:build    # Solo construye (para CI/CD)
npm run pages:deploy   # Solo despliega (requiere _site construido)
```

**Requisitos:**

- Node.js y npm instalados
- Ruby y Bundler instalados
- Dependencias de Ruby: `bundle install`

**Nota:** El archivo `wrangler.jsonc` está configurado para desplegar la carpeta `_site` en Cloudflare Workers.

## 📄 Archivos Clave

- `_includes/head.html`: Meta tags, SEO, favicon, enlaces CSS y feed
- `_layouts/default.html`: Layout base con head, header, contenido y footer
- `_layouts/home.html`: Layout para la página de inicio
- `_layouts/post.html`: Layout para posts con título, metadata y tags

## 🔍 SEO y Optimización

El sitio incluye optimización automática para:

- Meta tags Open Graph (Facebook)
- Twitter Cards
- Schema.org JSON-LD
- Canonical URLs
- Sitemap XML
- Feed RSS/Atom
- Compresión de CSS

## 📚 Recursos Adicionales

- [Documentación de Jekyll](https://jekyllrb.com/docs/)
- [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## 📝 Licencia

Este proyecto es privado y está prohibida su distribución.

## ✨ Autor

**Fénix Austral LTDA.**

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
