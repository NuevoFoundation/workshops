---
title: "Importer un module d'image"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 1
--- 

### Configuration du projet

Pour faire des choses amusantes avec les images, nous devons débloquer certaines fonctions utiles. Pour obtenir ces fonctions, nous devons importer un module. Dans ce cas, si nous importons le module <b>Pillow</b>, nous pouvons utiliser certaines fonctions qui nous aideront à modifier les images.

Tout d'abord, supprimons tout ce qu'il y a dans le fichier main.py. Ensuite, ajoutez les instructions suivantes :

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
</pre>

Une fois que vous exécutez le code, vous devriez voir le module en cours d'installation dans la console :

<img src="../../media/installed_module.png" alt="Image de ce que vous devriez voir lorsque vous installez le module avec succès" width="60%">

Si vous voyez ce qui précède, cela signifie que vous avez réussi à importer un module ! Si vous rencontrez des problèmes, veuillez demander de l'aide avant de continuer.

{{% notice note %}}

Si vous êtes curieux de voir quelles fonctions sont disponibles dans le module d'image Pillow, vous pouvez trouver des informations à ce sujet ici : https://pillow.readthedocs.io/en/latest/handbook/index.html

{{% /notice %}}