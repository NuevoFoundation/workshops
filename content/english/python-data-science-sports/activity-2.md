---
title: "Activity 2: Totals and averages"
date: 2026-10-14
draft: false
weight: 4
---

Coach Luna wants the big picture: how many people live in all six cities together, and how big is a *typical* city? Typing every number into a calculator would be slow. Let's let Python do it with a **loop**, which repeats instructions for every item in a list.

An **average** (also called the **mean**) is the total divided by how many items there are.

### Steps

1. Replace all existing code in the editor below with this complete program. We start again with the original six teams:

```python
teams = ["Harbor Hawks", "Mesa Mustangs", "Pine Ridge Pumas", "Sunset Sharks", "Lakeside Lynx", "Canyon Coyotes"]
populations = [820000, 450000, 95000, 1200000, 310000, 60000]

for i in range(len(teams)):
    print(teams[i], "-", populations[i])

total = 0
for people in populations:
    total = total + people
print("Total people:", total)

average = total / len(populations)
print("Average city size:", round(average))
```

<iframe title="Sports data Activity 2: Python editor for population totals and averages" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/fcrtud9r)

2. Run it. You should see each team and its population, then:

```
Total people: 2935000
Average city size: 489167
```

3. Let's understand how the total works. We start with `total = 0`. Each time the loop runs, `people` becomes the next population and Python adds it to `total`. After six trips through the loop, `total` holds every population added up.

{{% notice warning %}}
Remember the colon `:` at the end of the `for` line, and indent the lines that belong inside the loop. The `print("Total people:", total)` line is **not** indented, so it only runs once, after the loop finishes.
{{% /notice %}}

### Challenge

Python has built-in helpers called `max()` and `min()` that find the biggest and smallest number in a list. Use them to print:

1. The largest city population
2. The smallest city population
3. The gap between the two (largest minus smallest)

{{% notice tip %}}
Try `print("Largest:", max(populations))`. You can do math right inside `print`, or save the answer in a variable first.
{{% /notice %}}

Awesome! You just summarized a whole data set in a few lines of code.
