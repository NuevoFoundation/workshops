```markdown
---
title: "Sala 3: El Portal de Pull Request"
description: "Aprende a enviar cambios y crear un pull request."
difficulties: ["intermedio"]
weight: 3
---

Una puerta masiva bloquea tu camino, con "Pull Request" escrito arriba. Un cartel dice: "Para abrir esta puerta, tus cambios deben ser revisados."

## Tu Misión

1. Envía tus cambios locales a tu repositorio bifurcado.
2. Crea un pull request al repositorio original `CodeDungeon/escape-room`.

## Instrucciones

1. Envía tus cambios:

```
git push origin main
```

2. Ve a tu repositorio bifurcado en GitHub.
3. Haz clic en "Contribute" y luego en "Open pull request".
4. Completa el título como "Solución para la Sala 2" y proporciona una breve descripción.
5. Haz clic en "Create pull request".

{{< notice info >}}
**Sugerencia:** ¡Mantén un ojo en tu pull request! Los guardianes del calabozo (los mantenedores del repositorio) lo revisarán y pueden solicitar cambios.
{{< /notice >}}

{{< expand "Proceso de Pull Request" >}}

**Enviar Cambios**
Primero, sube tus cambios locales a tu repositorio remoto:

```
git push origin main
```

**Crear Pull Request**
1. Navega a tu bifurcación en GitHub.
2. Haz clic en la pestaña "Pull requests".
3. Haz clic en "New pull request".
4. Asegúrate de que el repositorio base es el original y el repositorio de cabecera es tu bifurcación.
5. Haz clic en "Create pull request".

**Esperar Revisión**
Una vez creado el pull request:
1. Espera a que los mantenedores revisen tus cambios.
2. Aborda cualquier feedback que ellos proporcionen.
3. Envía nuevos commits para actualizar el pull request si es necesario.

{{< /expand >}}

Una vez que hayas creado tu pull request, ingresa su número para continuar:

<label for="finput">Campo de entrada para el número del pull request:</label><br>
<input type="text" id="finput" name="finput"><br>
```