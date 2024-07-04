---
title: "C: O processo de depuração"
description: "Uma introdução à depuração de programas"
date: 2021-10-13T00:00:00Z
difficulty: "Intermediário"
prereq: "C"
icon: ""
draft: false
---

## Introdução

Então, você aprendeu o básico de uma linguagem de programação. Você provavelmente já domina a arte de `“Hello World”` e iniciou um projeto pessoal ou seguiu tutoriais suficientes para ser capaz de transformar uma ideia em código.

No entanto, o que acontece quando o seu código não consegue compilar? Iniciantes em programação geralmente pesquisam online para ver se outras pessoas encontraram problemas semelhantes. Isso é um pouco tedioso, pois você precisa recorrer à Internet sempre que encontrar um erro.

O que acontece quando seu programa compila, mas não funciona da maneira que você espera (ou seja, você encontrou **um bug? 🪲)**

Voltar para corrigir seu código pode ser um desafio mais difícil do que escrever o código em si. Aprender como navegar por esses bugs e erros exige habilidade, paciência e experiência. Neste workshop, desvendaremos o processo básico para depurar seu código. Lembre-se de que a depuração faz parte de todas as linguagens de programação.

{{% panel theme="info" header="Por que chamar isso de bug?"%}}
O primeiro bug de programação registrado foi em 1947, quando uma mariposa decidiu estar no lugar errado. Confira [O primeiro bug de computador do mundo.](https://education.nationalgeographic.org/resource/worlds-first-computer-bug)

{{% /panel %}}

## Sobre este workshop

Este workshop pressupõe que você entenda e seja capaz de escrever código na linguagem de programação **C**. Os exemplos utilizados neste workshop fazem uso de estruturas de dados e algoritmos, tópicos que normalmente são ensinados em um curso introdutório à ciência da computação. Teremos uma breve explicação sobre eles, mas pretende ser uma atualização para que você tenha uma ideia do que o código de exemplo está fazendo. Este workshop também pressupõe que você já tenha uma conta no [Replit](https://replit.com) e esteja familiarizado com o Replit.

## Replit e a linha de comando

Vamos tentar usar o Replit para executar algum código e nos familiarizar mais com a linha de comando. Clique no botão "Iniciar Replit" abaixo e faça um fork do programa. Quando o programa Replit abrir, abra a guia **Shell**.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Iniciar Replit</a>

Primeiro vamos compilar nosso código. Na guia shell, digite o seguinte e clique em **ENTER**:

```bash
make HelloWorld
```

Depois de compilar nosso código, precisamos usar um comando diferente para executá-lo. Digite o seguinte e clique em **ENTER**:

```bash
./examples/HelloWorld
```

Você deverá ver um texto `Hello, World!` impresso no shell!

{{% panel theme="info" header="Por que usar a linha de comando?"%}}

A linha de comando pode parecer pouco intuitiva e amigável para iniciantes. Porém, saber utilizá-lo é extremamente importante para sua carreira de programação. Iremos usá-lo para executar `gdb` e `valgrind` posteriormente no workshop, então quanto mais experiência você tiver com ele, melhor!

Os exemplos foram escritos em um único Replit. Forneceremos todos os comandos que você precisa saber para compilá-los e executá-los, então não se preocupe se ainda não usou a linha de comando.

{{% /panel %}}

## Conteúdos do Workshop

{{% children /%}}