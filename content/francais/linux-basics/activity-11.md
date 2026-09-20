```markdown
---
title: "Activité 11 - Stocker et protéger les fichiers"
description: "Utilisez des commandes Linux pour compresser et archiver des fichiers."
date: 2022-09-23
prereq: "Aucun."
difficulties: ["intermédiaire"]
weight: 14
---

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Merci beaucoup de nous avoir aidés à réparer ma machine ! Maintenant, emballons tout cela dans un joli paquet.
    </div>
</div>

### Sécurisez vos fichiers pour qu'ils ne soient plus altérés

`tar` est une commande qui crée et extrait des fichiers archivés.

{{% notice info %}}
Une archive est une collection de fichiers archivés. Un fichier d'archive contient les données compressées d'un ou plusieurs fichiers.

`zip` est une commande qui compresse un ensemble de fichiers. Le format est : `zip [nom du fichier zip] [noms des fichiers à compresser]`

{{% /notice %}}

Le format est : `tar [noms des fichiers]`.

| flags | Utilisations                         |
| :---- | :----------------------------------- |
| -c    | crée une archive                     |
| -x    | extrait une archive                  |
| -f    | crée une archive avec un nom donné   |

Utilisez `tar` pour sécuriser votre répertoire de `files` ! Vous allez vouloir créer une archive avec le nom `files.tar.gz`.

![commande tar](../images/Act11.png?classes=border,shadow)
```