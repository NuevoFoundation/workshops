---
title: "Étape 3 : Charger le dataset"
description: "Bases de l'apprentissage automatique"
prereq: "aucun"
difficulties: ["intermédiaire"]
draft: false
weight: 3
---

Modifiez `mypath` pour indiquer le dossier où vous avez extrait le fichier dataset (par exemple, `C:\fifa_dataset\`). Pour vérifier que nous l'avons chargé avec succès, nous utilisons une fonction appelée `describe()` pour imprimer ses statistiques.

```python
# Charger les datasets
mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # modifiez-le avec votre propre chemin
fifa_data = pd.read_csv(mypath+"data.csv")
fifa_data.describe()
```

    ---------------------------------------------------------------------------

    NameError                                 Traceback (most recent call last)

    <ipython-input-3-f099c0f24a52> in <module>()
          1 # Charger les datasets
          2 mypath = "C:/Users/ruilliu/Documents/nuevo_lr_fifa/" # modifiez-le avec votre propre chemin
    ----> 3 fifa_data = pd.read_csv(mypath+"data.csv")
          4 fifa_data.describe()
    

    NameError: name 'pd' is not defined