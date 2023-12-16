---
title: "Como o site é construído"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 1
---

# Como o site é construído

O conteúdo do subdomínio dos workshops é construído usando o tema [DocDock](https://docdock.netlify.com/) para Hugo. [Hugo](https://gohugo.io) é um gerador de sites estáticos com vários benefícios:

1. **Os autores de conteúdo** podem se concentrar no conteúdo usando markdown mas não na implementação técnica do site ou no estilo CSS/página. Os workshops são adicionados *automagicamente* ao índice esquerdo e à página inicial dos workshops. Hugo funciona muito bem localmente (ex: em um avião) e Hugo é o gerador de sites estáticos mais rápido, construindo todo o site do workshop em <2 segundos.
2. **Os alunos** se beneficiam de uma experiência do usuário consistente em workshops, acessibilidade integrada, localização, design responsivo compatível com dispositivos móveis para desktop, links automatizados para o repositório GitHub e desempenho global rápido do site usando o CDN do Azure.
3. A **Nuevo Dev Team** se beneficia da capacidade de criar e personalizar páginas do workshop, incluindo modelos de página personalizados, [controles de página integrados para alertas, notas, botões, avisos e muito mais](https://workshops.nuevofoundation. org/guidelines/formatting/), controles personalizados (por exemplo: o cabeçalho Nuevo), interatividade iframe, metadados personalizados, links automatizados entre páginas, temas de páginas, criação automatizada de mapa do site, ícones integrados e automação integrada usando GitHub Ações e Azure DevOps para build/implantação.