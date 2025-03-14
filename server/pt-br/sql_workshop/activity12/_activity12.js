function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERRO ENTRADA INVÁLIDA";
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
  
  /*altere a resposta aqui */
  var ans1 = "select * from people;".replace(/\s+/g, '');
  
  //Muda a string para minúscula
  var input = user.toLowerCase().replace(/\s+/g, '');
  
  if(input == ans1)
  {
    document.getElementById("story").innerHTML = "Esse é o comando correto para mostrar a todos os participantes!";
    
    /* Muda a tela do terminal */
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
    document.getElementById("answer").innerHTML = "Você encontrou o inventor! Agora ele pode combinar os Totens Lendários da Diversão em um Totem mais poderoso! Este Totem libera um campo de força ao redor do Planeta da Diversão! O planeta está salvo dos invasores!";
    document.getElementById("plot").src="assets/Planet_Fun.png";
    
    /* Exiba a marca de seleção */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
   }
   else
   {
    document.getElementById("answer").innerHTML = "Tente novamente. Essa pessoa não é quem você está procurando.";
   }
}
