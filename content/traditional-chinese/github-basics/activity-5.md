```yaml
---
title: "房間 5：衝突峽谷"
description: "學習解決合併衝突並同步上游倉庫。"
difficulties: ["進階"]
weight: 5
---
```

# 房間 5：衝突峽谷

你進入一個有深邃裂口的房間。兩邊延伸著橋樑，但中間卻沒有接上。一個標誌牌寫著：「只有通過解決衝突才能跨越。」

## 你的任務

1. 拉取原始倉庫的最新變更。
2. 解決出現的合併衝突。
3. 提交解決方案並推送更改。

## 操作指南

1. 添加原始倉庫作為遠程：

```
git remote add upstream https://github.com/CodeDungeon/escape-room.git
```

2. 拉取並合併變更：

```
git fetch upstream
git merge upstream/main
```

3. 你會看到出現的合併衝突。打開有衝突的文件並解決衝突。
4. 解決衝突後，分別執行以下操作：Stage、提交並推送：

```
git add .
git commit -m "解決合併衝突"
git push origin main
```


{{< notice info >}}
**提示：** 在文件中尋找衝突標誌（`<<<<<<<`、`=======`、`>>>>>>>`）。選擇保留哪些更改，或根據需要進行合併。
{{< /notice >}}

{{< expand "合併衝突的示例" >}}
```diff
<<<<<<< HEAD
這是來自你當前分支的一些內容。
=======
這是來自你正在合併的分支的衝突內容。
>>>>>>> upstream/main
{{< /expand >}}

<label for="finput">解決衝突後，衝突文件的最終行是什麼？請將其輸入在下方：</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
表現卓越！你已成功征服衝突峽谷，並完成所有挑戰。你現在是一位 GitHub 大師了！
{{< /notice >}}