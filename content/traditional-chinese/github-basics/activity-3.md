```yaml
---
title: "第3房間：拉取請求入口"
description: "學習推送更改並創建拉取請求。"
difficulties: ["中級"]
weight: 3
---
```

一扇巨大的門擋住了你的去路，上面寫著「拉取請求」。旁邊有一個標誌，上面寫著：「欲開此門，您的更改必須接受審核。」

## 您的任務

1. 將本地的更改推送到您分叉的倉庫。
2. 向原始的 `CodeDungeon/escape-room` 倉庫創建拉取請求。

## 操作指南

1. 推送您的更改：

```
git push origin main
```

2. 前往 GitHub 上您的分叉倉庫。
3. 點擊「Contribute」，然後點擊「Open pull request」。
4. 將標題填寫為「解決第2房間」並提供簡短描述。
5. 點擊「Create pull request」。

{{< notice info >}}
**提示：** 留意您的拉取請求。地牢守護者（倉庫管理員）將審查它，並可能要求修改！
{{< /notice >}}

{{< expand "拉取請求流程" >}}

**推送更改**  
首先，將您本地的更改推送到遠端倉庫：

```
git push origin main
```

**創建拉取請求**  
1. 瀏覽至您在 GitHub 上的分叉倉庫  
2. 點擊「Pull requests」標籤  
3. 點擊「New pull request」  
4. 確保基礎倉庫是原始倉庫，而當前倉庫是您的分叉倉庫  
5. 點擊「Create pull request」  

**等待審查**  
創建拉取請求後：  
1. 等待管理員審核您的更改  
2. 處理他們提供的任何反饋  
3. 如果需要，推送新提交來更新拉取請求  

{{< /expand >}}

一旦您創建了拉取請求，請輸入其編號以繼續：

<label for="finput">拉取請求編號輸入框：</label><br>
<input type="text" id="finput" name="finput"><br>
```