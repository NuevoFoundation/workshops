---
title: "Atividade 5 - Use efeitos para fade in"
description: "Configurando fones de ouvido"
weight: 9
prereq: "Python: Fundamentos. Impressão, comentários, funções"
difficulty: "Intermediário"
draft: false
---

Agora que você tem um efeito em sua música, vamos tentar fazer um fade in (aparecimento) na introdução de nossa música.

Na atividade 4, usamos a função `setEffect` para aplicar um efeito a uma faixa específica durante toda a duração da música, mas e se você quiser que apenas uma seção específica da sua música tenha efeito? 
Use o `setEffect` função com mais parâmetros!
![](../img/screenshot-seteffect2.png)

- `effectStartValue`: O valor inicial aplicado ao parâmetro
- `effectStartLocation`: O compasso no qual o valor inicial é definido
- `effectEndValue`: O valor final do parâmetro
- `effectEndLocation`: O compasso no qual o valor final é definido

Esta versão do `setEffect` nos permite realizar *automação*
em uma peça específica da nossa música. Automação é uma forma de mudar o valor
de um efeito ao longo do tempo. Um uso da automação é fazer com que uma música apareça gradualmente
ou desaparecer. Para fazer isso, devemos ajustar o **GAIN** `effectParameter`'s
volume no **VOLUME** `effectType` ao longo do tempo. Por exemplo, se nós
defina nosso `effectStartValue` em -60 db e nosso `effectEndValue` em 0
db, vai soar como se nossa música estivesse desaparecendo com o tempo. Para ajustar o
ponto inicial e duração do efeito, especifique o
`efeitoStartLocation` e `efeitoEndLocation`.

![DJ Nuvi](https://media.giphy.com/media/OTk8FTCvQ5WQQfJqVf/giphy.gif)
## Adicione outra função setEffect à sua música

1. Adicione outra chamada de função `setEffect` ao seu código, mas certifique-se de que todos os 7 parâmetros estejam presentes na chamada.
2. Defina `effectType` como VOLUME.
3. Use o guia de referência "Every Effect Explained in Detail" para ver quais parâmetros `VOLUME` possui. Para ajustar o volume de um clipe de áudio, use o GAIN `effectParameter`.
4. Se quisermos fazer algo parecer que está desaparecendo (fade out), devemos fazer com que o volume do som comece em zero e aumente até cerca de 0 decibéis. Para fazer isso, defina effectStartValue com um valor muito baixo e effectEndValue com um valor mais alto.

{{% notice tip %}}
*Dica:* O volume é medido em decibéis. Em decibéis, quanto mais positivo for um número, mais alto ele fica. Além disso, tente não exceder 0 decibéis para evitar distorções.
{{% /notice %}}

5. Defina valores para `effectStartLocation` e `effectEndLocation` para especificar quando iniciar e parar o efeito de fade.

Seu código agora deve ser parecido com isto:

```python
    from earsketch import *

    init()
    setTempo(120)

    fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
    fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

    # Section A
    def sectionA(startMeasure, endMeasure):
        fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
        fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

    # Section B
    def sectionB(startMeasure, endMeasure): 
        fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
        fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
        fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

    sectionA(1, 9)
    sectionB(9, 17)
    sectionA(17, 25)
    setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
    setEffect(2, DELAY, DELAY_TIME, 1200.0)
    setEffect(0, VOLUME, GAIN, -60, 1, 0, 3)

    finish()
```
