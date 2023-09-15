---
title: "Atividade 7 - Desenho de uma figura 8"
date: 2019-07-25T13:24:17-07:00
weight: 10
draft: false
---

![alt text width="70%"](../media/turtle_circles.png "Desenhando uma Figura 8")

Legal! Agora vamos fazer uma figura 8 como primeiro passo para fazer uma flor de mandala! A figura 8 é apenas dois círculos opostos entre si. 
Para fazer isso, podemos fazer uso do método `turtle.circle(x)`, que toma um inteiro `x` como o raio do círculo. (Você deve se lembrar que `raio de 2 *` é a largura do círculo.) Ter o raio como um **argumento** significa que podemos decidir o quão grande ou pequeno o círculo deve ser.

``` python
  import turtle
  turtle.circle(20)
```
No exemplo acima, o círculo tem 40 pixels de largura e o círculo é desenhado no sentido anti-horário. Se o argumento para `turtle.circle()` for negativo, então o círculo é desenhado no sentido horário e é oposto à versão original.

Usando essas informações, crie uma nova função chamada `figure_8()` que desenha uma figura 8.

<iframe src="https://trinket.io/embed/python/e87cb9f3b9" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>