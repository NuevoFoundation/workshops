```markdown
---
title: "Lecture depuis la console"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 6
prereq: "Principes de base de Python : Variables"
difficulties: ["intermédiaire"]
---

Maintenant que nous connaissons les bases des variables, nous pouvons demander une saisie à l'utilisateur. Utilisez la ligne suivante pour indiquer à notre programme d'attendre que l'utilisateur tape quelque chose dans la console. Ensuite, l'ordinateur prend ce qui est tapé dans la console et le stocke dans la variable appelée **value**.

```python
value = input()
```

Voici un exemple de la manière d'utiliser `input()` pour accepter une saisie utilisateur :

```python
print("Quel est ton nom ?")
value = input()
print("Bonjour " + value + "!")
```

Essayez-le ! Lorsque vous exécutez le programme, vous remarquerez que l'image ci-dessous n'apparaît pas encore dans la console.

![Capture d'écran du symbole de fin de console](../../img/end_symbol.png "image du symbole de fin de console")

![Capture d'écran du terminal en attente de saisie utilisateur](../../img/console_read_waiting.png "image de la console en attente de saisie utilisateur")

Cela est dû au fait que le programme attend que vous saisissiez quelque chose ! Entrez votre nom ou "Nuvi" dans la console à droite, appuyez sur Entrée et vérifiez que cela s’affiche correctement.

![Capture d'écran du terminal après que l'utilisateur a entré une saisie et que le programme s'est terminé](../../img/console_read_input.png "image de la console après saisie utilisateur")

{{% notice note %}}

Même si nous saisissons un nombre, tel que `8`, la variable value contiendra la chaîne `"8"`. Soyez prudent lorsque vous essayez d'effectuer des calculs sur des variables d'entrée !

{{% /notice %}}

## Défi

Essayons d'écrire un programme qui affiche d'abord les deux lignes suivantes sur la console :

    Bienvenue !
    Comment puis-je vous aider aujourd'hui ?

Ensuite, la console attend une saisie utilisateur. Après que l'utilisateur ait tapé quelque chose dans la console et appuyé sur _Enter_, l'ordinateur affiche :

    Vous avez demandé : [input] ?
    Je ne connais pas la réponse à [input]. Au revoir !

`[input]` doit être remplacé par ce que l'utilisateur a saisi dans la console. Par exemple, si vous souhaitez poser la question "Quel âge ai-je ?", l'ordinateur affichera qu'il ne connaît pas la réponse à cette question.

{{% notice tip %}}

Ceci est très similaire à l'exemple que nous avons vu ensemble ci-dessus. Essayez d'apporter quelques petites modifications à ce que nous vous avons déjà donné.

{{% /notice %}}

<iframe title="Défi - Codebunga" src="https://codebunga.com/embed/wamnbqtn" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
```