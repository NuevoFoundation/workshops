---
title: "Jokers"
draft: false
weight: 8
---

## Jokers
Vous avez peut-être remarqué qu'il faut beaucoup de travail pour écrire une catégorie pour chaque façon dont un utilisateur pourrait poser une question. Par exemple, actuellement, le bot répond à "Bonjour" par "Bonjour, le monde". Mais que se passe-t-il si l'utilisateur dit "Bonjour à tous" ou "Bonjour chatbot" ? Nous devrions écrire une nouvelle catégorie pour chacun de ces cas. Heureusement, il existe des outils supplémentaires que nous pouvons utiliser pour rendre notre bot plus flexible. 
<img src="../img/party.png" alt="" width="25%" style="display: block; margin-left: 0;" />
L'un de ces outils est le **joker**. Un joker est un caractère spécial qui correspond à n'importe quel mot ou phrase. Voyons comment cela fonctionne.

```
<category>
    <pattern>HELLO *</pattern>
    <template>
        Salut !
    </template>
</category>
```

Le symbole ```*``` est capable de capturer 1 ou plusieurs mots dans l'entrée utilisateur. Avec cette nouvelle catégorie, le chatbot répondra désormais par "Salut !" à toute entrée qui commence par "Bonjour" suivie de n'importe quel mot. Ainsi, le modèle "HELLO *" correspondra à "HELLO THERE", "HELLO CHATBOT", "HELLO WORLD", "HELLO EVERYONE", et ainsi de suite.