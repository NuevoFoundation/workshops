```yaml
---
title: "Tester une Traduction"
draft: false
weight: 2
---
```

## Tester une Traduction (Script Rapide)  
Nuvi a besoin de s'assurer que le moteur de traduction fonctionne avant de l'intégrer dans le bot. Ce petit script sert de preuve.

Envoyons du texte au serveur en utilisant un fichier Python court.

Créez un nouveau fichier nommé `test_translate.py` :  
```python
import requests

# Test 1 : Détection de la langue
print("Test de détection de langue...")
detect_payload = {"q": "Hello world!"}
detect_resp = requests.post("http://127.0.0.1:5000/detect", json=detect_payload)
print("Résultat de la détection :", detect_resp.json())

# Test 2 : Traduction
print("\nTest de traduction...")
translate_payload = {
    "q": "Hello world!",
    "source": "en",
    "target": "es",
    "format": "text"
}
translate_resp = requests.post("http://127.0.0.1:5000/translate", json=translate_payload)
print("Résultat de la traduction :", translate_resp.json())
```

Exécutez-le (assurez-vous que le serveur LibreTranslate est toujours en marche) :
1. Ouvrez `test_translate.py` dans l'éditeur.
2. Cliquez sur l'icône Exécuter et Déboguer (bouton lecture avec un insecte) à gauche.
3. Regardez dans le panneau Console de Débogage / Terminal pour les résultats.

Vous devriez voir quelque chose comme : `{'translatedText': '¡Hola Mundo!'}`

![Sortie dans le terminal](../../media/test_terminal.png)

---

### Que se passe-t-il ici ?  

**Bibliothèque requests :** Une bibliothèque Python populaire qui facilite la communication avec des sites web ou des serveurs locaux, sans avoir à écrire beaucoup de code bas niveau.

**Requête web :** Un message qu'envoie votre programme à un serveur, lui demandant de faire quelque chose (ici : traduire un texte) et de donner une réponse.

**Payload :** Les données que vous envoyez avec une requête. Dans ce script, `payload` représente les données, comme le texte à traduire et les langues source/cible, stockées au format JSON.

**JSON :** Un format texte simple pour les données. Le serveur envoie sa réponse en JSON pour que différents programmes et langages puissent le lire.

**resp.json() :** Cela convertit la réponse JSON du serveur en quelque chose que Python peut comprendre.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Astuce Nuvi :</strong> Si vous obtenez une erreur de connexion, vérifiez que le terminal du serveur est toujours actif et que l'URL est bien `http://127.0.0.1:5000`.
{{< /alert >}}

**Endpoint :** L'URL spécifique (`/translate`) sur le serveur qui effectue une tâche—dans ce cas, la traduction.

### Essayez par vous-même  
1. Traduisez une autre phrase  
2. Inversez les rôles, traduisez de l'espagnol vers l'anglais  
3. Ajoutez une autre langue !

Maintenant, vous connaissez chaque pièce ! Vous pourrez ensuite connecter cette idée à votre bot Discord pour que les amis de Nuvi puissent enfin se comprendre.  