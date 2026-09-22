---
title: "Activité 3 - Explorer le Répertoire Actuel"
description: "Utiliser les commandes Linux pour afficher le contenu du répertoire actuel"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 6
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dSsed9cR9QI" title="Activity 3 - Explore Current Directory - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Comment explorer le répertoire ?

Pour voir les fichiers dans le répertoire actuel, nous utilisons la commande `ls`. Cela signifie "Lister".

Essayez :

```
ls
```

![commande ls](../images/03_ls-command.png?classes=border,shadow)

### Comment obtenir plus d'informations sur les fichiers dans ce répertoire ?

Essayez :

```
ls -l
```
<img src="../images/../images/03_ls-l.png" height="500" alt="commande ls -l"/>

L'option `-l` dans la commande ci-dessus indique à `ls` d'afficher des informations détaillées en format long.

## Quelles informations sont affichées ?

Examinons la première ligne de l'exemple ci-dessus de gauche à droite, pour le répertoire `Videos` :

![commande ls -l expliquée](../images/03_ls-l-numbers.png?classes=border,shadow)

1. <span style="color:green">vert</span> : les permissions du fichier. Le premier caractère `d` indique que **Videos** est un répertoire. S'il s'agissait d'un `-`, cela signifierait que **Videos** est un fichier.
2. <span style="color:red">rouge</span> : le nombre de **liens** pour ce fichier. Le répertoire **Videos** possède 2 _liens_.
3. <span style="color:purple">violet</span> : l'utilisateur propriétaire de ce fichier. L'utilisateur `nuvi` est le propriétaire du répertoire **Videos**.
4. <span style="color:white;background-color:#232b36">blanc</span> : le groupe auquel appartient ce fichier. Ici, le répertoire **Videos** appartient au groupe `nuvi`.
5. <span style="color:#ffc000">jaune</span> : la taille du fichier en **octets**. La taille du répertoire **Videos** est de 4096 octets.
6. <span style="color:#ed7d31">orange</span> : la date et l'heure de création du fichier.
7. <span style="color:#2e75b6">bleu</span> : le nom du répertoire.