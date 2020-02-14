# Nuevo Foundation Workshop

This repo contains all of the code and content for the [Nuevo Foundation Workshop website](https://workshops.nuevofoundation.org). 

## Website Links

* [Workshops website](https://workshops.nuevofoundation.org) - The site students use (aka production). This requires a manual push via Azure DevOps to push the master branch live. 
* [Workshops GitHub IO test site](https://nuevofoundation.org.github.io/workshops/) - The site workshop creators use to validate the content is rendering correctly (aka staging).  Updates to this page are pushed *automatically* when you change the master branch. 

## Creating or Editing Workshops

* [How to edit workshop content from GitHub](#how-to-edit-workshop-content-from-github) - For small changes/tweaks, you can change the content directly from the GitHub web page. 
* [How to create a workshop](#coming-soon) - This walks you through the steps needed to create a workshop. 

## How the site is built

The workshops subdomain content is built using the [DocDock](https://docdock.netlify.com/) theme for Hugo. [Hugo](https://gohugo.io) is a static site generator with a number of benefits:

1. **Content authors** can focus on content using markdown and not on the technical implementation of the site or CSS/page styling. Workshops are *automagically* added to the left table-of-contents and the workshops home page. Hugo works great locally (ex: on an airplane), and Hugo is the fastest static site generator, building the entire workshop site in <2 seconds.  
2. **Students** benefit from a consistent UX across workshops, built-in accessibility, localization, responsive design supporting mobile-to-desktop, automated links to the GitHub repo, and fast global site performance using the Azure CDN.
3. **Nuevo Dev Team** benefits from the ability to build and customize workshop pages including custom page templates, [built-in page controls for alerts, notes, buttons, warnings and more](https://workshops.nuevofoundation.org/guidelines/), custom controls (ex: the Nuevo header), <iframe> interactivity, custom metadata, automated cross-page linking, page theming, automated site map creation, built-in icons, and built-in automation using GitHub Actions and Azure DevOps for build / deployment. 

## [How to edit workshop content from GitHub]

**Scenario**: Let's make a simple change to the Contributor Guidelines page and submit a pull request.

### Find the markdown page on the website
Open the [Workshop Contributor Guidelines](https://workshops.nuevofoundation.org/guidelines/) page, scroll to the bottom and click the "Edit on GitHub" hyperlink.

### Open the File editor 
Click the pencil icon on the page which should open [Edit File page](https://github.com/NuevoFoundation/workshops/edit/master/content/guidelines/_index.md). 

From here you can toggle between the `Edit file` tab to edit the content and the `Preview changes` tab for a rough preview of how the page would be rendereed. 

### Make a change 
From here, you can make a change to the page, say by adding two exclamation points to the word "Welcome!"

**Before**: `Welcome!`

**After**: `Welcome!!!`

### Commit the change 
At the bottom of the page, you will see the **Commit changes** section. Set the following values:

* **Title**: `Update index.md` Default, no change needed
* **Extended Description**: For our example, we will say: `this is a test PR, you can safely delete` 
* **Select**: `Create a new branch for this commit and start a pull request`

Finally, click the **Propose file change** button to create your pull request. 

### Review your pull request
Once created, go to the [Pull Requests](https://github.com/NuevoFoundation/workshops/pulls) tab to load your pull request.
