function sqlToTable(headers, data) 
{
	var tbl = document.getElementById("table");
	var row;
	var cell;
	var i;
	var j;
	var k;
	
	/*insert headers onto first row */
	row = tbl.insertRow();
	for(i = 0; i < headers.length; i++)
	{
		cell = row.insertCell();
		tbl.rows[0].cells[i].innerHTML = headers[i];
	}
	
	for(i = 0; i < data.length; i++)
	{
		row = tbl.insertRow();
		for(j = 0; j < data[i].length; j++)
		{
			cell = row.insertCell();
			tbl.rows[i+1].cells[j].innerHTML = data[i][j];
		}
	}
}


function clearTable()
{
	var clear = document.getElementById("table");
	clear.innerHTML = "";
}

function sql() 
{
	clearTable();
	document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
	document.getElementById("sqlcommand").style.visibility="visible";
  
	var array = alasql("MATRIX OF " + document.getElementById("commands").value);
	
	document.getElementById("sqlcommand").style.visibility = 'hidden';
	
	var ans = JSON.stringify(alasql(document.getElementById("commands").value));
	
	/*"city_number":1    "name":"LEGO City"  "population":1500  "favorite_food":"Pizza"*/
	
	ans = ans.substring(ans.indexOf("{") + 1, ans.indexOf("}"));
	
	var ansArr = ans.split(',');
	var headArr = [];
	var i;
	for( i = 0; i < ansArr.length; i++)
	{
		headArr.push(ansArr[i].substring( ansArr[i].indexOf('"') + 1, ansArr[i].indexOf('":')));
	}

	sqlToTable(headArr, array);
	
	if(headArr[0] == "COUNT(*)" || headArr[0] == "COUNT(city_number)")
	{
    alert("You found the correct command!");
		document.getElementById("story").innerHTML = "Oh no! You discover that the inhabitants are being invaded by the aliens from the planet Boredom. Press next to continue.";
	}
	else
	{
		document.getElementById("story").innerHTML = "Not quite the right command. Keep trying!";
	}
}
