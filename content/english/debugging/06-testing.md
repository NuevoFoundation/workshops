---
title: "Step 3 - Testing"
difficulty: "Intermediate"
weight: 7
draft: false
---

You’ve implemented the fix(es) for your bug(s). Naturally, the first thing you do is recompile your code and run it. If it looks right, you’ve fixed the bug!
…Or so you’d like to believe. However, in many settings it’s not that simple. You have to make sure that your fix hasn’t introduced new bugs, and that your fix actually works for all cases. To that end, knowing how to test your code is important.
Testing is similar to debugging in that you are still trying to find where bugs happen. However, in testing you already know or have a good idea of where the bug will occur, and so in your tests you’ll want to intentionally run that code. However, going into testing blind won’t help you very much.

### Unit Tests
Always start small with your tests. This idea is taken from scientific experiments: if you reduce the number of factors (independent variables) that are in play, you can narrow down the cause more easily. These are called unit tests. Rather than testing if the entire program or part works, a unit test looks at a specific part. For instance, a unit test could call one function that does not call other functions to see if it outputs the correct/expected value.

### Integration Tests
Only once your unit tests have succeeded should you start integration tests. Integration tests look at how multiple components of your program work together to see if they output the correct/expected value. An integration test could call a function that calls many other functions, or affects many different parts of the program.
Just because your unit tests work doesn’t mean your integration tests work. As an analogy, just because I have working parts of an electronic circuit (battery, LED, resistor, etc.) doesn’t mean the circuit as a whole works!