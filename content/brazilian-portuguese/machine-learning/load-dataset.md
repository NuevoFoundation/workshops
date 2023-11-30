---
title: "Etapa 3: carregar conjunto de dados"
description: "Fundamentos de Aprendizado de máquina"
prereq: "Nenhum"
difficulty: "Intermediário"
draft: false
weight: 3
---

Mude `mypath` para a pasta onde você extrai o arquivo do conjunto de dados (ou seja, `C:\fifa_dataset\`). Para verificar se o carregamos com sucesso, usamos uma função chamada `describe()` para imprimir suas estatísticas.


```python
# carrega conjuntos de dados
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # mude para o seu próprio caminho
fifa_data = pd.read_csv(mypath+"data.csv")
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