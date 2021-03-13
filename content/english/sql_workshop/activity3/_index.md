---
title: "Activity 3: Learn the COUNT Command"
description: "Learn the COUNT command"
date: 2020-07-14
prereq: "SELECT Command"
difficulty: "Beginner"
draft: false
---
<!-- Links for javascript and CSS needed for drop down logic -->
<link rel="stylesheet" href="../default/_default.css" type="text/css"></link>
<link rel="stylesheet" href="../default/_type.css" type="text/css"></link>
<script type="text/javascript" src="../default/alasql.js"></script>
<script type="text/javascript" src="../default/_type.js"></script>
<script type="text/javascript" src="../default/db.js"></script>
<script type="text/javascript" src="_activity3.js"></script>

{{< youtube Rvhy5DOuWHQ >}}

After receiving the message from the Galactic Federation, you continue your adventure.

You have successfully arrived on the Planet of Fun! The Galactic Federation has sent you a database about this planet.

{{< rawhtml >}}
  <table id="planettable">
    <tr>
    </tr>
    <script>displaytable("planet", "planettable");</script>
  </table>
{{< /rawhtml >}}

## Task 3: Talk to the inhabitants
You need to talk to the inhabitants of the Planet of Fun to discover what the problem is. Find out how many cities there are on the planet using the `COUNT()` command!

{{%notice info%}}
When we use the `SELECT * FROM planet;` command, the table above is displayed. But in order to check the number of cities, we can use the `COUNT()` command.
{{%/notice%}}

![count](assets/count.png)

### Question: Using `COUNT()`, what command will display the number of cities on the Planet of Fun?

{{%notice tip%}}

Press the Enter button on the terminal to check if you have the correct command. Use the Reset button to start over.

* Hint 1: The Galactic Federation gave you the name of this database at the beginning of this activity
* Hint 2: You can use either the asterix (*) or a column name
* Hint 3: Don't forget the semicolon (;)

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

  <h1 class="error" id="sqlcommand" style="visibility:hidden"><strong>ERROR INVALID INPUT></strong></h1>
  <table id="table">
    <tr>
    </tr>
  </table>
  <h4 id="story"></h4>

  <!-- Tells User to continue mission -->
  <div class="resume_plot" id="resume_plot" style="visibility:hidden">
    <p>You found the correct command to display the entire database! This is handy when you want to see all the information at the tip of your fingers!</p>
    <div class="alert">
      <span id="check">&#10003;</span>
      You've completed the task! Continue to the next mission!
    </div>
  </div>
{{< /rawhtml >}}
