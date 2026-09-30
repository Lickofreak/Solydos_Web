'use client'

import React, { useState } from 'react'

const ROCK_SRC = '/brand/solydos-roca.webp'

const MARK_LOOPS = [
  "M30.47 16.60L30.49 18.15L30.24 19.69L29.75 21.16L29.04 22.52L28.16 23.76L27.15 24.86L26.04 25.82L24.86 26.64L23.65 27.34L22.41 27.93L21.16 28.42L19.89 28.81L18.61 29.11L17.31 29.30L16.00 29.37L14.69 29.31L13.39 29.10L12.13 28.75L10.92 28.24L9.78 27.59L8.73 26.81L7.77 25.93L6.90 24.95L6.13 23.91L5.45 22.81L4.83 21.67L4.28 20.48L3.78 19.25L3.35 17.96L3.00 16.60L2.76 15.18L2.64 13.70L2.69 12.19L2.94 10.67L3.40 9.18L4.10 7.78L5.02 6.51L6.14 5.43L7.43 4.57L8.85 3.97L10.33 3.62L11.83 3.52L13.30 3.63L14.69 3.93L16.00 4.35L17.21 4.84L18.34 5.37L19.41 5.90L20.45 6.41L21.48 6.91L22.54 7.42L23.63 7.95L24.75 8.56L25.88 9.27L26.99 10.13L28.02 11.14L28.94 12.31L29.67 13.64L30.20 15.08Z",
  "M26.50 15.90L26.51 16.95L26.34 17.99L26.01 18.98L25.53 19.91L24.93 20.75L24.25 21.49L23.49 22.14L22.70 22.70L21.88 23.17L21.04 23.57L20.19 23.90L19.33 24.17L18.46 24.37L17.59 24.50L16.70 24.54L15.81 24.50L14.94 24.36L14.08 24.12L13.26 23.78L12.49 23.34L11.78 22.81L11.13 22.21L10.54 21.55L10.02 20.85L9.56 20.11L9.14 19.33L8.77 18.53L8.43 17.69L8.14 16.82L7.90 15.90L7.73 14.94L7.66 13.94L7.69 12.91L7.86 11.88L8.17 10.88L8.64 9.93L9.26 9.07L10.03 8.34L10.90 7.76L11.86 7.35L12.86 7.11L13.88 7.04L14.87 7.12L15.82 7.32L16.70 7.60L17.52 7.94L18.28 8.30L19.01 8.66L19.71 9.00L20.41 9.34L21.13 9.68L21.87 10.05L22.63 10.46L23.39 10.94L24.14 11.52L24.84 12.20L25.46 13.00L25.96 13.89L26.31 14.87Z",
  "M22.42 15.10L22.43 15.65L22.34 16.19L22.16 16.71L21.92 17.20L21.60 17.63L21.24 18.02L20.85 18.36L20.44 18.65L20.01 18.90L19.57 19.11L19.13 19.28L18.68 19.42L18.22 19.53L17.76 19.59L17.30 19.62L16.84 19.60L16.38 19.52L15.93 19.40L15.50 19.22L15.10 18.99L14.73 18.71L14.39 18.40L14.08 18.06L13.81 17.69L13.57 17.30L13.35 16.89L13.15 16.47L12.98 16.04L12.83 15.58L12.70 15.10L12.61 14.60L12.57 14.08L12.59 13.54L12.68 13.00L12.84 12.47L13.09 11.98L13.41 11.53L13.81 11.15L14.27 10.84L14.77 10.63L15.30 10.51L15.83 10.47L16.34 10.51L16.84 10.62L17.30 10.76L17.73 10.94L18.13 11.13L18.51 11.31L18.87 11.50L19.24 11.67L19.61 11.85L20.00 12.04L20.40 12.26L20.80 12.51L21.19 12.81L21.55 13.17L21.88 13.58L22.14 14.05L22.32 14.56Z",
]

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
  [372, 468], [402, 460], [384, 550], [298, 522], [412, 378], [318, 568], [352, 340]
]

