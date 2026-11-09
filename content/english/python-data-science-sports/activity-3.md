---
title: "Activity 3: Sorting data into groups"
date: 2026-10-14
draft: false
weight: 5
---

Numbers are more useful when we can group them. Coach Luna wants to label each team's city as a **Big**, **Medium**, or **Small** market. A **market** is the group of people who might cheer for a team.

To make choices, Python uses an **`if` statement**. It checks whether something is true and only then runs the indented code under it. We can add `elif` ("else if") for a second check and `else` for everything left over.

Coach Luna's rules:

* 500000 people or more: **Big**
* 100000 to 499999 people: **Medium**
* Fewer than 100000 people: **Small**

### Steps

1. Replace all existing code in the editor below with this complete program:

```python
teams = ["Harbor Hawks", "Mesa Mustangs", "Pine Ridge Pumas", "Sunset Sharks", "Lakeside Lynx", "Canyon Coyotes"]
populations = [820000, 450000, 95000, 1200000, 310000, 60000]

big_markets = 0
for i in range(len(teams)):
    if populations[i] >= 500000:
        size = "Big"
        big_markets = big_markets + 1
    elif populations[i] >= 100000:
        size = "Medium"
    else:
        size = "Small"
    print(teams[i], "is a", size, "market")

print("Number of big markets:", big_markets)
```

<iframe title="Sports data Activity 3: Python editor for grouping city populations" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/fcrtud9r)

2. Run it. You should see two Big markets (Harbor Hawks and Sunset Sharks), two Medium, and two Small.
3. Change `500000` to `300000` and run again. How many big markets are there now? Changing a rule and re-running is how data scientists test ideas.

{{% notice warning %}}
Use `>=` to mean "greater than or equal to", and `==` (two equal signs) to check if two things are the same. A single `=` stores a value in a variable.
{{% /notice %}}

### Challenge

Write a loop that finds the **name** of the team with the largest city. Keep track of the index of the best team so far, and update it whenever you find a bigger population. Then print the team's name.

{{% notice tip %}}
Start with `best = 0`. Inside the loop, use `if populations[i] > populations[best]:` and set `best = i` when it is true. After the loop, `teams[best]` is the answer.
{{% /notice %}}

Nice work! Your code can now make decisions about data.
