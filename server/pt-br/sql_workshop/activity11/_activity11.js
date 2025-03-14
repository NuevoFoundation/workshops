function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERRO ENTRADA INVÁLIDA";
  document.getElementById("sqlcommand").style.visibility="visible";

  var user = document.getElementById("commands").innerHTML;
  debug(user.toLowerCase(),"select * from planet group by favorite_food;", "select count(*), favorite_food from planet group by favorite_food;");
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
  var ans1 = "selecione * do grupo de planetas por favorite_food (comida_favorita);";
  var ans2 = "selecione count(*), favorite_food do grupo de planetas por favorite_food;"
  
  //Alterar string para minúscula
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2)
  {
    green(input);
    document.getElementById("story").innerHTML = "Bom trabalho! Os cidadãos do planeta da diversão usam um fabricante de alimentos para cozinhar alimentos instantaneamente! Selecione os alimentos corretos que combinam com as comidas favoritas dos habitantes!"; 
    
    /* Muda a tela do terminal */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
}

/* Cria um array global de botões */
var food_buttons = ["cake_button","ic_button","hd_button","burger_button","pizza_button","taco_button"];

/* Flags para botões corretos */
var b = 0;
var h = 0;
var p = 0;
var t = 0;
var cake = 0;
var ice = 0;

/* Mude o contorno para azul para indicar que o botão está selecionado, mude novamente para preto para desmarcar */
function highlight(button_id) {
  
  /* Botão Obter */
  var current = document.getElementById(button_id);

  if(current.getAttribute("style", "border") == "border:3px solid black;" || current.getAttribute("style", "border") == null) {
    current.setAttribute("style","border:3px solid blue;");
  } else if(current.getAttribute("style", "border") == "border:3px solid blue;") {
    current.setAttribute("style","border:3px solid black;");
  }
}

/* Botão de redefinição para fornecedor */
function oven_reset() {

  var i;
  for(i = 0; i < food_buttons.length; i++ ) {
    
    var button_name = food_buttons[i];
    var current = document.getElementById(button_name);
    
    /* Mantenha o botão verde se estiver correto, caso contrário, reinicie*/
    if(current.getAttribute("style", "border") != "border:3px solid lime;") {
      current.setAttribute("style","border:3px solid black;");
    } 
  }
}

/* Torna os botões corretos verdes */
function green_button(current_button) {

  var current = document.getElementById(current_button);
  if(current.getAttribute("style", "border") == "border:3px solid blue;" && current_button != "cake_button" && current_button != "ic_button") {
    current.setAttribute("style","border:3px solid lime;");
  }
  
  /* Habilita flags */
  if(current.getAttribute("style", "border") == "border:3px solid lime;") {
    switch(current_button) {
      case "hd_button":
        h = 1;
        break;
      case "burger_button":
        b = 1;
        break;      
      case "pizza_button":
        p = 1;
        break;
      case "taco_button":
        t = 1;
        break; 
      default:
        break;      
    }
  } 
  /* Não deixa o botão de cake (bolo) ou ice cream (sorvete) verde, ativa sinalizadores indicando que estão selecionados */
  else {
    if(current_button == "cake_button" && current.getAttribute("style", "border") == "border:3px solid blue;") {
      cake = 1;
    } else {
      cake = 0;
    }
    if(current_button == "ic_button" && current.getAttribute("style", "border") == "border:3px solid blue;") {
      ice = 1;
    } else {
      ice = 0;
    }
  }
}

/* O botão de verificação no fornecedor */
function confirm() {
  
  /* Verifica os botões de comida corretos */
  var i;
  for(i = 0; i < food_buttons.length; i++ ) {
    
    var current = food_buttons[i];
    
    /* Destaca os botões corretos em verde */
    switch(current) {
      case "hd_button":
        green_button(current);
        break;
      case "burger_button":
        green_button(current);
        break;      
      case "pizza_button":
        green_button(current);
        break;
      case "taco_button":
        green_button(current);
        break;         
      case "cake_button":
        green_button(current);
        break;
      case "ic_button":
        green_button(current);
        break;
      default:
        break;
    }
  }
  
  /* Gráfico avançado */
  if(h == 1 && b == 1 && p == 1 && t == 1 && cake == 0 && ice == 0) {
    alert("Parabéns! Você tem comida para a festa!");
    
    /* Muda a tela do forno */
    var screen = document.getElementById("vendor_div");
    screen.style.backgroundImage = "url('assets/oven2.png')"
    
    var display = document.getElementById("plot");
    display.setAttribute("style","visibility:display;");
    
    /* Exibe a marca de seleção */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
  } else {
    alert("Verifique se apenas os alimentos favoritos estão selecionados");
  }
}
