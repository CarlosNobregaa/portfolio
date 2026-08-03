import type { Dictionary } from '../types'

export const ptBR: Dictionary = {
  meta: {
    title: 'Carlos Nóbrega — Engenheiro Full Stack',
    description:
      'Engenheiro Full Stack construindo plataformas SaaS multi-tenant, sistemas de agentes de IA e infraestrutura de produção com NestJS, React e Kubernetes.',
  },

  nav: {
    about: 'Sobre',
    projects: 'Projetos',
    stack: 'Stack',
    experience: 'Experiência',
    contact: 'Contato',
    menu: 'Menu',
    closeMenu: 'Fechar menu',
  },

  a11y: {
    switchLanguage: 'Mudar idioma',
    toggleTheme: 'Alternar tema',
    skipToContent: 'Ir para o conteúdo',
    scrollDown: 'Ir para a próxima seção',
    currentLanguage: 'Idioma atual',
  },

  hero: {
    availability: 'Disponível para novos projetos',
    greeting: 'Olá, eu sou o Carlos',
    headlinePrefix: 'Eu construo',
    rotating: [
      'plataformas SaaS multi-tenant',
      'agentes de IA que chegam à produção',
      'APIs que aguentam carga real',
      'interfaces que as pessoas gostam de usar',
    ],
    subheadline:
      'Engenheiro Full Stack focado em todo o caminho, do schema do banco até o pixel. Desenho arquiteturas multi-tenant, orquestro agentes de IA e levo sistemas até o Kubernetes — não apenas até a demo.',
    primaryCta: 'Ver projetos selecionados',
    secondaryCta: 'Entrar em contato',
    resumeCta: 'Currículo',
    stats: {
      platforms: 'Plataformas em produção',
      modules: 'Módulos de domínio entregues',
      monorepos: 'Monorepos mantidos',
      years: 'Anos construindo SaaS',
    },
  },

  about: {
    eyebrow: 'Sobre',
    title: 'Engenharia que sobrevive ao contato com a produção',
    lead: 'Sou Engenheiro Full Stack e prefiro profundidade a uma lista de tecnologias marcada por checkbox. A maior parte do meu trabalho é engenharia de produto ponta a ponta: sou responsável pelo schema no Prisma, pelos módulos de domínio no NestJS, pela interface em React, pelos workers de fila e pelo Helm chart que coloca tudo isso em um cluster.',
    paragraphs: [
      'Meu foco é SaaS multi-tenant. Já projetei isolamento schema-por-tenant no PostgreSQL, temas white-label, controle de acesso por papéis e pipelines de jobs em background que mantêm o caminho da requisição rápido — o tipo de decisão que é barata no primeiro dia e caríssima de refazer no dia quatrocentos.',
      'Também construo sistemas de IA feitos para rodar sem supervisão: orquestração de agentes com o OpenAI Agents SDK e Claude, recuperação sobre bases de conhecimento de domínio, guardrails e observabilidade completa com OpenTelemetry, Prometheus e Sentry — para que falhas sejam visíveis em vez de misteriosas.',
      'O que mais me importa é a parte chata que viabiliza a parte interessante: contratos tipados entre serviços, quality gates independentes no CI, regras de lint específicas para as convenções do time e documentação que um novo engenheiro consegue realmente seguir.',
    ],
    principlesTitle: 'Como eu trabalho',
    principles: [
      {
        title: 'Tipos como contrato',
        body: 'Pacotes compartilhados e schemas Zod para que uma quebra apareça no CI, não em produção.',
      },
      {
        title: 'Isolamento por padrão',
        body: 'Fronteiras de tenant, credenciais com escopo e menor privilégio desenhados desde a primeira migration.',
      },
      {
        title: 'Observável ou incompleto',
        body: 'Traces, métricas e reporte de erro entram junto com a feature — nunca como ticket futuro.',
      },
      {
        title: 'Verificado de fora',
        body: 'Um quality gate separado valida regras de negócio e contratos de API sem conhecer a implementação.',
      },
    ],
    locationLabel: 'Localizado em',
    timezoneLabel: 'Fuso horário',
    focusLabel: 'Foco atual',
    focusValue: 'SaaS multi-tenant + agentes de IA',
  },

  projects: {
    eyebrow: 'Projetos selecionados',
    title: 'Plataformas, não protótipos',
    subtitle:
      'Cada projeto abaixo é um sistema real, com banco de dados, pipeline de deploy e usuários. Expanda um card para ler o problema resolvido e a engenharia por trás dele.',
    filters: {
      all: 'Todos',
      flagship: 'Principais',
      feature: 'Produtos',
      sidecar: 'Builds focados',
    },
    labels: {
      problem: 'Problema',
      solution: 'Solução',
      impact: 'Impacto técnico',
      stack: 'Tecnologias',
      viewRepo: 'Ver repositório',
      privateRepo: 'Repositório privado',
      liveDemo: 'Ao vivo',
      expand: 'Ler o case completo',
      collapse: 'Recolher',
    },
    metrics: {
      modules: 'módulos de domínio',
      portals: 'portais, uma API',
      deploy: 'deploy',
      apps: 'apps no monorepo',
      isolation: 'isolamento de dados',
      calendars: 'integrações de agenda',
      observability: 'observabilidade',
      services: 'serviços',
      billing: 'cobrança',
      surfaces: 'interfaces de cliente',
      payouts: 'repasses',
      uploads: 'uploads',
      layers: 'camadas de teste',
      gate: 'comportamento no CI',
      context: 'por design',
      reuse: 'iniciados a partir dele',
      baseline: 'baseline incluída',
      compliance: 'páginas legais',
      lighthouse: 'entrega',
    },
    items: {
      aldea: {
        tagline: 'Plataforma de portal duplo para gestão de ativos imobiliários',
        problem:
          'Uma gestora de ativos imobiliários conduzia o relacionamento com investidores em planilhas e threads de e-mail: estoque de unidades, propostas comerciais e relatórios de portfólio viviam em arquivos que ninguém conseguia reconciliar. Os investidores não tinham como enxergar a própria posição, e decisões de preço dependiam de quem por acaso conhecia a planilha.',
        solution:
          'Projetei uma única API NestJS + Fastify servindo dois portais React distintos — um back office administrativo e um portal do investidor — compartilhando um schema Prisma e um pacote tipado do workspace. Dezenove módulos de domínio cobrem empreendimentos, blocos, tipologias, unidades, investidores, propostas, trilha de auditoria e relatórios. Um motor de precificação com parâmetros configuráveis produz avaliações, e um módulo com Claude adiciona sugestões de preço por localização assistidas por IA. Workers em BullMQ cuidam de importação de planilhas, e-mail transacional com templates e logs, e propostas em PDF renderizadas com Playwright.',
        impact:
          'O acesso é segmentado por papel com JWT (access + refresh) e hashing Argon2, então um investidor nunca consegue resolver nada além do próprio portfólio. Trabalho pesado — importações, geração de PDF, e-mail — roda fora do caminho da requisição em filas sobre Redis, mantendo a API responsiva. Todo o stack sobe em containers para o AWS EKS via ECR e um release Helm orquestrado por GitHub Actions, com health probes e deploy por componente, permitindo publicar API e web de forma independente.',
      },
      'apex-crm': {
        tagline: 'CRM multi-tenant white-label com automação por IA',
        problem:
          'Atender várias empresas clientes com uma única base de CRM cria um problema difícil: os dados nunca podem se tocar, a marca precisa parecer nativa e cada processo comercial é diferente. Um design de tabela compartilhada com uma coluna `tenant_id` deixaria toda query a um `WHERE` esquecido de distância de um vazamento de dados.',
        solution:
          'Implementei isolamento schema-por-tenant no PostgreSQL: cada tenant recebe seu próprio schema, com um schema público para o registro de tenants e usuários da plataforma, além de ferramentas de migration que se propagam por todos os schemas. O sistema é um monorepo Turborepo com quatro aplicações — uma API NestJS, um cliente web em React 19, uma suíte de testes de carga e um servidor MCP que expõe o CRM a assistentes de IA. Trinta e três módulos de domínio cobrem pipelines, leads e origens, um construtor de formulários com drag-and-drop, scoring de leads, quadros de tarefas, metas, atendimento, telefonia via api4com, ingestão de Meta Ads, webhooks e um construtor visual de automações em React Flow. Um módulo de agente de IA sobre LangChain e OpenAI atua na camada de conversas, com Socket.IO entregando atualizações em tempo real.',
        impact:
          'Vazamento entre tenants é estruturalmente impossível em vez de depender de convenção — a conexão resolve o schema antes de qualquer query rodar. TanStack Query, Table e Virtual mantêm pipelines grandes fluidos no navegador, e o Zustand guarda apenas estado realmente global. Adicionei duas regras de lint próprias com arquivos de baseline para garantir convenções que o compilador não vê, e um repositório separado de Quality Gate valida contratos de forma independente no CI. O deploy é via Helm, com valores distintos para dev e produção.',
      },
      automed: {
        tagline: 'Agentes de IA no WhatsApp para recuperação de vendas e anamnese',
        problem:
          'Clínicas perdem uma fatia relevante de receita em dois vazamentos silenciosos: interessados que perguntam o preço e desaparecem, e pacientes cujos questionários de anamnese nunca são preenchidos. Ambos os problemas são conversacionais, acontecem no WhatsApp e são impossíveis de cobrir com equipe 24 horas por dia.',
        solution:
          'Construí uma plataforma de agentes sobre o OpenAI Agents SDK com estrutura router-planner-executor, conectada à WhatsApp Cloud API via embedded signup da Meta, para que cada clínica faça onboarding do próprio número. Um módulo de base de conhecimento ancora as respostas nos procedimentos, profissionais e convênios reais da clínica, em vez de deixar o modelo improvisar. Um fluxo de assistente de saúde conduz a anamnese a partir de templates reutilizáveis, com controle de consumo por tenant. A parte genuinamente difícil era a agenda: escrevi uma abstração de provedor de calendário com cinco implementações concretas — Google Calendar, Feegow, ProDoctor, EasyDental e ClinUp — para que o agente ofereça disponibilidade real, independente do software que a clínica já usa.',
        impact:
          'O tratamento das conversas é dividido entre uma API web e processos worker dedicados em BullMQ, então uma chamada lenta ao modelo ou um fornecedor com rate limit nunca bloqueia a ingestão de mensagens. Consumo de tokens e custo são medidos por sessão, o que transforma a economia unitária em um número mensurável em vez de uma fatura-surpresa. A observabilidade vem junto: auto-instrumentação OpenTelemetry, exportador OTLP de traces, endpoint de métricas Prometheus e profiling do Sentry — inclusive no processo worker, que é exatamente onde falhas não diagnosticadas costumam se esconder.',
      },
      flowmail: {
        tagline: 'E-mail marketing assistido por IA construído como app Shopify',
        problem:
          'Pequenas lojas de e-commerce precisam de e-mail de ciclo de vida, mas não conseguem manter um time de marketing. As ferramentas existentes assumem que alguém vai escrever o texto, montar as segmentações e ler os relatórios — exatamente o trabalho que essas lojas não têm quem faça.',
        solution:
          'Construí uma plataforma NestJS que se instala como app Shopify, puxa os dados da loja através de uma abstração de provedor e usa OpenAI Agents com Guardrails para redigir campanhas a partir do catálogo e dos clientes reais. Vinte e um módulos cobrem threads e mensagens, templates, formulários, tags, planos, alertas e um dashboard. A cobrança passa por Shopify Billing e Stripe, para que o mesmo produto seja vendido dentro do ecossistema Shopify ou diretamente. Junto dele entreguei uma API e um portal de afiliados separados, além de um app autônomo de formulário público com i18next para captura de leads embarcada.',
        impact:
          'Guardrails envolvem cada mensagem gerada, então o agente não pode emitir conteúdo que viole a política de campanha — um requisito, não um detalhe, quando você envia em nome de um lojista. O envio roda integralmente sobre BullMQ com Redis, e é isso que torna throttling, retentativas e campanhas agendadas viáveis. A divisão em cinco serviços mantém o domínio de falha do programa de afiliados separado do caminho crítico de envio.',
      },
      chatfy: {
        tagline: 'Plataforma de afiliados e parceiros com repasses automatizados',
        problem:
          'Crescer um SaaS por parceiros significa rastrear quem indicou quem, calcular comissão corretamente e pagar em dia — dando aos afiliados visibilidade self-service suficiente para que não abram um e-mail no suporte a cada dúvida.',
        solution:
          'Construí uma API NestJS + TypeORM com três interfaces de cliente distintas: uma landing pública com fluxo de cadastro, um dashboard do afiliado para acompanhar indicações e comissões, e um console administrativo para aprovações, gestão de níveis e rodadas de pagamento. O Stripe cuida dos repasses, URLs pré-assinadas do S3 cuidam do upload de documentos sem passar arquivos pela API, e a validação de CPF/CNPJ acontece na fronteira dos DTOs.',
        impact:
          'Separar afiliado e administração em aplicações front-end distintas garante que um bug administrativo não exponha superfície administrativa aos parceiros. A instrumentação com Sentry e uma camada de jobs agendados mantêm o cálculo de comissão auditável, e a validação na fronteira impede que dados de cadastro malformados entrem no banco.',
      },
      'quality-gate': {
        tagline: 'Um verificador de CI independente que não confia na implementação',
        problem:
          'Quando o mesmo contexto escreve a feature e os testes dela, os testes herdam as suposições do autor. O desenvolvimento assistido por IA agrava isso: um agente com todo o contexto da aplicação escreve com prazer um teste que passa pelo motivo errado.',
        solution:
          'Construí um repositório deliberadamente separado que verifica o Apex CRM de fora, sem acesso ao contexto de implementação. Ele tem três camadas — smoke checks, testes de comportamento da API e testes de contrato com Zod — junto de documentação escrita de regras de negócio, contratos, fluxos críticos e uma matriz de rastreabilidade. Fixtures de ambiente permitem rodar a mesma suíte contra alvos local, dev e produção.',
        impact:
          'Roda como gate bloqueante no GitHub Actions, então uma mudança de contrato não pode ser mergeada em silêncio. Como conhece apenas a superfície pública da API, ele captura a classe de bug em que implementação e testes estão consistentemente errados juntos. A documentação de regras de negócio serve também como especificação da qual humanos e agentes partem.',
      },
      'template-api': {
        tagline: 'A base de serviço da qual toda nova API começa',
        problem:
          'Cada novo serviço NestJS repetia os mesmos dois dias de setup: auth, Swagger, rate limiting, reporte de erro, conexão com banco, scripts de migration, Docker. Repetidos à mão, esses dois dias também significam que o quinto serviço silenciosamente divergiu do primeiro.',
        solution:
          'Extraí um template NestJS 11 + Fastify 5 pronto para produção, com data-source e geração de migrations em TypeORM, auth JWT, Swagger, throttling, Sentry com profiling, logging estruturado, suporte a e-mail e setup Docker — tudo configurado, não apenas instalado.',
        impact:
          'Quatro serviços em produção nasceram dele, o que significa que compartilham a mesma observabilidade, a mesma semântica de auth e o mesmo fluxo de migrations. Atualizar uma preocupação transversal passa a ser uma mudança revisada e propagada, em vez de quatro exercícios independentes de arqueologia.',
      },
      iacougue: {
        tagline: 'Landing page e superfície de compliance para um produto de IA no WhatsApp',
        problem:
          'A Meta não aprova uma aplicação WhatsApp Business sem páginas de privacidade e termos publicamente acessíveis e corretas — e errar nisso bloqueia o lançamento do produto inteiro, não apenas o site de marketing.',
        solution:
          'Construí um site em Next.js 14 App Router onde a página de marketing, a política de privacidade e os termos de uso leem de um único módulo de configuração tipado, de forma que dados da empresa, contato do DPO e número de suporte sejam definidos uma única vez. O site é containerizado com build Docker e manifests Kubernetes, publicado por GitHub Actions.',
        impact:
          'Centralizar os dados legais em um arquivo tipado elimina o modo de falha em que a página de política e a de termos discordam sobre os próprios dados da empresa. A entrega estática mantém as URLs de compliance que a Meta revisa rápidas e disponíveis, independentemente de qualquer backend.',
      },
    },
  },

  stack: {
    eyebrow: 'Stack técnica',
    title: 'Ferramentas que eu escolho, e por quê',
    subtitle:
      'Passe o mouse ou toque em uma categoria para explorar. A proficiência reflete o que eu realmente entreguei e operei em produção, não o que eu li sobre.',
    levelLabel: 'Proficiência',
    categories: {
      backend: {
        title: 'Backend',
        blurb: 'APIs modulares com fronteiras tipadas e trabalho em background sobre filas.',
      },
      frontend: {
        title: 'Frontend',
        blurb: 'Interfaces rápidas e acessíveis, com disciplina real de gerenciamento de estado.',
      },
      data: {
        title: 'Dados',
        blurb: 'Modelagem relacional, migrations e isolamento de tenant feitos do jeito certo.',
      },
      ai: {
        title: 'Engenharia de IA',
        blurb: 'Agentes, retrieval e guardrails construídos para rodar sem supervisão.',
      },
      infra: {
        title: 'Infraestrutura',
        blurb: 'Containers, clusters e pipelines que tornam o deploy um evento sem graça.',
      },
      quality: {
        title: 'Qualidade & Observabilidade',
        blurb: 'Contratos, gates independentes e traces que se explicam sozinhos.',
      },
    },
  },

  experience: {
    eyebrow: 'Experiência',
    title: 'Trajetória profissional',
    subtitle: 'Papéis e projetos, do mais recente ao mais antigo.',
    currentBadge: 'Atual',
    items: {
      'automy-lead': {
        role: 'Engenheiro Full Stack & Líder Técnico',
        summary:
          'Responsabilidade técnica pelo portfólio de produtos da Automy: decisões de arquitetura, a base de serviço compartilhada e a entrega do schema ao cluster em seis plataformas de produção.',
        highlights: [
          'Definiu o padrão de arquitetura usado em todos os serviços — NestJS + Fastify, pacotes compartilhados tipados, BullMQ para tudo que é lento.',
          'Levou produtos de ponta a ponta: schemas Prisma/TypeORM, módulos de domínio, front ends em React, Helm charts e pipelines no GitHub Actions.',
          'Introduziu quality gating independente e regras de lint próprias, para que convenções sejam garantidas pelo CI e não pela memória do code review.',
          'Construiu a camada de IA dos produtos: OpenAI Agents SDK, Claude, LangChain, retrieval e guardrails, com custo medido por sessão.',
        ],
      },
      'platform-multitenant': {
        role: 'Arquitetura de Plataforma — SaaS Multi-tenant',
        summary:
          'Projetou e entregou duas plataformas multi-tenant: um CRM white-label e um sistema de portal duplo para investidores imobiliários.',
        highlights: [
          'Implementou isolamento schema-por-tenant no PostgreSQL, com ferramentas de migration que se propagam por todos os schemas.',
          'Construiu um monorepo Turborepo abrigando quatro aplicações sobre pacotes compartilhados de TypeScript, ESLint e config.',
          'Publicou no AWS EKS via ECR e Helm, com releases por componente, health probes e valores separados para dev e produção.',
        ],
      },
      'ai-agents': {
        role: 'Engenharia de Sistemas de IA',
        summary:
          'Construiu plataformas de agentes conversacionais para anamnese clínica e marketing de ciclo de vida em e-commerce, rodando sem supervisão no WhatsApp e no e-mail.',
        highlights: [
          'Desenhou uma arquitetura de agente router-planner-executor, com retrieval ancorado em bases de conhecimento de domínio por tenant.',
          'Abstraiu cinco sistemas de agenda de terceiros atrás de uma única interface de provedor, para que os agentes oferecessem disponibilidade real.',
          'Instrumentou tudo com OpenTelemetry, Prometheus e Sentry — incluindo os processos worker, onde as falhas se escondem.',
        ],
      },
      'saas-foundations': {
        role: 'Engenharia de Produto Full Stack',
        summary:
          'Entregou plataformas de afiliados/parceiros, integrações de cobrança e superfícies públicas de produto do zero à produção.',
        highlights: [
          'Entregou uma plataforma de afiliados com três interfaces, repasses via Stripe e upload de documentos com URLs pré-assinadas do S3.',
          'Integrou Shopify Billing e Stripe, para que o mesmo produto pudesse ser vendido dentro do ecossistema ou diretamente.',
          'Construiu sites de marketing e compliance em Next.js aprovados na revisão da Meta para WhatsApp Business.',
        ],
      },
    },
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo que dure',
    subtitle:
      'Aberto a vagas full stack, trabalhos de arquitetura de plataforma e projetos de engenharia de IA. Me conte o que você está construindo e eu digo com honestidade se sou a pessoa certa.',
    form: {
      name: 'Nome',
      namePlaceholder: 'Seu nome',
      email: 'E-mail',
      emailPlaceholder: 'voce@empresa.com',
      subject: 'Assunto',
      subjectPlaceholder: 'Sobre o que é?',
      message: 'Mensagem',
      messagePlaceholder: 'Algumas linhas sobre seu projeto, time ou vaga…',
      submit: 'Enviar mensagem',
      sending: 'Abrindo seu cliente de e-mail…',
      note: 'O envio abre seu cliente de e-mail com a mensagem já preenchida — sem serviço de formulário externo, sem dados armazenados.',
      errors: {
        nameRequired: 'Por favor, me diga seu nome.',
        emailRequired: 'Um endereço de e-mail é obrigatório.',
        emailInvalid: 'Esse endereço de e-mail não parece válido.',
        messageRequired: 'Por favor, escreva uma mensagem curta.',
        messageShort: 'Um pouco mais de detalhe ajudaria — pelo menos 20 caracteres.',
      },
    },
    direct: {
      title: 'Ou fale comigo direto',
      emailLabel: 'E-mail',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      orgLabel: 'Automy',
      copy: 'Copiar',
      copied: 'Copiado',
    },
    availability: {
      title: 'Disponibilidade',
      body: 'Atualmente aceitando novos projetos. O tempo típico de resposta é menos de 24 horas em dias úteis.',
    },
  },

  footer: {
    tagline: 'Engenheiro Full Stack — SaaS multi-tenant, agentes de IA, infraestrutura de produção.',
    builtWith: 'Construído com Next.js, Tailwind CSS e Framer Motion.',
    rights: 'Todos os direitos reservados.',
    backToTop: 'Voltar ao topo',
    sections: 'Seções',
    elsewhere: 'Em outros lugares',
  },
}
