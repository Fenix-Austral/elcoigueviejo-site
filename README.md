# Jekyll Scaffolding - Plantilla Profesional con SEO

Plantilla profesional para generar sitios web con Jekyll, completamente optimizada para SEO.

## 🚀 Características

- ✅ Estructura completa de Jekyll con layouts y includes
- ✅ Optimización SEO con jekyll-seo-tag
- ✅ Sitemap automático con jekyll-sitemap
- ✅ Feed RSS con jekyll-feed
- ✅ Estilos SASS con compresión
- ✅ Diseño responsive y moderno
- ✅ Post de ejemplo incluido

## 📁 Estructura del Proyecto

```
jekyll-scaffolding/
├── _config.yml              # Configuración principal del sitio
├── Gemfile                  # Dependencias de Ruby
├── .gitignore              # Archivos a ignorar en Git
├── index.md                # Página de inicio
│
├── _layouts/               # Plantillas de diseño
│   ├── default.html        # Layout base
│   └── post.html           # Layout para posts
│
├── _includes/              # Componentes reutilizables
│   ├── head.html           # Meta tags y SEO
│   ├── header.html         # Cabecera del sitio
│   └── footer.html         # Pie de página
│
├── _posts/                 # Publicaciones del blog
│   └── 2026-02-12-bienvenido-a-jekyll.md
│
├── _sass/                  # Estilos SASS
│   └── main.scss           # Estilos principales
│
└── assets/                 # Recursos estáticos
    ├── css/
    │   └── styles.scss     # Archivo SCSS principal
    ├── js/                 # JavaScript
    └── images/             # Imágenes
```

## 🛠️ Instalación

### Prerrequisitos

- Ruby 2.5 o superior
- RubyGems
- GCC y Make

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jcalistop/jekyll-scaffolding.git
   cd jekyll-scaffolding
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

### _config.yml

Personaliza tu sitio editando `_config.yml`:

```yaml
title: Mi Sitio Jekyll              # Título del sitio
description: Un sitio profesional   # Descripción para SEO
author: Tu Nombre                   # Tu nombre
email: tu@email.com                 # Tu email
url: "https://tudominio.com"       # URL de tu sitio
baseurl: ""                        # Subdirectorio si aplica
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
   tags: [jekyll, tutorial]
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

Los estilos están en `_sass/main.scss`. Puedes personalizar:

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

### GitHub Pages

1. En tu repositorio de GitHub, ve a Settings > Pages
2. Selecciona la rama `main` como fuente
3. Tu sitio estará disponible en `https://tu-usuario.github.io/repositorio/`

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `jekyll build`
3. Directorio de publicación: `_site`

### Otros Servicios

El sitio puede desplegarse en cualquier servicio que soporte sitios estáticos:
- Vercel
- Cloudflare Pages
- AWS S3
- Surge.sh

## 📄 Archivos Clave

### _includes/head.html

Contiene todas las etiquetas SEO:
- Meta tags viewport
- Jekyll SEO tag
- Enlace al CSS
- Favicon
- Feed RSS
- URL canónica

### _layouts/default.html

Layout base que incluye:
- Head (con SEO)
- Header
- Contenido principal
- Footer

### _layouts/post.html

Layout para posts con:
- Título y metadata
- Contenido del post
- Tags

## 🔍 SEO Features

El sitio incluye optimización automática para:

- ✅ Meta tags Open Graph (Facebook)
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD
- ✅ Canonical URLs
- ✅ Sitemap XML
- ✅ Feed RSS/Atom
- ✅ Compresión de CSS

## 📚 Recursos Adicionales

- [Documentación de Jekyll](https://jekyllrb.com/docs/)
- [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)
- [Markdown Guide](https://www.markdownguide.org/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.

## ✨ Autor

**jcalistop**

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!
