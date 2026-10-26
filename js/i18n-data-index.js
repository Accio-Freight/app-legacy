/* =========================================================
   i18n-data-index.js — diccionario ES/EN para index.html
   Consumido por js/site.js (window.I18N.{es,en}).
   "es" es el espejo exacto del texto español ya presente en el HTML.
   "en" es la traducción profesional en inglés (tono B2B de carga/logística).
   ========================================================= */
window.I18N = {
  es: {
    meta: {
      title: "Accio Freight | Movemos tu carga, impulsamos tu empresa",
      description: "Agencia de carga en Perú: importaciones y exportaciones por vía marítima, aérea y terrestre, con respuesta directa y seguimiento de tu operación."
    },
    a11y: {
      skip: "Saltar al contenido"
    },
    nav: {
      logoAria: "Accio Freight — Inicio",
      inicio: "Inicio",
      nosotros: "Nosotros",
      servicios: "Servicios",
      blog: "Blog",
      blogAria: "Blog (próximamente)",
      contacto: "Contáctanos",
      cta: "COTIZA AHORA",
      menuAria: "Abrir menú"
    },
    hero: {
      title: "Movemos tu<br>carga,<br><em>Impulsamos tu<br>empresa.</em>",
      subtitle: "Marítimo, aéreo y terrestre en una sola operación.<br>Diseñamos soluciones ágiles, claras y con seguimiento<br class=\"hero-desktop\"> directo para que tu carga avance sin perder tiempo.",
      cta: "COTIZA AHORA"
    },
    services: {
      eyebrow: "TODOS LOS MODOS, UNA SOLUCIÓN.",
      title: "Movemos lo que<em>tu empresa necesita.</em>",
      lead: "Elegimos la combinación correcta de transporte según tiempos, costo, tipo de carga y destino.",
      card1: {
        tagPill: "FCL · LCL · IMPORTACIÓN · EXPORTACIÓN",
        tag: "01 / MARÍTIMO",
        title: "Transporte marítimo",
        text: "Importación y exportación FCL y LCL con cobertura global, coordinación integral y seguimiento durante todo el trayecto.",
        link: "COTIZAR MARÍTIMO →"
      },
      card2: {
        tagPill: "RÁPIDO · GLOBAL · PRIORITARIO",
        tag: "02 / AÉREO",
        title: "Transporte aéreo",
        text: "Soluciones rápidas y seguras para cargas urgentes, con conexiones internacionales y monitoreo continuo.",
        link: "COTIZAR AÉREO →"
      },
      card3: {
        tagPill: "NACIONAL · REGIONAL · PUERTA A PUERTA",
        tag: "03 / TERRESTRE",
        title: "Transporte terrestre",
        text: "Distribución nacional e internacional con operaciones flexibles, confiables y coordinadas con el resto de tu cadena logística.",
        link: "COTIZAR TERRESTRE →"
      },
      card4: {
        tagPill: "IMPORTACIÓN · EXPORTACIÓN · DESPACHO ADUANERO",
        tag: "04 / ADUANA",
        title: "Agenciamiento aduanero",
        text: "Clasificación arancelaria, trámites y despacho ante Aduanas, con cumplimiento normativo para que tu carga cruce la frontera sin demoras.",
        link: "COTIZAR ADUANA →"
      },
      card5: {
        tagPill: "CARGA · TRÁNSITO · TODO RIESGO",
        tag: "05 / SEGURO",
        title: "Seguro de carga",
        text: "Protección integral para tu carga durante todo el trayecto, con cobertura ante daños, pérdida o robo y gestión ágil de siniestros.",
        link: "COTIZAR SEGURO →"
      }
    },
    about: {
      eyebrow: "NOSOTROS",
      title: "Tu carga,<em>nuestra<br>responsabilidad.</em>",
      text: "Somos una empresa joven con mentalidad de operador: menos burocracia, más respuesta. Combinamos experiencia real, comunicación directa y una gestión pensada para negocios que necesitan avanzar.",
      feature1: "Global<br>Network",
      feature2: "Cost<br>Efficient",
      feature3: "On-Time<br>Delivery",
      feature4: "End-to-End<br>Handling",
      feature5: "Customs<br>Expertise",
      feature6: "Live<br>Tracking"
    },
    process: {
      eyebrow: "CÓMO TRABAJAMOS",
      title: "Una operación simple,<em>de principio a fin.</em>",
      text: "Cada envío tiene un responsable, una ruta y un siguiente paso claro. Diseñamos la operación contigo y la seguimos hasta el cierre.",
      step1: { title: "Cuéntanos tu operación", text: "Origen, destino, tipo de carga, volumen, fecha objetivo y cualquier restricción." },
      step2: { title: "Diseñamos la mejor ruta", text: "Evaluamos modalidad, tiempos, costo y riesgos para construir una propuesta clara." },
      step3: { title: "Coordinamos cada punto", text: "Reserva, recojo, documentación, despacho y coordinación con los actores involucrados." },
      step4: { title: "Te mantenemos informado", text: "Actualizaciones claras sobre hitos, desvíos y próximos pasos de la operación." },
      step5: { title: "Cerramos y aprendemos", text: "Confirmamos la entrega y revisamos oportunidades de mejora para el siguiente envío." }
    },
    contact: {
      eyebrow: "HABLEMOS",
      title: "Tu próxima operación<em>empieza aquí.</em>",
      text: "Cuéntanos qué necesitas mover. Nuestro equipo revisará tu solicitud y te responderá por WhatsApp o correo.",
      form: {
        nombreLabel: "Nombre completo <span class=\"req\" aria-hidden=\"true\">*</span>",
        nombrePlaceholder: "Tu nombre completo",
        empresaLabel: "Empresa",
        empresaPlaceholder: "Nombre de tu empresa",
        emailLabel: "Correo electrónico <span class=\"req\" aria-hidden=\"true\">*</span>",
        emailPlaceholder: "nombre@empresa.com",
        telefonoLabel: "Teléfono / WhatsApp",
        telefonoPlaceholder: "+51 999 999 999",
        servicioLabel: "Servicio de interés <span class=\"req\" aria-hidden=\"true\">*</span>",
        servicioOptPlaceholder: "Selecciona una opción",
        servicioOptMaritime: "Transporte marítimo",
        servicioOptAir: "Transporte aéreo",
        servicioOptLand: "Transporte terrestre",
        servicioOptInsurance: "Seguro de carga",
        servicioOptOther: "Otro / consulta general",
        naveLabel: "Nave o tipo de carga",
        navePlaceholder: "Nave o tipo de carga",
        mensajeLabel: "Mensaje <span class=\"req\" aria-hidden=\"true\">*</span>",
        mensajePlaceholder: "Describe tu carga y operación",
        consent: "Acepto la <a href=\"legal.html#privacidad\" target=\"_blank\" rel=\"noopener\">Política de privacidad</a> y autorizo el contacto comercial.",
        footerNote: "Te contactaremos sobre esta solicitud.",
        submit: "Enviar consulta",
        successMsg: "Consulta recibida. Nuestro equipo revisará tu solicitud y te contactará.",
        errorMsg: "No pudimos enviar tu consulta. Vuelve a intentarlo o contáctanos por <a class=\"form-error-whatsapp\" href=\"https://wa.me/51957518881\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>."
      }
    },
    footer: {
      text: "Soluciones logísticas integrales con trazabilidad en tiempo real y atención personalizada.",
      servicesHeading: "Servicios",
      linkMaritime: "Transporte marítimo",
      linkAir: "Transporte aéreo",
      linkLand: "Transporte terrestre",
      aboutHeading: "Quiénes somos",
      linkNosotros: "Nosotros",
      linkServicios: "Servicios",
      linkBlog: "Blog",
      copyright: "© 2026 ACCIO FREIGHT SAC. Todos los derechos reservados.",
      privacyLink: "Política de privacidad"
    }
  },
  en: {
    meta: {
      title: "Accio Freight | We move your cargo, we drive your business",
      description: "Freight forwarder in Peru: ocean, air and ground import/export, with direct response and shipment tracking."
    },
    a11y: {
      skip: "Skip to content"
    },
    nav: {
      logoAria: "Accio Freight — Home",
      inicio: "Home",
      nosotros: "About",
      servicios: "Services",
      blog: "Blog",
      blogAria: "Blog (coming soon)",
      contacto: "Contact",
      cta: "GET A QUOTE",
      menuAria: "Open menu"
    },
    hero: {
      title: "We move your<br>cargo,<br><em>we drive your<br>business.</em>",
      subtitle: "Ocean, air and ground freight in a single operation.<br>We design agile, transparent solutions with direct<br class=\"hero-desktop\"> follow-up so your cargo keeps moving.",
      cta: "GET A QUOTE"
    },
    services: {
      eyebrow: "EVERY MODE, ONE SOLUTION.",
      title: "We move what<em>your business needs.</em>",
      lead: "We choose the right transport mix based on timing, cost, cargo type and destination.",
      card1: {
        tagPill: "FCL · LCL · IMPORT · EXPORT",
        tag: "01 / OCEAN",
        title: "Ocean freight",
        text: "FCL and LCL import and export with global coverage, end-to-end coordination and tracking throughout the journey.",
        link: "GET AN OCEAN QUOTE →"
      },
      card2: {
        tagPill: "FAST · GLOBAL · PRIORITY",
        tag: "02 / AIR",
        title: "Air freight",
        text: "Fast, secure solutions for urgent cargo, with international connections and continuous monitoring.",
        link: "GET AN AIR QUOTE →"
      },
      card3: {
        tagPill: "NATIONAL · REGIONAL · DOOR TO DOOR",
        tag: "03 / GROUND",
        title: "Ground freight",
        text: "Domestic and international distribution with flexible, reliable operations coordinated with the rest of your supply chain.",
        link: "GET A GROUND QUOTE →"
      },
      card4: {
        tagPill: "IMPORT · EXPORT · CUSTOMS CLEARANCE",
        tag: "04 / CUSTOMS",
        title: "Customs brokerage",
        text: "Tariff classification, paperwork and customs clearance, with full regulatory compliance so your cargo crosses the border without delays.",
        link: "GET A CUSTOMS QUOTE →"
      },
      card5: {
        tagPill: "CARGO · TRANSIT · ALL RISK",
        tag: "05 / INSURANCE",
        title: "Cargo insurance",
        text: "Comprehensive coverage for your cargo throughout the journey, protecting against damage, loss or theft with fast claims handling.",
        link: "GET AN INSURANCE QUOTE →"
      }
    },
    about: {
      eyebrow: "ABOUT US",
      title: "Your cargo,<em>our<br>responsibility.</em>",
      text: "We're a young company with an operator's mindset: less bureaucracy, more response. We combine real experience, direct communication and management built for businesses that need to move forward.",
      feature1: "Global<br>Network",
      feature2: "Cost<br>Efficient",
      feature3: "On-Time<br>Delivery",
      feature4: "End-to-End<br>Handling",
      feature5: "Customs<br>Expertise",
      feature6: "Live<br>Tracking"
    },
    process: {
      eyebrow: "HOW WE WORK",
      title: "A simple operation,<em>start to finish.</em>",
      text: "Every shipment has an owner, a route and a clear next step. We design the operation with you and follow it through to closeout.",
      step1: { title: "Tell us about your shipment", text: "Origin, destination, cargo type, volume, target date and any restrictions." },
      step2: { title: "We design the best route", text: "We assess mode, timing, cost and risk to build a clear proposal." },
      step3: { title: "We coordinate every detail", text: "Booking, pickup, documentation, clearance and coordination with every party involved." },
      step4: { title: "We keep you informed", text: "Clear updates on milestones, delays and next steps of the operation." },
      step5: { title: "We close out and learn", text: "We confirm delivery and review opportunities to improve on the next shipment." }
    },
    contact: {
      eyebrow: "LET'S TALK",
      title: "Your next shipment<em>starts here.</em>",
      text: "Tell us what you need to move. Our team will review your request and reply by WhatsApp or email.",
      form: {
        nombreLabel: "Full name <span class=\"req\" aria-hidden=\"true\">*</span>",
        nombrePlaceholder: "Your full name",
        empresaLabel: "Company",
        empresaPlaceholder: "Your company name",
        emailLabel: "Email address <span class=\"req\" aria-hidden=\"true\">*</span>",
        emailPlaceholder: "name@company.com",
        telefonoLabel: "Phone / WhatsApp",
        telefonoPlaceholder: "+51 999 999 999",
        servicioLabel: "Service of interest <span class=\"req\" aria-hidden=\"true\">*</span>",
        servicioOptPlaceholder: "Select an option",
        servicioOptMaritime: "Ocean freight",
        servicioOptAir: "Air freight",
        servicioOptLand: "Ground freight",
        servicioOptInsurance: "Cargo insurance",
        servicioOptOther: "Other / general inquiry",
        naveLabel: "Vessel or cargo type",
        navePlaceholder: "Vessel or cargo type",
        mensajeLabel: "Message <span class=\"req\" aria-hidden=\"true\">*</span>",
        mensajePlaceholder: "Describe your cargo and operation",
        consent: "I accept the <a href=\"legal.html#privacidad\" target=\"_blank\" rel=\"noopener\">Privacy Policy</a> and authorize commercial contact.",
        footerNote: "We'll contact you about this request.",
        submit: "Send inquiry",
        successMsg: "Inquiry received. Our team will review your request and get in touch.",
        errorMsg: "We couldn't send your inquiry. Please try again or reach us on <a class=\"form-error-whatsapp\" href=\"https://wa.me/51957518881\" target=\"_blank\" rel=\"noopener\">WhatsApp</a>."
      }
    },
    footer: {
      text: "Comprehensive logistics solutions with real-time tracking and personalized service.",
      servicesHeading: "Services",
      linkMaritime: "Ocean freight",
      linkAir: "Air freight",
      linkLand: "Ground freight",
      aboutHeading: "About us",
      linkNosotros: "About",
      linkServicios: "Services",
      linkBlog: "Blog",
      copyright: "© 2026 ACCIO FREIGHT SAC. All rights reserved.",
      privacyLink: "Privacy Policy"
    }
  }
};
