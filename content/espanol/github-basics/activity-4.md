---
title: "Habitación 4: El Laberinto de Fusión"
description: "Navega las complejidades de las revisiones de código y las fusiones."
difficulties: ["intermedio"]
weight: 4
---

Te encuentras en una habitación con un complejo laberinto dibujado en el suelo. Los caminos se cruzan y se separan, representando los desafíos ocasionales de fusionar código desde tu copia local a la versión alojada remotamente.

## Tu Misión

1. Revisa los comentarios en tu pull request.
2. Realiza los cambios necesarios y actualiza tu pull request.
3. Una vez aprobado, fusiona tu pull request.

## Instrucciones

1. Revisa tu pull request para ver si hay comentarios de revisión.
2. Si se solicitan cambios:  
   - Haz los cambios localmente.  
   - Realiza un commit de los cambios.  
   - Haz un push a tu fork.  
3. El pull request se actualizará automáticamente.  
4. Una vez aprobado, haz clic en "Merge pull request" en la interfaz de GitHub.

{{< notice warning >}}
**Importante:** ¡La comunicación es clave! Si no estás seguro acerca de los cambios solicitados, no dudes en pedir aclaraciones en los comentarios del pull request.
{{< /notice >}}

{{< mermaid >}}
graph TD
    A[Revisar Comentarios en el PR] -->|Se Solicitaron Cambios| B(Realizar Cambios Locales)
    B --> C(Hacer Commit de los Cambios)
    C --> D(Hacer Push al Fork)
    D --> E{¿PR Aprobado?}
    E -->|Sí| F(Fusionar PR)
    E -->|No| A
    A -->|No Se Necesitan Cambios| E
{{< /mermaid >}}

Después de fusionar exitosamente tu pull request, ¿qué mensaje viste? Ingrésalo a continuación para continuar:

<label for="finput">Campo de entrada para el mensaje de fusión:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Pista" >}}
El mensaje que buscas es típicamente algo como: "Pull request successfully merged and closed."
{{< /expand >}}