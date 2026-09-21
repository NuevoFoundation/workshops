---
title: "Schritt 3: Dataset laden"
description: "Grundlagen des Machine Learning"
prereq: "none"
difficulties: ["mittel"]
draft: false
weight: 3
---

Ändere `mypath` in den Ordner, in dem du die Dataset-Datei extrahierst (z. B. `C:\fifa_dataset\`). Um sicherzustellen, dass wir es erfolgreich geladen haben, verwenden wir eine Funktion namens `describe()`, um die Statistiken auszugeben.

```python
# Datensätze laden
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # ändere dies in deinen eigenen Pfad
fifa_data = pd.read_csv(mypath+"data.csv")
fifa_data.describe()
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # Datensätze laden
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # ändere dies in deinen eigenen Pfad
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined