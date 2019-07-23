# Nuevo Foundation Workshop files

This page explains how to create and test workshop files locally on your machine.

## Setup Steps

1. **Install the git command line** - instructions to do this can be found on the [GitHub website](https://help.github.com/en/articles/set-up-git)

2. \*_Install Hugo_ - Follow the [Hugo setup instructions](https://gohugo.io/getting-started/installing).

3. **Clone the project locally** - From the command line, type `git clone https://github.com/NuevoFoundation/workshops.git`

4. \*_Run the project locally_ Navigate to the newly created `workshops` folder and run the following command `hugo server -D` to run Hugo locally (-D will show draft posts). You should see something similar to this:

<pre>
danielfe@DanielfeMac:~/\_Repos/workshops (master)\$ hugo server -D

                   | EN

+------------------+-----+
Pages | 18
Paginator pages | 0
Non-page files | 0
Static files | 209
Processed images | 0
Aliases | 5
Sitemaps | 1
Cleaned | 0

Total in 126 ms
Watching for changes in /Users/danielfe/\_Repos/workshops/{content,data,layouts,static,themes}
Watching for config changes in /Users/danielfe/\_Repos/workshops/config.toml
Environment: "development"
Serving pages from memory
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at //localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop`
</pre>
5. **Open a browser to see the site** Open a browser to http://localhost:1313 to see the website live.

## Create a new workshop

All content in Hugo is added to the `workshops/content` folder

**Create a new workshop**: From the command line in the root directory (aka the `workshops/` directory), type the command:

`hugo new workshop-name/workshop-name.md`

For example, to create a workshop named `web-basics`, type the command `hugo new web-basics/index.md`

**Output**: Hugo will create the workshop under `workshops/content/web-basics/index.md

**URL**: You can navigate to that page using the `hugo server -D` command from the workshop directory to run the server and navigate to the new page (NOTE: you must remove the .md at the end of the file)

`http://localhost:1313/web-basics/`

## Editing a workshop file

You can open Visual Studio Code by typing `code .` from the `workshops` folder. You can then edit the file using the markdown format.

This project support regular markdown and a series of custom shortcodes for things like notes, warnings, etc.

- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Available shortcodes](https://docdock.netlify.com/shortcodes/)

## Adding metadata for your workshop

If you followed the `hugo new` step from above, you should have a new file named `index.md` with the following metadata at the top of the file that you can edit to better describe your workshop

<pre>
--- 
title: "Web Basics" 
description: "Workshop description goes here" 
date: 2019-07-22T14:51:26-07:00 
prereq: "link to workshop markdown file" 
difficulty: "Beginner, Intermediate, or Advanced" 
download: "URL to GitHub folder goes here" 
draft: true 
---
</pre>
## Contributor guidelines coming soon
