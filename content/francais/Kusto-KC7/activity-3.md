---
title: "Activité 3 : Introduction au Langage de Requête Kusto (KQL)"
draft: false
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/lAeRxuUN1IM" title="Activity 3: Kusto Query Language 101 - YouTube video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

{{< notice tip >}} C'est ici que nous souhaitons que vous ouvriez le tableau de bord et le visualiseur ADX utilisés précédemment dans des fenêtres séparées pour compléter les exercices restants. Si vous ne pouvez pas ou ne souhaitez pas utiliser le tableau de bord, toutes les questions pour cette section sont listées ci-dessous.  

*Notez que toute page avec une vidéo contient la leçon à la fois sous forme vidéo et écrite. Vous pouvez suivre l'une ou l'autre selon votre style d'apprentissage.* {{< /notice >}}

## KQL 101  

**[Assurez-vous d'utiliser la base de données SecurityLogs pour cet exercice.]**

Tapez la requête suivante dans l'espace de travail pour afficher les premières lignes de la table **Employees**. Appuyez sur "run" ou "shift + enter" pour exécuter la requête. Tous les blocs de code KQL pour cet atelier seront encadrés en gris comme celui ci-dessous.

```KQL
Employees
|   take 10
```

Cette requête comporte plusieurs parties. Prenons un instant pour les analyser :

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt="KQL1" width="50%" height="value">

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt="KQL2" width="80%" height="value">

L'opérateur <span style="color:red">**take**</span> est un outil puissant que vous pouvez utiliser pour explorer les lignes d'une table et ainsi mieux comprendre les types de données qu'elle contient.

{{< notice note >}} 🎯**Point clé – Que faire lorsque vous ne savez pas quoi faire** : Chaque fois que vous êtes confronté à une table de base de données inconnue, la première chose à faire est d'en échantillonner les lignes en utilisant l'opérateur <span style="color:red">**take**</span>. Ainsi, vous saurez quelles colonnes sont disponibles pour la requête et pourrez deviner le type d'informations que vous pourriez extraire de la source de données. {{< /notice >}}

La table Employees contient des informations sur tous les employés de notre organisation. Dans ce cas, nous pouvons voir que l'organisation s'appelle « Envolve Labs » et que le domaine est « envolvelabs.com ».

{{< alert theme="success" >}}
*Question 1.	🤔 Essayez par vous-même ! Effectuez un <span style="color:red">**take**</span> sur toutes les autres tables pour voir les types de données qu'elles contiennent.*{{< /alert >}}

Vous pouvez facilement écrire plusieurs requêtes dans le même onglet de l'espace de travail. Pour ce faire, assurez-vous de séparer chaque requête par une ligne vide. Remarquez ci-dessous comment nous avons séparé les requêtes pour les tables Employees, Email, et OutboundBrowsing par des lignes vides aux lignes 3 et 6.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt="KQL3" width="value" height="value">

Lorsque vous avez plusieurs requêtes, il est important d'indiquer à ADX laquelle vous souhaitez exécuter. Pour choisir une requête, cliquez simplement sur n'importe quelle ligne qui fait partie de cette requête. Une fois la requête sélectionnée, elle sera mise en surbrillance en bleu, comme on peut le voir aux lignes 4 et 5 ci-dessus.

#### **Trouver le nombre : l'opérateur 'count'**

Nous pouvons utiliser <span style="color:red">**count**</span> pour voir combien de lignes une table contient. Cela nous montre l'ampleur des données stockées.

```KQL
Employees
|   count
```
{{< alert theme="success" >}}
*Question 2.	🤔 Combien d'employés compte l'entreprise ?*{{< /alert >}}

#### **Filtrer des données avec l'opérateur 'where'**

Jusqu'à présent, nous avons exécuté des requêtes qui examinent l'intégralité du contenu de la table. Souvent, dans les analyses de cybersécurité, nous ne voulons regarder que les données correspondant à un ensemble de conditions ou de critères. Pour ce faire, nous appliquons des filtres à des colonnes spécifiques.

Nous pouvons utiliser l'opérateur <span style="color:red">**where**</span> dans KQL pour appliquer des filtres à un champ spécifique. Par exemple, nous pouvons trouver tous les employés qui portent le prénom "Linda" en filtrant sur la colonne de nom dans la table **Employees**.

Les déclarations <span style="color:red">**where**</span> sont structurées d'une manière particulière. Utilisez le tableau utile ci-dessous pour comprendre comment rédiger une déclaration <span style="color:red">**where**</span>.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt="KQL4" width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```
L'opérateur <span style="color:blue">**has**</span> est utile ici car nous recherchons uniquement une correspondance partielle. Si nous souhaitons rechercher un employé précis avec un prénom et un nom complet (exact match), nous utilisons l'opérateur == :

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*Question 3.	🤔 Chaque employé de Envolve Labs reçoit une adresse IP. Quel employé possède l'adresse IP suivante : « 192.168.0.191 » ?*{{< /alert >}}

Lors de leurs tâches quotidiennes, les employés de Envolve Labs envoient et reçoivent des emails. Un enregistrement de chacun de ces emails est stocké dans la table **Email**.

{{< notice note >}} 🎯**Point clé – Confidentialité et métadonnées des utilisateurs** : Comme vous pouvez l'imaginer, certains emails sont hautement sensibles. Au lieu de stocker le contenu intégral de chaque email envoyé et reçu par l'entreprise dans une base de données facilement accessible pour les analystes en sécurité, nous ne capturons que les métadonnées des