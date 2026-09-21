```markdown
---
title: "Tout Mettre Ensemble"
draft: false
weight: 4
---

Votre bot est en ligne et LibreTranslate fonctionne. Maintenant, combinons-les afin que les amis de Nuvi puissent discuter dans différentes langues !

## Ce Que Vous Allez Construire

Votre bot deviendra un **assistant de traduction** qui :
- Détermine la langue utilisée par les gens dans leurs messages
- Traduit automatiquement les messages pour ceux qui en ont besoin
- Envoie les traductions en privé (pour ne pas encombrer le chat)
- Dispose d'une commande de secours `/translate` au cas où

{{< alert theme="info" >}}
<img src="../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dit :</strong> Ne vous inquiétez pas si cela semble beaucoup ! Nous l'avons divisé en petites étapes faciles à suivre.
{{< /alert >}}

## Avant de Commencer

Assurez-vous que :
- LibreTranslate est en fonctionnement (avec l'anglais et l'espagnol)
- Votre bot est en ligne (la commande `/hello` fonctionne)
- Le package `requests` est installé
- Le contenu des messages est activé dans Discord (pour que votre bot puisse lire les messages)


## Ce Que Vous Aurez Une Fois Terminé

Votre bot disposera des commandes suivantes :
- `/register_language` - S'inscrire aux traductions
- `/my_language` - Vérifier vos paramètres
- `/stop_translation` - Arrêter de recevoir des traductions
- `/translate` - Traduire manuellement un texte

## Testez Votre Bot

Après avoir tout construit :

1. **Inscrivez des utilisateurs** : Demandez à des amis de choisir différentes langues
2. **Envoyez des messages** : Observez les traductions apparaître dans les DM (messages privés)
3. **Essayez le mode manuel** : Testez `/translate` avec n'importe quelle phrase
4. **Désinscription** : Vérifiez que `/stop_translation` fonctionne

## Besoin d’Aide ?

| Problème                  | Où Regarder                         |
|---------------------------|-------------------------------------|
| Impossible de détecter les langues   | [Fonction de Détection de Langue](detect-language-function/) |
| Traduction non fonctionnelle         | [Fonction de Traduction de Texte](translate-text-function/) |
| Impossible de s'inscrire             | [Commandes d'Inscription](registration-commands/)          |
| Pas de traductions automatiques      | [Gestion des Messages](message-handling-and-translate/)    |
| Code complet souhaité                | [Code Complet du Bot](full-code/)                          |

---
```