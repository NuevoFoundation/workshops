---
title: "Iterando sobre Arrays"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 6
---


Uma das operações comuns de array (vetor) é iterar sobre os valores e processar cada um deles de alguma forma. Vamos discutir algumas das maneiras mais simples de conseguir isso:

## Array.forEach()
O método `forEach()` chama uma função (uma função de retorno de chamada. Neste caso, função chamada printBr) uma vez para cada elemento do array.

A função passada para `forEach` é executada uma vez para cada item do array, com o item do array passado como argumento para a função. Valores não atribuídos não são iterados em um loop forEach.

**Sintaxe:**
```javascript
arrayName.forEach(functionName);
```

<b>Example:</b>
![#Can't find image](../../img/foreach.png)
