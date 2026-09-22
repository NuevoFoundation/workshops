---
title: "活動 5 - 宣告並使用變數來設定字型"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

到目前為止，表現得非常好！現在我們來利用一個變數來更改遊戲中文字的字型。

在這項活動中，您需要應用在 Python 基礎課程中學到的有關變數的知識。

找到程式碼中的 `# TODO (ACTIVITY 5)`。宣告變數 `font_label` 並將其值設為 `'arial'`。現在看看程式碼中的這行陳述：`font_name = pygame.font.match_font('arial')`。您是否能找出在這條陳述中，應該在哪裡使用這個新變數來控制螢幕上顯示的字型？

{{% notice tip %}}

您可以透過執行 `pygame.font.get_fonts()` 來獲取電腦支援的字型清單。試著使用 `'arial'` 以外的字型。您最喜歡哪種字型呢？按下 **Run** 來檢視結果。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">啟動 Replit</a>

## 收穫

您剛剛使用變數修改了字型參數。如果您在程式中多個地方使用了相同的字型，只需要在一個地方修改變數，它就會自動影響到您在程式中所有使用該變數的地方！