---
title: "C: O Processo de Depuração"
description: "Uma introdução à depuração de programas"
date: 2021-10-13T00:00:00Z
difficulty: "Intermediário"
prereq: "C"
icon: ""
draft: false
---

## Introdução

Então, você já aprendeu o básico de uma linguagem de programação. Provavelmente já fez o famoso `“Hello World”` e começou um projeto pessoal ou seguiu tutoriais suficientes para transformar uma ideia em código.

Mas o que acontece quando seu código não compila? Quem está começando a programar geralmente procura na internet para ver se outras pessoas tiveram o mesmo problema. Isso pode ser cansativo, pois você teria que pesquisar toda vez que aparecer um erro.

E quando seu programa compila, mas não funciona do jeito que você esperava? (Ou seja, você encontrou **um bug? 🪲)**

Voltar para corrigir seu código pode ser mais difícil do que escrever ele do zero. Aprender a lidar com esses bugs e erros exige habilidade, paciência e experiência. Neste workshop, vamos descobrir o processo básico para depurar seu código. Lembre-se: depurar faz parte de todas as linguagens de programação.

{{% panel theme="info" header="Por que chamamos de bug?"%}}
O primeiro bug de programação registrado foi lá em 1947, quando uma mariposa entrou onde não devia. Veja mais em <a href="https://education.nationalgeographic.org/resource/worlds-first-computer-bug" target="_blank">O Primeiro Bug de Computador do Mundo.</a>

{{% /panel %}}

## Sobre este workshop

Este workshop assume que você já entende e consegue escrever código na linguagem **C**. Os exemplos aqui usam estruturas de dados e algoritmos, assuntos que normalmente aparecem em cursos de introdução à ciência da computação. Vamos explicar rapidinho, só para você lembrar o que o exemplo está fazendo. Também esperamos que você já tenha uma conta no [Replit](https://replit.com) e saiba usar o Replit.

## Replit e o Terminal

Vamos usar o Replit para rodar um código e conhecer melhor o terminal (linha de comando). Clique no botão "Abrir Replit" abaixo e faça uma cópia do programa. Quando abrir o Replit, abra a aba **Shell**.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

Primeiro, vamos compilar nosso código. No terminal, digite o seguinte e aperte **ENTER**:

```bash
make HelloWorld
```

Depois de compilar, precisamos de outro comando para rodar o programa. Digite o seguinte e aperte **ENTER**:

```bash
./examples/HelloWorld
```

Você deve ver o texto `Hello, World!` aparecendo no terminal!

{{% panel theme="info" header="Por que usar o terminal?"%}}

O terminal pode parecer difícil e pouco amigável para quem está começando. Mas saber usar ele é muito importante para sua carreira de programador! Vamos usar o terminal para rodar o `gdb` e o `valgrind` mais pra frente, então quanto mais você praticar, melhor!

Os exemplos foram feitos em um único Replit. Vamos mostrar todos os comandos que você precisa para compilar e rodar, então não se preocupe se nunca usou o terminal antes.

{{% /panel %}}

## Conteúdo do Workshop

{{% children /%}}