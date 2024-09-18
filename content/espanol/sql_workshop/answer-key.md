---
title: "Taller de SQL: Respuestas del Workshop de SQL"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 300
---
{{% notice tip %}}
Nota: No uses el Navegador Firefox para este taller.

Para las actividades de arrastrar el elemento: Los bloques que son correctos van a ser resaltados con un recuadro verde alrededor, mientras que los incorrectos serán resaltados con un cuadrado rojo hasta que el jugador mueva el bloque. 

Para las actividades de escribir la respuesta: Los comandos o palabras correctas van a seer resaltadas con color verde en la Caja de Comando Anterior, palabras incorrectas o mal usadas serán resaltadas con rojo. Si el comando que el jugador escriba coincide con lo que se menciona en la hoja de respuestas, asegurate que no haya espacios extras al inicio o fin del comando. Asegurate que el jugador tenga punto y coma al final de cada comando (la última palabra en un comando de SQL será resaltada con rojo si no hay un punto y coma al final). Toma en cuenta que algunos infantes van a copiar el comando mostrado en el ejemplo, pegarlo en la terminal y correrlo - esto no va a funcionar. Por favor, pídeles que refresquen la página y escriban manualmente el comando.

Las palabras clave de SQL (palabras reservadas) en comandos NO distinguen entre mayúsculas y minúsculas (SELECT, FROM, WHERE, COUNT, MAX, IN, etc.), pero a veces están escritas en mayúsculas para diferenciarlas de otras palabras que no son clave: "select * from planet" is same as "SELECT * FROM planet".

{{% /notice%}}

### Aprende los pasos básicos de un cadete
**Ninguna actividad, solo leer la terminología.**

### Actividad 1: Aprende el comando SELECT (Arrastrar y soltar)
Respuesta: `SELECT * FROM galaxy;`

### Actividad 2: Aprende el comando WHERE (Arrastrar y soltar)
Respuesta: `SELECT * FROM galaxy WHERE name = ‘Planet of Fun’;`

### Explicar la Sintaxis
**Ninguna actividad, solo una explicación del formato de comandos de SQL.**

### Actividad 3: Aprended el comando COUNT (Escribir respuesta)
Dos respuestas válidas: `SELECT COUNT(*) FROM planet;` o `SELECT COUNT(city_number) FROM planet;`

### Actividad 4: Selecciona Información Multiple (Escribir respuesta)
Dos respuestas válidas: `SELECT planet, leader FROM galaxy;` o `SELECT leader, planet FROM galaxy;`

La única diferencia entre las dos respuestas es el orden en que se mostrarán las columnas, por lo tanto, ambas respuestas son válidas.

### Actividad 5: Aprende el comando MAX/MIN (Escribir respuesta + Arrastrar y soltar)
Respuestas válidas: 
* `SELECT MAX(height) FROM items WHERE object IN (‘ladder’);` 
* `SELECT MAX(height) FROM items WHERE object = 'ladder';`
* `SELECT * FROM items WHERE object IN (‘ladder’);`
* `SELECT * FROM items WHERE object = 'ladder';`
A pesar de que la tercera y cuarta respuesta no utiliza el comando MAX, si muestra todas las escaleras y sus colores, haciendolas posibles respuestas válidas para la actividad.

Respuestas para los puntos extra:
* `SELECT MAX(height) FROM items WHERE object NOT IN('totem', 'key');`
* `SELECT MAX(height) FROM items WHERE object NOT IN('totem');`
* `SELECT MAX(height) FROM items WHERE object NOT IN('key');`
Si el jugador usa `NOT IN` correctamente, esto va a mostrar el resultado correcto.

Arrastrar y soltar: La escalera correcta para arrastrar y soltar es la ROJA (la de la extrema derecha). La escalera correcta va a ser resaltada con color Verde. 

### Actividdad 6: Utiliza Comparadores (Escribir respuesta)
Respuesta: `SELECT * FROM items WHERE date_created = ‘1738-09-12’;`

Respuesta para puntos extra: `SELECT * FROM items WHERE date_created >= ‘1738-09-12’;`

### Actividad 7: Usa el comando MIN (Escribir respuesta + Arrastrar y soltar)
Respuestas válidas: 
* `SELECT MIN(height) FROM items WHERE object IN (‘key’);` 
* `SELECT * FROM items WHERE object IN('key');`
* `SELECT MIN(height) FROM items WHERE object = 'key';`
* `SELECT * FROM items WHERE object = 'key';`
* `SELECT MIN(height) FROM items WHERE object NOT IN('totem', 'ladder');`
* `SELECT MIN(height) FROM items WHERE object NOT IN('totem');`
* `SELECT MIN(height) FROM items WHERE object NOT IN('ladder');`

Arrastrar y Solar: La altura corresponde al número de bucles en la base de la llave. La llave mas pequeña (de altura 1) es la llave correcta para arrastrar y soltar (la de la extrema derecha).

### Actividad 8: Aprende el comando LIKE (Escribir respuesta)
Dos respuestas válidas: `SELECT * FROM items WHERE date_created LIKE ‘%-10-%’;` o `select * from items where date_created like '1738-10-%';`

### Actividad 9: Aprende el comando AVG (Escribir respuesta)
Respuesta: `SELECT AVG(population) FROM planet;`

La combinación de la caja fuerte es "40".

### Actividad 10: Aprende el comando SUM Command (Escribir respuesta)
Respuesta: `SELECT SUM(population) FROM planet;`

### "Actividad 11: Aprende el comando GROUP BY" (Escribir respuesta)
Respuesta: `SELECT * FROM planet GROUP BY favorite_food;`

Respuesta para puntos extra: `SELECT COUNT(*), favorite_food FROM planet GROUP BY favorite_food;`

Los botones correctos para seleccionar en cualquier orden son: pizza, hotdog, hamburger y taco.

### Actividad 12: Encuentra al Inventor! (Escribir respuesta)
Respuesta: `SELECT * FROM people;`

El inventor: "Dr. Phi"

