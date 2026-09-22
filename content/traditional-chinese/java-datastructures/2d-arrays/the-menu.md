---
title: "菜單"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
---

<p style="text-align: center;"><iframe width="60%" height="600px" src="https://youtube.com/embed/LelFnKtml8Q" title="The Menu - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## 儲存餐廳資訊

讓我們回顧一下之前在陣列部分中建立的餐廳陣列。

![restaurant](../../arrays/img/array2.png)

如上所見，此陣列存放了我們應用程式中所有不同的餐廳。現在，讓我們嘗試讓每個餐廳包含一個陣列，儲存其所有的菜單項目。如果正確完成，我們的陣列第 `0` 個元素「Burger King」應該會包含其對應的菜單項目。看起來可能像這樣：

![burgerkingarray](../img/2darray2.png)

如示例所示，第 `0` 個元素應該是 Burger King 的陣列。就像我們的一維陣列一樣，我們可以用零為基數來索引陣列項目。如果我們想點一份漢堡王的 Whopper，我們只需要呼叫 `Restaurant[0][0]`。這會呼叫 Burger King 的陣列，並取得該陣列的第一個元素，也就是 Whopper。如果我們想點薯條，只需呼叫 `Restaurant[0][2]`。

問題：如果我們想點橙雞，而橙雞是 Panda Express 陣列中的第十個元素，我們該如何存取該元素？

如果你的答案是 `Restaurant[2][9]`，那麼你是對的！Panda Express 是第三個陣列 `[2]`，而橙雞是第十個元素 `[9]`。