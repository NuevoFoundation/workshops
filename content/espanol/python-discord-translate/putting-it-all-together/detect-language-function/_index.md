---
title: "Función Detectar Idioma"
draft: false
weight: 1
---

Esta función determina si un mensaje está escrito en inglés o español. ¡Es como tener a alguien que puede decirte instantáneamente en qué idioma está hablando!

## La Función `detect_language()`

Aquí está el código que pregunta a LibreTranslate "¿en qué idioma está este texto?":

```python
def detect_language(text):
    """Preguntar a LibreTranslate en qué idioma está este texto (en/es)."""
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

## Cómo Funciona

1. **Enviar el texto**: Enviamos el mensaje a LibreTranslate.
2. **Obtener una respuesta**: LibreTranslate nos dice en qué idioma cree que está.
3. **Verificar si es útil**: Solo trabajamos con inglés (`en`) o español (`es`).
4. **Manejar problemas**: Si algo falla, devolvemos `None` (lo que significa "no lo sé").

## Qué Hace el Bot Con Esto

Cuando alguien envía un mensaje, el bot:
- Usa esta función para determinar el idioma.
- Ignora los mensajes que no están en inglés o español.
- Decide quién necesita traducción.

## Ejemplo

Cuando alguien escribe "Hello world", LibreTranslate responde algo como:
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

La función toma `"en"` de esta respuesta y lo devuelve.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="mascota de Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Consejo de Nuvi:</strong> Inicia LibreTranslate con `--load-only en,es` para que cargue solo inglés y español, así arranca más rápido.
{{< /alert >}}

## Problemas Comunes

| Qué Está Mal | Cómo Solucionarlo           |
|--------------|-----------------------------|
| Siempre devuelve `None` | Verifica que LibreTranslate esté corriendo |
| Detecta mal el idioma    | Intenta escribir mensajes más largos     |
| Tarda demasiado          | El tiempo de espera de 5 segundos podría ser muy corto |