```markdown
---
title: "Activité 1 - Sauvetage des tortues"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---

<img src="../media/Tortuga.png" alt="Sharky avec la carapace de tortue" style="width:25%;">

<p style="font-size:1.8rem; text-align:center; color:#333;">Cliquez sur le lien ci-dessous pour créer vous-même l'application Costa Rica :</p>

<a class="my-2 mx-4 btn btn-info" href="https://playcode.io/react" target="_blank" style="display:block; text-align:center; background-color:#007BFF; color:white; padding:10px 20px; text-decoration:none; border-radius:5px; font-size:1.5rem; margin:20px auto; width:fit-content;">Créez votre projet React !</a>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Génial ! Nous allons maintenant construire pas à pas un composant pour sauver les tortues sur l'île de Tortuguero.</p>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Imaginez que React est une grande boîte remplie de pièces LEGO. Chaque pièce (composant) a une fonction, par exemple :</p>

<ul style="font-size:1.5rem; line-height:1.8; color:#333; padding-left:20px;">
  <li>Une pièce peut être un bouton</li>
  <li>Une autre pièce peut être un écran</li>
  <li>Une autre peut être une liste</li>
  <li>Une autre peut être une image</li>
</ul>

<p style="font-size:1.5rem; line-height:1.8; color:#555;">Lorsque vous assemblez toutes ces pièces... votre application complète est formée !</p>

Commençons !

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">import { useState } from "react";</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Que signifie <code>import { useState } from "react";</code> ?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Dans React, certains outils ne sont pas prêts à l'emploi immédiatement. Vous devez les demander dans la boîte à outils React. <code>useState</code> est l'un de ces outils spéciaux qui nous permet de stocker des choses qui changent.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Par exemple : combien de tortues il reste à sauver.</p>

<h2 style="font-size:2rem; color:#007BFF;">export default function Tortugero() { }</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;">Que signifie <code>export default function Tortugero()</code> ?</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;">Ici, nous créons un composant. <code>export default</code> signifie : "Ceci est le fichier principal, vous pouvez l'utiliser ailleurs".</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"><code>function Tortugero()</code> est le nom du composant. Comme une boîte qui dit : <b>"Ceci est Tortugero"</b>.</p>

{{% /notice %}}


{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">Que signifie <code>const [tortugas, setTortugas] = useState(0);</code> ?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Imaginez que nous avons une boîte magique où nous stockons un nombre. Ce nombre est la quantité de tortues sauvées. </p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li><b>tortugas</b> → ce qu'il y a dans la boîte (un nombre)</li>
  <li><b>setTortugas</b> → la clé magique qui vous permet de changer ce nombre</li>
  <li><b>useState(0)</b> → commence à 0 tortues sauvées</li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> C'est comme ça que React se souvient du nombre de tortues que vous avez sauvées. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">Que signifie <code>const total = 10;</code> ?</h2>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Ce nombre est l'objectif du jeu : il y a 10 tortues piégées à Tortuguero ! Ici, nous disons : <b>"Nous devons sauver 10 tortues"</b>.</p>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Vous pouvez le changer pour un autre nombre afin de rendre le jeu plus facile ou plus difficile. </p>

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color:#007BFF;">Que fait <code>const salvarTortuga = () => { }; </code> ?</h2>

<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Cette fonction est déclenchée lorsque nous cliquons sur le bouton <b>"Sauver une tortue"</b>. </p>
<ul style="font-size:1.6rem; color:#444; line-height:1.8;">
  <li>Elle vérifie s'il reste des tortues à sauver → <code>tortugas &lt; total</code></li>
  <li>Si oui, elle en ajoute une de plus → <code>setTortugas(tortugas + 1)</code></li>
</ul>
<p style="font-size:1.6rem; color:#444; line-height:1.8;"> Chaque clic sauve une nouvelle tortue. </p>

``` jsx
if (tortugas < total) setTortugas(tortugas + 1);
``` 

{{% /notice %}}

{{% notice tip %}}

<h2 style="font-size:2rem; color