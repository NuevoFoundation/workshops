---
title: "Activity 8: Learn the LIKE Command"
description: "Learn LIKE Command"
date: 2020-07-09
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
<link rel="stylesheet" href="_activity8.css" type="text/css"></link>
<script type="text/javascript" src="_activity8.js"></script>

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/dPk644r21e0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


## Task 8: Find the Legendary Totem of Fun: Infinite Buffet Table

Another artifact you must find is the infinite buffet table of fun! Legends say that festivals will never run 
out of food with this mystic buffet table. 

{{% notice info %}}
This Totem was created a month after the previous artifact: 
the Confetti Cannon (reminder: the Confetti Cannon was created on 1738-09-12).
{{% /notice%}}

**The Galactic Federation has sent you a brief tutorial on a handy command: `LIKE`**

![Explain](assets/like_explain.png)
![Ex](assets/like.png)

#### Using the database called 'items' with a column labeled 'date_created', find the Infinite Buffet Table!
{{% notice tip %}}
You can use the command in activity 1 to display the entire database.

* Hint 1: The format for the date is Year-Month-Day.
* Hint 2: This Totem was created a month AFTER the Confetti Cannon (1738-09-12).
* Hint 3: What is the pattern? Do you need to look for the month at the beginning, end, or anywhere of the value?
{{% /notice%}}
<!-- SQL Type In Activity -->

{{< rawhtml >}}

  <div class="content_scaler">
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
    </div> <!-- terminal_div -->
  </div> <!-- content_scaler -->
  <div style="clear: both;"></div> 
  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  <table id="table">
    <tr></tr>
  </table>
  <h4 id="story"></h4>

<div id="legend" style="visibility:hidden">
  <h4> You found the location of the Legendary Totem of Fun: Infinite Buffet Table! Now we will travel to Fun Capital!</h4>
</div>

<br>

<!-- Unhide the buffet table location -->
<img id="gps" alt="gps" style="visibility:hidden; pointer-events: none;"/>

<!-- Tells User to continue mission -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    You've completed the task! Continue to the next mission!
  </div>
</div>

{{< /rawhtml >}}
