---
title: "Atividade 4 - Interagindo com o Cliente"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---
## Interagindo com o Cliente
Vamos continuar interagindo com o cliente e registrar o pedido dele! Na função `main()`, a próxima coisa que precisamos fazer é criar uma lista vazia armazenada na variável `listOrderItems` para que qualquer item que o cliente eventualmente pedir seja armazenado ali.

Agora vamos usar nosso conhecimento de declarações if-else e loops while para receber o pedido do cliente. Se o cliente respondeu Não à pergunta sobre se ele gostaria de pedir algo do menu, então exiba uma mensagem de Despedida. Caso contrário, peça para ele inserir o primeiro item e a quantidade que deseja pedir em um formato específico, como `"(Exemplo de item pedido: Spring Rolls-2)"` fornecido no enunciado.

Pronto, temos o primeiro item que o cliente quer pedir! Bom, pelo menos é o que achamos... Porém, na verdade não sabemos o que o cliente digitou na função `input()`. Ele pode muito bem ter escrito `"Baa Baa Baa Ba ba banana"` do filme dos Minions. Ou pode ter escrito um item válido do menu, mas fora do formato especificado, como `"Spring Rolls : 2"` ou `"Spring Rolls -2`, ambos formatos inválidos! Ou talvez até tenha informado uma quantidade NEGATIVA... Enfim, não temos noção do que o cliente pode ter digitado, e precisamos proteger tanto o cliente quanto nosso programa contra essas entradas inválidas.

Então, vamos escrever uma função que verificará qualquer entrada de item pedido pelo cliente e chamá-la de `orderItemChecking(item)`. Note que ela possui um parâmetro? Isso indica que precisamos passar o item pedido como argumento para esta função a partir da `main()`. Nesta função, queremos nos proteger contra todas as armadilhas possíveis mencionadas no parágrafo anterior.

Dica: Use declarações `if` para capturar entradas incorretas.

Dica: Retorne um valor booleano, seja `True` se a entrada for válida ou `False` se for inválida.

Dica: Um método útil de strings para analisar a entrada `orderItemInput` seria `str.split()`... por que tipo de caractere deveríamos dividir?

Como conseguimos verificar a entrada do cliente, vamos voltar à função `main()` e adicionar um loop `while` no bloco `else` logo após a chamada para obter o primeiro item do cliente. Este loop `while` continuará pedindo para o cliente inserir um item do pedido e a quantidade no mesmo formato já mencionado até que `orderItemChecking(item)` retorne `True`. Lembre-se de armazenar o resultado do `input()` na mesma variável usada quando você perguntou pela primeira vez, caso contrário, o loop `while` não poderá continuar.

Quando o cliente finalmente inserir um item de pedido válido, adicione esse item à lista `listOrderItems` que você criou anteriormente.

Como conseguimos registrar um item com sucesso, vamos descobrir se o cliente deseja pedir outro item, ou outros dois, ou talvez mais. Para isso, escreveremos outra função auxiliar chamada `isOrderComplete()`, que pedirá para o cliente inserir Sim ou Não, semelhante à função `orderFromRestaurantYN()`, em um formato especificado até que ele nos dê uma resposta válida. Se o cliente disser Sim, retornaremos `True` para indicar que ele deseja pedir pelo menos mais um item. Caso contrário, retornaremos `False`, já que ele não deseja pedir mais nada.

Nossas funções auxiliares estão completas! Agora só precisamos chamá-las no bloco `else` da função `main()`. A lógica para esta última parte é essencialmente:

- Enquanto `isOrderComplete()` for `True`, continue pedindo para o cliente inserir um item do menu que gostaria de pedir e a quantidade.
- Dentro deste loop `while`... Após o cliente informar um item que deseja pedir, verifique com `orderItemChecking(item)` se a entrada é válida ou não. Enquanto não for uma entrada válida, continue pedindo ao cliente para tentar novamente até que ele informe um item corretamente. Certifique-se de avisá-lo de que a entrada anterior estava incorreta.
- Após o término do loop interno, indicando que o usuário forneceu um item e quantidade corretos, adicione este item à lista `listOrderItems` criada anteriormente.

Se parte desse processo soou familiar, isso é bom! É exatamente o que fizemos quando pedimos ao cliente o primeiro item que ele queria pedir.

Ótimo trabalho! Você conseguiu receber a entrada do usuário e verificar se há erros que ele possa ter cometido, o que é incrível!