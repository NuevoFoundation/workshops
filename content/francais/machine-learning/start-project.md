---
title: "Étape 2 : Commencez le projet"
description: "Bases de l'apprentissage automatique"
prereq: "aucun"
difficulties: ["intermédiaire"]
draft: false
weight: 2
---

Ouvrez Jupyter Notebook, nouveau notebook > python 3

Au début du fichier, importons quelques packages nécessaires.

```python
# Importation des packages nécessaires
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
```

    ---------------------------------------------------------------------------

    ImportError                               Traceback (most recent call last)

    <ipython-input-2-122d997e4faf> in <module>()
          1 # Importation des packages nécessaires
    ----> 2 import pandas as pd
          3 import numpy as np
          4 import matplotlib.pyplot as plt
          5 from sklearn.linear_model import LinearRegression
    

    ImportError: Aucun module nommé pandas