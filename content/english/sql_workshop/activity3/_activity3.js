function sql() 
{
	clearTable();
	document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
	document.getElementById("sqlcommand").style.visibility="visible";

	var user = document.getElementById("commands").innerHTML;
	debug(user.toLowerCase(),"select count(*) from planet;");
	var array = alasql("MATRIX OF " + user);
	var ans = JSON.stringify(alasql(user));

  document.getElementById("sqlcommand").style.visibility = 'hidden';

	ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
	
	var ansArr = ans.split(',');
	var headArr = [];
	var i;
	for( i = 0; i < ansArr.length; i++)
	{
		headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
	}

	sqlToTable(headArr, array);

	var ans1 = "select count(*) from planet;";
	var ans2 = "select count(*) from planet";
	var ans3 = "select count(city_number) from planet;";
	
	if(user == ans1 || user == ans2 || user == ans3)
	{
		document.getElementById("commands").innerHTML = "<span class='right'>" + user + " </span>";
		alert("You found the correct command!");
		document.getElementById("story").innerHTML = "Oh no! You discover that the inhabitants are being invaded by the aliens from the planet Boredom. Press next to continue.";
	}
	else
	{
		document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
	}
}
