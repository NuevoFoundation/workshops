---
title: "Comentários"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 2
---

## Comentários

Desenvolvedores muitas vezes precisam colaborar com outros desenvolvedores. Comentários são uma forma fácil de escrever notas no código e se comunicar com os outros. Os comentários são ignorados pelo computador; portanto, também são uma maneira de dizer ao computador para não executar certas linhas de código. Existem duas formas de criar comentários:

1. Para comentar uma única linha, coloque `//` na frente da linha de código. Por exemplo:

`// This is a single-line comment.`

2. Para comentar várias linhas de uma vez, use `/*` no início do comentário e `*/` no final. Por exemplo:

`/* This is a multi-line comment. This line is also part of the comment. */`

Para remover um comentário (ou descomentar uma linha), basta apagar o `//` no caso de comentários de uma linha, ou apagar os caracteres `/*` e `*/` no caso de comentários em bloco.

{{% notice tip %}}

## Trabalhando Juntos

1. Coloque `//` na frente de `Console.WriteLine("Hello World");`. Depois de apertar **run**, verifique se `Hello World` não aparece no console.
2. Apague o `//` e, em vez disso, coloque `/*` e `*/` em volta de `Console.WriteLine("Hello World");`. Confira se `Hello World` continua não aparecendo no console depois de apertar **run**.
3. Apague tanto `/*` quanto `*/`, e aperte **run**. Agora `Hello World` deve ser mostrado no console.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/pdWOTp" frameborder="0"></iframe>

Durante a atividade de hoje você verá vários comentários de múltiplas linhas e `// TODO`. Esses comentários vão nos guiar para completar o jogo Adivinhe a Palavra, então tenha certeza de que entende como comentar e descomentar código.

{{% /notice %}}
