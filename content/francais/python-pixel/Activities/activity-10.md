---
title: "Activité 10 : Créer un mème !"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 10
prereq: "Bases de Python, Pixels en Python : Couleurs et Pixels, Manipulation d'image en Python : Ouvrir une image"
difficulties: ["intermédiaire"]
---

Une autre chose que nous pouvons faire pour améliorer notre image est d’ajouter du texte. Nous pouvons le faire en utilisant le module `Pillow ImageDraw`. Importons-le en haut de notre fichier avec nos autres instructions d'importation.

```python
    from PIL import Image
    from PIL import ImageFilter
    from PIL import ImageDraw
```

Pour permettre l’ajout de texte, nous devons redessiner l’image que nous avons utilisée précédemment. Faisons-le en utilisant la fonction `draw()`, qui prend comme paramètre un objet image. Une fois l’image dessinée, nous pouvons y ajouter du texte en utilisant la méthode `text()` pour définir le texte de l’image. Le texte est dessiné selon des coordonnées fournies. La fonction prend deux paramètres obligatoires : les coordonnées xy et le texte souhaité.

Par exemple :

```python
    drawnImage = ImageDraw.Draw(img)
    drawnImage.text((200,20), "Quand tu réalises que tu as appris Python en une heure.")
    drawnImage.save("myCatWithText.jpg")
```

Mon image ressemble maintenant à ceci :
<img src="../../media/meme.png" alt="chat noir et blanc flou à l'envers avec du texte qui dit 'quand tu réalises que tu as appris Python en une heure.'" width="50%">

### Défi - Changer la police
Vous pouvez voir que le texte dans l’image créée ci-dessus est dans une petite police par défaut. Il existe d’autres paramètres dans la méthode `text()` que vous pouvez utiliser. Regardez la [documentation](https://pillow.readthedocs.io/en/stable/reference/ImageDraw.html#PIL.ImageDraw.PIL.ImageDraw.ImageDraw.text) et essayez de changer la police et la taille de la police, ainsi que la couleur du texte ! 

{{% notice note %}}

Cela nécessitera de télécharger un fichier .ttf (c'est-à-dire un fichier de police) en ligne ! Demandez de l’aide si vous avez des questions.

{{% /notice %}}