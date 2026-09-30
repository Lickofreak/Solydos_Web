# Brief — landing de Solydos en el proyecto del bot

## Objetivo

Reemplazar la landing actual del proyecto (la versión tipo WhatsApp: verde `#10b981`, fondo crema, bot con antenas) por la landing final de **Solydos**, y dejarla corriendo en `http://localhost:3000` exactamente como se ve `reference/Solydos Levantamiento.html`.

La marca es solo **Solydos**. "Levantamiento" y "ROCA" son nombres de archivo, nunca texto visible.

## Contenido de esta carpeta

| Ruta | Qué es |
| --- | --- |
| `reference/Solydos Levantamiento.html` | **Fuente de verdad visual.** Página completa: ábrela en el navegador y replícala tal cual. |
| `reference/landing-page.js` | Composición de la página: orden de secciones y todos los textos finales. |
| `design-system/tokens.json` | Colores (claro y oscuro), tipografía, espaciado, radios, layout. |
| `design-system/README.md` | Guía de marca y estructura de la home ("Página de inicio"). |
| `design-system/components/bundle.js` | Implementación de referencia de los componentes (React sin JSX). Incluye `GEO`: la silueta de la roca y las curvas de nivel ya calculadas; se copian, no se redibujan. |
| `design-system/components/bundle.css` | Estilos `sd-*` de los componentes y `lp-*` de la página. |
| `design-system/components/index.d.ts` y `*.md` | Props y guía de uso de cada componente. |
| `public/brand/` | `solydos-roca.webp` (la roca), `solydos-marca.svg`, `solydos-marca-oscuro.svg`, `solydos-lockup.svg`, `curvas-de-nivel.svg`. |

## Pasos

1. Crea una rama: `git checkout -b feat/landing-solydos`.
2. Detecta el stack (Next.js, Vite…; Tailwind o CSS) y trabaja con él. No cambies de framework.
3. Elimina la landing vieja: secciones, componentes, estilos y assets exclusivos de la versión tipo WhatsApp (verde `#10b981`, `#faf8f6`, bot con antenas, tokens `green-*`). Antes de borrar cada archivo, confirma con una búsqueda que nada más lo usa. No toques backend, APIs, auth, webhooks ni la lógica del bot.
   - Conserva el componente `VideoEarth`: va dentro de la sección "Míralo trabajar" (hijo de `MediaSection`) en lugar del placeholder.
4. Copia `public/brand/` a la carpeta pública del proyecto. `bundle.js` ya apunta a `/brand/solydos-roca.webp`.
5. Implementa los componentes (TSX si el proyecto usa TypeScript) a partir de `bundle.js`, `bundle.css` e `index.d.ts`: `Logo`, `Button`, `Tag`, `Annotation`, `Legend`, `Header`, `Hero`, `Specimen`, `SampleCard`, `FeatureCard`, `MediaSection`, `TextField`, `Footer`, `Icon`.
   - Los tokens van como variables CSS: el tema claro en `:root` y el oscuro en `@media (prefers-color-scheme: dark)`. Los nombres son los que usan las clases (`--background`, `--signal`, `--space-4`…). Puedes copiarlos del `<style>` del HTML de referencia.
   - Copia también el grano de papel del `body` que está en `bundle.css`.
6. Tipografía:
   - "Solydos" (logo): sans del sistema, bold, `letter-spacing: -0.03em`. No cambiar.
   - Titulares: Anton, en mayúsculas.
   - Etiquetas, botones y datos: IBM Plex Mono.
   - Texto: sans del sistema.
   - Carga las fuentes con `next/font/google` en Next.js; en otro stack, con el `<link>` de Google Fonts del HTML.
7. Arma la página siguiendo `reference/landing-page.js`, en este orden: Header, Hero, franja de cifras, Capacidades, Cómo funciona, Demo (VideoEarth), Registro de campo, Empieza (formulario) y Footer.
8. Levanta el servidor (`npm run dev` o el comando del proyecto) en el puerto 3000 y compáralo lado a lado con el HTML de referencia.

## Decisiones fijas (no cambiar)

- **Titular:** "Solydos / AI Agent", en dos líneas. La **Y** de Solydos y **"AI"** van en `var(--signal)`.
- **Botón único: "Empieza ya"**, en el header, el hero y el formulario. No hay "Entrar" ni "Acceso".
- **Sin prueba gratuita:** "gratis" y "sin tarjeta" no aparecen en ningún lado.
- **Meta del header:** "Agentes IA / 2026".
- **Footer:** sin wordmark gigante. Abajo a la derecha va "Copyright © 2026 Solydos Inc. Todos los derechos reservados."
- **Contenido de ejemplo:** las cifras y la conversación del registro son ejemplos y se ven marcados como tal.
- **Formulario:** si el proyecto ya tiene un endpoint de leads, conéctalo. Si no, deja la confirmación en pantalla y avísame.
- **`<title>`:** "Solydos — AI Agent para WhatsApp".

## Criterios de aceptación

- [ ] `localhost:3000` se ve igual que `reference/Solydos Levantamiento.html` a 1280px y a 400px, en tema claro y oscuro.
- [ ] No queda rastro de la versión anterior: nada verde `#10b981` ni bot con antenas.
- [ ] La roca se ve con sus curvas de nivel y el circuito recortado a su silueta.
- [ ] `VideoEarth` aparece dentro del marco de la sección Demo.
- [ ] Buscar "gratis", "Entrar", "Acceso" y "Levantamiento" en el código de la landing da 0 resultados, salvo nombres de archivo.
- [ ] Sin errores en consola, sin scroll horizontal en móvil y con el foco de teclado visible.
- [ ] `npm run build` pasa sin errores.
- [ ] El bot sigue funcionando igual que antes; solo cambió la landing.

## Nota

La foto de la roca viene de una imagen de referencia de terceros. Antes de publicar en producción, confirma los derechos o reemplázala. Si se reemplaza, hay que regenerar las curvas (`GEO` en `bundle.js`), porque están calculadas sobre esa silueta.
