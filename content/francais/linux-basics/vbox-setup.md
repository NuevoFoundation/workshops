```markdown
---
title: "Utiliser des Machines Virtuelles Partie 1"
description: "Un guide introductif sur l'utilisation des machines virtuelles"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 1
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zoutwedSLKI" title="Utiliser des Machines Virtuelles Partie 1 - vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Nous vous fournissons une copie de l'ordinateur piraté sous forme de machine virtuelle pour que vous puissiez nous aider.
    </div>
</div>

{{% notice info %}}

### Qu'est-ce qu'une machine virtuelle ?

Une **machine virtuelle** (souvent appelée VM) est un fichier informatique (appelé une `image`) qui se comporte comme un ordinateur réel.  
En d'autres termes, c'est un ordinateur à l'intérieur d'un ordinateur. Il fonctionne dans une fenêtre, comme n'importe quel autre programme.  
Cela offre la même expérience sur une machine virtuelle que sur un ordinateur classique.

La VM est `isolée` du reste du système, ce qui signifie que les logiciels à l'intérieur d'une VM ne peuvent pas affecter l'ordinateur lui-même.  
Cela crée un environnement idéal pour tester d'autres systèmes d'exploitation, accéder à des données infectées par des virus, et développer de nouveaux logiciels ou applications.
{{% /notice %}}

## Qu'est-ce que VirtualBox ?

VirtualBox est un logiciel de virtualisation, également appelé `hyperviseur`. Il permet à votre ordinateur d'héberger des machines virtuelles.

## Télécharger VirtualBox

Vous pouvez télécharger VirtualBox en utilisant ce lien :

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://www.virtualbox.org/wiki/Downloads">
Lien de téléchargement
</a>

Si vous utilisez Windows : Sélectionnez "Windows hosts"  
Si vous utilisez macOS : Sélectionnez "OS X hosts"  
Si vous utilisez quelque chose d'autre, nous vous recommandons d'utiliser Windows ou macOS pour cet atelier. Tout autre système est hors du cadre de cet atelier.

![page de téléchargement de VirtualBox](../images/vbox-dlpage-update.PNG?classes=border,shadow)

Ensuite, lancez le programme d'installation que vous venez de télécharger.

Les options par défaut seront suffisantes pour aujourd'hui ! Continuez à cliquer sur "Next" lors de l'installation.

Veuillez noter qu'il y a des sélections d'options sur la troisième page.
![options d'installation de VirtualBox](../images/vbox-install-03.PNG?classes=border,shadow)

Si vous voyez cet avertissement, ne vous inquiétez pas, cela est prévu.
![avertissement réseau de VirtualBox](../images/vbox-install-04.PNG?classes=border,shadow)

Une fois que vous arrivez à cette page, cliquez sur "Install" pour terminer l'installation.
![installation de VirtualBox](../images/vbox-install-05.PNG?classes=border,shadow)

Enfin, cochez la case pour lancer VirtualBox après la fin de l'installation.
![lancer VirtualBox après l'installation](../images/vbox-install-06.PNG?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Oui ! Nous avons terminé l'installation de VirtualBox. Nous sommes prêts à commencer à l'utiliser maintenant.
    </div>
</div>
```