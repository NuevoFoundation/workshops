---
title: "Fazendo Previsões"
prereq: "Python"
icon: ""
draft: false
weight: 5
---

# Treinando o Modelo

Para que nosso modelo consiga prever valores, precisamos treiná-lo.  
Mas como fazemos isso? Bem, nós já estamos fazendo isso 😉!

Treinar um modelo significa verificar se existe uma boa relação entre os dados e se o modelo se ajusta bem a eles.

Nós já fizemos isso garantindo que o valor de R<sup>2</sup> esteja próximo de 1.  
O que precisamos fazer agora é usar o conjunto de dados com mais de 10.000 registros para criar um **conjunto de treinamento** e um **conjunto de teste**.  
O conjunto de treinamento será uma amostra aleatória em vez dos 30 registros iniciais que tínhamos.

Segundo a **Universidade do Texas em El Paso**, usar **30% dos dados para teste** é uma forma ideal de criar um modelo preciso.  
Se quiser saber mais, veja aqui:  
([Por que usar a relação 70/30 ou 80/20 entre conjuntos de treinamento e teste](https://scholarworks.utep.edu/cs_techrep/1209/))

À medida que o número de funcionários aumenta, o conjunto de dados também cresce e o valor de R<sup>2</sup> pode mudar.  
Precisamos refazer esse processo sempre que o conjunto de dados de 10.000+ funcionários aumentar, para garantir que nosso modelo continue atualizado.

---

# Fazendo Previsões

No Replit abaixo, você verá como o código cria um **conjunto de treinamento** e um **conjunto de teste** ao dividir os dados do arquivo com mais de 10.000 registros, executando previsões para ambos os conjuntos.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e1.py" target="_blank">Executar no Replit</a>

Como você pode observar, a linha de previsão gerada em ambos os gráficos é muito semelhante, tanto para o conjunto de treinamento quanto para o de teste.  
Também é possível ver que o valor de R<sup>2</sup> para ambos os conjuntos é quase idêntico — ou até idêntico em alguns casos.

Agora você pode usar o código abaixo e alterar a variável `experience` para o valor que quiser.  
O gráfico mostrará o **salário previsto** com base na experiência inserida.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/LinearRegression-ConsoleApp#src/05-e2.py" target="_blank">Executar no Replit</a>
