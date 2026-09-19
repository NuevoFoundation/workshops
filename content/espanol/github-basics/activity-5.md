---
title: "Sala 5: El Cañón del Conflicto"
description: "Aprende a resolver conflictos de fusión y sincroniza con el repositorio original."
difficulties: ["avanzado"]
weight: 5
---

# Sala 5: El Cañón del Conflicto

Entras en una sala con un profundo abismo. Dos puentes se extienden desde cada lado, pero no se encuentran en el centro. Un cartel dice: "Solo resolviendo los conflictos podrás cruzar."

## Tu Misión

1. Trae los últimos cambios del repositorio original.
2. Resuelve el conflicto de fusión que aparece.
3. Confirma la resolución y empuja los cambios.

## Instrucciones

1. Agrega el repositorio original como remoto:

```
git remote add upstream https://github.com/CodeDungeon/escape-room.git
```

2. Trae y fusiona los cambios:

```
git fetch upstream
git merge upstream/main
```

3. Verás un conflicto de fusión. Abre el/los archivo(s) en conflicto y resuelve los conflictos.
4. Después de resolverlo, añade, confirma y empuja:

```
git add .
git commit -m "Resolver conflicto de fusión"
git push origin main
```

{{< notice info >}}
**Consejo:** Busca los marcadores de conflicto (`<<<<<<<`, `=======`, `>>>>>>>`) en los archivos. Elige qué cambios mantener o combínalos según sea necesario.
{{< /notice >}}

{{< expand "Ejemplo de un Conflicto de Fusión" >}}
```diff
<<<<<<< HEAD
Este es un contenido de tu rama actual.
=======
Este es contenido en conflicto proveniente de la rama que estás fusionando.
>>>>>>> upstream/main
{{< /expand >}}

<label for="finput">Después de resolver el conflicto, ¿cuál fue la línea final del archivo en conflicto? Escríbela abajo:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
¡Trabajo excepcional! Has conquistado el Cañón del Conflicto y completado todos los desafíos. ¡Ahora eres un maestro de GitHub!
{{< /notice >}}