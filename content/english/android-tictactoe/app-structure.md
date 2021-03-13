---
title: "Game Application Structure"
date: 2020-07-27T14:17:07.42-07:00
draft: false
hidden: true
weight: 3
---

# Back to Foundations
Now that the game has the right title, let's dive deeper into all these files in the game folder. What do they all mean? How does it contribute to the game?
![Expanded view of application files](../resources/_gen/images/app_structure_files.png)

## AndroidManifest.xml
Every project in Android includes a manifest file. For your game, this is the ```AndroidManifest.xml``` file. The manifest file defines the metadata for your game, for instance, it can define the icon and the overall theme for your game application.

## activity_main.xml
This file is located under the "layout" folder. As the folder name states, files in this folder define how your application looks. If you look at the code for ```activity_main.xml```, you will see keywords such as ```TableLayout``` or ```TableRow```. The combination of keywords in the ```activity_main.xml``` file create the layout for the game chooser buttons (Player vs Player or Player vs Computer), the tic-tac-toe board, and the reset button. The ```TableLayout``` keyword says the layout will be aligned to a table style, which includes columns and rows. ```TableRow``` keyword creates a new row in the layout, with each additional element corresponding to a spot in that row:
![Game board layout in rows](../resources/_gen/images/activity_main.png)

## MainActivity.kt
This file is located under the "java" folder. The file contains the code and logic for your application.

## colors.xml, strings.xml, styles.xml
These files are located under the "values" folder. The files contain values that can be referenced by other XML files and application code.

# Putting it Together
All these files work together to create your game. The ```activity_main.xml``` file decides what is shown to you. When you click on the buttons, events are sent from the ```activity_main.xml``` to the ```MainActivity.kt``` to determine what happens on that button click. For repeatable values, ```activity_main.xml``` and ```MainActivity.kt``` can reach out to ```colors.xml, strings.xml, or styles.xml``` to use those values from one convenient location.
