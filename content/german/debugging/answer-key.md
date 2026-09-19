```markdown
---
title: "Debugging - Lösungsschlüssel"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Dieser Lösungsschlüssel behandelt alle Fehler aus den Tutorial-Abschnitten und liefert korrekte Implementierungen für die drei Übungen. Die Fehler aus den Tutorials werden auf den Aktivitätsseiten mit expandierbaren Blöcken angezeigt, aber hier wird alles in einer Referenz für Lehrkräfte zusammengefasst.

**Hinweis:** Die unten stehenden Implementierungen der Übungen basieren auf den Algorithmen, die im Workshop beschrieben wurden. Der tatsächlich verwendete Replit-Starter-Code kann leicht unterschiedliche Variablennamen oder Funktionssignaturen nutzen. Die Logik und Vorgehensweise sind jedoch identisch.
{{% /notice %}}

## Fehler aus Tutorial-Abschnitten

### Fehler bei binärer Suche (Teil 2)

**Der Fehler:** Der rekursive Aufruf zur Suche in der unteren Hälfte des Arrays durchsucht fälschlicherweise die obere Hälfte.

**Die Lösung:** Ändern Sie die Argumente des rekursiven Aufrufs, sodass die untere Hälfte mit `lo` und `middle - 1` durchsucht wird:

```c
// FEHLERHAFT: durchsucht die obere Hälfte anstatt die untere Hälfte
return rbin_search(arr, middle + 1, hi, element);

// KORRIGIERT: durchsucht die untere Hälfte korrekt
return rbin_search(arr, lo, middle - 1, element);
```

### Fehler in Quicksort (Teil 3)

**Der Fehler:** Zeiger `p1` (der das "größere" Element verfolgt) wird nicht nach dem Austausch eines kleineren Elements inkrementiert.

**Die Lösung:** Fügen Sie `p1++;` nach der Austausch-Anweisung innerhalb der Schleife hinzu:

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // DIESE ZEILE FEHLTE
}
```

### Fehler bei Vektorspeicher (Teil 4)

**Der Fehler:** Beim Neuzuweisen des Arrays in `pushBack` vergisst der Code, das Update von `list->__arr`, um auf den neuen Speicher zu zeigen. Das verursacht:
- Ungültige Lese-/Schreibvorgänge (Zugriff auf freigegebenen Speicher)
- Mehrfaches Freigeben (Freigabe des gleichen Zeigers zwei Mal)
- Speicherlecks (neu zugewiesener Speicher wird nicht referenziert)

**Die Lösung:** Aktualisieren Sie den Zeiger nach dem Neuzuweisen:

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // DIESE ZEILE FEHLTE
```

Fügen Sie außerdem am Ende von main den Aufruf von `deleteVectorInt` hinzu, um Speicherlecks zu vermeiden.

## Übung 1: Binärbaum

Eine korrekte Implementierung des Binärbaums in C. Der Baum verwendet einen Wächterknoten, wobei die tatsächliche Wurzel das linke Kind des Wächterknotens ist.

### Schlüsseloperationen

**Tree Add** - Durchlaufen, um die richtige Position zu finden, dann einfügen:

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // Leerbaum: Einfügen als Wurzel (linkes Kind des Wächterknotens)
    if (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // Durchlaufen, um Einfügepunkt zu finden
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

**Find Min** - So weit wie möglich nach links gehen:

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**Tree Remove** - Drei Fälle behandeln (0, 1 oder 2 Kinder):

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // Fall 1: Keine Kinder (Blatt)
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // Fall 2: Ein Kind
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // Fall 3: Zwei Kinder
    else {
        BTNode *minRight = findMin(node->right);
        node->data = minRight->data;
        // Entfernen des MinRight-Knotens (er hat höchstens ein rechtes Kind)
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
**Häufige Fehler, auf die man achten sollte:**
- Vergessen Sie nicht, Elternzeiger zu aktualisieren, wenn Knoten verschoben werden.
- Nicht den Fall behandeln, bei dem der zu entfernende Knoten die Wurzel ist
- Speicherlecks durch das Nicht-Freigeben entfernter Knoten
- Der Name des Wächterknotens `__root` ist verwirrend — die tatsächliche Wurzel ist `tree->__root->left`
{{% /notice %}}

## Übung 