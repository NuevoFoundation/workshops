---
title: "Room 7: The Automation Alley"
description: "Harness the power of GitHub Actions to automate your workflow."
difficulty: "Advanced"
weight: 7
---

<img src="../images/room7_actions.jpg" alt="A room filled with gears and conveyor belts representing automated workflows" />

You step into a room buzzing with activity. Gears turn and conveyor belts move, symbolizing automated processes. A holographic display flickers to life: "Automate your way to victory!"

## Your Mission

1. Create a simple GitHub Action workflow.
2. Trigger the workflow by pushing a change to your repository.
3. View the results of the automated process.

## Instructions

1. In your local repository, create a new directory called `.github/workflows`.
2. Inside this directory, create a file named `hello-world.yml`.
3. Add the following content to the file:

   ```yaml
   name: Hello World Workflow
   on: [push]
   jobs:
     say-hello:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Say Hello
           run: echo "Hello, GitHub Actions!"

    ```
4. Commit this file and push it to your GitHub repository.
Go to the "Actions" tab in your GitHub repository to see the workflow run.

{{< notice warning >}}
Note: GitHub Actions can be powerful tools for automation, but be mindful of usage limits on free accounts.
{{< /notice >}}
{{< mermaid >}}
graph TD
A[Create workflow file] --> B(Commit and push)
B --> C{Workflow triggered?}
C -->|Yes| D[View results]
C -->|No| E[Check workflow file for errors]
E --> B
{{< /mermaid >}}

After your workflow runs successfully, what was the output of the "Say Hello" step? Enter it below:

<label for="finput">Input field for workflow output:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< expand "Hint" >}}
The output should be exactly what you specified in the echo command in your workflow file.
{{< /expand >}}

{{< notice success >}}
Fantastic job! You've automated your first process with GitHub Actions. Onward to the next challenge!
{{< /notice >}}

