---
title: "Booleanos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

Booleanos são declarações <font color="blue">True</font> ou <font color="blue">False</font> (Verdadeiro ou Falso). Ao contrário de strings ou números, os <b>booleanos</b> armazenam declarações de verdade: o que estou dizendo é verdadeiro ou falso?

Por exemplo, se eu disser “Você é um robô”, um booleano pode armazenar se esta afirmação é verdadeira. Neste caso, como você não é um robô (espero!), <font color="blue">False</font> seria armazenado.

Quais são as respostas booleanas a essas perguntas sobre você?

1. Eu sou humano. _______
2. Tenho 25 dedos. _______
3. Gosto de biscoitos. _______
4. Minha cor favorita é azul. ______

As formas mais comuns de operadores booleanos são comparações como menor ou maior que. Como eles são escritos em python está listado abaixo.

| Operador | Descrição | Operador | Descrição |
| -------- | --------------------- | -------- | ------------------------ |
| `<`      | Menor que             | `>`      | Maior que                |
| `<=`     | Menor que ou igual a  | `>=`     | Maior que ou igual a     |
| `==`     | Igual a               | `!=`     | Diferente de             |

### Desafio 1
Como de costume, use `print` para imprimir seus resultados da seguinte forma: Diferente de

```python
print(5 + 8 < 10)
print((3 + 5) * 6) == (65 - 17)
```

A primeira instrução deve retornar <font color="blue">False</font>. E o segundo deve retornar <font color="blue">True</font>.

![alt text](../../img/booleans.png "imagem do exemplo acima mostrando que o primeiro é falso e o segundo é verdadeiro") 

### Desafio 2
Tente imprimir as respostas para as seguintes expressões usando `print`. Se os resultados de alguma dessas afirmações não fizerem sentido, peça ajuda!

- 54 < (10 + 32)
- (37 / 5) != 7
- "Olá" + "Mundo" == "Olá Mundo"
- <font color="blue">False</font> == <font color="blue">False</font>

### Desafio 3
Tente fazer suas próprias expressões!

### Curiosidade: Conectando Booleanos com operadores AND e OR

Você também pode conectar expressões booleanas usando os operadores AND e OR. Aqui está um gráfico que descreve o que acontece quando conectamos booleanos:

Expressão | Resultado
------------|----------
<font color="blue">True</font> and <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">True</font> | <font color="blue">False</font>
<font color="blue">False</font> and <font color="blue">False</font> | <font color="blue">False</font>
<font color="blue">True</font>  or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">True</font>  or <font color="blue">False</font> | <font color="blue">True</font> 
<font color="blue">False</font> or <font color="blue">True</font>  | <font color="blue">True</font> 
<font color="blue">False</font>  and <font color="blue">False</font> | <font color="blue">False</font>

Para resumir, AND (e) requer que ambas as expressões booleanas sejam verdadeiras, enquanto OR (ou) requer apenas que uma das duas expressões booleanas seja verdadeira. Aqui estão mais alguns exemplos:

- (5 < 8) e (9 != 10) produz <font color="blue">True</font> já que 5 é menor que 8 e 9 não é igual a 10.
- (8 <= 2) ou ("h" + "e" == "ele") produz <font color="blue">Verdadeiro</font> já que "h" + "e" resulta em "ele", mesmo que 8 não seja menor ou igual a 2.
- (6 != 2 * 3) ou (8 < 2 * 4) produz <font color="blue">False</font> já que 6 não é igual a 2 * 3 e 8 é menor que 2 * 4, produza <font color="blue">Falso</font>.

#### O que você acha que as seguintes expressões produzem?

- (11-2 < 10) e (7+3 > 10)
- (<font color="blue">True</font> ou 3 < 1) e (<font color="blue">False</font> ou 3>1)

<iframe src="https://trinket.io/embed/python/b238d85d0d" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>