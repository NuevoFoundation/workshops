---
title: "Use Comparators"
description: "Use Comparators"
date: 2020-07-11
prereq: "SELECT Command, WHERE Command"
difficulty: "Beginner"
draft: false
translationKey: "sql_activity_6"
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>

<script type="text/javascript" src="../default/_default.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="_activity6.js"></script>
<script type="text/javascript" src="../default/db.js"></script>

<!-- Embed YouTube Video Link here when ready -->


## Task 6: Find the Legendary Totem of Fun: Confetti Cannon 

You need to explore the planet and find the first Legendary Totem of Fun - The Confetti Cannon of Fun. 
Legends say that this cannon will never stop shooting confetti and it is a symbol of never-ending peace and entertainment. 

{{%notice info%}}
**Your only hint is that the artifact is created on 1738-09-12.**
{{%/notice%}}
To help you out, the Galactic Federation has sent you a brief tutorial on how to compare numbers in the database.

![Explain](assets/Comparator.png)
![Example](assets/Example.png)

{{%notice note%}}
There are different versions of databases and the one you are using needs the value being compared to be inside single quotation marks! 
{{%/notice%}}

### Using the database 'items' with the column 'date_created', find out which artifact is the Legendary Totem of Fun: Confetti Cannon

{{%notice tip%}}
Hint: The artifact is created on '1738-09-12' (Use single quotation marks).
{{%/notice%}}

<!-- SQL Type In Activity -->
{{< rawhtml >}}

	<div class="terminal_div" id="terminal_div">
		<div class="text-area">
			<textarea id="commands" placeholder="Enter command here!" style="resize: none"></textarea>
		</div>
      
      <div style="clear: both;"></div> 
      <button class="button button1" onclick="sql()">	Enter </button> 
      
      <div style="clear: both;"></div> 
      <button class = "button reset" onclick="document.getElementById('commands').value = ''">Reset</button>
         
	</div>
	
	<div style="clear: both;"></div> 
	<h1 class="error" id="sqlcommand" <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
	
	<table id="table">
		<tr>
		</tr>
	</table>
	
	<h4 id="story"></h4>

	<div id="text" style="visibility:hidden">
		<p> You found the location of the first Legendary Totem of Fun: The Confetti Cannon! </p>
	</div>

	<!-- Unhide the Confetti Cannon -->
	<img src="assets/confetti_canon.png" id="cannon" alt="cannon" style="visibility:hidden"/>

{{< /rawhtml >}}
