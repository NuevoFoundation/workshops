---
title: "Ката оңдоо - Жооптордун ачкычы"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Бул жооптордун ачкычы окуу боюнча бөлүмдөрдөгү бардык каталарды камтыйт жана үч тапшырма үчүн туура ишке ашырууларды камсыздайт. Окутуу бөлүмдөрүндөгү каталар ишмердүүлүк баракчаларында кеңейтүү блоктору менен көрсөтүлөт, бирок бул баарын бир мугалимдин маалымдама баракчасында топтойт.

**Эскертүү:** Төмөндө көрсөтүлгөн тапшырмаларды аткаруу үчүн алгоритмдер семинардагы сүрөттөлүштөргө негизделет. Replit баштапкы коду бир аз башкача өзгөрмөлүү аталыштарды же функциялык кол тамгаларды колдонушу мүмкүн. Логика жана ыкмалар бирдей.
{{% /notice %}}

## Окутуу бөлүмдөрүнүн каталары

### Бинардык Издөө Катасы (2-Бөлүк)

**Ката:** Массивдин төмөнкү жарымын издөө үчүн болгон рекурсивдүү чакыруу туура эмес, жогорку жарымын издеп жатат.

**Түзөтүү:** Рекурсивдүү чакыруу параметрлерин төмөнкү жарымын издөө үчүн `lo` жана `middle - 1` параметрлерин колдонуп алмаштырыңыз:

```c
// КАТАЛУУ: жогорку жарымын издеп жатат
return rbin_search(arr, middle + 1, hi, element);

// ТҮЗӨТҮҮЛҮҮ: төмөнкү жарымын туура издөөдө
return rbin_search(arr, lo, middle - 1, element);
```

### Ыкчам (Quicksort) Сорттоо Катасы (3-Бөлүк)

**Ката:** "Чоңураак" элементти көзөмөлдөгөн `p1` көрсөткүчү ("пойнтери") кичирээк элемент ордуна алмаштырылгандан кийин жаңыланбай калган.

**Түзөтүү:** `for` циклдин ичинде алмаштыруучу билдирүүдөн кийин `p1++;` деп кошуңуз:

```c
if (arr[p2] < arr[pivot]) {
    swap(&arr[p1], &arr[p2]);
    p1++; // БУЛ САП КОШУЛУШУ КЕРЕК
}
```

### Вектордун Эстутум Каты (4-Бөлүк)

**Ката:** `pushBack` функциясында массивди кайра колдонууда, код эске алына турган жаңы дарекке `list->__arr` көрсөткүчүн жаңыртууну унуткан. Бул төмөнкү көйгөйлөргө алып келет:  
- Жараксыз окуулар/жазуулар (бошотулган эстутумга кирүү)  
- Экижолу босотуу (бир көрсөткүчтү эки жолу бошотуу)  
- Эстутум агып кетүүлөрү (жаңы бөлүнгөн эстутум эч качан колдонулбайт)

**Түзөтүү:** Эстутумду кайра бөлгөндөн кийин көрсөткүчтү жаңыртыңыз:

```c
int *newArr = realloc(list->__arr, newCapacity * sizeof(int));
list->__arr = newArr; // БУЛ САП КОШУЛУШУ КЕРЕК
```

Ошондой эле эстутумдун агып кетүүсүнөн сактануу үчүн башкы (main) аяктаганда `deleteVectorInt` чакыруусун кошуңуз.

## 1-Тапшырма: Бинардык Дарак

C тилиндеги туура бинардык дарак ишке ашуусу. Дарак, негизги өзөгү sentinel түйүнүн сол жагында жайгашкан түзүмдү колдонот.

### Негизги операциялар

**Даракты Кошуу** - туура ордун табуу үчүн жагдайды караңыз, анан жаңы түйүндү кошуңуз:

```c
void treeAdd(BinaryTree *tree, int value) {
    BTNode *newNode = (BTNode *)malloc(sizeof(BTNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    newNode->parent = NULL;

    // Бош дарак: негизги өзөк катары кошуңуз (sentinelдин сол жагына)
    if (tree->__root->left == NULL) {
        tree->__root->left = newNode;
        newNode->parent = tree->__root;
        return;
    }

    // Киргизүүнүн ордун табуу үчүн сапар
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

**Минималды Тап** – мүмкүн болушунча сол жагына барыңыз:

```c
BTNode *findMin(BTNode *node) {
    if (node == NULL) return NULL;
    while (node->left != NULL) {
        node = node->left;
    }
    return node;
}
```

**Даракты Алып Салуу** – 3 учур менен иштөө (0, 1 же 2 бала):

```c
void treeRemove(BinaryTree *tree, int value) {
    BTNode *node = treeFind(tree, value);
    if (node == NULL) return;

    // Учур 1: Баласы жок (жалгыз түйүн)
    if (node->left == NULL && node->right == NULL) {
        if (node->parent->left == node)
            node->parent->left = NULL;
        else
            node->parent->right = NULL;
        free(node);
    }
    // Учур 2: Бир бала
    else if (node->left == NULL || node->right == NULL) {
        BTNode *child = (node->left != NULL) ? node->left : node->right;
        child->parent = node->parent;
        if (node->parent->left == node)
            node->parent->left = child;
        else
            node->parent->right = child;
        free(node);
    }
    // Учур 3: Эки бала
    else {
        BTNode *minRight =