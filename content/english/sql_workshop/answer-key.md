---
title: "SQL Workshop Answer Key"
date: 2020-03-28T10:24:17-07:00
draft: false
hidden: true
weight: 300
---
{{%notice tip%}}
Note: Do not use Firefox Browser for this workshop!

For Drag and Drop Activities: Correctly chosen blocks will have a green highlight around them while incorrect answers will not have a highlight.

For Type-In Activities: Correct words/commands will be highlighted in green, incorrectly placed or misused words will be highlighted in red. If the command players write matches the answer key and it still highlights in red, make sure there are no extra spaces at the end or beginning of the command! Make sure players have a semicolon at the end of the command (The last word in the SQL command will highlight red if there is no semicolon)!
{{%/notice%}}

### Learn Cadet Basics
**No activity, only a read through of terminology.**

### Activity 1: Learn the SELECT Command (Drag and Drop)
Answer: `SELECT * FROM galaxy;`

### Activity 2: Learn the WHERE Command (Drag and Drop)
Answer: `SELECT * FROM galaxy WHERE name = ‘Planet of Fun’;`

### Explain Syntax
**No activity, only an explanation of the SQL Command format.**

### Activity 3: 
Two Valid Answers:
`SELECT COUNT(*) FROM planet;` OR `SELECT COUNT(city_number) FROM planet;`

### Activity 4: Select Multiple Info (Type-in)
Two Valid Answers: `SELECT planet, leader FROM galaxy;` OR `SELECT leader, planet FROM galaxy;`

The only difference between the two answers is the order of columns displayed, therefore both answers are valid.

### Activity 5: Learn the MAX/MIN Command (Both Type-In + Drag and Drop)
Two Valid Answers: `SELECT MAX(height) FROM items WHERE object IN (‘ladder’);` OR `SELECT * FROM items WHERE object IN (‘ladder’);`

Although the second answer does not use the MAX command, it displays all the ladders and their colors, making this a valid answer for the activity.

Drag and Drop: The correct ladder to drag and drop is the RED ladder (rightmost ladder). The correct ladder will highlight in green.

### Activity 6: Use Comparators (Type-In)
Answer: `SELECT * FROM items WHERE date_created = ‘1738-09-12’;`

Note: Although using >= and <= will also display the confetti cannon and the rest of the totems of fun, we are asking players to only use = to find the specific totem of fun (confetti cannon), therefore the other answers will be marked incorrect.

### Activity 7: Use the MIN Command (Type-In + Drag and Drop)
Two Valid Answers: `SELECT MIN(height) FROM items WHERE object IN (‘key’);` OR `SELECT * FROM items WHERE object IN('key');`

Drag and Drop: The height corresponds to the number of loops on the base of the key. The smallest key (height of 1) is the correct key to drag and drop (rightmost key).

### Activity 8: Learn the LIKE Command (Type-In)
Answer: `SELECT * FROM items WHERE date_created LIKE ‘%-10-%’;`

### Activity 9: Learn the AVG Command (Type-In)
Answer: `SELECT AVG(population) FROM planet;`

The combination to the safe is "40".

### Activity 10: Learn the SUM Command (Type-In)
Answer: `SELECT SUM(population) FROM planet;`

### Activity 11: Learn the GROUP BY Command (Type-In)
Answer: `SELECT * FROM planet GROUP BY favorite_food;`

The correct buttons to select (in any order) are: pizza, hotdog, hamburger, and taco.

### Activity 12: Find the Inventor! (Type-In)
Answer: `SELECT * FROM people;`

The inventor: "Dr. Phi"

