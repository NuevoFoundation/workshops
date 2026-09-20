---
title: "Atividade 1 - O portão do Tucano (E)"
date: 2025-10-20T01:15:00-05:00
weight: 2
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/tucan.png" alt="Ilustração do Nuvi fantasiado de tucano" width="15%" />

## Introdução

Ao caminhar pela floresta, você chega a uma grande porta de madeira.  
Um tucano aparece ao lado dela e diz:

> "Essa porta só abre se ambas as tochas estiverem acesas ao mesmo tempo.  
> Se apenas uma estiver acesa, a porta não se mexerá.  
> Aqui usamos a lógica E."

Sua missão é testar este comportamento usando o simulador de portões lógicos.

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## O que é o portão E?

- Ele possui **duas entradas** e **uma saída**.  
- A saída acende (`1`) **somente se ambas as entradas estiverem acesas (`1`)**.  
- Se uma ou ambas as entradas estiverem apagadas (`0`), a saída permanece apagada (`0`).

<details class="lg-details">
<summary class="lg-summary">
Ver tabela verdade completa
</summary>

<div class="lg-div">

| Entrada A | Entrada B | Saída E (AND) |
|-----------|-----------|---------------|
| 0         | 0         | 0             |
| 0         | 1         | 0             |
| 1         | 0         | 0             |
| 1         | 1         | 1             |

</div>
</details>

---

<img src="../media/paisaje_puerta.webp" alt="Paisagem da porta na floresta" width="100%" />

## Instruções para o simulador

### 1. Posicione os componentes
1. Certifique-se de estar no modo **Editar**.
2. Na barra lateral esquerda, clique em:
   - **Input** ➔ posicione **duas** entradas (A e B).
   - **AND Gate** ➔ posicione um portão AND.
   - **Output** ➔ posicione uma saída à direita do portão.

<img src="../media/actividad_1.png" alt="Exemplo visual do circuito E com duas entradas e uma saída" width="20%" class="lg-img"/>

### 2. Conecte os componentes
1. Clique no círculo de saída da **Entrada A** e depois clique em uma das entradas do portão AND.  
2. Repita o mesmo com a **Entrada B**.  
3. Da saída do portão AND, conecte ao círculo da **Saída**.

### 3. Teste o circuito
- Clique em cada entrada para alternar entre `0` e `1`.  
- Experimente todas as combinações possíveis.  
- A porta do Tucano só "abre" (saída = 1) quando Entrada A for 1 e Entrada B for 1 (A=1 E B=1).

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de portões lógicos" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que você aprendeu?

- O portão E representa condições que precisam ser atendidas juntas: a saída só é ativada quando A = 1 e B = 1 ao mesmo tempo.
- Se uma das entradas for 0, a saída também será 0, sem exceções.

---

## Próximos passos

Na próxima atividade, você seguirá pela trilha até encontrar a Preguiça e descobrir como funciona o portão OU.