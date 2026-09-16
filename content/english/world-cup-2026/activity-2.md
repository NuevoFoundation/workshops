---
title: "Activity 2: Report the Match"
date: 2026-09-15
draft: false
weight: 4
---

## Turn data into commentary

The match is underway! Your program already remembers team information. Now it will combine variables with text to create match announcements.

An **f-string** is a formatted string. Put the letter `f` before the opening quotation mark, then place a variable inside braces `{ }`. Python replaces the braces and variable name with the stored value.

```python
print(f"{captain_name} leads {team_name} onto the field!")
```

## Starting code

Keep your personalized values from Activity 1. Add score variables and formatted announcements:

```python
team_name = "Nuvi United"
opponent_name = "Comet City"
captain_name = "Maya"
jersey_color = "blue"

team_goals = 2
opponent_goals = 1

print(f"Welcome to the final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} leads {team_name} onto the field.")
print(f"{team_name} is wearing {jersey_color}.")
print(f"Score: {team_name} {team_goals} - {opponent_goals} {opponent_name}")
```

Run the program. Each pair of braces should be replaced with a name, color, or number.

Numbers do not need quotation marks:

```python
team_goals = 2
```

If you wrote `"2"` instead, Python would treat it as text rather than a number.

## Challenge: write a halftime update

Add two new `print()` lines:

1. Announce that the first half is complete and include both team names.
2. Tell the crowd the current score and include both score variables.

Your exact words can be different. Make the announcement sound like a real commentator, then change one score and run the program again.

{{% notice tip %}}
Start each line with `print(f"` and put every variable inside braces, such as `{team_goals}`.
{{% /notice %}}
