---
title: "Imprimir declarações e comentários"
description: "Introduzir métodos println() e comentários em Java."
date: 2021-10-13T00:00:00Z
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/uYoq-4juYBY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Deixe o programa falar!

Vamos tentar escrever um programa que diga `Hello World` (Olá Mundo) digitando a linha de código `System.out.print("Hello World");` 

O programa imprime tudo o que você digitou entre parênteses de `System.out.print`. E cada linha de código termina com `;`.

Depois, adicione mais instruções para imprimir números colocando números entre parênteses (ou seja, `System.out.print(2020)`) ou um símbolo colocando um símbolo entre 2 aspas simples `'` (i.e. `System.out.print('@')`).

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsHelloWorld" target="_blank">Launch Replit</a>

{{% notice tip %}}
### Você notou que todas as afirmações que você digitou foram impressas em uma linha?

Às vezes queremos inserir uma nova linha ao digitar.
Para fazer isso, digitamos um código ligeiramente diferente `System.out.println();`

(Nota: digitamos `println` em vez de `print` para criar uma nova linha após)

Volte e experimente. Faça com que todas as declarações sejam impressas em linhas diferentes!
{{% /notice %}}

{{% notice tip %}}
### Como imprimir vários símbolos em uma linha de código?

Aprendemos que para imprimir símbolos nós os colocamos entre 2 aspas simples `'`, mas como imprimimos vários símbolos em uma linha?

Podemos simplesmente colocá-los entre 2 aspas duplas `"` (i.e. `System.out.print("@ , - h A #");`)

{{% /notice %}}

{{% notice tip %}}
### !! Importante !! Às vezes você não pode simplesmente colocar caracteres entre " "

Ao colocar caracteres entre `" "` em uma instrução de impressão, às vezes é fácil confundir o computador sobre quais caracteres imprimir.

Por exemplo, como dizemos ao computador para imprimir `"`?

Se você digitar `System.out.print(""");`, você receberá um erro! porque o computador não consegue identificar onde termina o texto!

Em vez disso, certos caracteres precisam ser  <b>escapados</b> adicionando um `\` na frente deles.

     System.out.print("\"");  // isso imprime "

Outros caracteres que precisam ser escapados em Java incluem: `'`, `"`, `\`.
{{% /notice %}}

## Imprimir uma Coruja

Vamos conhecer 🐥 o primeiro amigo de Patrick, a coruja Minerva 🦉!

Use o que você acabou de aprender e recrie a coruja abaixo usando apenas 4 linhas de código! (Crédito da arte: asciiart.eu/animals/birds-land)

        , ___    / ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ ‾ \
     `\/{o,o}  <  Oi, Eu sou Minerva, amiga do Patrick! |
      / /)  )    \ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ /
     /,--"-"- 


<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/JavaBasicsOwl" target="_blank">Launch Replit</a>

{{% notice warning %}}
#### Eu recebi um erro!

     Main.java:4: error: reached end of file while parsing
Se você receber um erro como este, é possível que você tenha esquecido de escapar de caracteres como `"` e `\`.

Releia a terceira dica acima para ver como escapar caracteres em uma instrução print!
{{% /notice %}}

## Faça um comentário

Ao criar um programa Java, podemos fazer algumas anotações adicionando um comentário de uma linha usando `//` ou comentário de várias linhas usando `/*` e `*/` (Nota: as instruções nas atividades anteriores foram escritas como comentários).

Além disso, adicionar comentários não afetará de forma alguma o programa. Assim, você pode adicionar notas com comentários em todo o seu código!

     // amostra de comentário de uma linha
     /* amostra de
      * comentário de
      * várias linhas */