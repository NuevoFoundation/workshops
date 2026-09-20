---
title: "Oficina de portas lógicas: Gabarito"
date: 2025-12-04T10:00:00-06:00
draft: false
hidden: true
weight: 300
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

{{% notice tip %}}
Nota: Para esta oficina, certifique-se de usar um navegador compatível e ter o JavaScript ativado para o simulador interativo.

As atividades podem incluir a seleção de opções ou componentes no simulador. 
{{% /notice %}}

### Atividade 1: Porta AND
Resposta esperada: A saída é ativada (1) apenas se ambas as entradas estiverem ativas (1).

Dica: Teste todas as combinações possíveis das duas entradas. Somente quando ambas forem 1 a saída será 1.

{{< workshop-image filename="media/answer_1.png" alt="Solução visual para o circuito AND com duas entradas e uma saída" width="40%" class="lg-img" >}}

---

### Atividade 2: Porta OR
Resposta esperada: A saída é ativada (1) se pelo menos uma das entradas estiver ativa (1).

Dica: Se uma ou ambas as entradas forem 1, a saída será 1. Ela será 0 apenas se ambas as entradas forem 0.

{{< workshop-image filename="media/answer_2.png" alt="Solução visual para o circuito OR com duas entradas e uma saída" width="40%" class="lg-img" >}}

---

### Atividade 3: Porta NOT
Resposta esperada: A saída é sempre o oposto da entrada.

Dica: Se a entrada for 0, a saída será 1. Se a entrada for 1, a saída será 0.

{{< workshop-image filename="media/answer_3.png" alt="Solução visual para o circuito NOT com uma entrada e uma saída" width="40%" class="lg-img" >}}

**Desafio duplo NOT:**
Se você posicionar duas portas NOT em série, o sinal será invertido duas vezes. Ou seja:
- Se a entrada for 0: a primeira NOT converte para 1, a segunda converte de volta para 0.
- Se a entrada for 1: a primeira NOT converte para 0, a segunda converte de volta para 1.

**Conclusão:** Duas portas NOT em sequência cancelam o efeito de inversão e a saída será igual à entrada original.

---

### Atividade 4: AND + NOT (Porta invertida)
Resposta esperada: A saída é 1, exceto quando ambas as entradas são 1 (use AND e depois NOT).

Dica: A porta NOT inverte o resultado do AND. Somente se ambas as entradas forem 1 a saída será 0.

{{< workshop-image filename="media/answer_5.png" alt="Solução visual para o circuito AND seguido por NOT com duas entradas e uma saída" width="40%" class="lg-img" >}}

---

### Atividade 5: OR + NOT (Saída silenciosa)
Resposta esperada: A saída é 1 apenas se ambas as entradas forem 0 (use OR e depois NOT).

Dica: A porta NOT inverte o resultado do OR. Se qualquer entrada for 1, a saída será 0.

{{< workshop-image filename="media/answer_6.png" alt="Solução visual para o circuito OR seguido por NOT com duas entradas e uma saída" width="40%" class="lg-img" >}}

---

### Atividade 6: Combinando portas (AND, OR, NOT)
Resposta esperada: A saída é ativada se B for 1 ou se A for 1 e C for 0 (use NOT para inverter C).

Dica: Construa o circuito combinando as portas de acordo com a condição lógica dada. Teste os casos sugeridos na atividade.

1. **Identifique as entradas e saídas:**
- Entradas: A, B, C  
- Saída: Saída  

2. **Inverta a entrada C usando NOT:**
- Conecte C à porta NOT para obter `NOT C`.

3. **Combine A e NOT C com AND:**
- Conecte A e `NOT C` à porta AND para obter `A AND NOT C`.

4. **Combine o resultado anterior com B usando OR:**
- Conecte `A AND NOT C` e B à porta OR para obter a saída final: `(A AND NOT C) OR B`.

5. **Conecte a saída da OR à Saída.**

**Exemplo de conexões:**

{{< workshop-image filename="media/answer_4.png" alt="Solução visual para o circuito combinado AND, OR, NOT com três entradas e uma saída" width="40%" class="lg-img" >}}

**Testes orientados:**

- A = 1, B = 0, C = 0 → Saída = 1  
- A = 1, B = 0, C = 1 → Saída = 0  
- A = 0, B = 1, C = 1 → Saída = 1  
- A = 0, B = 0, C = 0 → Saída = 0  

---

### Atividade 7: Diferença exclusiva (XOR com AND/OR/NOT)
Resposta esperada: A saída é 1 apenas se as entradas forem diferentes (use uma combinação de AND, OR e NOT).

Dica: Teste todas as combinações. A saída será 1 apenas se uma entrada for 1 e a outra for 0.

1. **Identifique as entradas e a saída:**
- Entradas: A, B  
- Saída: Saída  

2. **Crie a combinação OR:**
- Conecte A e B à porta OR para obter `OR_AB`.

3. **Crie a combinação AND:**
- Conecte A e B à porta AND para obter `AND_AB`.

4. **Inverta o resultado do AND:**
- Conecte a saída de `AND_AB` à porta NOT para obter `NOT_AND_AB`.

5. **Combine ambas com uma segunda AND:**
- Conecte `OR_AB` e `NOT_AND_AB` a uma segunda porta AND para obter a saída final: `XOR = (A OR B) AND NOT(A AND B)`.

6. **Conecte a saída da segunda AND à Saída.**

**Exemplo de conexões:**

{{< workshop-image filename="media/answer_7.png" alt="Solução visual para o circuito XOR usando AND, OR e NOT com duas entradas e uma saída" width="40%" class="lg-img" >}}

**Testes orientados:**

- A = 0, B = 0 → Saída = 0  
- A = 0, B = 1 → Saída = 1  
- A = 1, B = 0 → Saída = 1  
- A = 1