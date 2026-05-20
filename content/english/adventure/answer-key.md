---
title: "Choose Your Own Adventure - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This workshop is creative — every student's story will be different! This answer key shows a complete working example based on Nuvi's story from the workshop, plus a code template that teachers can reference when helping students structure their own adventures.
{{% /notice %}}

## Key Concepts Used

| Concept | Python Code | Purpose in the Story |
|---------|------------|---------------------|
| Print text | `print("text")` | Tell the story to the reader |
| Get user input | `input("question")` | Let the reader make choices |
| Store in variable | `choice = input(...)` | Remember what the reader chose |
| Make decisions | `if` / `else` | Change the story based on the choice |

## Nuvi's Complete Adventure

This is a working example based on Nuvi's story board from the workshop:

```python
# Nuvi's Choose Your Own Adventure Game

print("=" * 40)
print("Nuvi's Adventure!")
print("=" * 40)
print()
print("Nuvi just finished Robotics practice at school.")
print("It's time to go home!")
print()

# Choice 1: How to get home
choice1 = input("Should Nuvi walk or bike home? Type 'walk' or 'bike': ")

if choice1 == "walk":
    print()
    print("Nuvi decides to walk home.")
    print("Along the way, Nuvi finds a cute puppy!")
    print("Nuvi pets the puppy and continues walking.")
    print("Nuvi arrives home feeling happy.")
elif choice1 == "bike":
    print()
    print("Nuvi hops on the bicycle and rides home.")
    print("The wind feels great! Nuvi rides super fast.")
    print("Nuvi arrives home in record time!")
else:
    print()
    print("Nuvi couldn't decide, so Nuvi just walked home.")

print()
print("Nuvi is finally home! Some friends are outside.")
print()

# Choice 2: What to do with friends
choice2 = input("Should Nuvi play soccer or go swimming? Type 'soccer' or 'swim': ")

if choice2 == "soccer":
    print()
    print("Nuvi and friends play soccer in the park!")
    print("Nuvi scores the winning goal!")
    print("Everyone cheers! What a great day!")
elif choice2 == "swim":
    print()
    print("Nuvi and friends go to the pool!")
    print("They splash around and have a great time.")
    print("Nuvi does a cannonball! SPLASH!")
else:
    print()
    print("Nuvi decides to just hang out with friends.")

print()
print("What an awesome day! The End.")
```

**Sample output (if user picks "walk" then "soccer"):**
```
========================================
Nuvi's Adventure!
========================================

Nuvi just finished Robotics practice at school.
It's time to go home!

Should Nuvi walk or bike home? Type 'walk' or 'bike': walk

Nuvi decides to walk home.
Along the way, Nuvi finds a cute puppy!
Nuvi pets the puppy and continues walking.
Nuvi arrives home feeling happy.

Nuvi is finally home! Some friends are outside.

Should Nuvi play soccer or go swimming? Type 'soccer' or 'swim': soccer

Nuvi and friends play soccer in the park!
Nuvi scores the winning goal!
Everyone cheers! What a great day!

What an awesome day! The End.
```

## Code Template for Students

Students can use this template as a starting point for their own stories:

```python
# My Choose Your Own Adventure Game
# Replace the text in quotes with your own story!

print("Welcome to my adventure game!")
print()

# Tell the beginning of your story
print("You are [describe the setting].")
print("[Something happens to start the adventure].")
print()

# First choice
choice1 = input("[Ask the reader to make a choice]: ")

if choice1 == "[option 1]":
    print("[What happens if they choose option 1]")
elif choice1 == "[option 2]":
    print("[What happens if they choose option 2]")
else:
    print("[What happens if they type something unexpected]")

print()

# Second choice
choice2 = input("[Ask the reader to make another choice]: ")

if choice2 == "[option A]":
    print("[What happens if they choose option A]")
elif choice2 == "[option B]":
    print("[What happens if they choose option B]")
else:
    print("[What happens if they type something unexpected]")

print()
print("The End!")
```

{{% notice tip %}}
**Common student issues and solutions:**

**"My if statement never matches!"**
- Make sure the comparison matches exactly what the user types. `"Walk"` is not the same as `"walk"`. Tip: use `.lower()` to handle capitalization: `if choice1.lower() == "walk":`

**"How do I add more choices?"**
- You can nest if/else statements inside each other for branching paths, or add more `elif` options. Each choice creates a new branch of the story.

**"How do I make the story longer?"**
- Add more `print()` statements between choices to tell more of the story. You can also add a third or fourth choice using the same `input()` and `if/else` pattern.
{{% /notice %}}

## Story Board to Code Mapping

| Story Board Element | Code Concept |
|--------------------|-------------|
| Story text the reader sees | `print("...")` |
| Reader makes a decision | `choice = input("...")` |
| Different paths based on decision | `if` / `elif` / `else` |
| Combining text with variables | `print("Hello " + name)` |
| Multiple endings | Multiple `if/else` branches |
