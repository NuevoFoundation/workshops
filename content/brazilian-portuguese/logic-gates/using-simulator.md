---
title: "Usando o simulador"
date: 2025-10-20T01:00:18-05:00
weight: 1
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

## Introdução

Você chegou à Floresta Mágica da Costa Rica. Neste lugar vive uma esfera que protege os animais e a natureza, mas sua energia está desaparecendo.  
Para restaurá-la, primeiro precisamos aprender a usar o simulador de circuitos lógicos.

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## Uso básico do simulador

Antes de aprender sobre as portas lógicas, precisamos entender como inserir componentes e conectá-los corretamente.

### 1. Interface principal

No lado esquerdo, há uma barra com todos os componentes disponíveis, como:

- Entradas (Input)  
<img src="../media/logicinput.png" alt="Ícone de uma entrada" width="40px" class="lg-img"/>

- Saídas (Output)  
<img src="../media/logicoutput.png" alt="Ícone de uma saída" width="40px" class="lg-img"/>

- Relógio (CLK)  
<img src="../media/logicclock.png" alt="Ícone de um relógio" width="64px" class="lg-img"/>

- Portas lógicas (AND, OR, NOT, etc.)  
<div style="margin-left: 20px; display: flex; gap: 5px; align-items: center;">
   <img src="../media/logicand.png" alt="Ícone de uma porta lógica AND" width="64px"/>
   <img src="../media/logicor.png" alt="Ícone de uma porta lógica OR" width="64px"/>
   <img src="../media/logicnot.png" alt="Ícone de uma porta lógica NOT" width="64px"/>
</div>

Na parte superior, há botões importantes:
- **Edit**: modo para posicionar componentes.
- **Move**: mover componentes que já foram posicionados.
- **Delete**: remover componentes.
- **Save / Load**: salvar ou carregar circuitos.
<img src="../media/menu.png" alt="Ícone do menu do simulador" class="lg-img" />

A área branca é onde você construirá seu circuito.

---

## Primeira missão: conectar uma entrada a uma saída

### Passos

1. Certifique-se de que o modo **Edit** esteja selecionado.
2. Na barra à esquerda, clique em **Input**.
3. Clique em qualquer lugar no espaço em branco para posicioná-lo.
4. Em seguida, selecione **Output** e clique novamente para posicioná-lo à direita ou próximo à entrada.
5. Para conectá-los:
   - Clique no círculo pequeno da entrada.
   - Depois, clique no círculo da saída.
   - Um fio será desenhado automaticamente.
6. Clique no símbolo da entrada para alternar seu valor entre ligado e desligado:
   - `0` = desligado
   - `1` = ligado

Se a entrada estiver em `1` e a saída exibir `1`, seu circuito está funcionando.

---

## O que você aprendeu?

- Como posicionar componentes (clique no componente, depois clique no espaço em branco).
- Como conectá-los usando os círculos de conexão.
- Como alternar os sinais das entradas.
- Este circuito ainda não utiliza portas lógicas, apenas uma conexão direta.

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de portas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que vem a seguir

Quando estiver pronto, na próxima atividade você encontrará o Tucano e aprenderá como usar a porta lógica **AND**.