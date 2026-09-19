```markdown
---
title: "Salle 9 : Le Bastion de la Sécurité"
description: "Renforcez votre dépôt avec les fonctionnalités de sécurité de GitHub."
difficulties: ["avancé"]
weight: 9
---

Vous entrez dans une salle remplie de mesures de sécurité. Des serrures, des boucliers et des moniteurs de sécurité vous entourent. Une voix austère déclare : "Sécurisez votre code pour progresser !"

## Votre Mission

1. Activez les alertes Dependabot pour votre dépôt.
2. Ajoutez une politique de sécurité à votre dépôt.
3. Exécutez une alerte de scan de code à l'aide de GitHub Actions (si votre dépôt est public).

## Instructions

1. Accédez à l'onglet "Paramètres" de votre dépôt.
2. Cliquez sur "Sécurité & analyse" dans la barre latérale gauche.
3. Activez les alertes Dependabot.
4. Dans votre dépôt, créez un nouveau fichier à l'emplacement `.github/SECURITY.md`.
5. Ajoutez des directives de sécurité de base à ce fichier.
6. Si votre dépôt est public, activez l'analyse de code dans les paramètres "Sécurité & analyse".

{{< notice danger >}}
**Important :** Soyez toujours prudent lors de la configuration des paramètres de sécurité. Assurez-vous de bien comprendre chaque fonctionnalité avant de l'activer.
{{< /notice >}}

{{< expand "Exemple de Politique de Sécurité" >}}

# Politique de Sécurité

## Signaler une vulnérabilité

Si vous découvrez une vulnérabilité de sécurité au sein de ce projet, veuillez envoyer un e-mail à security@example.com. Toutes les vulnérabilités seront prises en charge rapidement.

## Versions prises en charge

Utilisez cette section pour informer les utilisateurs des versions de votre projet qui sont actuellement prises en charge avec des mises à jour de sécurité.

| Version | Prise en charge    |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

{{< /expand >}}
Après avoir configuré votre politique de sécurité, quelle adresse e-mail avez-vous spécifiée pour signaler les vulnérabilités ? Entrez-la ci-dessous :

<label for="finput">Champ de saisie pour l'adresse e-mail :</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Bien joué, expert en sécurité ! Vous avez fortifié votre dépôt. Passez au dernier défi !
{{< /notice >}}
```