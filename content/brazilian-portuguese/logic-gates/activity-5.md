---
title: "Atividade 4 - O portão invertido do Tucano (E + NÃO)"
date: 2025-10-20T02:10:00-05:00
weight: 5
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Nuvi vestido como um tucano" width="15%" />

## Introdução

Em frente ao portão de pedra, o **Tucano** pisca para você:

> "Lembra do meu portão **E**? Hoje vamos **inverter** ele com a ajuda do **NÃO**.  
> O portão vai abrir **a menos que** ambas as tochas estejam acesas."

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## Objetivo lógico

Crie uma saída que seja verdadeira **exceto** quando A = 1 **e** B = 1:

<details class="lg-details">
<summary class="lg-summary">
Veja a tabela verdade completa
</summary>

<div class="lg-div">

| A | B | A E B | Saída = NÃO(A E B)       |
|---|---|-------|--------------------------|
| 0 | 0 |   0   |            1             |
| 0 | 1 |   0   |            1             |
| 1 | 0 |   0   |            1             |
| 1 | 1 |   1   |            0             |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Paisagem do portão de pedra na floresta" width="100%" />

## Instruções do simulador

### 1. Coloque os componentes
1. Certifique-se de estar no modo **Editar**.  
- **Entradas**: A, B  
- **Porta E**  
- **Porta NÃO**  
- **Saída**

<img src="../media/actividad_5.png" alt="Exemplo visual do circuito da porta E seguida de NÃO com duas entradas e uma saída" width="20%" class="lg-img"/>

### 2. Conecte
1. A e B ➔ **E**  
2. Saída do **E** ➔ **NÃO**  
3. Saída do **NÃO** ➔ **Saída**

### 3. Teste
- Teste as combinações 00, 01, 10, 11.  
- O portão abre em todos os casos **exceto** no 11.

**Condição de vitória:** a saída é 0 apenas quando A = 1 e B = 1.

---

## Dicas rápidas

- Se sempre der 0, provavelmente você conectou a **Saída** ao **E** invés do **NÃO**.  

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de lógica de circuitos" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que você aprendeu?

- Como **negar** uma condição composta: primeiro **E**, depois **NÃO**.