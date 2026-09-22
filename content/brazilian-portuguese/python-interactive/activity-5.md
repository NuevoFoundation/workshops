```markdown
---
title: "Atividade 5 - Analisando o pedido do cliente"
date: 2019-07-25T13:24:17-07:00
weight: 6
draft: false
---
## Pré-requisitos
- <a href="../../python-basics/functions" target="_blank">Funções</a>
- <a href="../../python-basics/conditional-statements-loops/loops/" target="_blank">Laços de repetição</a>

## Analisando o pedido do cliente
Recebemos o pedido do cliente e, agora, precisamos calcular quanto custa o pedido deles!

### Criando um dicionário a partir do pedido do cliente
A primeira função que vamos escrever é `createDictOrderItems(listOrderItems)` e ela recebe uma lista de itens do pedido do cliente como parâmetro. Vamos retornar um dicionário com todos os itens pedidos e suas respectivas quantidades. Atualmente, temos apenas uma lista de strings que contém tanto o nome do item quanto a quantidade. No entanto, precisamos separar essas informações e converter a quantidade para o tipo inteiro, já que é um número.
  - Primeiro, vamos criar um dicionário vazio chamado `dictItems`, que armazenará essas informações.
  - Em seguida, escreva um loop (Hmm, qual tipo de loop você gostaria de usar?) que itere sobre todos os `orderItems` na lista que passamos.
  - No loop, queremos dividir cada string pelo `"-"`, que está entre o nome do item e a quantidade. Se você especificou um formato diferente como `" : "` ou `" - "` ou qualquer outro, especifique isso aqui. O primeiro item obtido ao dividir a string é o nome do item. O segundo item é a quantidade, que deve ser convertida para um inteiro. Armazene esses valores em variáveis com nomes úteis, como `itemName` e `itemQuantity`.
  - Ainda dentro do loop, agora precisamos adicionar isso ao dicionário `dictItems`. No entanto, lembre-se de que, como o cliente pode tecnicamente pedir o mesmo item várias vezes em pedidos separados, precisamos combinar isso aqui. Por exemplo, se o cliente pedir Spring Rolls-2 duas vezes, queremos interpretar isso como 4 Spring Rolls. Para isso, utilizamos um bloco `if`-`else`, onde, se o dicionário já contém o nome do item, adicionamos essa nova quantidade à quantidade já associada ao nome do item; caso contrário, criamos um novo par chave-valor com o nome do item e a quantidade.
  - Finalmente, após o fim do loop, lembre-se de retornar este dicionário!

### Calcular preços a partir do dicionário  
A segunda função que vamos escrever é `computePrices(dictItems)`, que recebe o dicionário criado na função anterior como parâmetro e retorna um novo dicionário que associa cada nome de item ao preço * quantidade.
  - Crie um dicionário vazio `dictItemAndPrice`, que armazenará o item e o preço total para aquele item.
  - Percorra os itens do dicionário que acabamos de passar como parâmetro. Dentro desse loop, queremos obter a quantidade do item de `dictItems`, já que é o valor do par chave-valor do dicionário. Também queremos acessar o preço do item da variável global `dictMenu`. Lembre-se, no entanto, de que este é o primeiro valor na lista associada ao nome do item e precisamos acessá-lo de forma adequada.
  - Multiplique esses dois números para obter o preço total para aquele item.
  - Adicione o par nome do item e preço total ao dicionário `dictItemAndPrice`.
  - Retorne este dicionário.

### Calcular o preço total do pedido
A terceira função que vamos criar é `computeTotalPrice(dictItemAndPrice)`, que recebe o dicionário criado em `computePrices(dictItems)` como parâmetro e retorna o preço total de todo o pedido do cliente.
  - Inicialize uma variável `totalPrice` como `0` para que possamos somar os preços de cada item a ela.
  - Percorra o dicionário `dictItemAndPrice` e adicione cada valor a `totalPrice`.
  - Retorne o `totalPrice` arredondado para 2 casas decimais usando `round()` e forneça 2 como segundo valor para arredondar até o centésimo lugar, já que é assim que queremos exibir o preço final.

Todas essas 3 funções auxiliares serão chamadas dentro da função `main()` no bloco `else`, na ordem em que foram escritas. O valor retornado pela 1ª função será o argumento da segunda função, e o valor retornado da 2ª função será o argumento da terceira função. Por fim, o resultado da 3ª função será usado na próxima atividade! Lembre-se de armazenar explicitamente os resultados de cada função em variáveis para poder reutilizá-los várias vezes.
```