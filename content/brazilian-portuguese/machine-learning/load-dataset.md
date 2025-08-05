---
title: "Etapa 3: Carregar o conjunto de dados"
description: "Conceitos básicos de Machine Learning"
prereq: "nenhum"
difficulty: "Intermediário"
draft: false
weight: 3
---

Altere o valor da variável `mypath` para o caminho da pasta onde você extraiu o arquivo do conjunto de dados (por exemplo: `C:\fifa_dataset\`).  
Para verificar se o carregamento foi bem-sucedido, usamos uma função chamada `describe()` para mostrar as estatísticas.

```python
# carregar o conjunto de dados
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/"  # altere para o seu caminho
fifa_data = pd.read_csv(mypath + "data.csv")
fifa_data.describe()
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # load datasets
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # change it to your own path
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined