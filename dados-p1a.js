// ============================================================
// DADOS do Dashboard — Fábrica de Aulas (P1A)
// Regenerar o dashboard = editar SÓ este arquivo (a Letícia mantém).
// O design (dashboard-P1A.html) não se toca — decisão UX de 10/06/2026.
// Convenção: módulos pendentes no topo; concluídos abaixo,
// do mais recente pro mais antigo (mesma lógica do Histórico).
// ============================================================
window.P1A = {
  atualizado: "11/06/2026",

  kpis: [
    { n: 18, de: 23, label: "Aulas granularizadas", cor: "c-green" },
    { n: 18, de: 23, label: "Roteiros prontos", cor: "c-amber" },
    { n: 17, de: 22, label: "Materiais prontos", cor: "c-amber" },
    { n: 6, de: null, label: "Pendências pré-gravação", cor: "c-red" }
  ],
  progresso: { n: 18, de: 23 },

  recente: {
    data: "10–11/06/2026",
    itens: [
      '<strong>Módulo 4 — Quando Sua Fábrica Ganha Vida</strong> granularizado e fechado: 5 aulas (4.0–4.4) + roteiros + HTML da jornada + aba Comandos (13→18 de 23) · ⭐ é o CLÍMAX do curso',
      'Nomes validados com a LIA · 4.1 "Por Dentro do Molde" · 4.3 "Até Soar Como Você" · frases-âncora do clímax incorporadas à 4.4',
      '<strong>Comando de Início</strong> ("o botão de ligar a fábrica") criado e ensinado na 2.0 · chat novo permitido a qualquer momento (economia de tokens) · retrofit nos HTMLs M1–M3',
      '<strong>Molde-exemplo da Steph</strong> (versão-curso) construído das 6 skills reais (via Eslá) + <strong>bastidores-P1</strong> (runbook de gravação clicável)',
      'Numeração única de materiais/comandos decidida (1–12) · materiais da Billy vão pra plataforma do curso · pesquisa de mercado confirma o gap (ninguém codifica identidade)'
    ]
  },

  modulos: [
    {
      nome: "Módulos 5–6 + Final · 5 aulas",
      meta: 'Estrutura macro confirmada · <span style="color:#5b21b6;font-weight:700">A granularizar</span>',
      pill: { classe: "p-macro", txt: "0 de 5 granularizadas" },
      barra: { classe: "fill-zero", pct: 0 },
      aulas: [
        { code: "Mod. 5", codeLargo: true, titulo: "<strong>Empacotamento + proofreader</strong>", nota: "2 aulas · próximo · o molde vira skill", pill: { classe: "p-macro", txt: "Próximo" } },
        { code: "Mod. 6", codeLargo: true, titulo: "Multiplicar moldes (3 moldes ativos ao final)", nota: "2 aulas · slides + biblioteca de efeitos aqui", pill: { classe: "p-macro", txt: "Macro confirmado" } },
        { code: "Final", codeLargo: true, titulo: "Nova identidade", nota: "1 aula", pill: { classe: "p-macro", txt: "Macro confirmado" } }
      ]
    },
    {
      nome: "Módulo 4 — Quando Sua Fábrica Ganha Vida ⭐",
      meta: '5 aulas · ⭐ CLÍMAX · <span style="color:#059669;font-weight:700">Granularizado + roteiros + HTML + nomes validados LIA ✓</span>',
      pill: { classe: "p-done", txt: "✓ 5 de 5 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "4.0", titulo: "O Molde Não Nasce Pronto", nota: "expectativa: molde bom é iterado", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "4.1", titulo: "Por Dentro do Molde", nota: "anatomia + tipos + esboço", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "4.2", titulo: "O Molde Ganha Corpo", nota: "chat novo + Comando de Recomeço", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "4.3", titulo: "Até Soar Como Você", nota: "refino + ensaio geral", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "4.4", titulo: "A Estreia da Sua Fábrica", nota: "⭐ a aula nasce do molde", pill: { classe: "p-climax", txt: "Clímax ✓" }, climax: true }
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

  materiaisSub: "17 prontos · 5 pendentes",
  materiais: [
    { status: "done", nome: "Tabelinha Free vs Pro", aula: "1.2", obs: "Criada em 26/05/2026" },
    { status: "done", nome: "1 · Comando da Identidade", aula: "1.3", obs: "Cola nas Instruções do projeto" },
    { status: "done", nome: "2 · PDF Perguntas-Guia (áudio identidade)", aula: "1.3", obs: "7 perguntas" },
    { status: "done", nome: "Prompt síntese identidade pedagógica v3.1", aula: "1.3", obs: "Testado com Billy D e E" },
    { status: "done", nome: "3 · Texto-base das Instruções do projeto", aula: "1.4", obs: "Criado 01/06 · guardrail add 03/06" },
    { status: "done", nome: "4 · Comando de Fusão", aula: "1.4", obs: "Criado em 01/06/2026" },
    { status: "done", nome: "5 · Ficha da Aula Assinatura", aula: "1.5", obs: "Documento vivo · vira o Mapa no M2" },
    { status: "done", nome: "6 · Comando Primeiro Esqueleto", aula: "1.5", obs: "v2 · testado com Billy fictícia" },
    { status: "done", nome: "7 · Prompt de Transcrição de Fotos", aula: "1.5", obs: "Criado 03/06" },
    { status: "done", nome: "8 · Comando de Início (botão de ligar a fábrica)", aula: "2.0", obs: "Criado 10/06 · usado em todo chat novo" },
    { status: "done", nome: "9 · Mapa da Aula", aula: "Mód. 2", obs: 'ex-"Planta" · preenchido ao longo do M2' },
    { status: "done", nome: "10 · Comando de Recomeço", aula: "4.2", obs: "É o Comando de Início preenchido pro molde" },
    { status: "done", nome: "11 · Checklist do Ensaio Geral", aula: "4.3", obs: "Ela roda sozinha · não vai pro Claude" },
    { status: "done", nome: "12 · Comando da Estreia", aula: "4.4", obs: "Gera a aula assinatura pela 1ª vez" },
    { status: "done", nome: "HTMLs jornada da Renata — M1, M2, M3, M4", aula: "Mód. 1–4", obs: "Abas por aula + aba Comandos · Drive" },
    { status: "done", nome: "Molde-exemplo da Steph (versão-curso)", aula: "4.1", obs: "Das 6 skills reais · inglês irlandês · HTML com copiar" },
    { status: "done", nome: "Bastidores-P1 (runbook de gravação)", aula: "Todas", obs: "Tudo clicável · demo-ao-vivo × material" },
    { status: "miss", nome: "Versão Google Doc do molde-exemplo (pra tela)", aula: "4.1", obs: "Eu monto · você só abre" },
    { status: "miss", nome: "Link tutorial externo — criação conta Google", aula: "1.2", obs: "Confirmar antes de gravar" },
    { status: "miss", nome: "Conta Claude nova (zerada) para gravação", aula: "1.2", obs: "Email Google separado" },
    { status: "miss", nome: "Fábrica de exemplo da Steph (conta + áudio + cérebro)", aula: "1.3", obs: "Sustenta as demos de todo o curso" },
    { status: "miss", nome: "Google Form — registro de transformação", aula: "Final", obs: "Criar antes do lançamento" }
  ],

  pendenciasSub: "6 itens",
  pendencias: [
    { nivel: "crit", texto: "<strong>Aplicar a numeração (1–12) em todos os HTMLs, scripts e bastidores</strong>", sub: "1ª tarefa da próxima sessão · M5/M6 já nascem numerados" },
    { nivel: "crit", texto: "<strong>Granularizar Módulos 5–6 + Final</strong> — 5 aulas restantes (próximo: Módulo 5)", sub: "Desbloqueia → roteiros, validação LIA, gravação" },
    { nivel: "crit", texto: "<strong>Validação LIA — nomes dos Módulos 5–6 + Final</strong>", sub: "Módulos 1–4 já validados com a LIA" },
    { nivel: "high", texto: "<strong>Fábrica de exemplo da Steph</strong> (conta nova + áudio + cérebro + molde)", sub: "Sustenta as demos de tela de todo o curso · só a Steph pode fazer" },
    { nivel: "norm", texto: "<strong>Decisão de funil:</strong> coorte fundadora oferece certificado de horas?", sub: "Moeda do mercado BR · levar à LIA com a página de vendas" },
    { nivel: "norm", texto: "<strong>Comprar iluminação + microfone</strong> para a gravação", sub: "Pesquisar Hollyland Lark M2 · teleprompter via app no tablet" }
  ],

  marcosSub: "rumo ao lançamento",
  marcos: [
    { ativo: true, titulo: "Granularização — Módulos 5–6 + Final", desc: "Módulos 1–4 fechados (18/23), incluindo o clímax. Restam M5, M6 e a aula final (5 aulas). Validar nomes com a LIA em paralelo." },
    { ativo: false, titulo: "Gravação das 23 aulas + VSL", desc: "Automação de edição construída em paralelo · bastidores-P1 organiza o que mostrar em cada aula." },
    { ativo: false, titulo: "Página de vendas + Criativos", desc: "Copy validada com a LIA · página via Claude Design → HTML · pesquisa de mercado já aponta o posicionamento." },
    { ativo: false, titulo: "Setup de tráfego + teste de funil", desc: "Funil testado ponta a ponta." },
    { ativo: false, titulo: "Lançamento — coorte fundadora", desc: "Ticket R$97 · tráfego pago ativo." }
  ],

  historico: [
    { data: "10–11/06/2026", latest: true, itens: [
      'Módulo 4 "Quando Sua Fábrica Ganha Vida" granularizado e fechado — 5 aulas (4.0–4.4) + roteiros + HTML + aba Comandos (13→18 de 23) · ⭐ o CLÍMAX do curso',
      'Nomes validados com a LIA · 4.1 "Por Dentro do Molde" · 4.3 "Até Soar Como Você" · frases-âncora do clímax na 4.4 ("você se reconhece nela?")',
      'Comando de Início ("botão de ligar a fábrica") criado e ensinado na 2.0 · chat novo permitido (economia de tokens) · retrofit nos HTMLs M1–M3',
      'Molde-exemplo da Steph (versão-curso) das 6 skills reais via Eslá · bastidores-P1 (runbook clicável) · numeração única de materiais (1–12)',
      'Materiais da Billy vão pra plataforma do curso (encerra pendência) · pesquisa de mercado confirma o gap: ninguém codifica identidade nem fala em linguagem afetiva'
    ]},
    { data: "08/06/2026", itens: [
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
