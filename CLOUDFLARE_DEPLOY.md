# Guía de Despliegue en Cloudflare Pages

Este documento explica cómo configurar y desplegar el sitio en Cloudflare Pages.

## 🔧 Configuración en Cloudflare Pages Dashboard

### Opción 1: Build y Deploy en un comando (Recomendado)

En la configuración del proyecto en Cloudflare Pages:

- **Framework preset:** None (o Jekyll si está disponible)
- **Build command:** `npm run deploy`
- **Build output directory:** `_site`
- **Root directory:** `/` (default)

### Opción 2: Build y Deploy separados

- **Framework preset:** None
- **Build command:** `npm run pages:build`
- **Build output directory:** `_site`
- **Deploy command:** `npm run pages:deploy`
- **Root directory:** `/` (default)

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

## 📝 Proceso de Build

El proceso de build en Cloudflare Pages sigue estos pasos:

1. **Instalar dependencias de Node:** `npm install` (automático)
2. **Instalar dependencias de Ruby:** `bundle install` (automático)
3. **Ejecutar build command:** construye el sitio Jekyll con `bundle exec jekyll build`
4. **Desplegar:** usa Wrangler para desplegar el contenido de `_site/`

## ⚠️ Problemas Comunes

### Error: "The directory specified by assets.directory does not exist: \_site"

**Causa:** El sitio Jekyll no se construyó antes de intentar desplegar.

**Solución:** Asegúrate de que el **Build command** incluya `npm run build` o `npm run deploy`.

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
