# Solydos Web

Landing de Solydos — AI Agent para WhatsApp. Next.js 14 + React 18.

## Desarrollo

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
```

## Estructura

- `app/solydos.jsx`: componentes del sistema de diseño (generados desde `solydos_claudedesk/design-system/components/bundle.js`).
- `app/page.jsx`: composición de la landing (`solydos_claudedesk/reference/landing-page.js`).
- `app/globals.css`: tokens y estilos `sd-*` / `lp-*` (tema claro y oscuro).
- `public/brand/`: logo, roca y curvas de nivel.
- `solydos_claudedesk/`: referencia de diseño (`reference/Solydos Levantamiento.html` es la fuente visual).
