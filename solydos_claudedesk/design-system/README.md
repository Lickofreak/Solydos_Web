Solydos es un agente de soporte con IA para WhatsApp. La identidad es **Solydos**: cada página se ve como una lámina de un estudio geológico. La roca es el negocio de tu cliente, sólido y suyo. Las curvas de nivel son las conversaciones que fluyen a su alrededor y el circuito que asoma dentro de la piedra es Solydos trabajando.

## Concepto

- Lámina técnica, no app: papel con grano, tinta, un solo azul de medición, cotas, coordenadas, leyenda y muestras numeradas.
- Una sola imagen protagonista por página: la roca (`Specimen`). Todo lo demás es tipografía, línea y aire.
- Precisión antes que efectos: sin degradados, sin sombras de interfaz, sin brillos. La única sombra es la de la roca sobre el papel.

## Contenido y voz

- Español neutro latinoamericano, tuteo. Titulares cortos y firmes, como rótulos de cartel: "Solydos AI Agent", "Míralo trabajar". En inglés el orden es siempre "Solydos AI Agent", nunca "Agent AI".
- Metáforas de terreno con moderación: sólido, firme, señal, muestra, estrato. Una por bloque.
- Datos concretos en cotas y fichas: "Primera respuesta < 1 s". Si no hay dato real, no hay cifra.
- Etiquetas técnicas en mono mayúscula: "Sección 03 / Demo", "Fig. 03 — Demo en vivo", "01. Conversación".
- Botones con verbo: "Empieza ya", "Ver demo". Sin exclamaciones ni emoji. No se ofrecen pruebas gratis: nunca uses "gratis" ni "sin tarjeta".

## Color

- Dos temas: **Claro** (papel) y **Oscuro** (pizarra). La roca no cambia de color; cambia el papel bajo ella.
- `background` siempre lleva el grano de papel de `bundle.css`. Marcos y hover en `surface`, arte de muestras en `surface-sunken`.
- Tinta `text-primary` para titulares, marcos y el nombre; `text-secondary` para párrafos; `text-muted` para anotaciones (solo sobre `background` y `surface`).
- `signal` es el azul de medición: curvas, cotas, cifras, enlaces, foco y el estado vivo. Nunca como fondo grande (para eso `signal-soft`).
- `signal-on-stone` solo para el circuito dibujado sobre la roca.
- La cápsula principal es tinta (`primary`) y se vuelve azul en hover (`primary-hover`).

## Tipografía

- **El nombre**: sans del sistema, bold, tracking cerrado (`wordmark`). Intocable.
- **Titulares**: Anton (Google Fonts) en MAYÚSCULAS, interlineado cerrado: `display` para el hero, `heading-xl` para secciones, `heading` para fichas.
- **Texto**: sans del sistema: `lead`, `body`, `small`.
- **Anotación**: IBM Plex Mono (Google Fonts): `label-mono` para labels, navegación, botones y pies; `data-mono` para coordenadas; `cota` para cifras en azul.

## Espacio y composición

- Grilla de cartel: copia 5 · muestra 6 · riel de leyenda desde `bp-lg`.
- El papel vacío es parte del diseño. Secciones con `space-24` (móvil `space-16`).
- Títulos de sección alineados a la izquierda. Cifras y metadatos alineados a extremos opuestos, como en una ficha.

## Forma y línea

- Papel cortado a escuadra: `radius-none` en marcos, cards, inputs y video. Solo cápsulas (botones, tags) usan `radius-full`.
- Líneas continuas a `hairline`; punteados a 1.5px con puntos redondos. Marcos de muestra en tinta con paspartú de 5px.
- Movimiento en `duration`: cambios de color, flechas que avanzan 4px, el nodo vivo que late. Respeta `prefers-reduced-motion`.
- Foco `focus-ring` en todo control.

## Arte e iconografía

- `Specimen`: roca real + curvas calculadas sobre su silueta + circuito recortado a su forma + cotas. Para video, tu VideoEarth entra por `media` del Hero o dentro de `MediaSection`.
- Símbolos cartográficos (`Legend`, `Icon`): norte, anillos, damero, estrella de control, triángulo, globo, código de barras. Trazo 1.25, puntas rectas.
- Muestras (`SampleCard`): conversación, núcleo, estrato. Nada de robots, cerebros, chispas de IA ni emoji.
- Redes sociales como texto con ↗.

## Página de inicio

La home de Solydos sigue este orden y estos textos (clases de página `lp-*` en `bundle.css`):

1. `Header`: Producto · Cómo funciona · Demo, meta "Agentes IA / 2026" y un solo botón "Empieza ya".
2. `Hero`: kicker "Agente IA para WhatsApp / Sección 01", titular "Solydos / AI Agent" con la Y y "AI" en `signal` (`sd-accent`), tag "Muestra viva · 24/7", coordenadas de Bogotá y tres `SampleCard`.
3. Franja de cifras (`lp-strip`) con `Annotation`: primera respuesta, disponibilidad, configuración; marcadas como ejemplo.
4. Sección 02 / Capacidades: "Firme por fuera. Vivo por dentro." con tres `FeatureCard`.
5. Sección 03 / Cómo funciona: "Tres capas", pasos numerados (`lp-steps`).
6. Sección 04 / Demo: `MediaSection` "Míralo trabajar" con el video (VideoEarth).
7. Sección 05 / Registro de campo: conversación de ejemplo en ficha (`lp-log`).
8. Sección 06 / Empieza: "Pon tu negocio en el mapa." con formulario (`lp-form`) y botón "Empieza ya".
9. `Footer` con el copyright abajo a la derecha: "Copyright © 2026 Solydos Inc. Todos los derechos reservados."

Nunca se usa "gratis", "Entrar" ni "Acceso".

## Componentes

`Header`, `Hero`, `Specimen`, `SampleCard`, `FeatureCard`, `MediaSection`, `TextField`, `Footer`, `Button`, `Tag`, `Annotation`, `Legend` y `Logo` viven en `window.Solydos` y requieren React 18.
