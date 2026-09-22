```markdown
---
title: "Activité 7 - Entrée ligne"
date: 2019-07-25T13:24:17-07:00
weight: 8
draft: false
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/xLAq5HggT6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

Félicitations !

Vous êtes très proche de sauver complètement la nation. Tout ce qu'il reste à faire est de pouvoir entrer une phrase complète ! Pour cela, nous avons seulement besoin d'apporter quelques petites modifications. Tout d'abord, vous devez utiliser l'instruction pour entrer la `string:getline()`.
```
string phrase;
getline(cin, phrase);
```
De cette manière, la console pourra accepter un message complet, et non simplement un seul mot.

Suivez ces étapes, et complétez le programme pour sauver le royaume :

1. Dans la fonction `main`, remplacez l'instruction `cin >> name;` par `getline(cin, name);`.
2. Dans les deux fonctions, ajoutez une condition `if` dans la boucle `for` et exécutez le contenu de la boucle `for` uniquement si le caractère actuel est supérieur ou égal '>=' au caractère 'a' et inférieur ou égal '<=' au caractère 'z'. De cette manière, nous pouvons ignorer le chiffrement et le déchiffrement des points d'exclamation, des virgules, des espaces et autres caractères spéciaux.

N'oubliez pas comment ce programme fonctionne :
1. Tout d'abord, le programme demande le nom de l'utilisateur.
2. Ensuite, nous devons décider si le message doit être chiffré ou déchiffré en tapant `1` (pour le chiffrement) ou `2` (pour le déchiffrement).
3. Enfin, nous tapons le message à chiffrer ou déchiffrer.

Créez vos propres messages secrets ou déchiffrez ceux de vos camarades !

{{< alert theme="warning" >}} **Attention :** dans ce programme, nous devons toujours écrire les chaînes de caractères et les caractères en **lettres minuscules**. {{< /alert >}}

Rappelez-vous que vous pouvez toujours revenir aux activités précédentes pour revoir quoi que ce soit !

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-7-english" target="_blank">Lancer Replit</a>
```