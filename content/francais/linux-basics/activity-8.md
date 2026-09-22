---
title: "Activité 8 - Qu'est-ce qui est différent ?"
description: "Utilisez les commandes Linux pour comparer les fichiers"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 11
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/fAI1kyAoVTA" title="Activité 8 - Qu&#x27;est-ce qui est différent ? - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Regardons le message secret pour nous assurer que ce fichier étrange `malware.sh` n'a rien modifié !
    </div>
</div>

## Différences

Connaissons-nous une commande qui pourrait nous aider à trouver l'emplacement du fichier `secret-message.txt` ?

![commande find](../images/Act8.1.png?classes=border,shadow)

Déplaçons-nous dans ce répertoire et vérifions la citation "Do. Or do not. There is no try." de tout à l’heure. Vous souvenez-vous de la commande qui peut nous aider à vérifier ?

![commande grep](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Ce fichier contient généralement de bonnes citations amusantes, mais il semble y avoir beaucoup de changements. Devons-nous le comparer à une version correcte connue ?
    </div>
</div>

Voyons s'il pourrait y avoir des sauvegardes du message secret dans son répertoire. Allez dans le répertoire Documents et essayez :

```
ls -la
```

{{% notice tip %}}
L'option `-a` affiche toutes les entrées, y compris les fichiers cachés.
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Avez-vous trouvé de nouveaux fichiers ? Prenez des notes sur les modifications !
    </div>
</div>

## Comparez le fichier secret-message.txt avec le fichier de sauvegarde

`diff` est une commande utilisée pour comparer deux fichiers afin de voir ce qui a été ajouté, modifié et supprimé dans le fichier.  
Le format est : `diff [nom_du_fichier] [nom_du_fichier_de_comparaison]`

{{% notice info %}}
Fait amusant : Lancer `diff --help` affichera des informations sur l'utilisation de l'outil `diff`, incluant les options qui peuvent être utilisées avec l'outil.
{{% /notice %}}

Vérifiez les différences entre les deux fichiers. Combien de différences avez-vous trouvées ? Notez-les dans le fichier que vous avez créé !

{{% notice tip %}}

### Une meilleure façon de voir les différences

`vimdiff` est une commande qui ouvre une fenêtre avec les fichiers dans des onglets séparés, en surlignant les différences.

Essayez `vimdiff` pour mieux visualiser les différences entre les fichiers.
{{% /notice %}}