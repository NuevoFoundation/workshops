---
title: "Iterar sobre Arreglos"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 6
---

Una de las operaciones comunes con arreglos es iterar sobre los valores y procesar cada uno de alguna manera. Vamos a repasar y discutir algunas de las formas más simples de lograr esto:

## Array.forEach()
El método `forEach()` llama a una función (una función de devolución de llamada. En este caso, una función llamada printBr) una vez por cada elemento del arreglo.

La función pasada a `forEach` se ejecuta una vez por cada elemento del arreglo, con el elemento del arreglo pasado como argumento a la función. Los valores no asignados no se iteran en un bucle forEach.

**Sintaxis:**
```javascript
arrayName.forEach(functionName);
```

<b>Ejemplo:</b>
![#No se puede encontrar la imagen](../../img/foreach.png) 