---
title: "Learn LIKE Command"
description: "Learn LIKE Command"
date: 2020-07-09
prereq: "SELECT Command, WHERE Command"
difficulty: "Beginner"
draft: false
translationKey: "sql_activity_8"
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

<!-- Embed YouTube Video Link here when ready -->


## Task 8: Find the Legendary Totem of Fun: Infinite Buffet Table

Another artifact you must find is the infinite buffet table of fun! Legends say that festivals will never run 
out of food with this mystic buffet table. This Totem was created a month after the previous artifact: 
the Confetti Cannon (reminder: the Confetti Cannon was created on 1738-09-12).


**The Galactic Federation has sent you a brief tutorial on a handy command: LIKE**

![Explain](assets/like_explain.png)
![Ex](assets/like.png)

#### Using the database called 'items' with a column labeled 'date_created', find the Infinite Buffet Table!
{{%notice tip%}}
* Hint 1: The format for the date is Year-Month-Day.
* Hint 2: This Totem was created a month AFTER the Confetti Cannon (1738-09-12).
* Hint 3: What is the pattern? Do you need to look for the month at the beginning, end, or anywhere of the value?
{{%/notice%}}
<!-- SQL Type In Activity -->

{{< rawhtml >}}

<div class="terminal_div" id="terminal_div"><img class="terminal" src="../media/Terminal.png" alt="Terminal_screen">

  <div class="text-area">
    <textarea id="commands" placeholder="Enter command here!" style="resize: none"></textarea>
    <button class = "button reset" onclick="document.getElementById('commands').value = ''">Reset</button>
    <button class="button button1" onclick="sql()"> Enter </button>
  </div>
</div>

</br></br></br></br></br></br>
<h1 class="error" id="sqlcommand" <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>

<table id="table">
	 <tr>
	 </tr>
</table>

<h4 id="story"></h4>

<div id="legend" style="visibility:hidden">
  <p> You found the location of the Legendary Totem of Fun: Infinite Buffet Table! Now we will travel to Fun Capital!</p>
</div>

<br>

<!-- Unhide the Confetti Cannon -->
<img src="assets/GPSTerminal2.png" id="gps" alt="gps" style="visibility:hidden; pointer-events: none;"/>


{{< /rawhtml >}}