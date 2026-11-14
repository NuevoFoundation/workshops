---
title: "Mais sobre funções"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
--- 

Suponha que você tenha muitas linhas de código e queira dar um nome significativo a esta seção de código. <b>Funções</b> são blocos de código que fazem exatamente isso. Uma função é um conjunto de instruções que damos ao computador para armazenar e pode receber <b>parâmetros</b> (dados de entrada) e dados de saída. Uma função em Python se parece com isto:

```python
def my_function():
    print("Hello World!")
    print("My name is Nuvi!")
```

Vamos analisar este trecho de código. O `def` informa ao computador que você está escrevendo uma função. Damos um nome a ele, neste caso, `my_function`. Em seguida, colocamos dois pontos (o símbolo `:`) para indicar que a função está iniciando. As próximas duas linhas estão **a dois espaços de distância do lado esquerdo do editor de texto** - isso informa ao computador que essas linhas fazem parte da definição da função. Isso é **muito importante**, então não perca esse detalhe!

Pressione run.

Você notará que nada acontece. Esta é apenas uma definição de função – precisamos “chamar” a função para executar o código dentro da função. Em outras palavras, o computador entende as instruções, mas você precisa dizer ao computador para seguir as instruções fornecidas. Você pode chamar `my_function()` em qualquer lugar, desde que seja depois que a função for definida. Coloque `my_function()` abaixo da definição da função, sem espaços na frente. Seu código deve ficar assim:
 

```python
def my_function():
    print("Hello World!")
    print("My name is Nuvi!")

my_function()
```

{{% notice note %}}

Não se esqueça de remover os dois espaços antes de chamar my_function(). Caso contrário, você poderá se deparar com um comportamento inesperado!

{{% /notice %}}

## Escrevendo funções matemáticas ##
Você deve estar familiarizado com a definição matemática de uma função; por exemplo,
a função 𝒇(𝒙) = 3𝒙. Ele pega um valor de entrada, 𝒙, e transforma o valor multiplicando-o por 3. Da mesma forma, em python, você também pode fornecer valores de entrada (chamados <b>parâmetros</b>) para uma função e <font color="#005a9c">retornar</font> (ou produzir) um valor de saída. Um exemplo de função Python que triplica um determinado
número é fornecido abaixo:

```python
def triple(number):
    return number *3

value = triple(2)
print(value)
```
`number` é o nome do parâmetro (entrada) que estamos dando à função triplo. A palavra `return` é usada apenas em funções e permite que a função gere um valor. Neste caso, a função tripla retorna (saída) `número * 3`, que então pode ser armazenado em uma variável e impresso. Se a variável de função. Verifique se o código acima imprime o número `6`.
