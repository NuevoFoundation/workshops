---
title: "World Cup 2026 - Answer Key"
date: 2026-09-15
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
These are sample solutions. Students should be encouraged to invent their own team details and commentator messages.
{{% /notice %}}

### Activity 1: Build the Team Sheet

**Challenge:** Personalize the team name, opponent, captain, and jersey color.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

print("Championship final")
print("Home team:", team_name)
print("Away team:", opponent_name)
print("Captain:", captain_name)
print("Jersey color:", jersey_color)
```

Expected output:

```text
Championship final
Home team: Lightning FC
Away team: Mountain Stars
Captain: Jordan
Jersey color: green
```

### Activity 2: Report the Match

**Challenge:** Add a halftime announcement and current score using f-strings.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

team_goals = 2
opponent_goals = 1

print(f"Welcome to the final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} leads {team_name} onto the field.")
print(f"{team_name} is wearing {jersey_color}.")
print(f"Score: {team_name} {team_goals} - {opponent_goals} {opponent_name}")
print(f"Halftime! {team_name} and {opponent_name} head to the locker rooms.")
print(f"The halftime score is {team_goals} to {opponent_goals}.")
```

Students can use different wording as long as both new lines are f-strings and include the requested variables.

### Activity 3: Decide the Champion

**Challenge:** Personalize and test both championship endings.

```python
team_name = "Lightning FC"
opponent_name = "Mountain Stars"
captain_name = "Jordan"
jersey_color = "green"

team_goals = 3
opponent_goals = 2

print(f"Welcome to the final: {team_name} vs. {opponent_name}!")
print(f"{captain_name} leads {team_name} onto the field.")
print(f"Score: {team_name} {team_goals} - {opponent_goals} {opponent_name}")

if team_goals > opponent_goals:
    print(f"{team_name} wins! Confetti fills the stadium.")
    print(f"Captain {captain_name} lifts the cup with the whole team!")
else:
    print(f"{opponent_name} wins the championship.")
    print(f"{team_name} played with courage and will return even stronger!")
```

Test the victory path with:

```python
team_goals = 3
opponent_goals = 2
```

Test the other path with:

```python
team_goals = 1
opponent_goals = 2
```

The workshop intentionally uses two final paths. A tied score can be discussed as an extension after students are comfortable with `if`/`else`.
