import type { Dictionary } from '../types'

export const es: Dictionary = {
  meta: {
    title: 'Carlos Nóbrega — Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack trabajando en plataformas SaaS multi-tenant y funcionalidades de IA con NestJS, React y PostgreSQL. Estudiante de Ingeniería de Telecomunicaciones en la UFC.',
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
    availability: 'Abierto a puestos junior de full stack',
    greeting: 'Hola, soy Carlos',
    headlinePrefix: 'Trabajo en',
    rotating: [
      'plataformas SaaS multi-tenant',
      'agentes de IA corriendo en producción',
      'APIs que aguantan tráfico real',
      'interfaces que la gente usa de verdad',
    ],
    subheadline:
      'Desarrollador Full Stack junior en Automy y estudiante de Ingeniería de Telecomunicaciones en la UFC. Trabajo en todo el stack — módulos NestJS, esquemas Prisma, pantallas en React, workers de cola — en productos de los que empresas reales dependen cada día.',
    primaryCta: 'Ver lo que he construido',
    secondaryCta: 'Ponerse en contacto',
    resumeCta: 'Currículum',
    stats: {
      platforms: 'Plataformas en las que participé',
      modules: 'Módulos de dominio en ellas',
      monorepos: 'Monorepos en los que trabajé',
      years: 'Años escribiendo código',
    },
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Tres años dentro, aprendiendo en sistemas que están en uso real',
    lead: 'Soy desarrollador full stack junior. Lo que tengo a favor no es la senioridad — es que aprendí en sistemas reales de producción en lugar de tutoriales: CRMs multi-tenant, agentes de IA atendiendo clientes en WhatsApp, portales que las empresas abren cada mañana.',
    paragraphs: [
      'En el día a día eso significa trabajar en todo el stack. Una funcionalidad suele empezar como un modelo en Prisma o TypeORM, convertirse en un módulo NestJS, ganar una pantalla en React y terminar con un worker de BullMQ encargándose de la parte demasiado lenta para el camino de la petición. He entregado en las cuatro capas.',
      'Lo más útil que he aprendido es entender por qué la arquitectura a mi alrededor es como es. Trabajar dentro de un esquema-por-tenant en PostgreSQL me enseñó más sobre aislamiento de datos que cualquier artículo — lo entiendes la primera vez que sigues una consulta y ves el esquema resolverse antes de que se ejecute nada.',
      'También he pasado bastante tiempo en el lado de la IA: conectando el OpenAI Agents SDK y Claude a servicios existentes, anclando respuestas en bases de conocimiento por tenant para que el modelo deje de improvisar, y añadiendo instrumentación con OpenTelemetry y Sentry para que, cuando algo se rompe a las 2 de la mañana, haya una traza que leer.',
      'Sigo siendo temprano en esto, y prefiero decirlo con claridad antes que inflarlo. Hago muchas preguntas, leo el código que rodea al mío antes de tocarlo, e intento dejar las cosas más claras de como las encontré.',
    ],
    principlesTitle: 'Cómo trabajo',
    principles: [
      {
        title: 'Leer antes de escribir',
        body: 'Sigo las convenciones que ya existen en el código en lugar de inventar las mías en el rincón donde me toca trabajar.',
      },
      {
        title: 'Que lo atrapen los tipos',
        body: 'Paquetes compartidos y esquemas Zod, para que un error mío falle en CI y no delante de un usuario.',
      },
      {
        title: 'Entregar observable',
        body: 'Una funcionalidad no está lista hasta que puedo verla funcionar — logs, trazas y reporte de errores entran con el código.',
      },
      {
        title: 'Preguntar pronto',
        body: 'Una pregunta de cinco minutos vale más que un día construyendo con mucha confianza lo que no era.',
      },
    ],
    locationLabel: 'Ubicado en',
    timezoneLabel: 'Zona horaria',
    focusLabel: 'Actualmente',
    focusValue: 'Dev full stack @ Automy · Estudiante de Ing. @ UFC',
  },

  education: {
    eyebrow: 'Formación',
    title: 'Estudiando en paralelo al trabajo',
    ongoingBadge: 'En curso',
    items: {
      'ufc-telecom': {
        degree: 'Grado en Ingeniería de Telecomunicaciones',
        institution: 'Universidade Federal do Ceará',
        note: 'Procesamiento de señales, redes y matemáticas — una base que ha resultado inesperadamente útil para razonar sobre colas, throughput y fallos bajo carga.',
      },
    },
  },

  projects: {
    eyebrow: 'Proyectos',
    title: 'Sistemas reales, no prototipos',
    subtitle:
      'Cada proyecto de abajo está en producción, con base de datos, pipeline de despliegue y usuarios. Abre uno para ver cómo es la interfaz y qué hice en él.',
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
      viewProject: 'Ver proyecto',
      backToProjects: 'Volver a todos los proyectos',
      preview: 'Vista previa de la interfaz',
      previewNote:
        'Una reconstrucción de la interfaz del producto, rehecha aquí en código. Los sistemas reales son privados, así que esto muestra el layout y la pantalla principal, no datos de clientes.',
      overview: 'Resumen',
      myRole: 'En qué trabajé',
      highlights: 'Destacados',
      nextProject: 'Siguiente proyecto',
      allProjects: 'Todos los proyectos',
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
        contribution:
          'Construí módulos de dominio en el lado de la API y pantallas en ambos portales — unidades y tipologías, flujos de propuesta, importación de hojas de cálculo. La mayor parte de mi tiempo fue en los workers de BullMQ detrás de los caminos lentos: la importación de Excel, las propuestas en PDF renderizadas con Playwright y el correo transaccional con plantillas.',
        problem:
          'Una gestora de activos inmobiliarios manejaba la relación con inversores en hojas de cálculo e hilos de correo: el inventario de unidades, las propuestas comerciales y los informes de cartera vivían en archivos que nadie podía reconciliar. Los inversores no tenían forma de ver su propia posición, y las decisiones de precio dependían de quien conociera la hoja de cálculo.',
        solution:
          'La plataforma es una única API NestJS + Fastify que sirve a dos portales React distintos — un back office administrativo y un portal del inversor — compartiendo un esquema Prisma y un paquete tipado del workspace. Diecinueve módulos de dominio cubren desarrollos, bloques, tipologías, unidades, inversores, propuestas, auditoría e informes. Un motor de precios con parámetros configurables produce valoraciones, y un módulo con Claude añade sugerencias de precio por ubicación asistidas por IA. Workers en BullMQ gestionan la importación de hojas de cálculo, el correo transaccional con plantillas y registros, y las propuestas en PDF renderizadas con Playwright.',
        impact:
          'El acceso se segmenta por rol con JWT (access + refresh) y hashing Argon2, de modo que un inversor nunca puede resolver más que su propia cartera. El trabajo pesado — importaciones, generación de PDF, correo — corre fuera del camino de la petición en colas sobre Redis, manteniendo la API responsiva. Todo el stack se despliega en contenedores hacia AWS EKS mediante ECR y un release de Helm orquestado por GitHub Actions, con health probes y despliegue por componente para publicar API y web de forma independiente.',
      },
      'apex-crm': {
        tagline: 'CRM multi-tenant white-label con automatización por IA',
        contribution:
          'Trabajé en módulos de dominio y en el cliente React: pantallas de pipeline y leads, el constructor de formularios, tableros de tareas. Acostumbrarme al esquema-por-tenant fue lo más empinado — cada consulta resuelve un esquema de tenant antes que nada, y eso cambia cómo escribes cualquier cosa.',
        problem:
          'Atender a varias empresas cliente con una sola base de CRM plantea un problema difícil: sus datos nunca deben tocarse, su marca debe parecer nativa y cada proceso comercial es distinto. Un diseño de tabla compartida con una columna `tenant_id` dejaría cada consulta a un `WHERE` olvidado de distancia de una filtración de datos.',
        solution:
          'El sistema usa aislamiento esquema-por-tenant en PostgreSQL: cada tenant recibe su propio esquema, con un esquema público para el registro de tenants y los usuarios de plataforma, más herramientas de migración que se propagan a todos los esquemas. El sistema es un monorepo Turborepo con cuatro aplicaciones — una API NestJS, un cliente web en React 19, una suite de pruebas de carga y un servidor MCP que expone el CRM a asistentes de IA. Treinta y tres módulos de dominio cubren pipelines, leads y orígenes, un constructor de formularios con drag-and-drop, scoring de leads, tableros de tareas, objetivos, atención, telefonía vía api4com, ingesta de Meta Ads, webhooks y un constructor visual de automatizaciones sobre React Flow. Un módulo de agente de IA sobre LangChain y OpenAI opera la capa de conversaciones, con Socket.IO entregando actualizaciones en tiempo real.',
        impact:
          'La filtración entre tenants es estructuralmente imposible en vez de depender de una convención — la conexión resuelve el esquema antes de que se ejecute cualquier consulta. TanStack Query, Table y Virtual mantienen fluidos los pipelines grandes en el navegador, y Zustand guarda solo el estado realmente global. Dos reglas de lint propias con archivos de baseline hacen cumplir convenciones que el compilador no ve, y un repositorio separado de Quality Gate valida los contratos de forma independiente en CI. El despliegue es vía Helm, con valores distintos para dev y producción.',
      },
      automed: {
        tagline: 'Agentes de IA en WhatsApp para recuperación de ventas y anamnesis',
        contribution:
          'Implementé varias de las integraciones de proveedores de calendario detrás de la interfaz compartida, y trabajé en el anclaje por base de conocimiento para que el agente respondiera desde los procedimientos reales de la clínica. También añadí la instrumentación de OpenTelemetry y Sentry en el proceso worker.',
        problem:
          'Las clínicas pierden una parte relevante de sus ingresos por dos fugas silenciosas: interesados que preguntan el precio y desaparecen, y pacientes cuyos cuestionarios de anamnesis nunca se completan. Ambos problemas son conversacionales, ocurren en WhatsApp y es imposible cubrirlos con personal las 24 horas.',
        solution:
          'La plataforma corre sobre el OpenAI Agents SDK con una estructura router-planner-executor, conectada a la WhatsApp Cloud API mediante el embedded signup de Meta, para que cada clínica dé de alta su propio número. Un módulo de base de conocimiento ancla las respuestas en los procedimientos, profesionales y coberturas reales de la clínica, en lugar de dejar improvisar al modelo. Un flujo de asistente de salud conduce la anamnesis a partir de plantillas reutilizables, con seguimiento de consumo por tenant. La parte genuinamente difícil era la agenda, resuelta con una abstracción de proveedor de calendario y cinco implementaciones concretas — Google Calendar, Feegow, ProDoctor, EasyDental y ClinUp — para que el agente ofrezca disponibilidad real, sea cual sea el software que la clínica ya usa.',
        impact:
          'El manejo de conversaciones se divide entre una API web y procesos worker dedicados en BullMQ, así una llamada lenta al modelo o un proveedor con rate limit nunca bloquea la ingesta de mensajes. El consumo de tokens y el coste se miden por sesión, lo que convierte la economía unitaria en un número medible y no en una factura sorpresa. La observabilidad viene incluida: auto-instrumentación OpenTelemetry, exportador OTLP de trazas, endpoint de métricas Prometheus y profiling de Sentry — también en el proceso worker, que es exactamente donde suelen esconderse los fallos sin diagnosticar.',
      },
      flowmail: {
        tagline: 'Email marketing asistido por IA construido como app de Shopify',
        contribution:
          'Trabajé en las pantallas de campaña y plantillas, en los módulos de etiquetas y formularios, y en la integración con Shopify Billing. La capa de guardrails alrededor del contenido generado fue de lo que más aprendí — enviar en nombre de un comerciante no deja margen para que el modelo se salga del guion.',
        problem:
          'Las tiendas pequeñas de e-commerce necesitan email de ciclo de vida pero no pueden sostener un equipo de marketing. Las herramientas existentes asumen que alguien escribirá los textos, armará los segmentos y leerá los informes — justo el trabajo que esas tiendas no tienen quién haga.',
        solution:
          'Es una plataforma NestJS que se instala como app de Shopify, extrae los datos de la tienda a través de una abstracción de proveedor y usa OpenAI Agents con Guardrails para redactar campañas a partir del catálogo y los clientes reales. Veintiún módulos cubren hilos y mensajes, plantillas, formularios, etiquetas, planes, alertas y un dashboard. La facturación pasa por Shopify Billing y Stripe, para que el mismo producto se venda dentro del ecosistema Shopify o de forma directa. Junto a ello van una API y un portal de afiliados separados, además de una app independiente de formulario público con i18next para captación embebida de leads.',
        impact:
          'Los guardrails envuelven cada mensaje generado, así el agente no puede emitir contenido que viole la política de campaña — un requisito, no un detalle, cuando envías en nombre de un comerciante. El envío corre íntegramente sobre BullMQ con Redis, que es lo que hace viables el throttling, los reintentos y las campañas programadas. La división en cinco servicios mantiene el dominio de fallo del programa de afiliados separado del camino crítico de envío.',
      },
      chatfy: {
        tagline: 'Plataforma de afiliados y socios con pagos automatizados',
        contribution:
          'Construí pantallas en los front ends de afiliado y de administración y los endpoints de la API detrás de ellas: seguimiento de referidos, vistas de comisión, rondas de pago vía Stripe y subidas prefirmadas a S3, para que los archivos nunca pasen por la API.',
        problem:
          'Crecer un SaaS mediante socios implica rastrear quién refirió a quién, calcular la comisión correctamente y pagar a tiempo — dando a los afiliados suficiente visibilidad self-service para que no escriban a soporte por cada duda.',
        solution:
          'Una API NestJS + TypeORM sostiene tres interfaces de cliente distintas: una landing pública con flujo de registro, un panel del afiliado para seguir referidos y comisiones, y una consola administrativa para aprobaciones, gestión de niveles y rondas de pago. Stripe gestiona los pagos, las URLs prefirmadas de S3 gestionan la subida de documentos sin pasar archivos por la API, y la validación de identificadores fiscales brasileños ocurre en la frontera de los DTO.',
        impact:
          'Separar afiliado y administración en aplicaciones front-end distintas garantiza que un bug administrativo no exponga superficie administrativa a los socios. La instrumentación con Sentry y una capa de trabajos programados mantienen auditable el cálculo de comisiones, y la validación en la frontera impide que datos de registro malformados lleguen a la base de datos.',
      },
      'quality-gate': {
        tagline: 'Un verificador de CI independiente que no confía en la implementación',
        contribution:
          'Escribí pruebas de contrato y de API y ayudé a documentar las reglas de negocio que verifican. La idea de un verificador que deliberadamente no conoce la implementación era nueva para mí, y cambió cómo pienso sobre lo que una prueba realmente demuestra.',
        problem:
          'Cuando el mismo contexto escribe la función y sus pruebas, las pruebas heredan las suposiciones del autor. El desarrollo asistido por IA lo agrava: un agente con todo el contexto de la aplicación escribirá con gusto una prueba que pasa por la razón equivocada.',
        solution:
          'Es un repositorio deliberadamente separado que verifica Apex CRM desde fuera, sin acceso a su contexto de implementación. Tiene tres capas — smoke checks, pruebas de comportamiento de la API y pruebas de contrato basadas en Zod — junto con documentación escrita de reglas de negocio, contratos, flujos críticos y una matriz de trazabilidad. Las fixtures de entorno permiten ejecutar la misma suite contra objetivos local, dev y producción.',
        impact:
          'Funciona como gate bloqueante en GitHub Actions, así un cambio de contrato no puede fusionarse en silencio. Como solo conoce la superficie pública de la API, detecta la clase de bug en la que implementación y pruebas están consistentemente equivocadas juntas. La documentación de reglas de negocio sirve además como especificación de la que parten humanos y agentes.',
      },
      'template-api': {
        tagline: 'La base de servicio desde la que arranca cada nueva API',
        contribution:
          'Trabajé en la base compartida y la usé para arrancar nuevos servicios — que fue también como aprendí lo que un servicio de producción necesita antes de su primera funcionalidad: auth, rate limiting, logs estructurados, reporte de errores y un flujo de migraciones.',
        problem:
          'Cada nuevo servicio NestJS repetía los mismos dos días de configuración: auth, Swagger, rate limiting, reporte de errores, conexión a base de datos, scripts de migración, Docker. Repetidos a mano, esos dos días también significan que el quinto servicio divergió silenciosamente del primero.',
        solution:
          'La respuesta fue una plantilla NestJS 11 + Fastify 5 lista para producción, con data-source y generación de migraciones en TypeORM, auth JWT, Swagger, throttling, Sentry con profiling, logging estructurado, soporte de correo y configuración Docker — todo configurado, no solo instalado.',
        impact:
          'Cuatro servicios en producción nacieron de ella, lo que significa que comparten la misma observabilidad, la misma semántica de auth y el mismo flujo de migraciones. Actualizar una preocupación transversal pasa a ser un cambio revisado que se propaga, en lugar de cuatro ejercicios independientes de arqueología.',
      },
      iacougue: {
        tagline: 'Landing page y superficie de compliance para un producto de IA en WhatsApp',
        contribution:
          'Este lo hice de principio a fin: la landing page, la política de privacidad, los términos de uso y el módulo de configuración tipado del que los tres leen. Se desplegó a Docker y Kubernetes vía GitHub Actions.',
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
    title: 'Con qué trabajo',
    subtitle:
      'Pasa el cursor o toca una categoría para explorarla. Los niveles son una autoevaluación honesta: alto significa que lo he entregado y depurado en producción; más bajo, que puedo trabajar en ello pero aún consulto documentación.',
    levelLabel: 'Nivel de dominio',
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
    title: 'En qué he trabajado',
    subtitle: 'Del más reciente al más antiguo.',
    currentBadge: 'Actual',
    items: {
      'automy-dev': {
        role: 'Desarrollador Full Stack',
        summary:
          'Desarrollo de funcionalidades en los productos de Automy — módulos de API, modelos de base de datos, pantallas en React y workers de cola — en bases de código que ya estaban en producción cuando entré.',
        highlights: [
          'Construí funcionalidades de extremo a extremo dentro de las convenciones existentes: modelos Prisma y TypeORM, módulos NestJS, pantallas en React y las migraciones detrás de ellas.',
          'Saqué el trabajo lento del camino de la petición con workers de BullMQ — importación de hojas de cálculo, generación de PDF y correo transaccional.',
          'Trabajé en las funcionalidades de IA: conectando el OpenAI Agents SDK y Claude a servicios existentes y anclando respuestas en bases de conocimiento por tenant.',
          'Aprendí el camino de despliegue lo suficiente para depurar el mío: imágenes Docker, valores de Helm y ejecuciones de GitHub Actions.',
        ],
      },
      'platform-work': {
        role: 'Desarrollo Full Stack — Plataformas Multi-tenant',
        summary:
          'Contribuí en dos productos multi-tenant: un CRM white-label y un sistema de portal dual para inversores inmobiliarios.',
        highlights: [
          'Implementé módulos de dominio sobre un esquema-por-tenant en PostgreSQL, y entendí por qué se elige ese modelo frente a una tabla compartida con columna de tenant.',
          'Construí pantallas en React con TanStack Query, Table y Virtual para pipelines lo bastante grandes como para atascar el navegador con renderizado ingenuo.',
          'Seguí el camino de despliegue con Helm y AWS EKS en ambas aplicaciones, incluidos los releases por componente.',
        ],
      },
      'ai-work': {
        role: 'Desarrollo Full Stack — Funcionalidades de IA',
        summary:
          'Trabajé en funcionalidades de agentes conversacionales para anamnesis clínica y marketing de ciclo de vida en e-commerce, corriendo en WhatsApp y correo.',
        highlights: [
          'Implementé integraciones de proveedores de calendario detrás de una interfaz compartida, para que el agente ofreciera disponibilidad desde el software que la clínica ya usaba.',
          'Conecté la recuperación sobre bases de conocimiento por tenant para que las respuestas vinieran de procedimientos y precios reales, no de suposiciones del modelo.',
          'Añadí instrumentación con OpenTelemetry, Prometheus y Sentry, incluidos los procesos worker, donde los fallos pasan más desapercibidos.',
        ],
      },
      'first-production': {
        role: 'Desarrollo Full Stack — Primer Trabajo en Producción',
        summary:
          'Mi primer código que llegó a usuarios reales: pantallas de plataforma de afiliados, integraciones de facturación y sitios públicos de producto.',
        highlights: [
          'Construí pantallas de afiliado y de administración contra una API NestJS, con pagos vía Stripe y subidas prefirmadas a S3.',
          'Integré Shopify Billing y Stripe para que el mismo producto pudiera venderse dentro del ecosistema Shopify o directamente.',
          'Construí páginas de marketing y páginas legales en Next.js que pasaron la revisión de Meta para la aprobación en WhatsApp Business.',
        ],
      },
      learning: {
        role: 'Aprendiendo a Construir',
        summary:
          'Empecé con JavaScript y Node mientras estudiaba ingeniería, pasando de los tutoriales a cosas que otras personas realmente usaban.',
        highlights: [
          'Recorrí JavaScript, TypeScript, React y Node, y después SQL y modelado relacional.',
          'Construí pequeños proyectos full stack para entender cómo viaja una petición desde un formulario hasta una fila en la base de datos y de vuelta.',
          'Empecé a leer en serio el código de otras personas, lo que acabó importando más que escribir el mío.',
        ],
      },
    },
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos',
    subtitle:
      'Abierto a puestos full stack junior y semi-senior, y a trabajo freelance. Cuéntame qué estás construyendo — si no soy la persona adecuada, te lo digo.',
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
    tagline: 'Desarrollador Full Stack — SaaS multi-tenant, funcionalidades de IA, sistemas en producción.',
    builtWith: 'Construido con Next.js, Tailwind CSS y Framer Motion.',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
    sections: 'Secciones',
    elsewhere: 'En otros sitios',
  },
}
