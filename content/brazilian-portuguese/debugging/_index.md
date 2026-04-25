---
title: "C: O Processo de Depura├º├úo"
description: "Uma introdu├º├úo ├á depura├º├úo de programas"
date: 2026-04-25T00:00:00-07:00
prereq: "C"
icon: ""
draft: false
alwaysopen: false
language: "c"
topics: ["programming-basics"]
difficulties: ["intermediate"]
---

## Introdu├º├úo

Ent├úo, voc├¬ j├í aprendeu o b├ísico de uma linguagem de programa├º├úo. Provavelmente j├í fez o famoso `ΓÇ£Hello WorldΓÇ¥` e come├ºou um projeto pessoal ou seguiu tutoriais suficientes para transformar uma ideia em c├│digo.

Mas o que acontece quando seu c├│digo n├úo compila? Quem est├í come├ºando a programar geralmente procura na internet para ver se outras pessoas tiveram o mesmo problema. Isso pode ser cansativo, pois voc├¬ teria que pesquisar toda vez que aparecer um erro.

E quando seu programa compila, mas n├úo funciona do jeito que voc├¬ esperava? (Ou seja, voc├¬ encontrou **um bug? ≡ƒ¬▓)**

Voltar para corrigir seu c├│digo pode ser mais dif├¡cil do que escrever ele do zero. Aprender a lidar com esses bugs e erros exige habilidade, paci├¬ncia e experi├¬ncia. Neste workshop, vamos descobrir o processo b├ísico para depurar seu c├│digo. Lembre-se: depurar faz parte de todas as linguagens de programa├º├úo.

{{% panel theme="info" header="Por que chamamos de bug?"%}}
O primeiro bug de programa├º├úo registrado foi l├í em 1947, quando uma mariposa entrou onde n├úo devia. Veja mais em <a href="https://education.nationalgeographic.org/resource/worlds-first-computer-bug" target="_blank">O Primeiro Bug de Computador do Mundo.</a>

{{% /panel %}}

## Sobre este workshop

Este workshop assume que voc├¬ j├í entende e consegue escrever c├│digo na linguagem **C**. Os exemplos aqui usam estruturas de dados e algoritmos, assuntos que normalmente aparecem em cursos de introdu├º├úo ├á ci├¬ncia da computa├º├úo. Vamos explicar rapidinho, s├│ para voc├¬ lembrar o que o exemplo est├í fazendo. Tamb├⌐m esperamos que voc├¬ j├í tenha uma conta no [Replit](https://replit.com) e saiba usar o Replit.

## Replit e o Terminal

Vamos usar o Replit para rodar um c├│digo e conhecer melhor o terminal (linha de comando). Clique no bot├úo "Abrir Replit" abaixo e fa├ºa uma c├│pia do programa. Quando abrir o Replit, abra a aba **Shell**.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Abrir Replit</a>

Primeiro, vamos compilar nosso c├│digo. No terminal, digite o seguinte e aperte **ENTER**:

```bash
make HelloWorld
```

Depois de compilar, precisamos de outro comando para rodar o programa. Digite o seguinte e aperte **ENTER**:

```bash
./examples/HelloWorld
```

Voc├¬ deve ver o texto `Hello, World!` aparecendo no terminal!

{{% panel theme="info" header="Por que usar o terminal?"%}}

O terminal pode parecer dif├¡cil e pouco amig├ível para quem est├í come├ºando. Mas saber usar ele ├⌐ muito importante para sua carreira de programador! Vamos usar o terminal para rodar o `gdb` e o `valgrind` mais pra frente, ent├úo quanto mais voc├¬ praticar, melhor!

Os exemplos foram feitos em um ├║nico Replit. Vamos mostrar todos os comandos que voc├¬ precisa para compilar e rodar, ent├úo n├úo se preocupe se nunca usou o terminal antes.

{{% /panel %}}

<details>
<summary>Conte├║do do Workshop</summary>
{{% children /%}}
</details>