'use client'

import React, { useState } from 'react'
import VideoEarth from '@/components/VideoEarth'

const ROCK_SRC = '/brand/solydos-roca.webp'

const GEO = {
  rock: [180.0, 119.0, 260, 502.1],
  sil: "M295.6 119.9L287.1 122.3L277.2 132.2L253.1 133.1L241.3 140.7L229.5 144.0L216.8 162.8L206.4 165.7L206.4 181.3L199.8 210.0L200.8 225.6L197.9 228.9L194.2 261.5L200.3 265.7L201.7 270.9L196.0 278.9L191.8 294.5L184.7 300.6L180.9 333.2L185.7 351.1L191.8 355.4L197.0 366.7L194.2 400.2L195.1 414.4L199.8 426.2L199.3 466.3L207.8 476.6L220.1 484.7L221.5 507.8L254.1 562.5L269.7 570.1L287.1 584.7L291.8 599.3L299.4 608.8L307.4 611.6L316.4 619.6L327.2 619.6L333.8 616.3L337.1 609.7L347.0 606.9L356.5 599.3L368.3 575.7L368.3 562.1L364.5 549.8L372.5 537.5L384.8 531.4L388.6 522.4L395.6 515.8L418.8 513.4L425.8 505.9L426.3 495.0L434.3 488.9L435.3 472.4L430.1 470.0L437.2 468.6L438.6 457.8L430.6 445.0L429.1 409.2L430.6 376.6L434.3 374.7L434.3 368.6L428.7 362.5L426.8 350.7L422.1 346.4L424.9 335.6L417.4 319.5L400.8 296.4L396.1 280.8L378.7 253.9L377.2 239.3L367.3 231.3L366.4 219.5L354.1 195.4L354.1 185.5L343.7 171.8L339.0 155.3L332.4 144.4L331.0 132.6L310.2 119.9Z",
}

const TRACES = [
  'M292 402H350L372 424V468',
  'M282 444H330L346 460H402',
  'M318 498V528L340 550H384',
  'M262 478H298V522',
  'M352 356H390L412 378',
  'M244 548L264 568H318',
  'M300 300H336L352 316V340'
]

const NODES = [
  [372, 468],
  [402, 460],
  [384, 550],
  [298, 522],
  [412, 378],
  [318, 568],
  [352, 340]
]

function Icon({ name, size = 24 }) {
  const icons = {
    rings: [
      ['circle', { cx: 12, cy: 12, r: 10 }],
      ['circle', { cx: 12, cy: 12, r: 6.5 }],
      ['circle', { cx: 12, cy: 12, r: 3 }],
      ['circle', { cx: 12, cy: 12, r: 0.9, fill: 'currentColor' }]
    ],
    checker: [
      ['path', { d: 'M3 3h4.5v4.5H3zM12 3h4.5v4.5H12zM7.5 7.5H12V12H7.5zM16.5 7.5H21V12h-4.5zM3 12h4.5v4.5H3zM12 12h4.5v4.5H12zM7.5 16.5H12V21H7.5zM16.5 16.5H21V21h-4.5z', fill: 'currentColor', stroke: 'none' }]
    ],
    down: [
      ['path', { d: 'M4 6h16L12 19Z', fill: 'currentColor', stroke: 'none' }]
    ],
    arrow: [
      ['path', { d: 'M4 12h15m-5-5 5 5-5 5' }]
    ],
    play: [
      ['path', { d: 'M8 5v14l11-7Z', fill: 'currentColor', stroke: 'none' }]
    ],
    globe: [
      ['circle', { cx: 12, cy: 12, r: 9 }],
      ['path', { d: 'M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18' }]
    ],
    barcode: [
      ['path', { d: 'M4 5v14M6.5 5v14M9.5 5v14M11 5v14M14 5v14M17 5v14M18.5 5v14M20 5v14', strokeWidth: 1.4 }]
    ],
    north: [
      ['path', { d: 'M12 7 17 20 12 17 7 20Z', fill: 'currentColor', stroke: 'none' }],
      ['path', { d: 'M10 5V1l4 4V1', strokeWidth: 1.1 }]
    ],
    star: [
      ['path', { d: 'M12 1v22M1 12h22', strokeWidth: 0.8 }],
      ['path', { d: 'M12 8.5 13.2 10.8 15.5 12 13.2 13.2 12 15.5 10.8 13.2 8.5 12 10.8 10.8Z', fill: 'currentColor', stroke: 'none' }]
    ],
    cross: [
      ['path', { d: 'M12 3v18M3 12h18' }]
    ]
  }

  const paths = icons[name] || icons.cross
  return (
    <svg
      className="sd-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="square"
      aria-hidden="true"
    >
      {paths.map((path, i) => React.createElement(path[0], { key: i, ...path[1] }))}
    </svg>
  )
}

