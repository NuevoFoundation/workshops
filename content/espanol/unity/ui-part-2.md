---
title: "Creando la Interfaz: Parte 2"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 13
---

## Pantalla Final

A continuación, queremos crear una pantalla final que se mostrará una vez que Nuvi derrote a todos los alienígenas. ¡La mayor parte de este proceso será muy similar a cómo hiciste la Pantalla del Menú!

Debajo de "Canvas", crea "UI" → "Image" como hiciste para el Menú inicial, y esta vez renómbralo como "EndScreen". Cambia el tamaño para que sea del mismo tamaño que el Menú.

Crea "UI" → "Text" debajo de EndScreen, renómbralo como "EndMessage" y escribe lo que desees; este mensaje se mostrará cuando Nuvi derrote a todos los alienígenas y termine el juego. En nuestro ejemplo, escribimos: "¡Has derrotado a todos los Alienígenas y ayudaste a Nuvi a salvar el Universo!"

Ahora queremos que nuestro jugador pueda volver a jugar una vez que termine. Crea "UI" → "Button" debajo de EndScreen. Como hiciste con el StartButton, expande Button para encontrar el objeto Text y renómbralo como "ReplayButton". Edita el texto para que muestre "Repetir".

Pero al igual que el botón Start, hacer clic en este botón Replay no hace nada todavía. Crea otro script en tu carpeta de Scripts y nómbralo "RestartScene".

Esta vez, en lugar de simplemente hacer que la EndScreen desaparezca, queremos recargar todo: el menú inicial, Nuvi y los alienígenas que Nuvi derrotó. Copia y pega el código a continuación en tu script:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RestartScene : MonoBehaviour
{
   public void restart()
   {
       Scene scene = SceneManager.GetActiveScene();
       SceneManager.LoadScene(scene.name);
   }
}
```

{{< notice tip >}}
Para recargar todo, usamos Escenas; pero para hacerlo, necesitas declarar `using UnityEngine.SceneManagement;` debajo de las 3 líneas habituales.
{{< /notice >}}

Arrastra y suelta este script desde la carpeta Scripts al inspector del ReplayButton. En la caja `OnClick()`, haz clic en el "+" y, como hiciste para el StartButton, arrastra el objeto ReplayButton a la caja que dice "None (Object)". Luego, busca y selecciona la función `restart()` del script RestartScene.