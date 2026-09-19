---
title: "Problème 1 : Bases des Arbres"
date: 2022-08-06T13:24:17-07:00
draft: false
weight: 3
---

## Tâche 1 : Trouver une Valeur dans un Arbre Binaire

Maintenant que nous connaissons les bases de la traversée d'un arbre, implémentez la recherche binaire en suivant le processus (ou algorithme) que nous avons abordé dans la page précédente. Voici un petit rappel :
* Si la valeur actuelle est inférieure à celle que nous recherchons, allez vers le nœud de droite.
* Si la valeur actuelle est supérieure à celle que nous recherchons, allez vers le nœud de gauche.
* Si la valeur actuelle est celle que nous recherchons, vous avez terminé !

<iframe height="800px" width="100%" src="https://replit.com/@nuevofoundation/BinarySearch?lite=true" title="Problème 1 : Bases des Arbres - Éditeur Replit" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

{{% showanswer "SPOILER : Cliquez ici si vous avez besoin d'aide avec la solution !" %}}
```js javascript
public static Node findValue(Node root, int value) {
    // Nous commençons à la racine de l'arbre
    Node current = root;

    // Nous suivons la logique décrite ci-dessus 
    while (current.value != value) {
        System.out.println("La valeur actuelle est : " + current.value);
        if (value < current.value) {
            current = current.left;
        }
        if (value > current.value) {
            current = current.right;
        }
    }

    // Si nous sommes ici, nous avons atteint le nœud 
    // avec la bonne valeur !
    return current;
}
```
{{% /showanswer %}}

### Félicitations ! Si vous êtes arrivé jusqu'ici, vous avez officiellement programmé une recherche binaire !