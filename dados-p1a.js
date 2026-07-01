// ============================================================
// DADOS do Dashboard — Fábrica de Aulas (P1A)
// Regenerar o dashboard = editar SÓ este arquivo (a Letícia mantém).
// O design (dashboard-P1A.html) não se toca — decisão UX de 10/06/2026.
// Convenção: módulos do mais recente pro mais antigo (M5 → M1).
// ============================================================
window.P1A = {
  atualizado: "30/06/2026",

  kpis: [
    { n: 20, de: 20, label: "Aulas gravadas", cor: "c-green" },
    { n: 21, de: 21, label: "Transcrições", cor: "c-green" },
    { n: 5, de: 5, label: "Módulos reconstruídos (M6 aposentado)", cor: "c-green" },
    { n: 1, de: null, label: "Próximo: landing page (vídeos editados ✓)", cor: "c-amber" }
  ],
  progresso: { n: 20, de: 20 },

  recente: {
    data: "30/06/2026 (M4/M5 finalizados + vídeos editados)",
    itens: [
      '<strong>✅ M4 e M5 (HTMLs) fechados.</strong> Todos em <strong>1ª pessoa</strong>, chats reetiquetados <strong>"Steph → Fábrica"</strong> (a Billy não confunde o exemplo com o próprio script), comandos com ícone <strong>⧉</strong> e <strong>[placeholders]</strong> nos que têm inglês específico; botão removido nas ilustrações puras.',
      '<strong>M5 — Biblioteca de Efeitos virou aba interna</strong> (iframe) da Aula Final · bullet do Telegram reescrito (a Steph fala com a <strong>Letícia</strong>) · novo fecho + assinatura.',
      '<strong>4.4 §2 reescrita</strong> ("A sua formação vira técnica"): a formação já está no cérebro — o ponto é trazer o método específico em detalhe na criação do skill.',
      '<strong>🎬 Aula bônus do M5 gravada + editada</strong> ("A Fábrica na Vida Real" — teste de tempo). Decisão: <strong>bônus interno, fora do funil</strong> (velocidade é consequência, não a oferta). Transcrita + destilada na Base de Conhecimento.',
      '<strong>Vídeos editados ✓</strong> · cronograma +1 dia → landing page começa 01/07, <strong>lançamento 10/07</strong>.'
    ]
  },

  modulos: [
    {
      nome: "Módulo 5 — Aula Final 🎓",
      meta: '1 aula final + 1 bônus · <span style="color:#059669;font-weight:700">Gravadas + HTML finalizado ✓</span>',
      pill: { classe: "p-done", txt: "✓ completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "Bônus", codeLargo: true, titulo: "A Fábrica na Vida Real (teste de tempo)", nota: "vídeo bônus (sem HTML) · demonstração ao vivo · ~5 aulas em ~35 min · bônus interno, fora do funil", pill: { classe: "p-done", txt: "✓ Editado" } },
        { code: "5.0", codeLargo: true, titulo: "Agora o Céu é o Limite", nota: "imaginação + jogo da memória ao vivo + Biblioteca de Efeitos (aba interna) + Telegram/Letícia + convite ao Ensino Amplificado + história da ESLA", pill: { classe: "p-done", txt: "✓ HTML pronto" } }
      ]
    },
    {
      nome: "Módulo 4 — Sua Fábrica Ganha Repertório ⭐",
      meta: '6 aulas · ⭐ o coração da virada · <span style="color:#059669;font-weight:700">Gravado + HTMLs finalizados ✓</span>',
      pill: { classe: "p-done", txt: "✓ 6 de 6 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "4.1", titulo: "A Fábrica Entra em Ação", nota: "autoridade/dados + 1ª aula gerada ao vivo + 2 bugs", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "4.2", titulo: "A Primeira Habilidade da Sua Fábrica", nota: "FA Aula Gramatical (skill-creator) + regras da casa", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "4.3", titulo: "O Controle de Qualidade · Parte 1: o conteúdo", nota: "FA Revisor de Conteúdo", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "4.4", titulo: "A Expansão da Sua Fábrica", nota: "FA Compreensão de Texto e Pensamento Crítico (livro via Drive)", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "4.5", titulo: "O Controle de Qualidade · Parte 2: pra aula funcionar ao vivo", nota: "FA Revisor de Funcionalidades + arquivamento", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "4.6", titulo: "Transformando Perrengues em Habilidades", nota: "FA Aula Rápida Sem Material + a fábrica aprende com as próprias correções", pill: { classe: "p-done", txt: "✓ HTML pronto" } }
      ]
    },
    {
      nome: "Módulo 3 — O DNA da Sua Aula",
      meta: '3 aulas · <span style="color:#059669;font-weight:700">Gravado + HTML (Renata) + Comando de Passagem ✓</span>',
      pill: { classe: "p-done", txt: "✓ 3 de 3 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "3.1", titulo: "O Que Você Faz Sem Perceber", nota: "regras de método", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "3.2", titulo: "Aquilo Que Você Não Abre Mão", nota: "relação + limites", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "3.3", titulo: "O Seu Jeito, Escrito", nota: "→ cérebro · seeding do P2", pill: { classe: "p-done", txt: "✓ HTML pronto" } }
      ]
    },
    {
      nome: "Módulo 2 — A Arquitetura da Sua Aula",
      meta: '5 aulas · <span style="color:#059669;font-weight:700">Gravado + HTML (Renata) + Comando de Passagem ✓</span>',
      pill: { classe: "p-done", txt: "✓ 5 de 5 — completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "2.0", titulo: "Conversar Até Ficar do Seu Jeito", nota: "você é a especialista — você corrige", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "2.1", titulo: "As Partes da Sua Aula", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "2.2", titulo: "Por Que Cada Parte Existe", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "2.3", titulo: "Onde a Aula Acontece", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "2.4", titulo: "A Personalidade da Sua Aula", nota: "+ Biblioteca de Design (material de apoio)", pill: { classe: "p-done", txt: "✓ HTML pronto" } }
      ]
    },
    {
      nome: "Módulo 1 — O Nascimento da Sua Fábrica",
      meta: '6 aulas gravadas · <span style="color:#059669;font-weight:700">HTML cobre 1.3+ (1.0–1.2 = aulas de assistir) ✓</span>',
      pill: { classe: "p-done", txt: "✓ completo" },
      barra: { classe: "fill-green", pct: 100 },
      aulas: [
        { code: "1.0–1.2", codeLargo: true, titulo: "Boas-vindas · Aula assinatura · Por que o Claude", nota: "gravadas (conceituais/assistir — sem aba no HTML)", pill: { classe: "p-done", txt: "✓ Gravada" } },
        { code: "1.3", titulo: "Identidade", nota: "identidade pedagógica → cérebro", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "1.4", titulo: "O Cérebro", pill: { classe: "p-done", txt: "✓ HTML pronto" } },
        { code: "1.5", titulo: "Primeira Estrutura", nota: "⭐ microvitória", pill: { classe: "p-done", txt: "✓ HTML pronto" } }
      ]
    }
  ],

  materiaisSub: "skills da fábrica + materiais de apoio",
  materiais: [
    { status: "done", nome: "🎬 Vídeos gravados (20 aulas)", aula: "Todas", obs: "G:\\My Drive\\AI\\Leticia\\FAbrica de Aulas _ Video _ Curso" },
    { status: "done", nome: "Transcrições das 21 aulas", aula: "Todas", obs: "Leticia\\transcricoes (faster-whisper) · base do diff de edição pro P2" },
    { status: "done", nome: "HTMLs M4 (4.1–4.6) — demonstração ao vivo", aula: "Mód. 4", obs: "m4-4.1 … m4-4.6 · formato novo" },
    { status: "done", nome: "HTML M5 — Aula Final", aula: "Mód. 5", obs: "m5-5.0-agora-o-ceu-e-o-limite" },
    { status: "done", nome: "HTMLs M1–M3 (Renata) + glossário", aula: "Mód. 1–3", obs: "mantidos + Comando de Passagem" },
    { status: "done", nome: "Skill: FA Aula Gramatical", aula: "4.2", obs: "1º formato de aula" },
    { status: "done", nome: "Skill: FA Revisor de Conteúdo", aula: "4.3", obs: "confere conteúdo e fatos antes de toda aula" },
    { status: "done", nome: "Skill: FA Compreensão de Texto e Pensamento Crítico", aula: "4.4", obs: "2º formato · livro via Drive" },
    { status: "done", nome: "Skill: FA Revisor de Funcionalidades", aula: "4.5", obs: "confere botões/interações (aula funciona ao vivo)" },
    { status: "done", nome: "Skill: FA Aula Rápida Sem Material", aula: "4.6", obs: "aula de última hora · com ou sem material" },
    { status: "done", nome: "16 · Biblioteca de Efeitos", aula: "M5", obs: "material de apoio ligado na Aula Final" },
    { status: "done", nome: "18 · Biblioteca de Design", aula: "2.4", obs: "material de apoio ligado na aula de design" },
    { status: "done", nome: "17 · Glossário da Fábrica", aula: "Glossário", obs: "Comando de Passagem atualizado" },
    { status: "miss", nome: "Link da próxima turma (CTA do M5)", aula: "M5", obs: "a construir — não trava (placeholder removido do HTML)" }
  ],

  pendenciasSub: "rumo ao lançamento",
  pendencias: [
    { nivel: "high", texto: "<strong>Landing page</strong> + criativos", sub: "começa 01/07 · copy via LIA · protótipo no Claude Design → HTML · base no estudo da Julia" },
    { nivel: "norm", texto: "<strong>Revogar o PAT do GitHub</strong> (closeout de segurança)", sub: "~2 min · a Steph revoga em github.com/settings/tokens e gera um novo escopo mínimo" },
    { nivel: "norm", texto: "<strong>Link da próxima turma</strong> (CTA do M5)", sub: "não trava · placeholder já removido do HTML" },
    { nivel: "low", texto: "<strong>Polimento fino dos HTMLs</strong>: conferir a posição da caixa §2 na 4.4 + a aba Biblioteca do M5", sub: "cosmético, 2 seg, não trava" }
  ],

  marcosSub: "rumo ao lançamento",
  marcos: [
    { ativo: false, titulo: "Granularização + Teleprompters — COMPLETO 🎓", desc: "23/23 + teleprompters (jun/2026)." },
    { ativo: false, titulo: "Gravação das aulas — COMPLETO 🎬", desc: "Curso gravado · estrutura ajustada na gravação (M4=6, M5=Aula Final, M6 extinto)." },
    { ativo: false, titulo: "HTMLs reconstruídos — COMPLETO ✓", desc: "M4/M5 no formato demonstração ao vivo · M1–M3 com Comando de Passagem · nomenclatura e skills finais." },
    { ativo: false, titulo: "Edição dos vídeos — COMPLETO 🎬", desc: "Vídeos editados (30/06) · aula bônus incluída. Letícia aprende o padrão pro auto-editor do P2." },
    { ativo: true, titulo: "Landing page + Criativos", desc: "Começa 01/07 · copy via LIA · página via Claude Design → HTML. Lançamento 10/07." },
    { ativo: false, titulo: "Lançamento — coorte fundadora", desc: "Ticket R$97 · tráfego pago." }
  ],

  historico: [
    { data: "30/06/2026 (M4/M5 finalizados + vídeos editados)", latest: true, itens: [
      '✅ <strong>M4 + M5 (HTMLs) fechados</strong>: 1ª pessoa · chats "Steph → Fábrica" · ⧉ + [placeholders] nos comandos · botão removido nas ilustrações puras · 4.4 §2 reescrita · slides opção B.',
      '🎬 <strong>M5 — Biblioteca de Efeitos virou aba interna</strong> · Telegram/Letícia no fecho · aula bônus "A Fábrica na Vida Real" gravada, editada, transcrita e destilada (bônus interno, fora do funil).',
      '📅 Vídeos editados · cronograma +1 dia → <strong>lançamento 10/07</strong> · landing page começa 01/07.'
    ]},
    { data: "24/06/2026 (reconstrução pós-gravação)", itens: [
      '🎬 <strong>Curso gravado → HTMLs reconstruídos.</strong> M4 = 6 aulas (família de skills + revisores), M5 = Aula Final, <strong>M6 extinto</strong> (antigos em _retirado).',
      '<strong>Formato "demonstração ao vivo"</strong> no M4/M5 (1ª pessoa, Steph ao vivo) · M1–M3 mantêm a Renata · botões de copiar nos comandos reutilizáveis.',
      '<strong>Comando de Início → Comando de Passagem</strong> (MD de handoff) em M1–M3 + glossário.',
      '<strong>Nomenclatura final (M1–M5) fechada sem a LIA</strong> · 5 skills nomeadas · "FA Aula Rápida Sem Material" = uma skill só.',
      'Bibliotecas ligadas (Efeitos→M5, Design→M2) · análise de discurso + doc de "ouro" criados · combinado: Steph edita à mão, Letícia aprende pro P2.'
    ]},
    { data: "14/06/2026 (maratona)", itens: [
      '🎬 Curso inteiro virou teleprompter de gravação (23/23) · master no Google Doc',
      'Auditoria dos 8 ingredientes da Amanda · seeding do P2 refeito com a LIA · nome do P2 (EAA descritivo)'
    ]},
    { data: "12/06/2026", itens: [
      '🎓 Granularização completa (23/23, 4 dias adiantado) · M6 + Aula Final fechados',
      'Materiais: Biblioteca de Efeitos · Glossário · PDFs · Biblioteca de Design'
    ]},
    { data: "08–11/06/2026", itens: [
      'Módulos 3, 4 (clímax) e 5 granularizados · Comandos criados · molde-exemplo da Steph'
    ]},
    { data: "31/05–05/06/2026", itens: [
      'Módulos 1 e 2 · dashboard no GitHub Pages · nome "Fábrica de Aulas" · marca-mãe Ensino Amplificado'
    ]}
  ]
};
