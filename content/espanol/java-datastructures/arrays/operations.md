---
title: "Operaciones"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/NQXV586afr8" title="Operaciones - video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Creando un array

Los arrays se utilizan para almacenar múltiples valores en una sola variable, en lugar de declarar variables separadas para cada valor. Para declarar un array, define el tipo de variable con corchetes.

```js javascript
String[] restaurantes;
```
Ahora hemos declarado una variable que contiene un array de cadenas. Para insertar valores, podemos usar un literal de array: coloca los valores en una lista separada por comas dentro de llaves:

```js javascript
String[] restaurantes = {"Burger King", "Chipotle", "Panda Express", "Subway"};
```

Para crear un array de enteros, podrías escribir:

```js javascript
int[] misNumeros = {10, 20, 30, 40};
```
<hr>

## Accediendo a elementos de un array

Accedes a un elemento de un array haciendo referencia al número de índice. Esta instrucción accede al valor del primer elemento en restaurantes:

```js javascript
String[] restaurantes = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurantes[0]);

// El sistema mostrará "Burger King"
```

<hr>

## Cambiando un elemento de un array

Para cambiar el valor de un elemento específico, haz referencia al número de índice:

```js javascript
String[] restaurantes = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurantes[0]);
// El sistema mostrará "Burger King"

restaurantes[0] = "McDonalds";
System.out.println(restaurantes[0]);
// El sistema ahora mostrará "McDonalds"
```

<hr>

## Encontrando la longitud de un array

Para saber cuántos elementos tiene un array, utiliza la propiedad `length`:

```js javascript
String[] restaurantes = {"Burger King", "Chipotle", "Panda Express", "Subway"};
System.out.println(restaurantes.length);
// El sistema mostrará 4
```
<hr>

## Iterando a través de un array

Puedes recorrer los elementos de un array utilizando el bucle `for`, y usar la propiedad `length` para especificar cuántas veces debe ejecutarse el bucle. El siguiente ejemplo muestra todos los elementos en el array restaurantes:

```js javascript
String[] restaurantes = {"Burger King", "Chipotle", "Panda Express", "Subway"};
for (int i = 0; i < restaurantes.length; i++) {
    System.out.println(restaurantes[i]);
}

// Salidas:
// Burger King
// Chipotle
// Panda Express
// Subway
```