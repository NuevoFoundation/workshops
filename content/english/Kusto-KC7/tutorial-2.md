---
title: "Tutorial 2: New Employee Orientation"
draft: false
weight: 10
---
{{%showanswer "DISCLAIMER: All domains, data, and names used in this document, website, or any other materials are fictitious ... (cont.)"%}}
*DISCLAIMER: All domains, data, and names used in this document, website, or any other materials are fictitious and have been created solely for illustrative and educational purposes. They do not represent any real individuals, companies, or organizations.*

*This document, website, or any other materials, including but not limited to texts, images, graphics, logos, and software, are provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose.*

*In no event shall the creators or owners of this document, website, or any other materials be liable for any damages, including but not limited to direct, indirect, special, incidental, or consequential damages, arising out of or in connection with the use or inability to use this document, website, or any other materials, even if advised of the possibility of such damages.*

*The creators or owners of this document, website, or any other materials reserve the right to make changes to the content at any time and without notice.*
 
*By accessing or using this document, website, or any other materials, you agree to be bound by the terms and conditions set forth in this disclaimer. If you do not agree to these terms and conditions, you should not access or use this document, website, or any other materials.*
{{%/showanswer%}}

## Introduction: Welcome to EnvolveLabs

Welcome to EnvolveLabs Corporation! 🥳 Today is your first day as a Junior Security Operations Center (SOC) Analyst with our company. Your primary job responsibility is to defend EnvolveLabs and its employees from malicious cyber actors. 

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/EnvolveLabLogo.png?raw=true" alt= “” width="50%" height="value">

EnvolveLabs is a med-tech startup based in the United States that was founded in 2012. Our mission is to develop a new type of flexible vaccine technology that covers many different viral strains and offers long-lasting immunity. Which would eliminate the need to get booster shots during regular intervals and make vaccinations more accessible. Our initial research has proven this technology is highly effective – we’re planning to start production in Q1 2024. 

EnvolveLabs has a series of key partners who contribute to the success of our business. As such, we expect our employees to have regular communication with these key partners:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve1.png?raw=true" alt= “” width="60%" height="value">

Until now, we’ve been laser focused on medical research and meeting production goals. But, as our work becomes more important and successful, we’ve realized the need to invest more in cybersecurity efforts. That’s why we’ve hired you! 

Like all good companies, Envolve Labs collects log data about the activity its employees perform on the corporate network. These security audit logs are stored in Azure Data Explorer (ADX) - a data storage service in Azure (Microsoft’s cloud). You will use the Kusto Query Language (KQL) to parse through various types of security logs. By analyzing these logs, you can help us determine whether we’re being targeted by malicious actors. 
 - You can find full documentation on ADX here: https://docs.microsoft.com/en-us/azure/data-explorer/kusto/query/tutorial?pivots=azuredataexplorer


### EnvolveLabs Database

The EnvolveLabs_Analysis database contains eight tables. Tables contain many rows of similar data. For security logs, a single row typically represents a single thing done by an employee or a device on the network at a particular time.

We currently have eight types of log data. As you’ll see in ADX, each log type corresponds to a table that exists in the EnvolveLabs_Analysis database:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/Envolve3.png?raw=true" alt= “” width="70%" height="value">



{{< notice note >}}
🎯**Key Point – Over the Horizon (OTH) data:** One of the tables listed above is not like the others – **PassiveDns**. Rather than being an internal security log, **PassiveDns** is a data source that we’ve purchased from a 3rd party vendor. Not all malicious cyber activity happens within our company network, so sometimes we depend on data from other sources to complete our investigations. {{< /notice >}}

You’ll learn more about how to use each of these datasets in just a minute. First, let’s just run some queries so you can practice using KQL and ADX.