```markdown
---
title: "Activité 1 - Déterminer le compte utilisateur"
description: "Utiliser une commande Linux pour déterminer quel utilisateur vous êtes"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/XAtCQ9S1vSI" title="Activité 1 - Déterminer le compte utilisateur - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Nous sommes maintenant dans la ligne de commande. Testons une commande simple qui nous montrera le compte utilisateur.
    </div>
</div>

## Qu'est-ce qu'un compte utilisateur ?

Chaque utilisateur sous Linux possède un compte utilisateur. Ils sont utilisés pour identifier de manière unique chaque utilisateur.

Par exemple, supposons que vous partagez un ordinateur avec votre ami, Nuvi. Vous et Nuvi pouvez créer des comptes utilisateurs séparés afin de savoir à qui appartiennent les fichiers et pour vous assurer que personne ne modifie accidentellement quelque chose d'important.

## Comment savoir quel compte j'utilise ?

La commande Linux `whoami` vous indique quel compte vous utilisez. Essayez-la !

```
whoami
```

<!---![home directory](../images/01_whoami.png?classes=border,shadow) --->
<img src="../images/01_whoami.png" alt="répertoire personnel" style="width:600px;"/>

Dans notre exemple ci-dessus, le terminal affiche le nom de notre utilisateur, `nuvi`.

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Maintenant que nous avons vérifié qui nous sommes, découvrons où nous sommes.
    </div>
</div>
```