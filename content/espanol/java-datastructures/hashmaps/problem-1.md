---
title: "Problema 1: Conceptos básicos de HashMap"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
--- 

## Tarea 1: Usar HashMap para organizar datos

¡Es una fiesta! ¡Un cliente tiene una gran fiesta de cumpleaños para más de 20 personas! Cada uno tiene su propio pedido. Para mantener el pedido masivo organizado, decides crear un hashmap de `String`s. El nombre de la cumpleañera es Isabella, pero su nombre se ha perdido en la lista. ¿Puedes averiguar qué pidió Isabella?

{{% notice tip %}}
1. ¿Recuerdas los métodos de hashmap?
2. ¡Mira el ejemplo de pedido a continuación!
{{% /notice%}}

```js javascript
// Ejemplo del hashmap actual
HashMap<String, String> order = new HashMap<String, String>();

//clave, valor
order.put("Justin", "Sprite");
order.put("George", "Coke");
order.put("Sam", "Fanta");
order.put("Eva", "Coke");
order.put("Olivia", "Coke");
...
```

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/HashMapGet" target="_blank">Lanzar Replit</a>