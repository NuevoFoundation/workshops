function check()
{
  //Exibir o canhão de confete se o comando correto for usado
  var display1 = document.getElementById("cannon");
  display1.src = "assets/confetti_canon.png";
  display1.setAttribute("style","visibility:visible");

  /* Altera a tela do terminal */
  var screen = document.getElementById("terminal_div");
  screen.style.backgroundImage = "url('../media/green.png')"
    
  //Exibir a marca de seleção
  var checkmark = document.getElementById("resume_plot");
  checkmark.setAttribute("style","visibility:visible");
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;

  //Se o usuário tentar inserir <> no alasql, transforme-o em !=
  if(user.includes("&lt;&gt;")) 
  {
    var tempString = user;
    var tempReplace = tempString.replace("&lt;&gt;", "!=");
    user = tempReplace;
  }
  //Se o usuário tentar inserir < no alasql
  else if(user.includes("&lt;")) 
  {  
    var tempString = user;
    var tempReplace = tempString.replace("&lt;", "<");
    user = tempReplace;
  }  
  //Se o usuário tentar inserir > no alasql
  else if(user.includes("&gt;")) 
  { 
    var tempString = user;
    var tempReplace = tempString.replace("&gt;", ">");
    user = tempReplace;
  } 
  
  debug(user.toLowerCase(),"select * from items where date_created = '1738-09-12';", "select * from items where date_created >= '1738-09-12';");
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
  
  /*mude a resposta aqui */
  var ans1 = "select * from items where date_created = '1738-09-12';";
  var ans2 = "select * from items where date_created >= '1738-09-12';";
  
  //Alterar string para minúscula
  var input = user.toLowerCase();

console.log(input);
  if(input == ans1 || input == ans2)
  {
    green(input);
    document.getElementById("story").innerHTML = "Bom trabalho! Você encontrou a localização do Lendário Totem da Diversão: Canhão de Confete!";
    check();
  }
  else
  {
    document.getElementById("story").innerHTML = "Não é exatamente o comando certo. Continue tentando!";
  }
}
