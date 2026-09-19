```markdown
---
title: "C : Le processus de débogage"
description: "Une introduction au débogage des programmes"
date: 2026-04-25T00:00:00-07:00
prereq: "C"
icon: ""
draft: false
alwaysopen: false
language: "c"
topics: ["programming-basics"]
difficulties: ["intermediate"]
---

## Introduction

Alors, vous avez appris les bases d’un langage de programmation. Vous avez probablement maîtrisé l’art de `“Hello World”` et avez soit commencé un projet personnel, soit suivi suffisamment de tutoriels pour être capable de transformer une idée en code.

Cependant, que se passe-t-il lorsque votre code échoue à se compiler ? Les débutants en programmation effectuent généralement des recherches en ligne pour voir si d’autres ont rencontré des problèmes similaires. C'est un peu fastidieux, car vous devrez consulter Internet à chaque fois que vous rencontrerez une erreur.

Que se passe-t-il lorsque votre programme se compile, mais ne fonctionne pas comme vous l'attendiez ? (c.-à-d., vous avez trouvé **un bug ? 🪲)**

Revenir corriger votre code peut être un défi plus difficile que d’écrire le code lui-même. Apprendre à naviguer parmi ces bugs et erreurs demande des compétences, de la patience et de l’expérience. Dans cet atelier, nous allons démystifier le processus de base pour déboguer votre code. Rappelez-vous que le débogage fait partie de tous les langages de programmation.

{{% panel theme="info" header="Pourquoi l'appeler un bug ?" %}}
Le premier bug de programmation enregistré remonte à 1947 lorsqu’un papillon de nuit a décidé de se trouver au mauvais endroit. Consultez <a href="https://education.nationalgeographic.org/resource/worlds-first-computer-bug" target="_blank">Le tout premier bug informatique.</a>

{{% /panel %}}

## À propos de cet atelier

Cet atelier suppose que vous comprenez et que vous pouvez écrire du code en langage **C**. Les exemples utilisés dans cet atelier font usage de structures de données et d’algorithmes, des sujets généralement enseignés dans un cours d’introduction à l’informatique. Nous en donnerons une brève explication, mais elle est destinée à rafraîchir votre mémoire afin que vous ayez une idée de ce que fait le code exemple. Cet atelier suppose également que vous possédez déjà un compte [Replit](https://replit.com) et que vous êtes à l’aise avec Replit.

## Replit et la ligne de commande

Essayons d’utiliser Replit pour exécuter du code et nous familiariser davantage avec la ligne de commande. Cliquez sur le bouton "Lancer Replit" ci-dessous, et créez un fork du programme. Lorsque le programme Replit s’ouvre, ouvrez l’onglet **Shell**.

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/Debugging-Samples-C" target="_blank">Lancer Replit</a>

Commençons par compiler notre code. Dans l'onglet shell, tapez la commande suivante et cliquez sur **ENTRÉE** :

```bash
make HelloWorld
```

Après avoir compilé notre code, nous devons utiliser une commande différente pour l’exécuter. Tapez la commande suivante et cliquez sur **ENTRÉE** :

```bash
./examples/HelloWorld
```

Vous devriez voir le texte `Hello, World!` affiché dans la fenêtre shell !

{{% panel theme="info" header="Pourquoi utiliser la ligne de commande ?" %}}

La ligne de commande peut sembler non intuitive et peu conviviale pour les débutants. Cependant, savoir l’utiliser est extrêmement important pour votre carrière en programmation. Nous l’utiliserons pour exécuter `gdb` et `valgrind` plus tard dans l’atelier, donc plus vous aurez d’expérience avec elle, mieux ce sera !

Les exemples ont été écrits sur un seul Replit. Nous vous fournirons toutes les commandes que vous devez connaître pour les compiler et les exécuter, alors ne vous inquiétez pas si vous n’avez pas encore utilisé la ligne de commande.

{{% /panel %}}

## Contenu de l'atelier

{{% children /%}}
```