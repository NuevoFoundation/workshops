---
title: "Activity 2: Threat Intel Game"
draft: false
weight: 8
---


<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ETcVXoS_Ytk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>


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

### What is Attribution?

One key topic in the world of cybersecurity you'll come across is called **attribution**. Attribution in cybersecurity refers to the process of tracking, identifying, and generally attributing blame on the perpetrator of a cyber attack. Cyber attacks, also known commonly as *hacking*, are an attempt by an adversary to gain access to systems for the purpose of altering, stealing, destroying, or exposing information. Examples of methods to carry out a cyber attack include:
- **Malware** - Short for malicious software, is any code created with intent to do harm like a virus or a worm.
- **Phishing** - An attack that uses email, text messaging (SMS), or social media to entice a victim to share sensitive information or to download a malicious file, this is much like catfishing.
- **Ransomware** - Malicious code intended to lock victims out of their own systems with in order to exact a ransom, usually money, from the victim in exchange for regaining access to their locked systems or data.
- **Password Spray** - An attacker acquires a list of usernames, and then tries logging in across all usernames using the same password, and then repeats the process with new passwords until they gain system access.

### Challenges to Attribution

Although it is a key part of cybersecurity, attribution can be challenging to do, even for cybersecurity experts. Experts often must conduct extensive forensic investigations and analyze lots of data looking for ways to prove who could be responsible for attacks. Some things experts look at to help with this are:
- **Historical Data** - Are there repeated patterns used across multiple cyber attacks over time that could indicate which malicious actor(s) could be behind this?
- **Intent or Motives** - Are there attacks specifically targeting educational institutions, for example? Could a cyber attack coincide with a publicly observable political conflict between countries that cannot afford to be caught shooting missiles, sending military troops, or otherwise engaging in what is called **kinetic warfare** with another country?
- **Geographical Pattern of Attack** - Are organizations in a particular country predominantly being targeted? Transversely, is an entity targeting organizations all over the world EXCEPT one country....potentially their own?

The difficulty level of cyber attribution makes it an attractive method of attack for groups with the knowledge, resources, and motivation to attempt it while hiding traces of their involvement. With that in mind, our mission is to help raise the next generation of Cyber Defenders to combat cyber attacks. As difficult as it can be, this type of work has real world impact. Check this story below that demonstrates the level of impact Cyber Defenders can have:
- Exposing POLONIUM activity and infrastructure targeting Israeli organizations: https://vulners.com/mssecure/MSSECURE:A2F131E46442125176E4853C860A816C 

### Classifications of Adversaries

There are 3 main categories we use to classify adversaries: **hacktivists, cyber criminals, and nation sponsored actors**.

Hacktivists are people who aren't affiliated with a specific government and they're not in it for money typically. They believe passionately in some sort of ideal and use cyber attacks to further their mission.
Key Traits
- Hacking to spread idealism
- Seek political or social change
- Not necessarily the most technically advanced
- E.g. Cult of the dead cow / Anonymous

Cyber criminals are hacking with the main motivation of financial gain.
Key Traits
- Motivated by money
- Indiscriminate targeting
- Ransomware / Business Scams / Hack and Leak
- Level of organization varies 
- Lone wolves & Organized mafias 

Nation Sponsored are actors operating on behalf of their government. Many governments financially support and direct cyber groups to hack in line with the government's goals which could be political, financial, defense related, etc.
- Government sponsored or affiliated
- Highly funded
- Highly motivated
- Selective in targeting
- Long term outlook




-----------------------------------------------------


### It's time to play a game of Whodunit, where we throw out some scenarios and you try to your hand at attribution!

<br/>

#### Question 1:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ1.png?raw=true" alt= “WhodunitQ1” width="80%" height="value">

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
<br/>

#### Question 2:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ2.png?raw=true" alt= “WhodunitQ2” width="80%" height="value">

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

<br/>

#### Question 3:
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/WhodunitQ3.png?raw=true" alt= “WhodunitQ3” width="80%" height="value">

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

{{< alert theme="info" >}} Watch the video on this page to hear more about why the answers are what they are, and to learn interesting details about the real-life adversary examples used for this Whodunit game. Thanks for playing! Let's move on to the next section. {{< /alert >}}