---
title: "Nested Loops"
description: "Aplicativos avançados aplicativos para fluxos"
date: 2020-07-16T00:00:00Z
weight: 4
---


### Nested Loops
*Nested loops* baseia-se no que aprendemos sobre loops for e loops while no exercício anterior. Você pode querer revisar a página <a href="../../../python-basics/loops" target="blank">For-loop e While-loop</a> antes de prosseguirmos.

Nesta seção, usaremos um loop dentro de outro, que é chamado de *Nested loop* (loop aninhado).
<h/>

### Nested while loop
```python
#Este é o formato do nested while loop
while expressãoA:
    while expressãoB:
        declaração(B)
    declaração(A)
```
No loop `while` acima, quando expressãoA produz `Falso`, pularemos o bloco inteiro. Quando a expressãoA produzir `Verdadeiro`, iremos para o loop while interno e verificaremos a expressãoB. Se a expressãoB produzir `Verdadeiro`, a declaração (B) será executada. Se a expressãoB produzir `Falso`, pularemos o loop while interno e iremos para a declaração (A).

Se expressãoA produzir `Falso`, nenhuma das instruções será executada; declaração (A) e declaração (B) serão executadas se e somente se expressãoA e expressãoB produzirem `Verdadeiro`.

Vamos dar uma olhada em um exemplo de loop while aninhado.
 ```python
 #Este é o exemplo do nested while loop.
 x = 0
 y = 0
 #Abaixo está nosso loop externo
 while x <3:
     #Imprime se "x < 3" produz Verdadeiro
     print("Passando pelo loop while externo, x é", x, "y é", y, sep = " ")
     #Abaixo está nosso loop interno
     while y < 5:
         #Imprime se "y < 5" produz Verdadeiro
         print("Passe pelo loop while interno, x é", x, "y é", y, sep = " ")
         y + = 1
     #Os códigos abaixo são executados após o término de cada loop interno.
     x + = 1
     y = 0
 ```
Esta é a saída do nosso exemplo.

 ```output
Passe pelo loop while externo, x é 0 y é 0
Passe pelo loop while interno, x é 0 y é 0
Passe pelo loop while interno, x é 0 y é 1
Passe pelo loop while interno, x é 0 y é 2
Passe pelo loop while interno, x é 0 y é 3
Passe pelo loop while interno, x é 0 y é 4
Passe pelo loop while externo, x é 1 y é 0
Passe pelo loop while interno, x é 1 y é 0
Passe pelo loop while interno, x é 1 y é 1
Passe pelo loop while interno, x é 1 y é 2
Passe pelo loop while interno, x é 1 y é 3
Passe pelo loop while interno, x é 1 y é 4
Passe pelo loop while externo, x é 2 y é 0
Passe pelo loop while interno, x é 2 y é 0
Passe pelo loop while interno, x é 2 y é 1
Passe pelo loop while interno, x é 2 y é 2
Passe pelo loop while interno, x é 2 y é 3
Passe pelo loop while interno, x é 2 y é 4
 ```

#### Perguntas
Você pode tentar descobrir como os valores de x e y mudam e explicar por quê?

(**Dica**: quantas vezes passamos pelo loop externo e pelo loop interno separadamente?)

<hr/>

### Desafio Um
Tente alterar os números inteiros no nested while loop e prever as saídas. Em seguida, execute o código e observe as saídas. Eles correspondem às suas previsões?

<iframe src="https://trinket.io/embed/python/386ca3182b" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
<br/><br/>
<hr/>

### Nested for loop

```python
#Este é o formato do loop for aninhado
for variávelA in rangeA:
   for variávelB in rangeB:
      declarações(B)
   declarações(A)
```
No loop `for` acima, quando a variávelA não estiver no intervaloA, pularemos o bloco inteiro. Quando a variávelA estiver no intervaloA, iremos para o loop for interno. Se a variávelB estiver no intervaloB, a instrução (B) será executada. Se a variávelB não estiver no intervaloB, pularemos o loop for interno e iremos para o loop externo.

Se a variávelA não estiver no intervaloA, nenhuma das instruções será executada; instrução (B) e instrução (A) serão executadas se e somente se a variávelA estiver no intervaloA e a variávelB estiver no intervaloB.

Vejamos um exemplo.

```python
#Este é o exemplo de loop for aninhado
#Abaixo está nosso loop externo
for n in range(0, 3):
    #Abaixo está nosso loop interno
    for m in range(0, 3):
        #Imprima se m estiver no intervalo(0, 3)
        print("(", n, ",", m, ")", end = " ")
    #Imprima se n estiver no intervalo(0, 3)
    print("")
```
Esta é a saída do nosso exemplo.

```output
( 0 , 0 ) ( 0 , 1 ) ( 0 , 2 ) 
( 1 , 0 ) ( 1 , 1 ) ( 1 , 2 ) 
( 2 , 0 ) ( 2 , 1 ) ( 2 , 2 ) 
```

#### Perguntas
Você pode tentar explicar o padrão de impressão?

(**Dica**: quantas vezes passamos pelo loop externo e pelo loop interno separadamente?)

<hr/>

### Desafio Dois
Tente alterar os números inteiros no loop for aninhado e prever as saídas.
Em seguida, execute o código e observe as saídas. Eles correspondem às suas previsões?

<iframe src="https://trinket.io/embed/python/8b9effdbd6" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

#### Perguntas
Tente inicializar n e m. Isso mudará nossa saída dos nested loops e por quê?
Em seguida, execute o código e observe as saídas. Eles correspondem às suas previsões?

<iframe src="https://trinket.io/embed/python/1ea8b47667" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

#### Perguntas
Ao final desta seção, vamos pensar nas seguintes questões:
*1*. Por que a inicialização não altera a saída?

(**Dica**: O que a variável no loop for representa?)

*2*. O que devemos fazer se quisermos começar a imprimir a partir de (1, 1)?

(**Dica**: O que aconteceria se alterássemos os intervalos?)

### Desafio Três

Usando o nested loop `for` ou o loop `while`, tente imprimir o seguinte padrão

    ```
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5
    ```

**Dica**: para imprimir sem uma nova linha, você pode usar `print(x, end=" ")`. E para forçar uma nova linha você pode usar `print()`.
