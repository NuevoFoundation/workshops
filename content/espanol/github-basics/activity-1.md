---
title: "Habitación 1: La bifurcación en el camino"
description: "Comienza tu aventura bifurcando y clonando un repositorio."
difficulty: "Principiante"
weight: 1
---

{{< figure src="../images/room1_fork.jpg" title="La primera habitación del Calabozo de Código, iluminada por un misterioso logo de GitHub" >}}

Te despiertas en una habitación tenuemente iluminada. Un pedestal en el centro sostiene un logo de GitHub resplandeciente. Una voz resuena: "Para avanzar, debes bifurcar el camino por delante."

Por camino, la voz se refiere a un repositorio de GitHub. Bifurcar crea una copia del repositorio en tu cuenta, permitiéndote hacer cambios sin afectar la copia original.

## Tu Misión

1. Crea una cuenta de GitHub (si aún no lo has hecho).
2. Bifurca el repositorio: `https://github.com/VerisimilitudeX/escape-room`
3. Clona tu repositorio bifurcado en tu máquina local.

## Instrucciones

1. Ve a GitHub y regístrate o inicia sesión.
2. Navega a la URL del repositorio y haz clic en el botón "Fork" en la esquina superior derecha.
3. Una vez bifurcado, haz clic en el botón verde "Code" y copia la URL.
4. Abre tu terminal y ejecuta:

   ```pwsh
   git clone <YOUR_FORKED_REPO_URL>
   cd escape-room
   ```

{{% notice %}}
**Consejo:** Busca el archivo `README.md` en tu repositorio clonado. Contiene un código secreto para desbloquear la siguiente habitación!
{{% /notice %}}

{{< expand "¿Necesitas ayuda?" >}}
Si estás atascado, prueba estos pasos:

1. Asegúrate de haber iniciado sesión en GitHub.
2. Verifica que hayas navegado a la URL correcta del repositorio.
3. Si tienes problemas con los comandos git, asegúrate de que [git](https://git-scm.com/downloads) esté instalado en tu sistema.
{{< /expand >}}

Cuando estés listo para avanzar, introduce el código secreto que encontraste:

[Campo de entrada para el código secreto]

{{% notice %}}
Nota: El campo de entrada real y la funcionalidad de cifrado necesitarían implementarse por separado, ya que Hugo no proporciona esto de serie.
{{% /notice %}}