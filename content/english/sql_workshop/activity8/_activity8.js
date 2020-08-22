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
  var ans1 = "select * from items where date_created like '%-10-%';";
  var ans2 = "select * from items where date_created like '%-10-%'";
  
  //Change string to lower case
  var input = document.getElementById("commands").value;
  input = input.toLowerCase();
	
	if(input == ans1 || input == ans2)
	{
		document.getElementById("story").innerHTML = "Amazing work as always, space cadet! The Legendary Totem of Fun: Infinite Buffet Table is in Fun Capital!";

    var display_legend = document.getElementById("legend");
    display_legend.setAttribute("style","visibility:visible");
    
    var display = document.getElementById("gps");
    display.src = "assets/GPSTerminal2.png";
    display.setAttribute("style","visibility:visible");
    
	}
	else
	{
		document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
	}
}