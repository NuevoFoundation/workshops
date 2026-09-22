---
title: "註冊您的 Discord 機器人"
draft: false
weight: 1
---

Nuvi 無法部署翻譯器，除非擁有官方的「身份」。在撰寫實際功能之前，您必須在 Discord 的開發者入口網站中創建一個機器人用戶。這將為您提供一個 **token**（一組秘密密碼），供您的代碼用來登錄。

### 1. 開啟開發者入口網站
前往 [Discord 開發者入口網站](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%3Fnew_application%3Dtrue) 並使用您的 Discord 帳戶登錄（如果尚未擁有帳戶，則需要創建一個）。

### 2. 創建一個新應用程式
點擊 **New Application**。
- 為它命名一個簡短且清晰的名稱（例如：`Nuevo Translator Bot`）。
- 勾選服務條款核取方塊，然後點擊 **Create**。

![創建新應用程式](../../media/discord-bot-name.png)

### 3. 添加機器人用戶
在您的應用程式頁面中：
- 點擊左側選單中的 **Bot**。
- 點擊 **Add Bot** → **Yes, do it!**
- （可選）為它設置一個圖標和暱稱。

### 4. 複製機器人的 Token（但務必保密！）
仍然位於 Bot 頁面：
- 點擊 **Reset Token** 或 **Copy Token**。
- 這串長長的字符就像是您機器人的密碼。
- 切勿將它公開。

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>警告：</strong> 如果有人獲得了您的 token，他們可以控制您的機器人。如果它泄漏，請立即重置。
{{< /alert >}}

### 5. 啟用消息內容權限（對翻譯功能很重要！）
仍然在 **Bot** 頁面：
- 滾動至 **Privileged Gateway Intents**
- 打開 **Message Content Intent** 開關
- 此步驟允許您的機器人讀取消息（自動翻譯功能需要此權限）

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>警告：</strong> 如果未啟用消息內容權限，您的機器人將無法讀取消息，因此無法實現自動翻譯功能。
{{< /alert >}}

### 6. 邀請您的機器人到伺服器
- 點擊 **OAuth2 → URL Generator**。
- 在 **Scopes** 中勾選：`bot` 和 `applications.commands`。
- 在 **Bot Permissions** 中，選擇您現在需要的最低權限（從簡單開始：`Read Messages/View Channels`, `Send Messages`）。
- 複製生成的 URL，將其粘貼到瀏覽器，選擇您擁有或管理的伺服器，然後點擊授權。

您的機器人現在已註冊並添加到您的伺服器中！但它不會上線，直到您使用 token 運行 Python 代碼。一旦上線，您將開始將其轉變為 Nuvi 所需的翻譯助手。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong> 如果邀請 URL 無效，請重新檢查是否選中了 `bot` 和 `applications.commands` 這兩個範圍。
{{< /alert >}}