function add(button_var) {
  
  if(button_var == 1) {
    /* Get current value of html element */
    var current = document.getElementById("lock1").value;
    var lock = "lock1";
  }
  else if(button_var == 2) {
    /* Get current value of html element */
    var current = document.getElementById("lock2").value;
    var lock = "lock2";
  }
  
  current = parseInt(current, 10);
  var update = 0;
  
  /* If number = 9, change to 0 */
  if(current != 9) {
    update = current + 1;
  }

  document.getElementById(lock).innerHTML = update;
}

function subtract(button_var) {
  
  if(button_var == -1) {
    /* Get current value of html element */
    var current = document.getElementById("lock1").value;
    var lock = "lock1";
  }
  else if(button_var == -2) {
    /* Get current value of html element */
    var current = document.getElementById("lock2").value;
    var lock = "lock2";
  }
  current = parseInt(current, 10);
  
  /* If number = 0, change to 9 */
  if(current != 0) {
    update = current - 1;
  }
  else {
    update = 9;
  }
  document.getElementById(lock).innerHTML = update; 
  
}

/* The check button on the vault */
function confirm() {
  
  var first = document.getElementById("lock1").value;
  var second = document.getElementById("lock2").value;
  
  if(first == 4 && second == 0) {
    alert("That is correct! You found the correct combination!");
    //Display next mission prompt
    var display1 = document.getElementById("plot");
    display1.setAttribute("style","visibility:visible");
    
    //Display confetti cannon
    var display2 = document.getElementById("buffet");
    display2.src="assets/Buffet.png";
    display2.setAttribute("style","visibility:visible");
    
    /* Display the checkmark */
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
  }
  else {
    alert("Try Again, Space Explorer!");
  }
  
  //Turn box green if correct
  if(first == 4) {  
    var box = document.getElementById("lock1");
    box.setAttribute("style","border:10px solid lime");
    
    //Disable button clicking
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
  document.getElementById("sqlcommand").innerHTML = "ERROR INVALID INPUT";
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
  
  /*change answer here */
  var ans1 = "select avg(population) from planet;";
  
  //Change string to lower case
  var input = user.toLowerCase();
  
  if(input == ans1)
  {
    green(input);
    document.getElementById("story").innerHTML = "Nice work Space Cadet! You found the average population size!";
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/green.png')"
  }
}
