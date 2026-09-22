---
title: "Atividade 2 - A montanha do Bicho-preguiça (OU)"
date: 2025-10-20T01:30:00-05:00
weight: 3
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/perezoso.webp" alt="Nuvi vestido como um bicho-preguiça" width="10%" />

## Introdução

Depois de deixar a porta do Tucano para trás, a trilha leva você a uma montanha tranquila.  
Em um galho, um bicho-preguiça boceja e diz com uma voz calma:

> "Não precisa correr... Para chegar ao topo você pode usar a trilha **A** ou a trilha **B**.  
> Se alguma delas estiver aberta, você chegará lá. E se ambas estiverem abertas, também chegará! Aqui usamos a lógica **OU**."

Sua missão é verificar esse comportamento no simulador e iluminar o caminho até o topo.

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## O que é a porta lógica OU?

- Possui **duas entradas** e **uma saída**.  
- A saída acende (`1`) **se pelo menos uma das entradas estiver ligada (`1`)**.  
- Só permanece desligada (`0`) quando **ambas** as entradas estão desligadas (`0`).

<details class="lg-details">
<summary class="lg-summary">
Veja a tabela verdade completa
</summary>

<div class="lg-div">

| Entrada A | Entrada B | Saída OU |
|-----------|-----------|----------|
| 0         | 0         | 0        |
| 0         | 1         | 1        |
| 1         | 0         | 1        |
| 1         | 1         | 1        |

</div>
</details>

---

<img src="../media/paisaje_camino.webp" alt="Paisagem da montanha e o caminho" width="100%" />

## Instruções do simulador

### 1. Coloque os componentes
1. Certifique-se de estar no modo **Editar**.
2. Na barra lateral esquerda, selecione e coloque:
   - **Entrada** ➔ coloque **duas** entradas (A e B).  
   - **Porta lógica OU** ➔ coloque uma porta lógica OU entre as entradas e a saída.  
   - **Saída** ➔ coloque uma saída à direita da porta.

<img src="../media/actividad_2.png" alt="Exemplo visual do circuito OU com duas entradas e uma saída" width="20%" class="lg-img"/>

### 2. Conecte os componentes
1. Conecte a **saída** da **Entrada A** a uma das **entradas** da porta lógica **OU**.  
2. Conecte a **saída** da **Entrada B** à **outra entrada** da porta lógica **OU**.  
3. Conecte a **saída** da porta lógica **OU** à **Saída**.

### 3. Teste o circuito
- Clique em cada **Entrada** para alternar entre `0` ↔ `1`.  
- Experimente todas as quatro combinações (00, 01, 10, 11).  
- **Objetivo / Condição de vitória:** a saída deve ser `1` se **A = 1** **ou** **B = 1** (ou ambos).  

> "Viu? Mesmo com apenas um caminho aberto, você já consegue chegar ao topo."

---

## Dicas rápidas

- Se a saída permanecer em `0` mesmo com A = 1 ou B = 1, verifique se ambas as entradas estão conectadas à porta lógica OU.  
- Certifique-se de ter usado a **porta lógica OU** e não a **porta lógica E** por engano.

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de portas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que você aprendeu?

- OU representa **opções**: apenas **um** caminho é suficiente para ativar a saída.  
- A única forma de a saída ser `0` é se **A = 0** e **B = 0** ao mesmo tempo.

---

## A seguir

Na próxima atividade, você visitará o lago de reflexões com o **Sapo** e descobrirá como funciona a porta lógica **NÃO**.