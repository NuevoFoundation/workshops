---
title: "Función para Traducir Texto"
draft: false
weight: 2
---

¡Esta función realiza la traducción real! Toma texto de un idioma y lo cambia a otro idioma.

## La Función `translate_text()`

Aquí está el código que hace posible la magia:

```python
def translate_text(text, from_language, to_language):
    """Traduce texto de un idioma a otro usando LibreTranslate."""
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

## Lo Que Significa Cada Parte

| Parte | Qué Hace | Ejemplo |
|-------|----------|---------|
| `text` | Las palabras que deseas traducir | `"Hello world"` |
| `from_language` | El idioma en el que está ahora | `"en"` (Inglés) |
| `to_language` | El idioma al que lo deseas traducir | `"es"` (Español) |

## Cómo Funciona

1. **Empaquetar la información**: Ponemos el texto y los códigos de idioma en un paquete.
2. **Enviar a LibreTranslate**: Le pedimos que traduzca.
3. **Obtener la traducción**: LibreTranslate envía de vuelta el texto traducido.
4. **Si algo falla**: Devuelve `None` (significa "no se pudo traducir").

## Ejemplos de Uso

### En Traducción Automática
```python
# Traduce un mensaje al idioma preferido por el usuario
translation = translate_text(message.content, detected_lang, preferred_lang)
if translation:
    # ¡Envíalo!
```

### En el Comando Manual
```python
# De inglés a español
result = translate_text("Hello", "en", "es")  
# Resultado: "Hola"

# De español a inglés  
result = translate_text("Gracias", "es", "en")
# Resultado: "Thank you"
```

## Lo Que Envía LibreTranslate

Cuando funciona, obtienes algo como:
```json
{
    "translatedText": "Hola mundo"
}
```

## Cuando Algo Sale Mal

La función devuelve `None` cuando:
- LibreTranslate no está ejecutándose.
- Problemas con la conexión a internet.
- Códigos de idioma incorrectos.
- El texto es demasiado largo (tiempo límite de 10 segundos).

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascota Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Sugerencia:</strong> Los mensajes muy largos pueden tomar más de 10 segundos. Si eso sucede con frecuencia, puedes cambiar el número del tiempo límite.
{{< /alert >}}

## Consejos para el Éxito

1. **Siempre verifica si funcionó**: Asegúrate de que la función no devolvió `None`.
2. **Usa los códigos correctos**: "en" para inglés, "es" para español.
3. **Mantén los mensajes razonables**: Los textos súper largos tardan más.
4. **Ten paciencia**: La traducción toma un momento.

## Dónde Usa Esto el Bot

El bot llama a esta función en dos lugares:
- **Traducción automática**: Cuando alguien escribe un mensaje en otro idioma.
- **Comando manual**: Cuando alguien utiliza `/translate`.