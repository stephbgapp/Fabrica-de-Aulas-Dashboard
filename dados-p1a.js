// ============================================================
// DADOS do Dashboard — Fábrica de Aulas (P1A)
// Regenerar o dashboard = editar SÓ este arquivo (a Letícia mantém).
// O design (dashboard-P1A.html) não se toca — decisão UX de 10/06/2026.
// Convenção: módulos pendentes no topo; concluídos abaixo,
// do mais recente pro mais antigo (mesma lógica do Histórico).
// ============================================================
window.P1A = {
  atualizado: "12/06/2026",

  kpis: [
    { n: 23, de: 23, label: "Aulas granularizadas", cor: "c-green" },
    { n: 23, de: 23, label: "Roteiros prontos", cor: "c-green" },
    { n: 26, de: 32, label: "Materiais prontos", cor: "c-amber" },
    { n: 6, de: null, label: "Pendências pré-gravação", cor: "c-red" }
  ],
  progresso: { n: 23, de: 23 },

  recente: {
    data: "12/06/2026 (tarde/noite)",
    itens: [
      '<strong>🎓 GRANULARIZAÇÃO DO CURSO COMPLETA — 23 de 23, 4 dias adiantado.</strong> M6 "Agora É Seu" (6.1 "Não Foi Sorte" + 6.2 "O Catálogo da Sua Fábrica") e Aula Final "A Professora Amplificada" fechados em 1 sessão',
      'Nomes validados com a LIA (auditada) · microvitória travada: "Não foi sorte — você já tem um método" · frase final do curso: "A IA nunca foi a professora desta história. Você sempre foi."',
      '<strong>Biblioteca de Efeitos (material 16)</strong>: 12 efeitos com prompt pronto, validados em demo real · <strong>Glossário da Fábrica (material 17)</strong> · jornada da Renata M6 com 7 efeitos FUNCIONANDO na aba ✨',
      '<strong>Biblioteca de Design</strong>: 10 direções pesquisadas (paletas AA + fontes Google) em HTMLs de demonstração · 2 decks de slides demo (Renata + Steph) · PDF Simple Past (Unit 5)',
      'Roteiros agora em <strong>bullets + [téc.: …]</strong> (formato de gravação da Steph) · MD das 23 aulas + prompt da varredura (seeding P2 + comentários + fila de espera) prontos pra LIA'
    ]
  },

  modulos: [
    {
      nome: "Aula Final — A Professora Amplificada 🎓",
      meta: '1 aula · <span style="color:#059669;font-weight:700">Granularizada + bullets de gravação + nome validado LIA ✓</span>',
      pill: { classe: "p-done", txt: "✓ 1 de 1 — completa" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "Final", codeLargo: true, titulo: "A Professora Amplificada", nota: 'glossário consolidado (17) + registro + fila de espera · "A IA nunca foi a professora desta história. Você sempre foi."', pill: { classe: "p-done", txt: "✓ Roteiro pronto" } }
      ]
    },
    {
      nome: "Módulo 6 — Agora É Seu",
      meta: '2 aulas · <span style="color:#059669;font-weight:700">Granularizado + bullets + HTML com efeitos ao vivo + nomes validados LIA ✓</span>',
      pill: { classe: "p-done", txt: "✓ 2 de 2 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "6.1", titulo: "Não Foi Sorte", nota: "o 2º molde, ciclo completo sem tutorial · sem comando novo (a prova do sistema)", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "6.2", titulo: "O Catálogo da Sua Fábrica", nota: "3º molde em slides (.pptx em todos os planos) + Biblioteca de Efeitos (16)", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } }
      ]
    },
    {
      nome: "Módulo 5 — O Que Faz Sua Fábrica Durar",
      meta: '2 aulas · <span style="color:#059669;font-weight:700">Granularizado + roteiros + HTML + nomes validados LIA ✓</span>',
      pill: { classe: "p-done", txt: "✓ 2 de 2 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "5.1", titulo: "Seu Molde, Instalado", nota: "o molde vira skill instalada (skill-creator)", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } },
        { code: "5.2", titulo: "Seu Padrão, Protegido", nota: "o revisor pessoal · 3 camadas · ela decide", pill: { classe: "p-done", txt: "✓ Roteiro pronto" } }
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

  materiaisSub: "26 prontos · 6 pendentes",
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
    { status: "done", nome: "13 · Comando de Empacotamento", aula: "5.1", obs: "Genérico — molde, revisor e moldes do M6 · skill-creator" },
    { status: "done", nome: "14 · Comando do Revisor", aula: "5.2", obs: "Propõe a lista nas 3 camadas · ela corta/troca/completa" },
    { status: "done", nome: "15 · Comando da Última Leitura", aula: "5.2", obs: '"Se algo parecer errado, não corrija: me pergunte primeiro"' },
    { status: "done", nome: "PDF Future Tenses (demo molde com fonte)", aula: "5.1", obs: "Unit 7 · inglês europeu · a Steph anexa ao vivo" },
    { status: "done", nome: "HTMLs jornada da Renata — M1 a M6", aula: "Mód. 1–6", obs: "Abas por aula + Comandos · M6 com aba ✨ Efeitos ao vivo (7 funcionando)" },
    { status: "done", nome: "16 · Biblioteca de Efeitos Interativos", aula: "6.2", obs: "12 efeitos com prompt pronto · ajuste por conversa · validada em demo real 12/06" },
    { status: "done", nome: "17 · Glossário da Fábrica (consolidado)", aula: "Final", obs: "10 termos afetivo→técnico · QA explicado (≠ Q&A)" },
    { status: "done", nome: "PDF Simple Past (demo molde com fonte)", aula: "M6", obs: "Unit 5 · inglês europeu · par do Future Tenses" },
    { status: "done", nome: "Decks de slides demo (Renata Misturas + Steph Simple Past)", aula: "6.2", obs: "Mostrar na gravação · simulam o molde de slides" },
    { status: "done", nome: "Biblioteca de Design (10 direções + índice)", aula: "Extra", obs: "Paletas AA + fontes Google · a Billy mistura conversando" },
    { status: "done", nome: "Molde-exemplo da Steph (versão-curso)", aula: "4.1", obs: "Das 6 skills reais · inglês irlandês · HTML com copiar" },
    { status: "done", nome: "Bastidores-P1 (runbook de gravação)", aula: "Todas", obs: "Tudo clicável · demo-ao-vivo × material" },
    { status: "miss", nome: "Versão Google Doc do molde-exemplo (pra tela)", aula: "4.1", obs: "Eu monto · você só abre" },
    { status: "miss", nome: "Link tutorial externo — criação conta Google", aula: "1.2", obs: "Confirmar antes de gravar" },
    { status: "miss", nome: "Higienização da conta principal + Google secundário pra 1.2", aula: "1.2", obs: "Decisão REVISADA 12/06 (substitui a conta nova zerada) · checklist: projetos/chats/skills" },
    { status: "miss", nome: "Fábrica de exemplo da Steph (conta + áudio + cérebro)", aula: "1.3", obs: "Sustenta as demos de todo o curso" },
    { status: "miss", nome: "Google Form — registro de transformação", aula: "Final", obs: "5 perguntas em draft na página da aula final" },
    { status: "miss", nome: "Página explicativa + form da fila de espera (EA2)", aula: "Final", obs: "Copy vem da varredura da LIA" }
  ],

  pendenciasSub: "6 itens",
  pendencias: [
    { nivel: "crit", texto: "<strong>Retrofit M1–M5: roteiros em bullets + [téc.: …] em toda menção + numeração de materiais</strong>", sub: "1ª tarefa de 13/06 · M6 e Final já nasceram no formato novo" },
    { nivel: "crit", texto: "<strong>Devolutiva da LIA — varredura completa</strong> (seeding P2 · comentários por aula · copy fila de espera · siglas)", sub: "MD + prompt prontos no Drive · auditar antes de aceitar · destrava a passada geral de seedings" },
    { nivel: "high", texto: "<strong>Fábrica de exemplo da Steph</strong> (conta + áudio + cérebro + molde) + higienização pré-gravação", sub: "Inclui rodar o fluxo de skill uma vez (prints da 5.1) + desinstalar as 6 skills com backup · só a Steph pode fazer" },
    { nivel: "high", texto: "<strong>Google Form do registro + página/form da fila de espera</strong>", sub: "Form: 5 perguntas em draft · fila de espera: copy vem da LIA" },
    { nivel: "norm", texto: "<strong>Decisão de funil:</strong> coorte fundadora oferece certificado de horas?", sub: "Moeda do mercado BR · levar à LIA com a página de vendas" },
    { nivel: "norm", texto: "<strong>Concluir a compra do setor de gravação</strong> (mic + luz + tripé no carrinho 12/06)", sub: "Itens escolhidos · confirmar CRI da luz antes de pagar" }
  ],

  marcosSub: "rumo ao lançamento",
  marcos: [
    { ativo: false, titulo: "Granularização — COMPLETA 🎓", desc: "23 de 23 aulas granularizadas em 12/06 — 4 dias adiantado. Todos os nomes validados com a LIA. Falta só a passada geral de seedings (pós-devolutiva da LIA)." },
    { ativo: true, titulo: "Gravação das 23 aulas + VSL", desc: "Equipamento no carrinho · conta higienizada + Google secundário (1.2) · bastidores-P1 organiza o que mostrar em cada aula · bullets de gravação no Notion." },
    { ativo: false, titulo: "Página de vendas + Criativos", desc: "Copy validada com a LIA · página via Claude Design → HTML · pesquisa de mercado já aponta o posicionamento." },
    { ativo: false, titulo: "Setup de tráfego + teste de funil", desc: "Funil testado ponta a ponta." },
    { ativo: false, titulo: "Lançamento — coorte fundadora", desc: "Ticket R$97 · tráfego pago ativo." }
  ],

  historico: [
    { data: "12/06/2026 (tarde/noite)", latest: true, itens: [
      '🎓 <strong>GRANULARIZAÇÃO DO CURSO COMPLETA — 23/23, 4 dias adiantado.</strong> M6 "Agora É Seu" (6.1 Não Foi Sorte · 6.2 O Catálogo da Sua Fábrica) + Aula Final "A Professora Amplificada" fechados em 1 sessão (20→23 de 23)',
      'Frase final do curso travada: "A IA nunca foi a professora desta história. Você sempre foi." · microvitória: "Não foi sorte — você já tem um método"',
      'Materiais novos: 16 Biblioteca de Efeitos (12 prompts validados em demo real) · 17 Glossário da Fábrica · PDF Simple Past · 2 decks de slides · Biblioteca de Design (10 direções)',
      'Roteiros passam a bullets + [téc.: …] (formato de gravação) · decisão de gravação revisada: conta principal higienizada + Google secundário na 1.2',
      'MD das 23 aulas + prompt da varredura entregues pra LIA (seeding P2/EA2 · comentários por aula · copy da fila de espera · siglas EAn)'
    ]},
    { data: "11/06/2026 (noite)", itens: [
      'Módulo 5 "O Que Faz Sua Fábrica Durar" granularizado e fechado em 1 sessão — 1 dia adiantado vs. cronograma (18→20 de 23)',
      '5.1 "Seu Molde, Instalado": o molde empacotado pelo skill-creator e instalado como skill na conta da Billy · skills funcionam em todos os planos, inclusive Free (verificado)',
      '5.2 "Seu Padrão, Protegido": o revisor pessoal de 3 camadas · propõe e pergunta, nunca corrige por cima · "a IA propõe, a professora decide" na qualidade',
      'Comandos 13/14/15 criados (M5 nasceu numerado) · PDF Future Tenses pra demo do molde com fonte · seção M5 no bastidores-P1',
      'Fechamento travado: "A primeira peça ajuda você a criar. A segunda ajuda você a continuar sendo você. Agora a sua fábrica pode ser rápida."'
    ]},
    { data: "10–11/06/2026", itens: [
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
