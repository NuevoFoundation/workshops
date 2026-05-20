---
title: "Usando o Replit"
date: 2019-07-29T13:24:17-07:00
weight: 1
draft: false
---

Para construir nosso jogo, vamos usar a biblioteca **Pygame**, que oferece um conjunto de funcionalidades prontas que podemos usar para montar o Pong e suas animações.

## Usando o Replit

Hoje, vamos utilizar o **Replit** para construir o jogo Pong.

Se você quiser revisar como usar o Replit, confira nosso <a href="https://workshops.nuevofoundation.org/python-basics/repl-it/" target="_blank">tutorial de Fundamentos de Python</a>.

Agora, vamos explorar um pouco do código que foi preparado para você no arquivo `main.py`.

{{% notice tip %}}

## Bibliotecas e instruções de importação

Olhe para o topo do código. Você verá a seguinte linha:


```
import pygame
```

Essa linha permite que a gente importe todas as funcionalidades de animação e desenho de objetos fornecidas pela biblioteca `pygame`.  
Uma **biblioteca** é como uma caixa de ferramentas, onde várias funções parecidas ficam guardadas para serem usadas com a linguagem Python.  

Por exemplo, a biblioteca `pygame` tem uma maneira de desenhar um **retângulo** na tela — e é isso que usamos para desenhar as bordas, a bola e as raquetes no jogo Pong.

## Comentários

A linha cinza que começa com `#` é chamada de **comentário**.  
Comentários são anotações no código que explicam, em português comum, o que aquele pedaço do código faz.  

O computador **ignora** os comentários — eles são feitos para que programadores conversem entre si, principalmente quando várias pessoas estão mexendo no mesmo projeto.  
Comentários também ajudam quem está olhando o código a entender o que está acontecendo sem precisar ler tudo nos mínimos detalhes.

No arquivo `main.py`, usamos comentários o tempo todo para mostrar onde o código precisa ser alterado.

{{% /notice %}}
