---
title: "Jokers (Wildcards)"
draft: false
weight: 8
---

## Jokers (Wildcards)
Vous avez peut-être remarqué qu'écrire une catégorie pour chaque manière possible dont un utilisateur pourrait poser une question demande beaucoup de travail. Par exemple, actuellement, le bot répond à "Hello" par "Hello, world". Mais que se passe-t-il si l'utilisateur dit "Hello there" ou "Hello chatbot" ? Nous devrions écrire une nouvelle catégorie pour chacun de ces cas. Heureusement, il existe des outils supplémentaires que nous pouvons utiliser pour rendre notre bot plus flexible. 
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
L'un de ces outils est le **joker** (wildcard). Un joker est un caractère spécial qui correspond à n'importe quel mot ou expression. Voyons comment cela fonctionne.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Salut!
    </template>
</category>
```

Le symbole ```*``` est capable de capturer 1 ou plusieurs mots dans l'entrée utilisateur. Avec cette nouvelle catégorie, le chatbot répondra désormais par "Salut!" à toute entrée commençant par "Hello" suivie de n'importe quel mot. Ainsi, le modèle ("pattern") "HELLO *" correspondra à "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE" et ainsi de suite.