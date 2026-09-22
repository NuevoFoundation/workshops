```markdown
---
title: "JSappyBird - 答案鍵"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
此答案鍵涵蓋了學生在構建 Flappy Bird 遊戲時所添加的所有代碼。每一步會在 Replit 專案中的特定文件內新增特定的 JavaScript 程式行。此工作坊為引導式教學（學生會被指導輸入內容），而這份答案鍵將所有內容統整為教師參考資料。
{{% /notice %}}

## 步驟與代碼新增

### 1. 載入小鳥圖像

**文件:** `load-sprites.js`

```javascript
game.load.image('bird', 'assets/bird.png');
```

### 2. 更新開始畫面的文字

**文件:** `start-screen.js`

```javascript
var text = game.add.text(0, 0, "Press Space to Start", textOptions);
```

### 3. 按空白鍵讓小鳥跳躍

**文件:** `create-game.js`

```javascript
spaceKey.onDown.add(jump, this);
```

### 4. 添加重力

**文件:** `create-game.js`

```javascript
bird.body.gravity.y = 900;
```

### 5. 添加跳躍力量（速度）

**文件:** `create-game.js`

```javascript
bird.body.velocity.y = -350;
```

{{% notice tip %}}
**常見學生問題:** 「我該如何讓小鳥跳得更高或更低？」

修改 `bird.body.velocity.y` 中的數字。數值越負，跳得越高。嘗試 `-200` 以進行小跳，或 `-500` 進行大跳。
{{% /notice %}}

### 6. 添加小鳥下降時的旋轉

**文件:** `update-game.js`

```javascript
if (bird.angle < 50) {
    bird.angle += 1;
}
```

### 7. 添加跳躍聲音

**文件:** `create-game.js`

```javascript
jumpSound.play();
```

## 加分活動答案

### 讓小鳥向前跳

**文件:** `create-game.js`

```javascript
bird.body.velocity.x = 100;
```

### 加分探索問題

| 問題 | 發生了什麼 |
|------|-----------|
| 增加重力強度？ | `bird.body.gravity.y = 1500;` — 小鳥下墜速度加快，遊戲更難 |
| 設置重力為負值？ | `bird.body.gravity.y = -900;` — 小鳥會向上漂浮而非下墜 |
| 加速小鳥旋轉？ | 將 `bird.angle += 1` 修改為 `bird.angle += 5` |
| 移除旋轉的 `if` 條件? | 小鳥會無限旋轉，超過 50 度 |

## 活動代碼（進階版）

工作坊還包含三個教學活動，用以教授變數、條件語句、函數和迴圈：

### 活動 1: 保持小鳥在螢幕內 (條件語句)

```javascript
if (bird.y > 0 && bird.y < 490) {
    // 小鳥在螢幕內 - 允許移動
}
```

### 活動 2: 跳躍函數

```javascript
function jump() {
    bird.body.velocity.y = -300;
}
```

### 活動 3: 添加帶間隙的障礙物

```javascript
var hole = Math.floor(Math.random() * 6) + 1;

for (var i = 0; i < 8; i++) {
    if (i != hole) {
        addOnePipe(i);
    }
}
```

**運作原理:** `for` 迴圈會生成 8 個管道障礙物。變數 `hole` 隨機選擇一個位置（1 到 6）跳過，形成小鳥飛過的間隙。

## 完整遊戲邏輯總結

| 功能 | 代碼 | 文件 |
|------|------|------|
| 載入小鳥圖像 | `game.load.image('bird', 'assets/bird.png')` | load-sprites.js |
| 開始畫面 | `game.add.text(0, 0, "Press Space to Start", textOptions)` | start-screen.js |
| 空白鍵跳躍 | `spaceKey.onDown.add(jump, this)` | create-game.js |
| 重力 | `bird.body.gravity.y = 900` | create-game.js |
| 跳躍速度 | `bird.body.velocity.y = -350` | create-game.js |
| 下墜旋轉 | `if (bird.angle < 50) { bird.angle += 1; }` | update-game.js |
| 跳躍聲音 | `jumpSound.play()` | create-game.js |
```