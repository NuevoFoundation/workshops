---
title: "Introducción"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

## Visualizando una Cola

Imagina que estás diseñando NuevoEats para un negocio, y tal vez este negocio sea McDonald's.

Queremos atender a nuestros nuevos clientes potenciales de la manera más eficiente posible para nuestro gran negocio; uno a la vez. Cuando los clientes realizan su pedido para llevar en la aplicación NuevoEats, es casi como si estuvieran formando una línea ordenada frente a nuestro restaurante, con nuevos clientes uniéndose al final. Los clientes deberían esencialmente "hacer fila" cuando realicen su pedido y nosotros deberíamos atender a esos mismos clientes de adelante hacia atrás.

Las `Queue`s en Java funcionan de manera similar. Después de declarar nuestra `Queue`, podemos agregar nuevos elementos a la parte trasera y eliminarlos desde el frente.

De hecho, la mayoría de las colas que encontramos en Java funcionan de esta manera de Primero Entra, Primero Sale – a menudo abreviado como FIFO.

![image](../img/queue.png)