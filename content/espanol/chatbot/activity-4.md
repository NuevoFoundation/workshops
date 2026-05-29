---
title: "Actividad 4: Comodines"
draft: false
weight: 9
---

## Uso de comodines
Vamos a utilizar el comodín para que nuestro bot pueda responder a más preguntas sin necesidad de escribir una nueva categoría para cada posible pregunta. Ampliemos las categorías actuales para que el chatbot pueda responder a cualquier pregunta que termine con "comida", "color" o "nombre".

{{% notice tip %}}

Utiliza el comodín al principio del patrón.

{{% /notice %}}

1. Si el usuario ingresa una pregunta que **TERMINA CON** "comida" (por ejemplo, "¿Cuál es tu comida favorita?", "¿Te gusta la comida?", "¿Los chatbots comen comida?"), el bot debería responder con "Mi comida favorita es pizza".

2. Si el usuario ingresa una pregunta que **TERMINA CON** "color" (por ejemplo, "¿Cuál es tu color favorito?", "¿Cuál es tu color preferido?"), el bot debería responder con "Mi color favorito es azul".

3. Si el usuario ingresa una pregunta que **TERMINA CON** "nombre" (por ejemplo, "¿Cuál es tu nombre?", "¿Cómo te llamas?", "¿Tienes un nombre?"), el bot debería responder con "Mi nombre es Chatbot".
<img src="../img/idea.png" alt="" width="20%"/>