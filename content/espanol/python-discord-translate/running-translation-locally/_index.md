---
title: "Ejecutando Traducción en Tu Ordenador"
draft: false
weight: 3
---

El bot de Nuvi puede responder, pero aún no puede ayudar a los amigos a entenderse entre sí. En esta sección, instalarás un programa que puede ejecutar traducción *localmente* en tu ordenador—sin necesidad de cuentas externas—para que el bot pueda convertirse en el puente multilingüe que Nuvi imaginó.

Lo usarás para:
- Pruebas manuales del comando `/translate`
- Detectar si un mensaje está en inglés o español (el endpoint `/detect`)
- Traducir automáticamente mensajes para usuarios registrados (el endpoint `/translate`)

Vamos a configurar el motor de traducción ahora para que el bot pueda conectarse a él.

---

## 1. ¿Qué es LibreTranslate?
LibreTranslate es un programa de traducción gratuito y de código abierto (creado por la comunidad) que puedes ejecutar localmente. Sin cuentas. Sin suscripciones en la nube. Le das texto en un idioma y te devuelve el texto traducido al otro idioma.

Por qué es útil para este taller:
- Privacidad: tu texto permanece en tu ordenador.
- Control: tú eliges los idiomas y cuándo actualizar.
- Uso sin conexión: después de la primera descarga de los datos del idioma, puede funcionar sin internet.
- Código abierto: puedes ver cómo funciona o incluso contribuir.

Piénsalo como un pequeño sitio web local con una **API** que tu bot usará para dos cosas:
1. Detectar en qué idioma está un mensaje (`/detect`)
2. Traducir el mensaje al otro idioma (`/translate`)

Esto alimentará la función de traducción automática más adelante.

### ¿Qué es una API?
Una API es como un menú para un programa. Enumera los "endpoints" (URLs) que puedes llamar y lo que recibes a cambio. Cuando visitas `http://127.0.0.1:5000/translate` con los datos correctos, la API de LibreTranslate responde con el texto traducido. Tu bot **enviará una solicitud** (tu texto + las opciones de idioma) y **recibirá una respuesta** (el texto traducido), como pedir comida y recibir un plato.

---



<details open>
<summary>Temas</summary>
{{% children /%}}
</details>
