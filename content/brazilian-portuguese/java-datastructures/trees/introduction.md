---
title: "Introdução"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 1
--- 

As árvores são compostas por dois componentes: **arestas** e **nós**. Vamos dar uma olhada em cada um desses componentes com mais detalhes.

### Arestas

Você pode imaginar uma aresta como a linha que conecta dois nós. As arestas sempre conectam exatamente dois nós. Elas podem carregar alguma informação, mas não necessariamente precisam.

### Nós

Os nós são apenas pontos em uma árvore que representam alguns dados. Uma árvore precisa de pelo menos um nó e cada nó pode ter tantas arestas quanto desejar, desde que esteja conectado a outro nó distinto.

### Por que Árvores?

As árvores são estruturas de dados muito simples que podem armazenar uma grande quantidade de dados enquanto ainda permitem encontrá-los rapidamente. Muitos algoritmos que dependem de encontrar a melhor correspondência organizam seus dados em uma árvore antes de iniciar a busca, otimizando, assim, sua velocidade. Alguns exemplos de árvores sendo usadas no mundo real incluem:
* <a href="https://en.wikipedia.org/wiki/Spanning_Tree_Protocol" target="_blank">Protocolo de Árvore de Expansão</a> - Um protocolo fundamental para o uso da Internet, 
* <a href="https://en.wikipedia.org/wiki/Binary_search_algorithm" target="_blank">Busca Binária</a> - Um dos algoritmos mais eficientes para buscar dados em um conjunto ordenado,
* <a href="https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html" target="_blank">TreeMaps</a> - O equivalente à estrutura de dados HashMap em Java que utiliza uma árvore para organizar os dados.

Algumas árvores têm regras mais específicas sobre como os dados são adicionados a elas e como são mantidos, o que significa que quase sempre há uma árvore adequada para qualquer cenário.

## Visualizando Árvores

As árvores possuem o que chamamos de **nó raiz**, que é o nó onde o restante da árvore se conecta, seja de maneira direta ou indireta. Chamamos essa estrutura de dados de árvore porque os nós ramificam a partir do nó raiz. Quando você vê uma árvore sendo desenhada, normalmente verá o nó raiz no topo, mas isso nem sempre acontece!

![image](../img/tree.png)