function Icon({ name, size = 24 }) {
  const icons = {
    rings: () => <g><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.25"/><circle cx="12" cy="12" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.25"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.25"/><circle cx="12" cy="12" r="0.9" fill="currentColor"/></g>,
    checker: () => <path d="M3 3h4.5v4.5H3zM12 3h4.5v4.5H12zM7.5 7.5H12V12H7.5zM16.5 7.5H21V12h-4.5zM3 12h4.5v4.5H3zM12 12h4.5v4.5H12zM7.5 16.5H12V21H7.5zM16.5 16.5H21V21h-4.5z" fill="currentColor" stroke="none"/>,
    down: () => <path d="M4 6h16L12 19Z" fill="currentColor" stroke="none"/>,
    arrow: () => <path d="M4 12h15m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square"/>,
  }
  const Icon = icons[name] || icons.arrow
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" className="sd-icon"><Icon /></svg>
}

function RockSilhouette() {
  return (
    <svg className="sd-rock-silhouette" viewBox="180 119 260 502" width="260" height="502" aria-hidden="true">
      <path d={GEO.sil} fill="none" stroke="var(--signal)" strokeWidth="0.5" opacity="0.3"/>
      {TRACES.map((d, i) => (
        <g key={`trace-${i}`}>
          <path d={d} fill="none" stroke="var(--signal)" strokeWidth="0.8" opacity="0.4"/>
          <circle cx={NODES[i][0]} cy={NODES[i][1]} r="2" fill="var(--signal)" opacity="0.5"/>
        </g>
      ))}
    </svg>
  )
}

