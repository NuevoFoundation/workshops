---
title: "Sala 7: El Callejón de Automatización"
description: "Aprovecha el poder de GitHub Actions para automatizar tu flujo de trabajo."
difficulties: ["avanzado"]
weight: 7
---

Entras en una sala llena de actividad. Los engranajes giran y las cintas transportadoras se mueven, simbolizando procesos automatizados. Una pantalla holográfica cobra vida: "¡Automatiza tu camino hacia la victoria!"

## Tu Misión

1. Crea un flujo de trabajo simple utilizando GitHub Actions.
2. Activa el flujo de trabajo al realizar un cambio en tu repositorio.
3. Observa los resultados del proceso automatizado.

## Instrucciones

1. En tu repositorio local, crea un nuevo directorio llamado `.github/workflows`.
2. Dentro de este directorio, crea un archivo llamado `hello-world.yml`.
3. Agrega el siguiente contenido al archivo:

   ```yaml
   name: Hello World Workflow
   on: [push]
   jobs:
     say-hello:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Say Hello
           run: echo "Hello, GitHub Actions!"

    ```
4. Realiza un commit de este archivo y súbelo a tu repositorio de GitHub.  
Ve a la pestaña "Actions" en tu repositorio de GitHub para ver la ejecución del flujo de trabajo.

{{< notice warning >}}
Nota: GitHub Actions puede ser una herramienta poderosa para la automatización, pero ten en cuenta los límites de uso en las cuentas gratuitas.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Crear archivo de flujo de trabajo] --> B(Realizar commit y subir)
B --> C{¿Flujo de trabajo activado?}
C -->|Sí| D[Ver resultados]
C -->|No| E[Revisar archivo de flujo de trabajo en busca de errores]
E --> B
{{< /mermaid >}}

Después de que tu flujo de trabajo se ejecute con éxito, ¿cuál fue el resultado del paso "Say Hello"? Escríbelo a continuación:

<label for="finput">Campo de entrada para el resultado del flujo de trabajo:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Pista" >}}
El resultado debería ser exactamente lo que especificaste en el comando echo en tu archivo de flujo de trabajo.
{{< /expand >}}

{{< notice success >}}
¡Fantástico trabajo! Has automatizado tu primer proceso con GitHub Actions. ¡Adelante hacia el próximo desafío!
{{< /notice >}}

