---
title: "Activité 5 - Sécuriser les permissions des utilisateurs"
description: "Utilisez une commande Linux pour sécuriser vos fichiers"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/D5Y6LH0mBi0" title="Activité 5 - Sécuriser les permissions des utilisateurs - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Oh non. Certains de nos fichiers ont peut-être été modifiés ! Sécurisons nos notes, file1. Nous ne voulons pas qu'un hacker modifie ces fichiers !
    </div>
</div>

### Comment limitons-nous l'accès à nos fichiers ?

En donnant aux utilisateurs des "permissions" sur les fichiers !

Les permissions permettent à l'ordinateur de déterminer qui a accès aux fichiers et ce qu'ils peuvent en faire.

Sous Linux, il existe trois types d'accès communs qu'un utilisateur peut demander à un fichier : "lecture", "écriture" ou "exécution".

{{% notice note %}}

L'accès "Lecture" signifie qu'un utilisateur peut ouvrir et lire un fichier. L'accès "Lecture" est souvent désigné par le symbole `r`.

L'accès "Écriture" signifie qu'un utilisateur peut ouvrir et écrire dans un fichier. Cela inclut le renommage et le déplacement d'un fichier vers un autre emplacement dans le système de fichiers. L'accès "Écriture" est souvent désigné par le symbole `w`.

L'accès "Exécution" signifie qu'un utilisateur peut tenter d'exécuter le fichier comme un programme. L'accès "Exécution" est souvent désigné par le symbole `x`.

{{% /notice %}}

### Mais comment savoir si nos fichiers sont sécurisés ?

Y a-t-il une commande que nous avons apprise jusqu'à présent qui pourrait nous montrer à quel point nos fichiers sont sécurisés ?  
N'hésitez pas à revenir en arrière si nécessaire !

![Commande ls -l](../images/Act5.1.png?classes=border,shadow)

Nous devrions continuer à utiliser cette commande pour vérifier si nous avons modifié les permissions comme prévu.

---

### Comment sécurisons-nous alors les fichiers grâce aux permissions ?

```
chmod u=rwx g=rx o=x file1
```

`chmod` est une commande utilisée pour modifier les permissions de vos fichiers (cela signifie "Change Mode") pour les 3 groupes d'utilisateurs différents suivants :

- l'<b>u</b>tilisateur et propriétaire du fichier
- le <b>g</b>roupe et les membres du groupe de personnes ayant accès au fichier
- les <b>a</b>utres ou tous ceux qui ne font pas partie des deux groupes ci-dessus

Ces groupes peuvent être modifiés pour avoir les permissions suivantes :

- <b>l</b>ecture
- <b>é</b>criture
- e<b>x</b>écution.

---

### Essayez par vous-même !

Maintenant, essayons de changer les permissions de nos fichiers. Nous voulons empêcher tous ceux en dehors de notre groupe et nous-mêmes d'accéder à `file1`. Comment ferions-nous cela ?

![Commande chmod](../images/Act5.2.png?classes=border,shadow)

#### Fait Amusant : Raccourci !

`chmod` peut également être utilisé avec des commandes numériques simples. Ces commandes s'écrivent comme suit :

```
chmod 751 [insérer le nom du fichier]
```

Ces valeurs peuvent être comprises comme donnant aux utilisateurs la permission de lire, écrire et exécuter.  
Quelles permissions donnent les deux autres valeurs ?

| Numéro |        Signification         |
| :----: | :--------------------------: |
|   7    | lecture + écriture + exécution |
|   6    |      lecture + écriture      |
|   5    |     lecture + exécution      |
|   4    |          lecture             |
|   3    |    exécution + écriture      |
|   2    |         écriture             |
|   1    |        exécution             |
|   0    |     aucune permission        |
