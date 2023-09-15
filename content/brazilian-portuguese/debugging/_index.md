---
title: "C: O processo de depuração"
description: "Uma introdução aos programas de depuração"
date: 2021-10-13T00:00:00Z
difficulty: "Intermediário"
prereq: "C"
icon: ""
draft: false
---

## Introdução

Então, você aprendeu o básico de uma linguagem de programação. Você provavelmente já dominou a arte de `"Hello World"` e iniciou um projeto pessoal, ou seguiu tutoriais suficientes para ser capaz de transformar uma ideia em código.

No entanto, o que acontece quando seu código falha ao compilar? Iniciantes em programação geralmente pesquisam on-line para ver se outros encontraram problemas semelhantes. Isso é um pouco tedioso, pois você precisaria recorrer à internet toda vez que se deparar com um erro. 

O que acontece quando seu programa compila, mas não funciona da maneira que você espera (ou seja, você encontrou **um bug? 🪲 )**

Voltar para corrigir seu código pode ser um desafio mais difícil do que escrever o código em si. Aprender a navegar por esses bugs e erros requer habilidade, paciência e experiência. Neste workshop, vamos desvendar o processo básico para depurar seu código. Lembre-se que a depuração faz parte de todas as linguagens de programação.

{{% panel theme="info" header="Por que chamá-lo de bug?"%}}
O primeiro bug de programação registrado foi gravado em 1947, quando uma mariposa decidiu estar no lugar errado. Fazer Check-out [O primeiro bug de computador do mundo.](https://education.nationalgeographic.org/resource/worlds-first-computer-bug)

{{% /panel %}}

## Sobre esse workshop

Este workshop pressupõe que você entende e pode escrever código na linguagem de programação **C**. Os exemplos utilizados neste workshop fazem uso de estruturas de dados e algoritmos, tópicos que geralmente são ensinados em um curso introdutório de ciência da computação. Teremos uma breve explicação sobre eles, mas a intenção é ser uma atualização para que você tenha uma ideia do que o código de exemplo está fazendo. Este workshop também pressupõe que você já tenha uma conta [Replit](https://replit.com) e esteja familiarizado com o Replit.

## Replit e a Linha de Comando

Vamos tentar usar o Replit para executar algum código e ficar mais familiarizado com a linha de comando. Clique no botão `"Launch Replit"` abaixo e bifurque o programa. Quando o programa Replit for aberto, abra a guia **Shell**.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Executar Replit</a>

Primeiro vamos compilar nosso código. Na guia shell, digite o seguinte e clique em **ENTER**:

```bash
make HelloWorld
```

Depois de compilar nosso código, precisamos usar um comando diferente para executá-lo. Digite o seguinte e clique em **ENTER**:

```bash
./examples/HelloWorld
```

Você deve ver um texto `"Olá, Mundo!"` impresso no shell!

{{% panel theme="info" header="Por que usar a linha de comando?"%}}

A linha de comando pode parecer pouco intuitiva e não fácil de usar para iniciantes. No entanto, saber usá-lo é extremamente importante para sua carreira de programador. Vamos usá-lo para executar `gdb` e `valgrind` mais tarde no workshop, então quanto mais experiência você tiver com ele, melhor!

Os exemplos foram escritos em um único Replit. Nós forneceremos todos os comandos que você precisa saber para compilá-los e executá-los, então não se preocupe se você não usou a linha de comando até agora. 

{{% /panel %}}

## Conteúdo do Workshop

{{% children /%}}