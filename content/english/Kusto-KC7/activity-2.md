---
title: "Activity 2: Threat Intel Game"
description: ""
draft: false
weight: 8
---

<!-- Insert What is Whodunit video with intro trivia about hactivist/cybercrime/nation sponsored-->
{{< youtube ygHwgzXuF30 >}}


{{< rawhtml >}}

<SCRIPT language="JavaScript"
        type="text/javascript">
<!--
//
// Documentation:
//   http://chami.com/tips/javascript/
//
function checkAnswer(quizForm,
                     theAnswer,
                     urlRight,
                     urlWrong)
{
  var s = "?";

  // go through the "current choices"
  // to find the selected choice.
  // radio boxes pointing to choices
  // must be named "cc"
  // change if necessary
  //
  var i = 0;
  for(;i<quizForm.elements.length;i++)
  {
    if(("cc" ==
        quizForm.elements[i].name) &&
       (quizForm.elements[i].checked))
    {
      s = quizForm.elements[i].value;
    }
  }

  // no choice was selected
  //
  if("?" == s)
  {
    alert("Please make a selection.");
    return false;
  }

  // check if we have the correct
  // choice selected
  //
  if(s == theAnswer)
  {
    alert("'"+s+"' is correct!");
    if(urlRight)
    {
    document.location.href = urlRight;
    }
  }
  else
  {
    alert("'"+s+"' is incorrect.");
    if( urlWrong )
    {
    document.location.href = urlWrong;
    }
  }

  // return "false" to indicate not to
  // submit the form.
  // change this to "true" if the form
  // "action" is valid,
  // i.e. points to a valid CGI script
  //
  return false;
}
//-->
</SCRIPT>

{{< /rawhtml >}}

{{< alert theme="success" >}}**Best way to complete this section is to play the video while following along with the page below**{{< /alert >}}

### It's time to play a game of Whodunit, where we throw out some scenarios and you try to your hand at attribution.


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ1.png?raw=true" alt= “” width="80%" height="value">

#### Which type of adversary do you think did it?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivist<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cyber Criminal<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Nation Sponsored<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ2.png?raw=true" alt= “” width="80%" height="value">

#### Which type of adversary do you think did it?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'B');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivist<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cyber Criminal<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Nation Sponsored<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ3.png?raw=true" alt= “” width="80%" height="value">

#### Which type of adversary do you think did it?


<FORM method="POST"
      onSubmit="return checkAnswer(this,'C');"
>

<INPUT TYPE="RADIO" VALUE="A" NAME="cc">
A. Hacktivist<BR>

<INPUT TYPE="RADIO" VALUE="B" NAME="cc">
B. Cyber Criminal<BR>

<INPUT TYPE="RADIO" VALUE="C" NAME="cc">
C. Nation Sponsored<BR>

<INPUT TYPE="SUBMIT" VALUE="Submit Answer">

</FORM>


____________________

{{< alert theme="info" >}} Watch the video on this page to hear more about why the answers are what they are, and to learn details about the real-life adversary examples used for this Whodunit game. Thanks for playing! Let's move on to the next section. {{< /alert >}}