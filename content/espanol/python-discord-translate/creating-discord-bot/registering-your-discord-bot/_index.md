---
title: "Registrando tu Bot de Discord"
draft: false
weight: 1
---

Nuvi no puede implementar un traductor sin una “identidad” oficial. Antes de que escribas un comportamiento real, debes crear un usuario bot en el Portal de Desarrolladores de Discord. Esto te proporciona un **token** (una contraseña secreta) que tu código utilizará para iniciar sesión.

### 1. Abre el Portal de Desarrolladores
Ve al [portal de desarrolladores de Discord](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%3Fnew_application%3Dtrue) e inicia sesión con tu cuenta de Discord (o crea una si no tienes una).

### 2. Crea una Nueva Aplicación
Haz clic en **New Application**.
- Dale un nombre corto y claro (ejemplo: `Nuevo Translator Bot`).
- Marca la casilla de términos de servicio y luego haz clic en **Create**.

![Crear nueva aplicación](../../media/discord-bot-name.png)

### 3. Agrega un Usuario Bot
Dentro de la página de tu aplicación:
- Haz clic en **Bot** en el menú de la izquierda.
- Haz clic en **Add Bot** → **Yes, do it!**
- (Opcional) Dale un icono y un apodo.

### 4. Copia el Token del Bot (¡Pero Mantenlo Secreto!)
Todavía en la página de Bot:
- Haz clic en **Reset Token** o **Copy Token**.
- Esta cadena larga es como una contraseña para tu bot.
- Nunca la publiques en lugares públicos.

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Advertencia:</strong> Si alguien obtiene tu token, podrá controlar tu bot. Si se filtra, resétalo inmediatamente.
{{< /alert >}}

### 5. Habilita Message Content Intent (¡Importante para la Traducción!)
Mientras aún estás en la página de **Bot**:
- Desplázate hacia abajo hasta **Privileged Gateway Intents**.
- Activa el interruptor **Message Content Intent**.
- Esto permite que tu bot lea mensajes (requerido para la traducción automática).

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Advertencia:</strong> Sin el Message Content Intent habilitado, tu bot no podrá leer mensajes, por lo que la traducción automática no funcionará.
{{< /alert >}}

### 6. Invita a tu Bot a un Servidor
- Haz clic en **OAuth2 → URL Generator**.
- En **Scopes**, marca: `bot` y `applications.commands`.
- En **Bot Permissions**, selecciona solo lo que necesites ahora (comienza simple: `Read Messages/View Channels`, `Send Messages`).
- Copia la URL generada, pégala en tu navegador, elige un servidor que poseas o administres, y autoriza.

¡Tu bot ya está registrado y agregado a tu servidor! No estará en línea hasta que ejecutes tu código de Python con el token. Una vez que esté en línea, comenzarás a convertirlo en el asistente traductor que Nuvi necesita.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Consejo de Nuvi:</strong> Si la URL de invitación falla, verifica nuevamente que tanto los alcances `bot` como `applications.commands` estén seleccionados.
{{< /alert >}}