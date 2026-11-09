---
title: "Python: Data Science Intro with Sports - Answer Key"
date: 2026-10-14
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
These are sample solutions. There may be multiple valid approaches to each challenge.
{{% /notice %}}

Every solution assumes the starting lists:

```python
teams = ["Harbor Hawks", "Mesa Mustangs", "Pine Ridge Pumas", "Sunset Sharks", "Lakeside Lynx", "Canyon Coyotes"]
populations = [820000, 450000, 95000, 1200000, 310000, 60000]
```

### Activity 1

**Challenge:**

```python
print("Last team:", teams[-1])
print("Its city has", populations[-1], "people")

teams.append("Bay Barracudas")
populations.append(540000)
print("Number of teams:", len(teams))
```

Expected output: `Last team: Canyon Coyotes`, `Its city has 60000 people`, `Number of teams: 7`.

### Activity 2

**Challenge:**

```python
print("Largest:", max(populations))
print("Smallest:", min(populations))
print("Gap:", max(populations) - min(populations))
```

Expected output: `1200000`, `60000`, and a gap of `1140000`.

### Activity 3

**Challenge:**

```python
best = 0
for i in range(len(teams)):
    if populations[i] > populations[best]:
        best = i
print(teams[best], "has the biggest city")
```

Expected output: `Sunset Sharks has the biggest city`. With the threshold changed to 300000, the big markets are Harbor Hawks, Mesa Mustangs, Sunset Sharks, and Lakeside Lynx (4).

### Activity 4

**Challenge:**

```python
print("Expected fans (each # = 2500 fans)")
for i in range(len(teams)):
    fans = populations[i] // 20
    bar = "#" * (fans // 2500)
    print(teams[i].ljust(18), bar, fans)
```

Expected fan counts: 41000, 22500, 4750, 60000, 15500, 3000.

### Activity 5

**Challenge:**

```python
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

Expected extra fans: 11000, 2500, -3250, 15000, 500, -2000. Host: Sunset Sharks.

**Final challenge (open ended):** Students choose their own data, so answers vary. Look for: matching list lengths, a loop that totals and averages, an `if`/`elif`/`else` labeling, a bar chart with a sensible scale, and a comment that states a conclusion backed by the data. Example:

```python
places = ["Riverton", "Oakfield", "Bayview"]
people = [960000, 715000, 440000]

total = 0
for p in people:
    total = total + p
print("Total:", total, "Average:", round(total / len(people)))

for i in range(len(places)):
    size = "Big" if people[i] >= 500000 else "Medium"
    print(places[i].ljust(8), "#" * (people[i] // 100000), size)

# The data shows Riverton is the biggest of these three cities.
```

{{% notice tip %}}
The example above uses made-up cities. Remind students to look up and cite their source if they use real places.
{{% /notice %}}
