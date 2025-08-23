---
title: "Atividade 5 – Analisando o pedido do cliente"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---
## Pre-reqs
- <a href="../../python-basics/functions" target="_blank">Funções</a>
- <a href="../../python-basics/Loops" target="_blank">Loops</a>

## Analisando o pedido do cliente
Recebemos o pedido do cliente e agora precisamos simplesmente calcular quanto custa o pedido!

### Criando um dicionário a partir do pedido do cliente
A primeira função que escreveremos é `createDictOrderItems(listOrderItems)` e leva como parâmetro a lista de itens no pedido do cliente. Estaremos devolvendo um dicionário com todos os itens encomendados e suas respectivas quantidades. Atualmente temos apenas uma lista de strings que contém o nome do item e a quantidade, porém, precisamos separar essas informações e converter a quantidade em um tipo inteiro, pois é um número.
  - Vamos primeiro criar um dicionário vazio intitulado `dictItems` que eventualmente armazenará essas informações.
  - Em seguida, escreva um loop (Hmm, que tipo de loop você deseja usar?) que itere sobre todos os orderItems na lista que passamos.
  - Neste loop, queremos dividir cada string pelo `"-"` que está entre o nome do item e a quantidade. Se você especificou um formato diferente com `" : "` ou `" - "` ou qualquer outra coisa, especifique-o aqui. O primeiro item que recebemos ao dividir a string é o nome do item. O segundo item que obtemos é a quantidade, converta-a para um número inteiro. Armazene ambos os valores em variáveis ​​nomeadas de forma útil, como `itemName` e `itemQuantity`.
  - Ainda dentro do loop, agora precisamos adicionar isso ao dicionário `dictItems`. No entanto, lembre-se de que, como tecnicamente um cliente pode pedir a mesma coisa várias vezes em itens de pedido separados, precisamos combinar isso aqui. Por exemplo, se o cliente pedir Rolinhos Primavera-2 duas vezes, queremos interpretar isso como 4 Rolinhos Primavera. Para fazer isso, precisamos ter um bloco `if`-`else` onde se o dicionário já contém o nome do item, então adicione esta nova quantidade à quantidade já associada ao nome do item, caso contrário crie um novo par chave-valor com o nome do item e quantidade.
  - Por fim, após o término desse loop, lembre-se de devolver esse dicionário!

### Calcular preços através do dicionário
A segunda função que vamos escrever é `computePrices(dictItems)` que pega o dicionário que criamos na última função como parâmetro e retorna um novo dicionário que tem cada nome de item associado ao preço * quantidade.
  - Crie um dicionário vazio `dictItemAndPrice` que conterá o item e o preço total desse item.
  - Faça um loop pelos itens do dicionário que acabamos de passar. Dentro desse loop, queremos obter a quantidade do item de `dictItems`, pois é o valor no par chave-valor do dicionário. Também queremos acessar o preço do item a partir da variável global `dictMenu`. Porém, lembre-se de que é o primeiro valor da lista associado ao nome do item e precisamos acessá-lo de acordo.
  - Multiplique esses dois números para obter o preço total desse item.
  - Adicione o nome do item e o par de preço total ao dicionário `dictItemAndPrice`.
  - Devolva este dicionário.

### Calcule o preço total do pedido
A terceira função que criaremos é `computeTotalPrice(dictItemAndPrice)` que pega o dicionário que criamos em `computePrices(dictItems)` como parâmetro e retorna o preço total de todo o pedido do cliente.
  - Inicialize uma variável `totalPrice` com `0` para que possamos adicionar os preços de cada item a ela.
  - Percorra o dicionário `dictItemAndPrice` e adicione cada um dos valores a `totalPrice`.
  - Retorne totalPrice arredondado para 2 casas decimais usando `round()` e forneça 2 como o segundo valor para que ele seja arredondado para a centésima casa, pois é assim que queremos que o preço final seja exibido.

Todas essas 3 funções auxiliares serão chamadas na função `main()` no bloco `else` na ordem em que as escrevemos. O valor que retornamos para a primeira função será o argumento para a segunda função, e o valor retornado da 2ª função será o argumento da terceira função e, por fim, o resultado da 3ª função será utilizado na próxima atividade! Lembre-se de armazenar explicitamente cada um dos resultados das funções em variáveis ​​para que você possa reutilizá-los diversas vezes.
