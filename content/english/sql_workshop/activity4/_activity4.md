---
title: "Select Multiple Info"
description: "Select Multiple Info"
date: 2020-07-13
prereq: "SELECT Command"
difficulty: "Beginner"
draft: false
translationKey: "sql_activity_4"
---
<!-- Links for javascript and CSS needed for drop down logic -->
<script type="text/javascript" src="../_activity4.js"></script>
<link rel="stylesheet" href="../../default/_type.css" type="text/css"></link>
<link rel="stylesheet" href="../../default/_default.css" type="text/css"></link>
<script type="text/javascript" src="../../default/alasql.js"></script>

<script type="text/javascript" src="../../default/_type.js"></script>


<script>
	alasql("CREATE TABLE galaxy(planet_number INT, planet STRING, leader STRING, population INT, coordinates INT)");

	alasql("INSERT INTO galaxy VALUES (1,'Puzzle Land','Thomas Stewart',10000,1)");
	alasql("INSERT INTO galaxy VALUES (2,'Planet of Mold','Lucy Stewart',90000,3)");
	alasql("INSERT INTO galaxy VALUES (3,'Ice Cream Freezer Land','James Dunkeld',20000,5)");
	alasql("INSERT INTO galaxy VALUES (4,'Planet of Fun','Olivia Windsor',20000,6)");
	alasql("INSERT INTO galaxy VALUES (5,'Desert Quadrant','Chloe Canmore',60000,7)");
	alasql("INSERT INTO galaxy VALUES (6,'Planet of Boredom',' ',90000,8)");
	alasql("INSERT INTO galaxy VALUES (7,'Nebula Planet','Harry Windsor',60000,9)");
	alasql("INSERT INTO galaxy VALUES (8,'Ocean World','Oliver Stuart',10000,10)");
	alasql("INSERT INTO galaxy VALUES (9,'Space Zone','',0,11)");
	alasql("INSERT INTO galaxy VALUES (10,'Eeh-Eeh','Amelia Tudor',90000,24)");
	alasql("INSERT INTO galaxy VALUES (11,'Planet of Pizza','',10000,27)");
	alasql("INSERT INTO galaxy VALUES (12,'Planet of Tacos','Jack Planta',900,60)");
</script>

<!-- Embed YouTube Video Link here when ready -->

## Task 4: Find Their Dear Leader

After going to the Capital of Fun, you are told by the inhabitants to talk to their Dear Leader. Find out which inhabitant is the Dear Leader.
To do so, lets take a look at how to select multiple columns in a database.

![Commas](../assets/Commas.png)

#### Now use what you learned to find out who is the leader of the Planet of Fun!
**The Galactic Federation sends you a reminder that the 'galaxy' database holds the following columns:**

* planet_number: What order the planets show up in the database.

* planet: The name of the planet.

* leader: The name of the leader of the planet.

* population: How many inhabitants live on the planet.

* coordinate: The location of the planet in the galaxy.

### Question: Using the 'galaxy' database, how do you display the planets and their leader?
**Hint: Only two columns are needed.**

<!-- SQL Type In Activity -->
{{< rawhtml >}}

	<div class="terminal_div" id="terminal_div">
		<img class="terminal" src="../../media/Terminal.png" alt="Terminal_screen" style="pointer-events:none">
		<div class="text-area">
			<textarea id="commands" placeholder="Enter command here!" style="resize: none"></textarea>
      <button class = "button reset" onclick="document.getElementById('commands').value = ''">Reset</button>
			<button class="button button1" onclick="sql()" style="top:0vw; left:0vw">	Enter </button>
		</div>
	</div>

	</br></br></br></br></br></br>
	<h1 class="error" id="sqlcommand" <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>

	<table id="table">
		<tr>
		</tr>
	</table>

	<h4 id="story"></h4>

{{< /rawhtml >}}

<p>  </p>
