# Plan: Mejoras al scaffolding Jekyll para GitHub Pages

**TL;DR** — El proyecto tiene una base sólida (estructura Jekyll correcta, plugins SEO, GitHub Actions, diseño responsive básico), pero presenta un **bug crítico**: el header y footer enlazan a 3 páginas que no existen (`/about`, `/blog`, `/contact`), produciendo errores 404 inmediatos. También hay una duplicación del tag canonical, un favicon referenciado pero inexistente, y carencias en accesibilidad, variables SCSS y navegación mobile. A continuación, las mejoras organizadas por prioridad.

---

## Problemas críticos (el sitio falla sin resolverlos)

1. **Páginas fantasma enlazadas desde la navegación** — `_includes/header.html` y `_includes/footer.html` enlazan a `/about`, `/blog` y `/contact`, pero **ninguna de esas páginas existe**. Crear `about.md`, `blog.md` (o `blog/index.html` con listado de posts) y `contact.md` con contenido placeholder.

2. **Falta página 404** — GitHub Pages permite personalizar la página de error creando un `404.html` en la raíz con `permalink: /404.html` en el front matter.

3. **Tag canonical duplicado** — En `_includes/head.html` se declara manualmente `<link rel="canonical">`, pero `{% seo %}` de `jekyll-seo-tag` ya lo genera. **Eliminar la línea manual** para evitar duplicación.

4. **Favicon inexistente** — `_includes/head.html` referencia `assets/images/favicon.ico` pero el directorio `assets/images/` ni siquiera existe. Crear el directorio y agregar un favicon, o eliminar la referencia.

---

## Problemas de diseño y UX (alta prioridad)

5. **Sin menú hamburguesa en móvil** — Los estilos en `_sass/main.scss` usan `flex-wrap` pero no hay un toggle JS para navegación mobile. Agregar un botón hamburguesa con JavaScript mínimo y estilos correspondientes.

6. **Navegación sin estado activo** — Los links de navegación no marcan la página actual. Agregar lógica Liquid tipo `{% if page.url == '/about' %}class="active"{% endif %}` en el header.

7. **Sin variables SCSS** — Los colores, fuentes y breakpoints están hardcodeados por todo `_sass/main.scss`. Extraer a variables SCSS (`$primary-color`, `$text-color`, `$breakpoint-md`, etc.) para facilitar la personalización.

8. **Jerarquía HTML incorrecta en index** — En `index.md`, los títulos de los posts usan `<h2>` dentro de una sección que ya tiene `<h2>`. Cambiar a `<h3>` para los títulos de cada post.

---

## Mejoras de SEO y configuración (prioridad media)

9. **Falta `lang` y `timezone` en la configuración** — Agregar `lang: es`, `timezone: America/...` y `encoding: utf-8` en `_config.yml`. Aunque `_layouts/default.html` ya tiene `lang="es"` en el HTML, debería parametrizarse con `{{ site.lang }}`.

10. **Defaults de front matter** — Agregar un bloque `defaults` en `_config.yml` para asignar automáticamente `layout: post` y `author` a todos los posts:

    ```yaml
    defaults:
      - scope:
          path: ""
          type: "posts"
        values:
          layout: post
          author: "Tu Nombre"
    ```

11. **Falta imagen Open Graph** — Ni el sitio ni el post de ejemplo (`_posts/2026-02-12-bienvenido-a-jekyll.md`) incluyen `image:` en el front matter. Sin esto, los shares en redes sociales salen sin imagen.

12. **Sin syntax highlighting CSS** — Jekyll usa Rouge por defecto pero no hay estilos para bloques de código con colores. Agregar un `_sass/_syntax.scss` generado con `rougify`.

---

## Accesibilidad (prioridad media)

13. **Sin estilos `:focus`** — `_sass/main.scss` solo define `:hover`, nunca `:focus`. Agregar `outline` visible en todos los elementos interactivos.

14. **Falta "skip to content"** — Agregar un link oculto al inicio del body (`<a href="#main" class="skip-link">Saltar al contenido</a>`) para navegación por teclado.

15. **Falta `aria-label`** — El `<nav>` en `_includes/header.html` no tiene `aria-label="Navegación principal"`.

---

## Elementos faltantes complementarios (prioridad baja)

16. **Archivo `LICENSE`** — El README dice "Licencia MIT" pero no existe el archivo.

17. **Navegación prev/next en posts** — `_layouts/post.html` no incluye links al post anterior/siguiente usando `page.previous` y `page.next`.

18. **Paginación en home** — `index.md` usa `limit:5` pero no hay paginación real. Posts después del 5to son inaccesibles desde la home.

19. **Tags como enlaces** — En `_layouts/post.html` los tags son `<span>` sin link. Sin una página de tags, no tienen funcionalidad.

20. **Directorios vacíos del README** — El README documenta `assets/js/` y `assets/images/` como parte de la estructura, pero no existen. Crear con archivos `.gitkeep`.

21. **Dark mode** — Agregar soporte para `prefers-color-scheme: dark` en SCSS.

22. **Tiempo de lectura y botones de compartir** — Detalles profesionales para el layout de posts.

---

## Steps

1. Crear las páginas faltantes: `about.md`, `blog.md`, `contact.md` y `404.html` con front matter y contenido placeholder
2. Eliminar la línea `<link rel="canonical">` manual de `_includes/head.html`
3. Crear `assets/images/` con un favicon y `assets/js/` con `.gitkeep`
4. Refactorizar `_sass/main.scss` extrayendo variables SCSS al inicio del archivo
5. Agregar menú hamburguesa: botón HTML en `_includes/header.html`, JS mínimo en `assets/js/main.js`, estilos responsive en SCSS
6. Agregar lógica de navegación activa en `_includes/header.html`
7. Corregir jerarquía de encabezados en `index.md` (`<h2>` → `<h3>` para títulos de posts)
8. Agregar `lang`, `timezone`, `encoding` y `defaults` en `_config.yml`
9. Agregar skip-to-content, `aria-label` y estilos `:focus` para accesibilidad
10. Agregar archivo `LICENSE` MIT
11. Agregar navegación prev/next en `_layouts/post.html`
12. Agregar `_sass/_syntax.scss` para syntax highlighting

## Verification

- Ejecutar `bundle exec jekyll serve` y navegar todas las páginas del menú sin errores 404
- Validar HTML con el W3C Validator
- Verificar que no haya tags canonical duplicados en el source del HTML generado
- Probar navegación por teclado (Tab) y verificar que el focus sea visible
- Probar en viewport móvil que el menú hamburguesa funcione
- Ejecutar Lighthouse en Chrome DevTools y verificar puntuación de SEO y accesibilidad

## Decisions

- Prioridad a crear las páginas faltantes sobre cualquier mejora cosmética (el sitio está roto sin ellas)
- Variables SCSS en el mismo archivo `main.scss` en lugar de un `_variables.scss` separado (mantener simplicidad del scaffolding)
- Menú mobile con JS vanilla mínimo, sin dependencias externas
