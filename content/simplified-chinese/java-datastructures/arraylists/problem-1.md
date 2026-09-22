```markdown
---
title: "问题 1: ArrayList 基础"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/unwrTbTILmA" title="问题 1: ArrayList 基础 - YouTube 视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<!--<link rel="stylesheet" href="../../style.css">-->

## 任务 1：插入

街角的墨西哥塔可车营业啦！新员工正在努力记录各种订单。帮助他们用 `ArrayList` 来组织所有的订单项目吧！

```js javascript
/*
Dan 正在他最喜欢的塔可店点单：
    - 2 份 "carne asada"
    - 4 份 "carnitas"
    - 1 份 "pollo"
    - 2 份 "birria"

    按照这个顺序返回包含所有这些元素的 ArrayList
*/
```

{{% notice 提示 %}}
1. 你如何向列表中添加元素？
2. Dan 想要在订单中包含哪些内容？
{{% /notice %}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DInsert?lite=true" title="问题 1: ArrayList 基础 - Replit 编辑器 1"></iframe>

## 任务 2：获取元素

附近刚刚开了一家中餐馆。来了大量订单，经理很难进行管理，所以他们将所有订单存储在一个 `ArrayList` 中。帮助完成程序以根据给定的索引返回特定的字符串。

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Hotdog"); 

// 返回 "Pizza"，因为它是菜单中的第 0 个项目
item = find(menu, 0);
```

{{% notice 提示 %}}
1. 你如何遍历列表？
2. 看一下示例菜单！
{{% /notice%}}

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DFind?lite=true" title="问题 1: ArrayList 基础 - Replit 编辑器 2"></iframe>

## 任务 3：移除元素

这家中餐厅的代码中有一个问题！订单已经被随机重复了，`ArrayList` 中充满了重复的订单。帮助餐厅老板编写一个程序，移除 `ArrayList` 中某个订单的前 `n` 次出现。

```js javascript
ArrayList<String> menu = new ArrayList<>(); 

menu.add("Pizza"); 
menu.add("Hotdog"); 
menu.add("Hamburger"); 
menu.add("Pizza");
menu.add("Pizza");
menu.add("Hotdog"); 

// 移除前两次出现的 Pizza
item = remove(menu,"Pizza", 2);

// 菜单应变为以下数组：{"Hotdog", "Hamburger", "Pizza", "Hotdog"}
```

<iframe frameborder="0" width="100%" height="800px" src="https://replit.com/@nuevofoundation/2DRemove?lite=true" title="问题 1: ArrayList 基础 - Replit 编辑器 3"></iframe>
```