---
title: "Intervalo de Confiança"
description: "Fazer computadores aprenderem a prever resultados."
prereq: "Python"
icon: ""
draft: false
weight: 3
---

Na última seção, encontramos o coeficiente e o intercepto da nossa equação linear usando um conjunto de dados de 30 funcionários aleatórios.

<h3>
\[
    Intercepto = 25792.20
\]
\[
    Coeficiente = 9449.96
\]
\[
    SALÁRIO = 9449.96(XP) + 25792.20 + ε
\]
</h3>

Mas isso levanta uma questão: o **salário** realmente está relacionado com os **anos de experiência** do funcionário? A relação é forte o suficiente para afirmarmos que existe essa ligação? 30 funcionários aleatórios são suficientes para determinar isso? Como ter certeza que esses valores estão corretos?

Lembre-se de que encontramos os valores usando uma pequena amostra de um conjunto muito maior. Como temos apenas uma amostra, os valores de **coeficiente** e **inclinação** são mais incertos.

O que podemos fazer para validar os valores?

{{% expand "**Clique para ver a resposta**" %}}
Precisamos rodar o modelo linear com mais amostras aleatórias.
{{% /expand %}}

---

# Exercício 1: Verificando mais amostras

Suponha que agora você tenha mais de 10.000 registros de funcionários da empresa 😯! Isso é ótimo, pois, no machine learning, quanto mais dados, melhores resultados.

Pegue 30 registros aleatórios desse conjunto e verifique se o intercepto e o coeficiente diferem do que obtivemos antes. Execute o código várias vezes e note que os valores ficam próximos aos originais.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e1.py" target="_blank">Executar no Replit</a>

Isso acontece porque, a cada execução, uma nova amostra de 30 registros é escolhida. Os valores mudam, mas vêm do mesmo conjunto.

---

# Intervalos de Confiança

Quando usamos amostras aleatórias, os valores de **intercepto** e **coeficiente** variam dentro de um intervalo. Sabemos que o valor real está entre dois pontos, mas não sabemos exatamente quais. Esse intervalo é o **intervalo de confiança**.

Se rodarmos o código do Exercício 1 várias vezes, veremos que o coeficiente raramente fica abaixo de 9000 ou acima de 10000. A diferença entre todos os coeficientes possíveis é o **erro padrão**.

**Erro Padrão** → distância média que os valores estão da linha de regressão.

---

# Exemplo 2: Encontrando o Erro Padrão

Com a biblioteca [StatsModels](https://www.statsmodels.org/stable/index.html) conseguimos obter o **stderr** (erro padrão).  
Se o erro padrão for 409,40, significa que o coeficiente da linha pode variar em até 409,40.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/03-e2.py" target="_blank">Executar no Replit</a>

---

# Exemplo 3: Distribuição Normal

A estatística usa a **curva normal** ou **curva em sino** para medir a probabilidade de ocorrência de valores.

|![Distribuição Normal](../resources/normal_distribution.png)|
|:--:|
|Figura: Distribuição Normal|

Se compararmos com alturas de pessoas, é raro ver pessoas muito baixas ou muito altas, mas comum ver alturas médias.

Rodando o código, veremos que o histograma gerado se parece com uma curva normal. Podemos usar o erro padrão e a fórmula:

\[
    IntervaloCoef = Coeficiente \pm 2 * (ErroPadrão)
\]

Se o coeficiente for 9449,96 e o erro padrão 409,40:

\[
    IntervaloCoef = [8631,16, 10268,76]
\]

Isso significa:
- O coeficiente estará entre 8.631,16 e 10.268,76.
- O aumento salarial por ano está nesse intervalo.
