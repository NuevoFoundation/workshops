```markdown
---
title: "Démarrage de la machine virtuelle"
description: "Poursuite du guide introductif pour utiliser les machines virtuelles"
date: 2022-09-23
difficulties: ["intermédiaire"]
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/eqHr7UeKs70" title="Démarrage de la machine virtuelle - vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Une photo de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Maintenant que tout est installé, lançons la machine virtuelle !
    </div>
</div>

## Démarrer la VM

C'est assez simple dans VirtualBox. Il suffit de double-cliquer sur la VM que nous avons créée à l'étape précédente, et c'est parti !  
![lancer virtual box kali](../images/start-01.PNG?classes=border,shadow)

Lorsque la machine virtuelle démarre, elle peut afficher quelques avertissements, comme dans l'image suivante. Vous pouvez les ignorer en toute sécurité.

![avertissements virtual box kali](../images/start-02.PNG?classes=border,shadow)

## Se connecter à la VM

Tout d'abord, vous devrez vous connecter. Utilisez ces *identifiants* pour commencer !

| Nom d'utilisateur | Mot de passe |
| :---------------: | :----------: |
|       nuvi        |   nuevo123   |

{{% notice warning %}}
Ce n'est pas une bonne pratique de sécurité ! Ces identifiants sont uniquement destinés à cet atelier.  
Veuillez ne pas utiliser des mots de passe simples comme celui-ci pour vos comptes personnels !

Apprenez-en davantage sur les mots de passe dans notre atelier sur la sécurité !

<a class="my-2 mx-4 btn btn-info" target="_blank" href="https://workshops.nuevofoundation.org/security/">Lien vers l'atelier sur la sécurité</a>
{{% /notice %}}

![page de connexion kali](../images/start-03.PNG?classes=border,shadow)

## Le Terminal

Dans toutes nos activités, nous pratiquerons les compétences liées à l'**interface en ligne de commande** (CLI). Il est utile d'apprendre la CLI car elle peut être plus rapide et plus efficace que l'utilisation d'une interface graphique (GUI). Une GUI est une **interface utilisateur graphique**, probablement ce que vous utilisez le plus souvent. Ouvrez le terminal, un autre nom pour la CLI.  
Dans Kali, cette application est appelée "Terminal Emulator".  

![trouver le terminal kali](../images/start-04.PNG?classes=border,shadow)

Après avoir cliqué sur le bouton, le terminal devrait s'ouvrir comme dans l'image ci-dessous. Une fois ouvert, vous êtes enfin prêt à commencer les activités Linux !

![terminal kali ouvert](../images/start-05.PNG?classes=border,shadow)
```