export default function Home() {
  const [formData, setFormData] = useState({ empresa: '', email: '', whatsapp: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ empresa: '', email: '', whatsapp: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <>
      {/* Header */}
      <header className="sd-header">
        <div className="sd-container sd-header-inner">
          <a href="#" className="sd-logo sd-header-home">
            <svg className="sd-mark" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
              {MARK_LOOPS.map((d, i) => <path key={`loop-${i}`} d={d} className={`sd-mark-loop sd-mark-loop-${i}`} />)}
              <circle cx="17.6" cy="14.9" r="1.9" className="sd-mark-summit"></circle>
            </svg>
            <span className="sd-logo-name" aria-label="Solydos">Solydos</span>
          </a>
          <nav className="sd-nav" aria-label="Principal">
            <a href="#producto" className="sd-nav-link">Producto</a>
            <a href="#proceso" className="sd-nav-link">Cómo funciona</a>
            <a href="#demo" className="sd-nav-link">Demo</a>
          </nav>
          <div className="sd-header-actions">
            <span className="sd-header-meta">Agentes IA / 2026</span>
            <button className="sd-btn sd-btn-sm">Empieza ya</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="sd-hero">
          <div className="sd-container sd-hero-container">
            <div className="sd-hero-content">
              <p className="sd-kicker">Agente IA para WhatsApp / Sección 01</p>
              <h1 className="sd-hero-title">Sol<span style={{color: 'var(--signal)'}}>y</span>dos<br/><span style={{color: 'var(--signal)'}}>AI</span> Agent</h1>
              <span className="sd-tag sd-tag-signal" style={{marginTop: 'var(--space-2)'}}>
                <span style={{width: '6px', height: '6px', borderRadius: '9999px', background: 'var(--signal)', animation: 'sd-pulse 2.4s ease-in-out infinite'}}></span>
                Muestra viva · 24/7
              </span>
              <p className="sd-hero-subtitle">Solydos atiende el WhatsApp de tu negocio a cualquier hora: responde con lo que saben tus manuales, resuelve dudas técnicas y le pasa a tu equipo solo lo que necesita una persona.</p>
              <div className="sd-hero-actions">
                <button className="sd-btn sd-btn-primary">Empieza ya <Icon name="arrow"/></button>
                <button className="sd-btn sd-btn-secondary">Ver demo</button>
              </div>
            </div>
            <div className="sd-hero-visual">
              <svg className="sd-hero-pattern" viewBox="0 0 400 600" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <pattern id="diag-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="20" y2="20" stroke="var(--signal)" strokeWidth="0.8" opacity="0.15"/>
                  </pattern>
                </defs>
                <rect width="400" height="600" fill="url(#diag-lines)"/>
              </svg>
              <figure className="sd-rock-figure">
                <img src={ROCK_SRC} alt="Roca de Solydos" className="sd-rock-image"/>
                <RockSilhouette />
                <figcaption className="sd-rock-label">[2026]</figcaption>
              </figure>
              <div className="sd-hero-samples">
                <div className="sd-sample">
                  <div className="sd-sample-media" style={{background: 'linear-gradient(135deg, #2445c9 0%, #1a318f 100%)'}}></div>
                  <div className="sd-sample-cap"><span>Muestra</span></div>
                </div>
                <div className="sd-sample">
                  <div className="sd-sample-media" style={{background: 'var(--surface-sunken)'}}></div>
                  <div className="sd-sample-cap"><span>Técnica</span></div>
                </div>
                <div className="sd-sample">
                  <div className="sd-sample-media" style={{background: 'repeating-linear-gradient(45deg, #f7f3ec, #f7f3ec 10px, #e4ded2 10px, #e4ded2 20px)'}}></div>
                  <div className="sd-sample-cap"><span>Patrón</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <div className="sd-container">
          <div className="sd-strip">
            <span><span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span><span style={{color: 'var(--signal)', fontWeight: '600'}}>&lt; 1 s</span><span>Primera respuesta</span></span></span>
            <span><span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span><span style={{color: 'var(--signal)', fontWeight: '600'}}>24 / 7</span><span>Disponibilidad</span></span></span>
            <span><span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span><span style={{color: 'var(--signal)', fontWeight: '600'}}>10 min</span><span>Configuración</span></span></span>
          </div>
        </div>

        <hr className="sd-rule"/>

        {/* Capacidades */}
        <section id="producto" className="sd-section">
          <div className="sd-container">
            <div className="sd-section-head">
              <p className="sd-kicker">Sección 02 / Capacidades</p>
              <h2 className="sd-section-title">Firme por fuera.<br/>Vivo por dentro.</h2>
            </div>
            <div className="sd-grid">
              <article className="sd-feature">
                <div className="sd-feature-head">
                  <span className="sd-feature-index">01.</span>
                  <Icon name="rings"/>
                </div>
                <h3 className="sd-feature-title">Respuesta inmediata</h3>
                <p className="sd-feature-text">Contesta al instante y a cualquier hora, con el tono de tu marca y sin dejar a nadie en visto.</p>
                <div className="sd-feature-foot">
                  <span>Primera respuesta</span>
                  <span className="sd-feature-metric">&lt; 1 s</span>
                </div>
              </article>
              <article className="sd-feature">
                <div className="sd-feature-head">
                  <span className="sd-feature-index">02.</span>
                  <Icon name="checker"/>
                </div>
                <h3 className="sd-feature-title">Memoria de tu negocio</h3>
                <p className="sd-feature-text">Tus manuales, políticas y catálogos se vuelven su base. Responde con ellos y no inventa.</p>
                <div className="sd-feature-foot">
                  <span>Fuentes</span>
                  <span className="sd-feature-metric">PDF · Web · FAQ</span>
                </div>
              </article>
              <article className="sd-feature">
                <div className="sd-feature-head">
                  <span className="sd-feature-index">03.</span>
                  <Icon name="down"/>
                </div>
                <h3 className="sd-feature-title">Escala a humano</h3>
                <p className="sd-feature-text">Cuando el caso pide una persona, le entrega a tu equipo la conversación completa y un resumen.</p>
                <div className="sd-feature-foot">
                  <span>Traspaso</span>
                  <span className="sd-feature-metric">Con contexto</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <hr className="sd-rule"/>

        {/* Cómo funciona */}
        <section id="proceso" className="sd-section">
          <div className="sd-container">
            <div className="sd-section-head">
              <p className="sd-kicker">Sección 03 / Cómo funciona</p>
              <h2 className="sd-section-title">Tres capas</h2>
              <p className="sd-section-subtitle">De tu número de WhatsApp a un agente que resuelve, en el orden en que lo configuras.</p>
            </div>
            <ol className="sd-steps">
              <li className="sd-step">
                <span className="sd-step-n">1</span>
                <h3>Conecta tu número</h3>
                <p>Vincula tu WhatsApp Business escaneando un código. Tu número sigue siendo tuyo.</p>
                <span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span>≈ 2 min</span>
              </li>
              <li className="sd-step">
                <span className="sd-step-n">2</span>
                <h3>Carga lo que sabes</h3>
                <p>Sube manuales, PDFs o la URL de tu centro de ayuda. Solydos arma su memoria con eso.</p>
                <span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span>Ilimitadas</span>
              </li>
              <li className="sd-step">
                <span className="sd-step-n">3</span>
                <h3>Déjalo atender</h3>
                <p>Responde, resuelve y escala a tu equipo lo que necesita una persona, con todo el contexto.</p>
                <span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span>24 / 7</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Demo */}
        <section id="demo" className="sd-section">
          <div className="sd-container">
            <div className="sd-section-head">
              <p className="sd-kicker">Sección 04 / Demo</p>
              <h2 className="sd-section-title">Míralo trabajar</h2>
              <p className="sd-section-subtitle">Una consulta técnica real, de principio a fin, sin cortes.</p>
            </div>
            <figure className="sd-media-frame">
              <div className="sd-demo-placeholder">
                <svg width="100%" height="100%" viewBox="0 0 600 400" style={{background: 'var(--surface-sunken)'}}>
                  <defs>
                    <pattern id="demo-lines" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                      <line x1="0" y1="0" x2="15" y2="15" stroke="var(--signal)" strokeWidth="1" opacity="0.2"/>
                    </pattern>
                  </defs>
                  <rect width="600" height="400" fill="url(#demo-lines)"/>
                  <image href={ROCK_SRC} x="200" y="80" width="200" height="200" opacity="0.8"/>
                  <circle cx="300" cy="200" r="100" fill="none" stroke="var(--signal)" strokeWidth="1" opacity="0.1"/>
                  <circle cx="300" cy="200" r="80" fill="none" stroke="var(--signal)" strokeWidth="0.8" opacity="0.15"/>
                  <g opacity="0.4">
                    <circle cx="300" cy="200" r="40" fill="var(--signal)"/>
                    <path d="M300 160 L310 190 L280 190 Z" fill="var(--on-primary)"/>
                  </g>
                </svg>
              </div>
            </figure>
          </div>
        </section>

        <hr className="sd-rule"/>

        {/* Registro de campo */}
        <section className="sd-section">
          <div className="sd-container">
            <div className="sd-section-head">
              <p className="sd-kicker">Sección 05 / Registro de campo</p>
              <h2 className="sd-section-title">Una noche cualquiera</h2>
              <p className="sd-section-subtitle">Así se ve una conversación que Solydos resuelve sola y una que le pasa a tu equipo. Ejemplo ilustrativo.</p>
            </div>
            <figure className="sd-log">
              <div className="sd-log-top">
                <span>Registro 0412 · WhatsApp</span>
                <span>Ferretería El Tornillo</span>
              </div>
              <div className="sd-msg sd-msg-client">
                <time>23:47</time>
                <div>
                  <div className="sd-msg-who">Cliente</div>
                  <p>¿El taladro DX-20 sirve para concreto? Lo necesito mañana temprano.</p>
                </div>
              </div>
              <div className="sd-msg sd-msg-agent">
                <time>23:47</time>
                <div>
                  <div className="sd-msg-who">Solydos</div>
                  <p>Sí, en modo percusión y con broca para concreto de 6 a 10 mm. Tienes 3 unidades en la sede Norte, que abre a las 7:00. ¿Te lo aparto?</p>
                </div>
              </div>
              <div className="sd-msg sd-msg-client">
                <time>23:48</time>
                <div>
                  <div className="sd-msg-who">Cliente</div>
                  <p>Sí, apártamelo. Y quiero factura a nombre de mi empresa.</p>
                </div>
              </div>
              <div className="sd-msg sd-msg-agent">
                <time>23:48</time>
                <div>
                  <div className="sd-msg-who">Solydos</div>
                  <p>Listo, quedó apartado a tu nombre hasta las 12:00. Para la factura electrónica le paso tus datos a facturación; te escriben apenas abran.</p>
                </div>
              </div>
              <div className="sd-msg"><span className="sd-msg-note">Escalado a Facturación · con contexto</span></div>
            </figure>
          </div>
        </section>

        <hr className="sd-rule"/>

        {/* CTA Principal */}
        <section className="sd-section">
          <div className="sd-container sd-cta">
            <div>
              <p className="sd-kicker" style={{marginBottom: 'var(--space-6)'}}>Sección 06 / Empieza</p>
              <h2 className="sd-cta-title">Pon tu negocio <span>en el mapa.</span></h2>
              <div className="sd-cta-meta">
                <span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span><span style={{color: 'var(--signal)', fontWeight: '600'}}>10 min</span><span>Configuración guiada</span></span>
                <span className="sd-annot sd-annot-row"><span style={{width: '6px', height: '6px', border: '1px solid var(--signal)'}}></span><span style={{color: 'var(--signal)', fontWeight: '600'}}>1 número</span><span>WhatsApp Business</span></span>
              </div>
            </div>
            <form className="sd-form" onSubmit={handleFormSubmit} noValidate>
              {submitted && <div className="sd-form-success">¡Gracias! Nos pondremos en contacto pronto.</div>}
              <div className="sd-field">
                <label htmlFor="empresa" className="sd-label"><span className="sd-label-index">01</span>Empresa</label>
                <input id="empresa" type="text" name="empresa" placeholder="Ferretería El Tornillo" value={formData.empresa} onChange={handleFormChange} className="sd-input" required/>
              </div>
              <div className="sd-field">
                <label htmlFor="email" className="sd-label"><span className="sd-label-index">02</span>Correo de trabajo</label>
                <input id="email" type="email" name="email" placeholder="ana@empresa.com" value={formData.email} onChange={handleFormChange} className="sd-input"/>
              </div>
              <div className="sd-field">
                <label htmlFor="whatsapp" className="sd-label"><span className="sd-label-index">03</span>WhatsApp</label>
                <input id="whatsapp" type="text" name="whatsapp" placeholder="+57 300 000 0000" value={formData.whatsapp} onChange={handleFormChange} className="sd-input"/>
                <p className="sd-field-hint">Con indicativo de país, sin espacios.</p>
              </div>
              <div className="sd-form-foot">
                <p className="sd-form-note">Formulario de ejemplo</p>
                <button type="submit" className="sd-btn sd-btn-primary">Empieza ya <Icon name="arrow"/></button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="sd-footer">
        <div className="sd-container">
          <div className="sd-footer-content">
            <div className="sd-footer-brand">
              <a href="#" className="sd-logo">
                <svg className="sd-mark" width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
                  {MARK_LOOPS.map((d, i) => <path key={`loop-${i}`} d={d} className={`sd-mark-loop sd-mark-loop-${i}`} />)}
                  <circle cx="17.6" cy="14.9" r="1.9" className="sd-mark-summit"></circle>
                </svg>
                <span className="sd-logo-name" aria-label="Solydos">Solydos</span>
              </a>
              <p className="sd-footer-tagline">Agentes de soporte con IA para WhatsApp. Firmes por fuera, vivos por dentro.</p>
            </div>
            <div className="sd-footer-col">
              <h4 className="sd-footer-heading">Producto</h4>
              <ul>
                <li><a href="#producto" className="sd-footer-link">Capacidades</a></li>
                <li><a href="#proceso" className="sd-footer-link">Cómo funciona</a></li>
                <li><a href="#demo" className="sd-footer-link">Demo</a></li>
              </ul>
            </div>
            <div className="sd-footer-col">
              <h4 className="sd-footer-heading">Recursos</h4>
              <ul>
                <li><a href="#" className="sd-footer-link">Documentación</a></li>
                <li><a href="#" className="sd-footer-link">Blog</a></li>
                <li><a href="#" className="sd-footer-link">Estado</a></li>
              </ul>
            </div>
            <div className="sd-footer-col">
              <h4 className="sd-footer-heading">Empresa</h4>
              <ul>
                <li><a href="#" className="sd-footer-link">Nosotros</a></li>
                <li><a href="#" className="sd-footer-link">Contacto</a></li>
                <li><a href="#" className="sd-footer-link">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="sd-footer-bottom">
            <p className="sd-footer-copy">© 2026 Solydos Inc. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .sd-hero {
          padding: var(--space-24) 0;
        }

        .sd-hero-content {
          max-width: 600px;
        }

        .sd-hero-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-6);
        }

        .sd-hero-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .sd-rock-figure {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
        }

        .sd-rock-image {
          width: 100%;
          max-width: 300px;
          height: auto;
          display: block;
        }

        .sd-rock-label {
          font-size: 12px;
          color: var(--text-muted);
          margin-top: var(--space-3);
          font-family: var(--font-mono);
        }

        .sd-rock-silhouette {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 320px;
          height: auto;
          z-index: -1;
        }

        .sd-hero-samples {
          display: grid;
          grid-template-columns: repeat(3, minmax(80px, 1fr));
          gap: var(--space-3);
          width: 100%;
          max-width: 320px;
          z-index: 1;
        }

        .sd-sample {
          margin: 0;
          padding: var(--space-2);
          border: var(--hairline) solid var(--border-strong);
          background: var(--surface);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .sd-sample-media {
          width: 100%;
          aspect-ratio: 1;
          overflow: hidden;
        }

        .sd-sample-cap {
          display: flex;
          justify-content: center;
          gap: var(--space-1);
          padding: 2px 0;
          font-size: 9px;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .sd-hero-title {
          font-family: var(--font-display);
          font-size: 112px;
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: -0.01em;
          margin: var(--space-4) 0;
          text-transform: uppercase;
        }

        .sd-hero-subtitle {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 460px;
          margin: var(--space-6) 0;
        }

        .sd-hero-actions {
          display: flex;
          gap: var(--space-4);
          margin: var(--space-8) 0 0;
        }

        .sd-strip {
          display: flex;
          gap: var(--space-8);
          padding: var(--space-6) 0;
          border-bottom: var(--hairline) solid var(--border);
          font-family: var(--font-mono);
        }

        .sd-section {
          padding: var(--space-24) 0;
        }

        @media (max-width: 767px) {
          .sd-section {
            padding: var(--space-16) 0;
          }
          .sd-hero-title {
            font-size: 72px;
          }
        }

        .sd-section-head {
          margin-bottom: var(--space-12);
        }

        .sd-section-title {
          font-family: var(--font-display);
          font-size: 88px;
          line-height: 0.92;
          font-weight: 400;
          text-transform: uppercase;
          margin: var(--space-4) 0 0;
        }

        .sd-section-subtitle {
          font-size: 17px;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 600px;
          margin-top: var(--space-4);
        }

        .sd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }

        .sd-feature {
          padding: var(--space-6);
          border: var(--hairline) solid var(--border);
          background: var(--surface);
        }

        .sd-feature-head {
          display: flex;
          gap: var(--space-4);
          align-items: flex-start;
          margin-bottom: var(--space-4);
        }

        .sd-feature-index {
          font-size: 11px;
          font-weight: 500;
          color: var(--text-muted);
        }

        .sd-feature-title {
          font-family: var(--font-display);
          font-size: 30px;
          line-height: 1;
          font-weight: 400;
          text-transform: uppercase;
          margin: 0 0 var(--space-3) 0;
        }

        .sd-feature-text {
          font-size: 16px;
          line-height: 24px;
          color: var(--text-secondary);
          margin: 0 0 var(--space-4) 0;
        }

        .sd-feature-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .sd-feature-metric {
          color: var(--signal);
          font-weight: 600;
        }

        .sd-steps {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-4);
        }

        .sd-step {
          padding: var(--space-6);
          border: var(--hairline) solid var(--border);
          background: var(--surface);
        }

        .sd-step-n {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          font-family: var(--font-display);
          font-size: 48px;
          line-height: 1;
          font-weight: 400;
          text-transform: uppercase;
          color: var(--on-primary);
          background: var(--signal);
          border-radius: var(--radius-none);
          margin-bottom: var(--space-4);
          flex-shrink: 0;
        }

        .sd-step h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 var(--space-2) 0;
        }

        .sd-step p {
          font-size: 16px;
          line-height: 24px;
          color: var(--text-secondary);
          margin: 0 0 var(--space-4) 0;
        }

        .sd-media-frame {
          margin: var(--space-12) 0 0;
          border: var(--hairline) solid var(--border);
          background: var(--surface);
          padding: var(--space-6);
        }

        .sd-demo-placeholder {
          width: 100%;
          aspect-ratio: 16 / 9;
          border: var(--hairline) dashed var(--border-strong);
          border-radius: var(--radius-none);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sd-log {
          margin: var(--space-12) 0 0;
          border: var(--hairline) solid var(--border);
          background: var(--surface);
          padding: var(--space-6);
        }

        .sd-log-top {
          display: flex;
          justify-content: space-between;
          padding-bottom: var(--space-4);
          border-bottom: var(--hairline) solid var(--border);
          font-size: 11px;
          color: var(--text-muted);
          margin-bottom: var(--space-4);
        }

        .sd-msg {
          display: flex;
          gap: var(--space-4);
          margin-bottom: var(--space-3);
          font-size: 14px;
          line-height: 1.5;
        }

        .sd-msg time {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .sd-msg-who {
          font-weight: 600;
          font-size: 11px;
          margin-bottom: 4px;
        }

        .sd-msg-client .sd-msg-who {
          color: var(--text-secondary);
        }

        .sd-msg-agent .sd-msg-who {
          color: var(--signal);
        }

        .sd-msg-note {
          justify-content: center;
          text-align: center;
          color: var(--text-muted);
          font-size: 11px;
          padding: var(--space-4) 0;
        }

        .sd-cta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-12);
          align-items: start;
        }

        @media (max-width: 1024px) {
          .sd-cta {
            grid-template-columns: 1fr;
          }
        }

        .sd-cta-title {
          font-family: var(--font-display);
          font-size: 88px;
          line-height: 0.92;
          font-weight: 400;
          text-transform: uppercase;
          margin: var(--space-4) 0 var(--space-6) 0;
        }

        .sd-cta-title span {
          color: var(--signal);
        }

        .sd-cta-meta {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .sd-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          padding: var(--space-8);
          border: var(--hairline) solid var(--border);
          background: var(--surface);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .sd-form-success {
          padding: var(--space-4);
          background: var(--signal-soft);
          border-radius: var(--radius-none);
          font-size: 14px;
          color: var(--signal);
        }

        .sd-field {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .sd-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: flex;
          gap: var(--space-2);
          align-items: center;
        }

        .sd-label-index {
          color: var(--text-muted);
        }

        .sd-input {
          padding: var(--space-3) var(--space-4);
          border: var(--hairline) solid var(--border-strong);
          border-radius: var(--radius-none);
          font-size: 16px;
          font-family: var(--font-sans);
          color: var(--text-primary);
          background: var(--background);
        }

        .sd-input:focus {
          outline: none;
          box-shadow: var(--focus-ring);
        }

        .sd-input:invalid:not(:placeholder-shown) {
          border-color: #d32f2f;
          box-shadow: inset 0 0 0 1px rgba(211, 47, 47, 0.1);
        }

        .sd-field-hint {
          font-size: 13px;
          color: var(--text-muted);
          margin: 0;
        }

        .sd-form-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: var(--space-4);
        }

        .sd-form-note {
          font-size: 11px;
          color: var(--text-muted);
          margin: 0;
          font-family: var(--font-mono);
        }

        .sd-footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-12);
          margin-bottom: var(--space-12);
        }

        .sd-footer-brand p {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin: var(--space-4) 0 0;
        }

        .sd-footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sd-footer-col li {
          margin-bottom: var(--space-2);
        }

        .sd-footer-col a {
          font-size: 14px;
        }

        .sd-footer-bottom {
          padding-top: var(--space-6);
          border-top: var(--hairline) solid var(--border);
          text-align: center;
        }

        .sd-footer-copy {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-primary);
          margin: 0;
        }

        @media (max-width: 767px) {
          .sd-hero-actions {
            flex-direction: column;
          }
          .sd-section-title {
            font-size: 64px;
          }
          .sd-cta {
            grid-template-columns: 1fr;
          }
          .sd-cta-title {
            font-size: 64px;
          }
          .sd-footer-content {
            grid-template-columns: 1fr;
            gap: var(--space-8);
          }
        }
      `}</style>
    </>
  )
}
