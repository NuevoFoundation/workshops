```markdown
---
title: "Activité 6 - Un mauvais fichier"
description: "Utilisez les commandes Linux pour rechercher"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 9
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" title="Activity 6 - A BAD File - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Je sais que j'avais un fichier secret-message.txt avec l'une de mes citations préférées dedans. "Faire ou ne pas faire. Il n'y a pas d'essai." Peux-tu m'aider à le retrouver ?
    </div>
</div>

### Rechercher un motif dans un fichier ?

`grep` (**g**lobal search for **r**egular **e**xpression and **p**rint the result) est une commande utilisée pour rechercher du texte dans des fichiers. Il existe différents drapeaux ou options qui peuvent modifier son utilisation.

Le format est : `grep [drapeau] “[motif]” [nom du fichier]`.

| Drapeaux | Usages                                                           |
| :------- | :-------------------------------------------------------------- |
| -c       | Pour obtenir le nombre de fichiers contenant le motif.           |
| -i       | Pour rendre la recherche insensible à la casse. “uNiX” équivaut à “unix” |
| -n       | Pour retourner les lignes correspondantes avec leurs numéros.    |
| -R       | Rechercher dans tous les fichiers du répertoire actuel.          |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Pratiquons cette commande pour retrouver mon secret-message.txt !
    </div>
</div>

Essayons la commande suivante :

```
cd
grep -R "Faire ou ne pas faire. Il n'y a pas d'essai."
```

![Commande grep](../images/Act6.1.png?classes=border,shadow)

---

### Pourquoi le fichier secret-message a-t-il cet aspect ?

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Tu te souviens de ce fichier que nous avons vu avec un nom étrange ? Il s'appelait malware.sh. Nous devrions y jeter un œil de plus près. Je pense que les hackers ont laissé ça !
    </div>
</div>

`find` est une commande utilisée pour rechercher un fichier avec certains paramètres dans un répertoire ou une région de fichiers. Elle peut être utilisée de plusieurs manières, notamment :

- Rechercher un fichier avec un nom spécifique  
  Le format est : `find [répertoire] -name [nom du fichier]`
- Rechercher tous les fichiers avec une extension spécifique (par exemple, fichiers texte se terminant par .txt)  
  Le format est : `find [répertoire] -name *.txt`

Utilisez la commande `find` pour rechercher le fichier dans le répertoire actuel. Existe-t-il une commande que nous pouvons utiliser pour savoir quel est le répertoire actuel ?

![Commande find](../images/Act6.2.png?classes=border,shadow)
```