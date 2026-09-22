```markdown
---
title: "Prérequis pour le code"
draft: false
weight: 2
---

Nuvi ne peut pas encore inviter un bot traducteur — il n'y a pas d'environnement de code configuré ! Préparons votre ordinateur. Vous allez installer Python, configurer un environnement virtuel (une "bulle" sécurisée pour les packages de votre projet), installer VS Code (votre éditeur de code) et créer les fichiers de démarrage. Une fois cette base prête, vous commencerez à écrire le bot qui aide tout le monde à se comprendre.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dit :</strong> Choisissez Python 3.10 pour que les parties traducteur s’installent sans problème — les futures mises à jour seront plus faciles une fois que tout fonctionnera maintenant !
{{< /alert >}}

## 1. Installer Python
Installez **Python 3.10** (une version 3.10.x, comme 3.10.14) à partir du site officiel.
- Windows & macOS : https://www.python.org/downloads/
- (Certains Chromebooks peuvent nécessiter le mode Linux ; demandez à un adulte ou un enseignant.)

Pourquoi Python 3.10 ? Certaines des bibliothèques que nous allons utiliser pour Discord et la traduction fonctionnent mieux (ou uniquement) avec Python 3.10 pour l'instant. Utiliser une version plus récente (comme 3.11 ou 3.12) peut provoquer des erreurs d'installation.

Vous devriez voir quelque chose comme `Python 3.10.x`.

## 2. Installer VS Code (et les outils Python)

VS Code est un éditeur de code gratuit et adapté aux étudiants où vous écrirez et exécuterez votre bot ; il propose une saisie semi-automatique intelligente, des indications pour les erreurs et un moyen simple de gérer Python.

{{<button href="https://code.visualstudio.com" theme="info">}}Téléchargez VS Code{{< /button >}}

Après avoir installé VS Code, ajoutez les outils Python :
1. Ouvrez VS Code et accédez à la vue Extensions (Cliquez sur l'icône des extensions dans la barre d'activités sur le côté ou appuyez sur `Ctrl+Maj+X`).
![Icône de la vue Extensions](../../media/extensions.png)
1. Recherchez `Python` (Éditeur : Microsoft) et cliquez sur Installer. Cela installera des outils utiles que nous utiliserons tout au long de l'atelier. ![Page d'extension Python dans VS Code](../../media/python-extension.png)
1. Installez l’expérience `Python Environment Manager` si cela vous est demandé – elle est incluse dans les versions récentes de l'extension Python.
1. Redémarrez VS Code si cela vous est demandé.

Vous devriez maintenant voir le symbole de l'extension Python dans votre barre latérale.
![Symbole de l'extension Python](../../media/python-symbol.png)

## 3. Créer un dossier de projet
Choisissez un emplacement que vous pouvez trouver facilement, comme vos Documents ou votre Bureau. 
Exemple de nom de dossier : `discord-translator-bot`.
Ouvrez le dossier dans VS Code (Fichier → Ouvrir un Dossier).

## 4. Créer un environnement virtuel
Un environnement virtuel garde votre projet séparé des autres projets et rend plus facile l'organisation de tous les fichiers Python sur votre ordinateur. L'extension Python de VS Code peut le créer et le sélectionner pour vous.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Astuce de Nuvi :</strong> Si la création de l'environnement semble bloquée, attendez une minute avant d'essayer à nouveau — Python est simplement en train de configurer votre laboratoire isolé.
{{< /alert >}}

1. Pour créer l'environnement, recherchez le symbole Python sur la barre latérale et cliquez dessus : ![Icône de l'extension Python dans VSCode](../../media/sidebar.png)
1. Cliquez sur le menu déroulant "venv". Il devrait indiquer quelque chose comme "Aucun environnement trouvé, cliquez pour en créer un". Cliquez dessus.
1. Cela devrait ouvrir un menu déroulant près du haut indiquant "Sélectionner le mode de création d'environnement". Choisissez "Création rapide".
![Menu déroulant pour créer un environnement](../../media/create-env.png)
1. Vous devriez maintenant voir une petite fenêtre de chargement s'afficher, indiquant que l'environnement virtuel est en cours de création. Cela peut prendre quelques minutes.
![Création d'un environnement virtuel](../../media/loading-env.png)
1. Une fois que c'est terminé, si vous sélectionnez à nouveau le symbole Python sur la barre latérale et cliquez sur le menu déroulant "venv", vous devriez voir que l'environnement virtuel a été créé et sélectionné.
![Environnement virtuel créé et sélectionné](../../media/venv-created.png)

## 5. Créer des fichiers de démarrage
À l'intérieur du dossier de projet, créez ces fichiers :
```
bot.py
requirements.txt
```

### bot.py
C'est ici que tout le code de votre bot sera écrit. Pour l'instant, ajoutez seulement ce code de démarrage :
```python
print("Projet de bot prêt. Nous ajouterons bientôt le code pour Discord !")
```

### requirements.txt 
Il peut rester vide pour le moment. Plus tard, vous ajouterez ici les noms des bibliothèques Python dont votre bot a besoin, afin qu'elles puissent être installées facilement.

## 6. Exécuter le script du bot
1. Sur la barre latérale, il devrait également y avoir une icône "Exécuter et Déboguer" (un bouton lecture avec un insecte). Avec bot.py ouvert dans l'éditeur principal, cliquez sur l'icône, puis cliquez sur le bouton Exécuter et Déboguer en haut de la barre latérale.
![Icône Exécuter et Déboguer](../../media/run-and-debug.png)

1. Dans le menu déroulant qui apparaît, sélectionnez "Débogueur Python".
![Sélectionnez Débogueur Python](../../media/debugger.png)

1. Ensuite, dans les configurations de débogage, sélectionnez "Fichier Python".
![Sélectionnez Fichier Python](../../media/select-python.png)

1. En cliquant à nouveau sur "Exécuter et Déboguer", le script devrait s’exécuter, et vous devriez voir le résultat dans le terminal en bas de l’écran !
![Sortie dans le terminal](../../media/terminal.png)

---
```