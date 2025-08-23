---
title: "Sala 4: El Laberinto de la Fusión"
description: "Navega las complejidades de la revisión y fusión de código."
difficulty: "Intermedio"
weight: 4
---

{{< figure src="../images/room4_merge.jpg" title="Un laberinto complejo representa los desafíos de fusionar código" >}}

Te encuentras en una sala con un laberinto complejo en el suelo. Los caminos se cruzan y divergen, representando los desafíos ocasionales de fusionar código desde tu copia local a la versión alojada remotamente.

## Tu Misión

1. Revisa los comentarios en tu pull request.
2. Realiza los cambios necesarios y actualiza tu pull request.
3. Una vez aprobado, fusiona tu pull request.

## Instrucciones

1. Revisa tu pull request para ver los comentarios de revisión.
2. Si se solicitan cambios:
   - Realiza los cambios localmente
   - Haz commit de los cambios
   - Sube a tu fork
3. El pull request se actualizará automáticamente.
4. Una vez aprobado, haz clic en "Merge pull request" en la interfaz de GitHub.

{{< notice warning >}}
**Importante:** ¡La comunicación es clave! Si no estás seguro sobre los cambios solicitados, no dudes en pedir aclaraciones en los comentarios del pull request.
{{< /notice >}}

{{< mermaid >}}
graph TD
    A[Revisar Comentarios del PR] -->|Se Solicitan Cambios| B(Realizar Cambios Locales)
    B --> C(Hacer Commit de los Cambios)
    C --> D(Subir al Fork)
    D --> E{¿PR Aprobado?}
    E -->|Sí| F(Fusionar PR)
    E -->|No| A
    A -->|No se Necesitan Cambios| E
{{< /mermaid >}}

Después de fusionar exitosamente tu pull request, ¿qué mensaje viste? Ingrésalo a continuación para continuar:

[Campo de entrada para el mensaje de fusión]

{{< expand "Pista" >}}
El mensaje que buscas suele ser algo como "Pull request successfully merged and closed."
{{< /expand >}}

{{< notice info >}}
Nota: El campo de entrada real y la funcionalidad de encriptación necesitarían implementarse por separado, ya que Hugo no proporciona esto por defecto.
{{< /notice >}}