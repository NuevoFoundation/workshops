```markdown
---
title: "房间 5：冲突峡谷"
description: "学习解决合并冲突并与上游仓库同步。"
difficulties: ["高级"]
weight: 5
---

# 房间 5：冲突峡谷

你进入一个房间，这里有一道深渊。两座桥从两侧延伸，但并没有在中间连接起来。一块标牌写着：“只有解决冲突才能跨越。”

## 你的任务

1. 拉取原始仓库的最新改动。
2. 解决出现的合并冲突。
3. 提交解决后的更改并推送。

## 操作步骤

1. 添加原始仓库为远程仓库：

```
git remote add upstream https://github.com/CodeDungeon/escape-room.git
```

2. 拉取并合并改动：

```
git fetch upstream
git merge upstream/main
```

3. 你会看到一个合并冲突。打开有冲突的文件进行解决。
4. 在解决后，执行以下步骤以暂存、提交并推送：

```
git add .
git commit -m "解决合并冲突"
git push origin main
```


{{< notice info >}}
**提示：** 查找文件中的冲突标记 (`<<<<<<<`、`=======`、`>>>>>>>`)。选择保留哪些更改或将它们结合起来。
{{< /notice >}}

{{< expand "合并冲突示例" >}}
```diff
<<<<<<< HEAD
这是你当前分支中的一些内容。
=======
这是你要合并分支中的冲突内容。
>>>>>>> upstream/main
{{< /expand >}}

<label for="finput">解决冲突后，冲突文件的最终内容是什么？请在下方输入：</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
出色的工作！你已经征服了冲突峡谷，完成了所有挑战。你现在是 GitHub 大师了！
{{< /notice >}}
```