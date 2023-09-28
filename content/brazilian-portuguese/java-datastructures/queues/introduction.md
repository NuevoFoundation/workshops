---
title: "Introdução"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
--- 

## Visualizando uma fila (queue)

Imagine que você está projetando o NuevoEats para uma empresa, e talvez essa empresa seja o McDonalds.

Queremos atender nossos novos clientes potenciais da maneira mais eficiente possível para nossos grandes negócios; um por vez. Quando os clientes fazem seus pedidos para viagem no aplicativo NuevoEats, é quase como se estivessem formando uma fila ordenada em frente ao nosso restaurante, com novos clientes entrando nos últimos lugares. Os clientes devem essencialmente “fazer fila” quando fazem seus pedidos e nós devemos atender esses mesmos clientes de frente para trás.

`Queue`s em Java funciona de maneira semelhante. Depois de declararmos nossa `Queue`, podemos adicionar novos elementos na parte de trás e removê-los da frente.

Na verdade, a maioria das filas que encontraremos em Java funciona da seguinte maneira: Primeiro a entrar, primeiro a sair – geralmente abreviado como FIFO (First In, First Out).

![image](../img/queue.png)
