```markdown
---
title: "JSappyBird - 答案解析"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
本答案解析涵盖了所有学生需要添加的代码，以完成 Flappy Bird 游戏的构建。每一步都会在 Replit 项目的特定文件中添加一行 JavaScript 代码。虽然工作坊是指导性的（会告诉学生应该输入什么），但本文将所有内容整合为一份教师参考资料。
{{% /notice %}}

## 分步骤代码添加

### 1. 加载小鸟图像

**文件:** `load-sprites.js`

```javascript
game.load.image('bird', 'assets/bird.png');
```

### 2. 更改开始屏幕文本

**文件:** `start-screen.js`

```javascript
var text = game.add.text(0, 0, "Press Space to Start", textOptions);
```

### 3. 按下空格键让小鸟跳跃

**文件:** `create-game.js`

```javascript
spaceKey.onDown.add(jump, this);
```

### 4. 添加重力

**文件:** `create-game.js`

```javascript
bird.body.gravity.y = 900;
```

### 5. 添加跳跃力度（速度）

**文件:** `create-game.js`

```javascript
bird.body.velocity.y = -350;
```

{{% notice tip %}}
**常见学生问题:** "我怎样让小鸟跳得更高或更低？"

更改 `bird.body.velocity.y` 中的数字。数字越小越负表示跳得越高。试试 `-200` 形成小跳，或 `-500` 形成大跳。
{{% /notice %}}

### 6. 添加小鸟在下落时的旋转

**文件:** `update-game.js`

```javascript
if (bird.angle < 50) {
    bird.angle += 1;
}
```

### 7. 添加跳跃音效

**文件:** `create-game.js`

```javascript
jumpSound.play();
```

## 加分活动答案

### 让小鸟向前跳跃

**文件:** `create-game.js`

```javascript
bird.body.velocity.x = 100;
```

### 加分探索问题

| 问题 | 结果 |
|------|------|
| 增大重力会怎样？ | `bird.body.gravity.y = 1500;` — 小鸟下落更快，难度增大 |
| 重力变为负值会怎样？ | `bird.body.gravity.y = -900;` — 小鸟会向上飘而不会下落 |
| 让小鸟旋转更快会怎样？ | 将 `bird.angle += 1` 改为 `bird.angle += 5` |
| 去掉旋转的 `if` 条件会怎样？ | 小鸟会无限旋转超过 50 度 |

## 活动代码（高级版本）

工作坊还包括三个教学活动，分别介绍变量、条件语句、函数和循环：

### 活动 1: 保持小鸟在屏幕内（条件语句）

```javascript
if (bird.y > 0 && bird.y < 490) {
    // 小鸟在屏幕内，允许移动
}
```

### 活动 2: 跳跃函数

```javascript
function jump() {
    bird.body.velocity.y = -300;
}
```

### 活动 3: 添加带有空隙的障碍物

```javascript
var hole = Math.floor(Math.random() * 6) + 1;

for (var i = 0; i < 8; i++) {
    if (i != hole) {
        addOnePipe(i);
    }
}
```

**原理:** `for` 循环创建 8 个的管子障碍物。`hole` 变量随机选择一个位置（1 到 6）进行跳过，形成小鸟可以穿过的空隙。

## 完整游戏逻辑总结

| 功能 | 代码 | 文件 |
|------|------|------|
| 加载小鸟图像 | `game.load.image('bird', 'assets/bird.png')` | load-sprites.js |
| 开始屏幕 | `game.add.text(0, 0, "Press Space to Start", textOptions)` | start-screen.js |
| 空格跳跃 | `spaceKey.onDown.add(jump, this)` | create-game.js |
| 重力 | `bird.body.gravity.y = 900` | create-game.js |
| 跳跃速度 | `bird.body.velocity.y = -350` | create-game.js |
| 下落旋转 | `if (bird.angle < 50) { bird.angle += 1; }` | update-game.js |
| 跳跃音效 | `jumpSound.play()` | create-game.js |
```