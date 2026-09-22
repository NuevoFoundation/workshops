```markdown
---
title: "Métodos"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 8
---

Los métodos representan alguna acción que deseamos realizar en el array. Pueden ser utilizados para cambiar el comportamiento o realizar alguna operación en sí mismos.

Para facilitar las cosas, los arrays proporcionan muchos métodos. Vamos a ver algunos de los básicos que te darán una idea de cómo lucen.

{{% notice note %}}

#### ¿En qué se diferencia con respecto a las propiedades?

**Propiedades** son básicamente información que tiene un array. **Métodos** son lo que un array puede hacer.

{{% /notice %}}

## Concat()

Une dos o más arrays y devuelve un nuevo array.

**Sintaxis:**
```javascript
var value = arrayName1.concat(arrayName2);
```

**Ejemplo:**
![#Imposible encontrar imagen](../../img/concat.png)

## Push()
Agrega uno o más elementos al final de un array y devuelve la longitud resultante del array.

**Sintaxis:**
```javascript
var value = arrayName.push(newElement);
```

**Ejemplo:**
![#Imposible encontrar imagen](../../img/push.png)

## Pop()
Elimina el último elemento de un array y devuelve ese elemento.

**Sintaxis:**
```javascript
var value = arrayName.pop();
```

<b>Ejemplo:</b>
![#Imposible encontrar imagen](../../img/pop.png)

## Shift()

Elimina el primer elemento de un array y devuelve ese elemento.

**Sintaxis:**
```javascript
var value = arrayName.shift();
```

**Ejemplo:**
![#Imposible encontrar imagen](../../img/shift.png)

# Unshift()

Agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.

**Sintaxis:**
```javascript
var value = arrayName.unshift(newElement);
```

**Ejemplo:**
![#Imposible encontrar imagen](../../img/unshift.png)

## Sort()

Ordena los elementos de un array en su lugar y devuelve una referencia al array.

**Sintaxis:**
```javascript
var value = arrayName.sort();
```

**Ejemplo:**
![#Imposible encontrar imagen](../../img/sort.png)

# Reverse()

Invierte el orden de los elementos de un array en su lugar: el primer elemento del array se convierte en el último y el último en el primero. Devuelve una referencia al array.

**Sintaxis:**
```javascript
var value = arrayName.reverse();
```

**Ejemplo:**
![#Imposible encontrar imagen](../../img/reverse.png)
```