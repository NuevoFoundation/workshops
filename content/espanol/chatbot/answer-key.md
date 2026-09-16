---
title: "Chatbot - Clave de respuestas"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas son soluciones de ejemplo para las actividades del taller de chatbot. Los patrones de AIML deben escribirse en MAYÚSCULAS. Las respuestas de la plantilla pueden usar las mayúsculas y minúsculas que quieras. ¡Las respuestas de tu chatbot pueden ser diferentes de estos ejemplos siempre que la coincidencia de patrones funcione correctamente!
{{% /notice %}}

## Actividad 2: Hola Mundo

Esta es la categoría inicial que aparece en la guía:

```xml
<category>
    <pattern>HOLA</pattern>
    <template>
        ¡Hola, Mundo!
    </template>
</category>
```

Cuando la persona escribe "Hola", el bot responde "¡Hola, Mundo!"

## Actividad 3: Añade tus propias categorías

### 1. ¿Cómo te llamas?

```xml
<category>
    <pattern>COMO TE LLAMAS</pattern>
    <template>
        Me llamo Chatbot.
    </template>
</category>
```

### 2. ¿Cuál es tu color favorito?

```xml
<category>
    <pattern>CUAL ES TU COLOR FAVORITO</pattern>
    <template>
        Mi color favorito es el azul.
    </template>
</category>
```

### 3. ¿Cuál es tu comida favorita?

```xml
<category>
    <pattern>CUAL ES TU COMIDA FAVORITA</pattern>
    <template>
        Mi comida favorita es la pizza.
    </template>
</category>
```

{{% notice tip %}}
**Reglas clave para los patrones:**
- Escribe siempre los patrones en MAYÚSCULAS
- No incluyas signos de puntuación en los patrones (Pandorabots los elimina de lo que escribe la persona antes de comparar)
- Escribe los patrones sin tildes, porque mucha gente escribe sin acentos
- La respuesta de la plantilla puede usar las mayúsculas y minúsculas que quieras
{{% /notice %}}

En este punto, tu bot debería responder a:

| La persona escribe | El bot responde |
|-----------|-------------|
| Hola | ¡Hola, Mundo! |
| ¿Cómo te llamas? | Me llamo Chatbot. |
| ¿Cuál es tu color favorito? | Mi color favorito es el azul. |
| ¿Cuál es tu comida favorita? | Mi comida favorita es la pizza. |

## Actividad 4: Comodines

El comodín `*` coincide con una o más palabras. Al colocar `*` al principio de un patrón, el bot responde a cualquier pregunta que **termine en** la palabra clave.

### 1. Cualquier pregunta que termine en "comida"

```xml
<category>
    <pattern>* COMIDA</pattern>
    <template>
        Mi comida favorita es la pizza.
    </template>
</category>
```

### 2. Cualquier pregunta que termine en "color"

```xml
<category>
    <pattern>* COLOR</pattern>
    <template>
        Mi color favorito es el azul.
    </template>
</category>
```

### 3. Cualquier pregunta que termine en "nombre"

```xml
<category>
    <pattern>* NOMBRE</pattern>
    <template>
        Me llamo Chatbot.
    </template>
</category>
```

{{% notice tip %}}
**Pregunta frecuente:** «¿Todavía necesito las categorías de la Actividad 3?»

¡Puedes conservar las dos! Pandorabots busca primero el patrón más específico. Así, "CUAL ES TU COMIDA FAVORITA" (coincidencia exacta) tiene prioridad sobre "* COMIDA" (comodín). Las categorías con comodín se encargan de las preguntas para las que no escribiste una categoría específica, como "¿Te gusta la comida?" o "Cuéntame sobre la comida".
{{% /notice %}}

Ahora el bot responde a muchas más entradas:

| La persona escribe | Coincide con el patrón | El bot responde |
|-----------|----------------|-------------|
| ¿Cuál es tu comida favorita? | CUAL ES TU COMIDA FAVORITA | Mi comida favorita es la pizza. |
| ¿Te gusta la comida? | * COMIDA | Mi comida favorita es la pizza. |
| Cuéntame sobre la comida | * COMIDA | Mi comida favorita es la pizza. |
| ¿Cómo te llamas? | COMO TE LLAMAS | Me llamo Chatbot. |
| ¿Tienes un nombre? | * NOMBRE | Me llamo Chatbot. |

