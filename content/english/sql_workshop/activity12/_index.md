---
title: "Find the Inventor!"
description: "Find the Inventor!"
date: 2020-07-05
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
<link rel="stylesheet" href="_activity12.css" type="text/css"></link>
<script type="text/javascript" src="_activity12.js"></script>
<!-- Embed YouTube Video Link here when ready -->

## All the guests are here! We need to find the Inventor before its too late!

Everyone is having a good time at the party! The inventor is somewhere here, and we need to find the inventor!

### The Information that You Have:
{{%notice info%}}
* Favorite food is Pizza

* Favorite subject is Math

* Favorite movie is Big Hero 6
{{%/notice%}}

## Task 12: Who is the inventor? Use the 'people' database

{{< rawhtml >}}
<div class="terminal_div" id="terminal_div">
	<div class = "outer">
		<h3 id = "commands" contenteditable="true" onclick="document.getElementById('commands').innerHTML = ''"> Type command here!<h3>
	</div>
	<div style="clear: both;"></div> 
	</br></br></br></br></br></br>
	<button class="button button1" onclick="sql()"> Enter </button>
	<div style="clear: both;"></div> 
	<button class = "button reset" onclick="document.getElementById('commands').innerHTML = ''">Reset</button>
</div>
<div style="clear: both;"></div> 
<h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
<table id="table">
	<tr></tr>
</table>
<h4 id="story"></h4>

<div class = "inventor_div" id="inventor_div">
	<div class = "text_box">
		<h3 id = "person" contenteditable="true" onclick="document.getElementById('person').innerHTML = ''">Enter person here!<h3>
  </div>
  <button class="button second" onclick="check()"> Enter </button>
</div>
<h4 id="answer"></h4>
<img id = "plot">
{{< /rawhtml >}}