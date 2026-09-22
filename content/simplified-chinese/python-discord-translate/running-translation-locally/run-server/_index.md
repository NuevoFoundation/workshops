---
title: "本地运行 LibreTranslate"
draft: false
weight: 1
---

Nuvi 想要快速、私密的翻译——因此您将直接在自己的机器上运行翻译“引擎”。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 说：</strong> 本地运行意味着没有网络延迟，并且可以更好地保护练习项目的隐私。
{{< /alert >}}

## 1. 添加到 requirements.txt
打开您项目的 `requirements.txt` 文件，并添加（或确认已有以下内容）：
```text
libretranslate
requests
```
保存文件。

### 使用 VS Code 的终端进行安装
打开终端的方法：
- 使用菜单：查看 → 终端
- 或使用快捷键：`Ctrl+``（反引号键，通常位于 Tab 键上方）。在 macOS 上是 `Cmd+``。
- 或点击顶部面板区域的“终端”选项卡/加号 (+) 图标。

1. 确保已选择虚拟环境（在底部状态栏查看 `.venv`）。如果没有，选择它。
2. 在 VS Code 中打开一个新终端（``Ctrlxd+` ``）。
3. 运行：
```pwsh
pip install -r requirements.txt
```
4. 等安装完成且没有错误。
5. （可选）列出已安装的软件包以进行核实：
```pwsh
pip show libretranslate
```

---

## 2. 本地运行 LibreTranslate
在终端中启动服务器（进行测试时请保持此窗口打开）：

```bash
libretranslate --load-only en,es
```
这将启动支持英语和西班牙语翻译的服务器——这两个语言是 Nuvi 最想先支持的。

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi mascot" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi 小提示：</strong> 以后需要支持更多语言？重新启动时不要使用 `--load-only` 或添加语言代码（例如 `--load-only en,es,fr`）。
{{< /alert >}}

第一次运行时可能会下载语言数据，这可能需要几分钟。

![LibreTranslate 启动中](../../media/libretranslate-starting.png)

完成后，在浏览器中打开：
```
http://127.0.0.1:5000
```
您应该看到一个简单的页面。要查看服务器支持的语言，请访问：
```
http://127.0.0.1:5000/languages
```

---

## 3. 疑难解答
| 问题 | 解决方法 |
|------|----------|
| `No module named libretranslate` | 确保终端显示 (.venv) 文本，或请教一位成年人。 |
| 服务器启动后立即退出 | 查看错误信息；重新安装或重试。 |
| 无法打开 127.0.0.1:5000 | 确保服务器仍在运行；检查防火墙设置。 |
| 第一次翻译较慢 | 模型仍在加载。稍等一会儿。 |
| 输出为空或奇怪 | 确保使用了 POST 并包含键：`q`，`source`，`target`，`format`。 |
| 端口已被占用 | 使用其他端口：`python -m libretranslate --port 5001` 并更新 URL。 |

---