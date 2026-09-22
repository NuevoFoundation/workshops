---
title: "Creando la IU: Parte 1"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 12
---

## Pantalla de Menú

¡Estamos casi terminados! Para completar este juego, necesitamos hacer dos cosas más: agregar una IU y un script Outline para unir todo. Comencemos con la IU.

Haz clic derecho en la ventana de jerarquía y, en lugar de seleccionar "Crear vacío", queremos crear un lienzo. Busca "UI" → "Canvas". Aquí estarán todos nuestros elementos de la IU.

Debajo de "Canvas", queremos crear "UI" → "Image". Renombra "Image" a "Menu". Esto será nuestra pantalla de menú. En el inspector del menú, redimensiona el ancho y alto a 400 y 300 respectivamente.  
Luego queremos anclar la pantalla del menú al centro. De esta manera, incluso si el tamaño de la ventana cambia, la pantalla de menú permanecerá en el centro. Para hacerlo, haz clic en los cuadros en la esquina superior izquierda debajo de Rect Transform en el inspector del menú.

<img src="../img/11_anchors.png" alt="Herramienta de anclaje" width="400"/>

Mantén presionadas las teclas shift y alt (en Mac, presiona opción en lugar de alt) y selecciona el centro/medio en los ajustes preestablecidos de anclaje. Esto configurará el pivote del menú a 0 mientras establece la posición en el centro/medio.

Ahora, debajo de Menu, crea un "UI" → "Text" y renómbralo a "Title". Cambia el texto a lo que quieras nombrar tu juego bajo Texto en el inspector de "Title". ¡Deja que tu creatividad fluya! También podemos cambiar el tamaño de la fuente como prefieras.

{{< notice tip >}}
Si el texto desaparece, usa la herramienta de rectángulo para aumentar el tamaño del cuadro de texto en la ventana de Escena.
{{< /notice >}}

Cambia el ajuste preestablecido de anclaje al superior/centro. Ajusta la entrada de Pos Y hasta que te guste la ubicación de tu texto.

Crea otro "UI" → "Text" debajo de Menu en la jerarquía y renómbralo a "NumEnemyT". Cambia el texto a "# de Enemigos" y ajusta la fuente a un tamaño un poco más pequeño que el Title. Asegúrate de establecer la posición del anclaje en superior/centro también, y ajusta la entrada de Pos Y.

¡Ahora, vamos a crear una manera para que el jugador elija cuántos enemigos desea! Hay muchas formas de hacerlo, pero en este tutorial, usaremos un deslizador.  
Para crear un deslizador, haz clic derecho debajo de Menu y selecciona "UI" → "Slider" y renómbralo "EnemySlider". Establece la posición del anclaje en superior/centro también, y ajusta la entrada de Pos Y para que esté justo debajo del texto "# de Enemigos". En el inspector del deslizador debajo de Slider, cambia el "Min Value" a "1" y "Max Value" a "3". También marca la casilla "Whole Number", ya que no podemos tener 1.5 enemigos en el campo.

Ahora que tenemos un deslizador, ¡necesitamos una referencia visual para que los jugadores sepan cuántos enemigos pueden generar!  
Haz 2 cuadros de texto más debajo de Menu y nómbralos "1T" y "3T" respectivamente. Cambia el texto "1T" a "1" y establece la posición del anclaje en el medio/izquierda. Ajusta las entradas de Pos X y Pos Y debajo de Rect Transform para que se alinee con el lado izquierdo del deslizador.  
Repite el proceso con "3T", pero cambia el texto a "3", ancla al medio/derecha y alinéalo con el lado derecho del deslizador.

Ahora, vamos a crear un botón de inicio. En Menu en la ventana de jerarquía, crea "UI" → "Button" y renómbralo a "StartButton". Establece la posición del anclaje en inferior/centro y ajusta las entradas de Pos Y para colocarlo donde prefieras. Si miramos en la jerarquía, hay una flecha adjunta a StartButton. Haz clic en ella para revelar un objeto de texto. Cambia el texto de ese objeto de texto a "Start".

<img src="../img/11_buttonUI.png" alt="Resumen de jerarquía del menú" width="200"/>

¡Ahora tenemos la pantalla de menú lista! Tu pantalla de menú debería verse algo así:

<img src="../img/11_result.png" alt="Pantalla de menú de ejemplo" width="800"/>

¡Pero espera! ¡Aún no hemos terminado! Si ejecutáramos el juego y presionamos el botón de inicio, ¡no sucede nada! Queremos que la pantalla de menú desaparezca.  
Para hacerlo, hagamos un nuevo script en nuestra carpeta Scripts en la ventana de Proyectos debajo de Assets y nómbralo "StartButton". Ábrelo y copia y pega el código a continuación:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StartButton : MonoBehaviour
{

   public GameObject pop_up_box;


   public void popDown()
   {
       pop_up_box.SetActive(false);
   }

}
```

Este código hace que el objeto GameObject asignado a pop_up_box desaparezca cuando se llama a la función `popDown()`. Guárdalo y luego arrastra y coloca este script desde la carpeta Scripts al inspector de StartButton. Luego arrastra el Menu de la jerarquía a la casilla vacía "Pop_up_box" debajo de "Start Button (Script)".  
Finalmente, debajo de "Button" en el inspector de StartButton, haz clic en el signo "+" en la casilla "On Click()". Arrastra el "StartButton" de la jerarquía a la casilla que dice "None (Object)".  
Luego, despliega la barra "No Function" y pasa el cursor sobre "StartButton". Ubica la función `popDown()` y selecciónala.

<img src="../img/11_popDown.png" alt="Seleccionando la función popDown() para activar cuando se haga clic en StartButton" width="600"/>

¡Ahora, si ejecutamos el juego y presionamos el botón de inicio, la pantalla de menú desaparece!