---
title: "Exécution de la Traduction sur Votre Ordinateur"
draft: false
weight: 3
---

Le bot de Nuvi peut répondre, mais il ne peut pas encore aider les amis à se comprendre. Dans cette section, vous allez installer un programme qui peut exécuter la traduction *localement* sur votre ordinateur—sans besoin de comptes externes—afin que le bot devienne le pont multilingue imaginé par Nuvi.

Vous l’utiliserez pour :
- Tester la commande manuelle `/translate`
- Détecter si un message est en anglais ou en espagnol (point d’accès `/detect`)
- Traduire automatiquement les messages pour les utilisateurs enregistrés (point d’accès `/translate`)

Configurons maintenant le moteur de traduction pour que le bot puisse s'y connecter.

---

## 1. Qu'est-ce que LibreTranslate ?
LibreTranslate est un programme de traduction libre et open‑source (créé par la communauté) que vous exécutez localement. Pas de compte requis. Pas d’abonnement cloud. Vous lui donnez un texte dans une langue et il le renvoie dans une autre.

Pourquoi est-il utile pour cet atelier :
- **Confidentialité** : votre texte reste sur votre machine.
- **Contrôle** : vous choisissez les langues et quand effectuer les mises à jour.
- **Utilisation hors ligne** : après le premier téléchargement des données linguistiques, il peut fonctionner sans internet.
- **Open source** : vous pouvez examiner son fonctionnement ou même y contribuer.

Considérez-le comme un petit site web local doté d’une **API** que votre bot utilisera pour deux fonctionnalités :
1. Détecter la langue dans laquelle un message est rédigé (`/detect`)
2. Traduire le message dans une autre langue (`/translate`)

Cela alimentera la fonctionnalité de traduction automatique plus tard.

### Qu’est-ce qu’une API ?
Une API est comme un menu pour un programme. Elle répertorie les "points d’accès" (URL) que vous pouvez appeler et ce que vous recevez en retour. Quand vous visitez `http://127.0.0.1:5000/translate` avec les bonnes données, l’API de LibreTranslate répond avec le texte traduit. Votre bot va **envoyer une requête** (votre texte + choix de langues) et **recevoir une réponse** (le texte traduit) — tout comme commander un plat et recevoir une assiette.

---



<details open>
<summary>Sujets</summary>
{{% children /%}}
</details>