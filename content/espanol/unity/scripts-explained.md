---
title: "Scripts Explicados"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 4
---

Antes de comenzar a hacer que Nuvi se mueva, primero expliquemos la estructura de un script en Unity. Hay muchas formas de hacer que Nuvi se mueva dentro de Unity, y una forma de hacerlo es agregar un componente de Script a Nuvi. Un componente de Script es un componente que puedes crear por tu cuenta desde cero.

Un Script vacío de Unity se verá así:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EmptyScript : MonoBehaviour
{
   void Start()
   {
   }

   void Update()
   {
   }
}
```

Cada nuevo script tendrá las primeras 3 líneas que comienzan con `using`. Estas líneas son necesarias para que Unity pueda usar este script recién creado, por lo que generalmente dejamos estas líneas de código tal como están. La siguiente línea que comienza con `public class 'script_name'` es necesaria para que Unity acceda a este script específico.

{{< notice note >}}
¡Asegúrate de que el nombre del script coincida con 'script_name'! Si decides cambiar el nombre del script fuera del script, esta línea de código que contiene el nombre del script no se actualiza, así que asegúrate de regresar y actualizarla, ¡de lo contrario el juego no funcionará!
{{< /notice >}}

Cada script tiene dos métodos predefinidos.

**void Start()**: Este método se llama solo una vez cuando el script se inicia por primera vez. Generalmente se utiliza para inicializar variables que podemos necesitar a lo largo del script.

**void Update()**: Este método se llama en cada frame y generalmente se utiliza cuando queremos cambiar un comportamiento del juego.

Existe otro método que utilizaremos para hacer que Nuvi se mueva llamado `void FixedUpdate()`.

**void FixedUpdate()**: Este método se llama con menos frecuencia que Update(), pero es mejor utilizarlo cuando se trata de física para movimientos más fluidos, como al usar Rigidbody.

Existen otros métodos de la biblioteca de Unity que utilizaremos más adelante, pero por ahora esto es todo lo que necesitas saber.