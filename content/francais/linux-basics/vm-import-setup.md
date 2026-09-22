```markdown
---
title: "Utilisation des Machines Virtuelles Partie 2"
description: "Suite du guide d'introduction à l'utilisation des machines virtuelles"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 2
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ffcyyJXEhwY" title="Using Virtual Machines Part 2 - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Excellent travail pour préparer l'environnement hôte ! Maintenant, chargeons l'image de l'ordinateur piraté comme une VM.
    </div>
</div>

## Qu'est-ce qu'une image ?

Les `images` existent sous différentes formes. Nous avons des photographies, qui sont des images. Les images informatiques sont très similaires. Ce sont des copies de choses prises à un moment précis. Nous allons travailler avec une copie d'un ordinateur qui se comporte de manière étrange. Mais ne vous inquiétez pas, cela ne nuira pas à votre ordinateur ! Rappelez-vous que le système d'exploitation sera dans un `sandbox`, ce qui signifie qu'il ne pourra pas affecter votre machine.

## Configuration de Kali Linux

### Télécharger l'image

Les `images OS` permettent de transmettre facilement des copies exactes d'ordinateurs.  
VirtualBox utilise l'extension de fichier `.ova` pour ses images de machine. Ce fonctionnement est similaire au fait de sauvegarder des documents avec l'extension `.docx` et des photographies en `.png`.

Téléchargeons notre copie de l'ordinateur ! Cliquez sur le lien ci-dessous pour la télécharger.  
La plupart des images de system OS sont volumineuses (~8 Go), mais la nôtre fait seulement ~3 Go. Le téléchargement peut tout de même prendre quelques minutes.

<a class="my-2 mx-4 btn btn-info" href="https://nuevofoundation-my.sharepoint.com/:f:/g/personal/beatris_mendezgandica_nuevofoundation_org/EqwR5wQyp9xEpYoP524regQB6rnwgyJBMULhuGIzyMj_4w?e=yg6rFv" target="_blank">
Lien de téléchargement
</a>

### Importer la machine virtuelle

Maintenant que vous avez téléchargé l'image de la machine, il est temps de l'installer !

#### Étape 1

Dans l'application VirtualBox, nous pouvons _importer_ nos images. Cliquez sur le bouton "Importer" pour commencer !

![bouton d'importation VirtualBox](../images/import-01.PNG?classes=border,shadow)

#### Étape 2

L'application que nous souhaitons importer sera le fichier `.ova` que vous avez téléchargé précédemment. Cliquez sur le petit dossier avec le symbole caret vert. Cela ouvrira une fenêtre pour rechercher et sélectionner le fichier `.ova`.

![écran d'importation VirtualBox](../images/import-02.PNG?classes=border,shadow)

#### Étape 3

Maintenant que vous avez sélectionné le fichier image .ova, cliquez sur "Ouvrir". Ensuite, cliquez sur "Suivant" dans l'écran "Appliance à importer".

![écran d'importation VirtualBox](../images/import-03.PNG?classes=border,shadow)

#### Étape 4

La dernière étape ! Dans le champ "Nom", vous pouvez donner un nouveau nom à votre VM. C'est votre propre machine virtuelle ! Assurez-vous que l'option "Contrôleur USB" n'est **pas** sélectionnée. Pensez à la désactiver. Ensuite, pour la politique d'adresse MAC, il est préférable de sélectionner "Générer de nouvelles adresses MAC pour tous les adaptateurs réseau". Enfin, cliquez sur "Importer" !

![écran d'importation VirtualBox](../images/import-05.PNG?classes=border,shadow)

**Remarque :** une fenêtre contextuelle affichera le temps nécessaire à l'importation.  
En général, cela dure environ 5 minutes, mais cela pourrait être un peu plus long selon votre configuration.

![écran d'importation VirtualBox](../images/import-06.JPG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Maintenant, nous pouvons lancer la machine infectée et commencer nos investigations !
    </div>
</div>
```