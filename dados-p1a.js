// ============================================================
// DADOS do Dashboard — Fábrica de Aulas (P1A)
// Regenerar o dashboard = editar SÓ este arquivo (a Letícia mantém).
// O design (dashboard-P1A.html) não se toca — decisão UX de 10/06/2026.
// Convenção: módulos pendentes no topo; concluídos abaixo,
// do mais recente pro mais antigo (mesma lógica do Histórico).
// ============================================================
window.P1A = {
  atualizado: "08/06/2026",

  kpis: [
    { n: 13, de: 23, label: "Aulas granularizadas", cor: "c-green" },
    { n: 13, de: 23, label: "Roteiros prontos", cor: "c-amber" },
    { n: 13, de: 18, label: "Materiais prontos", cor: "c-amber" },
    { n: 7, de: null, label: "Pendências pré-gravação", cor: "c-red" }
  ],
  progresso: { n: 13, de: 23 },

  recente: {
    data: "08/06/2026",
    itens: [
      '<strong>Módulo 3 — O DNA da Sua Aula</strong> granularizado e fechado: 3 aulas (3.1–3.3) + roteiros + HTML da jornada da Renata (10→13 de 23)',
      'Nomes validados com a LIA · arco descobrir → proteger → consolidar · as regras do jeito de ensinar sobem pro <strong>cérebro</strong> (não pro Mapa)',
      'Arquitetura em 3 camadas travada (cérebro · regras · molde) · glossário afetivo↔técnico vira entregável do curso',
      'Documento vivo da Billy = <strong>Google Doc ou Word</strong> (revoga o .txt como lar) · Notion fica fora do P1 (vira automação do P2)',
      'HTML do M3 com botão de copiar nas falas genéricas · "cara" → "personalização" em todo o material'
    ]
  },

  modulos: [
    {
      nome: "Módulos 4–6 + Final · 10 aulas",
      meta: 'Estrutura macro confirmada · <span style="color:#5b21b6;font-weight:700">A granularizar</span>',
      pill: { classe: "p-macro", txt: "0 de 10 granularizadas" },
      barra: { classe: "fill-zero", pct: 0 },
      aulas: [
        { code: "Mod. 4", codeLargo: true, titulo: "<strong>Construir o molde</strong>", nota: "5 aulas · ⭐ CLÍMAX · próximo", pill: { classe: "p-climax", txt: "Clímax" }, climax: true },
        { code: "Mod. 5", codeLargo: true, titulo: "Empacotamento + proofreader", nota: "2 aulas", pill: { classe: "p-macro", txt: "Macro confirmado" } },
        { code: "Mod. 6", codeLargo: true, titulo: "Multiplicar moldes (3 moldes ativos ao final)", nota: "2 aulas", pill: { classe: "p-macro", txt: "Macro confirmado" } },
        { code: "Final", codeLargo: true, titulo: "Nova identidade", nota: "1 aula", pill: { classe: "p-macro", txt: "Macro confirmado" } }
      ]
    },
    {
      nome: "Módulo 3 — O DNA da Sua Aula",
      meta: '3 aulas · <span style="color:#059669;font-weight:700">Granularizado + roteiros + HTML + nomes validados LIA ✓</span>',
      pill: { classe: "p-done", txt: "✓ 3 de 3 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "3.1", titulo: "O Que Você Faz Sem Perceber", nota: "regras de método", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "3.2", titulo: "Aquilo Que Você Não Abre Mão", nota: "relação + limites", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "3.3", titulo: "O Seu Jeito, Escrito", nota: "→ cérebro", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } }
      ]
    },
    {
      nome: "Módulo 2 — A Arquitetura da Sua Aula",
      meta: '5 aulas · <span style="color:#059669;font-weight:700">Granularizado + roteiros + nomes validados LIA ✓</span>',
      pill: { classe: "p-done", txt: "✓ 5 de 5 granularizadas" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "2.0", titulo: "Comandar ou Conversar", nota: "a virada", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "2.1", titulo: "As Partes da Sua Aula", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "2.2", titulo: "Por Que Cada Parte Existe", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "2.3", titulo: "Onde a Aula Acontece", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "2.4", titulo: "A Personalidade da Sua Aula", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } }
      ]
    },
    {
      nome: "Módulo 1 — Comece por Aqui: O Nascimento da Sua Fábrica",
      meta: '5 aulas · ~75 min · <span style="color:#059669;font-weight:700">Nomenclatura validada com LIA ✓</span> <span style="color:#64748b;font-weight:600">(ex-Módulo 0)</span>',
      pill: { classe: "p-done", txt: "✓ 5 de 5 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "1.1", titulo: "A Aula que Merece Virar Sistema", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "1.2", titulo: "Seu Ambiente de Trabalho", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "1.3", titulo: "Codificando Sua Identidade Pedagógica", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "1.4", titulo: "O Cérebro da Sua Fábrica", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "1.5", titulo: "O Primeiro Molde da Sua Fábrica", nota: "⭐ Microvitória", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } }
      ]
    }
  ],

  materiaisSub: "13 prontos · 5 pendentes",
  materiais: [
    { status: "done", nome: "Tabelinha Free vs Pro", aula: "0.2", obs: "Criada em 26/05/2026" },
    { status: "done", nome: "Prompt síntese identidade pedagógica v3.1", aula: "0.3", obs: "Testado com Billy D e E" },
    { status: "done", nome: "PDF Perguntas-Guia (áudio identidade)", aula: "0.3", obs: "7 perguntas · pendente hospedagem" },
    { status: "done", nome: "Pesquisa planos Claude atualizada", aula: "0.2", obs: "Feita em 26/05/2026" },
    { status: "done", nome: "Texto-base das Instruções do projeto", aula: "0.4", obs: "Criado 01/06 · guardrail de foco add 03/06" },
    { status: "done", nome: "Prompt de adaptação das Instruções", aula: "0.4", obs: "Criado em 01/06/2026" },
    { status: "done", nome: "Ficha da aula assinatura (.txt)", aula: "0.5", obs: "Criada 03/06 · 7 campos com exemplos" },
    { status: "done", nome: 'Comando "Primeiro Esqueleto"', aula: "0.5", obs: "Criado 03/06 · testado com Billy fictícia" },
    { status: "done", nome: "Prompt de transcrição de fotos", aula: "1.5", obs: "Criado 03/06" },
    { status: "done", nome: 'Ficha "Mapa da Aula" (.txt)', aula: "Mód. 2", obs: 'ex-"Planta da Aula" · preenchida ao longo do Módulo 2' },
    { status: "done", nome: "HTML + PDF — jornada da Renata (Módulo 1)", aula: "Mód. 1", obs: "5 abas + aba Comandos · paleta versão A" },
    { status: "done", nome: "HTML + PDF — jornada da Renata (Módulo 2)", aula: "Mód. 2", obs: "5 abas (2.0–2.4) + Mapa da Aula integrado" },
    { status: "done", nome: "HTML — jornada da Renata (Módulo 3)", aula: "Mód. 3", obs: "3 abas (3.1–3.3) + botão de copiar + bloco de recado" },
    { status: "miss", nome: "Link tutorial externo — criação conta Google", aula: "0.2", obs: "Confirmar antes de gravar" },
    { status: "miss", nome: "Conta Claude nova (zerada) para gravação", aula: "0.2", obs: "Email Google separado" },
    { status: "miss", nome: "2ª Fábrica Steph (perfil de exemplo)", aula: "0.3", obs: "Áudio já existe transcrito — usar o dela" },
    { status: "miss", nome: "3 templates de skill (Molde Aberto, Fonte, Proofreader)", aula: "Mód. 4–5", obs: "Faltam courage-to-be-disliked e proofreader no PC" },
    { status: "miss", nome: "Google Form — registro de transformação", aula: "Final", obs: "Criar antes do lançamento" }
  ],

  pendenciasSub: "8 itens",
  pendencias: [
    { nivel: "crit", texto: "<strong>Granularizar Módulos 4–6 + Final</strong> — 10 aulas restantes (próximo: Módulo 4, o clímax)", sub: "Desbloqueia → roteiros, validação LIA, gravação" },
    { nivel: "crit", texto: "<strong>Roteiros das 10 aulas dos Módulos 4–6 + Final</strong>", sub: "Desbloqueia → gravação" },
    { nivel: "crit", texto: "<strong>Validação LIA — nomenclaturas dos Módulos 4–6 + Final</strong>", sub: "Módulos 1, 2 e 3 já validados com a LIA" },
    { nivel: "high", texto: "<strong>Extrair 3 templates de skill</strong> (Molde Aberto, Molde-com-Fonte, Proofreader)", sub: "Faltam no PC: courage-to-be-disliked + lesson-proofreader · esl-html-lesson ok" },
    { nivel: "norm", texto: "<strong>Conta Claude nova (zerada) para gravação</strong>", sub: "Email Google separado · criar perto da gravação" },
    { nivel: "norm", texto: "<strong>2ª Fábrica Steph (perfil de exemplo para 0.3)</strong>", sub: "Áudio próprio já transcrito — reutilizar" },
    { nivel: "norm", texto: "<strong>Decisão de plataforma</strong> + onde fica o material de apoio", sub: "Decidir na sessão de 15/06" },
    { nivel: "norm", texto: "<strong>Comprar iluminação + microfone</strong> para a gravação", sub: "Pesquisar — prazo 10/06 · teleprompter via app no tablet" }
  ],

  marcosSub: "rumo ao lançamento 29/06",
  marcos: [
    { ativo: true, titulo: "Granularização — Módulos 4–6 + Final", desc: "Módulos 1, 2 e 3 fechados (13/23). Próximo: Módulo 4 (o clímax). Validar nomes com a LIA em paralelo." },
    { ativo: false, titulo: "Gravação das 23 aulas + VSL", desc: "15–21/06. Automação de edição construída em paralelo." },
    { ativo: false, titulo: "Página de vendas + Criativos", desc: "21–26/06. Copy validada com a LIA · página via Claude Design → HTML." },
    { ativo: false, titulo: "Setup de tráfego + teste de funil", desc: "27–28/06. Funil testado ponta a ponta." },
    { ativo: false, titulo: "Lançamento — coorte fundadora", desc: "29/06 · Ticket R$97 · tráfego pago ativo." }
  ],

  historico: [
    { data: "08/06/2026", latest: true, itens: [
      'Módulo 3 "O DNA da Sua Aula" granularizado e fechado — 3 aulas (3.1–3.3) + roteiros + HTML da jornada da Renata (10→13 de 23)',
      'Nomes validados com a LIA · arco descobrir → proteger → consolidar · as regras do jeito de ensinar sobem pro cérebro (não pro Mapa)',
      'Arquitetura em 3 camadas travada (cérebro · regras · molde) · glossário afetivo↔técnico vira entregável do curso',
      'Documento vivo da Billy = Google Doc ou Word (revoga .txt como lar) · Notion fora do P1 (vira automação do P2)',
      'HTML do M3 com botão de copiar + bloco de recado · "cara" → "personalização" em todo o material'
    ]},
    { data: "05/06/2026", itens: [
      'Módulos 1 e 2 — HTMLs da jornada + PDFs fechados e aprovados (cada aula em página nova)',
      'Módulo 1: aba Comandos (4 comandos copiáveis) + fluxo Opção B (identidade nas Instruções na 1.3; cérebro substitui na 1.4) + ficha apresentada na 1.5',
      'Paleta versão A (teal-base + lilás nos blocos de jornada) — decidida com pesquisa de psicologia das cores + PLD',
      'Teste de QA com Billy fictícia (Juliana) percorrendo os 2 módulos · proofreading do Módulo 2 ("Planta"→"Mapa da Aula")',
      'Roteiro da aula 2.0 ajustado (se o Claude já acertar, a professora assume o comando mesmo assim) · jornadas Steph/Juliana ficam como banco de teste sob demanda'
    ]},
    { data: "04/06/2026", itens: [
      'Módulo 2 "A Arquitetura da Sua Aula" granularizado — 5 aulas (2.0–2.4), arquitetura + HTML da jornada da Renata (5→10 de 23)',
      'Marca-mãe renomeada: Pedagogia → <strong>Ensino Amplificado</strong> / Amplified Teaching (validado LIA) · "Autoria Amplificada" fica no copy',
      'Nomes do Módulo 2 fechados com a LIA · roteiros 2.0–2.4 prontos · ficha "Planta da Aula" criada · Módulo 2 salvo no Notion',
      'Reestruturação: Módulo 0 → Módulo 1; o antigo "Nova relação com IA" virou a aula 2.0 (abertura do Módulo 2)',
      'Convenção de design dos HTMLs de conversa criada (legenda · ação · pensamento · material de apoio · fade)'
    ]},
    { data: "03/06/2026", itens: [
      'Aula 0.5 "O Primeiro Molde da Sua Fábrica" granularizada — Módulo 0 COMPLETO (4→5 de 5)',
      '3 materiais criados: ficha (.txt), comando "Primeiro Esqueleto", prompt de transcrição',
      'Aula 0.6 eliminada — anonimização migrou pro P2 (Módulo 0: 6→5 aulas; total 24→23)',
      'Guardrail de foco aplicado no cérebro da 0.4 (Texto-base das Instruções)',
      'Naming das alunas decidido: "Professora Amplificada" (validado com a LIA)',
      'Comando da 0.5 testado com Billy fictícia (Renata) + ficha-exemplo da Steph preenchida'
    ]},
    { data: "01/06/2026", itens: [
      'Aula 0.4 "O Cérebro da Sua Fábrica" granularizada (Módulo 0: 3→4 de 6)',
      '2 materiais criados: texto-base das Instruções + prompt de adaptação',
      'Pendência "mover chat entre projetos" resolvida',
      'Protocolo de granularização definido (modo normal + fluxo fixo)',
      'Cronograma completo de junho no Google Calendar, até o lançamento 29/06'
    ]},
    { data: "31/05/2026", itens: [
      'Dashboard criado e publicado no GitHub Pages (link permanente)',
      'Terminologia "Bloco" → "Módulo" em todo o material',
      'Nome final "Fábrica de Aulas" confirmado',
      'Consultoria jurídica saiu das pendências bloqueantes'
    ]}
  ]
};
