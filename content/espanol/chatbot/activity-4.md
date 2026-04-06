---
title: "Actividad 4: Comodines"
draft: false
weight: 9
---

## Uso de comodines
Vamos a utilizar el comodín para permitir que nuestro bot responda a más preguntas sin tener que escribir una nueva categoría para cada pregunta posible. Ampliemos nuestras categorías actuales para que el chatbot pueda responder a cualquier pregunta que termine en "comida", "color" o "nombre".

{{% notice tip %}}

Usa el comodín al inicio del patrón.

{{% /notice %}}

1. Si el usuario ingresa una pregunta que **TERMINA EN** "comida" (por ejemplo, "¿Cuál es tu comida favorita?", "¿Te gusta la comida?", "¿Los chatbots comen comida?"), el bot debería responder con "Mi comida favorita es la pizza".

2. Si el usuario ingresa una pregunta que **TERMINA EN** "color" (por ejemplo, "¿Cuál es tu color favorito?", "¿Cuál es tu color favorito?"), el bot debería responder con "Mi color favorito es el azul".

3. Si el usuario ingresa una pregunta que **TERMINA EN** "nombre" (por ejemplo, "¿Cuál es tu nombre?", "¿Cómo te llamas?", "¿Tienes nombre?"), el bot debería responder con "Mi nombre es Chatbot".
<img src="../img/idea.png" alt="" width="20%"/>