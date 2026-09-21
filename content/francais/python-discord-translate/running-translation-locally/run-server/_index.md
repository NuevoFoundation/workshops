```markdown
---
title: "Exécuter LibreTranslate Localement"
draft: false
weight: 1
---

Nuvi souhaite des traductions rapides et privées—vous allez donc héberger le "cerveau" de la traduction directement sur votre machine.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dit :</strong> Garder tout en local signifie moins de délais Internet et une meilleure confidentialité pour les projets de pratique.
{{< /alert >}}

## 1. Ajouter au fichier requirements.txt
Ouvrez le fichier `requirements.txt` de votre projet et ajoutez (ou assurez-vous que ces lignes sont présentes) :
```text
libretranslate
requests
```
Enregistrez le fichier.

### Installer avec le terminal de VS Code
Pour ouvrir le terminal, vous pouvez :
- Utiliser le menu : Affichage → Terminal
- OU utiliser le raccourci clavier : `Ctrl+`` (touche apostrophe inversée, généralement au-dessus de la touche Tab). Sur macOS, c’est `Cmd+``.
- OU cliquer sur l’onglet Terminal / l’icône plus (+) en haut de la zone de panneau.

1. Assurez-vous que votre environnement virtuel est sélectionné (cherchez `.venv` dans la barre d'état en bas). Si ce n’est pas le cas, sélectionnez-le.
2. Ouvrez un nouveau terminal dans VS Code (`Ctrl+``).
3. Exécutez :
```pwsh
pip install -r requirements.txt
```
4. Attendez que l'installation se termine sans erreurs.
5. (Optionnel) Listez les paquets installés pour vérifier :
```pwsh
pip show libretranslate
```

---

## 2. Exécuter LibreTranslate Localement
Démarrez le serveur dans le terminal (gardez cette fenêtre ouverte pendant vos tests) :

```bash
libretranslate --load-only en,es
```
Cela démarrera le serveur avec la prise en charge de la traduction en anglais et en espagnol—les deux langues que Nuvi souhaite prendre en charge en premier.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Astuce de Nuvi :</strong> Besoin de plus de langues plus tard ? Redémarrez sans `--load-only` ou ajoutez des codes (ex : `--load-only en,es,fr`).
{{< /alert >}}

La première exécution peut nécessiter le téléchargement des données de langues. Cela peut prendre quelques minutes.

![Démarrage de LibreTranslate](../../media/libretranslate-starting.png)

Une fois terminé, ouvrez un navigateur à :
```
http://127.0.0.1:5000
```
Vous devriez voir une page simple. Pour voir les langues prises en charge par le serveur, visitez :
```
http://127.0.0.1:5000/languages
```

---

## 3. Résolution de problèmes
| Problème | Solution |
|----------|----------|
| `No module named libretranslate` | Assurez-vous que votre terminal affiche le texte (.venv) ou demandez de l'aide à un adulte. |
| Le serveur démarre puis s’arrête | Lisez le texte de l’erreur ; réinstallez ou réessayez. |
| Impossible d’ouvrir 127.0.0.1:5000 | Assurez-vous que le serveur fonctionne encore ; vérifiez le pare-feu. |
| Première traduction lente | Les modèles sont encore en cours de chargement. Attendez un peu. |
| Résultat vide / étrange | Assurez-vous d’avoir utilisé POST avec les clés : `q`, `source`, `target`, `format`. |
| Port déjà utilisé | Utilisez un autre port : `python -m libretranslate --port 5001` et mettez à jour l’URL. |

---
```