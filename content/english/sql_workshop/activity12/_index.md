---
title: "Activity 12: Find the Inventor!"
description: "Find the Inventor!"
date: 2020-07-05
prereq: "SELECT Command"
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
<link rel="stylesheet" href="_activity12.css" type="text/css"></link>
<script type="text/javascript" src="_activity12.js"></script>

{{< youtube WocJGw2yd40 >}}

### All the guests are here! We need to find the Inventor before it's too late!

Everyone is having a good time at the party! The inventor has also arrived, now we need to figure out who the inventor is! No one knows what the inventor looks like, but the Leader has given you hints on how to find the inventor!

### Task 12: Display the entire database called "people" so we can look at all the attendees.
{{%notice tip%}}
* Hint 1: The command you use should display the entire "people" database.
* Hint 2: The command is similar to the one in activity 1 (Learn the `SELECT` command).
{{%/notice%}}

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
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT</strong></h1>
<table id="table">
	<tr></tr>
</table>
<h3 id="story"></h3>
{{< /rawhtml >}}

### Here are some hints to figure out who the "Inventor" is:
{{%notice info%}}
* The Inventor's favorite food is Pizza.

* The Inventor's favorite subject is Math.

* The Inventor's favorite movie is "Big Hero 6".
{{%/notice%}}

{{< rawhtml >}}
<div class = "inventor_div" id="inventor_div">
  <div class = "box_half" id = "box_half">
	  <div class = "text_box">
		  <h3 id = "person" contenteditable="true" onclick="document.getElementById('person').innerHTML = ''">Enter person here!<h3>
    </div>
  </div>
  
  <div class= "half" id = "half">
    <button class="button second" onclick="check()"> Check! </button>
  </div>
</div>

<h4 id="answer"></h4>
<img id = "plot">

<!-- Unhide plot and certificate after finding inventor -->
<div class="resume_plot" id="resume_plot" style="visibility:hidden">
  <div class="alert">
    <span id="check">&#10003;</span>
    You've completed the task!
  </div>
  
  <h2> You Saved the Planet of Fun! </h2>
  <p> The Planet of Fun is now protected from the invaders thanks to you! You found the lost Legendary Totems of Fun and returned them to their rightful place 
      and saved the citizens from danger! The inhabitants will never forget your act of kindness! Congrats space cadet! You’ve successfully saved the Planet of Fun! 
      <br><br>Click the "Download" button below to receive your honorary certificate!
  </p>
  
  <!--Download Button -->
  <form method="get" action="assets/Certificate.pdf" target="_blank">
    <button type="submit" id="download">Download</button>
  </form> 

</div>

{{< /rawhtml >}}
