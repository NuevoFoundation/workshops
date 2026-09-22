---
title: "Imagens e GIFs"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 7
---

Imagens tornam os workshops mais envolventes para jovens aprendizes. Siga estas diretrizes para garantir que as imagens sejam acessíveis, tenham tamanho adequado e funcionem em todas as plataformas.

## Dimensionamento de Imagens

Nunca deixe imagens sem restrições de largura. Sem um atributo `width`, as imagens são renderizadas no tamanho original, que geralmente é muito grande para a área de conteúdo.

| Tipo de imagem            | Largura alvo | Exemplo                    |
|---------------------------|--------------|--------------------------|
| Capturas de tela completas (Replit, IDE) | 60%         | Caixa de upload do Replit |
| Saída de código / terminal        | 70%         | Resultados do dotnetfiddle |
| Diagramas conceituais       | 50%         | Teoria das cores, estruturas de dados |
| Exemplos de fotos           | 40-50%      | Imagens de gatos com python-pixel |
| Ícones pequenos / badges       | 15-25%      | Tabelas, pequenos diagramas |
| Arte decorativa             | 20-30%      | Ilustrações de personagens |
| Imagens hero                | 100%        | Apenas na página inicial `_index.md` |

**Use porcentagens, não pixels.** Larguras em porcentagem são responsivas e se ajustam em dispositivos móveis e tablets. Larguras em pixel podem ultrapassar os limites em telas menores.

```markdown
<!-- Correto: responsivo -->
<img src="../media/screenshot.png" alt="Editor de código do Replit" width="60%">

<!-- Evitar: largura fixa em pixels -->
<img src="../media/screenshot.png" alt="Editor de código do Replit" width="900px">
```

## Adicionando Imagens

### Método 1: Sintaxe Markdown

```markdown
![Descrição da imagem](../media/filename.png)
```

### Método 2: Tag HTML img (quando precisa de controle de largura)

```html
<img src="../media/filename.png" alt="Descrição da imagem" width="50%">
```

### Método 3: Shortcode Hugo figure

```
{{</* figure src="../media/filename.png" alt="Descrição" width="50%" */>}}
```

O shortcode `figure` envolve as imagens em um elemento `<figure>`. Nota: a maioria dos workshops existentes usa as abordagens em Markdown ou HTML acima. Workshops mais antigos podem usar `img/` em vez de `media/` — ambos funcionam de forma idêntica.

## Acessibilidade (texto alternativo alt)

Toda imagem **deve** ter um texto alternativo descritivo. Isso é inegociável.

| Faça | Não faça |
|------|----------|
| `alt="Editor de código do Replit mostrando um programa de hello world em Python"` | `alt="captura de tela"` |
| `alt="Diagrama de cores RGB com círculos vermelho, verde e azul se sobrepondo"` | `alt="imagem"` |
| `alt=""` (para imagens puramente decorativas, como separadores) | `alt="Não é possível carregar a imagem"` |

Para workshops traduzidos, o texto alternativo deve estar no idioma da página:
- Inglês: `alt="A friendly chatbot welcoming users"`
- Português: `alt="Um chatbot amigável dando boas-vindas aos usuários"`
- Coreano: `alt="사용자를 환영하는 친근한 챗봇"`

## Nomeação de Arquivos

- Use **extensões minúsculas**: `.png`, `.jpg`, `.gif` (não `.PNG`, `.JPG`)
- Use **nomes descritivos**: `replit-upload-dialog.png` (não `img1.png`)
- Use **hifens** para separar palavras: `color-theory-diagram.png` (não `color_theory_diagram.png`)
- Mantenha os nomes curtos, mas significativos

## Localização das Imagens

Novos workshops devem usar um diretório `media/` (o script scaffold gera isso automaticamente). Alguns workshops antigos usam `img/` em vez disso — ambos funcionam da mesma forma no Hugo.

```
content/portuguese/meu-workshop/
  _index.md
  activity-1.md
  media/             <-- imagens aqui
    screenshot.png
    diagram.png
```

Referencie as imagens com caminhos relativos a partir da página. Em `_index.md`, use `media/image.png`. Em páginas de atividades e respostas, use `../media/image.png` (elas são renderizadas um nível mais fundo no Hugo).

{{% notice warning %}}
O Hugo resolve caminhos relativos a partir da **URL da página**, não da localização no sistema de arquivos. Para páginas filhas em `/workshop/section/activity/`, o caminho `../media/file.png` resolve para `/workshop/media/file.png`. Esse é o padrão correto. Não "corrija" esses caminhos `../` — eles são intencionais.
{{% /notice %}}

## GIFs

Os GIFs são excelentes para mostrar interações curtas (clicar em botões, arrastar elementos). Mantenha-os:

- **Curtos**: Máximo de 5-15 segundos
- **Pequenos**: Menos de 2 MB, se possível (GIFs grandes tornam o carregamento da página mais lento)
- **Claros**: Use uma taxa de quadros razoável. Gravações de tela a 10-15fps funcionam bem.
- **Acessíveis**: Adicione texto alternativo descrevendo o que o GIF mostra

Considere usar uma imagem estática com uma legenda em vez de um GIF, se a animação não for essencial para a compreensão.

## Capturas de Tela

Ao tirar capturas de tela para workshops:

1. **Recorte de forma precisa** a área relevante
2. **Use um ambiente limpo** (sem favoritos pessoais, notificações, etc.)
3. **Tamanho consistente** dentro de um workshop (não misture capturas de tela em 1080p e 4K)
4. **Destaque a área relevante** se a captura incluir muita interface de usuário