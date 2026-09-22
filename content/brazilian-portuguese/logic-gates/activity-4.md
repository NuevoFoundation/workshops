---
title: "Atividade 6 - A missão do Pequeno Macaco (Combinando Portas)"
date: 2025-10-20T01:55:00-05:00
weight: 7
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi vestido como um pequeno macaco" width="20%" />

## Introdução

Do topo de uma árvore, o **Pequeno Macaco (Monito)** te cumprimenta com entusiasmo:

> "Você já percorreu um longo caminho! Você já conhece as portas **E (AND)**, **OU (OR)** e **NÃO (NOT)**.  
> Agora chegou a hora de **combiná-las** para restaurar a energia na **Esfera da Floresta**."

Nesta atividade, você construirá um circuito que utiliza **todas** as portas para resolver um desafio.

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## Objetivo

Construir e verificar o circuito lógico:

- A **Esfera** será ligada se:
  - **B** estiver ligada, **ou**
  - **A** estiver ligada **e** **C** estiver desligada.

Este circuito utiliza as portas **NOT**, **AND** e **OR**.

---

## Componentes necessários

- 3 **Entradas**: A, B, C  
- 1 **Porta NOT**  
- 1 **Porta AND**  
- 1 **Porta OR**  
- 1 **Saída**

<img src="../media/actividad_4.png" alt="Exemplo visual do circuito combinado com AND, OR, NOT com três entradas e uma saída" width="20%" class="lg-img"/>

---

<img src="../media/paisaje_bosque.webp" alt="Paisagem da floresta mágica" width="100%" />

## Instruções do Simulador

### 1. Coloque os componentes
1. Certifique-se de estar em modo **Editar**.  
2. Na barra lateral esquerda, selecione e coloque:
  - Coloque as entradas **A**, **B**, **C**.  
  - Coloque as portas **NOT**, **AND**, **OR**.  
  - Coloque uma **Saída** à direita.

### 2. Conecte os componentes
1. Conecte **C ➔ NOT** (isso gera **NOT C**).  
2. Conecte **A** e **NOT C** à porta **AND** (isso gera **A AND NOT C**).  
3. Conecte **(A AND NOT C)** e **B** à porta **OR**.  
4. Conecte a saída da **OR ➔ Saída**.

---

## Testes guiados

Experimente estas combinações e verifique a **Saída**:

1. **A = 1, B = 0, C = 0** ➔ `NOT C = 1` ➔ `A AND NOT C = 1` ➔ `Saída = 1`  
2. **A = 1, B = 0, C = 1** ➔ `NOT C = 0` ➔ `A AND NOT C = 0` ➔ `Saída = 0`  
3. **A = 0, B = 1, C = 1** ➔ `B = 1` ➔ `Saída = 1`  
4. **A = 0, B = 0, C = 0** ➔ ambos os caminhos dão `0` ➔ `Saída = 0`  

Se todos os quatro testes corresponderem, a Esfera se acenderá corretamente!

---

## Tabela verdade

<details class="lg-details">
<summary class="lg-summary">
Ver tabela verdade completa
</summary>

<div class="lg-div">

| A | B | C | NÃO C | A E NÃO C | Saída = (A E NÃO C) OU B |
|---|---|---|-------|-----------|-------------------------|
| 0 | 0 | 0 |   1   |     0     |            0            |
| 0 | 0 | 1 |   0   |     0     |            0            |
| 0 | 1 | 0 |   1   |     0     |            1            |
| 0 | 1 | 1 |   0   |     0     |            1            |
| 1 | 0 | 0 |   1   |     1     |            1            |
| 1 | 0 | 1 |   0   |     0     |            0            |
| 1 | 1 | 0 |   1   |     1     |            1            |
| 1 | 1 | 1 |   0   |     0     |            1            |

</div>
</details>

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de porta lógica" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## Erros comuns e como corrigi-los

- **A saída está sempre 0:** verifique se a porta **OR** está recebendo **dois sinais**: `B` **e** `A E NÃO C`.  

---

## O que você aprendeu?

- Portas podem ser combinadas para criar decisões mais complexas do que uma única porta pode oferecer.  
- NOT permite inverter um sinal; AND combina condições simultâneas; OR une caminhos alternativos.  
- A saída final depende de como as portas estão conectadas e da ordem em que os sinais são processados.

---

## A seguir

Na próxima missão, você encontrará os personagens da floresta novamente para resolver desafios maiores utilizando essas três portas.
