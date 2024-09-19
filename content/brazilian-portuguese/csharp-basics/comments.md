---
title: "Comentários"
description: "Introduzir comentários em C#."
date: 2024-09-16T00:00:00Z
weight: 3
---

## Fazer um Comentário

Ao criar um programa em C#, podemos anotar algumas notas adicionando um comentário de uma linha usando `//` ou um comentário de várias linhas usando `/*` e `*/` (Nota: As instruções nas atividades anteriores foram escritas como comentários).

Além disso, adicionar comentários não afetará o programa de forma alguma. Assim, você pode adicionar comentários no seu código para documentar como ele funciona para você e outros programadores.

```c#
     // exemplo de comentário de uma linha

     /* exemplo
      * de comentário
      * de várias linhas */
```

## Brincar com Comentários

No quadro do .NET Fiddle abaixo, adicione um comentário de linha única e um comentário de várias linhas ao seu programa.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/TTAhVm" frameborder="0"></iframe>

{{% notice tip %}}

Você pode comentar seu código para que o computador não o execute.

```c#
Console.Write("Eu gosto de comer");
// Console.Write("maçãs.");
```

Irá escrever "Eu gosto de comer" no console, mas não escreverá "maçãs".
{{% /notice %}}