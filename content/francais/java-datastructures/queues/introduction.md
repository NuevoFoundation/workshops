---
title: "Introduction"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
--- 

## Visualisation d'une File d'attente

Imaginez que vous concevez NuevoEats pour une entreprise, et peut-être que cette entreprise est McDonald's.

Nous souhaitons servir nos nouveaux clients potentiels de la manière la plus efficace possible pour notre grande entreprise : un à la fois. Lorsque les clients passent leur commande à emporter sur l'application NuevoEats, c'est presque comme s'ils formaient une file ordonnée devant notre restaurant, avec de nouveaux clients se joignant à l'arrière. Les clients doivent en quelque sorte "faire la queue" lorsqu'ils passent leur commande, et nous devons servir ces clients dans l'ordre, de l'avant vers l'arrière.

Les `Queues` en Java fonctionnent de manière similaire. Une fois que nous avons déclaré notre `Queue`, nous pouvons ajouter de nouveaux éléments à l'arrière et les retirer à l'avant.

En fait, la plupart des files d'attente que nous rencontrerons en Java fonctionnent selon ce principe "Premier arrivé, premier sorti", souvent abrégé en FIFO (First In, First Out).

![image](../img/queue.png)