import type { Dictionary } from '../types'

export const ptBR: Dictionary = {
  meta: {
    title: 'Carlos Nóbrega — Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack trabalhando em plataformas SaaS multi-tenant e recursos de IA com NestJS, React e PostgreSQL. Estudante de Engenharia de Telecomunicações na UFC.',
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
    availability: 'Aberto a vagas júnior de full stack',
    greeting: 'Olá, eu sou o Carlos',
    headlinePrefix: 'Eu trabalho com',
    rotating: [
      'plataformas SaaS multi-tenant',
      'agentes de IA rodando em produção',
      'APIs que aguentam tráfego real',
      'interfaces que as pessoas usam de verdade',
    ],
    subheadline:
      'Desenvolvedor Full Stack júnior na Automy e estudante de Engenharia de Telecomunicações na UFC. Trabalho em toda a stack — módulos NestJS, schemas Prisma, telas em React, workers de fila — em produtos dos quais empresas reais dependem todos os dias.',
    primaryCta: 'Ver o que eu construí',
    secondaryCta: 'Entrar em contato',
    resumeCta: 'Currículo',
    stats: {
      platforms: 'Plataformas em que atuei',
      modules: 'Módulos de domínio nelas',
      monorepos: 'Monorepos em que trabalhei',
      years: 'Anos escrevendo código',
    },
  },

  about: {
    eyebrow: 'Sobre',
    title: 'Três anos de estrada, aprendendo em sistemas que estão de fato em uso',
    lead: 'Sou desenvolvedor full stack júnior. O que eu tenho a meu favor não é senioridade — é que aprendi em sistemas reais de produção em vez de tutoriais: CRMs multi-tenant, agentes de IA atendendo clientes no WhatsApp, portais que empresas abrem toda manhã.',
    paragraphs: [
      'No dia a dia isso significa trabalhar na stack inteira. Uma feature costuma começar como um model no Prisma ou TypeORM, virar um módulo NestJS, ganhar uma tela em React e terminar com um worker BullMQ cuidando da parte lenta demais para o caminho da requisição. Já entreguei nas quatro camadas.',
      'A coisa mais útil que aprendi foi entender por que a arquitetura ao meu redor é do jeito que é. Trabalhar dentro de um setup schema-por-tenant no PostgreSQL me ensinou mais sobre isolamento de dados do que qualquer artigo — a ficha cai na primeira vez que você acompanha uma query e vê o schema ser resolvido antes de qualquer coisa rodar.',
      'Também passei bastante tempo no lado de IA: conectando o OpenAI Agents SDK e o Claude a serviços existentes, ancorando respostas em bases de conhecimento por tenant para o modelo parar de improvisar, e adicionando instrumentação com OpenTelemetry e Sentry para que, quando algo quebra às 2h da manhã, exista um trace para ler.',
      'Ainda estou no começo, e prefiro dizer isso com todas as letras a inflar o currículo. Faço muita pergunta, leio o código ao redor do meu antes de mexer, e tento deixar as coisas mais claras do que encontrei.',
    ],
    principlesTitle: 'Como eu trabalho',
    principles: [
      {
        title: 'Ler antes de escrever',
        body: 'Sigo as convenções que já existem no código em vez de inventar as minhas no cantinho onde estou mexendo.',
      },
      {
        title: 'Deixar o tipo pegar',
        body: 'Pacotes compartilhados e schemas Zod, para que um erro meu falhe no CI e não na frente de um usuário.',
      },
      {
        title: 'Entregar observável',
        body: 'Uma feature não está pronta enquanto eu não consigo ver ela funcionando — logs, traces e reporte de erro entram junto com o código.',
      },
      {
        title: 'Perguntar cedo',
        body: 'Uma pergunta de cinco minutos vale mais que um dia construindo a coisa errada com muita confiança.',
      },
    ],
    locationLabel: 'Localizado em',
    timezoneLabel: 'Fuso horário',
    focusLabel: 'Atualmente',
    focusValue: 'Dev full stack @ Automy · Estudante de Eng. @ UFC',
  },

  education: {
    eyebrow: 'Formação',
    title: 'Estudando em paralelo ao trabalho',
    ongoingBadge: 'Em andamento',
    items: {
      'ufc-telecom': {
        degree: 'Bacharelado em Engenharia de Telecomunicações',
        institution: 'Universidade Federal do Ceará',
        note: 'Processamento de sinais, redes e matemática — uma base que se mostrou inesperadamente útil para raciocinar sobre filas, throughput e falha sob carga.',
      },
    },
  },

  projects: {
    eyebrow: 'Projetos',
    title: 'Sistemas reais, não protótipos',
    subtitle:
      'Todo projeto abaixo está em produção, com banco de dados, pipeline de deploy e usuários. Abra um deles para ver como é a interface e o que eu fiz nele.',
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
      viewProject: 'Ver projeto',
      backToProjects: 'Voltar para todos os projetos',
      preview: 'Prévia da interface',
      previewNote:
        'Uma reconstrução da interface do produto, refeita aqui em markup — sem screenshots. Os sistemas reais são softwares privados de clientes, então toda empresa, pessoa e valor exibido é fictício; o que espelha o produto real é o layout, a terminologia e a estrutura da tela.',
      overview: 'Visão geral',
      myRole: 'O que eu fiz',
      highlights: 'Destaques',
      nextProject: 'Próximo projeto',
      allProjects: 'Todos os projetos',
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
        contribution:
          'Construí módulos de domínio no lado da API e telas nos dois portais — unidades e tipologias, fluxos de proposta, importação de planilhas. A maior parte do meu tempo foi nos workers BullMQ por trás dos caminhos lentos: a importação de Excel, as propostas em PDF renderizadas com Playwright e o e-mail transacional com templates.',
        problem:
          'Uma gestora de ativos imobiliários conduzia o relacionamento com investidores em planilhas e threads de e-mail: estoque de unidades, propostas comerciais e relatórios de portfólio viviam em arquivos que ninguém conseguia reconciliar. Os investidores não tinham como enxergar a própria posição, e decisões de preço dependiam de quem por acaso conhecia a planilha.',
        solution:
          'A plataforma é uma única API NestJS + Fastify servindo dois portais React distintos — um back office administrativo e um portal do investidor — compartilhando um schema Prisma e um pacote tipado do workspace. Dezenove módulos de domínio cobrem empreendimentos, blocos, tipologias, unidades, investidores, propostas, trilha de auditoria e relatórios. Um motor de precificação com parâmetros configuráveis produz avaliações, e um módulo com Claude adiciona sugestões de preço por localização assistidas por IA. Workers em BullMQ cuidam de importação de planilhas, e-mail transacional com templates e logs, e propostas em PDF renderizadas com Playwright.',
        impact:
          'O acesso é segmentado por papel com JWT (access + refresh) e hashing Argon2, então um investidor nunca consegue resolver nada além do próprio portfólio. Trabalho pesado — importações, geração de PDF, e-mail — roda fora do caminho da requisição em filas sobre Redis, mantendo a API responsiva. Todo o stack sobe em containers para o AWS EKS via ECR e um release Helm orquestrado por GitHub Actions, com health probes e deploy por componente, permitindo publicar API e web de forma independente.',
      },
      'apex-crm': {
        tagline: 'CRM multi-tenant white-label com automação por IA',
        contribution:
          'Trabalhei em módulos de domínio e no cliente React: telas de pipeline e leads, o construtor de formulários, quadros de tarefas. Me acostumar com o setup schema-por-tenant foi a parte mais íngreme — toda query resolve um schema de tenant antes de tudo, e isso muda o jeito de escrever qualquer coisa.',
        problem:
          'Atender várias empresas clientes com uma única base de CRM cria um problema difícil: os dados nunca podem se tocar, a marca precisa parecer nativa e cada processo comercial é diferente. Um design de tabela compartilhada com uma coluna `tenant_id` deixaria toda query a um `WHERE` esquecido de distância de um vazamento de dados.',
        solution:
          'O sistema usa isolamento schema-por-tenant no PostgreSQL: cada tenant recebe seu próprio schema, com um schema público para o registro de tenants e usuários da plataforma, além de ferramentas de migration que se propagam por todos os schemas. O sistema é um monorepo Turborepo com quatro aplicações — uma API NestJS, um cliente web em React 19, uma suíte de testes de carga e um servidor MCP que expõe o CRM a assistentes de IA. Trinta e três módulos de domínio cobrem pipelines, leads e origens, um construtor de formulários com drag-and-drop, scoring de leads, quadros de tarefas, metas, atendimento, telefonia via api4com, ingestão de Meta Ads, webhooks e um construtor visual de automações em React Flow. Um módulo de agente de IA sobre LangChain e OpenAI atua na camada de conversas, com Socket.IO entregando atualizações em tempo real.',
        impact:
          'Vazamento entre tenants é estruturalmente impossível em vez de depender de convenção — a conexão resolve o schema antes de qualquer query rodar. TanStack Query, Table e Virtual mantêm pipelines grandes fluidos no navegador, e o Zustand guarda apenas estado realmente global. Duas regras de lint próprias com arquivos de baseline garantem convenções que o compilador não vê, e um repositório separado de Quality Gate valida contratos de forma independente no CI. O deploy é via Helm, com valores distintos para dev e produção.',
      },
      automed: {
        tagline: 'Agentes de IA no WhatsApp para recuperação de vendas e anamnese',
        contribution:
          'Implementei várias das integrações de provedores de agenda atrás da interface compartilhada, e trabalhei na ancoragem por base de conhecimento para o agente responder a partir dos procedimentos reais da clínica. Também adicionei a instrumentação de OpenTelemetry e Sentry no processo worker.',
        problem:
          'Clínicas perdem uma fatia relevante de receita em dois vazamentos silenciosos: interessados que perguntam o preço e desaparecem, e pacientes cujos questionários de anamnese nunca são preenchidos. Ambos os problemas são conversacionais, acontecem no WhatsApp e são impossíveis de cobrir com equipe 24 horas por dia.',
        solution:
          'A plataforma roda sobre o OpenAI Agents SDK com estrutura router-planner-executor, conectada à WhatsApp Cloud API via embedded signup da Meta, para que cada clínica faça onboarding do próprio número. Um módulo de base de conhecimento ancora as respostas nos procedimentos, profissionais e convênios reais da clínica, em vez de deixar o modelo improvisar. Um fluxo de assistente de saúde conduz a anamnese a partir de templates reutilizáveis, com controle de consumo por tenant. A parte genuinamente difícil era a agenda, resolvida com uma abstração de provedor de calendário e cinco implementações concretas — Google Calendar, Feegow, ProDoctor, EasyDental e ClinUp — para que o agente ofereça disponibilidade real, independente do software que a clínica já usa.',
        impact:
          'O tratamento das conversas é dividido entre uma API web e processos worker dedicados em BullMQ, então uma chamada lenta ao modelo ou um fornecedor com rate limit nunca bloqueia a ingestão de mensagens. Consumo de tokens e custo são medidos por sessão, o que transforma a economia unitária em um número mensurável em vez de uma fatura-surpresa. A observabilidade vem junto: auto-instrumentação OpenTelemetry, exportador OTLP de traces, endpoint de métricas Prometheus e profiling do Sentry — inclusive no processo worker, que é exatamente onde falhas não diagnosticadas costumam se esconder.',
      },
      flowmail: {
        tagline: 'E-mail marketing assistido por IA construído como app Shopify',
        contribution:
          'Trabalhei nas telas de campanha e templates, nos módulos de tags e formulários, e na integração com o Shopify Billing. A camada de guardrails em volta do conteúdo gerado foi a parte com que mais aprendi — enviar em nome de um lojista não deixa margem para o modelo sair do script.',
        problem:
          'Pequenas lojas de e-commerce precisam de e-mail de ciclo de vida, mas não conseguem manter um time de marketing. As ferramentas existentes assumem que alguém vai escrever o texto, montar as segmentações e ler os relatórios — exatamente o trabalho que essas lojas não têm quem faça.',
        solution:
          'É uma plataforma NestJS que se instala como app Shopify, puxa os dados da loja através de uma abstração de provedor e usa OpenAI Agents com Guardrails para redigir campanhas a partir do catálogo e dos clientes reais. Vinte e um módulos cobrem threads e mensagens, templates, formulários, tags, planos, alertas e um dashboard. A cobrança passa por Shopify Billing e Stripe, para que o mesmo produto seja vendido dentro do ecossistema Shopify ou diretamente. Ao lado dele ficam uma API e um portal de afiliados separados, além de um app autônomo de formulário público com i18next para captura de leads embarcada.',
        impact:
          'Guardrails envolvem cada mensagem gerada, então o agente não pode emitir conteúdo que viole a política de campanha — um requisito, não um detalhe, quando você envia em nome de um lojista. O envio roda integralmente sobre BullMQ com Redis, e é isso que torna throttling, retentativas e campanhas agendadas viáveis. A divisão em cinco serviços mantém o domínio de falha do programa de afiliados separado do caminho crítico de envio.',
      },
      chatfy: {
        tagline: 'Plataforma de afiliados e parceiros com repasses automatizados',
        contribution:
          'Construí telas nos front ends de afiliado e de administração e os endpoints da API por trás delas: rastreio de indicações, visões de comissão, rodadas de pagamento via Stripe e uploads pré-assinados no S3, para que arquivos nunca passem pela API.',
        problem:
          'Crescer um SaaS por parceiros significa rastrear quem indicou quem, calcular comissão corretamente e pagar em dia — dando aos afiliados visibilidade self-service suficiente para que não abram um e-mail no suporte a cada dúvida.',
        solution:
          'Uma API NestJS + TypeORM sustenta três interfaces de cliente distintas: uma landing pública com fluxo de cadastro, um dashboard do afiliado para acompanhar indicações e comissões, e um console administrativo para aprovações, gestão de níveis e rodadas de pagamento. O Stripe cuida dos repasses, URLs pré-assinadas do S3 cuidam do upload de documentos sem passar arquivos pela API, e a validação de CPF/CNPJ acontece na fronteira dos DTOs.',
        impact:
          'Separar afiliado e administração em aplicações front-end distintas garante que um bug administrativo não exponha superfície administrativa aos parceiros. A instrumentação com Sentry e uma camada de jobs agendados mantêm o cálculo de comissão auditável, e a validação na fronteira impede que dados de cadastro malformados entrem no banco.',
      },
      'quality-gate': {
        tagline: 'Um verificador de CI independente que não confia na implementação',
        contribution:
          'Escrevi testes de contrato e de API e ajudei a documentar as regras de negócio que eles verificam. A ideia de um verificador que deliberadamente não conhece a implementação era nova para mim, e mudou como eu penso sobre o que um teste realmente prova.',
        problem:
          'Quando o mesmo contexto escreve a feature e os testes dela, os testes herdam as suposições do autor. O desenvolvimento assistido por IA agrava isso: um agente com todo o contexto da aplicação escreve com prazer um teste que passa pelo motivo errado.',
        solution:
          'É um repositório deliberadamente separado que verifica o Apex CRM de fora, sem acesso ao contexto de implementação. Ele tem três camadas — smoke checks, testes de comportamento da API e testes de contrato com Zod — junto de documentação escrita de regras de negócio, contratos, fluxos críticos e uma matriz de rastreabilidade. Fixtures de ambiente permitem rodar a mesma suíte contra alvos local, dev e produção.',
        impact:
          'Roda como gate bloqueante no GitHub Actions, então uma mudança de contrato não pode ser mergeada em silêncio. Como conhece apenas a superfície pública da API, ele captura a classe de bug em que implementação e testes estão consistentemente errados juntos. A documentação de regras de negócio serve também como especificação da qual humanos e agentes partem.',
      },
      'template-api': {
        tagline: 'A base de serviço da qual toda nova API começa',
        contribution:
          'Trabalhei na base compartilhada e a usei para iniciar novos serviços — que foi também como aprendi o que um serviço de produção precisa antes da primeira feature: auth, rate limiting, logs estruturados, reporte de erro e um fluxo de migrations.',
        problem:
          'Cada novo serviço NestJS repetia os mesmos dois dias de setup: auth, Swagger, rate limiting, reporte de erro, conexão com banco, scripts de migration, Docker. Repetidos à mão, esses dois dias também significam que o quinto serviço silenciosamente divergiu do primeiro.',
        solution:
          'A resposta foi um template NestJS 11 + Fastify 5 pronto para produção, com data-source e geração de migrations em TypeORM, auth JWT, Swagger, throttling, Sentry com profiling, logging estruturado, suporte a e-mail e setup Docker — tudo configurado, não apenas instalado.',
        impact:
          'Quatro serviços em produção nasceram dele, o que significa que compartilham a mesma observabilidade, a mesma semântica de auth e o mesmo fluxo de migrations. Atualizar uma preocupação transversal passa a ser uma mudança revisada e propagada, em vez de quatro exercícios independentes de arqueologia.',
      },
      iacougue: {
        tagline: 'Landing page e superfície de compliance para um produto de IA no WhatsApp',
        contribution:
          'Esse eu fiz do começo ao fim: a landing page, a política de privacidade, os termos de uso e o módulo de configuração tipado do qual os três leem. Foi para Docker e Kubernetes via GitHub Actions.',
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
    title: 'Com o que eu trabalho',
    subtitle:
      'Passe o mouse ou toque em uma categoria para explorar. Os níveis são uma autoavaliação honesta: alto significa que já entreguei e depurei aquilo em produção; mais baixo significa que consigo trabalhar, mas ainda consulto documentação.',
    levelLabel: 'Nível de domínio',
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
    title: 'No que eu já trabalhei',
    subtitle: 'Do mais recente ao mais antigo.',
    currentBadge: 'Atual',
    items: {
      'automy-dev': {
        role: 'Desenvolvedor Full Stack',
        summary:
          'Desenvolvimento de features nos produtos da Automy — módulos de API, models de banco, telas em React e workers de fila — em bases de código que já estavam no ar quando entrei.',
        highlights: [
          'Construí features ponta a ponta dentro das convenções existentes: models Prisma e TypeORM, módulos NestJS, telas em React e as migrations por trás delas.',
          'Tirei trabalho lento do caminho da requisição com workers BullMQ — importação de planilhas, geração de PDF e e-mail transacional.',
          'Trabalhei nas features de IA: conectando o OpenAI Agents SDK e o Claude a serviços existentes e ancorando respostas em bases de conhecimento por tenant.',
          'Aprendi o caminho de deploy bem o suficiente para depurar os meus: imagens Docker, valores de Helm e execuções do GitHub Actions.',
        ],
      },
      'platform-work': {
        role: 'Desenvolvimento Full Stack — Plataformas Multi-tenant',
        summary:
          'Contribuí em dois produtos multi-tenant: um CRM white-label e um sistema de portal duplo para investidores imobiliários.',
        highlights: [
          'Implementei módulos de domínio sobre um setup schema-por-tenant no PostgreSQL, e entendi por que esse modelo é escolhido no lugar de uma tabela compartilhada com coluna de tenant.',
          'Construí telas em React com TanStack Query, Table e Virtual para pipelines grandes o suficiente para travar o navegador com renderização ingênua.',
          'Segui o caminho de deploy com Helm e AWS EKS nas duas aplicações, incluindo releases por componente.',
        ],
      },
      'ai-work': {
        role: 'Desenvolvimento Full Stack — Features de IA',
        summary:
          'Trabalhei em features de agentes conversacionais para anamnese clínica e marketing de ciclo de vida em e-commerce, rodando no WhatsApp e no e-mail.',
        highlights: [
          'Implementei integrações de provedores de agenda atrás de uma interface compartilhada, para o agente oferecer disponibilidade a partir do software que a clínica já usava.',
          'Conectei o retrieval sobre bases de conhecimento por tenant para que as respostas viessem de procedimentos e preços reais, não de chutes do modelo.',
          'Adicionei instrumentação com OpenTelemetry, Prometheus e Sentry, inclusive nos processos worker, onde falhas passam despercebidas com mais facilidade.',
        ],
      },
      'first-production': {
        role: 'Desenvolvimento Full Stack — Primeiro Trabalho em Produção',
        summary:
          'Meu primeiro código a chegar em usuários reais: telas de plataforma de afiliados, integrações de cobrança e sites públicos de produto.',
        highlights: [
          'Construí telas de afiliado e de administração contra uma API NestJS, com repasses via Stripe e uploads pré-assinados no S3.',
          'Integrei Shopify Billing e Stripe para que o mesmo produto pudesse ser vendido dentro do ecossistema Shopify ou diretamente.',
          'Construí páginas de marketing e páginas legais em Next.js que passaram na revisão da Meta para aprovação no WhatsApp Business.',
        ],
      },
      learning: {
        role: 'Aprendendo a Construir',
        summary:
          'Comecei com JavaScript e Node enquanto cursava engenharia, saindo dos tutoriais para coisas que outras pessoas realmente usavam.',
        highlights: [
          'Passei por JavaScript, TypeScript, React e Node, depois SQL e modelagem relacional.',
          'Construí projetos full stack pequenos para entender como uma requisição vai de um formulário até uma linha no banco e volta.',
          'Comecei a ler código dos outros com seriedade, o que acabou importando mais do que escrever o meu.',
        ],
      },
    },
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar',
    subtitle:
      'Aberto a vagas full stack júnior e pleno, e a trabalhos freelance. Me conte o que você está construindo — se eu não for a pessoa certa, eu digo.',
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
    tagline: 'Desenvolvedor Full Stack — SaaS multi-tenant, recursos de IA, sistemas em produção.',
    builtWith: 'Construído com Next.js, Tailwind CSS e Framer Motion.',
    rights: 'Todos os direitos reservados.',
    backToTop: 'Voltar ao topo',
    sections: 'Seções',
    elsewhere: 'Em outros lugares',
  },
}
