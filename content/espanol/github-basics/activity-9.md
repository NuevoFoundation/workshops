---
title: "Sala 9: La Fortaleza de Seguridad"
description: "Fortalece tu repositorio con las características de seguridad de GitHub."
difficulties: ["avanzado"]
weight: 9
---

Ingresas a una sala llena de medidas de seguridad. Candados, escudos y monitores de seguridad te rodean. Una voz severa declara: "¡Asegura tu código para continuar!"

## Tu Misión

1. Habilita las alertas de Dependabot para tu repositorio.
2. Agrega una política de seguridad a tu repositorio.
3. Ejecuta una alerta de análisis de código usando GitHub Actions (si tu repositorio es público).

## Instrucciones

1. Ve a la pestaña "Settings" de tu repositorio.
2. Haz clic en "Security & analysis" en la barra lateral izquierda.
3. Habilita las alertas de Dependabot.
4. En tu repositorio, crea un nuevo archivo en `.github/SECURITY.md`.
5. Agrega pautas básicas de seguridad a este archivo.
6. Si tu repositorio es público, habilita el análisis de código en las configuraciones de "Security & analysis".

{{< notice danger >}}
**Importante:** Siempre sé cauteloso al tratar con configuraciones de seguridad. Asegúrate de entender cada característica antes de habilitarla.
{{< /notice >}}

{{< expand "Ejemplo de Política de Seguridad" >}}

# Política de Seguridad

## Reportar una Vulnerabilidad

Si descubres una vulnerabilidad de seguridad en este proyecto, por favor envía un correo electrónico a security@example.com. Todas las vulnerabilidades de seguridad serán atendidas de manera inmediata.

## Versiones Soportadas

Utiliza esta sección para informar a las personas sobre qué versiones de tu proyecto están actualmente siendo soportadas con actualizaciones de seguridad.

| Versión  | Soportada          |
| -------- | ------------------ |
| 5.1.x    | :white_check_mark: |
| 5.0.x    | :x:                |
| 4.0.x    | :white_check_mark: |
| < 4.0    | :x:                |

{{< /expand >}}
Después de configurar tu política de seguridad, ¿qué dirección de correo electrónico especificaste para reportar vulnerabilidades? Escríbela a continuación:

<label for="finput">Campo de entrada para dirección de correo electrónico:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
¡Bien hecho, experto en seguridad! Has fortalecido tu repositorio. ¡Vamos al desafío final!
{{< /notice >}}