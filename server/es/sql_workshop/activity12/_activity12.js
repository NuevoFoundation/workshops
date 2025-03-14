function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select * from people;");
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
  
  /*change answer here */
  var ans1 = "select * from people;".replace(/\s+/g, '');
  
  // Change string to lower case
  var input = user.toLowerCase().replace(/\s+/g, '');
  
  if(input == ans1)
  {
    document.getElementById("story").innerHTML = "Ese es el comando correcto para mostrar todos los invitados.";
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
}

function check()
{
   let potential = document.getElementById("person").innerHTML.trim().replace(/&nbsp;/g, '');
   let trimmedPotential = potential.toLowerCase().replace(/\s+/g,'');

   if (trimmedPotential == "dr.phi")
   {
    document.getElementById("answer").innerHTML = "!Encontraste al Inventor! ¡Ahora puedes unir los Tótems Legendarios del planeta de la Diversión en un solo Tótem más poderoso! Este Tótem desata un campo de fuerza protectora alrededor del Planeta de la Diversión. ¡El planeta está a salvo de invasores!";
    document.getElementById("plot").src="assets/Planet_Fun.png";
    
    /* Display the checkmark */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
   }
   else
   {
    document.getElementById("answer").innerHTML = "Inténtalo de nuevo. Esta no es la persona que estás buscando.";
   }
}
