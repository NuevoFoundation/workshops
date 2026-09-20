---
title: "Atividade 7 - A ponte do sapo (Valores diferentes com AND/OR/NOT)"
date: 2025-10-20T02:40:00-05:00
weight: 8
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi vestido como sapo" width="15%" />

## Introdução

O **Sapo** guarda uma ponte com uma regra precisa:

> "Somente aqueles que carregam **exatamente uma** tocha acesa podem atravessar.  
> Se você carregar nenhuma ou ambas, a ponte fecha."

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## Objetivo lógico

Construa uma saída que seja igual a 1 quando A e B forem **diferentes**.  
Ela é construída usando **somente** AND, OR e NOT:

<details class="lg-details">
<summary class="lg-summary">
Veja a tabela verdade completa
</summary>

<div class="lg-div">

| A | B | A OR B | A AND B | NOT(A AND B)  | Saída |
|---|---|--------|---------|---------------|-------|
| 0 | 0 |   0    |    0    |       1       |   0   |
| 0 | 1 |   1    |    0    |       1       |   1   |
| 1 | 0 |   1    |    0    |       1       |   1   |
| 1 | 1 |   1    |    1    |       0       |   0   |

</div>
</details>

---

<img src="../media/paisaje_lago.webp" alt="Paisagem do lago na floresta" width="100%" />

## Instruções do simulador

### 1. Posicione
- **Entradas**: A, B  
- **Porta OU (OR)**  
- **Porta E (AND)** (x2)  
- **Porta NÃO (NOT)**  
- **Saída**

<img src="../media/actividad_7.png" alt="Exemplo visual do circuito XOR usando AND, OR e NOT com duas entradas e uma saída" width="20%" class="lg-img"/>

### 2. Conecte
1. A e B ➔ **OR**: `OR_AB`  
2. A e B ➔ **AND1**: `AND_AB`  
3. `AND_AB` ➔ **NOT**: `NOT_AND_AB`  
4. `OR_AB` e `NOT_AND_AB` ➔ **AND2**  
5. **AND2** ➔ **Saída**

### 3. Teste
- Verifique 00, 01, 10, 11.  
- A saída deve ser 1 apenas para 01 e 10.

**Condição de vitória:** saída = 1 quando A ≠ B.

---

## Dicas rápidas

- Se você obtiver 1 para 11, está faltando a negação de `AND_AB`.  
- Separe visualmente os ramos de `OR_AB` e `NOT_AND_AB` para evitar fios cruzados.

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de circuitos com portas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que você aprendeu?

- Como construir a condição "**eles são diferentes**" usando **AND/OR/NOT**.