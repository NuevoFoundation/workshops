---
title: "Answer Key - Web Basics"
date: 2020-03-28T12:53:41-07:00
draft: false
hidden: true
weight: 15
---

### Special note:
This curriculum allows students to be creative. The below is just an example of what they can do, please use your best judgement and ask for guidance if needed. The answer key provided here is fairly long because we are including snippets of full HTML for context.

When a student clicks on the 'Try it yourself!' it'll open a new tab with some of the HTML code (and CSS code) already scaffolded. 

## Challenge 1 
Solution should have:
1. Header tags to add a title and the paragraph tags to write a paragraph about Benji.
2. (optional) A list of Benji’s favorite treats: turkey, peanut butter, and string cheese

```HTML
<head>
  <!-- Challenge 1: Add title and header tags. -->
  <title>My exciting title!</title>
</head>
<body>
  <!-- Content goes inside the body -->
  <!-- Challenge 1: Add a header, a paragraph. -->
  <h1>About benji</h1>
  <p>Benji is a cute pup. His favorite sport is fetch. He likes long walks in the woods. Once he found a big stick.</p>
  <!-- Challenge 1 (optional) Add a list. -->
  <h5> Benji's favorite snacks </h5>
  <ul>
    <li>Turkey</li>
    <li>Peanut Butter</li>
    <li>String Cheese</li>
  </ul>
</body>
```

## Challenge 2
Solution should have:
1. HTML: An id attribute to one of the header tag. For example, ```<header id="page-title">```
2. CSS: A different title color by adding ```color: yellow;``` inside the curly braces
3. CSS: A different font by adding ```font-family: ‘Roboto Mono’, monospace;``` inside the curly braces and adding @import url(‘https://fonts.googleapis.com/css?family=Roboto+Mono'); at the top of the CSS tab

```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>This will show in the browser tab!</title>
  </head>
  <body>
    <!-- Challenge 2: page-title id attribute -->
    <header id="page-title">
      <h1 id="page-title">My name is Benji</h1>
      <p>I'm looking for my family.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Information:</h2>
      <ul>      
        <li>I'm a Lab/Great Pyreneese mix</li>
        <li>I'm 1 year old</li>
        <li>I eat peanut butter you don't want</li>
        <li>I will protect you from squirrels</li>
      </ul>
    </div>    
    <h3>I hope we get to play soon!</h3> 
    <img id="dog" src="https://aka.ms/Benji-the-dog">
  </body>
</html>
```

```CSS
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

#page-title 
{
  color: yellow;
  font-family: 'Roboto Mono', monospace;
}
```

## Challenge 3
Nuevo Foundation GIFs: https://giphy.com/nuevofoundation 
1. Click on 'embed' and copy the GIF embed code.
2. Paste the GIF embed code anywhere in the ```<body>``` tag

Example iframe code:
```HTML
<iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
```

Integrated into sample 'Try it yourself code!':
```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>This will show in the browser tab!</title>
  </head>
  <body>
    <header>
      <h1 id="page-title">My name is Benji</h1>
      <p>I'm looking for my family.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Information:</h2>
      <ul>      
        <li>I'm a Lab/Great Pyreneese mix</li>
        <li>I'm 1 year old</li>
        <li>I eat peanut butter you don't want</li>
        <li>I will protect you from squirrels</li>
      </ul>
    </div>    
    <h3>I hope we get to play soon!</h3> 

    <!-- Challenge 3: Paste your code here! -->
    <iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
  </body>
</html>
```

## Challenge 4
The contact form is already added for the students. They will simply need to modify their email in the email section and then alter any styling they want!

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>This will show in the browser tab!</title>
  </head>
  <body>
    <header>
      <h1 id="page-title">My name is Benji</h1>
      <p>I'm looking for my family.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Information:</h2>
      <ul>      
        <li>I'm a Lab/Great Pyreneese mix</li>
        <li>I'm 1 year old</li>
        <li>I eat peanut butter you don't want</li>
        <li>I will protect you from squirrels</li>
      </ul>
    </div>    
   
   <!-- Challenge 4: Contact Form -->
    <div class="contact-section">
      <h3>Contact me</h3> 
      <hr>
      <!-- Change the following line -->
       <form action="https://formspree.io/email@nuevofoundation.com" method="POST">
         <label for="name">Name: </label>
        <input type="text" name="name" placeholder="Tell Benji who you are"><br>
         <label for="message">Your message: </label>
        <textarea name="message" placeholder="Tell me about you"></textarea>
        <input type="submit" value="Hi!">
      </form>
    </div>
    
    <h3>I hope we get to play soon!</h3> 
    <img id="dog" src="https://aka.ms/Benji-the-dog">
  </body>
</html>
```

```CSS
.contact-section
{
  width: 250px;
  margin: 10px;
  padding: 10px;
  background-color: #FCFC69; /* Challenge 4: change the color here for styling */
}
```

## Challenge 5
No solution here - the students are creating their own sites based on what they learned. A few notes:
1. Encourage students to use all of the different things they learned (ie. CSS, form, GIF)
2. Encourage students to create something they would want to show other people. 

Have fun! 