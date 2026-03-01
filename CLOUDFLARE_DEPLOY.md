# Guía de Despliegue en Cloudflare Pages

Este documento explica cómo configurar y desplegar el sitio en Cloudflare Pages.

## 🔧 Configuración en Cloudflare Pages Dashboard

### Configuración Recomendada

En la configuración del proyecto en Cloudflare Pages:

- **Framework preset:** None (o Jekyll si está disponible)
- **Build command:** `npm run build`
- **Build output directory:** `_site`
- **Root directory:** `/` (default)

⚠️ **IMPORTANTE:** NO configures un "Deploy command". Cloudflare Pages despliega automáticamente el contenido de `_site/` después del build.

### ¿Por qué no usar `npm run deploy`?

El comando `npm run deploy` incluye `npx wrangler deploy`, que es para despliegue manual desde tu máquina local. En Cloudflare Pages, el dashboard se encarga automáticamente del deployment una vez que el build se completa exitosamente.

## 📋 Requisitos del Entorno

Cloudflare Pages debe tener instalado:

- ✅ Node.js (detectado automáticamente por `package.json`)
- ✅ Ruby (detectado automáticamente por `Gemfile`)
- ✅ Bundler (instalado automáticamente)

## 🛠️ Scripts NPM Disponibles

```bash
npm run build          # Construye el sitio Jekyll → genera _site/
npm run serve          # Servidor local de desarrollo
npm run deploy         # Construye y despliega (completo)
npm run pages:build    # Solo construye (para CI/CD)
npm run pages:deploy   # Solo despliega (requiere _site ya construido)
```

## 📝 Proceso de Build en Cloudflare Pages

El proceso de build en Cloudflare Pages sigue estos pasos:

1. **Instalar dependencias de Node:** `npm install` (automático)
2. **Instalar dependencias de Ruby:** `bundle install` (automático)
3. **Ejecutar build command:** `npm run build` → ejecuta `bundle exec jekyll build` → genera carpeta `_site/`
4. **Desplegar:** Cloudflare Pages despliega automáticamente el contenido de `_site/` a su CDN

⚠️ **Nota:** El comando `wrangler deploy` solo se usa para despliegues manuales desde tu máquina local, no en el dashboard de Cloudflare Pages.

## ⚠️ Problemas Comunes

### Error: "The directory specified by assets.directory does not exist: \_site"

**Causa:** El sitio Jekyll no se construyó antes de intentar desplegar con Wrangler.

**Solución:**

- En Cloudflare Pages Dashboard: Usa solo `npm run build` como Build command
- En despliegue manual local: Usa `npm run deploy` (que construye y despliega)

### Error: "The name 'ASSETS' is reserved in Pages projects"

**Causa:** El archivo `wrangler.jsonc` tenía un binding con nombre reservado.

**Solución:** Ya está corregido. El `wrangler.jsonc` ahora no usa bindings reservados.

### Error: "bundle: command not found"

**Causa:** Ruby no está instalado o no se detectó correctamente.

**Solución:** Cloudflare Pages debería detectar automáticamente Ruby por el `Gemfile`. Verifica que el `Gemfile` esté en la raíz del proyecto.

## 🔍 Verificación Local

Para verificar que el build funciona antes de desplegar:

```bash
# Instalar dependencias
bundle install

# Construir el sitio
npm run build

# Verificar que existe _site/
ls _site/

# (Opcional) Desplegar localmente
npm run pages:deploy
```

## 📦 Archivos de Configuración

- `wrangler.jsonc` - Configuración de Cloudflare Workers/Pages
- `_config.yml` - Configuración de Jekyll
- `package.json` - Scripts NPM y metadatos
- `Gemfile` - Dependencias de Ruby

## 🚀 Despliegue Manual

Para desplegar manualmente desde tu máquina local:

```bash
npm run deploy
```

Este comando:

1. Ejecuta `bundle exec jekyll build` (crea `_site/`)
2. Ejecuta `npx wrangler deploy` (sube a Cloudflare)

## 🔗 Enlaces Útiles

- [Documentación de Cloudflare Pages](https://developers.cloudflare.com/pages/)
- [Documentación de Wrangler](https://developers.cloudflare.com/workers/wrangler/)
- [Documentación de Jekyll](https://jekyllrb.com/docs/)
