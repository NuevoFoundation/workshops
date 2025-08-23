---
title: "Habitación 2: El Dilema del Commit"
description: "Aprende a hacer cambios y comprometerlos en tu repositorio."
difficulty: "Principiante"
weight: 2
---

# Habitación 2: El Dilema del Commit

{{< figure src="../images/room2_commit.jpg" title="Fragmentos de código flotan alrededor de un terminal central, esperando ser organizados" >}}

Al entrar en la segunda habitación, fragmentos de código flotan en el aire. Un terminal en el centro parpadea con un mensaje: "Lleva orden al caos. Compromete tus cambios para avanzar."

## Tu Misión

1. Crea un nuevo archivo llamado `solution.md` en tu repositorio local.
2. Agrega el código secreto de la Habitación 1 a este archivo.
3. Prepara y realiza el commit de tus cambios.

## Instrucciones

1. En tu terminal, asegúrate de estar en el directorio `escape-room`.
2. Crea el archivo y agrega el código:

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. Prepara y realiza el commit de tus cambios:

```
git add solution.md
git commit -m "Add solution for Room 1"
```

{{< notice warning >}}
**Consejo:** Siempre escribe mensajes de commit claros y descriptivos. Ayudan a ti y a otros a entender el historial de tu proyecto.
{{< /notice >}}

{{< expand "Quiz: Pon a Prueba Tu Conocimiento" >}}

**Pregunta 1: ¿Qué comando usas para preparar cambios?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Pregunta 2: ¿Qué hace la bandera -m en el comando de commit?**

{{< button href="#" >}}Marca el commit como importante{{< /button >}}
{{< button href="#" >}}Fusiona el commit inmediatamente{{< /button >}}
{{< button href="#" >}}Te permite añadir un mensaje de commit{{< /button >}}

{{< /expand >}}

Cuando hayas realizado tu commit, ingresa el mensaje de commit que usaste:

[Campo de entrada para mensaje de commit]

{{< notice info >}}
Nota: El campo de entrada real y la funcionalidad de encriptación necesitarían implementarse por separado, ya que Hugo no proporciona esto de manera predeterminada.
{{< /notice >}}