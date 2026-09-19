```markdown
---
title: "Débogage - Clé de réponse"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Cette clé de réponse couvre tous les bugs des sections du tutoriel et fournit les implémentations correctes pour les trois exercices. Les bugs du tutoriel sont affichés dans des blocs extensibles sur les pages d'activité, mais tout est consolidé ici comme une référence pour l'enseignant.

**Remarque :** Les implémentations des exercices ci-dessous sont basées sur les algorithmes décrits dans l'atelier. Le code de départ Replit peut utiliser des noms de variables ou des signatures de fonctions légèrement différents. La logique et l'approche restent les mêmes.
{{% /notice %}}

## Bugs dans les sections du tutoriel

### Bug de Recherche Binaire (Partie 2)

**Le bug :** L'appel récursif pour rechercher dans la moitié inférieure du tableau recherche incorrectement dans la moitié supérieure.

**La correction :** Modifiez les arguments de l'appel récursif afin que la recherche dans la moitié inférieure utilise `lo` et `middle - 1` :

```c
// BUG : recherche dans la moitié supérieure au lieu de la moitié inférieure
return rbin_search(arr, middle + 1, hi, element);

// CORRIGÉ : recherche correctement dans la moitié inférieure
return rbin_search(arr, lo, middle - 1, element);
```

### Bug de Quicksort (Partie 3)

**Le bug :** Le pointeur `p1` (qui suit l'élément "plus grand") n'est pas incrémenté après avoir échangé un élément plus petit.

**La correction :** Ajoutez `p1++;` après l'instruction d'échange dans la boucle `for` :

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // CETTE LIGNE MANQUAIT
}
```

### Bug de Mémoire de Vecteur (Partie 4)

**Le bug :** Lors du réalignement du tableau dans `pushBack`, le code oublie de mettre à jour `list->__arr` pour pointer vers la nouvelle mémoire. Cela provoque :
- Lectures/écritures invalides (accès à une mémoire libérée)
- Doubles libérations de mémoire (libération deux fois du même pointeur)
- Fuites de mémoire (la nouvelle mémoire allouée n'est jamais référencée)

**La correction :** Après le réalignement, mettez à jour le pointeur :

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // CETTE LIGNE MANQUAIT
```

Ajoutez également l'appel à `deleteVectorInt` à la fin de `main` pour éviter les pertes de mémoire.

## Exercice 1 : Arbre Binaire

Une implémentation correcte d'un arbre binaire en C. L'arbre utilise un nœud sentinelle où la racine réelle est l'enfant gauche du sentinelle.

### Opérations principales

**Ajouter au sein de l'arbre** - parcourez l'arbre pour trouver la position correcte, puis insérez :

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // Arbre vide : insérez comme racine (enfant gauche du sentinelle)
    si (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // Parcourez pour trouver le point d'insertion
    BTNode *current = tree->__root->left;
    while (current != NULL) {
        if (value < current->data) {
            if (current->left == NULL) {
                current->left = newNode;
                newNode->parent = current;
                return;
            }
            current = current->left;
        } else {
            if (current->right == NULL) {
                current->right = newNode;
                newNode->parent = current;
                return;
            }
            current = current->right;
        }
    }
}
```

**Trouver le minimum** - allez autant à gauche que possible :

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**Supprimer dans l'arbre** - gérer 3 cas (0, 1 ou 2 enfants) :

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // Cas 1 : Pas d'enfants (feuille)
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // Cas 2 : Un seul enfant
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // Cas 3 : Deux enfants
    else {
        BTNode *minRight = findMin(node->right);
        node->data = minRight->data;
        // Supprimez le nœud minRight (il a au maximum 1 enfant à droite)
        if (minRight->right != NULL) {
            minRight->right->parent = minRight->parent;
        }
        if (minRight->parent->left == minRight)
            minRight->parent->left = minRight->right;
        else
            minRight->parent->right = minRight->right;
        free(minRight);
    }
}
```

{{% notice tip %}}
**Bugs communs à surveiller :**
- Oublier de mettre à jour les parents lors du déplacement des nœuds
- Ne pas gérer le cas où le nœud à supprimer EST la racine
- Fuites de mémoire dues à des nœuds supprimés mais non libérés
- Le nom du nœud sentinelle, `__root`, peut être déroutant — la racine réelle est `tree->__root->left`
{{%