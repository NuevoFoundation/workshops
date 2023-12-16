---
title: "Activity 4 - Add effects to your song"
description: "Configurando fones de ouvido"
weight: 8
prereq: "Python: Fundamentos. Impressão, comentários, funções"
difficulty: "Intermediário"
draft: false
---

## Efeitos no EarSketch

**Efeitos** permitem que o produtor altere o som do clipe de áudio
em seu próprio som único. Semelhante a como usamos `fitMedia()` para adicionar
novos clipes de áudio, devemos usar a função `setEffect()` para definir
efeitos específicos para cada clipe de áudio. É importante notar que
vários efeitos podem ser colocados na mesma trilha. Isto permite que
produtor para combinar vários efeitos juntos. Earsketch tem muitos
efeitos integrados. Para fazer referência a todos os efeitos, visite este
[link](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) e certifique-se de que o painel *Curriculum* esteja selecionado na barra de navegação.

Antes de começarmos a adicionar efeitos à nossa música, vamos dividir as peças
das duas funções `setEffect`:
![](../img/screenshot-seteffect1.png)

- `track`: O número da faixa à qual o efeito é aplicado. Nota: Para aplicar um efeito à trilha Master, use 0 como valor da trilha. A faixa master é onde todo o áudio é reproduzido coletivamente. Esta é uma maneira fácil de aplicar um efeito a todos os sons que estão sendo processados.
- `effectType`: O efeito específico que está sendo usado
- `effectParameter`: A configuração do efeito que está sendo usado
- `effectValue`: A densidade aplicada ao effectParameter
<style>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.3%;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>

<div class="row">
  <div class="column">
    <img src="../img/Robot_2_Pink.PNG" width="400" height="400">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="400" height="400">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="400" height="400">
  </div>
</div>

## Adicione a função setEffect à sua música

Como estamos mais familiarizados com o uso de efeitos, vamos adicionar um efeito ao
nossa música.

1. No navegador API à esquerda, vá até API `setEffect`.
2. Insira uma chamada de função `setEffect` em seu código, usando o ícone de colar.
3. Precisamos substituir os parâmetros pelos nossos próprios valores. Coloque um valor inteiro para `trackNumber`. Vamos colocar 2.
4. Para o restante dos parâmetros do efeito, clique no ícone do olho na API `setEffect` e você verá um link para "Cada efeito explicado em detalhes". Clique nele para abrir esta seção no lado direito da janela.
5. Você pode notar que o Earsketch tem muitas variações diferentes de efeitos. Por padrão, você deverá ver a seção 30.4 BANDPASS à direita. Por enquanto, usaremos o DELAY da seção 30.4 como `effectType` em nossa chamada de função `setEffect`.
6. Agora que escolhemos nosso `effectType`, precisamos de um `effectParameter`. Navegue até a seção 30.4 à direita para verificar os diferentes parâmetros suportados pelo DELAY. Aqui está uma foto dessa seção. Recomendamos usar o DELAY\_FEEDBACK.
    ![Imagem do parâmetro do efeito](../img/screenshot-effect-parameter.png)

7. Para o parâmetro final, insira um valor válido. Como escolhemos DELAY\_FEEDBACK, devemos especificar um número entre -120,0 e -1,0 (como mostrado na imagem acima). Exemplo: Use -6,0 como valor de efeito para DELAY\_FEEDBACK.

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

    finish()
```