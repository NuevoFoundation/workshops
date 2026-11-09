---
title: "Activity 4: Draw a chart"
date: 2026-10-14
draft: false
weight: 6
---

Pictures help us see patterns faster than lists of numbers. A **bar chart** uses longer bars for bigger numbers. We can build one in Python by **repeating a character**: `"#" * 5` makes `#####`.

Our populations are huge, so we need a **scale**. If one `#` stands for 50000 people, then a city of 820000 gets `820000 // 50000 = 16` symbols. The `//` operator divides and throws away the leftover decimal part.

### Steps

1. Replace all existing code in the editor below with this complete program:

```python
teams = ["Harbor Hawks", "Mesa Mustangs", "Pine Ridge Pumas", "Sunset Sharks", "Lakeside Lynx", "Canyon Coyotes"]
populations = [820000, 450000, 95000, 1200000, 310000, 60000]

print("City populations (each # = 50000 people)")
for i in range(len(teams)):
    bar = "#" * (populations[i] // 50000)
    print(teams[i].ljust(18), bar, populations[i])
```

<iframe title="Sports data Activity 4: Python editor for population and fan bar charts" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/fcrtud9r)

2. Run it. You should see a row for each team, with the Sunset Sharks having the longest bar (24 symbols).
3. `.ljust(18)` pads each team name to 18 characters so the bars line up neatly.
4. Look at your chart. Which city stands out? Which two cities are closest in size? This is the heart of data science: looking for patterns.

### Challenge

Coach Luna estimates that **1 out of every 20 people** in a city will buy a ticket. That means expected fans = population `// 20`.

1. Draw a new chart of the **expected fans** for each team, where each `#` stands for 2500 fans.
2. Print the number of expected fans at the end of each row.

{{% notice tip %}}
Inside the loop, first make a variable: `fans = populations[i] // 20`. Then build the bar with `"#" * (fans // 2500)`.
{{% /notice %}}

Wow! You just turned numbers into a picture.
