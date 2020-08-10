function sqlToTable(data) 
{
	var tbl = document.getElementById("table");
	var i;
	var j;
	for(i = 0; i < data.length; i++)
	{
		var row = tbl.insertRow();
		for(i = 0; i < data[0].length; i++)
		{
			var cell = row.insertCell();
		}
	}
	
	for(i = 1; i < table.rows.length; i++)
    {
        for(j = 0; j < table.rows[i].cells.length; j++)
        {
			table.rows[i].cells[j].innerHTML = data[i - 1][j];
        }
    }
}

function sql() 
{
	document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
	document.getElementById("sqlcommand").style.visibility="visible";
  
	var array = alasql("MATRIX OF " + document.getElementById("commands").value);
	document.getElementById("sqlcommand").innerHTML = "";
	
	sqlToTable(array);
}