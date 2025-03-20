---
title: "Ecoando Coringas"
draft: false
weight: 9
---

## Introduzindo a tag ```<star />```
Vamos aprender mais uma ferramenta para permitir que nosso chatbot tenha respostas mais interessantes. Aprendemos na última lição como podemos usar o coringa ```*``` para corresponder a qualquer palavra ou frase. Mas e se quisermos usar a palavra ou frase que o usuário digitou em nossa resposta? Por exemplo, se o usuário nos disser qual é a cor favorita dele, queremos que a resposta do bot inclua a cor favorita do usuário. Podemos fazer isso usando a tag ```<star />```.

A tag ```<star />``` é uma tag especial que nos permite usar a palavra ou frase que o usuário digitou em nossa resposta. Vamos ver como funciona.

```
<category>
    <pattern>MINHA COR FAVORITA É *</pattern>
    <template>
        Sua cor favorita é <star />.
    </template>
</category>
```

Vamos entender como essa categoria funciona. O padrão "MINHA COR FAVORITA É *" corresponderá a qualquer entrada que comece com "MINHA COR FAVORITA É" seguido de qualquer palavra ou frase. Então o padrão corresponderá a "MINHA COR FAVORITA É AZUL" e "MINHA COR FAVORITA É VERMELHA" e "MINHA COR FAVORITA É VERDE" e assim por diante. A tag ```<star />``` capturará a palavra ou frase que o usuário digitou e a usará na resposta. Então, se o usuário digitar "MINHA COR FAVORITA É AZUL", "azul" é a palavra representada pelo coringa, então quando o chatbot responder, ```<star />``` será substituído por "azul". O bot responderá com "Sua cor favorita é azul".

Aqui estão mais alguns exemplos de entradas e saídas dessa categoria:

Entrada | Saída 
---|--------------
MINHA COR FAVORITA É AZUL | Sua cor favorita é azul.
MINHA COR FAVORITA É VERMELHA | Sua cor favorita é vermelha.
MINHA COR FAVORITA É VERDE | Sua cor favorita é verde.