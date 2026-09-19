---
title: "Activité 5 - Utiliser des instructions conditionnelles"
date: 2019-07-23T11:45:38-07:00
draft: false
weight: 15
---

## Activité 5

Cette activité est divisée en deux parties. Utilisez vos connaissances des instructions `if`-`else` pour compléter les activités. Comme toujours, appuyez sur **Exécuter** après avoir complété chaque partie pour vérifier les erreurs.

### Activité 5.1

Une fois que le joueur a deviné une lettre, et que nous avons vérifié si la lettre apparaît dans le mot, nous devons vérifier si le mot entier a été deviné. Si le mot entier a été correctement identifié, nous devons informer l'ordinateur que le joueur a gagné la partie. Utilisez une instruction `if` pour changer la valeur de la variable *won* uniquement si le nombre de lettres correctement devinées est égal au nombre de lettres dans le mot à deviner.

### Activité 5.2

À la fin du jeu, nous devons informer le joueur s'il a gagné ou perdu la partie.

- Si le joueur a gagné, affichez dans la console `Vous avez gagné !`.
- Sinon, indiquez au joueur qu'il a perdu et affichez la réponse correcte. Par exemple, si le joueur n'a pas réussi à deviner la réponse correcte `"Hello"`, affichez `Vous avez perdu ! La réponse était 'Hello'`.

Pour tester les deux parties de l'activité, configurez la banque de mots pour ne contenir qu'un seul mot de deux lettres (consultez **Activité 2** si vous avez oublié comment faire cela). Appuyez sur **Exécuter** et devinez correctement le mot lorsque vous jouez au jeu. Assurez-vous que `Vous avez gagné !` s'affiche. **Exécutez** à nouveau et vérifiez que `Vous avez perdu !` s'affiche lorsque vous perdez la partie.