---
title: "Como o site é construído"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 1
---

# Como o site é construído

The workshops subdomain content is built using the [DocDock](https://docdock.netlify.com/) theme for Hugo. [Hugo](https://gohugo.io) is a static site generator with a number of benefits:

1. **Os autores de conteúdo** podem se concentrar no conteúdo usando markdown e não na implementação técnica do site ou estilo de página/CSS. Os workshops são *automagicamente* adicionados ao índice esquerdo e à página inicial dos workshops. Hugo funciona muito bem localmente (ex: em um avião), e Hugo é o gerador de site estático mais rápido, construindo todo o site da oficina em menos de 2 segundos.
2. **Alunos** se beneficiam de um UX consistente em todos os workshops, acessibilidade integrada, localização, design responsivo compatível com dispositivos móveis para desktop, links automatizados para o repositório GitHub e rápido desempenho global do site usando o CDN do Azure.
3. **Nuevo Dev Team** se beneficia da capacidade de criar e personalizar páginas de workshop, incluindo modelos de página personalizados, [controles de página integrados para alertas, notas, botões, avisos e muito mais](https://workshops.nuevofoundation.org/guidelines/formatting/), controles personalizados (por exemplo: o cabeçalho Nuevo), interatividade de iframe, metadados personalizados, vinculação automática entre páginas, temas de página, criação automatizada de mapas de sites, ícones integrados e automação integrada usando GitHub Actions e Azure DevOps para compilação/implantação .