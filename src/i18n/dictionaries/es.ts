import type { Dictionary } from '../types'

export const es: Dictionary = {
  meta: {
    title: 'Carlos Nóbrega — Ingeniero Full Stack',
    description:
      'Ingeniero Full Stack que construye plataformas SaaS multi-tenant, sistemas de agentes de IA e infraestructura de producción con NestJS, React y Kubernetes.',
  },

  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    stack: 'Stack',
    experience: 'Experiencia',
    contact: 'Contacto',
    menu: 'Menú',
    closeMenu: 'Cerrar menú',
  },

  a11y: {
    switchLanguage: 'Cambiar idioma',
    toggleTheme: 'Cambiar tema',
    skipToContent: 'Ir al contenido',
    scrollDown: 'Ir a la siguiente sección',
    currentLanguage: 'Idioma actual',
  },

  hero: {
    availability: 'Disponible para nuevos proyectos',
    greeting: 'Hola, soy Carlos',
    headlinePrefix: 'Construyo',
    rotating: [
      'plataformas SaaS multi-tenant',
      'agentes de IA que llegan a producción',
      'APIs que resisten carga real',
      'interfaces que la gente disfruta usar',
    ],
    subheadline:
      'Ingeniero Full Stack enfocado en todo el recorrido, del esquema de base de datos al píxel. Diseño arquitecturas multi-tenant, orquesto agentes de IA y llevo sistemas hasta Kubernetes — no solo hasta la demo.',
    primaryCta: 'Ver proyectos destacados',
    secondaryCta: 'Ponerse en contacto',
    resumeCta: 'Currículum',
    stats: {
      platforms: 'Plataformas en producción',
      modules: 'Módulos de dominio entregados',
      monorepos: 'Monorepos mantenidos',
      years: 'Años construyendo SaaS',
    },
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Ingeniería que sobrevive al contacto con producción',
    lead: 'Soy Ingeniero Full Stack y prefiero la profundidad antes que una lista de tecnologías marcada con casillas. La mayor parte de mi trabajo es ingeniería de producto de extremo a extremo: me hago cargo del esquema en Prisma, de los módulos de dominio en NestJS, de la interfaz en React, de los workers de cola y del Helm chart que lo pone todo en un clúster.',
    paragraphs: [
      'Mi foco es el SaaS multi-tenant. He diseñado aislamiento esquema-por-tenant en PostgreSQL, temas white-label, control de acceso por roles y pipelines de trabajos en segundo plano que mantienen rápido el camino de la petición — el tipo de decisión que es barata el primer día y carísima de rehacer el día cuatrocientos.',
      'También construyo sistemas de IA pensados para operar sin supervisión: orquestación de agentes con el OpenAI Agents SDK y Claude, recuperación sobre bases de conocimiento de dominio, guardrails y observabilidad completa con OpenTelemetry, Prometheus y Sentry, para que los fallos sean visibles en lugar de misteriosos.',
      'Lo que más me importa es la parte aburrida que hace posible la parte interesante: contratos tipados entre servicios, quality gates independientes en CI, reglas de lint propias para las convenciones del equipo y documentación que un ingeniero nuevo pueda seguir de verdad.',
    ],
    principlesTitle: 'Cómo trabajo',
    principles: [
      {
        title: 'Tipos como contrato',
        body: 'Paquetes compartidos y esquemas Zod para que una ruptura falle en CI, no en producción.',
      },
      {
        title: 'Aislamiento por defecto',
        body: 'Fronteras de tenant, credenciales con alcance y mínimo privilegio desde la primera migración.',
      },
      {
        title: 'Observable o incompleto',
        body: 'Trazas, métricas y reporte de errores se entregan con la función — nunca como ticket futuro.',
      },
      {
        title: 'Verificado desde fuera',
        body: 'Un quality gate separado valida reglas de negocio y contratos de API sin conocer la implementación.',
      },
    ],
    locationLabel: 'Ubicado en',
    timezoneLabel: 'Zona horaria',
    focusLabel: 'Foco actual',
    focusValue: 'SaaS multi-tenant + agentes de IA',
  },

  projects: {
    eyebrow: 'Proyectos destacados',
    title: 'Plataformas, no prototipos',
    subtitle:
      'Cada proyecto de abajo es un sistema real, con base de datos, pipeline de despliegue y usuarios. Expande una tarjeta para leer el problema que resolvió y la ingeniería detrás.',
    filters: {
      all: 'Todos',
      flagship: 'Principales',
      feature: 'Productos',
      sidecar: 'Builds focalizados',
    },
    labels: {
      problem: 'Problema',
      solution: 'Solución',
      impact: 'Impacto técnico',
      stack: 'Tecnologías',
      viewRepo: 'Ver repositorio',
      privateRepo: 'Repositorio privado',
      liveDemo: 'En vivo',
      expand: 'Leer el caso completo',
      collapse: 'Contraer',
    },
    metrics: {
      modules: 'módulos de dominio',
      portals: 'portales, una API',
      deploy: 'despliegue',
      apps: 'apps en el monorepo',
      isolation: 'aislamiento de datos',
      calendars: 'integraciones de calendario',
      observability: 'observabilidad',
      services: 'servicios',
      billing: 'facturación',
      surfaces: 'interfaces de cliente',
      payouts: 'pagos',
      uploads: 'subidas',
      layers: 'capas de prueba',
      gate: 'comportamiento en CI',
      context: 'por diseño',
      reuse: 'iniciados a partir de él',
      baseline: 'baseline incluida',
      compliance: 'páginas legales',
      lighthouse: 'entrega',
    },
    items: {
      aldea: {
        tagline: 'Plataforma de portal dual para gestión de activos inmobiliarios',
        problem:
          'Una gestora de activos inmobiliarios manejaba la relación con inversores en hojas de cálculo e hilos de correo: el inventario de unidades, las propuestas comerciales y los informes de cartera vivían en archivos que nadie podía reconciliar. Los inversores no tenían forma de ver su propia posición, y las decisiones de precio dependían de quien conociera la hoja de cálculo.',
        solution:
          'Diseñé una única API NestJS + Fastify que sirve a dos portales React distintos — un back office administrativo y un portal del inversor — compartiendo un esquema Prisma y un paquete tipado del workspace. Diecinueve módulos de dominio cubren desarrollos, bloques, tipologías, unidades, inversores, propuestas, auditoría e informes. Un motor de precios con parámetros configurables produce valoraciones, y un módulo con Claude añade sugerencias de precio por ubicación asistidas por IA. Workers en BullMQ gestionan la importación de hojas de cálculo, el correo transaccional con plantillas y registros, y las propuestas en PDF renderizadas con Playwright.',
        impact:
          'El acceso se segmenta por rol con JWT (access + refresh) y hashing Argon2, de modo que un inversor nunca puede resolver más que su propia cartera. El trabajo pesado — importaciones, generación de PDF, correo — corre fuera del camino de la petición en colas sobre Redis, manteniendo la API responsiva. Todo el stack se despliega en contenedores hacia AWS EKS mediante ECR y un release de Helm orquestado por GitHub Actions, con health probes y despliegue por componente para publicar API y web de forma independiente.',
      },
      'apex-crm': {
        tagline: 'CRM multi-tenant white-label con automatización por IA',
        problem:
          'Atender a varias empresas cliente con una sola base de CRM plantea un problema difícil: sus datos nunca deben tocarse, su marca debe parecer nativa y cada proceso comercial es distinto. Un diseño de tabla compartida con una columna `tenant_id` dejaría cada consulta a un `WHERE` olvidado de distancia de una filtración de datos.',
        solution:
          'Implementé aislamiento esquema-por-tenant en PostgreSQL: cada tenant recibe su propio esquema, con un esquema público para el registro de tenants y los usuarios de plataforma, más herramientas de migración que se propagan a todos los esquemas. El sistema es un monorepo Turborepo con cuatro aplicaciones — una API NestJS, un cliente web en React 19, una suite de pruebas de carga y un servidor MCP que expone el CRM a asistentes de IA. Treinta y tres módulos de dominio cubren pipelines, leads y orígenes, un constructor de formularios con drag-and-drop, scoring de leads, tableros de tareas, objetivos, atención, telefonía vía api4com, ingesta de Meta Ads, webhooks y un constructor visual de automatizaciones sobre React Flow. Un módulo de agente de IA sobre LangChain y OpenAI opera la capa de conversaciones, con Socket.IO entregando actualizaciones en tiempo real.',
        impact:
          'La filtración entre tenants es estructuralmente imposible en vez de depender de una convención — la conexión resuelve el esquema antes de que se ejecute cualquier consulta. TanStack Query, Table y Virtual mantienen fluidos los pipelines grandes en el navegador, y Zustand guarda solo el estado realmente global. Añadí dos reglas de lint propias con archivos de baseline para hacer cumplir convenciones que el compilador no ve, y un repositorio separado de Quality Gate valida los contratos de forma independiente en CI. El despliegue es vía Helm, con valores distintos para dev y producción.',
      },
      automed: {
        tagline: 'Agentes de IA en WhatsApp para recuperación de ventas y anamnesis',
        problem:
          'Las clínicas pierden una parte relevante de sus ingresos por dos fugas silenciosas: interesados que preguntan el precio y desaparecen, y pacientes cuyos cuestionarios de anamnesis nunca se completan. Ambos problemas son conversacionales, ocurren en WhatsApp y es imposible cubrirlos con personal las 24 horas.',
        solution:
          'Construí una plataforma de agentes sobre el OpenAI Agents SDK con una estructura router-planner-executor, conectada a la WhatsApp Cloud API mediante el embedded signup de Meta, para que cada clínica dé de alta su propio número. Un módulo de base de conocimiento ancla las respuestas en los procedimientos, profesionales y coberturas reales de la clínica, en lugar de dejar improvisar al modelo. Un flujo de asistente de salud conduce la anamnesis a partir de plantillas reutilizables, con seguimiento de consumo por tenant. La parte genuinamente difícil era la agenda: escribí una abstracción de proveedor de calendario con cinco implementaciones concretas — Google Calendar, Feegow, ProDoctor, EasyDental y ClinUp — para que el agente ofrezca disponibilidad real, sea cual sea el software que la clínica ya usa.',
        impact:
          'El manejo de conversaciones se divide entre una API web y procesos worker dedicados en BullMQ, así una llamada lenta al modelo o un proveedor con rate limit nunca bloquea la ingesta de mensajes. El consumo de tokens y el coste se miden por sesión, lo que convierte la economía unitaria en un número medible y no en una factura sorpresa. La observabilidad viene incluida: auto-instrumentación OpenTelemetry, exportador OTLP de trazas, endpoint de métricas Prometheus y profiling de Sentry — también en el proceso worker, que es exactamente donde suelen esconderse los fallos sin diagnosticar.',
      },
      flowmail: {
        tagline: 'Email marketing asistido por IA construido como app de Shopify',
        problem:
          'Las tiendas pequeñas de e-commerce necesitan email de ciclo de vida pero no pueden sostener un equipo de marketing. Las herramientas existentes asumen que alguien escribirá los textos, armará los segmentos y leerá los informes — justo el trabajo que esas tiendas no tienen quién haga.',
        solution:
          'Construí una plataforma NestJS que se instala como app de Shopify, extrae los datos de la tienda a través de una abstracción de proveedor y usa OpenAI Agents con Guardrails para redactar campañas a partir del catálogo y los clientes reales. Veintiún módulos cubren hilos y mensajes, plantillas, formularios, etiquetas, planes, alertas y un dashboard. La facturación pasa por Shopify Billing y Stripe, para que el mismo producto se venda dentro del ecosistema Shopify o de forma directa. Junto a ello entregué una API y un portal de afiliados separados, además de una app independiente de formulario público con i18next para captación embebida de leads.',
        impact:
          'Los guardrails envuelven cada mensaje generado, así el agente no puede emitir contenido que viole la política de campaña — un requisito, no un detalle, cuando envías en nombre de un comerciante. El envío corre íntegramente sobre BullMQ con Redis, que es lo que hace viables el throttling, los reintentos y las campañas programadas. La división en cinco servicios mantiene el dominio de fallo del programa de afiliados separado del camino crítico de envío.',
      },
      chatfy: {
        tagline: 'Plataforma de afiliados y socios con pagos automatizados',
        problem:
          'Crecer un SaaS mediante socios implica rastrear quién refirió a quién, calcular la comisión correctamente y pagar a tiempo — dando a los afiliados suficiente visibilidad self-service para que no escriban a soporte por cada duda.',
        solution:
          'Construí una API NestJS + TypeORM con tres interfaces de cliente distintas: una landing pública con flujo de registro, un panel del afiliado para seguir referidos y comisiones, y una consola administrativa para aprobaciones, gestión de niveles y rondas de pago. Stripe gestiona los pagos, las URLs prefirmadas de S3 gestionan la subida de documentos sin pasar archivos por la API, y la validación de identificadores fiscales brasileños ocurre en la frontera de los DTO.',
        impact:
          'Separar afiliado y administración en aplicaciones front-end distintas garantiza que un bug administrativo no exponga superficie administrativa a los socios. La instrumentación con Sentry y una capa de trabajos programados mantienen auditable el cálculo de comisiones, y la validación en la frontera impide que datos de registro malformados lleguen a la base de datos.',
      },
      'quality-gate': {
        tagline: 'Un verificador de CI independiente que no confía en la implementación',
        problem:
          'Cuando el mismo contexto escribe la función y sus pruebas, las pruebas heredan las suposiciones del autor. El desarrollo asistido por IA lo agrava: un agente con todo el contexto de la aplicación escribirá con gusto una prueba que pasa por la razón equivocada.',
        solution:
          'Construí un repositorio deliberadamente separado que verifica Apex CRM desde fuera, sin acceso a su contexto de implementación. Tiene tres capas — smoke checks, pruebas de comportamiento de la API y pruebas de contrato basadas en Zod — junto con documentación escrita de reglas de negocio, contratos, flujos críticos y una matriz de trazabilidad. Las fixtures de entorno permiten ejecutar la misma suite contra objetivos local, dev y producción.',
        impact:
          'Funciona como gate bloqueante en GitHub Actions, así un cambio de contrato no puede fusionarse en silencio. Como solo conoce la superficie pública de la API, detecta la clase de bug en la que implementación y pruebas están consistentemente equivocadas juntas. La documentación de reglas de negocio sirve además como especificación de la que parten humanos y agentes.',
      },
      'template-api': {
        tagline: 'La base de servicio desde la que arranca cada nueva API',
        problem:
          'Cada nuevo servicio NestJS repetía los mismos dos días de configuración: auth, Swagger, rate limiting, reporte de errores, conexión a base de datos, scripts de migración, Docker. Repetidos a mano, esos dos días también significan que el quinto servicio divergió silenciosamente del primero.',
        solution:
          'Extraje una plantilla NestJS 11 + Fastify 5 lista para producción, con data-source y generación de migraciones en TypeORM, auth JWT, Swagger, throttling, Sentry con profiling, logging estructurado, soporte de correo y configuración Docker — todo configurado, no solo instalado.',
        impact:
          'Cuatro servicios en producción nacieron de ella, lo que significa que comparten la misma observabilidad, la misma semántica de auth y el mismo flujo de migraciones. Actualizar una preocupación transversal pasa a ser un cambio revisado que se propaga, en lugar de cuatro ejercicios independientes de arqueología.',
      },
      iacougue: {
        tagline: 'Landing page y superficie de compliance para un producto de IA en WhatsApp',
        problem:
          'Meta no aprueba una aplicación de WhatsApp Business sin páginas de privacidad y términos públicamente accesibles y correctas — y equivocarse ahí bloquea el lanzamiento del producto completo, no solo el sitio de marketing.',
        solution:
          'Construí un sitio en Next.js 14 App Router donde la página de marketing, la política de privacidad y los términos de uso leen de un único módulo de configuración tipado, de modo que los datos de la empresa, el contacto del DPO y el número de soporte se definen una sola vez. El sitio se containeriza con build Docker y manifiestos de Kubernetes, desplegado por GitHub Actions.',
        impact:
          'Centralizar los datos legales en un archivo tipado elimina el modo de fallo en el que la página de política y la de términos discrepan sobre los propios datos de la empresa. La entrega estática mantiene rápidas y disponibles las URLs de compliance que Meta revisa, con independencia de cualquier backend.',
      },
    },
  },

  stack: {
    eyebrow: 'Stack técnico',
    title: 'Herramientas que elijo, y por qué',
    subtitle:
      'Pasa el cursor o toca una categoría para explorarla. La competencia refleja lo que realmente he entregado y operado en producción, no lo que he leído.',
    levelLabel: 'Competencia',
    categories: {
      backend: {
        title: 'Backend',
        blurb: 'APIs modulares con fronteras tipadas y trabajo en segundo plano sobre colas.',
      },
      frontend: {
        title: 'Frontend',
        blurb: 'Interfaces rápidas y accesibles, con disciplina real de gestión de estado.',
      },
      data: {
        title: 'Datos',
        blurb: 'Modelado relacional, migraciones y aislamiento de tenant hechos como se debe.',
      },
      ai: {
        title: 'Ingeniería de IA',
        blurb: 'Agentes, recuperación y guardrails construidos para operar sin supervisión.',
      },
      infra: {
        title: 'Infraestructura',
        blurb: 'Contenedores, clústeres y pipelines que vuelven el despliegue algo sin emoción.',
      },
      quality: {
        title: 'Calidad y Observabilidad',
        blurb: 'Contratos, gates independientes y trazas que se explican solas.',
      },
    },
  },

  experience: {
    eyebrow: 'Experiencia',
    title: 'Trayectoria profesional',
    subtitle: 'Roles y proyectos, del más reciente al más antiguo.',
    currentBadge: 'Actual',
    items: {
      'automy-lead': {
        role: 'Ingeniero Full Stack y Líder Técnico',
        summary:
          'Responsabilidad técnica del portafolio de productos de Automy: decisiones de arquitectura, la base de servicio compartida y la entrega del esquema al clúster en seis plataformas de producción.',
        highlights: [
          'Definió el estándar de arquitectura usado en todos los servicios — NestJS + Fastify, paquetes compartidos tipados, BullMQ para todo lo lento.',
          'Llevó productos de extremo a extremo: esquemas Prisma/TypeORM, módulos de dominio, front ends en React, Helm charts y pipelines en GitHub Actions.',
          'Introdujo quality gating independiente y reglas de lint propias, para que las convenciones las haga cumplir el CI y no la memoria del code review.',
          'Construyó la capa de IA de los productos: OpenAI Agents SDK, Claude, LangChain, recuperación y guardrails, con coste medido por sesión.',
        ],
      },
      'platform-multitenant': {
        role: 'Arquitectura de Plataforma — SaaS Multi-tenant',
        summary:
          'Diseñó y entregó dos plataformas multi-tenant: un CRM white-label y un sistema de portal dual para inversores inmobiliarios.',
        highlights: [
          'Implementó aislamiento esquema-por-tenant en PostgreSQL, con herramientas de migración que se propagan a todos los esquemas.',
          'Construyó un monorepo Turborepo con cuatro aplicaciones sobre paquetes compartidos de TypeScript, ESLint y configuración.',
          'Desplegó en AWS EKS vía ECR y Helm, con releases por componente, health probes y valores separados para dev y producción.',
        ],
      },
      'ai-agents': {
        role: 'Ingeniería de Sistemas de IA',
        summary:
          'Construyó plataformas de agentes conversacionales para anamnesis clínica y marketing de ciclo de vida en e-commerce, operando sin supervisión en WhatsApp y correo.',
        highlights: [
          'Diseñó una arquitectura de agente router-planner-executor, con recuperación anclada en bases de conocimiento de dominio por tenant.',
          'Abstrajo cinco sistemas de calendario de terceros detrás de una sola interfaz de proveedor, para que los agentes ofrecieran disponibilidad real.',
          'Instrumentó todo con OpenTelemetry, Prometheus y Sentry — incluidos los procesos worker, donde se esconden los fallos.',
        ],
      },
      'saas-foundations': {
        role: 'Ingeniería de Producto Full Stack',
        summary:
          'Entregó plataformas de afiliados/socios, integraciones de facturación y superficies públicas de producto de cero a producción.',
        highlights: [
          'Entregó una plataforma de afiliados con tres interfaces, pagos vía Stripe y subida de documentos con URLs prefirmadas de S3.',
          'Integró Shopify Billing y Stripe, para que el mismo producto pudiera venderse dentro del ecosistema o de forma directa.',
          'Construyó sitios de marketing y compliance en Next.js aprobados en la revisión de Meta para WhatsApp Business.',
        ],
      },
    },
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Construyamos algo que perdure',
    subtitle:
      'Abierto a puestos full stack, trabajo de arquitectura de plataforma y proyectos de ingeniería de IA. Cuéntame qué estás construyendo y te diré con honestidad si soy la persona adecuada.',
    form: {
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Correo',
      emailPlaceholder: 'tu@empresa.com',
      subject: 'Asunto',
      subjectPlaceholder: '¿De qué se trata?',
      message: 'Mensaje',
      messagePlaceholder: 'Unas líneas sobre tu proyecto, equipo o puesto…',
      submit: 'Enviar mensaje',
      sending: 'Abriendo tu cliente de correo…',
      note: 'Al enviar se abre tu cliente de correo con el mensaje ya escrito — sin servicio de formularios externo, sin datos almacenados.',
      errors: {
        nameRequired: 'Por favor, dime tu nombre.',
        emailRequired: 'Se requiere una dirección de correo.',
        emailInvalid: 'Esa dirección de correo no parece válida.',
        messageRequired: 'Por favor, escribe un mensaje breve.',
        messageShort: 'Un poco más de detalle ayudaría — al menos 20 caracteres.',
      },
    },
    direct: {
      title: 'O escríbeme directamente',
      emailLabel: 'Correo',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      orgLabel: 'Automy',
      copy: 'Copiar',
      copied: 'Copiado',
    },
    availability: {
      title: 'Disponibilidad',
      body: 'Actualmente aceptando nuevos proyectos. El tiempo típico de respuesta es menos de 24 horas en días laborables.',
    },
  },

  footer: {
    tagline: 'Ingeniero Full Stack — SaaS multi-tenant, agentes de IA, infraestructura de producción.',
    builtWith: 'Construido con Next.js, Tailwind CSS y Framer Motion.',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
    sections: 'Secciones',
    elsewhere: 'En otros sitios',
  },
}
