```markdown
---
title: "Activity 4 - Interactuando con el Cliente"
date: 2019-07-25T13:24:17-07:00
weight: 5
draft: false
---
## Interactuando con el Cliente
¡Sigamos interactuando con el cliente y obtengamos su pedido! En la función `main()`, lo siguiente que necesitamos hacer es crear una lista vacía almacenada en la variable `listOrderItems` para que cualquier artículo que eventualmente pidan se almacene aquí.

Ahora usemos nuestro conocimiento de sentencias if-else y bucles while para recibir el pedido del cliente. Si el cliente respondió No a la pregunta de si le gustaría pedir algo del menú, entonces imprima una declaración de Despedida. De lo contrario, pídales que ingresen el primer artículo y la cantidad que desean pedir con un formato específico, como `"(Ejemplo de pedido: Spring Rolls-2)"` proporcionado en la indicación.

¡Tenemos el primer artículo que quiere pedir el cliente! Bueno, eso al menos pensamos... Sin embargo, en realidad no sabemos qué ingresó el cliente en la función `input()`, podrían haber escrito simplemente `"Baa Baa Baa Ba ba banana"` de la película de los Minions. O podrían haber ingresado un artículo del menú válido, pero no en el formato que especificaste. Podrían haber escrito `"Spring Rolls : 2"` o `"Spring Rolls -2`, ninguno de los cuales es una entrada válida. ¡O incluso podrían habernos proporcionado una cantidad NEGATIVA! El punto es que no tenemos idea de qué podría haber ingresado el cliente, y necesitamos proteger tanto al cliente como nuestro programa contra esta entrada no válida.

Así que escribamos una función que verificará cualquier entrada de artículo de pedido del usuario y la llamaremos `orderItemChecking(item)`. ¿Notaste cómo le dimos un parámetro? Eso indica que necesitamos pasar el artículo del pedido como un argumento a esta función desde la `main()`. En esta función querrás salvaguardarte contra todos los posibles errores mencionados en el párrafo anterior.

Pista: Usa sentencias `if` para capturar entradas incorrectas.

Pista: Devuelve un valor booleano, ya sea `True` si la entrada es válida o `False` si la entrada es inválida.

Pista: Un método útil de cadenas para analizar el `orderItemInput` sería `str.split()`... ¿por qué deberíamos dividir?

Dado que podemos verificar la entrada del cliente, volvamos a la función `main()` y agreguemos un bucle `while` en el bloque `else` bajo la llamada para obtener el primer artículo del cliente. Este bucle `while` seguirá pidiéndole al usuario que ingrese un artículo y cantidad válidos como antes hasta que `orderItemChecking(item)` devuelva `True`. Recuerda almacenar el resultado de la función `input()` en la misma variable que usaste cuando primero pediste la entrada, de lo contrario el bucle `while` no puede continuar.

Cuando el usuario finalmente haya ingresado un primer artículo de pedido válido, agrega ese artículo a la lista `listOrderItems` que creaste anteriormente.

Dado que hemos obtenido un artículo con éxito, averigüemos si el cliente quiere pedir otro artículo, o dos más, o incluso más. Para hacer esto, escribiremos otra función auxiliar, `isOrderComplete()`, que le pedirá al usuario que ingrese Sí o No, similar a `orderFromRestaurantYN()`, en un formato especificado hasta que nos dé una respuesta válida. Si dicen Sí, devolvemos `True` para indicar que quieren pedir al menos un artículo más. De lo contrario, devolvemos `False` ya que no quieren pedir nada más.

¡Nuestras funciones auxiliares están completas! Ahora solo necesitamos llamar a estas funciones en el bloque `else` de la función `main()`. La lógica para esta última parte es esencialmente:

- Mientras `isOrderComplete()` sea `True`, continúa pidiéndole al cliente que ingrese un artículo del menú que le gustaría pedir y la cantidad.
- Dentro de este bucle `while`... Después de que el usuario nos proporcione un artículo que quiere pedir, verifica con `orderItemChecking(item)` si es una entrada válida o no. Mientras no sea una entrada válida, sigue pidiéndole al cliente que lo intente nuevamente hasta que realice otro pedido con éxito. Asegúrate de informarles que nos dieron una entrada incorrecta.
- Después de que el bucle while interno termine, indicando que el usuario ingresó un artículo y cantidad correctos, agrega este artículo a la lista `listOrderItems` que mencionaste antes.

Si parte de ese proceso te sonó familiar, ¡es bueno! ¡Es exactamente lo que hicimos cuando pedimos al usuario que introdujera el primer artículo que quería pedir!

¡Gran trabajo! Has tomado con éxito la entrada del usuario y verificaste cualquier error que pudieran haber cometido, ¡lo cual es increíble!
```