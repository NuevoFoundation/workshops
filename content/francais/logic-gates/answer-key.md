```markdown
---
title: "Atelier sur les portes logiques : Corrigé"
date: 2025-12-04T10:00:00-06:00
draft: false
hidden: true
weight: 300
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css" />

{{% notice tip %}}
Remarque : Pour cet atelier, assurez-vous d'utiliser un navigateur compatible et d'avoir activé JavaScript pour le simulateur interactif.

Les activités peuvent inclure la sélection d'options ou de composants dans le simulateur.
{{% /notice %}}

### Activité 1 : Porte ET
Réponse attendue : La sortie est activée (1) uniquement si les deux entrées sont actives (1).

Conseil : Essayez toutes les combinaisons possibles des deux entrées. Seulement lorsque les deux sont à 1, la sortie sera également à 1.

{{< workshop-image filename="media/answer_1.png" alt="Solution visuelle pour le circuit ET avec deux entrées et une sortie" width="40%" class="lg-img" >}}

---

### Activité 2 : Porte OU
Réponse attendue : La sortie est activée (1) si au moins une des entrées est active (1).

Conseil : Si une ou les deux entrées sont à 1, la sortie sera à 1. Elle ne sera à 0 que si les deux entrées sont à 0.

{{< workshop-image filename="media/answer_2.png" alt="Solution visuelle pour le circuit OU avec deux entrées et une sortie" width="40%" class="lg-img" >}}

---

### Activité 3 : Porte NON
Réponse attendue : La sortie est toujours l'opposé de l'entrée.

Conseil : Si l'entrée est 0, la sortie sera 1. Si l'entrée est 1, la sortie sera 0.

{{< workshop-image filename="media/answer_3.png" alt="Solution visuelle pour le circuit NON avec une entrée et une sortie" width="40%" class="lg-img" >}}

**Challenge avec deux NON :**  
Si vous placez deux portes NON en série, le signal est inversé deux fois. C'est-à-dire :  
- Si l'entrée est 0 : la première porte NON la convertit en 1, la deuxième la reconvertit en 0.  
- Si l'entrée est 1 : la première porte NON la convertit en 0, la deuxième la reconvertit en 1.

**Conclusion :** Deux portes NON consécutives annulent l'effet d'inversion et la sortie sera égale à l'entrée initiale.

---

### Activité 4 : ET + NON (Porte inversée)
Réponse attendue : La sortie est 1 sauf lorsque les deux entrées sont à 1 (utiliser ET puis NON).

Conseil : La porte NON inverse le résultat de la porte ET. Seulement si les deux entrées sont à 1, alors la sortie sera 0.

{{< workshop-image filename="media/answer_5.png" alt="Solution visuelle pour le circuit ET suivi de NON avec deux entrées et une sortie" width="40%" class="lg-img" >}}

---

### Activité 5 : OU + NON (Sortie silencieuse)
Réponse attendue : La sortie est 1 uniquement si les deux entrées sont à 0 (utiliser OU puis NON).

Conseil : La porte NON inverse le résultat de la porte OU. Si une entrée est 1, la sortie sera 0.

{{< workshop-image filename="media/answer_6.png" alt="Solution visuelle pour le circuit OU suivi de NON avec deux entrées et une sortie" width="40%" class="lg-img" >}}

---

### Activité 6 : Combinaison de portes (ET, OU, NON)
Réponse attendue : La sortie est activée si B est à 1, ou si A est à 1 et C est à 0 (utiliser NON pour inverser C).

Conseil : Construisez le circuit en combinant les portes selon la condition logique donnée. Testez les cas suggérés dans l'activité.

1. **Identifiez les entrées et les sorties :**
- Entrées : A, B, C  
- Sortie : Sortie

2. **Inverser l'entrée C avec NON :**
- Connectez C à la porte NON pour obtenir `NON C`.

3. **Combiner A et NON C avec ET :**
- Connectez A et `NON C` à la porte ET pour obtenir `A ET NON C`.

4. **Combiner le résultat précédent avec B en utilisant OU :**
- Connectez `A ET NON C` et B à la porte OU pour obtenir la sortie finale : `(A ET NON C) OU B`.

5. **Connectez la sortie de OU à la sortie du circuit.**

**Exemple de connexions :**

{{< workshop-image filename="media/answer_4.png" alt="Solution visuelle pour le circuit combiné ET, OU, NON avec trois entrées et une sortie" width="40%" class="lg-img" >}}

**Tests guidés :**
- A = 1, B = 0, C = 0 → Sortie = 1  
- A = 1, B = 0, C = 1 → Sortie = 0  
- A = 0, B = 1, C = 1 → Sortie = 1  
- A = 0, B = 0, C = 0 → Sortie = 0  

---

### Activité 7 : Différence exclusive (XOR avec ET/OU/NON)
Réponse attendue : La sortie est 1 seulement si les entrées sont différentes (utiliser une combinaison de ET, OU, et NON).

Conseil : Essayez toutes les combinaisons. La sortie sera 1 uniquement si une entrée est 1 et l'autre est 0.

1. **Identifiez les entrées et la sortie :**
- Entrées : A, B  
- Sortie : Sortie

2. **Créer la combinaison OU :**
- Connectez A et B à la porte OU pour obtenir `OU_AB`.

3. **Créer la combinaison ET :**
- Connectez A et B à la porte ET pour obtenir `ET_AB`.

4. **Inverser le résultat de ET :**
- Connectez la sortie de `ET_AB` à la porte NON pour obtenir `NON_ET_AB`.

5. **Combiner les deux avec un autre ET :**
- Connectez `OU_AB` et `NON_ET_AB` à une deuxième porte ET pour obtenir la sortie finale : `XOR = (A OU B) ET NON(A ET B)`.

6. **Connectez la sortie du deuxième ET à la sortie du circuit.**

**Exemple de connexions :**

{{< workshop-image filename="media/answer_7.png" alt="Solution visuelle pour le circuit XOR utilisant ET, OU, et NON avec deux entrées et une sortie" width="40