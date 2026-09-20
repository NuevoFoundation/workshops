```markdown
---
title: "Activité 10 - Déplaçons et remplaçons"
description: "Utilisez les commandes Linux pour déplacer et copier des fichiers"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 13
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" title="Activité 10 - Déplaçons et remplaçons - vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Super, maintenant que le fichier malveillant des hackers ne nous causera plus de soucis, restaurons l'ancien fichier pour que tout fonctionne à nouveau correctement.
    </div>
</div>

### Comment réparer le message-secret

La commande `mv` peut également être utilisée pour remplacer le fichier de destination par le fichier source.  
Le format est : `mv [nom du fichier source] [nom de destination]`.

Remplacez le message secret endommagé par la sauvegarde que nous avons trouvée plus tôt.  
Déplaçons le fichier dans le nouveau répertoire que nous avons créé.

![commande mv](../images/Act10.1.png?classes=border,shadow)

---

### Sauvegardez vos fichiers

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Ce fichier de sauvegarde nous a bien aidés à réparer le fichier modifié. Créons maintenant une sauvegarde des fichiers dans notre répertoire.
    </div>
</div>

`cp` est une commande qui copie un fichier d'un emplacement à un autre.  
Le format est : `cp [nom du fichier source] [nom du fichier de destination]`.

Faites une copie du fichier que vous avez créé et du `secret-message.txt`.

![commande cp](../images/Act10.2.png?classes=border,shadow)
```