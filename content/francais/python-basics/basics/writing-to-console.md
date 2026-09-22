```yaml
---
title: "Écrire sur la console (Instruction print)"
date: 2022-09-19T14:45:38-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe title="Écrire sur la console (Instruction print) - Vidéo YouTube" width="560" height="315" src="https://www.youtube.com/embed/NrbQCjlzhYc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Faites parler votre programme !

Les instructions **print** sont utilisées pour écrire quelque chose sur la console. Utilisez `print("Hello World")` pour afficher *Hello World* dans l'écran de sortie. Nous apprendrons plus tard que `print` est une fonction que nous utilisons pour effectuer une tâche d'impression. Tout ce que vous passez à la fonction `print` est affiché à l'écran. 
Commençons par exécuter une instruction `print`.

Nous utiliserons beaucoup l'impression dans les leçons suivantes, alors assurez-vous de bien comprendre cela avant de passer au concept suivant !

### Défi 1
Pour commencer, écrivez le texte suivant dans votre fichier main.py de Codebunga et cliquez sur Exécuter.

```python
print("Hello, World!")
```

Regardez votre console afficher "Hello, World!" sur l'écran à droite ! `print` indique à l'ordinateur d'afficher la phrase contenue entre les parenthèses `()` dans la fenêtre de console, ou sur l'écran situé à droite.

![texte alternatif](../../img/print.png "hello world en python!")

<iframe title="Défi 1 - Codebunga" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

{{% notice tip %}}
### Utiliser des « " » avec l'impression

Avez-vous remarqué que Hello, World! était entouré de `"` ? Avez-vous essayé sans les marques `"` pour voir qu'une erreur se produisait ? Mais, si vous avez essayé `print(123)`, vous constaterez que cela fonctionne sans aucune erreur. C'est parce que le texte (ce qu'on appelle des chaînes de caractères dans les langages de programmation) exige que vous indiquiez qu'il s'agit de texte en l'entourant de guillemets. Mais les nombres, eux, n'en ont pas besoin.

Revenez et essayez d'imprimer différentes choses !
{{% /notice %}}

### Défi 2

1. Sans enlever les guillemets, essayez de changer `"Hello, World"` par une autre phrase (Par exemple – `"Je m'appelle Nuvi !"`). Appuyez sur **Exécuter** pour voir si quelque chose change.
2. Ajoutez une autre commande print sous la ligne actuelle pour afficher une deuxième phrase sous la première.
3. Appuyez sur **Exécuter** pour voir si deux phrases sont affichées.

<iframe title="Défi 2 - Codebunga" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

Nous utiliserons beaucoup l'impression dans les leçons suivantes, donc assurez-vous de bien comprendre cela avant de continuer !

{{% notice warning %}}

## AU SECOURS ! J'ai beaucoup de texte rouge !

Si vous voyez du texte rouge, vous avez rencontré des erreurs ! N’hésitez pas à demander de l’aide. En particulier, faites attention aux points suivants lorsque vous codez en Python :

1. Assurez-vous que la phrase que vous souhaitez imprimer est **entourée de guillemets** et que la phrase est **à l'intérieur des parenthèses**.

![Exemple montrant une instruction print incorrecte (sans guillemets - print(Hello, World!)) et correcte (avec guillemets - print('Hello, World!'))](../../img/redLine.png)

2. Les espaces en Python sont très importants. Assurez-vous de ne pas avoir d'espaces ou d'onglets inutiles au début ou à la fin de chaque ligne, car Python ne sera pas en mesure de lire le code dans le cas contraire. Par exemple, ne mettez pas d'espaces avant `print`, ni d'espaces après la dernière parenthèse dans `print("Hello, World!")`.

{{% /notice %}}
```