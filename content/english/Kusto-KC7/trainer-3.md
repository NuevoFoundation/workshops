---
title: "T3: Event Schedule & Logistics"
draft: false
weight: 28
---
{{< alert theme="info" >}}
## Schedule
{{< /alert >}}

*[PREREQ, 10 min] Gain access to cluster and add it to ADX*

### Part 1: Understanding the Environment [1.5 hrs]

[5 min] Intro to Threat Intel    
     - Briefly mention attribution tools and techniques     
     - Diamond Model     
     - Kill Chain     

[20 min] Kusto Query Language (KQL) 101     
     - Introduce tables, commands, and syntax for KQL in ADX browser     
      - where (has, contains, has_any, ==, etc…)     
      - count     
      - take     
      - let     

[10 min] How To Cluster Observed Adversary Activity 
 - How do you decide whether the next piece is associated with your actor? 
 - Mapping knowledge of actor to diamond model 
 - How do you know when you’re done? 
 - Gotchas of clustering (misattribution)    

[45 min] Scenario 1: Cyber Investigation Introduction
 - Investigating malicious activity (i.e. email threat)
 - Use Azure Data Explorer (ADX) for analysis of security log data
 - Apply KQL fundamentals to answer targeted questions using data
 - Pivot across multiple datasets

[10 min] Debrief 
 - Review quickly how to pivot to the answers

### Break [10 min]
 
### Part 2: Catch the Hacker [1.5 hrs Including One Bonus Activity]

[5 min] Introduction and High Level Overview of Workshop 
 - Additional Threat Intelligence (TI) threat hunting tools & techniques to pass on before diving back in

[30 min] Scenario 2: Catch the Hacker
 - Release the scoreboard and introduce scenario
 - Facilitate free hunting time
 - Monitor chat

[10 min] Debrief
 - Select a few questions to show path to solving

*(Choose one bonus activity to finish session if time allows)*    

{{%showanswer "Option 1: Phishy Activity"%}}	
**Option 1**         
[5 min] Bonus 1: Phishy Activity

[30 min] Scenario 3: Hackers Sending Malware Docs
 - Free Time to Hunt

[10 min] Debrief & Close Session {{%/showanswer%}}

{{%showanswer "Option 2: Truth or Misinformation"%}}	
**Option 2**         
[5 min] Introduce Blog Analysis *(for more advanced audiences)*

[30 min] Scenario 3: Truth or Misinformation
 - Free Time to Hunt & Analyze Blog 

[10 min] Debrief & Close Session
{{%/showanswer%}}

{{%showanswer "Option 3: Security Jeopardy"%}}	
**Option 3**         
[5 min] Introduce Security Jeopardy 
[30 min] Play game
 - Up to instructor on what format to do this in. Could have students play in Scoreboard on their computers and set a timer to see who has the highest points at the end, this would be an 'open internet' quiz. Or use a jeopardy generator to feed in questions for a more knowlegable audience, keep in mind though the other parts of this workshop do not teach these terms already *(best to play with an audience that has prior knowledge of cybersecurity terms in a live session)*
.

[10 min] Debrief & Close Session
{{%/showanswer%}}



{{< alert theme="success" >}}
## Logistics
{{< /alert >}}

### Checklist

**Here are all the things your students will need:**   
* A computer or laptop (it doesn't need to be particularly powerful)   
* A decent internet connection   
* A Microsoft Account   
    * Either a personal hotmail or outlook account    
    * A school-provided office365 account    
    * *Note: If the school or organization doesn't allow access to Azure Data from the company tenant - you want need a workaround such as providing an event-specific account for them to use*     

**Here are some things that you may also need:**   
* Printed hard-copy versions of the training guide (we have found that    
* participants tend to work better with a hard-copy guide)    
* A projector or smartboard so you can work through issues as a group    
* Snacks or treat - every loves those :)    

### Setting Up the Scoreboard

To access the KC7 scoreboard, go to this website: https://kc7.azurewebsites.net.
 You will need to log in using the credentials sent to you in an email after you filled out the form to host a session. If you are not hosting a session, you can create an account to log in.

If you're managing a session, you should already be added to the game session for your group. You'll see it on your dashboard when you log in. To join the session, just click the "join this game" button.

You will also need to add questions or challenges for the game participants to answer to score points.  To do so:

* Make sure you are logged in as an administrator for your session
* Find the list of questions that correspond with the training guide that you are using
* Select the question set from the dropdown menu

### Additional Resources

KC7 Github Repo: https://github.com/kkneomis/kc7       
KC7 Website: https://kc7cyber.com/#demos      

