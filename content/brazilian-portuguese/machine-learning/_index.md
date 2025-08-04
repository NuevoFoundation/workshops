---
title: "Python: Aprendizado de Máquina"
description: "Conceitos básicos de Machine Learning"
prereq: "nenhum"
difficulty: "Iniciante"
draft: false
---

## Vamos aprender um pouco de aprendizado de máquina para avaliar as notas gerais dos jogadores no jogo FIFA

**Aprendizado de máquina (machine learning)** é a ciência que estuda *algoritmos* e *modelos* que permitem aos computadores reconhecer padrões, tomar decisões e até prever resultados — tudo isso sem instruções explícitas.  
Por exemplo: quando você fala com seu assistente de voz como a Siri ou a Cortana, é o aprendizado de máquina que ajuda a transformar sua voz em texto e entender o que você está pedindo. Incrível, né?

Hoje vamos mostrar como *ensinar* um computador a avaliar a nota geral (Overall) de jogadores de futebol com base em seus atributos, passo a passo.

Vamos lá!

## Um pouco de contexto

Imagine que existe uma fórmula secreta usada pela EA Sports (criadora do FIFA 2019) para calcular a **nota geral** dos jogadores no jogo.  
Se soubéssemos essa fórmula, seria fácil prever a nota de qualquer jogador, mesmo que ele não esteja no jogo.

O problema é que… nós **não sabemos qual é a fórmula exata**.  
Mas sabemos o que entra como *entrada* (os atributos do jogador) e o que sai como *saída* (a nota geral).  
Com isso, podemos usar uma técnica chamada **regressão** para **estimar** essa fórmula com base nos dados que temos.

Hoje vamos usar um modelo simples chamado **Regressão Linear**.  
Vamos imaginar que a fórmula que calcula a nota geral de um jogador seja \( y = f(x) \):

\[
    f(x) = ax + b
\]

A regressão linear tenta descobrir os valores de \(a\) e \(b\).  
Essa fórmula `f(x)` é chamada de **modelo**, e o processo de encontrar os valores de \(a\) e \(b\) é chamado de **treinar o modelo**.  
Depois de treinado, podemos usar esse modelo para prever o valor de \(y\) com novos dados.

Voltando ao nosso exemplo: se tivermos **só uma variável** \(x\), é fácil resolver essa fórmula com papel e caneta.  
Mas quando temos **vários atributos**, como velocidade, força, passe, defesa... a coisa fica mais complexa.

A fórmula então vira algo assim:

\[
    f(x_1, x_2, ..., x_n) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n + b
\]

Agora precisamos alimentar esse modelo com muitos dados de qualidade, para que ele se aproxime cada vez mais da fórmula "real".

Vamos começar!

## Tabela de Conteúdos

<details close>
<summary>Tabela de Conteúdos</summary>
{{% children /%}}
</details>
