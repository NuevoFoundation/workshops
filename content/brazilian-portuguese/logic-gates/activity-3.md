---
title: "Atividade 3 - O desafio do sapo (NÃO)"
date: 2025-10-20T01:40:00-05:00
weight: 4
draft: false
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

<img src="../media/ranita.jpg" alt="Nuvi fantasiada de sapo" width="15%" />

## Introdução

Seguindo a trilha, você chega a um lago brilhante.  
Um **sapo verde** pula em uma folha e te cumprimenta:

> "Bem-vindo ao **lago do reflexo**!  
> Aqui tudo funciona **ao contrário**: se algo está ligado, desliga;  
> se está desligado, liga. Isso é a lógica do **NÃO**."

Sua missão é montar um circuito que **inverta** o sinal de entrada.

---

<img src="../media/pattern.webp" alt="Padrão decorativo para o workshop de lógica" width="100%" />

## O que é a porta NÃO?

- Tem **uma entrada** e **uma saída**.  
- A saída é **sempre o oposto** da entrada.

<details class="lg-details">
<summary class="lg-summary">
Veja a tabela verdade completa
</summary>

<div class="lg-div">

| Entrada A | Saída NÃO |
|-----------|-----------|
| 0         | 1         |
| 1         | 0         |

</div>
</details>

> Essa porta também é conhecida como um **inversor**.

---

<img src="../media/paisaje_lago.webp" alt="Paisagem do lago na floresta" width="100%" />

## Instruções do simulador

### 1. Coloque os componentes
1. Certifique-se de que está no modo **Editar**.  
2. Na barra lateral esquerda, selecione e coloque:  
   - **Entrada** ➔ uma entrada (A).  
   - **Porta NÃO** ➔ uma porta NÃO entre a entrada e a saída.  
   - **Saída** ➔ uma saída à direita da porta.

<img src="../media/actividad_3.png" alt="Exemplo visual do circuito NÃO com uma entrada e uma saída" width="20%" class="lg-img"/>

### 2. Conecte os componentes
1. Conecte a **saída** da **Entrada A** à **entrada** da porta **NÃO**.  
2. Conecte a **saída** da porta **NÃO** à **Saída**.

### 3. Teste o circuito
- Clique na **Entrada A** para alternar entre `0` ↔ `1`.  
- Observe a **Saída**: ela deve exibir **o oposto** de A.

**Condição de vitória:**  
- Se `A = 0` ➔ **Saída = 1**  
- Se `A = 1` ➔ **Saída = 0**

> O sapo bate palmas:  
> "Muito bem! Às vezes, para avançar você precisa **pensar ao contrário**."

---

## Dicas rápidas

- Se a saída **não** mudar para o oposto da entrada, verifique se o fio passa **através** da porta **NÃO**.  
- Confirme que você selecionou a **porta NÃO** e não outra porta.  
- Se a saída for **igual** à entrada, provavelmente a porta NÃO não está conectada ou está faltando.

---

## Desafio (opcional)

- **Duplo NÃO:** adicione **duas** portas NÃO em série. O que acontece com a saída?  

---

## Simulador

{{< logic-gate-icon-guide >}}

<iframe src="https://drendog.github.io/Logic-Circuit-Simulator/" title="Simulador de portas lógicas" width="100%" height="600" frameborder="0" allowfullscreen></iframe>

---

## O que você aprendeu?

- A porta **NÃO** inverte o valor lógico: `0 → 1` e `1 → 0`.  
- É útil para criar **comportamentos inversos** (alarme quando o sinal está ausente, luzes automáticas, etc.).  
- Duas portas NÃO em sequência **se cancelam mutuamente**.

---

## Próximos passos

Excelente! Na próxima atividade, o **Macaco Pequeno** vai te mostrar como **combinar** AND, OR e NÃO para resolver desafios mais complexos e restaurar a energia da **Esfera da Floresta**.