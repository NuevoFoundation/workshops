---
title: "Actividade 3 - Adicionando efeitos a sua musica"
date: 2019-07-23T11:45:38-07:00
weight: 5
draft: false
---

## Efeitos no EarSketch

**Efeitos** permitem ao produtor alterar o som do clipe de áudio, criando um som único. Assim como usamos `fitMedia()` para adicionar novos clipes de áudio, devemos usar a função `setEffect()` para definir efeitos específicos para cada clipe. É importante notar que vários efeitos podem ser aplicados na mesma trilha. Isso permite que o produtor combine múltiplos efeitos. O EarSketch possui muitos efeitos integrados. Para ver todos os efeitos, acesse este [link](https://earsketch.gatech.edu/earsketch2/#?curriculum=5-1-0&language=python) e certifique-se de que o painel *Curriculum* está selecionado na barra de navegação.

Antes de começarmos a adicionar efeitos à nossa música, vamos analisar as partes das duas funções `setEffect`:

<img src="../img/screenshot-seteffect1.png" height="30"/>

- `track`: O número da trilha à qual o efeito será aplicado. Nota: Para aplicar um efeito à trilha Master, use 0 como valor para track. A trilha master é onde todo o áudio é reproduzido em conjunto. Essa é uma maneira fácil de aplicar um efeito a todos os sons processados.
- `effectType`: O efeito específico que está sendo utilizado.
- `effectParameter`: A configuração do efeito que está sendo usada.
- `effectValue`: O valor aplicado ao effectParameter.
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
    <img src="../img/Robot_2_Pink.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_1_Green.PNG" width="45%">
  </div>
  <div class="column">
    <img src="../img/Robot_2_Blue.PNG" width="45%">
  </div>
</div>

## Adicione a função setEffect à sua música

Agora que estamos mais familiarizados com o uso de efeitos, vamos adicionar um efeito à nossa música.

1. Encontre o bloco de função `setEffect`. Existem dois blocos `setEffect`; escolha o primeiro (o que está mais acima). Arraste o bloco para o seu script, abaixo dos blocos de código já existentes.
2. Precisamos substituir os parâmetros pelos nossos próprios valores. Use o menu suspenso para substituir `track` por 2 (ou qualquer outro número que desejar).
3. Use o menu suspenso para ver os diferentes efeitos que podem ser selecionados para o parâmetro `effectType`. Vamos selecionar DELAY como `effectType`.
4. Agora que escolhemos nosso `effectType`, precisamos de um `parameter`. Vamos selecionar DELAY_FEEDBACK para o `parameter`.
5. Para o último parâmetro, insira um valor válido. Como escolhemos DELAY_FEEDBACK, devemos especificar um número entre -120.0 e -1.0. Exemplo: use -6.0 como valor do efeito para DELAY_FEEDBACK.

Seu código deve ficar parecido com este:

<img src="../img/screenshot-set-effect-1.png" height="400"/>
