function sql() 
{
  clearTable();
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
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
  
  /*change answer here */
  var ans1 = "select * from planet group by favorite_food;";
  var ans2 = "select count(*), favorite_food from planet group by favorite_food;"
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1 || input == ans2)
  {
    green(input);
    document.getElementById("story").innerHTML = "Nice job! The citizens on the planet of fun use a food-maker-izer to instantly cook food! Select the correct food items that match the inhabitant's favorite foods!"; 
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
}

/* Create global button array */
var food_buttons = ["cake_button","ic_button","hd_button","burger_button","pizza_button","taco_button"];

/* Flags for correct buttons */
var b = 0;
var h = 0;
var p = 0;
var t = 0;
var cake = 0;
var ice = 0;

/* Change outline to blue to indicate button is selected, change back to black to de-select */
function highlight(button_id) {
  
  /* Get button */
  var current = document.getElementById(button_id);

  if(current.getAttribute("style", "border") == "border:3px solid black;" || current.getAttribute("style", "border") == null) {
    current.setAttribute("style","border:3px solid blue;");
  } else if(current.getAttribute("style", "border") == "border:3px solid blue;") {
    current.setAttribute("style","border:3px solid black;");
  }
}

/* Reset button for vendor */
function oven_reset() {

  var i;
  for(i = 0; i < food_buttons.length; i++ ) {
    
    var button_name = food_buttons[i];
    var current = document.getElementById(button_name);
    
    /* Keep button green if correct, otherwise reset*/
    if(current.getAttribute("style", "border") != "border:3px solid lime;") {
      current.setAttribute("style","border:3px solid black;");
    } 
  }
}

/* Turns correct buttons green */
function green_button(current_button) {

  var current = document.getElementById(current_button);
  if(current.getAttribute("style", "border") == "border:3px solid blue;" && current_button != "cake_button" && current_button != "ic_button") {
    current.setAttribute("style","border:3px solid lime;");
  }
  
  /* Enables flags */
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
  /* Does not turn cake or ice cream button green, sets flags indicating they are selected */
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

/* The check button on the vendor */
function confirm() {
  
  /* Checks for correct food buttons */ 
  var i;
  for(i = 0; i < food_buttons.length; i++ ) {
    
    var current = food_buttons[i];
    
    /* Highlights correct buttons in green */
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
  
  /* Advance plot */
  if(h == 1 && b == 1 && p == 1 && t == 1 && cake == 0 && ice == 0) {
    alert("Congrats! You have food for the party!");
    
    /* Changes oven screen */
    var screen = document.getElementById("vendor_div");
    screen.style.backgroundImage = "url('assets/oven2.png')"
    
    var display = document.getElementById("plot");
    display.setAttribute("style","visibility:display;");
    
    /* Display the checkmark */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
  } else {
    alert("Check to make sure only the favorite foods are selected");
  }
}