function Logo() {
  return (
    <a href="#" className="sd-logo">
      <svg className="sd-mark" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="17.6" cy="14.9" r="1.9" className="sd-mark-summit" />
      </svg>
      <span className="sd-logo-name" aria-label="Solydos">Solydos</span>
    </a>
  )
}

function Header() {
  const links = [
    { label: 'Producto', href: '#producto' },
    { label: 'Cómo funciona', href: '#proceso' },
    { label: 'Demo', href: '#demo' }
  ]

  return (
    <header className="sd-header">
      <div className="sd-container sd-header-inner">
        <Logo />
        <nav className="sd-nav" aria-label="Principal">
          {links.map((l, i) => (
            <a key={i} href={l.href} className="sd-nav-link">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="sd-header-actions">
          <span className="sd-header-meta">Agentes IA / 2026</span>
          <button className="sd-btn sd-btn-sm">Empieza ya</button>
        </div>
      </div>
    </header>
  )
}

function Specimen() {
  const r = GEO.rock
  return (
    <svg className="sd-specimen" viewBox="0 0 600 760" role="img" aria-label="Muestra Solydos">
      <defs>
        <clipPath id="clip">
          <path d={GEO.sil} />
        </clipPath>
      </defs>
      <image href={ROCK_SRC} x={r[0]} y={r[1]} width={r[2]} height={r[3]} preserveAspectRatio="none" className="sd-sp-rock" />
      <g clipPath="url(#clip)" className="sd-sp-core">
        <rect x="330" y="470" width="18" height="18" className="sd-sp-chip" />
        {TRACES.map((d, i) => (
          <path key={i} d={d} className="sd-sp-trace" />
        ))}
        {NODES.map((n, i) => (
          <circle key={i} cx={n[0]} cy={n[1]} r="3.2" className="sd-sp-node" />
        ))}
      </g>
    </svg>
  )
}

function Hero() {
  return (
    <section className="sd-hero">
      <div className="sd-container sd-hero-grid">
        <div className="sd-hero-copy">
          <p className="sd-kicker">Agente IA para WhatsApp / Sección 01</p>
          <h1 className="sd-hero-title">
            Sol<span className="lp-accent">y</span>dos<br />
            <span className="lp-accent">AI</span> Agent
          </h1>
          <span className="sd-tag" style={{ marginTop: '0.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--signal)', animation: 'sd-pulse 2.4s ease-in-out infinite' }} />
            Muestra viva · 24/7
          </span>
          <p className="sd-hero-subtitle">
            Solydos atiende el WhatsApp de tu negocio a cualquier hora: responde con lo que saben tus manuales, resuelve dudas técnicas y le pasa a tu equipo solo lo que necesita una persona.
          </p>
          <div className="sd-hero-actions">
            <button className="sd-btn sd-btn-primary">
              Empieza ya
              <Icon name="arrow" size={16} />
            </button>
            <button className="sd-btn sd-btn-secondary">Ver demo</button>
          </div>
          <dl className="sd-coords">
            <div>
              <dt>Coordenadas</dt>
              <dd>04.7110° N · 74.0721° W</dd>
            </div>
            <div>
              <dt>Elevación</dt>
              <dd>2.640 M</dd>
            </div>
          </dl>
          <div className="sd-hero-samples">
            {[
              { index: '01.', label: 'Conversación', kind: 'chat' },
              { index: '02.', label: 'Núcleo', kind: 'core' },
              { index: '03.', label: 'Estrato', kind: 'strata' }
            ].map((s, i) => (
              <figure key={i} className="sd-sample">
                <div className="sd-sample-media" style={{ aspectRatio: '4 / 3' }} />
                <figcaption className="sd-sample-cap">
                  <span>{s.index}</span>
                  <span>{s.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="sd-hero-media">
          <Specimen />
        </div>
        <div className="sd-hero-rail">
          <span className="sd-edition">[2026]</span>
          <ul className="sd-legend" aria-label="Leyenda">
            {[
              { icon: 'north', label: 'Norte: tu objetivo' },
              { icon: 'rings', label: 'Canal activo' },
              { icon: 'checker', label: 'Base de conocimiento' },
              { icon: 'star', label: 'Punto de control' },
              { icon: 'down', label: 'Escala a humano' }
            ].map((it, i) => (
              <li key={i} title={it.label}>
                <Icon name={it.icon} size={22} />
                <span className="sd-legend-label">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ index, icon, title, metric, children }) {
  return (
    <article className="sd-feature">
      <div className="sd-feature-head">
        <span className="sd-feature-index">{index}</span>
        <span className="sd-feature-icon">
          <Icon name={icon} />
        </span>
      </div>
      <h3 className="sd-feature-title">{title}</h3>
      <p className="sd-feature-text">{children}</p>
      {metric && (
        <div className="sd-feature-foot">
          <span>{metric.label}</span>
          <span className="sd-feature-metric">{metric.value}</span>
        </div>
      )}
    </article>
  )
}

function MediaSection() {
  return (
    <section className="sd-media" id="demo">
      <div className="sd-container">
        <div className="sd-section-head">
          <p className="sd-kicker">Sección 04 / Demo</p>
          <h2 className="sd-section-title">Míralo trabajar</h2>
          <p className="sd-section-subtitle">Una consulta técnica real, de principio a fin, sin cortes.</p>
        </div>
        <figure className="sd-media-figure">
          <div className="sd-media-frame">
            <VideoEarth />
          </div>
          <figcaption className="sd-media-cap">
            <span>Fig. 04 — Demo en vivo</span>
            <span>01:42</span>
            <span>Ref. 04 / WhatsApp</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function TextField({ index, label, type = 'text', placeholder, hint, required }) {
  const id = `field-${index}`
  return (
    <div className="sd-field">
      <label htmlFor={id} className="sd-label">
        {index && <span className="sd-label-index">{index}</span>}
        {label}
      </label>
      <input id={id} type={type} placeholder={placeholder} className="sd-input" required={required} />
      {hint && <p className="sd-field-hint">{hint}</p>}
    </div>
  )
}

function Footer() {
  return (
    <footer className="sd-footer">
      <div className="sd-container">
        <div className="sd-footer-top">
          <div className="sd-footer-brand">
            <Logo />
            <p className="sd-footer-tagline">Agentes de soporte con IA para WhatsApp. Firmes por fuera, vivos por dentro.</p>
          </div>
          {[
            { title: 'Producto', links: [{ label: 'Capacidades', href: '#producto' }, { label: 'Cómo funciona', href: '#proceso' }, { label: 'Demo', href: '#demo' }] },
            { title: 'Recursos', links: [{ label: 'Documentación' }, { label: 'Blog' }, { label: 'Estado' }] },
            { title: 'Empresa', links: [{ label: 'Nosotros' }, { label: 'Contacto' }, { label: 'Privacidad' }] }
          ].map((col, i) => (
            <div key={i} className="sd-footer-col">
              <h4 className="sd-footer-heading">{col.title}</h4>
              <ul>
                {col.links.map((l, j) => (
                  <li key={j}>
                    <a href={l.href || '#'} className="sd-footer-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="sd-footer-bottom">
          <div className="sd-footer-unit">
            <span className="sd-footer-unit-label">Unidad</span>
            <span>BOG-01</span>
            <Icon name="globe" size={20} />
            <Icon name="barcode" size={20} />
          </div>
          <p className="sd-footer-meta">Datum WGS84 · Bogotá, CO</p>
          <ul className="sd-socials" aria-label="Redes sociales">
            {['LinkedIn', 'Instagram', 'X'].map((s, i) => (
              <li key={i}>
                <a href="#" className="sd-footer-link">{s} ↗</a>
              </li>
            ))}
          </ul>
          <p className="sd-footer-copy">© 2026 Solydos Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="sd-container">
          <div className="lp-strip" role="list">
            {[
              { value: '< 1 s', label: 'Primera respuesta' },
              { value: '24 / 7', label: 'Disponibilidad' },
              { value: '10 min', label: 'Configuración' },
              { marker: 'cross', label: 'Cifras de ejemplo' }
            ].map((item, i) => (
              <span key={i} role="listitem">
                <span className="sd-annot sd-annot-row">
                  {item.marker === 'cross' ? (
                    <Icon name="cross" size={13} />
                  ) : (
                    <span style={{ width: '6px', height: '6px', border: '1px solid var(--signal)' }} />
                  )}
                  {item.value && <span style={{ color: 'var(--signal)', fontWeight: '600' }}>{item.value}</span>}
                  <span>{item.label}</span>
                </span>
              </span>
            ))}
          </div>
        </div>

        <section id="producto" className="lp-section">
          <div className="sd-container">
            <div className="lp-head">
              <div className="sd-section-head">
                <p className="sd-kicker">Sección 02 / Capacidades</p>
                <h2 className="sd-section-title">Firme por fuera.<br />Vivo por dentro.</h2>
              </div>
              <span className="sd-tag">Core sample</span>
            </div>
            <div className="sd-grid">
              <FeatureCard
                index="01."
                icon="rings"
                title="Respuesta inmediata"
                metric={{ label: 'Primera respuesta', value: '< 1 s' }}
              >
                Contesta al instante y a cualquier hora, con el tono de tu marca y sin dejar a nadie en visto.
              </FeatureCard>
              <FeatureCard
                index="02."
                icon="checker"
                title="Memoria de tu negocio"
                metric={{ label: 'Fuentes', value: 'PDF · Web · FAQ' }}
              >
                Tus manuales, políticas y catálogos se vuelven su base. Responde con ellos y no inventa.
              </FeatureCard>
              <FeatureCard
                index="03."
                icon="down"
                title="Escala a humano"
                metric={{ label: 'Traspaso', value: 'Con contexto' }}
              >
                Cuando el caso pide una persona, le entrega a tu equipo la conversación completa y un resumen.
              </FeatureCard>
            </div>
          </div>
        </section>

        <hr className="lp-rule" />

        <section id="proceso" className="lp-section">
          <div className="sd-container">
            <div className="lp-head">
              <div className="sd-section-head">
                <p className="sd-kicker">Sección 03 / Cómo funciona</p>
                <h2 className="sd-section-title">Tres capas</h2>
                <p className="sd-section-subtitle">De tu número de WhatsApp a un agente que resuelve, en el orden en que lo configuras.</p>
              </div>
            </div>
            <ol className="lp-steps">
              {[
                ['1', 'Conecta tu número', 'Vincula tu WhatsApp Business escaneando un código. Tu número sigue siendo tuyo.', 'Setup', '≈ 2 min'],
                ['2', 'Carga lo que sabes', 'Sube manuales, PDFs o la URL de tu centro de ayuda. Solydos arma su memoria con eso.', 'Fuentes', 'Ilimitadas'],
                ['3', 'Déjalo atender', 'Responde, resuelve y escala a tu equipo lo que necesita una persona, con todo el contexto.', 'Turno', '24 / 7']
              ].map((s) => (
                <li key={s[0]} className="lp-step">
                  <span className="lp-step-n">{s[0]}</span>
                  <h3>{s[1]}</h3>
                  <p>{s[2]}</p>
                  <span className="sd-annot sd-annot-row">
                    <span style={{ width: '6px', height: '6px', border: '1px solid var(--signal)' }} />
                    {s[4]}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <MediaSection />

        <section className="lp-section">
          <div className="sd-container lp-log-wrap">
            <div className="sd-section-head">
              <p className="sd-kicker">Sección 05 / Registro de campo</p>
              <h2 className="sd-section-title">Una noche cualquiera</h2>
              <p className="sd-section-subtitle">Así se ve una conversación que Solydos resuelve sola y una que le pasa a tu equipo. Ejemplo ilustrativo.</p>
            </div>
            <figure className="lp-log" style={{ margin: 0 }}>
              <div className="lp-log-inner">
                <div className="lp-log-top">
                  <span>Registro 0412 · WhatsApp</span>
                  <span>Ferretería El Tornillo</span>
                </div>
                {[
                  ['23:47', 'client', 'Cliente', '¿El taladro DX-20 sirve para concreto? Lo necesito mañana temprano.'],
                  ['23:47', 'agent', 'Solydos', 'Sí, en modo percusión y con broca para concreto de 6 a 10 mm. Tienes 3 unidades en la sede Norte, que abre a las 7:00. ¿Te lo aparto?'],
                  ['23:48', 'client', 'Cliente', 'Sí, apártamelo. Y quiero factura a nombre de mi empresa.'],
                  ['23:48', 'agent', 'Solydos', 'Listo, quedó apartado a tu nombre hasta las 12:00. Para la factura electrónica le paso tus datos a facturación; te escriben apenas abran.']
                ].map((m, i) => (
                  <div key={i} className={`lp-msg lp-msg-${m[1]}`}>
                    <time>{m[0]}</time>
                    <div>
                      <div className="lp-msg-who">{m[2]}</div>
                      <p>{m[3]}</p>
                    </div>
                  </div>
                ))}
                <div className="lp-msg">
                  <span className="lp-msg-note">Escalado a Facturación · con contexto</span>
                </div>
              </div>
            </figure>
          </div>
        </section>

        <hr className="lp-rule" />

        <section id="empieza" className="lp-section">
          <div className="sd-container lp-cta">
            <div>
              <p className="sd-kicker" style={{ marginBottom: 'var(--space-6)' }}>Sección 06 / Empieza</p>
              <h2 className="lp-cta-title">Pon tu negocio <span>en el mapa.</span></h2>
              <div className="lp-cta-meta">
                {[
                  { value: '10 min', label: 'Configuración guiada' },
                  { value: '1 número', label: 'WhatsApp Business' },
                  { marker: 'cross', label: 'Soporte humano en español' }
                ].map((item, i) => (
                  <span key={i} className="sd-annot sd-annot-row">
                    {item.marker === 'cross' ? (
                      <Icon name="cross" size={13} />
                    ) : (
                      <span style={{ width: '6px', height: '6px', border: '1px solid var(--signal)' }} />
                    )}
                    {item.value && <span style={{ color: 'var(--signal)', fontWeight: '600' }}>{item.value}</span>}
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
            <form
              className="lp-form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              noValidate
            >
              <TextField index="01" label="Empresa" placeholder="Ferretería El Tornillo" required />
              <TextField index="02" label="Correo de trabajo" type="email" placeholder="ana@empresa.com" />
              <TextField index="03" label="WhatsApp" hint="Con indicativo de país, sin espacios." placeholder="+57 300 000 0000" />
              <div className="lp-form-foot">
                {sent ? (
                  <p className="lp-done" role="status">Solicitud registrada · te escribimos pronto</p>
                ) : (
                  <p className="lp-form-note">Formulario de ejemplo</p>
                )}
                <button type="submit" className="sd-btn sd-btn-primary">
                  Empieza ya
                  <Icon name="arrow" size={16} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
