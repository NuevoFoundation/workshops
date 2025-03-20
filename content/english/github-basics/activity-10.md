---
title: "Room 10: The Deployment Den"
description: "Learn to deploy your project using GitHub Pages."
difficulty: "Intermediate"
weight: 10
---

<img src="../images/room10_pages.jpg" alt="A room with a giant screen displaying a website and floating deploy buttons" />

You enter the final room to find a giant screen displaying a website and floating "Deploy" buttons. A triumphant voice announces: "Deploy your victory for all to see!"

## Your Mission

1. Enable GitHub Pages for your repository.
2. Create a simple index.html file.
3. Push the file and view your deployed site.

## Instructions

1. Go to your repository's "Settings" tab.
2. Scroll down to the "GitHub Pages" section.
3. Under "Source", select the branch you want to deploy (usually `main`).
4. In your local repository, create an `index.html` file in the root directory.
5. Add some HTML code to the file, like:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>My GitHub Pages Site</title>
     </head>
     <body>
       <h1>Hello, GitHub Pages!</h1>
       <p>I've completed the GitHub Adventure Game!</p>
     </body>
   </html>
    ```

6. Commit and push this file to your repository.
7. Wait a few minutes for GitHub to process your request, then visit your site at https://<username>.github.io/<repository-name> where <username> is your GitHub username and <repository-name> is the name of your repository.

{{< notice info >}}
Note: It may take a few minutes for your site to be deployed after pushing changes.
{{< /notice >}}

{{< mermaid >}}
graph TD
A[Enable GitHub Pages] --> B(Create index.html)
B --> C(Commit and push)
C --> D{Site deployed?}
D -->|Yes| E[View your site]
D -->|No| F[Wait a few minutes]
F --> D
{{< /mermaid >}}

After your site is deployed, what's the title of your webpage? You can find it at the top of your browser when you visit the site. Enter it below:

<label for="finput">Input field for webpage title:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Congratulations, GitHub master! You've completed all challenges and deployed your victory. You've escaped the GitHub Adventure Game!
{{< /notice >}}