---
title: "Blocks: EarSketch - 答案參考"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
這是 JavaScript Blocks EarSketch 工作坊的教師參考資料。該工作坊使用拖放式的積木，但每個積木底層都會生成 JavaScript 程式碼。本答案參考展示了每個活動的對應 JavaScript 程式碼，供教師驗證學生的作品。由於這是一個創意音樂工作坊，因此存在許多正確答案。如果程式碼能夠無錯誤地運行並產生音樂，那麼程式碼就是正確的！
{{% /notice %}}

## 活動 1：設置節奏並添加音效

將一個 `fitMedia()` 積木拖放到 `setTempo` 積木的下方，並填入參數：

**對應的 JavaScript：**
```javascript
setTempo(120);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 1, 1, 9);
```

**積木參數：**

| 參數       | 值                                | 設置方式                      |
|------------|------------------------------------|------------------------------|
| 音效       | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | 在積木中點選「音效」，然後從音效面板中複製貼上 |
| 軌道       | `1`                                | 使用下拉式選單               |
| 起始小節   | `1`                                | 開始的小節                  |
| 結束小節   | `9`                                | 結束的小節                  |

## 活動 2：製作音樂（多種音效）

添加四個 `fitMedia()` 積木，每個積木放置在不同的軌道上：

**對應的 JavaScript：**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
```

{{% notice tip %}}
**學生的關鍵概念：** 每個 `fitMedia()` 積木都應使用不同的軌道編號。這樣可以保持音效的有序排列，並讓多個音效同時播放。
{{% /notice %}}

## 活動 3：添加效果

將一個 `setEffect()` 積木（4 個參數版本）拖放到 `fitMedia()` 積木下方：

**對應的 JavaScript：**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
```

**setEffect 參數（4 個參數版本）：**

| 參數           | 值       | 意義                    |
|----------------|----------|------------------------|
| 軌道           | `2`     | 哪個軌道（使用 `0` 表示主軌道/全部軌道） |
| 效果類型       | `DELAY` | 從下拉選單中選擇        |
| 效果參數       | `DELAY_FEEDBACK` | 從下拉選單中選擇 |
| 數值           | `-6.0`  | 範圍：-120.0 至 -1.0    |

## 活動 4：使用效果淡入

拖放一個 7 個參數的 `setEffect()` 積木來實現音量淡入：

**對應的 JavaScript：**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3);
```

**setEffect 參數（7 個參數版本）：**

| 參數           | 值       | 意義                    |
|----------------|----------|------------------------|
| 軌道           | `0`     | 主軌道（所有音效）       |
| 效果類型       | `VOLUME`| 音量控制                |
| 效果參數       | `GAIN`  | 響度設置                |
| 起始數值       | `-60`   | 幾乎靜音（以分貝為單位）|
| 開始小節       | `1`     | 淡入開始的時間          |
| 結束數值       | `0`     | 正常音量                |
| 結束小節       | `3`     | 淡入結束的時間          |

{{% notice tip %}}
**淡入效果如何實現：** 音量在第 1 小節以 -60 dB（幾乎靜音）開始，並在第 3 小節逐漸增加到 0 dB（正常音量）。分貝數值越負，音量越低。不要超過 0 dB。
{{% /notice %}}

## EarSketch 快速參考

| 積木                | 目的           | 關鍵參數                     |
|---------------------|---------------|-----------------------------|
| `setTempo(bpm)`    | 設置歌曲速度    | 45-220 BPM                 |
| `fitMedia(clip, track, start, end)` | 添加音效    | 從音效面板中選擇           |
| `setEffect(track, type, param, value)` | 添加效果 | 從下拉選單中選擇           |
| `set