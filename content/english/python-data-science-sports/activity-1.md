---
title: "Activity 1: Meet the data"
date: 2026-10-14
draft: false
weight: 3
---

Coach Luna hands you a notebook with her league's information. There are six teams, and she wrote down how many people live in each team's city.

In Python, we can store a group of values in a **list**. A list keeps many values in order, inside square brackets `[ ]`, separated by commas. Every item in a list has a **position** (called an **index**), and Python starts counting at **0**, not 1!

| Index | 0 | 1 | 2 |
|-------|---|---|---|
| `teams` | "Harbor Hawks" | "Mesa Mustangs" | "Pine Ridge Pumas" |

We will use two lists that match up: `teams[0]` is a team, and `populations[0]` is the number of people in *that* team's city.

### Steps

1. Find the embedded Codebunga editor below.
2. Replace all existing code in the editor with this complete program, then press **Run**:

```python
teams = ["Harbor Hawks", "Mesa Mustangs", "Pine Ridge Pumas", "Sunset Sharks", "Lakeside Lynx", "Canyon Coyotes"]
populations = [820000, 450000, 95000, 1200000, 310000, 60000]

print("Number of teams:", len(teams))
print("First team:", teams[0])
print("Its city has", populations[0], "people")
```

<iframe title="Sports data Activity 1: Python editor for teams and population lists" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/fcrtud9r)

You should see:

```
Number of teams: 6
First team: Harbor Hawks
Its city has 820000 people
```

3. Look at the code. `len(teams)` counts how many items are in the list. `teams[0]` grabs the item at index 0.

{{% notice warning %}}
Both lists must stay in the same order! If you change a team's position, change its population's position too, or the data will get mixed up.
{{% /notice %}}

### Challenge

1. Print the **last** team and the number of people in its city.
2. Coach Luna adds a seventh team, the **Bay Barracudas**, from a city of **540000** people. Add them to **both** lists, then print the new number of teams.

{{% notice tip %}}
Use `teams[5]` for the sixth item, or `teams[-1]` to always get the last item. To add to the end of a list, use `.append()`, like `teams.append("Your Team")`.
{{% /notice %}}

Great job! You just stored your first data set.
