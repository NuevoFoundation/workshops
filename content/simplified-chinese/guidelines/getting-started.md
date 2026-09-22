---
title: "入门指南"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 2
---

## 前置条件

| 工具 | 用途 | 安装链接 |
|------|------|----------|
| **Git** | 版本控制 | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Hugo (扩展版)** | 构建工作坊网站 | [gohugo.io/installation](https://gohugo.io/installation/) |
| **VS Code**（推荐） | 文本编辑器 | [code.visualstudio.com](https://code.visualstudio.com/download) |

刚接触 Git？请查看 GitHub 的[快速入门指南](https://docs.github.com/en/get-started/quickstart)。

### 快速安装 Hugo

**Windows（winget）：**
```
winget install Hugo.Hugo.Extended
```

**macOS（Homebrew）：**
```
brew install hugo
```

**Linux（snap）：**
```
snap install hugo
```

使用 `hugo version` 验证，你应该会看到包含 **extended** 的输出。

## 参考链接

- [GitHub 仓库](https://github.com/NuevoFoundation/workshops)
- [工作坊网站](https://workshops.nuevofoundation.org/)

## 演示视频

- [工作坊 GitHub 仓库开发周期](https://youtu.be/LpjucoAVviI)
- [工作坊 GitHub 仓库结构](https://youtu.be/cygmE6LGcOw)

## 分叉并克隆仓库

贡献使用[分叉模型](https://help.github.com/articles/fork-a-repo/)。你需要将更改推送到自己的分叉，然后提交拉取请求将更改合并到主仓库中。

### 1. 分叉仓库

点击 <a target="_blank" href="https://github.com/nuevoFoundation/workshops">工作坊仓库</a>右上角的 **Fork**：

![GitHub 上显示 Fork 按钮的截图](/guidelines/media/fork.png)

### 2. 克隆你的分叉

将 `[your-username]` 替换为你的 GitHub 用户名：

```bash
git clone https://github.com/[your-username]/workshops.git
cd workshops
```

### 3. 设置上游远程仓库

这可以让你从主仓库拉取更新，同时防止意外推送：

```bash
git remote add upstream https://github.com/NuevoFoundation/workshops.git
git remote set-url --push upstream no_push
```

使用 `git remote -v` 验证：

```
origin    https://github.com/[your-username]/workshops.git (fetch)
origin    https://github.com/[your-username]/workshops.git (push)
upstream  https://github.com/NuevoFoundation/workshops.git (fetch)
upstream  no_push (push)
```

## 在本地构建和测试

在 `workshops` 文件夹中运行：

```bash
hugo server -D
```

- `-D` 包含草稿内容，以便你预览正在进行中的工作。
- 网站会在几秒钟内构建完成，并可在 **http://localhost:1313/** 查看。
- Hugo 会监控文件更改并自动刷新浏览器。

要停止服务器，按下 `Ctrl+C`。

## 保持你的分叉最新

在开始新工作前，同步上游：

```bash
git fetch --all --prune
git checkout master
git merge upstream/master
git push origin master
```

## 示例操作指南

**场景**：进行一个简单的更改并提交拉取请求。

### 创建一个主题分支

首先确保你的分叉是最新的：

```bash
git checkout master
git checkout -b my-change
git push --set-upstream origin my-change
```

### 进行编辑

在 VS Code 中打开仓库文件夹。导航到你想更改的文件。以此示例为例，编辑 `content/english/guidelines/getting-started.md`。要更深入了解文件结构，请参阅[网站构建方式](../site-architecture/)。

### 提交并推送

```bash
git add content/english/guidelines/getting-started.md
git commit -m "描述更改内容"
git push
```

**提示**：使用 `git commit -am "message"` 可以将所有修改的文件一次性暂存并提交。

### 打开拉取请求

导航到 GitHub 上你的分叉。你应该会看到一个提示，要求根据你最近的推送创建一个拉取请求：

![GitHub 上显示 Compare and Pull Request 按钮的截图](/guidelines/media/compare-and-pull.png)

如果未看到提示，请转到 **Pull Requests > New pull request**：

![GitHub 上显示 New Pull Request 按钮的截图](/guidelines/media/create-new-pr.png)

确保你的基础分支（目标）和头部分支（来源）正确，添加标题和描述，然后提交。

## 创建新的工作坊？

始终使用模板脚本生成正确的目录结构和模板。不要手动创建工作坊文件。

```bash
python tools/new-workshop.py --name "my-workshop" --title "My Workshop" \
  --coding-language python --topics programming-basics
```

查看 [新工作坊指南](../new-workshops/) 以了解完整的操作步骤、选项和提交前检查清单。