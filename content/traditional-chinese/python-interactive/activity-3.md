---
title: "活動 3 - 歡迎顧客光臨餐廳並展示菜單"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---
## 歡迎顧客光臨餐廳並展示菜單

現在我們已經有了一個可以展示給顧客的餐廳橫幅，並且在您的 Python 程式中保存了菜單，接下來讓我們展示菜單給顧客並歡迎他們入內。在這項活動中，我們將撰寫兩個輔助函式來完成這些需求。

{{% notice info %}}
## 輔助函式
輔助函式是那些在主函式中被調用的函式，而主函式負責執行這個程式的所有程式碼。每個輔助函式各自完成一個簡單的目標。
{{% /notice %}}

我們將撰寫的第一個輔助函式是 `printMenu()`。這個函式將遍歷 `dictMenu` 字典，並生成如下範例所示的菜單。由於 `dictMenu` 的值全部是列表，而列表的第一個元素是物品的價格，第二個元素是描述，因此我們在打印每個物品的資訊時，應該使用索引來存取列表的每個元素。
提示：菜品的描述與菜名和價格位於不同的行上，這說明什麼？
提示：菜單中的每個項目之間有空行，我們該如何實現這一點…？

範例菜單：

-----菜單-----

Creamy Pesto Pasta ------ $15.99

Penne pasta tossed in a creamy pesto sauce, topped with black olives and sundried tomatoes

Spring Rolls ------ $8.0

Stir fried vegetables such as cabbage and carrot mixed with vermicelli and thin strips of fried tofu, wrapped in a crunchy outer layer.

我們將撰寫的第二個輔助函式是 `orderFromRestaurantYN()`，此函式將從使用者獲取輸入，詢問他們是否希望從菜單中下單。記得提示使用者他們應該輸入什麼樣的內容作為回應。不管使用者輸入 Y 代表 Yes 或 N 代表 No，或者是 yes/no 或 Yes/No，甚至是 y/n，都需要清楚地向顧客說明哪些是有效的回應方式。

完成這些函式撰寫後，請在 `main()` 函式中調用它們，並放置在打印餐廳橫幅之後。
在 `main()` 函式中調用這些函式時，記得只要使用者未輸入 `orderFromRestaurantYN()` 的有效回答，我們必須告訴他們，他們輸入的答案格式無效，然後再次向他們展示菜單，並提示他們重新回答一次。