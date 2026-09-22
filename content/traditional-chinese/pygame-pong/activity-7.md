---
title: "Activity 7 - 定義退出遊戲的按鍵組合"
date: 2019-07-29T13:24:17-07:00
weight: 9
draft: false
---

到了本工作坊的最後一個活動時間，太棒了！你已經做得很棒來到這裡，你應該為自己感到自豪！

在這個活動中，你需要更改遊戲在按下指定按鍵組合時退出的方式。

在程式碼中找到 `# TODO (ACTIVITY 7)`。Pygame 庫通過使用 `event` 提供了一個檢測程式執行時按下哪些按鍵的方便方法。
目前，當按下 `'BACKSPACE'` 鍵或關閉整個窗口時，遊戲會退出。更改它，使遊戲在按下鍵盤上的 `'ESC'` 鍵時退出。

{{% notice tip %}}

如果 Pygame 庫中 `'BACKSPACE'` 鍵的值是 `K_BACKSPACE`，你能猜測 `'ESC'` 鍵的值是什麼嗎？在尋求幫助之前嘗試幾次。你可以做到的！
按 **Run** 來確認結果。

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">啟動 Replit</a>

## 收穫

你剛剛通過檢測特定按鍵的按下方式，更改了遊戲的退出方式。