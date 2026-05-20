---
title: "KC7: Cyber Defender Game - Answer Key"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
This is a teacher's reference for the KC7 Cyber Defender workshop. It contains KQL query solutions and methodology for Activities 2-4. Exact numeric results depend on the live SecurityLogs database and may vary between sessions.

Video walkthroughs are also available on Activity 3.5 (KQL 101 answers) and Activity 4.5 (Catch the Hacker answers).

Bonus 1 and Bonus 3 answers are checked on the KC7 Scoreboard. Bonus 2 is an open-ended analysis exercise without a fixed answer key.
{{% /notice %}}

## Activity 2: Threat Intel Game (Whodunit)

Three scenario-based attribution questions. Students identify the adversary type.

| Question | Scenario | Answer | Reasoning |
|----------|----------|--------|-----------|
| 1 | Government-aligned cyber operations | **C. Nation Sponsored** | Targeted, well-funded, politically motivated |
| 2 | Financially motivated attack | **B. Cyber Criminal** | Driven by money, indiscriminate targeting |
| 3 | State-directed cyber campaign | **C. Nation Sponsored** | Government-sponsored, selective targeting, long-term |

{{% notice tip %}}
Watch the Activity 2 video for detailed real-world examples behind each scenario, including the POLONIUM case study.
{{% /notice %}}

## Activity 3: KQL 101

These questions teach core KQL operators using the **SecurityLogs** database. The queries below show the correct approach; exact result values depend on the live data.

### Question 1: Explore all tables with `take`

```KQL
Employees
| take 10

Email
| take 10

OutboundBrowsing
| take 10

PassiveDns
| take 10

AuthenticationEvents
| take 10

FileCreationEvents
| take 10

ProcessEvents
| take 10

SecurityAlerts
| take 10
```

**Purpose:** Students explore the schema of each table to understand what columns and data types are available.

### Question 2: How many employees are in the company?

```KQL
Employees
| count
```

**Expected concept:** The `count` operator returns the total number of rows in the table. Each row represents one employee.

### Question 3: Which employee has IP address 192.168.0.191?

```KQL
Employees
| where ip_addr == "192.168.0.191"
```

**Concept:** The `where` operator filters rows. The `==` operator checks for an exact match.

### Question 4: How many emails did Betty Parrish receive?

```KQL
Email
| where recipient == "betty_parrish@envolvelabs.com"
| count
```

**Concept:** Filter the Email table by the recipient column, then count the results. The email format follows `firstname_lastname@envolvelabs.com`.

### Question 5: How many users received emails with "vaccine" in the subject?

```KQL
Email
| where subject has "vaccine"
| distinct recipient
| count
```

**Concept:** Chain multiple operators: `where` to filter, `distinct` to deduplicate, `count` to total. The `has` operator performs whole-term matching (word boundary based), so it finds "vaccine" as a complete word in the subject line.

### Question 6: How many unique websites did Keith Mitchell visit?

This requires **pivoting** between two tables:

```KQL
// Step 1: Find Keith Mitchell's IP address
Employees
| where name == "Keith Mitchell"
```

```KQL
// Step 2: Use his IP to query OutboundBrowsing
OutboundBrowsing
| where src_ip == "[Keith's IP from Step 1]"
| distinct url
| count
```

Or, using a `let` statement to combine both steps:

```KQL
let keith_ip = Employees
| where name == "Keith Mitchell"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (keith_ip)
| distinct url
| count
```

**Concept:** Pivoting: using data from one table (Employees) to query another (OutboundBrowsing). This is a core cyber analysis skill.

### Question 7: How many domains in PassiveDns contain "vaccine"?

```KQL
PassiveDns
| where domain contains "vaccine"
| distinct domain
| count
```

**Concept:** The `contains` operator (not `has`) is needed here because "vaccine" may appear as part of a longer domain name.

### Question 8: What IPs did "biotechenvolv.science" resolve to?

```KQL
PassiveDns
| where domain == "biotechenvolv.science"
```

**Concept:** Look at the IP address column in the results to see all IPs associated with this domain.

### Question 9: How many unique URLs were browsed by employees named "Karen"?

```KQL
let karen_ips = Employees
| where name has "Karen"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (karen_ips)
| distinct url
| count
```

