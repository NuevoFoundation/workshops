---
title: "Atividade 4: Coringas"
draft: false
weight: 9
---

## Usando coringas
Vamos usar o coringa para permitir que nosso bot responda a mais perguntas, sem ter que escrever uma nova categoria para cada possível pergunta. Vamos expandir nossas categorias atuais para que o chatbot possa responder a qualquer pergunta que termine com "comida", "cor" ou "nome".

{{% notice tip %}}

Use o coringa no início do padrão.

{{% /notice %}}

1. Se o usuário digitar uma pergunta que **TERMINA COM** "comida" (por exemplo, "Qual é a sua comida favorita?", "Você gosta de comida?", "Chatbots comem comida?"), o bot deve responder "Minha comida favorita é pizza".

2. Se o usuário digitar uma pergunta que **TERMINA COM** "cor" (por exemplo, "Qual é a sua cor favorita?", "Qual é a sua cor favorita?"), o bot deve responder "Minha cor favorita é azul".

3. Se o usuário digitar uma pergunta que **TERMINA COM** "nome" (por exemplo, "Qual é o seu nome?", "Qual é o seu nome?", "Você tem um nome?"), o bot deve responder "Meu nome é Chatbot".