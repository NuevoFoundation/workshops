---
title: "Noções básicas sobre cores"
draft: false
weight: 3
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-ior2GcSYa4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Fundamentos das Cores

Enquanto navegamos por imagens na internet, você já se perguntou como aquelas imagens têm cor? Na verdade, os computadores usam o *modo RGB* para representar cores.

## Formato RGB

Em Python, seguimos um formato específico para definir cores:  
`(R, G, B)`, onde "R", "G" e "B" são números inteiros.  
"R" representa uma quantidade de <span style="color:red; font-weight:bold">vermelho</span>,  
"G" representa uma quantidade de <span style="color:green; font-weight:bold">verde</span>,  
e "B" representa uma quantidade de <span style="color:blue; font-weight:bold">azul</span>.

A cor representada por `(R, G, B)` é o resultado da mistura dessas três cores de luz.

<!-- Para acessibilidade, use este label HTML -->
<label for="colorpicker">Você pode clicar na linha abaixo e escolher uma cor para ver seus valores RGB:</label>
<input type="color" id="colorpicker">

{{% notice tip %}}
*O que significa "mistura de cores"?*

Aqui estamos misturando quantidades diferentes de luz vermelha, verde e azul para criar novas cores. É parecido com a pintura com tinta, onde usamos pigmentos nas cores primárias vermelho, amarelo e azul. Mas no computador usamos luz — com as cores primárias vermelho, verde e azul.

Esta imagem mostra, de forma aproximada, como as cores se combinam:  
![alt text iframe height="600px" width="40%"](../../media/colors.svg.png "representação de mistura de cores")

Assim como não devemos usar tinta demais, há um limite para representar cores com luz:  
O valor máximo de cada cor no RGB é `255` e o mínimo é `0`.

Em todo o restante do material, "cor" significa "cor da luz".

{{% /notice %}}

## Perguntas e Respostas

1. Que cor representa `(0, 0, 0)`?

<center>
<label for="colorpickerQ1">Teste aqui:</label> </br>
<input type="color" id="colorpickerQ1" style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar Resposta" %}}
Preto. Todos os valores são 0%. (Não há luz — está tudo escuro. É preto!)
![alt text height="600px" width="40%"](../../media/black.png "preto")
</br>
{{% /showanswer %}}

2. Que cor representa `(255, 255, 255)`?

<center>
<label for="colorpickerQ2">Teste aqui:</label> </br>
<input type="color" id="colorpickerQ2" style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar Resposta" %}}
Branco. 255 significa que estamos usando 100% de cada cor — totalmente saturado. Quando todas estão no máximo, o resultado é branco.
![alt text height="600px" width="40%"](../../media/white.png "branco")
</br>
{{% /showanswer %}}

3. Que cor representa `(100, 100, 100)`?

<center>
<label for="colorpickerQ3">Teste aqui:</label> </br>
<input type="color" id="colorpickerQ3" style="display:inline-block;width:40%;height:100px;">
</center>

{{% showanswer "Mostrar Resposta" %}}
Cinza. `100 / 255` = aproximadamente 39,2%. Misturando 39,2% de vermelho, verde e azul obtemos cinza.
![alt text height="600px" width="40%"](../../media/grey.png "cinza")
</br>
{{% /showanswer %}}

*Nota: Não se preocupe se isso parecer confuso agora — vamos praticar com código nas próximas atividades!*

<br/><br/>

## Cores prontas no Python

Em Python, muitas cores comuns já estão prontas para você usar. Para usar uma cor, basta escrever:

```python
color = 'nome_da_cor'
```

Por exemplo, para vermelho:

```python
color = 'red'
# As linhas abaixo mostram a cor. Você pode ignorá-las por enquanto — vamos explicá-las na próxima página!
img = Image.new('RGB', (60, 30), color)
img.save('red.png')
img.show('red.png')
```

A saída será:

![alt text](../../media/whileloopbefore.png "vermelho")

Incrível! Você obteve vermelho!
