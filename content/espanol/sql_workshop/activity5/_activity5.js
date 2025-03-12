function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  var div_num = ev.currentTarget.id;
  var current = document.getElementById(div_num);
  
  /* If drop div already has a block, don't replace image block */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0 && data == "drag1") {
    ev.target.appendChild(document.getElementById(data));
  }
  
  // Check if correct ladder is chosen
  if(div_num == "div4" && data == "drag1") {
    alert("¡Encontraste al líder correcto! Ve y habla con ella.");
  
    //Display next mission prompt
    var display1 = document.getElementById("text1");
    display1.setAttribute("style","visibility:visible");
  
    //Turn box green
    var box = document.getElementById("div4");
    box.setAttribute("style","border:5px solid lime");
    
    //Disable dragging ladders
    var img1 = document.getElementById('drag1');
    img1.setAttribute('draggable', false);
    var img2 = document.getElementById('drag2');
    img2.setAttribute('draggable', false);
    var img3 = document.getElementById('drag3');
    img3.setAttribute('draggable', false);
    
    //Display the checkmark
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
  }
  else if(div_num == "div4") {
    alert("¡Inténtalo de nuevo, Cadete Espacial!");
  }
  
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select max(height) from items where object in('ladder');");    
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

  sqlToTable(headArr, array, "table");

  // white spaces have been removed from the answers because sometimes they cause errors when there are multiple white spaces
  var ans1 = "select max(height) from items where object in ('ladder');".replace(/\s+/g, '');
  var ans2 = "select * from items where object in ('ladder');".replace(/\s+/g, '');
  var ans3 = "select max(height) from items where object = 'ladder';".replace(/\s+/g, '');
  var ans4 = "select * from items where object = 'ladder';".replace(/\s+/g, '');
  var ans5 = "select max(height) from items where object not in('totem', 'key');".replace(/\s+/g, '');
  var ans6 = "select max(height) from items where object not in('totem');".replace(/\s+/g, '');
  var ans7 = "select max(height) from items where object not in('key');".replace(/\s+/g, '');
  
  // Change string to lower case
  var input = user.toLowerCase().replace(/\s+/g, '');

if(input == ans1 || input == ans2 || input == ans3 || input == ans4 || input == ans5 || input == ans6 || input == ans7)
  {
    green(user);
    document.getElementById("story").innerHTML = "Excelente trabajo, Cadete Espacial. Ahora tienes que averiguar cómo acercarte al Líder";
    
    // Changes terminal screen
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"

    // Display legend this in all successful answers intead of only ans1 and ans3.
    var display_legend = document.getElementById("legend");
    display_legend.setAttribute("style","visibility:visible");
  }
}
