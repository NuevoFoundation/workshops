---
title: "Coringas"
draft: false
weight: 8
---

## Coringas
Você deve estar percebendo agora que dá muito trabalho escrever uma categoria para cada maneira possível que um usuário pode fazer uma pergunta. Por exemplo, atualmente o bot responde a "Olá" com "Olá, mundo". Mas e se o usuário disser "Olá, tudo bem" ou "Olá, chatbot"? Teríamos que escrever uma nova categoria para cada um desses casos. Felizmente, existem ferramentas adicionais que podemos usar para tornar nosso bot mais flexível.

Uma dessas ferramentas é o **coringa**. Um coringa é um caractere especial que corresponde a qualquer palavra ou frase. Vamos ver como funciona.

```
<category>
    <pattern>OLÁ *</pattern>
    <template>
        Oi!
    </template>
</category>
```

O símbolo ```*``` é capaz de capturar 1 ou mais palavras na entrada do usuário. Com essa nova categoria, o chatbot agora responderá com "Oi!" a qualquer entrada que comece com "Olá" seguido de qualquer palavra. Então o padrão "OLÁ *" corresponderá a "OLÁ TUDO BEM" e "OLÁ CHATBOT" e "OLÁ MUNDO" e "OLÁ PESSOAL" e assim por diante.