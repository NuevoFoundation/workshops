---
title: "Jokers (Wildcards)"
draft: false
weight: 8
---

## Jokers (Wildcards)
Vous avez peut-être remarqué maintenant qu'il faut beaucoup de travail pour écrire une catégorie correspondant à toutes les façons possibles dont un utilisateur pourrait poser une question. Par exemple, actuellement, le bot répondra à "Hello" par "Hello, world". Mais que se passe-t-il si l'utilisateur dit "Hello there" ou "Hello chatbot" ? Nous devrions écrire une nouvelle catégorie pour chacun de ces cas. Heureusement, il existe des outils supplémentaires que nous pouvons utiliser pour rendre notre bot plus flexible.  
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />  
L'un de ces outils est le **joker** (*wildcard*). Un joker est un caractère spécial qui correspond à n'importe quel mot ou expression. Voyons comment il fonctionne.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Hi!
    </template>
</category>
```

Le symbole ```*``` est capable de capturer 1 ou plusieurs mots dans l'entrée utilisateur. Avec cette nouvelle catégorie, le chatbot répondra désormais avec "Hi!" à toute entrée commençant par "Hello" suivi de n'importe quel mot. Ainsi, le motif "HELLO *" correspondra à "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE", et ainsi de suite.