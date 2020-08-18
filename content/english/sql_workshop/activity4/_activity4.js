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
 
	alert(headArr[0]); //planet
  alert(headArr[1]); //leader

	if( (headArr[0] == "planet" && headArr[1] == "leader") || (headArr[0] == "leader" && headArr[1] == "planet"))
	{
    alert("You found the right command!");
		document.getElementById("story").innerHTML = "Amazing work as always, space cadet! You discovered that the Planet of Fun's Dear Leader is Olivia Windsor! Now you need to figure out a way to get to them!";
	}
	else
	{
		document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
	}
}
