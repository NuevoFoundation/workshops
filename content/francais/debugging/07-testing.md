---
title: "Étape 3 - Tests"
difficulties: ["intermédiaire"]
weight: 8
draft: false
---

Vous avez implémenté la ou les corrections pour vos bogues. Naturellement, la première chose que vous faites est de recompiler votre code et de l'exécuter. Si tout semble correct, vous avez corrigé le bogue ! Pour les projets de petite taille, cela fonctionne relativement bien. Les plus gros projets peuvent être plus compliqués car ils prennent beaucoup plus de temps à compiler. En général, ils disposent de tests automatisés qui sont exécutés automatiquement après les mises à jour du code, de sorte que les programmeurs n'ont même pas à se soucier excessivement de cette étape (sauf les programmeurs qui écrivent les tests !).

Lors des tests, vous savez déjà ou avez une bonne idée de l'endroit où le bogue pourrait se produire ; en conséquence, dans vos tests, vous chercherez à exécuter intentionnellement ce code pour vous assurer qu'il est correct. Les tests sont tellement importants qu'une méthodologie de développement logiciel entière tourne autour de ce concept (développement piloté par les tests) !

Parfois, corriger un bogue peut en introduire un autre, ce qu'on appelle une _régression_. Il est tout à fait normal d'avoir parfois plusieurs itérations de corrections de bogues !

## Tests unitaires
Commencez toujours petit avec vos tests. Cette idée est tirée des expériences scientifiques : si vous réduisez le nombre de facteurs (variables indépendantes) en jeu, vous pouvez plus facilement déterminer la cause. C'est ce qu'on appelle les tests unitaires. Plutôt que de tester si le programme ou une partie complète fonctionne, un test unitaire examine une partie spécifique. Un test unitaire peut appeler une fonction qui n'en appelle pas d'autres pour vérifier si elle produit la valeur correcte/attendue.

Par exemple, disons que vous avez une application calculatrice capable d'additionner, de soustraire, de multiplier et de diviser des nombres. Vous pourriez écrire un test unitaire qui teste uniquement la fonction d'addition en lui donnant deux nombres et en vérifiant si elle retourne la bonne valeur.  

## Tests d'intégration
Ce n'est qu'une fois que vos tests unitaires ont réussi que vous devriez commencer les tests d'intégration. Les tests d'intégration examinent comment plusieurs composants de votre programme fonctionnent ensemble pour vérifier s'ils produisent la valeur correcte/attendue. Un test d'intégration peut appeler une fonction qui en appelle plusieurs autres, ou qui affecte de nombreuses parties différentes du programme.

Le fait que vos tests unitaires soient réussis ne garantit pas la réussite de vos tests d'intégration. Vous pourriez écrire un test d'intégration pour votre application de calculatrice en testant une série d'opérations arithmétiques, comme effectuer une addition suivie d'une multiplication, et en vérifiant le résultat.