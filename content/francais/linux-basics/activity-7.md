---
title: "Activité 7 - Qu'est-ce qui ne va pas avec le fichier ?"
description: "Utilisez des commandes Linux pour lire le fichier sans l'ouvrir"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 10
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/tgciAD4hbyU" title="Activity 7 - What&#x27;s wrong with the file? - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Les logiciels malveillants peuvent être dangereux ! Ne l'ouvrez pas tout de suite ! Utilisons plutôt la ligne de commande pour y jeter un œil.
    </div>
</div>

{{% notice warning %}}
Pour les fichiers dont nous ne sommes pas sûrs, nous devons les examiner afin de ne pas ouvrir accidentellement un virus.
{{% /notice %}}

### Comment pouvons-nous regarder les premières lignes du fichier ?

Parfois, vous avez juste besoin de regarder le début d'un fichier. La commande `head` affiche les premières lignes d'un fichier.  
Le format est : `head [nom_du_fichier]`

{{% notice tip %}}
Si vous ajoutez l'option -n, vous pouvez spécifier le nombre exact de lignes que vous souhaitez voir.  
Le format est : `head -n [# de lignes] [nom_du_fichier]`
{{% /notice %}}

Essayez de regarder les 5 premières lignes de `malware.sh` !

![commande head](../images/Act7.1.png?classes=border,shadow)

### Comment pouvons-nous regarder les dernières lignes du fichier ?

Parfois, vous avez juste besoin de regarder la fin d'un fichier. La commande `tail` affiche les dernières lignes d'un fichier.  
Le format est : `tail [nom_du_fichier]`

{{% notice tip %}}
Si vous ajoutez l'option -n, vous pouvez spécifier le nombre exact de lignes que vous souhaitez voir.  
Le format est : `tail -n [# de lignes] [nom_du_fichier]`
{{% /notice %}}

Essayez de regarder les 5 dernières lignes de `malware.sh` !

![commande tail](../images/Act7.2.png?classes=border,shadow)

### Comment pouvons-nous regarder l'intégralité du fichier ?

Parfois, regarder les premières et dernières lignes d’un fichier peut nous permettre de comprendre qu’il est nécessaire de lire tout le fichier pour comprendre ce qu’il fait et comment agir en conséquence. Jetons un coup d'œil au contenu complet de `malware.sh` !

`cat` affiche le contenu d'un fichier.  
Le format est : `cat [nom_du_fichier]`

{{% notice tip %}}
`less` et `more` sont des commandes similaires à `cat`.

#### La commande more

`more` est une commande conçue pour les fichiers volumineux. Elle affiche autant de lignes que possible et vous appuyez sur Entrée pour voir la section suivante du fichier jusqu’à la fin.  
Le format est : `more [nom_du_fichier]`

![commande more](../images/Act7.3.png?classes=border,shadow)

#### La commande less

`less` est une commande utile pour naviguer en avant et en arrière dans différentes sections d’un fichier. Elle fonctionne de manière similaire à `more`, mais vous utilisez les flèches haut et bas pour vous déplacer. Pour quitter, appuyez sur 'q'.  
Le format est : `less [nom_du_fichier]`

![commande less](../images/Act7.4.png?classes=border,shadow)
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Que pensez-vous que fait malware.sh ? Ajoutez-le à votre rapport !
    </div>
</div>