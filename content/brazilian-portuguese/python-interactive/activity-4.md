---
title: “Atividade 4 – Interagindo com o Cliente”
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---
## Interagindo com o Cliente
Vamos continuar interagindo com o cliente e receber seu pedido! Na função `main()`, a próxima coisa que precisamos fazer é criar uma lista vazia armazenada na variável `listOrderItems` para que quaisquer itens que eles eventualmente solicitarem sejam armazenados aqui.

Agora vamos usar nosso conhecimento de instruções if-else e while loops para receber o pedido do cliente. Se o cliente respondeu Não à pergunta perguntando se gostaria de pedir algo do menu, emita uma declaração de adeus. Caso contrário, peça-lhes que insiram o primeiro item e a quantidade que gostariam de pedir com um formato especificado, como `"(Exemplo de item de pedido: Rolinhos Primavera-2)"` fornecido no prompt.

Temos o primeiro item que o cliente deseja encomendar! Bem, pelo menos é isso que pensamos... No entanto, na verdade não sabemos o que o cliente digitou na função `input()`, ele pode ter acabado de inserir `"Baa Baa Baa Ba ba banana"` dos filmes dos Minions. Ou eles podem ter inserido um item de menu válido, mas não está no formato que você especificou. Eles podem ter escrito `"Rolinhos Primavera: 2"` ou `"Rolinhos Primavera -2`, nenhum dos quais é uma entrada válida! Ou eles podem até ter dado a você uma quantidade NEGATIVA, sendo que não temos ideia do que o cliente pode ter entrado e precisamos proteger o cliente e nosso programa contra essa entrada inválida.

Então, vamos escrever uma função que irá verificar a entrada do item do pedido de qualquer usuário e chamá-la de `orderItemChecking(item)`. Observe como demos um parâmetro a ele? Isso sinaliza que precisamos passar o item do pedido como argumento para esta função de `main()`. Nesta função queremos nos proteger contra todas as possíveis armadilhas mencionadas no parágrafo anterior.

Dica: Use instruções `if` para detectar entradas incorretas.

Dica: Retorne um valor booleano, `True` se a entrada for válida ou `False` se a entrada for inválida.

Dica: Um método de string útil para analisar o orderItemInput seria `str.split()`... pelo que devemos dividir?

Como podemos verificar a entrada do cliente, vamos voltar à função `main()` e adicionar um loop `while` no bloco `else` abaixo da chamada para obter o primeiro item do cliente. Este loop `while` continuará solicitando ao usuário que insira um item de pedido válido e uma quantidade como antes, até que `orderItemChecking(item)` retorne `True`. Lembre-se de armazenar o resultado de `input()` na mesma variável que você usou quando solicitou a entrada pela primeira vez, caso contrário, o loop `while` não poderá continuar.

Quando o usuário finalmente inserir um item de primeira ordem válido, adicione esse item à lista `listOrderItems` que você criou anteriormente.

Como obtivemos um item com sucesso, vamos descobrir se o cliente deseja solicitar outro item, ou mais dois itens, ou até mais. Para fazer isso, escreveremos outra função auxiliar, `isOrderComplete()`, que solicitará ao usuário que insira Sim ou Não semelhante a `orderFromRestaurantYN()` em um formato especificado até que nos forneça um valor válido resposta. Se eles disserem Sim, retornaremos `True` para indicar que desejam solicitar pelo menos mais um item. Caso contrário, retornaremos `False`, pois eles não querem pedir mais nada.

Nossas funções auxiliares estão completas! Agora só precisamos chamar essas funções no bloco `else` da função `main()`. A lógica desta última parte é essencialmente:

- Embora `isOrderComplete()` seja `True`, continue pedindo ao cliente para inserir um item do menu que gostaria de pedir e a quantidade.
- Dentro deste loop `while`... Depois que o usuário nos fornecer um item que deseja solicitar, verifique com `orderItemChecking(item)` para ver se é uma entrada válida ou não. Embora não seja uma entrada válida, continue pedindo ao cliente para tentar novamente até que ele peça outro item com sucesso. Certifique-se de avisá-los que nos deram uma entrada incorreta.
- Depois que o loop while interno terminar, indicando que o usuário inseriu um item e uma quantidade corretos, adicione este item à lista `listOrderItems` anterior.

Se parte desse processo parece familiar, isso é bom! Foi exatamente o que fizemos quando o usuário inseriu o primeiro item que desejava solicitar.

Bom trabalho! Você obteve sucesso na entrada do usuário e verificou se havia algum erro que ele pudesse ter cometido, o que é incrível!
