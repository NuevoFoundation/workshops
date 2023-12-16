---
title: "Fundamentos de cores"
draft: false
weight: 3
---

## Fundamentos de cores
Ao examinar todos os tipos de fotos online, você já se perguntou como essas fotos ganharam cores? Na verdade, os computadores têm *modo* RGB* para representar cores.

## Formato RGB
Em Python, seguimos um formato específico ao definir cores:
(R, G, B), onde "R", "G" e "B" são todos números inteiros. "R" representa alguma quantidade de <span style="color:red; font-weight:bold"> vermelho</span>, "G" representa alguma quantidade de <span style="color:green; font-weight:bold "> verde</span> e "B" representa alguma quantidade de <span style="color:blue; font-weight:bold"> azul</span>.

 A cor representada por (R, G, B) é a que obtemos da “mistura de” diferentes quantidades de vermelho (Red), verde (Green) e azul (Blue).

<!-- Para acessibilidade, use este rótulo HTML -->
<label for="colorpicker">Você pode clicar na linha abaixo e escolher as cores que deseja no quadro de cores para observar seus valores RGB:</label>
<input type="color" id="colorpicker">

{{% notice tip %}}
*O que queremos dizer com “mistura de cores”?*

Aqui estamos usando diferentes quantidades de luz vermelha, verde e azul para obter uma nova cor de luz. Assim como usamos diferentes quantidades de pigmentos durante a pintura, misturamos diferentes quantidades de luzes para criar diferentes cores de luz. Os pigmentos usam as cores primárias vermelho, amarelo e azul, enquanto os computadores usam cores primárias vermelha, verde e azul.

Esta imagem representa aproximadamente como as cores se misturam:
![alt text iframe height="600px" width="40%"](../../media/colors.svg.png "representação de cores")

Assim como não devemos usar muito pigmento, também há limitação para representação de cores. O número inteiro máximo que podemos usar para representar cada quantidade de cor é 255 e o número inteiro mínimo que podemos usar para representar cada quantidade de cor é 0. Isso é definido no modo RGB.

Em todos os materiais a seguir, “cor” significa “a cor da luz”.
{{% /notice %}}


## Perguntas e Respostas
1. Qual cor (0, 0, 0) representa?

<center>
<label for="colorpickerQ1">Experimente:</label> </br>
<input type="color" id="colorpickerQ1"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostre a resposta" %}}
Preto. Todas as cores são de 0%. (Não há cor aqui. O mundo inteiro é tão escuro. É preto!)
![alt text height="600px" width="40%"](../../media/black.png "black")
</br>
{{% /showanswer %}}

2. Qual cor (255, 255, 255) representa?

<center>
<label for="colorpickerQ2">Experimente:</label> </br>
<input type="color" id="colorpickerQ2"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostre a resposta" %}}
Branco. 255 representa que você está usando 100% de cada cor, que é saturada. (Quando todas as cores estiverem saturadas, você terá branco)
![alt text height="600px" width="40%"](../../media/white.png "branco")
</br>
{{% /showanswer %}}

3. Qual cor (100, 100, 100) representa?

<center>
<label for="colorpickerQ3">Experimente:</label> </br>
<input type="color" id="colorpickerQ3"
style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostre a resposta" %}}
Cinza. 100/255% = 39,2%. Você obterá cinza somando 39,2% de vermelho, 39,2% de azul e 39,2% de verde.
![alt text height="600px" width="40%"](../../media/grey.png "cinza")
</br>
{{% /showanswer %}}

*Observação: não entre em pânico se você se sentir confuso aqui, explicaremos mais sobre essas ideias nas atividades de código python posteriormente no workshop.*
<br/><br/>

## Cores integradas

Em Python, as cores mais usadas são preparadas para você. Quando precisar se referir a uma cor, basta fazer:
```python
color = 'color name'
```
For example:
Red:
```python
color = 'red'
# O código a seguir é usado para mostrar a cor obtida.
# Você pode pular essas linhas por enquanto e iremos explicá-las na próxima página!
img = Image.new('RGB', (60, 30), color)
img.save('red.png')
img.show('red.png')
```
A seguir está sua saída:
![alt text](../../media/whileloopbefore.png "vermelho")
Incrível! Você tem vermelho!
