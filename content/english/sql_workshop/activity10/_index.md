---
title: "Activity 10: Learn the SUM command"
description: "Learn SUM command"
date: 2020-07-07
prereq: "SELECT Command, WHERE Command"
difficulty: "Beginner"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<link rel="stylesheet" href="_activity10.css" type="text/css"></link>
<script type="text/javascript" src="_activity10.js"></script>

{{< youtube UCxPAE0xw3I >}}

## Return the Legendary Totems of Fun to The Leader

You have successfully found both Legendary Totems of Fun! The Leader thanks you for finding their lost treasure.

### The Leader also reveals a secret:
{{%notice info%}}
The Legendary Totems of Fun cannot unleash their full potential until they are merged together. They can only be merged together by the "Inventor".

Your next step is to find the person who can combine both Legendary Totems of Fun. The "Inventor" will only appear if you throw a huge party!
{{%/notice%}}

## Task 10: Help the inhabitants set up for the party!
The whole planet is invited! Help the citizens prepare for the party by finding out how many guests will be attending!

Let's go over the `SUM` Command!

![Explain](assets/sum.png)

#### Using the database 'planet' and the `SUM()` command, find the total number of guests that will attend this amazing party!

{{%notice tip%}}
Use the command from activity 1 to display the entire database.

* Hint 1: The command follows very closely to the example and the `AVG()` example (previous task).
* Hint 2: The 'population' column holds information on the number of individuals per city.
{{%/notice%}}

<!-- SQL Type In Activity -->

{{< rawhtml >}}
<div class="terminal_div" id="terminal_div">
    <div class = "outer">
      <h3 id = "commands" contenteditable="true" onclick="placeholder()">Type command here!</h3>
    </div>
    <div class = "prev">
      <h3 id = "prev"></h3>
    </div>
    <div style="clear: both;"></div>
    <button class="button button1" onclick="sql()"> Enter </button>
    <div style="clear: both;"></div> 
    <button class = "button reset" onclick="reset()">Reset</button>
</div>

<div style="clear: both;"></div> 
  
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  
<table id="table">
  <tr></tr>
</table>
  
<h4 id="story"></h4>
  
<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    You've completed the task! Continue to the next mission!
  </div>
</div>

{{< /rawhtml >}}
