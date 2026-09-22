---
title: "Guia para voluntários de traduções"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 6
---

Obrigado por ajudar a tornar os workshops acessíveis para mais crianças ao redor do mundo! Este guia explica como traduzir um workshop existente para um novo idioma.

## Antes de começar

1. Verifique se o workshop já existe no idioma de destino. Navegue pelo diretório `content/` para encontrar as pastas de idiomas:

| Pasta | Idioma |
|-------|--------|
| `content/english/` | Inglês |
| `content/espanol/` | Espanhol |
| `content/brazilian-portuguese/` | Português Brasileiro |
| `content/korean/` | Coreano |
| `content/francais/` | Francês |
| `content/german/` | Alemão |
| `content/simplified-chinese/` | Chinês Simplificado |
| `content/traditional-chinese/` | Chinês Tradicional |
| `content/kyrgyz/` | Quirguiz |

2. Abra uma [solicitação de tradução](https://github.com/NuevoFoundation/workshops/issues/new) no GitHub para que outros saibam que você está trabalhando nisso.

## Como funcionam as traduções

Cada idioma tem seu próprio diretório em `content/`. A estrutura de pastas dentro de cada idioma reflete a versão em inglês:

```
content/
  english/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
  espanol/
    python-basics/
      _index.md
      basics/
        writing-to-console.md
      img/
        screenshot.png
```

## Passo a passo

### 1. Copie o workshop em inglês

Copie toda a pasta do workshop em inglês para o diretório do idioma de destino:

```bash
cp -r content/english/python-basics content/espanol/python-basics
```

### 2. Traduza o conteúdo

Para cada arquivo `.md`:

- **Traduza** todo o texto visível (títulos, parágrafos, instruções, dicas)
- **Mantenha** todas as chaves do frontmatter do Hugo em inglês (`title`, `date`, `draft`, `weight`, etc.)
- **Traduza** os valores do frontmatter (`title: "Python: Conceitos básicos"`)
- **Mantenha** todos os exemplos de código em inglês (o código é universal)
- **Traduza** comentários no código, se existirem
- **Mantenha** todos os caminhos de arquivos, referências de imagens e shortcodes do Hugo inalterados
- **Traduza** o texto alternativo das imagens para o idioma de destino

### 3. Lide com as imagens

- **Imagens compartilhadas** (capturas de tela de código, diagramas): Copie a pasta `img/` ou `media/` em inglês para sua tradução. Os arquivos de imagem são os mesmos em todos os idiomas.
- **Imagens com muito texto** (imagens contendo texto em inglês): Se possível, crie versões localizadas. Caso contrário, mantenha a versão em inglês e anote isso em seu PR.
- **Texto alternativo**: Sempre traduza o texto alternativo para o idioma de destino. Leitores de tela usam as configurações de idioma da página.

### 4. Teste localmente

```bash
hugo server -D
```

Navegue pelo workshop traduzido e verifique:
- Todas as páginas carregam sem erros
- As imagens são exibidas corretamente
- A navegação funciona (Índice, próximo/anterior)
- Exemplos de código estão intactos

### 5. Envie seu PR

- Título: `Tradução: [nome-do-workshop] para [idioma]`
- Descrição: Liste todos os arquivos traduzidos e quaisquer imagens que ainda contenham texto em inglês
- Certifique-se de traduzir **o workshop inteiro**, e não apenas a página inicial

## Dicas

- Siga o workshop como um estudante faria. Se algo não fizer sentido na tradução, reformule.
- Mantenha as frases curtas e claras. Esses workshops são para crianças entre 8 e 18 anos.
- Em caso de dúvida sobre um termo técnico, mantenha o termo em inglês e adicione uma breve explicação no idioma de destino.
- Não traduza nomes de workshops em URLs ou nomes de pastas — eles devem permanecer em inglês para o roteamento do Hugo.

## Notas específicas para o idioma

### Espanhol

- Use a conjugação de verbos na forma **tú** para maior acessibilidade na América Latina (não utilize o voseo)
- Traduza os comentários de código, mas mantenha os nomes de variáveis e funções em inglês
- Termos técnicos como "string", "loop", "function" podem permanecer em inglês com uma breve explicação em espanhol na primeira vez que aparecerem