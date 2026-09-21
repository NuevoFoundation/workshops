```markdown
---
title: "模块：EarSketch - 答案解析"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
这是一个关于 JavaScript 模块的 EarSketch 工作坊的教师参考资料。该工作坊使用拖拽式模块，但每个模块底层都会生成 JavaScript 代码。此答案解析展示了每个活动的等效 JavaScript 代码，供老师核对学生的作业。因为这是一个以创意思维创作音乐的工作坊，答案可能多种多样。只要代码运行时没有错误并能产生音乐，说明代码是正确的！
{{% /notice %}}

## 活动 1: 设置节奏和添加声音

拖动一个 `fitMedia()` 模块到 `setTempo` 模块下并填写参数：

**等效 JavaScript:**
```javascript
setTempo(120);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 1, 1, 9);
```

**模块参数:**

| 参数       | 值                               | 如何设置                 |
|-----------|----------------------------------|-------------------------|
| 音频片段   | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | 点击模块中的“sound”，然后从声音面板复制粘贴 |
| 音轨       | `1`                             | 使用下拉菜单             |
| 起始位置   | `1`                             | 起始小节                 |
| 结束位置   | `9`                             | 结束小节                 |

## 活动 2: 制作一个完整的歌曲（多个声音）

添加四个 `fitMedia()` 模块，每个模块使用不同的音轨：

**等效 JavaScript:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
```

{{% notice tip %}}
**给学生的关键点：** 每个 `fitMedia()` 模块应该使用不同的音轨编号。这有助于将声音进行分类，并允许多种声音同步播放。
{{% /notice %}}

## 活动 3: 添加效果

将一个 `setEffect()` 模块（四参数版本）拖到 `fitMedia()` 模块下：

**等效 JavaScript:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
```

**setEffect 参数（四参数版本）：**

| 参数       | 值        | 含义                  |
|-----------|-----------|---------------------|
| 音轨       | `2`       | 选择音轨（使用 `0` 表示全音轨） |
| 效果类型   | `DELAY`   | 从下拉菜单中选择      |
| 参数       | `DELAY_FEEDBACK` | 从下拉菜单中选择   |
| 值         | `-6.0`    | 范围：-120.0 到 -1.0 |

## 活动 4: 使用效果创建渐入

拖动一个七参数版本的 `setEffect()` 模块来实现音量渐入的效果：

**等效 JavaScript:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3);
```

**setEffect 参数（七参数版本）：**

| 参数          | 值      | 含义                 |
|--------------|---------|--------------------|
| 音轨          | `0`     | 主音轨（全音轨）     |
| 效果类型      | `VOLUME` | 音量控制            |
| 参数          | `GAIN`  | 音量设置            |
| 起始值        | `-60`   | 几乎为静音（分贝单位） |
| 起始小节      | `1`     | 渐入开始的时间       |
| 结束值        | `0`     | 正常音量            |
| 结束小节      | `3`     | 渐入结束的时间       |

{{% notice tip %}}
**渐入效果的原理：** 音量在第 1 小节时从 -60 分贝（几乎静音）开始，并在第 3 小节时增加到 0 分贝（正常音量）。分贝数越负表示声音越小，不能超过 0 分贝。
{{% /notice %}}

## EarSketch 快速参考

| 模块                 | 功能       | 关键参数               |
|---------------------|----------|----------------------|
| `setTempo(bpm)`    | 设置歌曲速度 | 45-220 BPM           |
| `fitMedia(clip, track, start, end)` | 添加声音 | 从声音面板选择片段   |
| `setEffect(track, type, param, value)` | 添加效果 | 从下拉菜单中选择类型和参数 |
| `setEffect(track, type, param, startVal, start, endVal, end)` | 自动化效果 | 用于渐入/渐出      |
```