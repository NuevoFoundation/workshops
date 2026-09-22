---
title: "Código e interatividade"
date: 2026-09-14T00:00:00-07:00
draft: false
weight: 9
---

Os workshops são interativos. Os estudantes devem ser capazes de executar códigos, ver os resultados e experimentar. Este guia aborda como incorporar editores de código e elementos interativos.

## Blocos de código embutidos

Para exemplos de código que os estudantes leem, mas não executam diretamente, use blocos de código cercados padrão do markdown com indicações de linguagem:

````markdown
```python
print("Olá, Mundo!")
```
````

As linguagens suportadas incluem `python`, `html`, `css`, `javascript`, `csharp`, `java`, `sql`, `bash` e muitas outras.

## Editores de código incorporados

Para atividades onde os estudantes escrevem e executam código, incorpore um editor interativo. Aqui estão as plataformas que usamos:

### Replit

Ideal para Python, JavaScript e programação de propósito geral. Use o domínio `replit.com` para novos embeds (workshops mais antigos podem usar `repl.it`, que ainda redireciona).

```html
<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/python-basics" target="_blank">Abrir Replit</a>
```

Ou incorpore diretamente:

```html
<iframe height="600" width="100%" src="https://replit.com/@nuevofoundation/python-basics" title="Código e interatividade - Editor Replit" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
```

Nota: workshops antigos incluem `?lite=true` nos URLs do Replit. Este parâmetro não está mais ativo e pode ser omitido de novos embeds.

### Codebunga

Não adicione novos links ou embeds do Trinket. As integrações existentes do Trinket permanecem no repositório temporariamente e estão marcadas como `TODO-IDE-Replace` até que uma migração para um IDE de navegador suportado seja concluída.

Exemplo legado:

```html
<iframe src="https://codebunga.com/embed/7s5rkuud" title="Código e interatividade - Editor Codebunga" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```

### .NET Fiddle

Melhor para programas em C#.

```html
<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/abc123" title="Código e interatividade - Editor .NET Fiddle" frameborder="0"></iframe>
```

### CodePen

Ideal para projetos web em HTML/CSS/JavaScript. Neste repositório, o CodePen é tipicamente usado como um botão de link em vez de um embed embutido:

```html
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/exxyYL" target="_blank">Experimente você mesmo!</a>
```

## Elementos HTML interativos

Para interatividade personalizada (quizzes, arrastar e soltar, botões), você pode usar HTML bruto diretamente no markdown (a renderização `unsafe` do Hugo está ativada neste site). Alternativamente, use o shortcode `rawhtml`:

```
{{</* rawhtml */>}}
<button onclick="alert('Correto!')">Clique em mim</button>
{{</* /rawhtml */>}}
```

Isso permite HTML, CSS e JavaScript arbitrários dentro de uma página do workshop.

## Estrutura de desafios

Uma boa atividade segue este padrão:

1. **Explique** o conceito com uma breve descrição
2. **Mostre** um exemplo com um bloco de código
3. **Desafie** o estudante a escrever seu próprio código
4. **Dica** usando um shortcode de aviso:

```
{{% notice tip %}}
Lembre-se de usar parênteses ao chamar uma função!
{{% /notice %}}
```

## Dicas

- Sempre forneça um **ponto de partida funcional** para evitar deixar os estudantes olhando para um editor vazio
- Teste todos os links incorporados antes de enviar.
- Configure `height="600"` como ponto de partida para editores incorporados e ajuste conforme necessário
- Adicione um link funcional para fallback abaixo dos iframes caso a incorporação seja bloqueada, como: "Não consegue ver o editor? Abra em uma nova aba."
- Mantenha os exemplos de código curtos e concisos. Se um exemplo ultrapassar 20 linhas, considere dividi-lo em etapas.

## Consulte também

- [Formatação](../formatting) — Shortcodes visuais (alertas, botões, avisos, expandir)
- [Tags e Metadados](../tags-and-metadata) — Campos de frontmatter para todos os tipos de página