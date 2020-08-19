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
