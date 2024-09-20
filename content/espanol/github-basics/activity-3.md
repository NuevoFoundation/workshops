---
title: "Sala 3: El Portal de la Pull Request"
description: "Aprende a subir cambios y crear una pull request."
difficulty: "Intermedio"
weight: 3
---

# Sala 3: El Portal de la Pull Request

{{< figure src="../images/room3_pull_request.jpg" title="Una puerta masiva se presenta ante ti, con 'Pull Request' grabado arriba" >}}

Una puerta masiva bloquea tu camino, con "Pull Request" escrito encima. Un letrero dice: "Para abrir esta puerta, tus cambios deben ser revisados."

## Tu Misión

1. Sube tus cambios locales a tu repositorio bifurcado.
2. Crea una pull request al repositorio original `CodeDungeon/escape-room`.

## Instrucciones

1. Sube tus cambios:

```
git push origin main
```

2. Ve a tu repositorio bifurcado en GitHub.
3. Haz clic en "Contribute" y luego en "Open pull request".
4. Rellena el título como "Solución para la Sala 2" y proporciona una breve descripción.
5. Haz clic en "Create pull request".

{{< notice info >}}
**Consejo:** Mantente atento a tu pull request. ¡Los guardianes del calabozo (mantenedores del repositorio) la revisarán y pueden solicitar cambios!
{{< /notice >}}

{{< expand "Proceso de Pull Request" >}}

**Sube Cambios**
Primero, sube tus cambios locales a tu repositorio remoto:

```
git push origin main
```

**Crea Pull Request**
1. Navega a tu fork en GitHub.
2. Haz clic en la pestaña "Pull requests".
3. Haz clic en "New pull request".
4. Asegúrate de que el repositorio base es el original y el repositorio de la cabecera es tu fork.
5. Haz clic en "Create pull request".

**Espera la Revisión**
Después de crear la pull request:
1. Espera a que los mantenedores revisen tus cambios.
2. Atiende cualquier comentario que proporcionen.
3. Sube nuevos commits para actualizar la pull request si es necesario.

{{< /expand >}}

Una vez que hayas creado tu pull request, introduce su número para continuar:

[Campo de entrada para el número de la pull request]

{{< notice info >}}
Nota: El campo de entrada real y la funcionalidad de encriptación necesitan implementarse por separado, ya que Hugo no proporciona esto de manera predeterminada.
{{< /notice >}}