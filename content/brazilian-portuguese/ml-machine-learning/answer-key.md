```markdown
---
title: "Machine Learning: Regressão Linear - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este gabarito cobre todos os exercícios e cálculos principais do workshop de Regressão Linear. O workshop utiliza o Replit para exercícios em Python com um dataset de Experiência vs. Salário. Alguns exercícios podem produzir resultados diferentes a cada execução devido à amostragem aleatória.
{{% /notice %}}

## Seção 1: O que é Regressão?

### Respostas do Exercício 1

**P1:** Você consegue saber o tipo de figura com base na área?

**R:** Não. Um quadrado (3x3 = 9) e um triângulo (base 6, altura 3, área = 6x3/2 = 9) podem ter a mesma área, mas são figuras diferentes.

**P2:** Qual relação determina o tipo de figura?

**R:** O número de lados. É uma relação linear direta: 3 lados = triângulo, 4 lados = quadrado, 5 lados = pentágono, etc.

## Seção 2: Regressão Linear Simples

### Fórmula Principal

A equação da regressão linear:

```
y = ax + b + ε
```

Onde:
- `x` = variável independente (Anos de Experiência)
- `y` = variável dependente (Salário)
- `a` = coeficiente angular (quanto y muda por unidade de x)
- `b` = intercepto (valor de y quando x = 0)
- `ε` = termo de erro

### Exercício 1: Trabalhando com Scikit-learn

Carregue e visualize o dataset:

```python
import pandas as pd
from sklearn import linear_model

dataset = pd.read_csv("Experience_vs_Salary.csv")
x = dataset.iloc[:, :-1].values  # Coluna de Experiência
y = dataset.iloc[:, 1].values     # Coluna de Salário

model = linear_model.LinearRegression()
model.fit(x, y)
```

### Exercício 2: Encontrando Inclinação e Intercepto

**Respostas:**
- **Intercepto (b):** 25.792,20
- **Coeficiente/Inclinação (a):** 9.449,96
- **Equação:** SALÁRIO = 9.449,96 × (Experiência) + 25.792,20 + ε

**Interpretação:**
- Um funcionário com 0 anos de experiência ganha aproximadamente $25.792.
- Cada ano adicional de experiência aumenta o salário em aproximadamente $9.450.

## Seção 3: Intervalos de Confiança

### Fórmula Principal

```
Intervalo do Coeficiente = Coeficiente ± 2 × Erro Padrão
```

### Exercício 2: Encontrando o Erro Padrão

**Resposta:** Erro Padrão = **409,40**

### Cálculo do Intervalo de Confiança

```
Intervalo do Coeficiente = 9.449,96 ± 2 × 409,40
Intervalo do Coeficiente = 9.449,96 ± 818,80
Intervalo do Coeficiente = [8.631,16 , 10.268,76]
```

**Interpretação:** Estamos 95% confiantes de que cada ano de experiência aumenta o salário entre $8.631,16 e $10.268,76.

### Exercício 1: Verificando Mais Amostras

**P:** Por que os valores de intercepto e coeficiente diferem em cada execução?

**R:** Cada execução seleciona uma amostra aleatória diferente de 30 registros do dataset com mais de 10.000 registros. Amostras diferentes produzem resultados ligeiramente diferentes, mas os valores permanecem dentro do intervalo de confiança.

### Exercício 3: Distribuição Normal

O histograma dos valores do coeficiente de várias amostras forma uma Curva em Sinos (distribuição normal). Isso confirma que os valores se concentram em torno do coeficiente verdadeiro, com a maioria caindo dentro do intervalo de confiança.

## Seção 4: Ajuste do Modelo

### Exercício 1: Encontrando o R-Quadrado

**Resposta:** R² = **0,973**

**Interpretação:** Estamos 97,3% confiantes de que os anos de experiência estão relacionados ao salário dos funcionários. O modelo explica 97,3% da variação no salário.

{{% notice tip %}}
**Para professores:** O valor de R² varia de 0 a 1. Valores acima de 0,9 indicam uma relação muito forte. Se os alunos obtiverem um R² menor, peça para verificarem o tamanho da amostra. Incentive os alunos a alterar a variável `sample_size` e observar como o R² muda.
{{% /notice %}}

## Seção 5: Fazendo Previsões

### Conceito Principal: Divisão Treinamento/Teste

- **Conjunto de treinamento:** 70% dos dados (usados para construir o modelo)
- **Conjunto de teste:** 30% dos dados (usados para verificar o modelo)
- Os valores de R² de ambos devem ser semelhantes (se o R² de teste for muito menor, o modelo está sobreajustado)

### Exercício 1: Fazendo Previsões

```python
# O código no Replit cria conjuntos de treinamento/teste
# e gera linhas de previsão para ambos
# Verificação principal: R² de treinamento ≈ R² de teste
```

### Exercício 2: Previsões Personalizadas

Os alunos alteram a variável `experience` para prever o salário para qualquer número de anos de experiência:

| Anos de Experiência | Salário Previsto (aprox.) |
|--------------------|-----------------------------|
| 0 | $25.792 |
| 5 | $73.042 |
| 10 | $120.292 |
| 15 | $167.542 |
| 20 | $214.792 |

**Fórmula usada:** Salário = 9.449,96 × Experiência + 25.792,20

{{% notice tip %}}
**Pergunta comum dos alunos:** "Por que minha previsão não corresponde exatamente à tabela?"

Os coeficientes e interceptos exatos dependem de qual amostra aleatória foi selecionada. Os valores acima usam os valores de referência do workshop (inclinação = 9.449,96, intercepto = 25.792,20). Seus valores específicos serão ligeiramente diferentes, mas devem produzir previsões semelhantes.
{{% /notice %}}

## Referência Rápida

| Conceito | Valor | Significado |
|---------|-------|-------------|
| Inclinação (a) | 9.449,96 | Aumento no salário por ano de experiência |
| Intercept