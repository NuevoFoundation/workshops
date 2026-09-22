```markdown
---
title: "Ejecuta LibreTranslate Localmente"
draft: false
weight: 1
---

Nuvi quiere traducciones rápidas y privadas, así que alojarás el "cerebro" de la traducción directamente en tu máquina.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascota" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi dice:</strong> Mantenerlo local significa sin retrasos de internet y mejor privacidad para proyectos de práctica.
{{< /alert >}}

## 1. Añádelo a requirements.txt
Abre el archivo `requirements.txt` de tu proyecto y agrega (o confirma que estas líneas están presentes):
```text
libretranslate
requests
```
Guarda el archivo.

### Instalar utilizando la terminal de VS Code
Para abrir la terminal puedes:
- Usar el menú: Ver → Terminal
- O presionar el atajo de teclado: `Ctrl+`` (tecla de acento grave, usualmente encima de Tab). En macOS es `Cmd+``.
- O hacer clic en la pestaña de la terminal / icono de más (+) en la parte superior del área del panel.

1. Asegúrate de que tu entorno virtual esté seleccionado (busca `.venv` en la barra de estado inferior). Si no, selecciona el correcto.
2. Abre una nueva terminal en VS Code (``Ctrl+` ``).
3. Ejecuta:
```pwsh
pip install -r requirements.txt
```
4. Espera a que la instalación se complete sin errores.
5. (Opcional) Enumera los paquetes instalados para verificar:
```pwsh
pip show libretranslate
```

---

## 2. Ejecuta LibreTranslate Localmente
Inicia el servidor en la terminal (mantén esta ventana abierta mientras pruebas):

```bash
libretranslate --load-only en,es
```
Esto iniciará el servidor con soporte para traducir inglés y español, los dos idiomas que Nuvi quiere usar primero.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascota" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Consejo de Nuvi:</strong> ¿Necesitas más idiomas más tarde? Reinicia sin `--load-only` o agrega más códigos (p.ej., `--load-only en,es,fr`).
{{< /alert >}}

La primera vez que lo ejecutes puede descargar los datos de los idiomas, lo cual puede tardar unos minutos.

![Iniciando LibreTranslate](../../media/libretranslate-starting.png)

Una vez que finalice, abre un navegador en:
```
http://127.0.0.1:5000
```
Deberías ver una página sencilla. Para ver los idiomas que soporta el servidor, visita:
```
http://127.0.0.1:5000/languages
```

---

## 3. Solución de problemas
| Problema | Solución |
|---------|----------|
| `No module named libretranslate` | Asegúrate de que tu terminal muestra el texto (.venv) o pide ayuda a un adulto. |
| El servidor inicia y luego se cierra | Lee el texto del error; reinstala o intenta nuevamente. |
| No se puede abrir 127.0.0.1:5000 | Asegúrate de que el servidor siga en ejecución; revisa el firewall. |
| La primera traducción es lenta | Los modelos aún se están cargando. Espera un poco. |
| La salida está vacía o es rara | Asegúrate de haber usado POST con las claves: `q`, `source`, `target`, `format`. |
| El puerto ya está en uso | Usa uno diferente: `python -m libretranslate --port 5001` y actualiza la URL. |

---
```