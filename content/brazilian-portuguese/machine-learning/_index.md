---
title: "Python: aprendizado de máquina"
description: "Fundamentos de Aprendizado de máquina"
prereq: "Nenhum"
difficulty: "Intermediário"
draft: false
---

## Vamos aprender um pouco de aprendizado de máquina para avaliar as classificações gerais dos jogadores no videogame FIFA

O aprendizado de máquina é a ciência que estuda *algoritmos* e *modelos* que permitem aos computadores reconhecer coisas, tomar decisões e até mesmo prever resultados sem instruções explícitas. Por exemplo, ao falar com o assistente do seu telefone, como Siri ou Cortana, o aprendizado de máquina ajuda a traduzir sua voz em texto e a entender melhor o que você solicitou. Isso é incrível?

Hoje vamos mostrar como *ensinar* um computador a avaliar as classificações gerais de jogadores de futebol com base em seus atributos, passo a passo.

Vamos lá!

## Um pouco de base

Suponha que exista uma fórmula para calcular as classificações "gerais" dos jogadores de futebol da EA Sports (desenvolvedora do FIFA 2019). Com esta fórmula, podemos calcular facilmente as classificações gerais de qualquer jogador, mesmo que ele não esteja no jogo. O problema é que não sabemos exatamente como é a fórmula. <br>
Conhecemos a *entrada* que consiste nos atributos do jogador e a *saída* que são as classificações gerais. Então podemos usar uma abordagem chamada “regressão” para “estimar” a fórmula com base na entrada/saída.

Hoje vamos usar um modelo simples chamado Regressão Linear.
Suponhamos que a fórmula que calcula as classificações gerais do jogador de futebol \( y = f(x)\) seja
\[
    f(x) = ax + b
\]
A regressão linear visa descobrir \(a\) e \(b\). A fórmula \(f(x)\) é chamada de "modelo" em aprendizado de máquina, e o processo de resolver/estimar o modelo é chamado de "treinamento" do modelo. Depois de treinarmos o modelo, podemos usá-lo para prever o alvo \(y\) de novos dados.

Voltando à nossa história, se tivermos apenas 1 variável \(x\), estimar \(f(x)\) deve ser fácil. Todos deveriam ser capazes de resolvê-lo com uma caneta e um pedaço de papel. Porém, quando \(x\) é uma longa lista de atributos dos jogadores de futebol como velocidade, potência, passe, desarme, fica complicado. A fórmula deve ser reescrita em
\[
    f(x_1, x_2, ..., x_n) = a_1 * x_1 + a_2 * x_2 + ... + a_n * x_n + b
\]
Então temos que alimentar o modelo com muitos dados de alta qualidade para torná-lo mais próximo da fórmula “real”. Vamos começar!


## Tabela de Conteúdos

<details close>
<summary>Tabela de Conteúdos</summary>
{{% children /%}}
</details>
