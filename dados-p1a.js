// ============================================================
// DADOS do Dashboard — Fábrica de Aulas (P1A)
// Regenerar o dashboard = editar SÓ este arquivo (a Letícia mantém).
// O design (dashboard-P1A.html) não se toca — decisão UX de 10/06/2026.
// Convenção: módulos pendentes no topo; concluídos abaixo,
// do mais recente pro mais antigo (mesma lógica do Histórico).
// ============================================================
window.P1A = {
  atualizado: "14/06/2026",

  kpis: [
    { n: 23, de: 23, label: "Aulas granularizadas", cor: "c-green" },
    { n: 23, de: 23, label: "Teleprompters de gravação", cor: "c-green" },
    { n: 27, de: 32, label: "Materiais prontos", cor: "c-amber" },
    { n: 5, de: null, label: "Pendências pré-gravação", cor: "c-red" }
  ],
  progresso: { n: 23, de: 23 },

  recente: {
    data: "14/06/2026 (maratona)",
    itens: [
      '<strong>🎬 O CURSO INTEIRO VIROU TELEPROMPTER DE GRAVAÇÃO (23/23).</strong> Formato novo: sequência cronológica de beats, conteúdo específico escrito, ações estratégicas inline (onde seeding, mecanismo, CTA). Master único no Google Doc: "Fábrica de Aulas — Scripts + Teleprompters (gravação)"',
      '<strong>Auditoria dos 8 ingredientes da Amanda</strong>: achou e tapou — seeding do P2 estava ausente em 17/23, abertura da 1.1 com produtividade, "15 anos" errado na 1.3, mecanismo falado em só ~6 aulas',
      '<strong>Seeding do P2 refeito com a LIA e aprovado</strong> (puxa o próximo PRODUTO, não o próximo módulo) · aula da Amanda "Criação do P1" destilada na Base de Conhecimento',
      '<strong>Nome do P2 resolvido</strong>: gravar com "Ensino Amplificado Automatizado" só nas revelações (3.3, 4.4, 6.2, Final) — é descritivo, então future-proof (vira heading sob um nome catchy depois; vídeo não se re-grava)',
      'Formulário de entrada aprovado · engajamento em 8 aulas + 2 hand-raise + fila · vocab "estrutura" (não esqueleto) · mecanismo em 2ª pessoa na aula'
    ]
  },

  modulos: [
    {
      nome: "Aula Final — A Professora Amplificada 🎓",
      meta: '1 aula · <span style="color:#059669;font-weight:700">Granularizada + teleprompter de gravação ✓</span>',
      pill: { classe: "p-done", txt: "✓ 1 de 1 — completa" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "Final", codeLargo: true, titulo: "A Professora Amplificada", nota: 'glossário (17) + registro + fila de espera · "A IA nunca foi a professora desta história. Você sempre foi."', pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } }
      ]
    },
    {
      nome: "Módulo 6 — Agora É Seu",
      meta: '2 aulas · <span style="color:#059669;font-weight:700">Granularizado + teleprompter + HTML com efeitos ✓</span>',
      pill: { classe: "p-done", txt: "✓ 2 de 2 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "6.1", titulo: "Não Foi Sorte", nota: "o 2º molde, ciclo completo sem tutorial", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "6.2", titulo: "O Catálogo da Sua Fábrica", nota: "3º molde em slides + Biblioteca de Efeitos (16)", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } }
      ]
    },
    {
      nome: "Módulo 5 — O Que Faz Sua Fábrica Durar",
      meta: '2 aulas · <span style="color:#059669;font-weight:700">Granularizado + teleprompter ✓</span>',
      pill: { classe: "p-done", txt: "✓ 2 de 2 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "5.1", titulo: "Seu Molde, Instalado", nota: "o molde vira Skill (skill-creator)", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "5.2", titulo: "Seu Padrão, Protegido", nota: "o revisor pessoal · 3 camadas · ela decide", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } }
      ]
    },
    {
      nome: "Módulo 4 — Quando Sua Fábrica Ganha Vida ⭐",
      meta: '5 aulas · ⭐ CLÍMAX · <span style="color:#059669;font-weight:700">Granularizado + teleprompter ✓</span>',
      pill: { classe: "p-done", txt: "✓ 5 de 5 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "4.0", titulo: "O Molde Não Nasce Pronto", nota: "expectativa: molde bom é iterado", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "4.1", titulo: "Por Dentro do Molde", nota: "anatomia + tipos + esboço", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "4.2", titulo: "O Molde Ganha Corpo", nota: "chat novo + Comando de Recomeço", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "4.3", titulo: "Até Soar Como Você", nota: "refino + ensaio geral", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "4.4", titulo: "A Estreia da Sua Fábrica", nota: "⭐ a aula nasce do molde", pill: { classe: "p-climax", txt: "Clímax ✓" }, climax: true }
      ]
    },
    {
      nome: "Módulo 3 — O DNA da Sua Aula",
      meta: '3 aulas · <span style="color:#059669;font-weight:700">Granularizado + teleprompter ✓</span>',
      pill: { classe: "p-done", txt: "✓ 3 de 3 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "3.1", titulo: "O Que Você Faz Sem Perceber", nota: "regras de método", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "3.2", titulo: "Aquilo Que Você Não Abre Mão", nota: "relação + limites", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "3.3", titulo: "O Seu Jeito, Escrito", nota: "→ cérebro · hand-raise + seed P2", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } }
      ]
    },
    {
      nome: "Módulo 2 — A Arquitetura da Sua Aula",
      meta: '5 aulas · <span style="color:#059669;font-weight:700">Granularizado + teleprompter ✓</span>',
      pill: { classe: "p-done", txt: "✓ 5 de 5 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "2.0", titulo: "Comandar ou Conversar", nota: "a virada", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "2.1", titulo: "As Partes da Sua Aula", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "2.2", titulo: "Por Que Cada Parte Existe", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "2.3", titulo: "Onde a Aula Acontece", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "2.4", titulo: "A Personalidade da Sua Aula", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } }
      ]
    },
    {
      nome: "Módulo 1 — Comece por Aqui: O Nascimento da Sua Fábrica",
      meta: '5 aulas · ~75 min · <span style="color:#059669;font-weight:700">Granularizado + teleprompter · 1.1 = padrão aprovado ✓</span>',
      pill: { classe: "p-done", txt: "✓ 5 de 5 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "1.1", titulo: "A Aula que Merece Virar Sistema", nota: "padrão de teleprompter aprovado pela Steph", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "1.2", titulo: "Seu Ambiente de Trabalho", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "1.3", titulo: "Codificando Sua Identidade Pedagógica", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "1.4", titulo: "O Cérebro da Sua Fábrica", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } },
        { code: "1.5", titulo: "O Primeiro Molde da Sua Fábrica", nota: "⭐ Microvitória", pill: { classe: "p-done", txt: "✓ Teleprompter pronto" } }
      ]
    }
  ],

  materiaisSub: "27 prontos · 5 pendentes",
  materiais: [
    { status: "done", nome: "🎬 Master de gravação (Google Doc)", aula: "Todas", obs: "23 aulas · Script completo + Teleprompter por aula · backup local master-gravacao-P1A.txt" },
    { status: "done", nome: "Teleprompters de gravação (23 aulas)", aula: "Todas", obs: "Formato novo · 5 arquivos no Drive (teleprompter-M1…M5-M6-Final)" },
    { status: "done", nome: "Tabelinha Free vs Pro", aula: "1.2", obs: "Criada em 26/05/2026" },
    { status: "done", nome: "1 · Comando da Identidade", aula: "1.3", obs: "Cola nas Instruções do projeto" },
    { status: "done", nome: "2 · PDF Perguntas-Guia (áudio identidade)", aula: "1.3", obs: "7 perguntas" },
    { status: "done", nome: "Prompt síntese identidade pedagógica v3.1", aula: "1.3", obs: "Testado com Billy D e E" },
    { status: "done", nome: "3 · Texto-base das Instruções do projeto", aula: "1.4", obs: "Criado 01/06 · guardrail add 03/06" },
    { status: "done", nome: "4 · Comando de Fusão", aula: "1.4", obs: "Criado em 01/06/2026" },
    { status: "done", nome: "5 · Ficha da Aula Assinatura", aula: "1.5", obs: "Documento vivo · vira o Mapa no M2" },
    { status: "done", nome: "6 · Comando Primeira Estrutura", aula: "1.5", obs: "v2 · era 'Primeiro Esqueleto' (sweep estrutura)" },
    { status: "done", nome: "7 · Prompt de Transcrição de Fotos", aula: "1.5", obs: "Criado 03/06" },
    { status: "done", nome: "8 · Comando de Início (botão de ligar a fábrica)", aula: "2.0", obs: "Usado em todo chat novo" },
    { status: "done", nome: "9 · Mapa da Aula", aula: "Mód. 2", obs: 'preenchido ao longo do M2' },
    { status: "done", nome: "10 · Comando de Recomeço", aula: "4.2", obs: "Comando de Início preenchido pro molde" },
    { status: "done", nome: "11 · Checklist do Ensaio Geral", aula: "4.3", obs: "Ela roda sozinha · não vai pro Claude" },
    { status: "done", nome: "12 · Comando da Estreia", aula: "4.4", obs: "Gera a aula assinatura pela 1ª vez" },
    { status: "done", nome: "13 · Comando de Empacotamento", aula: "5.1", obs: "Molde, revisor e moldes do M6 · skill-creator" },
    { status: "done", nome: "14 · Comando do Revisor", aula: "5.2", obs: "Propõe as 3 camadas · ela corta/troca/completa" },
    { status: "done", nome: "15 · Comando da Última Leitura", aula: "5.2", obs: '"Se algo parecer errado, não corrija: me pergunte primeiro"' },
    { status: "done", nome: "PDF Future Tenses (demo molde com fonte)", aula: "5.1", obs: "Unit 7 · inglês europeu" },
    { status: "done", nome: "HTMLs jornada da Renata — M1 a M6", aula: "Mód. 1–6", obs: "Material de apoio · M6 com aba ✨ Efeitos ao vivo" },
    { status: "done", nome: "16 · Biblioteca de Efeitos Interativos", aula: "6.2", obs: "12 efeitos com prompt pronto · validada em demo real" },
    { status: "done", nome: "17 · Glossário da Fábrica (consolidado)", aula: "Final", obs: "Fábrica=Projeto · Cérebro=Instruções · Molde=Skill" },
    { status: "done", nome: "PDF Simple Past (demo molde com fonte)", aula: "M6", obs: "Unit 5 · inglês europeu" },
    { status: "done", nome: "Biblioteca de Design (10 direções + índice)", aula: "Extra", obs: "Paletas AA + fontes Google" },
    { status: "done", nome: "Molde-exemplo da Steph (versão-curso)", aula: "4.1", obs: "Das 6 skills reais · inglês irlandês" },
    { status: "done", nome: "Higienização da conta principal + Google secundário (1.2)", aula: "1.2", obs: "FEITO 12/06 · projetos/chats/skills + badge Max" },
    { status: "miss", nome: "Google Form — formulário de ENTRADA", aula: "1.1", obs: "Desenho aprovado 14/06 · eu construo + costuro na 1.1" },
    { status: "miss", nome: "Fábrica de exemplo da Steph (conta + Cérebro + Molde)", aula: "1.3", obs: "Steph monta · usa a transcrição de identidade simulada (Letícia, 1ª tarefa amanhã)" },
    { status: "miss", nome: "Google Form — registro de transformação", aula: "Final", obs: "5 perguntas em draft · eu construo" },
    { status: "miss", nome: "Página + form da fila de espera", aula: "Final", obs: "Pré-lançamento (não trava gravar) · copy aprovada" },
    { status: "miss", nome: "Versão Google Doc do molde-exemplo (pra tela)", aula: "4.1", obs: "Eu monto · você só abre" }
  ],

  pendenciasSub: "5 reais de pré-gravação",
  pendencias: [
    { nivel: "high", texto: "<strong>Fábrica de exemplo da Steph</strong> (conta + Cérebro + Molde) — sustenta TODAS as demos de tela", sub: "Steph monta na hora · usa a transcrição de identidade SIMULADA que a Letícia entrega como 1ª tarefa de amanhã (Steph valida → vira o Cérebro)" },
    { nivel: "high", texto: "<strong>Google Form de ENTRADA</strong> (eu) + costura na 1.1 · <strong>Google Form de registro</strong> (eu)", sub: "Entrada: desenho aprovado · registro: 5 perguntas em draft" },
    { nivel: "norm", texto: "<strong>Salvar roteiros enriquecidos no Notion</strong> + sweep (esqueleto→estrutura, 15 anos→desde 2015) + limpar bullets antigos do retrofit", sub: "Eu faço · o master de gravação já está com tudo corrigido" },
    { nivel: "norm", texto: "<strong>Guia de OBS</strong> (pronto até segunda) + app de teleprompter", sub: "Steph entende o OBS e deixa pronto na TERÇA · grava na QUARTA" },
    { nivel: "norm", texto: "<strong>Decisão de funil:</strong> certificado de horas pra coorte fundadora", sub: "Não trava gravar · vai com a página de vendas · pré-lançamento: página/form da fila de espera" }
  ],

  marcosSub: "rumo ao lançamento",
  marcos: [
    { ativo: false, titulo: "Granularização + Teleprompters — COMPLETO 🎓", desc: "23/23 granularizadas + teleprompters de gravação prontos (master no Google Doc). Seeding do P2 refeito e aprovado. Nome do P2 resolvido (EAA descritivo)." },
    { ativo: true, titulo: "Gravação das 23 aulas + VSL", desc: "Teleprompters prontos · falta a fábrica de exemplo (Steph) + os 2 forms (Letícia) · Seg 15 resolve pendências · Ter 16 instala equipamento + OBS · Qua 17 começa a gravar." },
    { ativo: false, titulo: "Página de vendas + Criativos", desc: "Copy validada com a LIA · página via Claude Design → HTML · backlog de criativos já tem o anúncio mobile." },
    { ativo: false, titulo: "Setup de tráfego + teste de funil", desc: "Funil testado ponta a ponta." },
    { ativo: false, titulo: "Lançamento — coorte fundadora", desc: "Ticket R$97 · tráfego pago ativo." }
  ],

  historico: [
    { data: "14/06/2026 (maratona)", latest: true, itens: [
      '🎬 <strong>CURSO INTEIRO VIROU TELEPROMPTER DE GRAVAÇÃO (23/23)</strong> — formato novo (beats cronológicos + ações estratégicas inline) · master único no Google Doc (Script completo + Teleprompter por aula)',
      '<strong>Auditoria dos 8 ingredientes da Amanda</strong>: seeding do P2 ausente em 17/23, produtividade na abertura da 1.1, "15 anos" errado na 1.3, mecanismo em só ~6 aulas — tudo tapado',
      '<strong>Seeding do P2 refeito com a LIA e aprovado</strong> (puxa o PRODUTO, não o módulo) · aula da Amanda "Criação do P1" destilada na Base de Conhecimento',
      '<strong>Nome do P2:</strong> gravar com "Ensino Amplificado Automatizado" só nas revelações (3.3/4.4/6.2/Final) — descritivo, future-proof · gravar = tela real do Claude (HTML = apoio)',
      'Decisões: bullets = andaime estratégico · conteúdo primeiro/estratégia depois · engajamento em 8 + 2 hand-raise + fila · "estrutura" não "esqueleto" · mecanismo 2ª pessoa · perfil: desde 2015 · P1A 100% mobile'
    ]},
    { data: "12/06/2026 (tarde/noite)", itens: [
      '🎓 <strong>GRANULARIZAÇÃO DO CURSO COMPLETA — 23/23, 4 dias adiantado.</strong> M6 + Aula Final fechados em 1 sessão',
      'Frase final: "A IA nunca foi a professora desta história. Você sempre foi." · microvitória: "Não foi sorte — você já tem um método"',
      'Materiais: 16 Biblioteca de Efeitos · 17 Glossário · PDF Simple Past · 2 decks de slides · Biblioteca de Design',
      'Decisão de gravação: conta principal higienizada + Google secundário na 1.2 · MD + prompt da varredura entregues pra LIA'
    ]},
    { data: "11/06/2026 (noite)", itens: [
      'Módulo 5 granularizado e fechado — 1 dia adiantado (18→20 de 23)',
      '5.1 o molde vira Skill (skill-creator) · 5.2 o revisor de 3 camadas · Comandos 13/14/15 criados'
    ]},
    { data: "10–11/06/2026", itens: [
      'Módulo 4 (clímax) granularizado — 5 aulas (13→18 de 23) · frases-âncora da 4.4',
      'Comando de Início criado e ensinado na 2.0 · molde-exemplo da Steph · bastidores-P1 (runbook) · numeração de materiais'
    ]},
    { data: "08/06/2026", itens: [
      'Módulo 3 "O DNA da Sua Aula" granularizado (10→13 de 23) · arquitetura em 3 camadas (cérebro/regras/molde)'
    ]},
    { data: "05/06/2026", itens: [
      'Módulos 1 e 2 — HTMLs da jornada + PDFs fechados · paleta versão A · QA com Billy fictícia'
    ]},
    { data: "04/06/2026", itens: [
      'Módulo 2 granularizado (5→10 de 23) · marca-mãe → Ensino Amplificado · Módulo 0 → Módulo 1'
    ]},
    { data: "03/06/2026", itens: [
      'Módulo 0/1 completo (5 aulas) · naming das alunas "Professora Amplificada"'
    ]},
    { data: "31/05–01/06/2026", itens: [
      'Dashboard no GitHub Pages · "Bloco"→"Módulo" · nome "Fábrica de Aulas" · cronograma de junho no Calendar'
    ]}
  ]
};