**Concept:** This combines the `let` statement with pivoting. The `let` stores the result of the first query (Karen's IPs) so it can be reused in the second query.

{{% notice tip %}}
**Teacher tip:** The `let` statement is one of the most powerful KQL patterns. Encourage students to name their variables descriptively (like `karen_ips` rather than `x`) to make queries easier to read.
{{% /notice %}}

### KQL 101 quick reference

| Operator | Purpose | Example |
|----------|---------|---------|
| `take` | Sample rows from a table | `Employees \| take 10` |
| `count` | Count total rows | `Employees \| count` |
| `where` | Filter rows by condition | `\| where name has "Linda"` |
| `==` | Exact match | `\| where ip_addr == "192.168.0.191"` |
| `has` | Whole-term match (word boundary) | `\| where subject has "vaccine"` |
| `contains` | Substring match (partial) | `\| where domain contains "vaccine"` |
| `distinct` | Unique values | `\| distinct recipient` |
| `let` | Store query results | `let ips = Employees \| distinct ip_addr;` |
| `has_any` | Match any whole term from a list | `\| where link has_any (domains)` |
| `in` | Match any value in a list | `\| where src_ip in (ips)` |

## Activity 4: Catch the Hacker

Students investigate a phishing campaign from the domain **immune[.]tech**. These questions guide an open-ended investigation. The queries below demonstrate the methodology.

### Question 1: Which users received emails containing immune.tech?

```KQL
Email
| where link contains "immune.tech"
```

Look at the `recipient` column in the results to identify targeted users.

### Question 2: Were any emails blocked? Who actually received one?

```KQL
Email
| where link contains "immune.tech"
| where accepted == "true"
```

**Concept:** The `accepted` field indicates whether the email was delivered (`true`) or blocked (`false`). Depending on the database version, this may be a boolean or string field. Adjust the comparison accordingly (remove quotes if boolean).

### Question 3: What other domains share IPs with immune.tech?

```KQL
// Step 1: Find IPs for immune.tech
PassiveDns
| where domain == "immune.tech"
```

```KQL
// Step 2: Find all domains on those IPs
let immune_ips = PassiveDns
| where domain == "immune.tech"
| distinct ip_address;
PassiveDns
| where ip_address in (immune_ips)
| distinct domain
```

**Concept:** Pivoting through PassiveDns to discover related infrastructure.

### Question 4: What email addresses did the hackers use?

```KQL
// Find all domains associated with the actor
let actor_domains = PassiveDns
| where ip_address in (
    PassiveDns | where domain == "immune.tech" | distinct ip_address
)
| distinct domain;
// Find emails containing those domains
Email
| where link has_any (actor_domains)
| distinct sender
```

### Question 5: Did users click on phishing links?

```KQL
// Check OutboundBrowsing for visits to suspicious domains
OutboundBrowsing
| where url contains "immune.tech"
```

Cross-reference the `src_ip` with the Employees table to identify who clicked.

### Question 6: Were any credentials stolen?

```KQL
// Check AuthenticationEvents for suspicious logins
// Look for logins from unusual IPs after the phishing campaign
AuthenticationEvents
| where username in ("[compromised users from Q5]")
| where src_ip !startswith "192.168."
```

**Concept:** After a user visits a credential harvesting site, the attacker may try to log in with stolen credentials. Look for logins from non-corporate IP addresses.

### Question 7: Was any content exfiltrated from mailboxes?

Look for email forwarding rules or unusual email activity from compromised accounts. Check if emails were sent to external addresses after the compromise.

{{% notice tip %}}
**Teacher tip:** Activity 4 is intentionally open-ended. Encourage students to follow the evidence trail rather than looking for a single "right answer." The investigation process matters more than the specific findings. A detailed video walkthrough is available on the Activity 4.5 page.
{{% /notice %}}

## Investigation methodology summary

The KC7 workshop teaches a structured investigation approach:

| Step | Action | KQL Pattern |
|------|--------|-------------|
| 1. Start with a lead | Use OSINT tip (e.g., suspicious domain) | `where domain == "immune.tech"` |
| 2. Identify infrastructure | Find related IPs and domains | Pivot through `PassiveDns` |
| 3. Find delivery method | Check email logs for phishing | Filter `Email` by domain/sender |
| 4. Identify targets | Who received the emails? | `distinct recipient` |
| 5. Check for clicks | Did anyone browse to the site? | Cross-reference `OutboundBrowsing` |
| 6. Assess impact | Were credentials stolen? Data exfiltrated? | Check `AuthenticationEvents`, `FileCreationEvents` |

## Bonus activities (5, 6, 7)

{{% notice warning %}}
The bonus activities do not have a published answer key. Students check their answers on the KC7 Scoreboard at https://aka.ms/kc7scoreboard (Bonus 1 and 3) or through independent analysis (Bonus 2). This is intentional: the bonus challenges encourage independent research and investigation skills.
{{% /notice %}}

**Bonus 1 (Phishy Activity):** 18 questions investigating malware docs from the domain notice[.]io. Uses the same investigation methodology from Activity 4.

**Bonus 2 (Truth or Misinformation?):** 6 open-ended analysis questions evaluating a threat intelligence blog post. Students must use the **SecurityLogs2** database and determine whether the blog's claims are accurate.

**Bonus 3 (Security Jeopardy):** General cybersecurity knowledge quiz. Students use internet research to answer questions about common security terms and concepts.
