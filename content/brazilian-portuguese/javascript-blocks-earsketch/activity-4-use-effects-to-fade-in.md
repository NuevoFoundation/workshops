---
title: "Actividade 4 - Usando efeitos de fade in"
date: 2019-07-23T11:45:38-07:00
weight: 6
draft: false
---

Agora que você já tem um efeito na sua música, vamos tentar fazer a introdução da música aparecer gradualmente (fade in).

Na atividade 3, usamos a função `setEffect` para aplicar um efeito a uma trilha específica durante toda a música, mas e se você quiser que apenas uma parte da música tenha um efeito? Use a função `setEffect` com mais parâmetros!

<img src="../img/screenshot-seteffect2.png" height="30"/>

- `startValue`: O valor inicial aplicado ao parâmetro
- `start`: A medida em que o valor inicial é definido
- `endValue`: O valor final do parâmetro
- `end`: A medida em que o valor final é definido

Esta versão do `setEffect` permite que façamos *automação* em uma parte específica da música. Automação é uma forma de mudar o valor de um efeito ao longo do tempo. Um uso comum da automação é fazer uma música aparecer (fade in) ou desaparecer (fade out) gradualmente. Para isso, devemos ajustar o volume do parâmetro **GAIN** no `effectType` **VOLUME** ao longo do tempo. Por exemplo, se definirmos o `startValue` em -60 db e o `endValue` em 0 db, parecerá que a música está aumentando de volume aos poucos. Para ajustar o ponto inicial e a duração do efeito, especifique os valores de `start` e `end`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)

## Adicione outra função setEffect à sua música

1. Adicione outro bloco `setEffect` ao seu código, mas certifique-se de que o bloco tenha 7 parâmetros.
2. Selecione VOLUME para o `effectType` usando o menu suspenso.
3. Selecione GAIN para o `parameter` usando o menu suspenso.
4. Se quisermos que algo soe como se estivesse aparecendo, o volume do som deve começar bem baixo e aumentar gradualmente. Para isso, defina o `startValue` em um valor bem baixo (como -60) e o `endValue` em um valor mais alto (como 0).

{{% notice tip %}}
*Dica:* O volume é medido em decibéis. Em decibéis, quanto mais positivo o número, mais alto o volume. Tente não ultrapassar 0 decibéis.
{{% /notice %}}

5. Defina os valores dos parâmetros `start` e `end` para especificar quando começar e terminar o efeito de fade in.

Seu código deve ficar parecido com isto:

<img src="../img/screenshot-set-effect-2.png" height="400"/>
