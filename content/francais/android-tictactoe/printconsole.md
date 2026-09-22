---
title: "Impression sur la Console"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 4
---
Parfois, le jeu ou l'application peut ne pas fonctionner comme prévu, ou vous souhaitez écrire quelque chose dans la console à des fins de journalisation. En dehors du débogage de l'application, vous pouvez utiliser `System.out.println()` pour écrire votre message. Cherchez vos messages dans la fenêtre "logcat" en bas d'Android Studio :
<img src="../resources/_gen/images/println.gif" height="60%" width="60%" title="System.out.println()" alt="Fenêtre Logcat dans Android Studio montrant les messages créés à l'aide de la fonction de journalisation System.out.printIn"/>

{{% notice tip %}}

## Travailler Ensemble

1. Sans supprimer les guillemets, essayez de changer `"Restarting the Tac-Tic-Toe Game!"` en `"Restarting the Tic-Tac-Toe Game!"` ou toute autre phrase de votre choix. Appuyez sur Exécuter pour voir si quelque chose change.
2. Ajoutez un autre `System.out.println` en dessous de la ligne actuelle pour imprimer une deuxième phrase sous la première.
3. Appuyez sur Exécuter pour voir si deux phrases s'impriment. Si vous voyez du texte rouge, veuillez demander de l'aide.

{{% /notice %}}

{{% notice warning %}}
## À L’AIDE ! J'ai beaucoup de texte rouge !

Si vous voyez du texte rouge, vous avez rencontré des erreurs ! Veuillez demander de l'aide. Faites attention aux points suivants lorsque vous codez dans Android :

1. `out` et `println` commencent par une lettre minuscule.
2. `System` commence par une lettre majuscule.
2. Assurez-vous que la phrase que vous souhaitez imprimer est entourée de guillemets et que la phrase est placée entre les parenthèses.
3. Ne supprimez pas les accolades `{` ou `}`.

{{% /notice %}}

`System.out.println` est utile lorsque vous souhaitez corriger des bogues dans le code, mais votre utilisateur (la personne qui utilise l'application) ne peut pas voir le texte imprimé avec cette fonction. Mais nous pouvons faire cela avec des toasts ! Un toast est un texte rapide et court que nous rendons visible pour l’utilisateur. Voici comment créer un toast :
```kotlin
Toast.makeText(this, "Texte que nous voulons afficher", Toast.LENGTH_SHORT).show()
```
<img src="../resources/_gen/images/toast_example.png" title="Exemple de Toast" alt="Exemple de toast. Vous pouvez utiliser la fonction toast.makeText avec comme arguments le contexte, la chaîne de message et Toast.LENGTH_LONG ou Toast.LENGTH_SHORT pour afficher un message de bienvenue, comme Bienvenue dans Tic-Tac-Toe"/>