/* Exibe a tabela no id especificado
 A função requer o nome da tabela anexado após "select * from"
 e identificador onde a tabela será exibida.
*/
function displaytable(tablename, id) 
{
  clearTable(id);

  var command = "select * from " + tablename + ";";
  var array = alasql("MATRIX OF " + command)
  var results = JSON.stringify(alasql(command));

  results = results.substring(results.indexOf("{") + 1, results.indexOf("}"));
  
  var resultsArr = results.split(',');
  var headArr = [];
  var i;
  for( i = 0; i < resultsArr.length; i++)
  {
    headArr.push(resultsArr[i].substring( resultsArr[i].indexOf('"') + 1, resultsArr[i].indexOf('":')));
  }

  sqlToTable(headArr, array, id);
}

/* Envia os resultados passados ​​como dados para esta função
para o id especificado como uma tabela.
*/
function sqlToTable(headers, data, id="table") 
{
  var tbl = document.getElementById(id);
  var row;
  var cell;
  var i;
  var j;
  var k;
  
  /*inserir cabeçalhos na primeira linha */
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

function clearTable(id="table")
{
  var clear = document.getElementById(id);
  clear.innerHTML = "";
}


function debug(input, ans, ans2)
{ 
  var actual2 = null;
  if(ans2 == null) 
  {
    var ans2 = "temp";
  }
  var display = document.getElementById("prev");
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

//destaca a entrada do usuário em verde
function green(input)
{
  var display = document.getElementById("prev");
  display.innerHTML = "<span class='right'>" + input + "</span>";
}

//limpa o espaço reservado
function placeholder()
{
  var display = document.getElementById("commands");
  if(display.innerHTML == "Type command here!")
  {
    display.innerHTML = "";
  }
}

function reset()
{
  clearTable();
  document.getElementById('commands').innerHTML = '';
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="hidden";
  document.getElementById('prev').innerHTML = '';
}