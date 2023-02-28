---
title: "Activity 3: New Employee Orientation"
description: ""
draft: false
weight: 10
---

## Introduction: Welcome to Envolve Labs

Welcome to Envolve Labs Corporation! 🥳 Today is your first day as a Junior Security Operations Center (SOC) Analyst with our company. Your primary job responsibility is to defend Envolve Labs and its employees from malicious cyber actors. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= “” width="80%" height="value">

Envolve Labs is a med-tech startup based in the United States that was founded in 2012. Our mission is to develop a new type of flexible vaccine technology that covers many different viral strains and offers long-lasting immunity (which means no more boosters!) Our initial research has proven this technology is highly effective – we’re planning to start production in Q1 2023. 

EnvolveLabs has a series of key partners who contribute to the success of our business:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve2.png?raw=true" alt= “” width="80%" height="value">

Until now, we’ve been laser focused on medical research and meeting production goals. But, as our work becomes more important and successful, we’ve realized the need to invest more in cybersecurity efforts. That’s why we’ve hired you! 

Like all good companies, Envolve Labs collects log data about the activity its employees perform on the corporate network. These security audit logs are stored in Azure Data Explorer (ADX) - a data storage service in Azure (Microsoft’s cloud). You will use the Kusto Query Language (KQL) to parse through various types of security logs. By analysing these logs, you can help us determine whether we’re being targeted by malicious actors. 
 - You can find full documentation on ADX here: https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer


### EnvolveLabs Database

The EnvolveLabs_Analysis database contains eight tables. Tables contain many rows of similar data. For security logs, a single row typically represents a single thing done by an employee or a device on the network at a particular time.

We currently have eight types of log data. As you’ll see in ADX, each log type corresponds to a table that exists in the EnvolveLabs_Analysis database:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt= “” width="80%" height="value">



{{< alert theme="info" >}}
🎯**Key Point – Over the Horizon (OTH) data:** One of the tables listed above is not like the others – **PassiveDns**. Rather than being an internal security log, **PassiveDns** is a data source that we’ve purchased from a 3rd party vendor. Not all malicious cyber activity happens within our company network, so sometimes we depend on data from other sources to complete our investigations. {{< /alert >}}

You’ll learn more about how to use each of these datasets in just a minute. First, let’s just run some queries so you can practice using KQL and ADX.