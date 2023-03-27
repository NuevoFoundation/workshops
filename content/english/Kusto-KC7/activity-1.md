---
title: "Activity 1: Login & Setup of the Cyber Environment"
draft: false
weight: 4
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/kMIKZhS5E4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

## Getting Started

Okay Cyber Defenders! The first thing you need to do is set up the environment in which you will be hunting hackers. In order to do that, open the links below and follow the directions on first setting up Azure Data Explorer (ADX) and then logging into the Scoreboard session.


<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “Resources” width="60%" height="value">

### Setting Up Azure Data Explorer (ADX)

ADX is the primary tool used by some cyber defenders for data exploration and analysis. The great thing about ADX is that it is used by cyber analysts at many of the smallest and largest organizations in the world. 

Let’s get you logged in and started with ADX:

1.	Go to [Azure Data Explorer] https://dataexplorer.azure.com/ and login with your Microsoft account 
    - If you don't have a Microsoft account already, create one now (they are free to make)
2.	Click the Query tab on the left side of the screen.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “ADX1” width="20%" height="value">

Data in ADX is organized in a hierarchical structure which consists of **clusters, databases, and tables**. All of Envolve Labs’s security logs are stored in a single cluster. You’ll need to add this cluster to your ADX interface so you can start looking at the log data

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “ADX2” width="40%" height="value">

3.	Add a new cluster using the cluster URI provided by your instructor
    -  Click add cluster
    -  Enter Connection URI: mstictraining.eastus

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “ADX3” width="40%" height="value">

4.	Select your database     
    - Expand the dropdown arrow next to your cluster. You should then see one database, called **SecurityLogs** inside it.     
    - Expand the dropdown arrow next to the **SecurityLogs** database.     
    - Click on the **SecurityLogs** database. Once you’ve done this, you should see the database highlighted- this means you’ve selected the database and are ready to query the tables inside.      

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4_updated.png?raw=true" alt= “ADX4_updated” width="30%" height="value">

The big blank space to the right of your cluster list is the query workspace. That’s where you will use KQL code to write what we call queries, which are used to interact with our log data. 

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “ADX5” width="80%" height="value">

### Scoreboard Setup

1.  After going to the [Scoreboard website] ( https://aka.ms/kc7scoreboard ), create a user account. Be sure to use a username and password you can remember as it will then immediately ask you to login.
2.  Click on the green button **"Join a new game"**
3.  Once you're in, enter the session password: **GAMEON**

You should see the Scoreboard now, when you go to the challenges tab, you should see a list like in the image below. We'll need this later in the training so feel free to minimize the Scoreboard but keep it ready to use.
<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Scoreboard.png?raw=true" alt= “ADX3” width="value" height="value">

{{< alert theme="info" >}} Done! Now that you're set up it's time to get your hands on the data. {{< /alert >}}

[def]: Images/ADX1.png