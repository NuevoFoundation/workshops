---
title: "代码准备工作"
draft: false
weight: 2
---

Nuvi 还不能邀请一个翻译机器人——因为还没有设置代码环境！让我们先准备好你的计算机。你将安装 Python，设置一个虚拟环境（为你的项目包创建一个安全的“隔离空间”），安装 VS Code（代码编辑器），并创建启动文件。一旦这个基础准备好了，你就可以开始编写一个能够帮助每个人更好理解彼此的机器人了。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示:</strong> 请选择 Python 3.10 版本，这样翻译功能可以顺利安装——只要当前能正常运行，以后升级会更容易！
{{< /alert >}}

## 1. 安装 Python
从官方网站安装 **Python 3.10**（例如 3.10.14 版本）。
- Windows 和 macOS 用户访问：https://www.python.org/downloads/
- （一些 Chromebook 或许需要启用 Linux 模式；请向成人或教师寻求帮助。）

为什么选择 3.10？我们将使用的一些适用于 Discord 和翻译的库，目前在 Python 3.10 上能更好地运行（或仅在 3.10 上运行）。使用更高的版本（例如 3.11 或 3.12）可能会导致安装错误。

确保你看到的是类似 `Python 3.10.x` 的版本号。

## 2. 安装 VS Code （及其 Python 工具）

VS Code 是一个免费的、学生友好的代码编辑器，用来编写和运行你的机器人；它提供了智能自动补全、错误提示，以及管理 Python 的便捷方式。

{{<button href="https://code.visualstudio.com" theme="info">}}下载 VS Code{{< /button >}}

安装完 VS Code 后，添加 Python 工具：
1. 打开 VS Code，进入扩展视图（点击侧边栏中的扩展图标，或按 `Ctrl+Shift+X`）。
![Extensions view icon](../../media/extensions.png)
1. 搜索 `Python`（发布者：Microsoft），点击安装。这将安装我们在整个课程中将使用的一些有用工具。 ![Python VSCode extension page](../../media/python-extension.png)
1. 若有提示，安装 `Python 环境管理器` 体验 —— 它被包含在 Python 扩展的新版本中。
1. 如果 VS Code 提示你重新加载，请执行此操作。

现在，你应该在侧边栏中看到 Python 扩展符号。
![Python extension symbol](../../media/python-symbol.png)

## 3. 创建一个项目文件夹
选择一个你能轻松找到的位置，例如文档或桌面。
示例文件夹名称：`discord-translator-bot`。
在 VS Code 中打开该文件夹（文件 → 打开文件夹）。

## 4. 创建一个虚拟环境
虚拟环境可以将你的项目与其他项目分开，并使得在计算机上组织所有的 Python 文件更加容易。VS Code 的 Python 扩展可以为你创建并选择它。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 提示:</strong> 如果创建环境出现了卡顿，先等待一分钟再重试——Python 正在设置一个隔离的实验室。
{{< /alert >}}

1. 要创建环境，寻找侧边栏的 Python 符号并点击它： ![Python VSCode extension icon](../../media/sidebar.png)
1. 点击 "venv" 下拉菜单。如果显示类似 "没有找到环境，点击创建"，点击这一选项。
1. 这将弹出一个接近顶部的下拉菜单，显示 "选择环境创建模式"。选择 "快速创建"。
![Create environment dropdown](../../media/create-env.png)
1. 你应该会看到一个小的加载窗口，显示正在创建虚拟环境。这可能需要几分钟。
![Creating virtual environment](../../media/loading-env.png)
1. 完成后，如果再次选择侧边栏的 Python 符号，并点击 "venv" 下拉菜单，你应该会看到虚拟环境已被创建并选择。
![Virtual environment created and selected](../../media/venv-created.png)

## 5. 创建启动文件
在项目文件夹中，创建以下文件：
```
bot.py
requirements.txt
```

### bot.py
这是用于编写所有机器人代码的地方。目前，加入以下启动代码：
```python
print("Bot project ready. We'll add Discord code soon!")
```

### requirements.txt 
这个文件目前可以保持空白。稍后，你将把机器人需要的 Python 库名称添加到此文件中，以便快速安装。

## 6. 运行 bot 脚本
1. 在侧边栏中，你还应该看到一个 "运行和调试" 图标（一个带有虫子的播放按钮）。打开 bot.py 文件后，点击该图标，然后点击侧边栏顶部的 "运行和调试" 按钮。
![Run and Debug icon](../../media/run-and-debug.png)

1. 在出现的下拉菜单中，选择 "Python 调试器"。
![Select Python debugger](../../media/debugger.png)

1. 然后在调试配置中，选择 "Python 文件"。
![Select Python File](../../media/select-python.png)

1. 再次点击 "运行和调试" 应该就可以运行脚本，你会在底部的终端中看到输出结果！
![Output in terminal](../../media/terminal.png)

---