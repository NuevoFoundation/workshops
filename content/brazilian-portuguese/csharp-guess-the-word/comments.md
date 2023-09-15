---
title: "Comentários"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 2
---

## Comentários

Os desenvolvedores geralmente precisam colaborar com outros desenvolvedores. Os comentários são uma maneira fácil para os desenvolvedores escreverem notas no código e se comunicarem com outras pessoas. Os comentários são ignorados pelo computador; Assim, eles também são uma maneira fácil de dizer ao computador para não executar certas linhas de código. Há duas maneiras de criar comentários:

1. Para comentar uma linha, coloque `//` na frente de uma linha de código. Por exemplo:

```csharp
// Este é um comentário de linha única.
```

2. Para comentar várias linhas de uma só vez, indique o início do comentário com `/*` e o final do comentário com `*/`. Por exemplo:

```csharp
/* Este é um comentário de várias linhas.
   Esta linha também faz parte do comentário. */
```
Para remover um comentário (ou cancelar o comentário de uma linha), basta excluir o `//` para um comentário de linha única, ou os caracteres `/*`  e `*/` para o comentário de várias linhas.

{{% notice tip %}}

## Trabalhando juntos

1. Coloque `//` em frente do `Console.WriteLine("Hello World");`. Depois de pressionar **run**, verifique se 'Hello World' não está impresso no console.
2. Exclua o `//` e, em vez disso, envolva `Console.WriteLine("Hello World");` com `/*` e `*/`. Verifique se 'Hello World' ainda não está impresso no console depois de pressionar **run**.
3. Exclua `/*` e `*/`, e pressione **run**. `Hello World` agora deve ser impresso no console.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/NF-CSharp-WritingToConsole" target="_blank">Executar Replit</a>

Ao longo da atividade de hoje, você verá vários comentários de várias linhas e comentários '// TODO'. Esses comentários nos guiarão para completar o jogo Adivinhe o Word, então certifique-se de entender como comentar e descomentar o código.

{{% /notice %}}
