---
title: "Tags e metadados"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 10
---

Toda página de workshop utiliza frontmatter YAML para controlar como aparece no site. Este guia explica cada campo e quando utilizá-lo.

## Frontmatter obrigatório

Todo arquivo Markdown precisa, no mínimo:

```yaml
---
title: "Título da Página"
date: 2026-09-16T00:00:00-07:00
draft: false
---
```

| Campo  | Propósito                                    | Exemplo              |
|--------|---------------------------------------------|----------------------|
| `title` | Título exibido na navegação e no cabeçalho da página | `"Python: Básico"`    |
| `date`  | Data da última atualização (exibida no site) | `2026-09-16T00:00:00-07:00` |
| `draft` | `false` para publicado, `true` para em progresso | `false`              |

## Campos da página inicial do workshop

O arquivo `_index.md` de um workshop suporta campos adicionais:

```yaml
---
title: "Python: Básico"
description: "Aprenda fundamentos de Python incluindo variáveis, loops e funções"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["programacao-basica"]
difficulties: ["iniciante"]
prereq: "Nenhum"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

| Campo        | Propósito                              | Valores              |
|--------------|---------------------------------------|---------------------|
| `description` | Resumo curto exibido nas listagens          | Texto livre          |
| `language`    | Filtro de linguagem de programação          | Um token de `data/taxonomy.yaml` |
| `topics`      | Filtros de tópicos                         | Um ou mais tokens de `data/taxonomy.yaml` |
| `difficulties`| Filtros de dificuldade                     | Um ou mais tokens de `data/taxonomy.yaml` |
| `prereq`      | Pré-requisitos                            | `"Nenhum"` ou nome do workshop |
| `hidden`      | Ocultar da navegação                      | `true` / `false`    |
| `alwaysopen`  | Comportamento de expansão do TOC          | `false` (recomendado) |
| `icon`        | Ícone Font Awesome para a página inicial   | Ver ícones abaixo    |
| `weight`      | Ordem de classificação na navegação        | Número (menor = primeiro) |

Os campos `language`, `topics` e `difficulties` determinam como um workshop aparece nos filtros da aba Workshops. Utilize apenas os valores controlados em `data/taxonomy.yaml`. Valores desconhecidos não criam novas opções de filtro.

Exemplo:

```yaml
language: "javascript"
topics: ["jogos", "web"]
difficulties: ["iniciante"]
```

## Ícones comuns

A página inicial exibe um ícone para cada workshop. Utilize classes do [Font Awesome](https://fontawesome.com/icons) no campo `icon` do frontmatter:

| Classe         | Indicado para                         |
|----------------|--------------------------------------|
| `fab fa-python`  | Workshops de Python                |
| `fab fa-html5`    | Workshops de HTML/web             |
| `fab fa-js`       | Workshops de JavaScript           |
| `fas fa-laptop-code` | Programação geral               |
| `fas fa-microchip`   | Hardware/Arduino               |
| `fas fa-shield-alt`   | Workshops de segurança         |
| `fas fa-database`     | Workshops de SQL/dados         |
| `fas fa-code`         | Geral (default)               |
| `fas fa-gamepad`      | Workshops de jogos            |
| `fas fa-music`        | Música / áudio                |

## Campos de página de atividade

As páginas de atividade são mais simples:

```yaml
---
title: "Atividade 1: Hello World"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 3
---
```

## Campos de página de respostas

Gabaritos devem ser ocultados da navegação:

```yaml
---
title: "Python: Básico - Gabarito"
date: 2026-09-16T00:00:00-07:00
draft: false
weight: 15
hidden: true
---
```

## O campo date

O campo `date` é exibido no rodapé de cada página do site. Atualize-o sempre que realizar mudanças significativas em uma página para que os visitantes saibam que o conteúdo está atual.

Formato: `YYYY-MM-DDTHH:MM:SS-07:00` (ISO 8601 com fuso horário) ou `YYYY-MM-DD` (apenas data).

## Dicas para YAML

- Sempre coloque valores de string entre aspas duplas se contiverem dois pontos: `title: "Python: Básico"`
- Valores booleanos não precisam de aspas: `draft: false`
- Não use tabulações — YAML exige espaços para indentação
- O frontmatter deve estar entre delimitadores `---` no topo do arquivo.