```yaml
---
title: "Mise à jour du progrès 1"
date: 2020-09-09T16:19:17-07:00
prereq: "Bases de Python : Fonctions - Fonctions intégrées, Fonctions des bibliothèques ; Types de données - Chaînes, Nombres, Lecture depuis la console ; Structures de données - Listes"
difficulties: ["intermédiaire"]
weight: 4
draft: false
---
```

## Comparez votre code

Avant de continuer, veuillez vérifier votre notebook Google Colab avec le code ci-dessous :

```python
# Importation des bibliothèques TensorFlow et tf.keras
import tensorflow as tf
from tensorflow import keras 


# Bibliothèques auxiliaires pour les statistiques et les graphiques
import numpy as np
import matplotlib.pyplot as plt 
```

```python
# Cette variable est déclarée à partir de la bibliothèque fashion_mist de la section des ensembles de données
fashion_mnist = keras.datasets.fashion_mnist 
```

```python
# Cela charge quatre variables du jeu de données. 
# Les train_images et train_labels sont des données que le modèle utilise pour apprendre
# Les test_images et test_labels sont utilisées par le modèle pour comparer.
(train_images, train_labels), (test_images, test_labels) = fashion_mnist.load_data()
```

```python
class_names = ['T-shirt/haut', 'Pantalon', 'Pull', 'Robe', 'Manteau', 'Sandale', 'Chemise', 'Baskets', 'Sac', 'Botte basse']
```

```python
plt.figure()
plt.imshow(train_images[0]) # Montre la première image du jeu de données sous forme de graphique ou de pixels colorés
plt.colorbar() # Affiche la barre de couleur sur la droite
plt.grid(False)
plt.show() # Affiche l'ensemble du graphique
```

![Botte basse](../media/a2q1.png "Botte pixellisée avec barre de couleurs")

```python
plt.figure()
plt.imshow(train_images[7]) # Montre la septième image du jeu de données sous forme de graphique ou de pixels colorés
plt.colorbar() # Affiche la barre de couleur sur la droite
plt.grid(False)
plt.show() # Affiche l'ensemble du graphique
```

![Chemise](../media/a2progress2.png "Chemise pixellisée avec barre de couleurs")

```python
# Les train_images et test_images ont des valeurs comprises entre 0 et 255. 
# Pour maintenir une cohérence entre les ensembles d'entraînement et de test, nous divisons train_images et test_images par 255
train_images = train_images / 255.0 
test_images = test_images / 255.0
```

{{% notice info %}}

Si vous souhaitez tester le code ci-dessus, visitez <a href="https://colab.research.google.com/drive/1ndj0W1P_3uAG-L2a6LwxdJPSHbSK5WE6?usp=sharing" target="_blank">ce lien</a>

Pour éditer ce code, cliquez sur le bouton 'Copy to Drive' pour créer une copie personnelle de ce notebook. Assurez-vous d'être connecté à votre compte Google.
![Capture d'écran du notebook Google Colab avec le bouton "Copy to Drive" surligné](../media/colab_copy.png "Capture d'écran du notebook Google Colab")

{{% notice warning %}}
### Si vous utilisez un compte Google Nuevo temporairement
Une fois votre copie effectuée, veuillez remplacer "Copy of" par votre nom dans le nom du fichier. Cela se situe en haut à gauche de votre notebook.
{{% /notice%}}

{{% /notice %}}