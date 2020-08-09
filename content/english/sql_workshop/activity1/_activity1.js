//Global variables to keep track of answer places
var p1 = null;
var p2 = null;
var p3 = null;
var p4 = null;
var p5 = null;

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("content", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  ev.target.appendChild(document.getElementById(data));

  //Keeps track of the answer places:
  //Ex - currentTarget.id = div6, data = answer1
  switch(ev.currentTarget.id) {
    case 'div6':
      p1 = data;
      break;
    case 'div7':
      p2 = data;
      break;
    case 'div8':
      p3 = data;
      break;
    case 'div9':
      p4 = data;
      break;
    case 'div10':
      p5 = data;
      break;
    default:
      alert("Try Again");
  }
}

function check(){

  //Highlight the correct answers in green
  if(p1 == "answer1") {
    document.getElementById('div6').style.borderColor = "green";
  }
  if(p2 == "answer2") {
    document.getElementById('div7').style.borderColor = "green";
  }
  if(p3 == "answer3") {
    document.getElementById('div8').style.borderColor = "green";
  }
  if(p4 == "answer4") {
    document.getElementById('div9').style.borderColor = "green";
  }
  if(p5 == "answer5") {
    document.getElementById('div10').style.borderColor = "green";
  }

  //Check if all the answers are correct
  if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
     p4 == "answer4" && p5 == "answer5") {

    //Display the database
    var display = document.getElementById("database");
    display.setAttribute("style","visibility:visible");
    alert("Congrats Space Cadet! Scroll Down To See The Results!");
  }

}
