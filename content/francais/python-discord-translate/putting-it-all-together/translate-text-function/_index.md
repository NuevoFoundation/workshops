```yaml
---
title: "Fonction de Traduction de Texte"
draft: false
weight: 2
---
```

Cette fonction réalise la traduction - elle prend du texte dans une langue et le transforme en une autre langue !

## La Fonction `translate_text()`

Voici le code qui fait toute la magie :

```python
def translate_text(text, from_language, to_language):
    """Traduire du texte d'une langue à une autre en utilisant LibreTranslate."""
    try:
        data = {
            "q": text,
            "source": from_language,
            "target": to_language,
            "format": "text"
        }
        response = requests.post("http://127.0.0.1:5000/translate", json=data, timeout=10)
        result = response.json()
        return result.get("translatedText")
    except:
        return None
```

## Que signifie chaque partie ?

| Partie | Fonction | Exemple |
|--------|----------|---------|
| `text` | Les mots que vous voulez traduire | `"Hello world"` |
| `from_language` | La langue actuelle du texte | `"en"` (Anglais) |
| `to_language` | La langue dans laquelle vous voulez traduire | `"es"` (Espagnol) |

## Comment cela fonctionne

1. **Prépare les infos** : On met le texte et les codes de langue dans un paquet.
2. **Envoie à LibreTranslate** : Demande de traduire.
3. **Reçoit la traduction** : LibreTranslate renvoie le texte traduit.
4. **Si quelque chose se casse** : Renvoie `None` (signifie "impossible de traduire").

## Exemples d'utilisation

### Dans une traduction automatique
```python
# Traduire un message selon les préférences de l'utilisateur
translation = translate_text(message.content, detected_lang, preferred_lang)
if translation:
    # Envoyez-le !
```

### Avec la commande manuelle
```python
# De l'anglais au espagnol
result = translate_text("Hello", "en", "es")  
# Résultat : "Hola"

# De l'espagnol à l'anglais  
result = translate_text("Gracias", "es", "en")
# Résultat : "Thank you"
```

## Ce que renvoie LibreTranslate

Quand tout fonctionne, vous obtenez quelque chose comme :
```json
{
    "translatedText": "Hola mundo"
}
```

## Quand ça ne fonctionne pas

La fonction renvoie `None` lorsque :
- LibreTranslate n'est pas en cours d'exécution.
- Problèmes de connexion Internet.
- Codes de langue incorrects.
- Le texte est trop long (délai dépassé après 10 secondes).

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascotte Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Attention :</strong> Les messages très longs peuvent prendre plus de 10 secondes. Si cela arrive fréquemment, vous pouvez modifier le numéro de délai !
{{< /alert >}}

## Conseils pour réussir

1. **Vérifiez toujours si cela a fonctionné** : Assurez-vous que la fonction n'a pas renvoyé `None`.
2. **Utilisez les bons codes** : "en" pour l'anglais, "es" pour l'espagnol.
3. **Gardez les messages raisonnables** : Les textes très longs prennent plus de temps.
4. **Soyez patient** : La traduction nécessite un instant.

## Où le bot utilise cette fonction

Le bot appelle cette fonction dans deux cas :
- **Traduction automatique** : Lorsqu'une personne écrit un message dans une langue différente.
- **Commande manuelle** : Lorsqu'une personne utilise `/translate`.