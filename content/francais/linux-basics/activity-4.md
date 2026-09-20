```markdown
---
title: "Activité 4 - Pratique de prise de notes"
description: "Utiliser des commandes Linux pour créer un nouveau répertoire"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 7
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/h9qokQeLREI" title="Activité 4 - Pratique de prise de notes - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        En tant qu'ingénieur en cybersécurité, il est important de prendre beaucoup de notes. Celles-ci sont utiles pour comprendre comment une attaque a pu se produire. Améliorons notre espace de travail !
    </div>
</div>

### Que faire si je veux créer un nouveau répertoire ?

Pour vous entraîner à créer un nouveau répertoire, utilisez la commande `mkdir` (qui signifie "Make Directory") au format suivant : `mkdir nouveau_nom_de_répertoire`.

Créons un répertoire appelé `files` en saisissant la commande ci-dessous :

```
mkdir files
```

<!---![ls-l command](../images/04_mkdir.PNG?classes=border,shadow) --->
<img src="../images/04_mkdir.PNG" alt="commande mkdir" style="width:600px;"/>

Comme vous pouvez le voir, désormais, lorsque vous exécutez la commande `ls -l`, un répertoire supplémentaire nommé `files` apparaît.

### Que pouvez-vous faire avec ces fichiers ?

Un exemple de manipulation d'un fichier ou d'un répertoire est de le déplacer vers un autre emplacement. Cela se fait à l'aide de la commande de déplacement `mv`. Pratiquons en déplaçant le répertoire `Music` dans le répertoire `Documents`.

Saisissez la commande suivante :

```
mv Music/ Documents/
```

Maintenant, tapez `ls -l` une fois de plus et regardez le résultat.

![commande ls-l](../images/04_mv_music_dir.png?classes=border,shadow)

Vous devriez voir que le répertoire `Music` n'apparaît plus, car il a été déplacé dans le répertoire `Documents`.

{{% notice tip %}}
Nous pouvons vérifier qu'il a été déplacé dans `Documents` en utilisant la commande `ls` avec un chemin de répertoire ajouté.

```
ls -l Documents/
```

{{% /notice %}}

Pratiquons `mv` une fois de plus en le déplaçant à nouveau.

Essayez ceci :

```
mv Documents/Music/ .
```

Cela déplace le répertoire `Music` du répertoire `Documents` vers notre répertoire actuel, représenté par `.`. Le point est utilisé dans les commandes pour désigner le répertoire actuel. En tapant de nouveau `ls -l`, vous verrez que `Music` est revenu dans ce répertoire.

<img src="../images/../images/03_ls-l.png" height="500" alt="commande ls -l"/>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Bravo, vous savez maintenant comment déplacer des fichiers. Nous utiliserons bientôt ce savoir pour nous remettre d'une attaque.
    </div>
</div>

### Que faire si je veux créer un nouveau fichier ?

Pour créer un fichier, nous pouvons utiliser la commande `touch`. La commande touch crée un fichier vide sans données.

Essayez la commande ci-dessous pour créer un fichier nommé `file1` :

```
touch file1
```

<!---![ls-l command](../images/04_touch.PNG?classes=border,shadow) --->
<img src="../images/04_touch.PNG" alt="commande touch" style="width:600px;"/>

Maintenant, lorsque nous tapons `ls -l`, nous pouvons voir que le fichier a été créé.

### Que faire si je veux ajouter des données au fichier ?

Un fichier vide n'a pas vraiment d'utilité, alors ajoutons quelques données, comme notre nom. Pour ouvrir le fichier en vue de le modifier, nous allons utiliser la commande `vim`. Vim est un éditeur qui nous permet d'ajouter, de supprimer et de modifier les données dans un fichier.

Saisissez la commande ci-dessous pour modifier `file1` :

```
vim file1
```

<!---![ls-l command](../images/04_vim.PNG?classes=border,shadow) --->
<img src="../images/../images/04_vim.PNG" height="500" alt="commande vim"/>


Nous sommes maintenant dans l'éditeur Vim. Appuyez sur `i` pour passer en mode insertion. Tapez `nuvi` et appuyez sur `esc` pour quitter le mode insertion. Enfin, tapez `:wq` et appuyez sur Entrée. Les deux points indiquent à Vim que vous entrez une commande. Les lettres `w` et `q` signifient respectivement écrire les modifications faites et quitter.

{{% notice warning %}}
Pour quitter `vim`, appuyez sur `esc` puis tapez `:wq`. Vous en aurez besoin à chaque fois que vous ouvrez `vim` !
{{% /notice %}}

![commande ls-l](../images/04_vim_after.PNG?classes=border,shadow)

<img src="../images/04_vim_after.PNG" alt="vim après" style="width:600px;"/>

Tapez une fois de plus `ls -l` et vous verrez que `file1` contient maintenant 5 octets de données, au lieu de 0 lorsqu'il était vide.

{{% notice note %}}

Définition : Un <b>octet</b> est une unité de mesure pour les données. Au niveau le plus basique, les ordinateurs utilisent ce que l'on appelle un "bit", qui est une unité unique de données dont la valeur ne peut être que "0