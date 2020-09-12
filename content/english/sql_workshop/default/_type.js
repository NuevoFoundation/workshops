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


function debug(input, ans, ans2)
{
  var actual2 = null;
  if(ans2 == null) 
  {
    var ans2 = "temp";
  }
  var display = document.getElementById("commands");
  var output = "";
  var inputText = input.split(" ");
  var actual = ans.split(" ");
  actual2 = ans2.split(" ");
  var i;
  var x;

  for(i = 0; i < inputText.length; i++)
  {
    if(inputText[i] == actual[i] || inputText[i] == actual2[i])
    {
      output += "<span class='right'>" + inputText[i] + "</span>";
    }
    else
    {
      output += "<span class='wrong'>" + inputText[i] + "</span>";
    }
    output += "<span class='right'>" + " " + "</span>";
  }
  display.innerHTML = output;
}

//highlights user input in green
function green()
{
  var display = document.getElementById("commands");
  console.log("display is " + display.innerHTML);
  display.innerHTML = "<span class='right'>" + display.innerHTML + "</span>";
}