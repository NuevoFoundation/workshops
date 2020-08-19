function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  ev.target.appendChild(document.getElementById(data));
  var div_num = ev.currentTarget.id;
 
  
  if(div_num == "div4" && data == "drag1") {
    alert("You found the correct ladder! Go talk to the Dear Leader!");
	
	  //Display next mission prompt
    var display1 = document.getElementById("text1");
    display1.setAttribute("style","visibility:visible");
	
	  //Turn box green
	  var box = document.getElementById("div4");
	  box.setAttribute("style","border:5px solid lime");
  }
  else if(div_num == "div4") {
    alert("Try again Space Cadet!");
  }
  
}

function sql() 
{
	clearTable();
	document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
	document.getElementById("sqlcommand").style.visibility="visible";
  

	var array = alasql("MATRIX OF " + document.getElementById("commands").value);
	
	document.getElementById("sqlcommand").style.visibility = 'hidden';
	
	var ans = JSON.stringify(alasql(document.getElementById("commands").value));
	
	ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
	
	var ansArr = ans.split(',');
	var headArr = [];
	var i;
	for( i = 0; i < ansArr.length; i++)
	{
		headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
	}

	sqlToTable(headArr, array);
	
	/*change answer here */
	var ans1 = "select max(height) from items where object in ('ladder');";
  var ans2 = "select max(height) from items where object in ('ladder')";
  var ans3 = "select * from items where object in ('ladder')";
  var ans4 = "select * from items where object in ('ladder');";
  
  //Change string to lower case
  var input = document.getElementById("commands").value;
  input = input.toLowerCase();
	
	if(input == ans1 || input == ans2 || input == ans3 || input == ans4)
	{
		document.getElementById("story").innerHTML = "Amazing work as always, space cadet! You discovered that the Planet of Fun's Dear Leader is Olivia Windsor! Now you need to figure out a way to get to them!";
    if(input == ans1 || input == ans2)
    {
      var display_legend = document.getElementById("legend");
      display_legend.setAttribute("style","visibility:visible");
    }
	}
	else
	{
		document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
	}
}
