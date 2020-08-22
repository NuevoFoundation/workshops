//Global variables to keep track of answer places
var p6 = null;

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("content");
  ev.target.appendChild(document.getElementById(data));

  //Keeps track of the answer places:
  //Ex - currentTarget.id = div7, data = answer5
  switch(ev.currentTarget.id) {
    case 'div7':
      p1 = data;
      break;
    case 'div8':
      p2 = data;
      break;
    case 'div9':
      p3 = data;
      break;
    case 'div10':
      p4 = data;
      break;
    case 'div11':
      p5 = data;
	  break;
	case 'div12':
	  p6 = data;
      break;
    default:
  }
}

function check(){

  //Highlight the correct answers in green
  if(p1 == "answer1") {
    document.getElementById('div7').style.borderWidth = "thick";
    document.getElementById('div7').style.borderColor = "green";
  }
  if(p2 == "answer2") {
    document.getElementById('div8').style.borderWidth = "thick";
    document.getElementById('div8').style.borderColor = "green";
  }
  if(p3 == "answer3") {
    document.getElementById('div9').style.borderWidth = "thick";
    document.getElementById('div9').style.borderColor = "green";
  }
  if(p4 == "answer4") {
    document.getElementById('div10').style.borderWidth = "thick";
    document.getElementById('div10').style.borderColor = "green";
  }
  if(p5 == "answer5") {
    document.getElementById('div11').style.borderWidth = "thick";
    document.getElementById('div11').style.borderColor = "green";
  }
  if(p6 == "answer6") {
    document.getElementById('div12').style.borderWidth = "thick";
    document.getElementById('div12').style.borderColor = "green";
  }

  //Check if all the answers are correct
  if(p1 == "answer1" && p2 == "answer2" && p3 == "answer3" &&
     p4 == "answer4" && p5 == "answer5" && p6 == "answer6") {

    //Display the planet of fun info
    var display1 = document.getElementById("planet");
    display1.src = "assets/Show_Planet.png";
    display1.setAttribute("style","visibility:visible");
	
    var display2 = document.getElementById("gps");
    display2.src = "assets/GPS.png";
    display2.setAttribute("style","visibility:visible");
	
    var display3 = document.getElementById("text");
    display3.setAttribute("style","visibility:visible");
	
    alert("Congrats Space Cadet! Continue your Adventure!");
  }

}
