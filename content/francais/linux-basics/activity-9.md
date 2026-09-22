---
title: "Activité 9 - Supprimer le Mauvais Fichier"
description: "Utilisez les commandes Linux pour supprimer le mauvais fichier et le répertoire"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 12
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" title="Activité 9 - Supprimer le Mauvais Fichier - Vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Alors malware.sh est définitivement un mauvais fichier laissé par les pirates. Nous devons le supprimer ainsi que le répertoire qui le contient !
    </div>
</div>

## Supprimez le mauvais fichier !

`rm` est une commande qui permet de supprimer des fichiers.  
Le format est : `rm [nom du fichier]`.

{{% notice warning %}}
`rm` supprime définitivement le fichier.
{{% /notice %}}

Supprimez le fichier que nous avons décidé d'être à l'origine de nos problèmes. Comment pouvez-vous vérifier que le fichier a été complètement supprimé ?

![commande rm](../images/Act9.1.png?classes=border,shadow)

----

## Et si nous devons supprimer un répertoire ?

`rmdir` est une commande qui peut supprimer un répertoire vide.  
Le format est : `rmdir [nom du répertoire]`.

{{% notice warning %}}
`rmdir` supprime définitivement le répertoire.
{{% /notice %}}

Comment pouvez-vous supprimer le répertoire dans lequel se trouvait le mauvais fichier ?

![commande rmdir](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
La suppression de fichiers peut être une opération dangereuse, en particulier sur Linux. Assurez-vous d’être absolument certain que le fichier que vous voulez supprimer peut être retiré en toute sécurité. En supprimant le mauvais fichier, vous pourriez accidentellement endommager votre ordinateur.  
{{% /notice %}}

Vous souvenez-vous de la commande pour recréer le répertoire que nous avons supprimé ?

![commande mkdir](../images/Act9.3.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Maintenant, allons vérifier si nous connaissons une commande pour restaurer le fichier secret-message.txt...
    </div>
</div>