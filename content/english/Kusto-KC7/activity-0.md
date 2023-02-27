---
title: "Activity 0: Login & Setup of the Cyber Environment"
description: ""
draft: false
weight: 4
---

{{< youtube aHJxEHIHq0k >}}

# Getting Started

Okay Cyber Defenders! The first thing you need to do is set up the environment in which you will be hunting hackers. In order to do that, open the links below and follow the directions on first setting up Azure Data Explorer (ADX) and then logging into the Scoreboard session.
- Azure Data Explorer : https://dataexplorer.azure.com/ 
- The Scoreboard : https://aka.ms/kc7scoreboard 
- (Optional) PDF Guide of This Workshop : https://aka.ms/kc7guide

<!-- ![resource](../kusto-kc7/Images/Resources.png) -->
<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Resources.png?raw=true" alt= “” width="80%" height="value">

### Setting Up Azure Data Explorer (ADX)

ADX is the primary tool used by some cyber defenders for data exploration and analysis. The great thing about ADX is that it is used by cyber analysts at many of the smallest and largest organizations in the world. 

Let’s get you logged in and started with ADX:

1.	Go to https://dataexplorer.azure.com/ and login with your Microsoft account 
2.	Click the Query tab on the left side of the screen.

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX1.png?raw=true" alt= “” width="30%" height="value">

Data in ADX is organized in a hierarchical structure which consists of **clusters, databases, and tables**. All of Envolve Labs’s security logs are stored in a single cluster. You’ll need to add this cluster to your ADX interface so you can start looking at the log data

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX2.png?raw=true" alt= “” width="40%" height="value">

3.	Add a new cluster using the cluster URI provided by your instructor
•	Click add cluster
•	Enter Connection URI: mstictraining.eastus

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX3.png?raw=true" alt= “” width="40%" height="value">

4.	Select your database     
•	Expand the dropdown arrow next to your cluster. You should then see one database, called SecurityLogs2 inside it.     
•	Expend the dropdown arrow next to the SecurityLogs2 database.     
•	Click on the SecurityLogs2 database. Once you’ve done this, you should see the database highlighted- this means you’ve selected the database and are ready to query the tables inside.      

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX4.png?raw=true" alt= “” width="30%" height="value">

The big blank space to the right of your cluster list is the query workspace. That’s where you will use KQL code to write what we call queries, which are used to interact with our log data. 

<img src="https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/ADX5.png?raw=true" alt= “” width="80%" height="value">

### Scoreboard Setup

1.  After going to the Scoreboard website (https://aka.ms/kc7scoreboard), create a user account. Be sure to use a username and password you can remember as it will then immediately ask you to login.
2.  Once you're in, enter event code: **jan27**

You should see the scoreboard now. We'll need this later in the training so feel free to minimize the Scoreboard but keep it ready to use.


{{< alert theme="info" >}} Done! Now that you're set up it's time to get your hands on the data. {{< /alert >}}

[def]: Images/ADX1.png