---
title: "Activity 2 - CSS"
date: 2019-09-03T17:53:41-07:00
draft: false
weight: 6
---

## Style it with CSS

Tags tell the browser what website elements to use. But we also need to tell it how to display the elements, and where to place them. We may want the title on the center or on the right side. We may want a picture on the right and a paragraph on the left. There are two ways we can do this: through HTML attributes or `Cascading Style Sheets`.

## Cascading Style Sheets (CSS)

HTML attributes are straight-forward but they can become messy quickly. If we wish to do a lot of styling, each HTML element can become long and hard to read. Furthermore, what if we want to style many elements the same way? We would have to copy all the attributes for each element, which is not efficient and prone to mistakes. For most styling, it’s better to use CSS.

CSS files work closely with HTML tags. Each HTML tag can have a `class` attribute and/or an `id` attribute that helps to identify each element. Many elements can have the same class, and an element can have multiple classes. However, an element can only have one single id, and the id cannot be shared among elements. The CSS file uses these attributes to display styling specific to each `class` or `id`.

See this example below:
<p class="codepen" data-height="426" data-theme-id="dark" data-default-tab="css,result" data-user="Sunny-Dee" data-slug-hash="qgvpQE" style="height: 426px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Styling it up"> See the Pen <a href="https://codepen.io/Sunny-Dee/pen/qgvpQE/"> Styling it up</a> by Deliana Escobari (<a href="https://codepen.io/Sunny-Dee">@Sunny-Dee</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
<b>Click the "HTML" tab on the top left corner to see the HTML code, and the "CSS" tab to see the CSS code.</b>

Let's take a look at the HTML code. Try to find a &lt;div&gt; tag with the attribute <code>"info"</code>. It looks like <code>&lt;div id="info"&gt;</code>. By giving this div an id, we can then use CSS to specify styling for this specific element.

Switch over to the CSS file. We can also give styling to all elements of a specific type - for example, we could use CSS give all &lt;p&gt; elements the same style. In the header block, we tell the browser to color all the headers #0097A7 (which is the teal color).

Let's talk about the syntax (or the way of writing) for CSS. First, you start with what element you want to style. If you want to style all elements with the same tag (such as &lt;header&gt;), simply write the name. If you want to style an element with a class or id, put a <code>.</code> or a <code>#</code> in front of the class or id name respectively. Then, for each property you wish to change, use the format <code>attribute-name: value;</code>. Don't forget to end each line with a <code>;</code>. All these styles should be surrounded by the curly braces { and }.

There are way too many style elements to cover them all in this tutorial. If, in the sketch you made earlier, you aren't sure how to use CSS to accomplish the desired styling, try searching online.

![alt text](../media/web-search.gif "gif of web searching css")

{{% notice tip %}}

While CSS understands 140 color names such as "green", "red", and "blue", this can still be limiting. What about if we want a dark green, or a slightly lighter green? To achieve this, we can also refer to colors in hexadecimal or RGB form. Check <a href="https://htmlcolorcodes.com/color-names/" target="_blank">this link</a> to see the colors and their corresponding hexadecimal form.

{{% /notice %}}

## Adding a new font

As you might know, there are multiple fonts that you can use. This part will show you how to import different fonts to your site.

- Let's import the Heebo font from the internet. First we import the font at the top of the CSS file with this statement:
`@import url('https://fonts.googleapis.com/css?family=Heebo|Open+Sans');`
- Then we assigned it to the body tag. Since this tag will contain all the other HTML elements, our choice of font will be used for all elements.

![alt text](../media/bodytag.PNG "body tag example")

- Notice that the format inside the curly braces is: `name: value;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Roboto+Mono'); </span><br> `font-family: 'Roboto Mono', monospace;`
  - <span style="color:purple"> @import url('https://fonts.googleapis.com/css?family=Indie+Flower');</span><br> `font-family: 'Indie Flower', cursive;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Pacifico'); </span><br> `font-family: 'Pacifico', cursive;`
  - <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Permanent+Marker');</span><br> `font-family: 'Permanent Marker', cursive;`

## Activity 2 - Adding attributes and style

It's now time to make our website pretty! To complete this activity, you will need to complete the following steps:

1. Open the web editor (click the "Try it yourself!" button below)
2. Add an id attribute to one of the header tag. For example,
<font color="red">`<header id="page-title">`</font>

3. Toggle to the CSS tab
<font color="red">`#page-title
{
  styling here...
}`
</font>
4. Change the title color by adding `color: yellow;` inside the curly braces
5. Change the font by adding `font-family: 'Roboto Mono', monospace;` inside the curly braces and adding <span style="color:purple">@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');</span> at the top of the CSS tab
                            
<a class="my-2 mx-4 btn btn-info" href="https://codepen.io/Sunny-Dee/pen/qgvpQE" target="_blank">Try it yourself!</a>