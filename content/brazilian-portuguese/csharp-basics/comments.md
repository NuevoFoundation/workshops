---
title: "Comentários"
description: "Introdução a comentários em C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Fazer um Comentário

Ao criar um programa em C#, podemos anotar algumas notas adicionando um comentário de uma linha usando `//` ou um comentário de várias linhas usando `/*` e `*/`. (Nota: As instruções das atividades anteriores foram escritas como comentários).

Além disso, adicionar comentários não afetará o programa de forma alguma. Então, você pode adicionar comentários ao longo do seu código para documentar como ele funciona para você e outros programadores.

```c#
     // exemplo de comentário de uma linha

     /* exemplo de
      * comentário de várias
      * linhas */
```

## Brincar com Comentários

No quadro .NET Fiddle abaixo, adicione um comentário de uma linha e um comentário de várias linhas ao seu programa.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

Você pode comentar seu código para que o computador não o execute.

```c#
Console.Write("Eu gosto de comer");
// Console.Write("maçãs.");
```

Irá escrever "Eu gosto de comer" no console, mas não irá escrever "maçãs".
{{% /notice %}}