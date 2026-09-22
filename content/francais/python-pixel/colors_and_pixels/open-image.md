---
title: "Ouvrir une image"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 2
--- 

Pour modifier une image, nous devons d'abord ouvrir une image. Nous pouvons utiliser le module `Pillow Image` que nous venons d'importer dans la configuration.
Commençons par trouver des images à ouvrir. Trouvez une image de votre choix et téléchargez-la. Une fois téléchargée, revenez à votre fenêtre Replit et téléchargez votre image en cliquant sur les trois points et en sélectionnant « télécharger un fichier ».

Par exemple, pour télécharger le fichier cat.jpg :

<img src="../../media/upload_file.png" alt="Image montrant comment télécharger un fichier" width="60%">

Vous devriez voir le fichier JPG sur le côté gauche une fois qu'il est téléchargé. Notez que votre image peut avoir une extension différente.

L'étape suivante consiste à ouvrir cette image dans le code. Il existe des fonctions dans le module `Pillow Image` que nous avons importé qui nous permettent de faire cela.

Pour ouvrir et afficher l'image que vous avez téléchargée, faites ce qui suit :

```python
    image = Image.open("cat.jpg")
    image.save("myCat.jpg")
```

Si vous utilisez une image différente, assurez-vous de mettre le nom du fichier entre les guillemets. Le code ci-dessus ouvre l'image JPG et stocke cette image dans la variable image. Pour vérifier que la variable image contient bien l'image, nous pouvons ensuite l'enregistrer sous une nouvelle image. De cette façon, l'image apparaîtra dans la fenêtre.

Appuyez sur Exécuter et voyez votre image s'afficher ! Mon image ressemble à ceci :

<img src="../../media/cat.png" alt="Exemple d'image d'un chat" width="50%">