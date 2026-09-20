---
title: "Atividade 8 - A câmara de espelhos do Pequeno Macaco (Igualdade com AND/OR/NOT)"
date: 2025-10-20T02:55:00-05:00
weight: 9
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/monito.jpg" alt="Nuvi vestido como um pequeno macaco" width="20%" />

## Introdução

No salão de reflexos, o **Pequeno Macaco** explica:

> "Para ativar a câmara, os sinais devem **coincidir**.  
> Se A e B forem iguais, a porta se abrirá."

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## Meta lógica

Construa uma saída que seja igual a 1 quando **A = B**, usando **AND/OR/NOT**:

<details class="lg-details">
<summary class="lg-summary">
Veja a tabela verdade completa
</summary>

<div class="lg-div">

| A | B | NOT A | NOT B | A AND B | (NOT A AND NOT B)  | Saída |
|---|---|-------|-------|---------|--------------------|-------|
| 0 | 0 |   1   |   1   |    0    |         1          |   1   |
| 0 | 1 |   1   |   0   |    0    |         0          |   0   |
| 1 | 0 |   0   |   1   |    0    |         0          |   0   |
| 1 | 1 |   0   |   0   |    1    |         0          |   1   |

</div>
</details>

---

<img src="../media/paisaje_bosque.webp" alt="Paisagem da floresta mágica" width="100%" />

## Instruções do simulador

### 1. Posicione
- **Entradas**: A, B  
- **Porta NOT** (x2)  
- **Porta AND** (x2)  
- **Porta OR**  
- **Saída**

<img src="../media/actividad_8.png" alt="Exemplo visual do circuito XNOR utilizando AND, OR e NOT com duas entradas e uma saída" width="20%" class="lg-img"/>

### 2. Conecte
1. A ➔ **NOT**: `NOT_A`  
2. B ➔ **NOT**: `NOT_B`  
3. A e B ➔ **AND1** (ramificação "ambos 1")  
4. `NOT_A` e `NOT_B` ➔ **AND2** (ramificação "ambos 0")  
5. **AND1** e **AND2** ➔ **OR**  
6. **OR** ➔ **Saída**

### 3. Teste
- Experimente 00, 01, 10, 11.  
- A saída deve ser 1 para 00 e 11.

**Condição de vitória:** saída = 1 se e somente se A e B coincidirem.

---

## Dicas rápidas

- Se a saída for 1 para 01 ou 10, verifique os cabos de `NOT_A`/`NOT_B` para **AND₂**.  
- Mantenha as duas ramificações simétricas para que o circuito seja fácil de entender.

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de portas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que você aprendeu?

- Como construir a condição "**eles são iguais**" usando apenas **AND/OR/NOT**.  
- Como usar **ramificações paralelas** para cobrir casos complementares.