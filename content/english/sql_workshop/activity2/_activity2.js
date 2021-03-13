//Global variables to keep track of answer places
var p6 = null;
prev.push(p6);
bools.push(null);
div_array.push('div11');
div_array.push('div12');
ans_array.push('answer6');
place.push(p6);

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  var target = ev.currentTarget.id;
  var current = document.getElementById(target);
  
  /* If any rectangles are red without a block, change to white */
  var q = 0;
  for(q; q < place.length; q++) {
    
    var temp_num = place[q];
    var temp_div = null;
    switch(q) {
      case 0:
        temp_div = document.getElementById("div7");
        break;
      case 1:
        temp_div = document.getElementById("div8");
        break;
      case 2:
        temp_div = document.getElementById("div9");
        break;
      case 3:
        temp_div = document.getElementById("div10");
        break;
      case 4:
        temp_div = document.getElementById("div11");
        break;
      case 5:
        temp_div = document.getElementById("div12");
        break;
      default:
        break;
    }
    if(temp_div.style.borderColor != "green") {
      temp_div.style.borderColor = "white";
    }
  }
  
  prev[0] = p1;
  prev[1] = p2;  
  prev[2] = p3;
  prev[3] = p4;
  prev[4] = p5;
  prev[5] = p6;

  /* If drop div already has a block, don't replace image block */
  var inDivs = current.getElementsByTagName("img");
  if(inDivs.length == 0) {
    ev.target.appendChild(document.getElementById(data));
    
    //Keeps track of the answer places:
    //Ex - currentTarget.id = div6, data = answer1
    switch(ev.currentTarget.id) {
      case 'div7':
        bools[0] = data;
        break;
      case 'div8':
        bools[1] = data;
        break;
      case 'div9':
        bools[2] = data;
        break;
      case 'div10':
        bools[3] = data;
        break;
      case 'div11':
        bools[4] = data;
        break;
      case 'div12':
        bools[5] = data;
        break;
      default:
        break;
    }
  }

  /* Source code for duplicates: 
  https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array/49215411
  */
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
  var dupli = [...new Set(findDuplicates(bools))];
  var duplicate;
  var dupli_flag = false;
  
  /* Check for duplicates */
  for(var j = 0; j < dupli.length; j++) {
    if(dupli[j] !== null) {
      duplicate = dupli[j];
      dupli_flag = true;
    }
  }
  
  if(dupli_flag) {
    
    var index = 0;
    //Get rid of the previous duplicate
    for(var i = 0; i < prev.length; i++) {
      if(prev[i] == duplicate) {
        index = i;
      }
    }

    bools[index] = null;
  } 
  
  //If block is returned to word bank, remove answer placeholder from drop block
  if(target == "div1" || target == "div2" || target == "div3" || target == "div4" || target == "div5" || target == "div6") {
    var count = 0;
    for(count; count < bools.length; count++) {
      if(bools[count] == data) {
        bools[count] = null;
      }
    }
  }
  
    p1 = bools[0];
    p2 = bools[1];
    p3 = bools[2];
    p4 = bools[3];
    p5 = bools[4];
    p6 = bools[5];
}

function check(){

  //Highlight the correct answers in green
  change_color('div7', p1, "answer1");
  change_color('div8', p2, "answer2");
  change_color('div9', p3, "answer3");
  change_color('div10', p4, "answer4");
  change_color('div11', p5, "answer5");
  change_color('div12', p6, "answer6");

  //Check if all the answers are correct
  if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
     p4 == "answer4" && p5 == "answer5" && p6 == "answer6") {

    //Display the planet of fun info
    var display1 = document.getElementById("planet");
    display1.setAttribute("style","visibility:visible");
    
    var display2 = document.getElementById("gps");
    display2.setAttribute("style","visibility:visible");
  
    var display3 = document.getElementById("text");
    display3.setAttribute("style","visibility:visible");
    
    /* Changes terminal screen */
    var screen = document.getElementById("terminal_div");
    screen.style.backgroundImage = "url('../media/Accept.png')"
    
    //Display the checkmark
    var checkmark = document.getElementById("resume_plot");
    checkmark.setAttribute("style","visibility:visible");
    
    hide_boxes();

    document.getElementById("planet").src="assets/Show_Planet.png";
    document.getElementById("gps").src="assets/GPS.jpg";
  } else {
    alert("Try Again, Space Cadet!");
  }
}
