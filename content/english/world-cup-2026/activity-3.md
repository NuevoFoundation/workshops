---
title: "Activity 3: Decide the Champion"
date: 2026-09-15
draft: false
weight: 5
---

## The final whistle

The match is over, but the program still needs to decide which message to display.

An **`if`/`else` decision** lets a program choose between two paths:

- `if` runs its indented code when a condition is true.
- `else` runs its indented code when that condition is false.

The symbol `>` means "is greater than."

```python
if team_goals > opponent_goals:
    print("We won!")
else:
    print("The opponent won.")
```

## Starting code

Use this complete version of the match program. You may keep the team details and halftime announcements you personalized earlier.

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "blue"

team_goals = 3
opponent_goals = 2

print(f"Welcome to the final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} leads {team_name} onto the field.")
print(f"Score: {team_name} {team_goals} - {opponent_goals} {opponent_name}")

if team_goals > opponent_goals:
    print(f"{team_name} wins the championship!")
    print(f"{captain_name} lifts the cup as the crowd celebrates!")
else:
    print(f"{opponent_name} wins the championship.")
    print(f"{team_name} thanks its supporters after a great tournament.")
```

Run the program with `team_goals` greater than `opponent_goals`. Then swap the scores and run it again. You should see a different ending.

{{% notice warning %}}
The four spaces before each indented `print()` are important. They tell Python which instructions belong to `if` and which belong to `else`.
{{% /notice %}}

## Challenge: create your championship ending

Personalize both possible endings:

1. In the `if` path, include your team name, captain, and a victory celebration.
2. In the `else` path, include the opponent name and an encouraging message for your team.
3. Test both paths by changing the scores.

When both endings work, your match program is ready for the final whistle!

{{% notice tip %}}
Use at least one f-string in each path. Your team wins only when `team_goals > opponent_goals` is true.
{{% /notice %}}
