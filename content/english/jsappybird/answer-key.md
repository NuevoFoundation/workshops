---
title: "JSappyBird - Answer Key"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This answer key covers all code that students add to build the Flappy Bird game. Each step adds a specific line of JavaScript to a specific file in the Replit project. The workshop is guided (students are told what to type), but this consolidates everything into one teacher reference.
{{% /notice %}}

## Step-by-Step Code Additions

### 1. Load the bird image

**File:** `load-sprites.js`

```javascript
game.load.image('bird', 'assets/bird.png');
```

### 2. Change the start screen text

**File:** `start-screen.js`

```javascript
var text = game.add.text(0, 0, "Press Space to Start", textOptions);
```

### 3. Make the bird jump on spacebar

**File:** `create-game.js`

```javascript
spaceKey.onDown.add(jump, this);
```

### 4. Add gravity

**File:** `create-game.js`

```javascript
bird.body.gravity.y = 900;
```

### 5. Add jump force (velocity)

**File:** `create-game.js`

```javascript
bird.body.velocity.y = -350;
```

{{% notice tip %}}
**Common student question:** "How do I make the bird jump higher or lower?"

Change the number in `bird.body.velocity.y`. More negative = higher jump. Try `-200` for a small hop or `-500` for a big leap.
{{% /notice %}}

### 6. Add bird rotation when falling

**File:** `update-game.js`

```javascript
if (bird.angle < 50) {
    bird.angle += 1;
}
```

### 7. Add jump sound

**File:** `create-game.js`

```javascript
jumpSound.play();
```

## Bonus Activity Answers

### Make the bird jump forward

**File:** `create-game.js`

```javascript
bird.body.velocity.x = 100;
```

### Bonus exploration questions

| Question | What happens |
|----------|-------------|
| Make gravity stronger? | `bird.body.gravity.y = 1500;` — bird falls faster, harder to play |
| Make gravity negative? | `bird.body.gravity.y = -900;` — bird floats upward instead of falling |
| Make bird rotate quicker? | Change `bird.angle += 1` to `bird.angle += 5` |
| Remove the `if` around rotation? | Bird spins endlessly past 50 degrees |

## Activity Code (Advanced Version)

The workshop also includes three coding activities that teach variables, conditionals, functions, and loops:

### Activity 1: Keep bird on screen (conditional)

```javascript
if (bird.y > 0 && bird.y < 490) {
    // bird is on screen - allow movement
}
```

### Activity 2: Jump function

```javascript
function jump() {
    bird.body.velocity.y = -300;
}
```

### Activity 3: Add obstacles with a gap

```javascript
var hole = Math.floor(Math.random() * 6) + 1;

for (var i = 0; i < 8; i++) {
    if (i != hole) {
        addOnePipe(i);
    }
}
```

**How it works:** The for loop creates 8 pipe obstacles. The `hole` variable picks a random position (1-6) to skip, creating a gap for the bird to fly through.

## Complete Game Logic Summary

| Feature | Code | File |
|---------|------|------|
| Load bird sprite | `game.load.image('bird', 'assets/bird.png')` | load-sprites.js |
| Start screen | `game.add.text(0, 0, "Press Space to Start", textOptions)` | start-screen.js |
| Spacebar jump | `spaceKey.onDown.add(jump, this)` | create-game.js |
| Gravity | `bird.body.gravity.y = 900` | create-game.js |
| Jump velocity | `bird.body.velocity.y = -350` | create-game.js |
| Falling rotation | `if (bird.angle < 50) { bird.angle += 1; }` | update-game.js |
| Jump sound | `jumpSound.play()` | create-game.js |
