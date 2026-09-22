```yaml
---
title: "Navegação"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 8
---
```

O Hugo utiliza metadados no frontmatter de cada arquivo markdown para controlar como as páginas aparecem na navegação do site. Este guia aborda as configurações principais.

## Ordenação de páginas com weight

O campo `weight` controla a ordem das páginas na barra lateral esquerda e na tabela de conteúdos. Números menores aparecem primeiro.

```yaml
---
title: "Atividade 1: Iniciando"
weight: 3
---
```

**Esquema de pesos recomendado:**

| Tipo de página         | Peso   | Exemplo            |
|------------------------|--------|--------------------|
| `_index.md` (página inicial) | 1      | Introdução ao workshop |
| Configuração / pré-requisitos | 2      | Ferramentas necessárias |
| Atividades            | 3, 4, 5... | Atividade 1, 2, 3 |
| Gabarito              | 15+    | Oculto na navegação |

Deixe intervalos entre os pesos das atividades se você espera inserir páginas posteriormente (por exemplo, use 3, 5, 7 em vez de 3, 4, 5).

## Controle da tabela de conteúdos

### TOC Recolhível (recomendado)

Os workshops devem começar com uma introdução visível e a lista de atividades recolhida:

```yaml
---
title: "Python: Fundamentos"
alwaysopen: false
---
```

Com `alwaysopen: false`, as páginas filhas aparecem como uma árvore recolhível na barra lateral. Os estudantes podem expandir as seções conforme avançam.

### TOC Expandido

Para workshops muito curtos (3 atividades ou menos), você pode querer que todas as seções estejam visíveis:

```yaml
---
title: "Workshop Curto"
alwaysopen: true
---
```

## Ocultação de páginas

### Páginas ocultas (geradas, mas não aparecem na navegação)

Use `hidden: true` para páginas que devem existir, mas não aparecer na navegação da barra lateral. Os estudantes ainda podem acessá-las via links diretos.

```yaml
---
title: "Gabarito"
hidden: true
---
```

Usos comuns: gabaritos, notas do instrutor, conteúdo extra.

### Páginas rascunho (não incluídas na produção)

Use `draft: true` para trabalhos em andamento que não devem aparecer no site publicado:

```yaml
---
title: "Workshop Inacabado"
draft: true
---
```

Páginas rascunho aparecem apenas quando executadas com `hugo server -D` (o parâmetro `-D` inclui rascunhos).

## O shortcode children

Para mostrar uma lista de páginas filhas em uma página inicial, use o shortcode `children` dentro de um elemento de detalhes recolhível:

```html
<details>
<summary>Tabela de Conteúdos</summary>
{{% children /%}}
</details>
```

Isso renderiza uma tabela de conteúdos limpa e recolhível, que os estudantes podem expandir quando estiverem prontos. Alguns workshops existentes usam `<details open>` para um padrão expandido.

## Template de página inicial do workshop

Aqui está um exemplo completo de frontmatter para `_index.md`:

```yaml
---
title: "Python: Fundamentos"
description: "Aprenda os fundamentos de Python"
date: 2026-09-16T00:00:00-07:00
language: "python"
topics: ["fundamentos-de-programação"]
difficulties: ["iniciante"]
prereq: "Nenhum"
draft: false
hidden: false
alwaysopen: false
icon: "fab fa-python"
weight: 1
---
```

## Dicas

- Teste mudanças na navegação localmente com `hugo server -D` antes de enviar
- Certifique-se de que gabaritos estão configurados como `hidden: true` para que os estudantes não os vejam
- Mantenha os números de peso consistentes dentro de um workshop
- Se você reorganizar páginas, atualize todos os pesos para evitar lacunas ou colisões