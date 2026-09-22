---
title: "Sala 10: El Rincón del Despliegue"
description: "Aprende a desplegar tu proyecto usando GitHub Pages."
difficulties: ["intermedio"]
weight: 10
---

Ingresas a la última sala y encuentras una gran pantalla mostrando un sitio web y botones flotantes que dicen "Desplegar". Una voz triunfante anuncia: "¡Despliega tu victoria para que todos la vean!"

## Tu Misión

1. Habilita GitHub Pages para tu repositorio.
2. Crea un archivo simple llamado index.html.
3. Empuja el archivo y visualiza tu sitio desplegado.

## Instrucciones

1. Dirígete a la pestaña "Settings" de tu repositorio.
2. Desplázate hacia abajo hasta la sección "GitHub Pages".
3. En "Source", selecciona la rama que deseas desplegar (usualmente `main`).
4. En tu repositorio local, crea un archivo `index.html` en el directorio raíz.
5. Agrega un poco de código HTML al archivo, como:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Mi Sitio en GitHub Pages</title>
     </head>
     <body>
       <h1>¡Hola, GitHub Pages!</h1>
       <p>¡He completado el Juego de Aventura en GitHub!</p>
     </body>
   </html>
    ```

6. Haz commit y empuja este archivo a tu repositorio.
7. Espera unos minutos para que GitHub procese tu solicitud, y luego visita tu sitio en https://<nombre-usuario>.github.io/<nombre-repositorio>, donde <nombre-usuario> es tu nombre de usuario en GitHub y <nombre-repositorio> es el nombre de tu repositorio.

{{< notice info >}}
Nota: Puede tomar unos minutos para que tu sitio sea desplegado después de empujar los cambios.
{{< /notice >}}

{{< mermaid >}}
graph TD
A[Habilita GitHub Pages] --> B(Crea index.html)
B --> C(Haz commit y empuja)
C --> D{¿Sitio desplegado?}
D -->|Sí| E[Visita tu sitio]
D -->|No| F[Espera unos minutos]
F --> D
{{< /mermaid >}}

Después de que tu sitio esté desplegado, ¿cuál es el título de tu página web? Puedes encontrarlo en la parte superior de tu navegador cuando visites el sitio. Escríbelo a continuación:

<label for="finput">Campo para el título de la página web:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
¡Felicitaciones, maestro de GitHub! Has completado todos los desafíos y desplegado tu victoria. ¡Has escapado del Juego de Aventura en GitHub!
{{< /notice >}}