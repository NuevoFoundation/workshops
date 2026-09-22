---
title: "Sala 1: La bifurcación en el camino"
description: "Comienza tu aventura bifurcando y clonando un repositorio."
difficulties: ["principiante"]
weight: 1
---

Te despiertas en una habitación tenuemente iluminada. Un pedestal en el centro sostiene un logo brillante de GitHub. Una voz resuena: "Para avanzar, debes bifurcar el camino adelante."

Por camino, la voz se refiere a un repositorio de GitHub. Bifurcar crea una copia del repositorio en tu cuenta, permitiéndote realizar cambios sin afectar la copia original.

## Tu Misión

1. Crea una cuenta de GitHub (si no lo has hecho ya).
2. Bifurca el repositorio: `https://github.com/VerisimilitudeX/escape-room`
3. Clona tu repositorio bifurcado en tu máquina local.

## Instrucciones

1. Ve a GitHub y regístrate o inicia sesión.
2. Navega a la URL del repositorio y haz clic en el botón "Fork" en la esquina superior derecha.
3. Una vez bifurcado, haz clic en el botón verde "Code" y copia la URL.
4. Abre tu terminal y ejecuta:

   ```pwsh
   git clone <TU_URL_DEL_REPOSITORIO_FORK>
   cd escape-room
   ```

{{% notice tip %}}
**Consejo:** Busca el archivo `README.md` en tu repositorio clonado. Contiene un código secreto para desbloquear la próxima sala.
{{% /notice %}}

{{< expand "¿Necesitas ayuda?" >}}
Si estás atascado, prueba estos pasos:

1. Asegúrate de haber iniciado sesión en GitHub.
2. Verifica que hayas navegado a la URL correcta del repositorio.
3. Si tienes problemas con los comandos de git, asegúrate de que [git](https://git-scm.com/downloads) esté instalado en tu sistema.
{{< /expand >}}

Cuando estés listo para avanzar, ingresa el código secreto que encontraste:

<label for="finput">Campo de entrada para el código secreto:</label><br>
<input type="text" id="finput" name="finput"><br>