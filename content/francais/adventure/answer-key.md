```yaml
---
title: "Choisissez Votre Propre Aventure - Clé de Réponses"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Cet atelier est créatif — chaque histoire des élèves sera différente ! Cette clé de réponses montre un exemple complet basé sur l'histoire de Nuvi de l'atelier, ainsi qu'un modèle de code que les enseignants peuvent utiliser pour aider les élèves à structurer leurs propres aventures.
{{% /notice %}}

## Concepts Clés Utilisés

| Concept | Code Python | Rôle dans l'Histoire |
|---------|-------------|-----------------------|
| Afficher du texte | `print("text")` | Raconter l'histoire au lecteur |
| Obtenir une réponse | `input("question")` | Permettre au lecteur de faire des choix |
| Stocker dans une variable | `choice = input(...)` | Retenir le choix du lecteur |
| Prendre des décisions | `if` / `else` | Modifier l'histoire en fonction du choix |

## L'Aventure Complète de Nuvi

Voici un exemple fonctionnel basé sur le storyboard de Nuvi de l'atelier :

```python
# Le Jeu d'Aventure de Nuvi

print("=" * 40)
print("L'Aventure de Nuvi !")
print("=" * 40)
print()
print("Nuvi vient de terminer la pratique de robotique à l'école.")
print("Il est temps de rentrer à la maison !")
print()

# Choix 1 : Comment rentrer chez soi ?
choice1 = input("Nuvi doit-il rentrer à pied ou à vélo ? Tapez 'pied' ou 'vélo' : ")

if choice1 == "pied":
    print()
    print("Nuvi décide de rentrer chez lui à pied.")
    print("En chemin, Nuvi trouve un chiot mignon !")
    print("Nuvi caresse le chiot et continue son chemin.")
    print("Nuvi arrive chez lui avec le sourire.")
elif choice1 == "vélo":
    print()
    print("Nuvi monte sur son vélo et rentre chez lui.")
    print("Le vent est agréable ! Nuvi pédale très vite.")
    print("Nuvi arrive chez lui en un temps record !")
else:
    print()
    print("Nuvi ne parvient pas à décider, alors il rentre simplement à pied.")

print()
print("Nuvi est enfin chez lui ! Des amis sont dehors.")
print()

# Choix 2 : Que faire avec les amis ?
choice2 = input("Nuvi doit-il jouer au foot ou aller nager ? Tapez 'foot' ou 'nage' : ")

if choice2 == "foot":
    print()
    print("Nuvi et ses amis jouent au foot dans le parc !")
    print("Nuvi marque le but gagnant !")
    print("Tout le monde applaudit ! Quelle journée géniale !")
elif choice2 == "nage":
    print()
    print("Nuvi et ses amis vont à la piscine !")
    print("Ils éclaboussent partout et s'amusent beaucoup.")
    print("Nuvi fait un saut en bombe ! SPLASH !")
else:
    print()
    print("Nuvi décide de simplement traîner avec ses amis.")

print()
print("Quelle journée formidable ! Fin.")
```

**Exemple de sortie (si l'utilisateur choisit "pied" puis "foot") :**
```
========================================
L'Aventure de Nuvi !
========================================

Nuvi vient de terminer la pratique de robotique à l'école.
Il est temps de rentrer à la maison !

Nuvi doit-il rentrer à pied ou à vélo ? Tapez 'pied' ou 'vélo' : pied

Nuvi décide de rentrer chez lui à pied.
En chemin, Nuvi trouve un chiot mignon !
Nuvi caresse le chiot et continue son chemin.
Nuvi arrive chez lui avec le sourire.

Nuvi est enfin chez lui ! Des amis sont dehors.

Nuvi doit-il jouer au foot ou aller nager ? Tapez 'foot' ou 'nage' : foot

Nuvi et ses amis jouent au foot dans le parc !
Nuvi marque le but gagnant !
Tout le monde applaudit ! Quelle journée géniale !

Quelle journée formidable ! Fin.
```

## Modèle de Code pour les Élèves

Les élèves peuvent utiliser ce modèle comme point de départ pour leurs propres histoires :

```python
# Mon Jeu d'Aventure
# Remplacez le texte entre guillemets par votre propre histoire !

print("Bienvenue dans mon jeu d'aventure !")
print()

# Racontez le début de votre histoire
print("Vous êtes [décrivez le décor].")
print("[Quelque chose se passe pour commencer l'aventure].")
print()

# Premier choix
choice1 = input("[Demandez au lecteur de faire un choix] : ")

if choice1 == "[option 1]":
    print("[Ce qui se passe s'ils choisissent l'option 1]")
elif choice1 == "[option 2]":
    print("[Ce qui se passe s'ils choisissent l'option 2]")
else:
    print("[Ce qui se passe s'ils saisissent quelque chose d'inattendu]")

print()

# Deuxième choix
choice2 = input("[Demandez au lecteur de faire un autre choix] : ")

if choice2 == "[option A]":
    print("[Ce qui se passe s'ils choisissent l'option A]")
elif choice2 == "[option B]":
    print("[Ce qui se passe s'ils choisissent l'option B]")
else:
    print("[Ce qui se passe s'ils saisissent quelque chose d'inattendu]")

print()
print("Fin !")
```

{{% notice tip %}}
**Problèmes courants des élèves et leurs solutions :**

**"Ma condition if ne fonctionne jamais !"**
- Assurez-vous que la comparaison correspond exactement à ce que l'utilisateur tape. `"Pied"` n'est pas la même chose que `"pied"`. Astuce : utilisez `.lower()` pour gérer la capitalisation : `if choice1.lower() == "pied":`

**"Comment ajouter plus de choix ?"**
- Vous pouvez imbriquer des instructions if/else à l'intérieur les unes des autres pour créer des chemins ramifiés, ou ajouter des options supplémentaires avec `elif`. Chaque choix crée une nouvelle branche de l'histoire.

**"Comment rendre l'histoire plus longue ?"**
- Ajoutez plus d'instructions `print()` entre les choix pour raconter plus d'histoires. Vous pouvez également ajouter un troisième ou quatrième choix en utilisant le même modèle `input()` et `if/else`.
{{% /notice %}}

## Correspondance du Storyboard avec le Code

| Élément du Storyboard | Concept de Code |
|-----------------------|-----------------|
| Texte de l'histoire visible par le lecteur | `print("...")` |
| Le lecteur prend une décision | `choice = input("...")` |
| Différents chemins basés sur une décision | `if` / `elif` / `else` |
|