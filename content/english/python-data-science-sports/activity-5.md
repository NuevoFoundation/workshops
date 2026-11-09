---
title: "Activity 5: Pick the championship host"
date: 2026-10-14
draft: false
weight: 7
---

It is decision time! Coach Luna must choose the championship host city. A good host has **more expected fans than stadium seats**, so every seat gets filled and fans are excited. You will combine everything you learned: lists, loops, `if` statements, and charts.

Here is a third list with each team's stadium seats:

| Team | Seats |
|------|-------|
| Harbor Hawks | 30000 |
| Mesa Mustangs | 20000 |
| Pine Ridge Pumas | 8000 |
| Sunset Sharks | 45000 |
| Lakeside Lynx | 15000 |
| Canyon Coyotes | 5000 |

For each team, we compute **extra fans = expected fans - seats**. A positive number means extra fans who could not fit. The host is the city with the **largest** extra fans.

### Steps

1. Replace all existing code in the editor below with this complete program, then press **Run**:

```python
teams = ["Harbor Hawks", "Mesa Mustangs", "Pine Ridge Pumas", "Sunset Sharks", "Lakeside Lynx", "Canyon Coyotes"]
populations = [820000, 450000, 95000, 1200000, 310000, 60000]
seats = [30000, 20000, 8000, 45000, 15000, 5000]

host = 0
most_extra = -1000000
for i in range(len(teams)):
    fans = populations[i] // 20
    extra = fans - seats[i]
    print(teams[i], "has", extra, "extra fans")
    if extra > most_extra:
        most_extra = extra
        host = i

print("The championship host is the", teams[host], "!")
```

<iframe title="Sports data Activity 5: Python editor for choosing the championship host" src="https://codebunga.com/embed/fcrtud9r" width="100%" height="600" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>

[Can't see the editor? Open Codebunga in a new tab.](https://codebunga.com/projects/fcrtud9r)

2. You should see that the **Sunset Sharks** win with 15000 extra fans.
3. Notice `most_extra = -1000000`. We start with a very small number so the first team always beats it.

### Final challenge: your own data

Now be the data scientist! Replace the lists with data about a place you care about. Ideas:

* The populations of six cities or countries you looked up online, plus seat counts of local arenas
* Your school's teams and how many students are in each grade
* Your own fantasy league with made-up numbers

Then:

1. Print the total and average of your population list.
2. Label each item **Big**, **Medium**, or **Small** using rules *you* choose.
3. Draw a bar chart of your data.
4. Write one sentence in a comment, starting with `#`, that answers the question: *What did the data tell you?*

{{% notice tip %}}
Keep your lists the same length, and keep matching items at matching positions. If you get an `IndexError`, one list is probably shorter than another.
{{% /notice %}}

{{% notice info %}}
If your data comes from the internet, ask a teacher or adult to help check that the source is trustworthy, and write down where it came from. Good data scientists always cite their sources!
{{% /notice %}}

Congratulations! You helped Coach Luna choose her champion city and learned how data scientists think.
