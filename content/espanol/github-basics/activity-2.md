---
title: "Sala 2: El Enigma del Commit"
description: "Aprende a realizar cambios y a comprometerlos en tu repositorio."
difficulties: ["principiante"]
weight: 2
---

Al entrar a la segunda sala, fragmentos de código flotan en el aire. Una terminal en el centro parpadea con un mensaje: "Trae orden al caos. Realiza un commit de tus cambios para avanzar."

## Tu Misión

1. Crea un nuevo archivo llamado `solution.md` en tu repositorio local.
2. Añade el código secreto de la Sala 1 a este archivo.
3. Prepara y realiza el commit de tus cambios.

## Instrucciones

1. En tu terminal, asegúrate de estar en el directorio `escape-room`.
2. Crea el archivo y añade el código:

```
echo "Secret Code: GITHUB_BASICS_101" > solution.md
```

3. Prepara y realiza el commit de tus cambios:

```
git add solution.md
git commit -m "Add solution for Room 1"
```


{{< notice warning >}}
**Consejo:** Siempre escribe mensajes de commit claros y descriptivos. Ayudan a que tú y otros comprendan el historial de tu proyecto.
{{< /notice >}}

{{< expand "Cuestionario: Pon a prueba tus conocimientos" >}}

**Pregunta 1: ¿Qué comando utilizas para preparar los cambios?**

{{< button href="#" >}}git stage{{< /button >}}
{{< button href="#" >}}git add{{< /button >}}
{{< button href="#" >}}git commit{{< /button >}}

**Pregunta 2: ¿Qué hace la bandera -m en el comando commit?**

{{< button href="#" >}}Marca el commit como importante{{< /button >}}
{{< button href="#" >}}Funde el commit inmediatamente{{< /button >}}
{{< button href="#" >}}Te permite añadir un mensaje al commit{{< /button >}}

{{< /expand >}}

Cuando hayas realizado tu commit, introduce el mensaje del commit que usaste:

<label for="finput">Campo para introducir el mensaje del commit:</label><br>
<input type="text" id="finput" name="finput"><br>