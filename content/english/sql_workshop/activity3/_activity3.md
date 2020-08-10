---
title: "Learn the COUNT Command"
description: "Learn the COUNT command"
date: 2020-07-15
prereq: "none"
difficulty: "Beginner"
draft: false
translationKey: "sql_activity_3"
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../_activity3.css" type="text/css"></link>
<script type="text/javascript" src="../alasql.js"></script>
<script type="text/javascript" src="../_activity3.js"></script>

<script>
alasql("CREATE TABLE planet(city_number INT, name STRING, population INT, favorite_food STRING)");
alasql("INSERT INTO planet VALUES (1,'LEGO City',1500,'Pizza')");
alasql("INSERT INTO planet VALUES (2,'Playground City',1000,'Pizza')");
alasql("INSERT INTO planet VALUES (3,'City of Games',6000,'Hotdog')");
alasql("INSERT INTO planet VALUES (4,'Fun Capital',9500,'Hamburger')");
alasql("INSERT INTO planet VALUES (5,'Seriously Fun',2000,'Taco')");




</script>
# Congratulations!
You have successfully arrived on the Planet of Fun! The Galactic Federation has sent you a database about this planet.

![db](../assets/planet_db.PNG)

## Task 3: Talk to the inhabitants 
You need to talk to the inhabitants of the Planet of Fun to discover what the problem is. Find out how many cities there are on the planet using the COUNT command!

When we use the SELECT * FROM planet; command, this table is displayed. But in order to check the number of cities, we can use the COUNT command.

![count](../assets/count.png)

### Question: Using COUNT, what command will display the number of cities on the Planet of Fun?
{{< rawhtml >}}
	
	<div class="terminal_div" id="terminal_div">
		<img class="terminal" src="../assets/Terminal.png" alt="Terminal_screen" style="pointer-events:none">
		<div class="text-area">
			<textarea id="commands" placeholder="Enter command here!" style="resize: none"></textarea>
		</div>
	</div>

	
	<button class="button button1" onclick="sql()">	Enter </button>
	<br/>
	<h4 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h4>
	
	<table border=1 id="table">
		<tr>
		</tr>
	</table>
	
{{< /rawhtml >}}