## Actividad 5: Comodines con eco

La etiqueta `<star />` captura lo que haya coincidido con el comodín `*` y lo incluye en la respuesta del bot.

### 1. "Me llamo [nombre]" responde "¡Mucho gusto, [nombre]!"

```xml
<category>
    <pattern>ME LLAMO *</pattern>
    <template>
        ¡Mucho gusto, <star />!
    </template>
</category>
```

### 2. "Mi color favorito es [color]" responde "¡A mí también me gusta el [color]!"

```xml
<category>
    <pattern>MI COLOR FAVORITO ES *</pattern>
    <template>
        ¡A mí también me gusta el <star />!
    </template>
</category>
```

### 3. "Mi comida favorita es [comida]" responde "¡[comida]! ¡Qué rico!"

```xml
<category>
    <pattern>MI COMIDA FAVORITA ES *</pattern>
    <template>
        ¡<star />! ¡Qué rico!
    </template>
</category>
```

Cómo funciona `<star />`:

| La persona escribe | `*` captura | El bot responde |
|-----------|-------------|-------------|
| Me llamo Juan | Juan | ¡Mucho gusto, Juan! |
| Me llamo Ana | Ana | ¡Mucho gusto, Ana! |
| Mi color favorito es azul | azul | ¡A mí también me gusta el azul! |
| Mi color favorito es rojo | rojo | ¡A mí también me gusta el rojo! |
| Mi comida favorita es pizza | pizza | ¡pizza! ¡Qué rico! |
| Mi comida favorita es sushi | sushi | ¡sushi! ¡Qué rico! |

## Archivo AIML completo

Así es como debería verse tu archivo `greetings.aiml` completo después de todas las actividades:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<aiml>

<!-- Actividad 2: Hola Mundo -->
<category>
    <pattern>HOLA</pattern>
    <template>
        ¡Hola, Mundo!
    </template>
</category>

<!-- Actividad 3: Categorías básicas -->
<category>
    <pattern>COMO TE LLAMAS</pattern>
    <template>
        Me llamo Chatbot.
    </template>
</category>

<category>
    <pattern>CUAL ES TU COLOR FAVORITO</pattern>
    <template>
        Mi color favorito es el azul.
    </template>
</category>

<category>
    <pattern>CUAL ES TU COMIDA FAVORITA</pattern>
    <template>
        Mi comida favorita es la pizza.
    </template>
</category>

<!-- Actividad 4: Categorías con comodín -->
<category>
    <pattern>* NOMBRE</pattern>
    <template>
        Me llamo Chatbot.
    </template>
</category>

<category>
    <pattern>* COLOR</pattern>
    <template>
        Mi color favorito es el azul.
    </template>
</category>

<category>
    <pattern>* COMIDA</pattern>
    <template>
        Mi comida favorita es la pizza.
    </template>
</category>

<!-- Actividad 5: Comodines con eco -->
<category>
    <pattern>ME LLAMO *</pattern>
    <template>
        ¡Mucho gusto, <star />!
    </template>
</category>

<category>
    <pattern>MI COLOR FAVORITO ES *</pattern>
    <template>
        ¡A mí también me gusta el <star />!
    </template>
</category>

<category>
    <pattern>MI COMIDA FAVORITA ES *</pattern>
    <template>
        ¡<star />! ¡Qué rico!
    </template>
</category>

</aiml>
```

{{% notice tip %}}
**Prioridad de los patrones en AIML:** Cuando varios patrones podrían coincidir con la misma entrada, Pandorabots usa la coincidencia más específica. Por ejemplo, "MI COMIDA FAVORITA ES *" es más específico que "* COMIDA", así que "Mi comida favorita es pizza" coincidirá con el patrón de comodín con eco y responderá "¡pizza! ¡Qué rico!" en lugar de "Mi comida favorita es la pizza".
{{% /notice %}}
