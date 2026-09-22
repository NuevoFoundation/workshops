---
title: "Iterando sobre Arrays"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 6
---

Uma das operações comuns em arrays é iterar sobre os valores e processar cada um deles de alguma forma. Vamos passar por isso e discutir algumas das maneiras mais simples de realizar essa tarefa:

## Array.forEach()
O método `forEach()` chama uma função (uma função de callback. Neste caso, uma função chamada `printBr`) uma vez para cada elemento do array.

A função passada para o `forEach` é executada uma vez para cada item do array, com o item do array passado como argumento para essa função. Valores não atribuídos não são iterados em um loop `forEach`.

**Sintaxe:**
```javascript
arrayName.forEach(functionName);
```

<b>Exemplo:</b>
![#Não foi possível encontrar a imagem](../../img/foreach.png)