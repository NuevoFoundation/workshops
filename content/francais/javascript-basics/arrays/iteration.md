```markdown
---
title: "Itération sur les tableaux"
date: 2020-07-28T11:45:38-07:00
draft: true
hidden: true
weight: 6
---


Une des opérations courantes sur les tableaux est d'itérer sur les valeurs et de traiter chacune d'entre elles d'une certaine manière. Examinons et discutons certaines des méthodes les plus simples pour y parvenir :

## Array.forEach()
La méthode `forEach()` appelle une fonction (une fonction de rappel, un callback. Dans ce cas, une fonction appelée printBr) une fois pour chaque élément du tableau.

La fonction passée à `forEach` est exécutée une fois pour chaque élément du tableau, avec l'élément du tableau passé en tant qu'argument à la fonction. Les valeurs non assignées ne sont pas parcourues dans une boucle forEach.

**Syntaxe :**
```javascript
arrayName.forEach(functionName);
```

<b>Exemple :</b>
![#Impossible de trouver l'image](../../img/foreach.png)
```