---
title: "Regressão Linear Simples"
description: "Fazer computadores aprenderem a prever resultados."
prereq: "Python"
icon: ""
draft: false
weight: 2
---

# O que é regressão linear simples?

A regressão linear simples busca encontrar uma correlação entre duas variáveis e derivar equações matemáticas que expliquem a relação entre uma variável dependente e uma independente. No geral, queremos responder:

1. **Existe uma relação entre as variáveis?**

   Podemos verificar, por exemplo, a relação entre renda e gastos, experiência e salário ou umidade e temperatura. Mas não há relação, por exemplo, entre a altura de um aluno e sua nota na prova.

2. **Podemos prever valores com isso?**

   Com a regressão, treinamos o modelo e verificamos se conseguimos prever valores com confiança. Podemos usar o que sabemos sobre a relação para prever novos valores?
   
   Exemplos: Qual será a temperatura amanhã? Quanto minha padaria vai vender este ano em comparação ao ano passado? Qual será meu salário com 5 anos de experiência?

---

# Papéis das variáveis

Na regressão linear simples, as variáveis podem assumir dois papéis:

1. **Variável Dependente**  
   É o valor que queremos prever ou estimar. Chamamos de **dependente** porque depende de outra variável. Representamos como **y**.

2. **Variável Independente**  
   É a variável que podemos controlar ou alterar para impactar a dependente. Representamos como **x**.

   Exemplo: Se uma maçã custa R$ 1,00 e compramos 10, o custo total será R$ 10,00. Aqui, o `custo total` é a variável dependente, e o número de maçãs é a variável independente.

---

# O modelo matemático da regressão linear simples

Chamamos de **linear** porque o modelo representa uma linha reta no plano 2D.

{{% expand "**Clique para ver a resposta**" %}}

A equação é:

\[
    y = ax + b
\]

- **x** → variável independente  
- **y** → variável dependente  
- **a** → inclinação (coeficiente angular) da linha  
- **b** → intercepto (valor de y quando x = 0)

{{% /expand %}}

---

# Exemplo do mundo real

Suponha que você trabalhe como **analista de dados** no RH de uma empresa com mais de 10 mil funcionários. Seu chefe quer saber se os anos de experiência têm relação com o salário. Você coleta dados de 30 funcionários aleatórios e plota um gráfico de dispersão.

O gráfico mostra que os pontos seguem **aproximadamente** uma linha. Isso indica que existe relação linear.

**Pergunta:** Qual é a variável dependente e qual é a independente?
{{% expand "**Clique para ver a resposta**" %}}
- **Anos de experiência (XP)** → variável independente  
- **Salário** → variável dependente  

Equação:  
\[
    SALÁRIO = a(XP) + b
\]
{{% /expand %}}

---

# Possibilidade de erros

Os dados podem conter erros. Por exemplo, se misturarmos salários de cidades com custo de vida diferente, alguns pontos ficarão distantes da linha ideal.

Adicionamos o erro à equação usando a letra grega **ε**:

\[
    SALÁRIO = a(XP) + b + ε
\]

O objetivo da regressão linear simples é encontrar a linha que **minimiza** esse erro.

---

# Exercício 1: Usando Scikit-learn

O **Scikit-learn** é uma biblioteca de machine learning que já possui modelo de regressão linear simples pronto.

Exemplo de código:

```python
# Importando o dataset
dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 1].values
```

```python
model = linear_model.LinearRegression()
model.fit(x, y)
```

---

# Exercício 2: Encontrando a inclinação e o intercepto

Após rodar o modelo, obtemos:

\[
    Intercepto = 25792.20
\]
\[
    Coeficiente = 9449.96
\]
\[
    SALÁRIO = 9449.96(XP) + 25792.20 + ε
\]

Isso significa que:
- Um funcionário sem experiência teria salário de R$ 25.792,20  
- Cada ano de experiência aumenta o salário em R$ 9.449,96
