---
title: "Probar una Traducción"
draft: false
weight: 2
---

## Probar una Traducción (Guion Rápido)
Nuvi necesita probar que el motor de traducción realmente funciona antes de integrarlo al bot. Este pequeño guion es esa prueba.

Enviemos algo de texto al servidor usando un archivo corto de Python.

Crea un nuevo archivo llamado `test_translate.py`:
```python
import requests

# Prueba 1: Detección de Idioma
print("Probando detección de idioma...")
detect_payload = {"q": "Hello world!"}
detect_resp = requests.post("http://127.0.0.1:5000/detect", json=detect_payload)
print("Resultado de detección:", detect_resp.json())

# Prueba 2: Traducción
print("\nProbando traducción...")
translate_payload = {
    "q": "Hello world!",
    "source": "en",
    "target": "es",
    "format": "text"
}
translate_resp = requests.post("http://127.0.0.1:5000/translate", json=translate_payload)
print("Resultado de traducción:", translate_resp.json())
```

Ejecuta el archivo (asegúrate de que el servidor LibreTranslate aún esté ejecutándose):
1. Abre `test_translate.py` en el editor.
1. Haz clic en el icono Ejecutar y Depurar (botón de reproducción con un insecto) a la izquierda.
1. Mira en el panel Consola de Depuración / Terminal para ver la salida.

Deberías ver algo como: `{'translatedText': '¡Hola Mundo!'}`

![Salida en terminal](../../media/test_terminal.png)

---

### ¿Qué está ocurriendo aquí?
**requests library:** Una biblioteca popular de Python que hace fácil hablar con sitios web o servidores locales sin tener que escribir mucho código de bajo nivel.

**Solicitud web:** Un mensaje que tu programa envía a un servidor pidiéndole que haga algo (aquí: traducir texto) y devuelva una respuesta.

**Carga útil (Payload):** Los datos que envías junto con una solicitud. En este guion, `payload` representa los datos, como el texto a traducir y los idiomas de origen/destino, almacenados como JSON.

**JSON:** Un formato de texto simple para datos. El servidor envía su respuesta como JSON para que diferentes programas y lenguajes puedan leerlo.

**resp.json():** Esto convierte la respuesta en formato JSON del servidor en algo que Python pueda entender.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascota Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Consejo de Nuvi:</strong> Si obtienes un error de conexión, asegúrate de que la terminal del servidor aún esté corriendo y que la URL sea `http://127.0.0.1:5000`.
{{< /alert >}}

**Punto final (Endpoint):** La URL específica (`/translate`) en el servidor que realiza una tarea—en este caso, la traducción.

### ¡Pruébalo Tú Mismo!
1. Traduce una frase diferente.
1. Cambia el sentido, traduce de español a inglés.
1. ¡Añade otro idioma!

¡Ahora conoces cada pieza! En el siguiente paso, conectarás esta idea a tu bot de Discord para que los amigos de Nuvi finalmente puedan entenderse entre sí.