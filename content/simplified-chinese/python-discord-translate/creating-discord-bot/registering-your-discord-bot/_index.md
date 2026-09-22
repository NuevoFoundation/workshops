---
title: "注册您的 Discord Bot"
draft: false
weight: 1
---

在部署翻译器之前，Nuvi 需要一个正式的“身份”。在编写实际行为前，您必须在 Discord 的开发者门户中创建一个 bot 用户。这会为您提供一个 **token**（一个秘密密码），您的代码将通过它登录。

### 1. 打开开发者门户
前往 [Discord 开发者门户](https://discord.com/login?redirect_to=%2Fdevelopers%2Fapplications%3Fnew_application%3Dtrue) 并使用您的 Discord 账户登录（如果还没有账户，请创建一个）。

### 2. 创建一个新应用
点击 **New Application**。
- 为其取一个简短、清晰的名称（例如：`Nuevo Translator Bot`）。
- 勾选服务条款复选框，然后点击 **Create**。

![创建新应用](../../media/discord-bot-name.png)

### 3. 添加一个 Bot 用户
在您的应用页面中：
- 点击左侧菜单中的 **Bot**。
- 点击 **Add Bot** → **Yes, do it!**
- （可选）为其添加一个图标和昵称。

### 4. 复制 Bot Token（保持它的秘密！）
仍在 Bot 页面中：
- 点击 **Reset Token** 或 **Copy Token**。
- 这个长字符串就像是您 bot 的密码。
- 永远不要公开它。

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>警告：</strong> 如果有人获得了您的 token，他们可以控制您的 bot。如果 token 泄露，请立即重置。
{{< /alert >}}

### 5. 启用消息内容权限（翻译功能所必需！）
仍在 **Bot** 页面：
- 滚动至 **Privileged Gateway Intents** 部分。
- 开启 **Message Content Intent** 开关。
- 这允许您的 bot 读取消息（这是自动翻译所必需的）。

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>警告：</strong> 如果未启用消息内容权限，您的 bot 将无法读取消息，因此无法进行自动翻译。
{{< /alert >}}

### 6. 将您的 Bot 邀请至服务器
- 点击 **OAuth2 → URL Generator**。
- 在 **Scopes** 下勾选：`bot` 和 `applications.commands`。
- 在 **Bot Permissions** 下，只选择您现在需要的权限（可以从简单开始：`Read Messages/View Channels`、`Send Messages`）。
- 复制生成的 URL，将其粘贴到浏览器中，选择您拥有或管理的服务器，并授权。

现在，您的 bot 已被注册并添加到您的服务器中！在您使用该 token 运行您的 Python 代码之前，它不会上线。一旦上线，您将开始将其开发成 Nuvi 所需的翻译助手。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示：</strong> 如果邀请 URL 无法使用，请重新检查是否勾选了 `bot` 和 `applications.commands` 范围。
{{< /alert >}}