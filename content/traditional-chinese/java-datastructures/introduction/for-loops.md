---
title: "For Loops"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 5
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/QHM7dmhFP64" title="For Loops - YouTube video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

當你確切知道需要執行程式碼區塊的次數時，應該使用 `for` 迴圈，而不是 `while` 迴圈：

```java
for (initialization; condition; iteration) {
  // code block to be executed
}
```

- `initialization` 在程式碼區塊執行之前執行（只執行一次）。
- `condition`（顧名思義）定義執行程式碼區塊的條件。
- `iteration` 在每次執行程式碼區塊後執行。

以下範例將印出數字 `0` 到 `4`：

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

- `initialization` 在迴圈開始前設定一個變數的初始值（`int i = 0`）。
- `condition` 定義迴圈運行的條件（`i` 必須小於 `5`）。如果條件為 `true`，迴圈將再次運行；如果條件為 `false`，迴圈將結束。
- `iteration` 每次程式碼區塊執行後增加一個值（`i++`）。

以下範例只會印出 `0` 到 `10` 之間的偶數值：

```java
for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}
```