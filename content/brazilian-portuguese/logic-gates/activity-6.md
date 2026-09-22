---
title: "Atividade 5 - O silencioso cume do Bicho-Preguiça (OR + NOT)"
date: 2025-10-20T02:25:00-05:00
weight: 6
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi vestido como um bicho-preguiça" width="10%" />

## Introdução

O **Bicho-Preguiça** está esperando por você na montanha:

> "Eu quero total silêncio: a saída só acende quando **nenhuma** trilha tem luz.  
> Vamos usar **OR** para detectar se há luz e **NOT** para inverter."

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## Objetivo lógico

A saída deve ser 1 apenas se **A = 0 e B = 0**:

<details class="lg-details">
<summary class="lg-summary">
Veja a tabela-verdade completa
</summary>

<div class="lg-div">

| A | B | A OR B | Saída = NOT(A OR B) |
|---|---|--------|---------------------|
| 0 | 0 |   0    |         1           |
| 0 | 1 |   1    |         0           |
| 1 | 0 |   1    |         0           |
| 1 | 1 |   1    |         0           |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Paisagem do cume da montanha" width="100%" />

## Instruções do simulador

### 1. Coloque
- **Entradas**: A, B  
- **Porta OR**  
- **Porta NOT**  
- **Saída**

<img src="../media/actividad_6.png" alt="Exemplo visual do circuito com OR seguido de NOT com duas entradas e uma saída" width="20%" class="lg-img"/>

### 2. Conecte
1. A e B ➔ **OR**  
2. Saída de **OR** ➔ **NOT**  
3. Saída de **NOT** ➔ **Saída**

### 3. Teste
- Teste 00, 01, 10, 11.  
- Apenas com 00, a saída deve ser 1.

**Condição de vitória:** se houver **qualquer** luz em A ou B, a saída será 0.

---

## Dicas Rápidas

- Se a saída sempre ficar em 1, o cabo de **OR** para **NOT** pode estar faltando.  
- Nomeie o sinal intermediário como `OR_AB`.

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de circuitos lógicos" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que você aprendeu?

- Como expressar "**nenhuma** das entradas está ativa" com **OR** seguido de **NOT**.