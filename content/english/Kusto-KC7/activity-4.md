---
title: "Activity 4: Kusto Query Language 101"
description: ""
draft: false
weight: 12
---
{{< youtube wWgPEGF5XOI >}}

## KQL 101

Type the following query in the workspace to view the first rows in the **Employees** table. Press “run” or “shift + enter” to execute the query. All KQL code blocks for this workshop will be outlined in grey like the one below.

```KQL
Employees
|   take 10
```

This query has a few parts. Let’s take a moment to break each of them down:

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL1.png?raw=true" alt= “” width="50%" height="value">

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL2.png?raw=true" alt= “” width="80%" height="value">

The <span style="color:red">**take**</span> operator is a powerful tool you can use to explore rows in a table, and therefore better understand what kinds of data are stored there.

{{< notice note >}} 🎯**Key Point – What to do when you don’t know what to do**: Whenever you are faced with an unfamiliar database table, the first thing you should do is sample its rows using the <span style="color:red">**take**</span> operator. That way, you know what fields are available for you to query and you can guess what type of information you might extract from the data source. {{< /notice >}}

The Employees table contains information about all the employees in our organization. In this case, we can see that the organization is named “Envolve Labs” and the domain is “envolvelabs.com”.

{{< alert theme="success" >}}
*Question 1.	🤔 Try it for yourself! Do a <span style="color:red">**take**</span> 10 on all the other tables to see what kind of data they contain.*{{< /alert >}}

You can easily write multiple queries in the same workspace tab. To do this, make sure to separate each query by an empty line. Notice below how we have separated the queries for the Employees, Email, and OutboundBrowsing tables by empty lines on lines 3 and 6.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL3.png?raw=true" alt= “” width="value" height="value">

When you have multiple queries, it’s important to tell ADX which query you want to run. To choose a query, just click on any line that is part of that query. Once you’ve selected a query, it will be highlighted in blue, as seen on lines 4 and 5 above.

#### **Finding Out “How Many”: The 'count' Operator**

We can use <span style="color:red">**count**</span> to see how many rows are in a table. This tells us how much data is stored there.  

```KQL
Employees
|   count
```
{{< alert theme="success" >}}
*Question 2.	🤔How many employees are in the company?*{{< /alert >}}

#### **Filtering Data With the 'where' Operator**

So far, we’ve run queries that look at the entire contents of the table. Often in cybersecurity analysis, we only want to look at data that meets a set of conditions or criteria. To accomplish this, we apply filters to specific columns.

We can use the <span style="color:red">**where**</span> operator in KQL to apply filters to a particular field. For example, we can find all the employees with the name “Linda” by filtering on the name column in the **Employees** table. 

<span style="color:red">**where**</span> statements are written using a particular structure. Use this helpful chart below to understand how to structure a <span style="color:red">**where**</span> statement.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL4.png?raw=true" alt= “” width="50%" height="value">

```KQL
Employees
|   where name has "Linda"
```
The <span style="color:blue">**has**</span> operator is useful here because we’re looking for only a partial match. If we wanted to look for an employee with a specific first and last name (an exact match), we’d use the == operator: 

```KQL
Employees
|   where name == "Linda Holbert"
```
{{< alert theme="success" >}}
*Question 3.	🤔Each employee at Envolve Labs is assigned an IP address. Which employee has the IP address: “192.168.0.191”?*{{< /alert >}}

While performing their day-to-day tasks, Envolve Labs employees send and receive emails. A record of each of these emails is stored in the **Email** table. 

{{< notice note >}}🎯**Key Point – User Privacy and Metadata**: As you can imagine, some emails are highly sensitive. Instead of storing the entire contents of every email sent and received within the company in a database that can be easily accessed by security analysts, we only capture email metadata. 

Email metadata includes information like: the time the email was sent, the sender, the recipient, the subject line, and any links the email may contain. Storing only email metadata, rather than entire contents, helps protect the privacy of our employees, while also ensuring that our security analysts can keep us safe. Sometimes even metadata can reveal sensitive information, so it’s important that you don’t talk about log data with other employees outside the SOC.{{< /notice >}}

We can find information about the emails sent or received by a user by looking for their email address in the sender and recipient fields of the **Email** table. For example, we can use the following query to see all the emails sent by “Michael Montello”:

```KQL
Email
|   where sender == "michael_montello@envolvelabs.com"
```
{{< alert theme="success" >}}
*Question 4.	🤔How many emails did Betty Parrish receive?*{{< /alert >}}

#### **Easy as 1, 2, 3… Compound Queries and the distinct Operator**

We can use the distinct operator to find unique values in a particular column. We can use the following query to determine how many of the organization’s users sent emails.

<img src= "https://github.com/bgrant34/workshops/blob/master/content/english/kusto-kc7/Images/KQL5.png?raw=true" alt= “” width="50%" height="value">

This is our first time using a multi-line query with multiple operators, so let’s break it down:


In **line 2**, we take the Email table and filter the data down to find only those rows with “envolvelabs” in the sender column.

In **line 3**, we add another pipe character ( | ) and use the distinct operator to find all the unique senders. Here, we aren’t finding the unique senders for all of the email senders, but only the unique senders that are left after we apply the filter looking for rows with “envolvelabs” in the sender column.

Finally, in **line 4**, we add another pipe character ( | ) and then use the count operator to count the results of lines 1-3 of the query.

{{< alert theme="success" >}}
*Question 5.	🤔How many users received emails with the term “vaccine” in the subject?*{{< /alert >}}

#### **Tracking Down a Click: OutboundBrowsing Data**

When employees at Envolve Labs browse to a website from within the corporate network, that browsing activity is logged. This is stored in the **OutboundBrowsing** table, which contains records of the websites browsed by each user in the company. Whenever someone visits a website, a record of it stored in the table. However, the user’s name is not stored in the table, only their IP address is recorded. There is a 1:1 relationship between users and their assigned IP addresses, so we can reference the **Employees** table to figure out who browsed a particular website.  

If we want to figure out what websites Annie Jackson visited, we can find her IP address from the **Employees** table.

```KQL
Employees
|   where name == "Annie Jackson"
```
The query above tells us her IP address is “192.168.3.168”. We can take her IP address and look in the **OutboundBrowsing** table to determine what websites she visited. 

```KQL
OutboundBrowsing
| where src_ip == "192.168.3.168"
```

{{< alert theme="success" >}}
*Question 6.	🤔How many unique websites did “Keith Mitchell” visit?*{{< /alert >}}

#### **What’s in a Name? All about Passive DNS Data**

Although domain names like “google.com” are easy for humans to remember, computers don’t know how to handle them. So, they convert them to machine readable IP addresses. Just like your home address tells your friends how to find your house or apartment, an IP address tells your computer where to find a page or service hosted on the internet.


{{< notice note >}} 🎯**Key Point – Practice Good OPSEC**: If we want to find out which IP address a particular domain resolves to, we could just browse to it. But, if the domain is a malicious one, you could download malicious files to your corporate analysis system or tip off the attackers that you know about their infrastructure. As cybersecurity analysts, we must follow procedures and safeguards that protect our ability to track threats. These practices are generally called operational security, or OPSEC. {{< /notice >}}