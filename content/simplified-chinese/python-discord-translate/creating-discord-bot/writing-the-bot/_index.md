```markdown
---
title: "编写一个简单机器人"
draft: false
weight: 2
---

Nuvi现在已经有了一个注册的机器人身份。接下来：让它真正响应。在准备好你的项目文件夹、虚拟环境和启动文件后，你将构建一个**最小化机器人基础**。这个第一个版本只是验证连接是否正常。我们现在打开一个权限（`message_content`），以便后续页面可以添加自动翻译功能，而无需重新设置。

在这部分中，你将：

1. 将`discord.py`添加到`requirements.txt`并安装（使用VS Code界面，不需要输入终端命令）
2. 编写一个响应斜杠命令`/hello`的基础机器人代码
3. 启用消息内容意图（稍后自动翻译需要用到）
4. 运行并测试机器人

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi提示：</strong>你的第一个目标就是让机器人上线——翻译功能稍后添加。小目标有助于保持动力！
{{< /alert >}}

---

## 1. 添加并安装discord.py库（使用requirements.txt + VS Code界面）
我们会先声明依赖项，然后让VS Code将其安装到你的虚拟环境中。

### 1.a 将其添加到requirements.txt
1. 打开项目中的`requirements.txt`。
2. 添加以下内容（当前文件可以只包含这一行）：
```text
discord.py
```
3. 保存文件

### 1.b 通过环境管理器界面安装
1. 打开Python扩展视图（活动栏中的Python图标），确认选择了正确的环境（例如`.venv`）。
2. 选择“Packages”（图标看起来像一个盒子），将显示一个下拉菜单。选择“Install project dependencies”。
![安装项目依赖项](../../media/dependencies.png)
3. 勾选“requirements.txt”并点击“Ok”。
![选择requirements.txt](../../media/requirements.png)
4. 等待`discord.py`出现在已安装包列表中。
![discord.py已安装](../../media/discord-installed.png)

## 2. 编写机器人代码
打开`bot.py`，并用以下代码替换任何占位代码。（你会注意到已经有一个`user_languages`字典——这是一个“占位笔记本”，稍后添加注册和自动翻译时会真正用到。）

```python
import discord
from discord.ext import commands

TOKEN = "<your token here>"

# 此处用于记录每个用户想要使用的语言
# 类似一个笔记本：user_languages[user_id] = "en" or "es"
user_languages = {}

# 告诉Discord我们的机器人需要读取消息内容（不仅是命令）
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"机器人已上线，用户名为{bot.user}!")
    try:
        synced = await bot.tree.sync()
        print(f"同步了{len(synced)}个命令。")
    except Exception as e:
        print(f"错误: {e}")

@bot.tree.command(name="hello", description="打个招呼!")
async def hello_command(interaction: discord.Interaction):
    await interaction.response.send_message(f"你好 {interaction.user.display_name}！祝你编码愉快！")

if not TOKEN:
    raise RuntimeError("机器人令牌丢失。请在文件顶部的TOKEN变量中添加令牌。")

bot.run(TOKEN)
```

### 功能说明：
- 导入Discord库，避免重复创建网络功能。
- 设置“意图”，提前启用`message_content`（未来自动翻译需要读取消息）。
- 创建并启动一个机器人连接。
- 注册一个斜杠命令`/hello`以确保命令同步正常工作。
- 使用`user_languages = {}`作为一个简单的内存存储，稍后会填充数据。
- 当调用`/hello`时，回复一条个性化问候。
- 安全检查：若令牌缺失则停止运行。

<details>
<summary><strong>-> 高级细节（如果想了解此处使用的高级概念，请点击展开。完全可选！）</strong></summary>

**async / await**：这些关键字允许Python在等待期间运行其他任务（例如，等待Discord的回复），从而避免机器人冻结。

**事件（@bot.event）**：像`@bot.event`这样的装饰器告诉库“当特定事件发生时运行此函数”（这里是机器人准备就绪时）。

**斜杠命令（`@bot.tree.command`）**：这些命令会在用户在Discord中键入`/`时出现。它们注册到Discord服务器，可能需要一些时间同步。

**交互（Interaction）**：表示用户使用斜杠命令。`interaction.user`代表用户，`interaction.response.send_message(...)`发送回复。

**Bot与Client**：`commands.Bot`在低级Discord客户端之上增加了有用的命令功能（比如命令树）。

**意图（Intents）**：权限告诉Discord需要哪些数据（消息、成员等）。使用较少权限可以让机器人更简单、更安全。

**异常（try / except）**：`try:`块用于运行可能失败的代码；`except Exception as e:`捕获错误，让机器人记录错误而不是崩溃。

</details>

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi吉祥物" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>警告：</strong>为了简化操作，我们将令牌直接显示在代码中。在实际项目中，请将密钥存储在环境变量或安全库中。
{{< /alert >}}

---

## 3. 运行机器人
1. 在编辑器中打开`bot.py`。
2. 打开运行与调试视图（带虫图标的播放按钮）。
3. 如需选择配置，请选择`Python File`。
4. 点击绿色“运行/调试”按钮。
5. 在调试控制台/终端中查看输出：
```text
Logged in as <your bot name>
Synced X application command(s).
```
![终端输出](../../media/running.png)

---

## 4. 在Discord中测试/hello命令
1. 将机器人邀请到你有权限的服务器（可在“开发者门户 -> OAuth2 → URL生成器”中生成邀请