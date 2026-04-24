---
title: "Usando Replit"
date: 2019-07-29T13:24:17-07:00
weight: 1
draft: false
---

Para construir nuestro juego, usaremos la biblioteca Pygame, que proporciona un conjunto de funcionalidades ya preparadas que podemos usar para crear Pong y sus animaciones.

## Usando Replit

Hoy, usaremos Replit para construir el juego Pong.

Si quieres un repaso sobre cómo usar Replit, consulta nuestro <a href="https://workshops.nuevofoundation.org/python-basics/repl-it/" target="_blank">Python basics tutorial</a>.

Ahora, repasemos parte del código que se te ha proporcionado en el archivo `main.py`.

{{% notice tip %}}

## Bibliotecas y declaraciones import

Mira la parte superior del código. Verás la siguiente línea:

```
import pygame
```

Esta instrucción nos permite importar toda la funcionalidad de animación y dibujo de objetos que proporciona la biblioteca `pygame`. Una **biblioteca** es un lugar donde se agrupa funcionalidad relacionada para su uso en el lenguaje Python. Por ejemplo, la biblioteca `pygame` proporciona una forma de dibujar un rectángulo en pantalla, que podemos usar para dibujar los límites, la pelota y las paletas que se utilizan en el juego Pong.

## Comentarios

La línea gris que comienza con un `#` se llama **comentario**. Son notas en el código que ayudan a explicar lo que hace el código en un lenguaje natural. Los comentarios son ignorados por el ordenador; los desarrolladores usan comentarios para comunicarse entre sí, especialmente cuando varios desarrolladores trabajan en el mismo código. Los comentarios también permiten a quien mira el código obtener una visión general de alto nivel de lo que está pasando sin tener que leer todo el código.
En `main.py` usamos comentarios a lo largo del archivo para indicar dónde se requieren cambios en el código.

{{% /notice %}}