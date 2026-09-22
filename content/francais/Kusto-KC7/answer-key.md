---
title: "KC7 : Jeu Cyber Defender - Clé de Réponse"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Ceci est une référence pour les enseignants pour l'atelier KC7 Cyber Defender. Elle contient les solutions des requêtes KQL et leur méthodologie pour les Activités 2-4. Les résultats numériques exacts dépendent de la base de données active de SecurityLogs et peuvent varier entre les sessions.

Des vidéos explicatives sont également disponibles pour l'Activité 3.5 (réponses KQL 101) et l'Activité 4.5 (Attraper le Pirate).

Les réponses des Bonus 1 et Bonus 3 sont vérifiées sur le tableau de bord KC7. Le Bonus 2 est un exercice d'analyse ouvert sans clé de réponse fixe.
{{% /notice %}}

## Activité 2 : Jeu sur le Renseignement des Menaces (Qui est le coupable)

Trois questions d'attribution basées sur des scénarios. Les étudiants identifient le type d'adversaire.

| Question | Scénario | Réponse | Raisonnement |
|----------|----------|---------|--------------|
| 1 | Opérations cybernétiques alignées sur le gouvernement | **C. Parrainé par une nation** | Ciblé, bien financé, politiquement motivé |
| 2 | Attaque motivée par un intérêt financier | **B. Cybercriminel** | Motivé par l'argent, ciblage indiscriminé |
| 3 | Campagne cybernétique dirigée par un État | **C. Parrainé par une nation** | Parrainé par un gouvernement, ciblage sélectif, à long terme |

{{% notice tip %}}
Regardez la vidéo de l'Activité 2 pour des exemples concrets détaillés derrière chaque scénario, y compris l'étude de cas POLONIUM.
{{% /notice %}}

## Activité 3 : KQL 101

Ces questions enseignent les opérateurs KQL de base en utilisant la base de données **SecurityLogs**. Les requêtes ci-dessous présentent l'approche correcte ; les valeurs exactes des résultats dépendent des données actives.

### Question 1 : Explorer toutes les tables avec `take`

```KQL
Employees
| take 10

Email
| take 10

OutboundBrowsing
| take 10

PassiveDns
| take 10

AuthenticationEvents
| take 10

FileCreationEvents
| take 10

ProcessEvents
| take 10

SecurityAlerts
| take 10
```

**Objectif :** Les étudiants explorent le schéma de chaque table pour comprendre les colonnes et types de données disponibles.

### Question 2 : Combien d'employés y a-t-il dans l'entreprise ?

```KQL
Employees
| count
```

**Concept attendu :** L'opérateur `count` retourne le nombre total de lignes dans la table. Chaque ligne représente un employé.

### Question 3 : Quel employé a l'adresse IP 192.168.0.191 ?

```KQL
Employees
| where ip_addr == "192.168.0.191"
```

**Concept :** L'opérateur `where` filtre les lignes. L'opérateur `==` vérifie une correspondance exacte.

### Question 4 : Combien d'emails Betty Parrish a-t-elle reçus ?

```KQL
Email
| where recipient == "betty_parrish@envolvelabs.com"
| count
```

**Concept :** Filtrer la table Email par la colonne des destinataires, puis compter les résultats. Le format des emails suit `prenom_nom@envolvelabs.com`.

### Question 5 : Combien d'utilisateurs ont reçu des emails contenant "vaccine" dans l'objet ?

```KQL
Email
| where subject has "vaccine"
| distinct recipient
| count
```

**Concept :** Enchaîner plusieurs opérateurs : `where` pour filtrer, `distinct` pour supprimer les doublons, et `count` pour totaliser. L'opérateur `has` effectue une correspondance de terme complet (basée sur les limites des mots), il trouve donc "vaccine" en tant que mot entier dans la ligne sujet.

### Question 6 : Combien de sites web uniques Keith Mitchell a-t-il visités ?

Cela nécessite un **pivotement** entre deux tables :

```KQL
// Étape 1 : Trouver l'adresse IP de Keith Mitchell
Employees
| where name == "Keith Mitchell"
```

```KQL
// Étape 2 : Utiliser son IP pour interroger OutboundBrowsing
OutboundBrowsing
| where src_ip == "[IP de Keith issue de l'étape 1]"
| distinct url
| count
```

Ou, en utilisant une instruction `let` pour combiner les deux étapes :

```KQL
let keith_ip = Employees
| where name == "Keith Mitchell"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (keith_ip)
| distinct url
| count
```

**Concept :** Pivotement : utiliser les données d'une table (Employees) pour interroger une autre table (OutboundBrowsing). C'est une compétence clé en analyse cybernétique.

### Question 7 : Combien de domaines dans PassiveDns contiennent "vaccine" ?

```KQL
PassiveDns
| where domain contains "vaccine"
| distinct domain
| count
```

**Concept :** On a besoin de l'opérateur `contains` (et non pas `has`), car "vaccine" peut apparaître comme une partie d'un nom de domaine plus long.

### Question 8 : À quelles adresses IP "biotechenvolv.science" a-t-il résolu ?

```KQL
PassiveDns
| where domain == "biotechenvolv.science"
```

**Concept :** Examinez la colonne des adresses IP des résultats pour voir toutes les adresses IP associées à ce domaine.

### Question 9 : Combien d'URLs uniques ont été visitées par des employés nommés "Karen" ?

```KQL
let karen_ips = Employees
| where name has "Karen"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (karen_ips)
| distinct url
| count
```

**Concept :** Cela combine une instruction `let` avec du pivotement. Le `let` stocke les résultats de la première requête (les IP de Karen) pour pouvoir les réutiliser dans la seconde requête.

{{% notice tip %}}
**Conseil aux enseignants :** L'instruction `let` est l'un des schémas les plus puissants de KQL. Encouragez les élèves à nommer leurs variables de manière descriptive (comme `karen_ips` plutôt que `x`) pour rendre les requêtes plus lisibles.
{{% /notice %}}

### Référence rapide KQL 101

| Opérateur