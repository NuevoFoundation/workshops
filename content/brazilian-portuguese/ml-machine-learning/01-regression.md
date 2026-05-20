---
title: "O que é regressão?"
description: "Fazer computadores aprenderem a prever resultados."
prereq: "Python"
icon: ""
draft: false
weight: 1
---

# O que é regressão?
Regressão é uma técnica para modelar a relação entre uma característica (**variáveis independentes**) e uma previsão (**variáveis dependentes**).  
Ela nos ajuda a entender como o valor de uma variável dependente muda com base no valor da variável independente.  
Quando aplicada corretamente, ela nos ajuda a prever valores 😯!

|![Regressão](../resources/regression.png)|
|:--:|
|Regressão|

A regressão é uma técnica poderosa que nos permite encontrar uma linha ou curva que se ajusta aos dados que temos.  
Ao fazer regressão, podemos criar ou reutilizar `modelos matemáticos` que mostram como as variáveis dependentes e independentes estão relacionadas.  
[Modelos matemáticos](https://www.youtube.com/watch?v=xHtsuOB-TPw) são úteis porque ajudam a entender um sistema e fazer previsões com base nas variáveis desse sistema.  
Às vezes, o modelo escolhido pode não se ajustar bem aos dados, então precisamos buscar um modelo melhor que capture os padrões observados.

---

## Exemplo 1: Como sabemos se vai chover?
Sempre que você usa o celular, assiste à previsão do tempo ou pesquisa na internet "Qual a chance de chover hoje?", modelos matemáticos são usados por meteorologistas para prever a possibilidade de chuva.  
Você pode se perguntar: **Quais `variáveis` são consideradas nesses modelos? Será que só o cheiro de chuva é suficiente?**

{{% expand "**Quais variáveis considerar para saber se vai chover?**" %}}

- **Temperatura** → Está quente, frio ou agradável?
- **Altitude** → Locais mais altos tendem a ser mais frios.
- **Localização** → Onde você está importa (ex.: floresta, praia, montanha, deserto).
- **Umidade** → O ar está pesado? Há água suficiente no ar para formar chuva?
- **Época do ano** → Em que mês ou estação estamos?
- E muitas outras!

No final, a **chance de chuva** é a variável dependente, enquanto as variáveis listadas acima são as independentes.

{{% /expand %}}

---

### Exercício 1
Imagine que alguém quer saber o tipo de figura apenas com base na área.

1. É possível saber a forma apenas com a área?  
{{% expand "**Clique para ver a resposta**" %}}  
***Não***, pois não existe relação direta entre a **área** e o tipo de figura.

Exemplo:  
Um quadrado de lado 3 tem área igual a 9.

\[
    3 \cdot 3 = 9
\]

Mas um triângulo com base 6 e altura 3 também tem área igual a 9.

\[
    (6 \cdot 3) / 2 = 9
\]

{{% /expand %}}
<br>

2. Qual relação podemos usar para identificar a forma?  
{{% expand "**Clique para ver a resposta**" %}}  

***O número de lados!*** Conforme o número de lados aumenta, podemos identificar o tipo da figura.

- **X** → número de lados (variável independente)
- **Y** → tipo da figura (variável dependente)

Você acabou de criar seu primeiro modelo de machine learning! 🎉

{{% /expand %}}
<br>

Um **modelo**, nesse caso, é uma função que estabelece a relação entre as variáveis dependentes e independentes.  
Exemplos de modelos: linha reta (y = ax + b), parábola (y = a(x - h)^2), curva cúbica (y = ax^3 + bx^2 + cx + d).

---

### Como garantir que o modelo se ajusta aos dados?
Ao usar um modelo de machine learning, precisamos garantir que ele **representa bem** os dados.

Exemplo: imagine que os pontos dos dados formam uma parábola. Nesse caso, um modelo parabólico como:

\[
    y = a(x - h)^2
\]

provavelmente funcionará melhor.

Se não ajustarmos corretamente:
- **Under-fitting** → o modelo não consegue capturar a relação entre os dados (pouca informação ou ajuste ruim).
- **Over-fitting** → o modelo tenta encaixar todos os pontos, incluindo valores **outliers** que não representam a realidade.

|![Exemplo de ajuste de dados](../resources/fitting-data-example.png)|
|:--:|
|Imagem 1: Under-Fitting e Over-Fitting|
