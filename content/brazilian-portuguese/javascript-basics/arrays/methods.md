---
title: "Métodos"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

Os métodos representam uma ação que desejamos executar no array. Eles podem ser usados para alterar o comportamento ou realizar algumas operações no próprio array.

Para facilitar as coisas, os arrays oferecem muitos métodos. Vamos explorar alguns dos básicos para dar uma ideia de como eles são.

{{% notice note %}}

#### Como isso é diferente em relação às propriedades?

**Propriedades** são basicamente informações que um array possui. **Métodos** são o que um array pode fazer.

{{% /notice %}}

## Concat()

Une dois ou mais arrays e retorna um novo array.

**Sintaxe:**
```javascript
var value = arrayName1.concat(arrayName2);
```

**Exemplo:**
![#Não foi possível encontrar a imagem](../../img/concat.png)

## Push()
Adiciona um ou mais elementos ao final de um array e retorna o comprimento resultante do array.

**Sintaxe:**
```javascript
var value = arrayName.push(newElement);
```

**Exemplo:**
![#Não foi possível encontrar a imagem](../../img/push.png)

## Pop()
Remove o último elemento de um array e retorna esse elemento.

**Sintaxe:**
```javascript
var value = arrayName.pop();
```

**Exemplo:**
![#Não foi possível encontrar a imagem](../../img/pop.png)

## Shift()

Remove o primeiro elemento de um array e retorna esse elemento.

**Sintaxe:**
```javascript
var value = arrayName.shift();
```

**Exemplo:**
![#Não foi possível encontrar a imagem](../../img/shift.png)

# Unshift()

Adiciona um ou mais elementos no início de um array e retorna o novo comprimento do array.

**Sintaxe:**
```javascript
var value = arrayName.unshift(newElement);
```

**Exemplo:**
![#Não foi possível encontrar a imagem](../../img/unshift.png)

## Sort()

Ordena os elementos de um array no local e retorna uma referência ao array.

**Sintaxe:**
```javascript
var value = arrayName.sort();
```

**Exemplo:**
![#Não foi possível encontrar a imagem](../../img/sort.png)

# Reverse()

Inverte os elementos de um array no local: o primeiro elemento do array se torna o último e o último se torna o primeiro. Ele retorna uma referência ao array.

**Sintaxe:**
```javascript
var value = arrayName.reverse();
```

**Exemplo:**
![#Não foi possível encontrar a imagem](../../img/reverse.png)