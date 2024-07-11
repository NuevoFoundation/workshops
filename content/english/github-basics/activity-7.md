---
title: "Room 7: The Automation Alley"
description: "Harness the power of GitHub Actions to automate your workflow."
difficulty: "Advanced"
weight: 7
---

# Room 7: The Automation Alley

{{< figure src="/images/room7_actions.jpg" title="A room filled with gears and conveyor belts representing automated workflows" >}}

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
5. Go to the "Actions" tab in your GitHub repository to see the workflow run.

{{< hint warning >}}
**Note:** GitHub Actions can be powerful tools for automation, but be mindful of usage limits on free accounts.
{{< /hint >}}

{{< mermaid >}}
graph TD
    A[Create workflow file] --> B(Commit and push)
    B --> C{Workflow triggered?}
    C -->|Yes| D[View results]
    C -->|No| E[Check workflow file for errors]
    E --> B
{{< /mermaid >}}

After your workflow runs successfully, what was the output of the "Say Hello" step? Enter it below:

{{< input-encrypt key="Hello, GitHub Actions!" >}}
Fantastic job! You've automated your first process with GitHub Actions. Onward to the next challenge!
{{< /input-encrypt >}}