function add(button_var) {
  
  if(button_var == 1) {
    /* Obtém o valor atual do elemento html */
    var current = document.getElementById("lock1").value;
    var lock = "lock1";
  }
  else if(button_var == 2) {
    /* Obtém o valor atual do elemento html */
    var current = document.getElementById("lock2").value;
    var lock = "lock2";
  }
  
  current = parseInt(current, 10);
  var update = 0;
  
  /* Se número = 9, mude para 0 */
  if(current != 9) {
    update = current + 1;
  }

  document.getElementById(lock).innerHTML = update;
}

function subtract(button_var) {
  
  if(button_var == -1) {
    /* Obtém o valor atual do elemento html */
    var current = document.getElementById("lock1").value;
    var lock = "lock1";
  }
  else if(button_var == -2) {
    /* Obtém o valor atual do elemento html */
    var current = document.getElementById("lock2").value;
    var lock = "lock2";
  }
  current = parseInt(current, 10);
  
  /* Se número = 0, mude para 9 */
  if(current != 0) {
    update = current - 1;
  }
  else {
    update = 9;
  }
  document.getElementById(lock).innerHTML = update; 
  
}

/* O botão de verificação no vault */
function confirm() {
  
  var first = document.getElementById("lock1").value;
  var second = document.getElementById("lock2").value;
  
  if(first == 4 && second == 0) {
    alert("Está correto! Você encontrou a combinação correta!");
    //Mostra o prompt da próxima missão
    var display1 = document.getElementById("plot");
    display1.setAttribute("style","visibility:visible");
    
    //Exibir canhão de confete
    var display2 = document.getElementById("buffet");
    display2.src="assets/Buffet.png";
    display2.setAttribute("style","visibility:visible");
    
    /* Exibe a marca de seleção */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
  }
  else {
    alert("Tente novamente, Explorador Espacial!");
  }
  
  //Torna a caixa verde se estiver correta
  if(first == 4) {  
    var box = document.getElementById("lock1");
    box.setAttribute("style","border:10px solid lime");
    
    //Desativa o clique do botão
    var a1 = document.getElementById("first_up");
    a1.setAttribute('onclick', false);
    var a3 = document.getElementById("first_down");
    a3.setAttribute('onclick', false);
    
  }
  if(second == 0) {
    var box = document.getElementById("lock2");
    box.setAttribute("style","border:10px solid lime");
    var a2 = document.getElementById("sec_up");
    a2.setAttribute('onclick', false);
    var a4 = document.getElementById("sec_down");
    a4.setAttribute('onclick', false);
  }
}

function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERRO ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select avg(population) from planet;");
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
  var ans1 = "selecione média(população) do planeta;";
  
  //Altera a string para minúscula
  var input = user.toLowerCase();
  
  if(input == ans1)
  {
    green(input);
    document.getElementById("story").innerHTML = "Bom trabalho, Cadete Espacial! Você encontrou o tamanho médio da população!";
    
    /* Muda a tela do terminal */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
}
