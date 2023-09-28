---
title: "Operações"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

## Criando um array

Arrays são usadas para armazenar vários valores em uma única variável, em vez de declarar variáveis ​​separadas para cada valor. Para declarar um array, defina o tipo de variável entre colchetes.

```js javascript
String[] restaurants;
```
Agora declaramos uma variável que contém um array de strings. Para inserir valores nele, podemos usar um array literal - coloque os valores em uma lista separada por vírgulas, entre chaves:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

Para criar um array de inteiros, você poderia escrever:

```js javascript
int[] myNum = {10, 20, 30, 40};
```
<hr>

## Acessando elementos de um array

Você acessa um elemento do array referindo-se ao número do index (índice). Esta instrução acessa o valor do primeiro elemento em restaurantes:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);

// O sistema emitirá "Burger King"
```

<hr>

## Alterando um elemento de array

Para alterar o valor de um elemento específico, consulte o número do índice:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants[0]);
// O sistema emitirá "Burger King"

restaurants[0] = "McDonalds";
System.out.println(restaurants[0]);
// O sistema agora emite "McDonalds"
```

<hr>

## Encontrando o comprimento de um array

Para descobrir quantos elementos um array tem, use a propriedade `length`:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurants.length);
// O sistema emitirá 4
```
<hr>

## Loop através de um array

Você pode percorrer os elementos do array com o `for` loop e usar a propriedade `length` para especificar quantas vezes o loop deve ser executado. O exemplo a seguir gera todos os elementos da matriz de restaurantes:

```js javascript
String[] restaurants = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurants.length; i++) {
    System.out.println(restaurants[i]);
}

// Outputs:
// Burger King
// Chipotle
// Panda Express
// Subway
```