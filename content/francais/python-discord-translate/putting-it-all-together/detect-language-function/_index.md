---
title: "Fonction de Détection de Langue"
draft: false
weight: 1
---

Cette fonction détermine si un message est écrit en anglais ou en espagnol. C'est comme avoir quelqu'un qui peut instantanément vous dire quelle langue il entend !

## La Fonction `detect_language()`

Voici le code qui demande à LibreTranslate "quelle langue est-ce ?":

```python
def detect_language(text):
    """Demande à LibreTranslate quelle est la langue de ce texte (en/es)."""
    try:
        data = {"q": text}
        response = requests.post("http://127.0.0.1:5000/detect", json=data, timeout=5)
        result = response.json()
        if result and len(result) > 0:
            language = result[0]["language"]
            if language in ["en", "es"]:
                return language
        return None
    except requests.exceptions.Timeout:
        return None
    except requests.exceptions.ConnectionError:
        return None
    except Exception:
        return None
```

## Comment Ça Marche

1. **Envoyer le texte** : Nous envoyons le message à LibreTranslate.
2. **Obtenir une réponse** : LibreTranslate nous indique la langue qu'il pense être celle du message.
3. **Vérifier si c'est utilisable** : Nous travaillons uniquement avec l'anglais (`en`) ou l'espagnol (`es`).
4. **Gérer les problèmes** : Si quelque chose ne va pas, nous retournons `None` (ce qui signifie "je ne sais pas").

## Ce Que Fait le Bot Avec Cela

Quand quelqu'un envoie un message, le bot :
- Utilise cette fonction pour déterminer la langue.
- Ignore les messages qui ne sont ni en anglais ni en espagnol.
- Décide qui a besoin d'une traduction.

## Exemple

Quand quelqu'un écrit "Hello world", LibreTranslate renvoie quelque chose comme :
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

La fonction récupère `"en"` à partir de ceci et le retourne.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Conseil de Nuvi :</strong> Démarrez LibreTranslate avec `--load-only en,es` pour qu'il charge uniquement l'anglais et l'espagnol, ce qui accélérera le démarrage.
{{< /alert >}}

## Problèmes Courants

| Problème                | Comment le résoudre            |
|-------------------------|---------------------------------|
| Retourne toujours `None` | Vérifiez que LibreTranslate est en cours d'exécution |
| Se trompe de langue      | Essayez de taper des messages plus longs |
| Prend trop de temps      | Les 5 secondes de délai pourraient être insuffisantes |