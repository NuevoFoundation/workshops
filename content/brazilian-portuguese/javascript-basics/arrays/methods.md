---
title: "Métodos"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

Os métodos representam alguma ação que desejamos realizar no array (vetor). Eles podem ser usados ​​para alterar o comportamento ou realizar algumas operações nele mesmo.

Para facilitar as coisas, os arrays fornecem vários métodos. Vejamos alguns dos básicos que dariam uma ideia de sua aparência.

{{% notice note %}}

#### Como isto é diferente em comparação com propriedades?

**Propriedades** são basicamente informações que um array possui. **Métodos** são o que um array pode fazer.

{{% /notice %}}

## Concat()

Une dois ou mais arrays e retorna um novo array.

**Sintaxe:**
```javascript
var value = arrayName1.concat(arrayName2);
```

**Exemplo:**
![#Can't find image](../../img/concat.png)

## Push()
Adiciona um ou mais elementos ao final de uma matriz e retorna o comprimento resultante da matriz.

**Sintaxe:**
```javascript
var value = arrayName.push(newElement);
```

**Exemplo:**
![#Can't find image](../../img/push.png)

## Pop()
Remove o último elemento de um array e retorna esse elemento.

**Sintaxe:**
```javascript
var value = arrayName.pop();
```

<b>Exemplo:</b>
![#Can't find image](../../img/pop.png)

## Shift()

Remove o primeiro elemento de um array e retorna esse elemento.

**Sintaxe:**
```javascript
var value = arrayName.shift();
```

**Exemplo:**
![#Can't find image](../../img/shift.png)

# Unshift()

Adiciona um ou mais elementos à frente de um array e retorna o novo comprimento do array.

**Sintaxe:**
```javascript
var value = arrayName.unshift(newElement);
```

**Exemplo:**
![#Can't find image](../../img/unshift.png)

## Sort()

Classifica os elementos de um array no local e retorna uma referência ao array.

**Sintaxe:**
```javascript
var value = arrayName.sort();
```

**Exemplo:**
![#Can't find image](../../img/sort.png)

# Reverse()

Transpõe os elementos de um array no lugar: o primeiro elemento do array se torna o último e o último se torna o primeiro. Ele retorna uma referência ao array.

**Sintaxe:**
```javascript
var value = arrayName.reverse();
```

**Exemplo:**
![#Can't find image](../../img/reverse.png)
