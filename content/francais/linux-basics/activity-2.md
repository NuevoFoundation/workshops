---
title: "Activité 2 - Déterminer la localisation de l'utilisateur"
description: "Utiliser une commande Linux pour déterminer dans quel répertoire vous vous trouvez actuellement"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/v1XLyLuQQyA" title="Activity 2 - Determine User Location - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Avant de pouvoir stopper les hackers, nous devons apprendre à naviguer dans le système de fichiers Linux.
    </div>
</div>

## Qu'est-ce qu'un système de fichiers ?

Un système de fichiers est une collection structurée de fichiers et de données sur un disque ou un lecteur d'ordinateur. Le niveau le plus haut d'un système de fichiers est appelé "racine". Vous pouvez le considérer comme le début du système de fichiers.

{{% notice tip %}}
Fait amusant : les systèmes de fichiers sont souvent décrits comme un "arbre". Cela s'explique par le fait que le système de fichiers ressemble à un arbre inversé, chaque dossier étant une branche ou une feuille. Par exemple, votre système de fichiers peut ressembler à l'image ci-dessous.

<img src="../images/filesystem-tree.png" height="500" alt="Image d'un arbre de système de fichiers"/>

{{% /notice %}}

Sur un ordinateur Windows, vous pouvez parcourir le système de fichiers du lecteur "C:\" en utilisant "Explorateur de fichiers", comme illustré ci-dessous :

![Image de l'explorateur de fichiers Windows](../images/filesystem-windows.png?classes=border,shadow)

Sur un Mac, vous pouvez parcourir le système de fichiers de la maison dans "Finder", comme illustré ci-dessous :

![Image du Finder Mac](../images/home-folder-mac.jpg?classes=border,shadow)

## Où vous trouvez-vous dans le système de fichiers ?

Nous voulons savoir quel est notre "répertoire de travail actuel". C'est l'emplacement où vous vous trouvez actuellement dans le système de fichiers.

La commande Linux `pwd` affichera votre emplacement actuel. Cela signifie "Print Working Directory" (Imprimer le répertoire de travail). Essayez !

```
pwd
```

<!---!![Commande pwd](../images/02_pwd.png?classes=border,shadow) --->
<img src="../images/02_pwd.png" alt="Commande pwd" style="width:700px;"/>

Le résultat ci-dessus est `/home/nuvi`, et sa signification est expliquée ci-dessous :

- `/` : C'est le symbole pour le répertoire racine de ce système de fichiers.
- `/home` : C'est le chemin du répertoire home, qui se trouve dans le répertoire racine.
- `/home/nuvi` : C'est le chemin vers le répertoire nuvi, qui se trouve dans le répertoire home. Le résultat s'arrête ici, ce qui signifie que `/home/nuvi` est le répertoire de travail actuel où nous nous trouvons.
- Ce processus d'exploration du système de fichiers dans chaque dossier peut continuer pour beaucoup plus d'étapes dans certains cas.
- Le chemin affiché et décrit ci-dessus est appelé le <b>chemin absolu</b>, car c'est le chemin donné du répertoire actuel jusqu'au répertoire racine.

## Comment se déplacer dans le système de fichiers ?

Pour se rendre dans un autre répertoire, utilisez la commande `cd`. Cela signifie "Changer de répertoire" (Change Directory). Le format de cette commande est `cd [nom du répertoire]`.

<!---![Commande cd](../images/02_cd.PNG?classes=border,shadow) --->
<img src="../images/02_cd.PNG" alt="Commande cd" style="width:700px;"/>

Dans le résultat ci-dessus, vous pouvez voir que lorsque nous tapons à nouveau `pwd`, le répertoire de travail dans lequel nous nous trouvons est maintenant "Desktop". Essayez `cd ..`.

Essayez un autre exemple de `cd` ci-dessous :

```
cd ..
```

<!-- ![Commande cd](../images/02_cdDotDot.PNG?classes=border,shadow) -->
<img src="../images/02_cdDotDot.PNG" alt="Commande cd" style="width:700px;"/>

Le `..` après la commande cd vous remonte d'un niveau dans l'arborescence du système de fichiers. Le résultat de `pwd` montre maintenant que nous sommes revenus à notre emplacement initial. Nous avons commencé dans le répertoire nuvi, descendu dans l'arborescence vers `Desktop` avec `cd Desktop`, puis remonté dans l'arborescence avec `cd ..`.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Super ! Ensuite, nous verrons comment explorer les répertoires eux-mêmes.
    </div>
</div>