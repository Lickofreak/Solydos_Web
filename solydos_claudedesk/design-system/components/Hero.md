# Hero

Portada en tres columnas: el titular de cartel y los datos a la izquierda, la muestra al centro, la leyenda en el riel derecho.

- Props: `kicker`, `title` (Anton en mayúsculas, dos palabras por línea como máximo), `tag`, `subtitle`, `primaryAction`, `secondaryAction`, `coordinates` (`[{label, value}]`), `samples` (`[{index, label, kind}]`, tres SampleCards), `edition` ("[2026]"), `media` (por defecto el `Specimen`; pasa tu VideoEarth u otro nodo), `legend` (false para quitar el riel).
- Titular de la marca: "Solydos AI Agent" en dos líneas, con la Y de Solydos y "AI" en `signal` (envuélvelas en `<span class="sd-accent">`).
- En móvil todo va en una columna y el riel desaparece.
