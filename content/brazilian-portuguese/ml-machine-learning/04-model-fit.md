---
title: "Ajuste do Modelo"
prereq: "Python"
icon: ""
draft: false
weight: 4
---

# Nosso modelo se ajusta bem?

Lembre-se de que a equação linear que construímos tem um valor de erro aleatório (**ε**).

<h3>
\[
    SALÁRIO = 9449.96(XP) + 25792.20 + ε
\]
</h3>

Como **ε** é um valor de erro que não conseguimos determinar exatamente, precisamos nos perguntar:

1. Quão bem o nosso modelo representa a realidade, ou seja, quão bem ele `se ajusta` aos dados que temos?
2. Como podemos saber se **Anos de Experiência** realmente têm efeito sobre o **Salário**?

Existem muitas formas de descobrir isso, mas no mundo do *machine learning* e da estatística, existe um valor que podemos usar. Esse valor é chamado de **R-Quadrado** ou **R<sup>2</sup>**.

[R-Quadrado](https://www.ncl.ac.uk/webtemplate/ask-assets/external/maths-resources/statistics/regression-and-correlation/coefficient-of-determination-r-squared.html#:~:text=6%20See%20Also-,Definition,line%20approximates%20the%20actual%20data.) — é uma medida que fornece informações sobre a qualidade do ajuste (*goodness of fit*) de um modelo. No contexto da regressão, é uma medida estatística de quão bem a linha de regressão se aproxima dos dados reais.  
Como regra geral, se o valor de **R<sup>2</sup>** for próximo de 1, significa que o modelo matemático que escolhemos tem um bom ajuste ou realmente aproxima os valores reais dos nossos dados.

---

## Exercício 1: Encontrando o R-Quadrado

O arquivo `Experience_vs_Salary-More_Data` tem mais de 10.000 entradas onde é possível ver o salário e os anos de experiência dos funcionários da empresa onde você trabalha.  
O código no Replit abaixo irá pegar a amostra inicial de 30 funcionários e encontrar o erro padrão e o valor de R<sup>2</sup>.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/04-e1.py" target="_blank">Executar no Replit</a>

Como você pode ver, o valor de R<sup>2</sup> é **0,973**.  
Agora, se alguém nos perguntar se existe relação nos nossos dados, podemos dizer que:

> "Temos 97,3% de confiança de que os anos de experiência de um funcionário estão relacionados ao salário que ele recebe."

Recomendo alterar a variável `sample_size` para um valor maior ou menor e observar como o valor de R<sup>2</sup> é afetado.

Agora, vamos fazer algumas previsões!
