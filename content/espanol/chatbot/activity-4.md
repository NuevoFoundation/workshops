---
title: "Actividad 4: Comodines"
draft: false
weight: 9
---

## Usando comodines
Vamos a usar el comodín para permitir que nuestro bot responda a más preguntas, sin necesidad de escribir una nueva categoría para cada posible pregunta. Vamos a ampliar nuestras categorías actuales para que el chatbot pueda responder a cualquier pregunta que termine con "comida", "color" o "nombre".

{{% notice tip %}}

Usa el comodín al principio del patrón.

{{% /notice %}}

1. Si el usuario ingresa una pregunta que **TERMINA CON** "comida" (por ejemplo: "¿Cuál es tu comida favorita?", "¿Te gusta la comida?", "¿Los chatbots comen comida?"), el bot debe responder con "Mi comida favorita es la pizza".

2. Si el usuario ingresa una pregunta que **TERMINA CON** "color" (por ejemplo: "¿Cuál es tu color favorito?", "¿Cuál es tu color preferido?"), el bot debe responder con "Mi color favorito es el azul".

3. Si el usuario ingresa una pregunta que **TERMINA CON** "nombre" (por ejemplo: "¿Cuál es tu nombre?", "¿Cómo te llamas?", "¿Tienes un nombre?"), el bot debe responder con "Mi nombre es Chatbot".
<img src="../img/idea.png" alt="" width="20%"/>