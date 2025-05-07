---
title: "Habitación 10: El Rincón del Despliegue"
description: "Aprende a desplegar tu proyecto usando GitHub Pages."
difficulty: "Intermedio"
weight: 10
---

# Habitación 10: El Rincón del Despliegue

{{< figure src="../images/room10_pages.jpg" title="Una sala con una pantalla gigante mostrando un sitio web y botones de despliegue flotantes" >}}

Entras en la sala final para encontrar una pantalla gigante mostrando un sitio web y botones "Desplegar" flotantes. Una voz triunfante anuncia: "¡Despliega tu victoria para que todos la vean!"

## Tu Misión

1. Habilitar GitHub Pages para tu repositorio.
2. Crear un archivo simple index.html.
3. Subir el archivo y visualizar tu sitio desplegado.

## Instrucciones

1. Ve a la pestaña "Settings" de tu repositorio.
2. Desplázate hacia abajo hasta la sección "GitHub Pages".
3. En "Source", selecciona la rama que deseas desplegar (usualmente `main`).
4. En tu repositorio local, crea un archivo `index.html` en el directorio raíz.
5. Añade algo de código HTML al archivo, como:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Mi Sitio de GitHub Pages</title>
     </head>
     <body>
       <h1>¡Hola, GitHub Pages!</h1>
       <p>¡He completado el Juego de Aventura de GitHub!</p>
     </body>
   </html>
    ```

6. Haz commit y sube este archivo a tu repositorio.
7. Espera unos minutos para que GitHub procese tu solicitud, luego visita tu sitio en https://<username>.github.io/<repository-name> donde <username> es tu nombre de usuario de GitHub y <repository-name> es el nombre de tu repositorio.
{{< notice info >}}
Nota: Puede tomar unos minutos para que tu sitio sea desplegado después de subir los cambios.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Habilitar GitHub Pages] --> B(Crear index.html)
B --> C(Commit y subir)
C --> D{¿Sitio desplegado?}
D -->|Sí| E[Ver tu sitio]
D -->|No| F[Espera unos minutos]
F --> D
{{< /mermaid >}}
Después de que tu sitio sea desplegado, ¿cuál es el título de tu página web? Puedes encontrarlo en la parte superior de tu navegador cuando visites el sitio. Ingrésalo abajo:
[Campo de entrada para título de la página web]
{{< notice success >}}
¡Felicidades, maestro de GitHub! Has completado todos los desafíos y desplegado tu victoria. ¡Has escapado del Juego de Aventura de GitHub!
{{< /notice >}}