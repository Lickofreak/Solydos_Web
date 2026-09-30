"use client";
import React from "react";
import { Solydos as S } from "./solydos";

const h = React.createElement;
export default function Page() {
  var sent = React.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    sent[1](true);
  }
  return h(
    React.Fragment,
    null,
    h(S.Header, {
      links: [
        { label: "Producto", href: "#producto" },
        { label: "Cómo funciona", href: "#proceso" },
        { label: "Demo", href: "#demo" },
      ],
      meta: "Agentes IA / 2026",
      cta: { label: "Empieza ya", href: "#empieza" },
    }),
    h(
      "main",
      null,
      h(S.Hero, {
        kicker: "Agente IA para WhatsApp / Sección 01",
        title: h(React.Fragment, null, "Sol", h("span", { className: "lp-accent" }, "y"), "dos", h("br"), h("span", { className: "lp-accent" }, "AI"), " Agent"),
        tag: "Muestra viva · 24/7",
        subtitle: "Solydos atiende el WhatsApp de tu negocio a cualquier hora: responde con lo que saben tus manuales, resuelve dudas técnicas y le pasa a tu equipo solo lo que necesita una persona.",
        primaryAction: { label: "Empieza ya", href: "#empieza" },
        secondaryAction: { label: "Ver demo", href: "#demo" },
        coordinates: [
          { label: "Coordenadas", value: "04.7110° N · 74.0721° W" },
          { label: "Elevación", value: "2.640 M" },
        ],
        samples: [
          { index: "01.", label: "Conversación", kind: "chat" },
          { index: "02.", label: "Núcleo", kind: "core" },
          { index: "03.", label: "Estrato", kind: "strata" },
        ],
        edition: "[2026]",
      }),
      h("div", { className: "sd-container" }, h("div", { className: "lp-strip", role: "list" }, h("span", { role: "listitem" }, h(S.Annotation, { value: "< 1 s" }, "Primera respuesta")), h("span", { role: "listitem" }, h(S.Annotation, { value: "24 / 7" }, "Disponibilidad")), h("span", { role: "listitem" }, h(S.Annotation, { value: "10 min" }, "Configuración")), h("span", { role: "listitem" }, h(S.Annotation, { marker: "cross" }, "Cifras de ejemplo")))),
      h("section", { id: "producto", className: "lp-section" }, h("div", { className: "sd-container" }, h("div", { className: "lp-head" }, h("div", { className: "sd-section-head" }, h("p", { className: "sd-kicker" }, "Sección 02 / Capacidades"), h("h2", { className: "sd-section-title" }, "Firme por fuera.", h("br"), "Vivo por dentro.")), h(S.Tag, null, "Core sample")), h("div", { className: "sd-grid" }, h(S.FeatureCard, { index: "01.", icon: "rings", title: "Respuesta inmediata", metric: { label: "Primera respuesta", value: "< 1 s" } }, "Contesta al instante y a cualquier hora, con el tono de tu marca y sin dejar a nadie en visto."), h(S.FeatureCard, { index: "02.", icon: "checker", title: "Memoria de tu negocio", metric: { label: "Fuentes", value: "PDF · Web · FAQ" } }, "Tus manuales, políticas y catálogos se vuelven su base. Responde con ellos y no inventa."), h(S.FeatureCard, { index: "03.", icon: "down", title: "Escala a humano", metric: { label: "Traspaso", value: "Con contexto" } }, "Cuando el caso pide una persona, le entrega a tu equipo la conversación completa y un resumen.")))),
      h("hr", { className: "lp-rule" }),
      h(
        "section",
        { id: "proceso", className: "lp-section" },
        h(
          "div",
          { className: "sd-container" },
          h("div", { className: "lp-head" }, h("div", { className: "sd-section-head" }, h("p", { className: "sd-kicker" }, "Sección 03 / Cómo funciona"), h("h2", { className: "sd-section-title" }, "Tres capas"), h("p", { className: "sd-section-subtitle" }, "De tu número de WhatsApp a un agente que resuelve, en el orden en que lo configuras."))),
          h(
            "ol",
            { className: "lp-steps" },
            [
              ["1", "Conecta tu número", "Vincula tu WhatsApp Business escaneando un código. Tu número sigue siendo tuyo.", "Setup", "≈ 2 min"],
              ["2", "Carga lo que sabes", "Sube manuales, PDFs o la URL de tu centro de ayuda. Solydos arma su memoria con eso.", "Fuentes", "Ilimitadas"],
              ["3", "Déjalo atender", "Responde, resuelve y escala a tu equipo lo que necesita una persona, con todo el contexto.", "Turno", "24 / 7"],
            ].map(function (s) {
              return h("li", { key: s[0], className: "lp-step" }, h("span", { className: "lp-step-n", "aria-hidden": "true" }, s[0]), h("h3", null, s[1]), h("p", null, s[2]), h(S.Annotation, { value: s[4] }, s[3]));
            }),
          ),
        ),
      ),
      h(S.MediaSection, { id: "demo", kicker: "Sección 04 / Demo", title: "Míralo trabajar", subtitle: "Una consulta técnica real, de principio a fin, sin cortes. Aquí entra tu video VideoEarth.", caption: "Fig. 04 — Demo en vivo", duration: "01:42", reference: "Ref. 04 / WhatsApp" }),
      h(
        "section",
        { className: "lp-section" },
        h(
          "div",
          { className: "sd-container lp-log-wrap" },
          h("div", { className: "sd-section-head" }, h("p", { className: "sd-kicker" }, "Sección 05 / Registro de campo"), h("h2", { className: "sd-section-title" }, "Una noche cualquiera"), h("p", { className: "sd-section-subtitle" }, "Así se ve una conversación que Solydos resuelve sola y una que le pasa a tu equipo. Ejemplo ilustrativo.")),
          h(
            "figure",
            { className: "lp-log", style: { margin: 0 } },
            h(
              "div",
              { className: "lp-log-inner" },
              h("div", { className: "lp-log-top" }, h("span", null, "Registro 0412 · WhatsApp"), h("span", null, "Ferretería El Tornillo")),
              [
                ["23:47", "client", "Cliente", "¿El taladro DX-20 sirve para concreto? Lo necesito mañana temprano."],
                ["23:47", "agent", "Solydos", "Sí, en modo percusión y con broca para concreto de 6 a 10 mm. Tienes 3 unidades en la sede Norte, que abre a las 7:00. ¿Te lo aparto?"],
                ["23:48", "client", "Cliente", "Sí, apártamelo. Y quiero factura a nombre de mi empresa."],
                ["23:48", "agent", "Solydos", "Listo, quedó apartado a tu nombre hasta las 12:00. Para la factura electrónica le paso tus datos a facturación; te escriben apenas abran."],
              ].map(function (m, i) {
                return h("div", { key: i, className: "lp-msg lp-msg-" + m[1] }, h("time", null, m[0]), h("div", null, h("div", { className: "lp-msg-who" }, m[2]), h("p", null, m[3])));
              }),
              h("div", { className: "lp-msg" }, h("span", { className: "lp-msg-note" }, "Escalado a Facturación · con contexto")),
              h("figcaption", { className: "lp-log-top", style: { borderBottom: 0, borderTop: "1.5px dotted var(--border-strong)", paddingTop: "var(--space-3)", paddingBottom: 0 } }, h("span", null, "Fig. 05 — Registro"), h("span", null, "Duración 01:10")),
            ),
          ),
        ),
      ),
      h("hr", { className: "lp-rule" }),
      h("section", { id: "empieza", className: "lp-section" }, h("div", { className: "sd-container lp-cta" }, h("div", null, h("p", { className: "sd-kicker", style: { marginBottom: "var(--space-6)" } }, "Sección 06 / Empieza"), h("h2", { className: "lp-cta-title" }, "Pon tu negocio ", h("span", null, "en el mapa.")), h("div", { className: "lp-cta-meta" }, h(S.Annotation, { value: "10 min" }, "Configuración guiada"), h(S.Annotation, { value: "1 número" }, "WhatsApp Business"), h(S.Annotation, { marker: "cross" }, "Soporte humano en español"))), h("form", { className: "lp-form", onSubmit: onSubmit, noValidate: true }, h(S.TextField, { id: "lp-empresa", index: "01", label: "Empresa", placeholder: "Ferretería El Tornillo", required: true }), h(S.TextField, { id: "lp-correo", index: "02", label: "Correo de trabajo", type: "email", placeholder: "ana@empresa.com" }), h(S.TextField, { id: "lp-wa", index: "03", label: "WhatsApp", hint: "Con indicativo de país, sin espacios.", placeholder: "+57 300 000 0000" }), h("div", { className: "lp-form-foot" }, sent[0] ? h("p", { className: "lp-done", role: "status" }, "Solicitud registrada · te escribimos pronto") : h("p", { className: "lp-form-note" }, "Formulario de ejemplo"), h(S.Button, { type: "submit", icon: "arrow" }, "Empieza ya"))))),
    ),
    h(S.Footer, {
      tagline: "Agentes de soporte con IA para WhatsApp. Firmes por fuera, vivos por dentro.",
      columns: [
        {
          title: "Producto",
          links: [
            { label: "Capacidades", href: "#producto" },
            { label: "Cómo funciona", href: "#proceso" },
            { label: "Demo", href: "#demo" },
          ],
        },
        { title: "Recursos", links: [{ label: "Documentación" }, { label: "Blog" }, { label: "Estado" }] },
        { title: "Empresa", links: [{ label: "Nosotros" }, { label: "Contacto" }, { label: "Privacidad" }] },
      ],
      socials: [{ label: "LinkedIn" }, { label: "Instagram" }, { label: "X" }],
      unit: "BOG-01",
      meta: "Datum WGS84 · Bogotá, CO",
    }),
  );
}
