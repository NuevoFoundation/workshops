```markdown
---
title: "Chatbot - Clé de Réponses"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Voici des solutions d'exemple pour les activités de l'atelier chatbot. Les modèles AIML doivent être écrits en MAJUSCULES. Les réponses des templates peuvent utiliser toute capitalisation que vous préférez. Les réponses de votre chatbot peuvent différer de ces exemples tant que le fonctionnement du correspondance de modèles est correct !
{{% /notice %}}

## Activité 2 : Hello World

Voici la catégorie de départ fournie dans le tutoriel :

```xml
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Lorsque l'utilisateur tape "Hello", le bot répond "Hello, World!"

## Activité 3 : Ajoutez Vos Propres Catégories

### 1. Quel est votre nom ?

```xml
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

### 2. Quelle est votre couleur préférée ?

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. Quel est votre plat préféré ?

```xml
<category>
    <pattern>WHAT IS YOUR FAVORITE FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

{{% notice tip %}}
**Règles clés pour les modèles :**
- Toujours écrire les modèles en MAJUSCULES
- Ne pas inclure de ponctuation dans les modèles (Pandorabots supprime la ponctuation de l'entrée utilisateur avant de chercher une correspondance)
- Les réponses des templates peuvent utiliser toute capitalisation
{{% /notice %}}

À ce stade, votre bot devrait répondre à :

| L'utilisateur dit | Le bot répond |
|-------------------|---------------|
| Hello             | Hello, World! |
| What is your name?| My name is Chatbot. |
| What is your favorite color? | My favorite color is blue. |
| What is your favorite food? | My favorite food is pizza. |

## Activité 4 : Jokers

Le caractère générique `*` correspond à un ou plusieurs mots. En plaçant `*` au début d'un modèle, le bot répond à toute question qui **se termine par** le mot-clé.

### 1. Toute question se terminant par "food" 

```xml
<category>
    <pattern>* FOOD</pattern>
    <template>
        My favorite food is pizza.
    </template>
</category>
```

### 2. Toute question se terminant par "color" 

```xml
<category>
    <pattern>* COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>
```

### 3. Toute question se terminant par "name" 

```xml
<category>
    <pattern>* NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>
```

{{% notice tip %}}
**Question fréquente des étudiants :** "Ai-je encore besoin des catégories de l’Activité 3 ?"

Vous pouvez conserver les deux ! Pandorabots correspond d'abord au modèle le plus spécifique. Ainsi "WHAT IS YOUR FAVORITE FOOD" (correspondance exacte) a la priorité sur "* FOOD" (joker). Les catégories avec joker répondent aux questions que vous n'avez pas explicitement écrites, comme "Do you like food?" ou "Tell me about food".
{{% /notice %}}

À présent, le bot répond à beaucoup plus d'entrées :

| L'utilisateur dit       | Correspond au modèle       | Le bot répond        |
|-------------------------|----------------------------|----------------------|
| What is your favorite food? | WHAT IS YOUR FAVORITE FOOD | My favorite food is pizza. |
| Do you like food?       | * FOOD                   | My favorite food is pizza. |
| Tell me about food      | * FOOD                   | My favorite food is pizza. |
| What is your name?      | WHAT IS YOUR NAME        | My name is Chatbot. |
| Do you have a name?     | * NAME                  | My name is Chatbot. |

## Activité 5 : Joker avec écho

La balise `<star />` capture tout ce que le joker `*` a correspondu et l'intègre dans la réponse du bot.

### 1. "Mon nom est [nom]" répond par "Enchanté de vous rencontrer, [nom] !"

```xml
<category>
    <pattern>MY NAME IS *</pattern>
    <template>
        Nice to meet you, <star />!
    </template>
</category>
```

### 2. "Ma couleur préférée est [couleur]" répond par "J'aime aussi [couleur] !"

```xml
<category>
    <pattern>MY FAVORITE COLOR IS *</pattern>
    <template>
        I also like <star />!
    </template>
</category>
```

### 3. "Mon plat préféré est [plat]" répond par "[plat]! Miam !"

```xml
<category>
    <pattern>MY FAVORITE FOOD IS *</pattern>
    <template>
        <star />! Yum!
    </template>
</category>
```

Comment fonctionne `<star />` :

| L'utilisateur dit        | `*` capture              | Le bot répond          |
|--------------------------|--------------------------|------------------------|
| My name is John          | John                    | Nice to meet you, John!|
| My name is Jane          | Jane                    | Nice to meet you, Jane!|
| My favorite color is blue| blue                    | I also like blue!      |
| My favorite color is red | red                     | I also like red!       |
| My favorite food is pizza| pizza                   | pizza! Yum!            |
| My favorite food is sushi| sushi                   | sushi! Yum!            |

## Fichier AIML Complet

Voici à quoi devrait ressembler votre fichier complet `greetings.aiml` après toutes les activités :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<aiml>

<!-- Activité 2 : Hello World -->
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>

<!-- Activité 3 : Catégories de base -->
<category>
    <pattern>WHAT IS YOUR NAME</pattern>
    <template>
        My name is Chatbot.
    </template>
</category>

<category>
    <pattern>WHAT IS YOUR FAVORITE COLOR</pattern>
    <template>
        My favorite color is blue.
    </template>
</category>

<category>
    <pattern>