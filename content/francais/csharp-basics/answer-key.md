```markdown
---
title: "C#: Basics - Corrigé des réponses"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ce sont des solutions d'exemple. De nombreux défis ont plusieurs réponses valides, en particulier ceux qui vous demandent de créer vos propres exemples. Votre solution est correcte si elle produit le résultat attendu !
{{% /notice %}}

## Variables et types de données

### Aidez Patrick à corriger ses variables

Le code de Patrick contient de mauvais types de données assignés à chaque variable. Voici les déclarations corrigées :

```csharp
string bestFriend = "Minerva";
int numOfFriends = 4;
double GPA = 3.6;
char meaningOfLife = '$';
bool loveMusic = true;
```

**Explication :** Chaque variable nécessite un type de données qui correspond à la valeur stockée :

| Variable | Mauvais type | Type correct | Pourquoi |
|----------|-------------|--------------|----------|
| `bestFriend` | `int` | `string` | `"Minerva"` est un texte, pas un nombre |
| `numOfFriends` | `bool` | `int` | `4` est un nombre entier, pas un booléen |
| `GPA` | `string` | `double` | `3.6` est un nombre décimal, pas un texte |
| `meaningOfLife` | `double` | `char` | `'$'` est un caractère unique, pas un décimal |
| `loveMusic` | `char` | `bool` | `true` est une valeur booléenne, pas un caractère |

Résultat :
```
Vous l'avez corrigé !
```

## Opérateurs

### Statistiques d'examen

Étant donné les notes : Patrick (88), Tom (89), Mary (95), Chris (84), Jen (92) :

```csharp
// 1. Déclarer les variables des notes des étudiants
int patrickGrade = 88;
int tomGrade = 89;
int maryGrade = 95;
int chrisGrade = 84;
int jenGrade = 92;

// 2. Calculer la moyenne de la classe
average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade) / 5.0;

// 3. Utiliser des opérateurs relationnels pour les comparaisons
bool over60 = average > 60;
bool over70 = average > 70;
bool over80 = average > 80;
bool over90 = average > 90;
```

{{% notice tip %}}
Nous divisons par `5.0` au lieu de `5` pour obtenir un résultat décimal. En C#, la division de deux entiers donne un entier (le reste est ignoré). Utiliser `5.0` garantit que nous obtenons la moyenne exacte.
{{% /notice %}}

Résultat :
```
---------------------------
     Rapport sur les notes    
---------------------------

Notes des étudiants :          
- Patrick : 88
- Tom : 89
- Mary : 95
- Chris : 84
- Jen : 92

Moyenne de la classe : 89.6
- Moyenne supérieure à 60 : Vrai
- Moyenne supérieure à 70 : Vrai
- Moyenne supérieure à 80 : Vrai
- Moyenne supérieure à 90 : Faux
```

## Structures de contrôle

### Instruction If : Le message de Patrick

Complétez les expressions booléennes pour que Patrick affiche le bon message en fonction de l'heure :

```csharp
int currentHour = 10; // changez cela pour tester différentes heures (0-23)

if (currentHour < 12)
{
    Console.WriteLine("Bon Matin");
}
else if (currentHour < 20)
{
    Console.WriteLine("Bon Après-midi");
}
else
{
    Console.WriteLine("Bonne Nuit");
}
```

**Comment cela fonctionne :**
- Heures 0-11 : `currentHour < 12` est `true` → affiche "Bon Matin"
- Heures 12-19 : `currentHour < 12` est `false`, mais `currentHour < 20` est `true` → affiche "Bon Après-midi"
- Heures 20-23 : les deux conditions sont `false` → tombe dans `else` → affiche "Bonne Nuit"

### Boucle For : Somme de 1 à 100

Convertissez la boucle while en une boucle for qui calcule 1 + 2 + 3 + ... + 100 :

```csharp
int total = 0;
for (int num = 1; num <= 100; num = num + 1)
{
    total = total + num;
}
Console.WriteLine("Réponse calculée dans une boucle for : " + total);
```

Résultat :
```
Réponse calculée dans une boucle for : 5050
```

{{% notice tip %}}
La réponse est 5050. Une célèbre histoire raconte que le mathématicien Carl Friedrich Gauss a découvert cela enfant en remarquant que 1 + 100 = 101, 2 + 99 = 101, et ainsi de suite — ce qui donne 50 paires de 101, soit 5050 !
{{% /notice %}}

## Méthodes

### Compter la Pyramide

Écrivez une méthode qui calcule le nombre total de perles dans une pyramide avec des carrés pour `n` niveaux. Le niveau 1 a 1×1 = 1 perle, le niveau 2 a 2×2 = 4 perles, le niveau 3 a 3×3 = 9 perles, et ainsi de suite.

```csharp
public static int pyramidCount(int levels)
{
    int total = 0;
    for (int i = 1; i <= levels; i++)
    {
        total = total + (i * i);
    }
    return total;
}
```

**Comment cela fonctionne :** La méthode parcourt chaque niveau de 1 à `levels`, ajoutant le carré du numéro du niveau (`i * i`) au total en cours.

Exemples de valeurs :

| Niveaux | Calcul | Total |
|---------|--------|-------|
| 1       | 1×1    | 1     |
| 2       | 1 + 4  | 5     |
| 3       | 1 + 4 + 9 | 14 |
| 4       | 1 + 4 + 9 + 16 | 30 |

Résultat :
```
Félicitations ! Défi réussi !
```

## Classes et objets

### Construire la classe Oiseau

Voici la classe `Bird` complète avec tous les champs, le constructeur, et toutes les méthodes :

```csharp
public class Bird
{
    // Étape 1 : Déclarer des champs privés
    private string species