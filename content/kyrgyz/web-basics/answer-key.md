---
title: "Жооп ачкычы - Веб негиздери"
date: 2020-03-28T12:53:41-07:00
draft: false
hidden: true
weight: 15
---

### Эскертүү:

Бул окуу программасы студенттердин чыгармачылык менен иштөөсүнө шарт түзөт. Төмөндөгүлөр алар эмне кыла аларынын бир мисалы гана , эгер керек болсо, өзүңүздүн жеке ойуңузду колдонуңуз жана кеңеш сураңыз. Бул жерде берилген жооп ачкычы кыйла узун, анткени биз контекст үчүн толук HTML үзүндүлөрүн кошуп жатабыз.

Студент 'Өзүңүз байкап көрүңүз!' баскычын басканда HTML кодунун айрымдары (жана CSS коду) менен жаңы өтмөк ачылат. 

## Сынак 1

Чечимде төмөнкүлөр болушу керек:
1. Аталышын кошуу үчүн баш тегдер жана Бенжи жөнүндө абзац жазуу үчүн абзац тегдери болуш керек.
2. (милдеттүү эмес) Бенжинин сүйүктүү тамактарынын тизмеси: үндүк, арахис майы жана жип сыры

```HTML
<head>
  <!-- 1-сынак: аталыш жана баш тегдерди кошуңуз. -->
  <title>Менин кызыктуу аталышым!</title>
</head>
<body>
  <!-- Дене ичиндеги контент -->
  <!-- Сынак 1: Баш аталыш, абзацты кошуңуз. -->
  <h1>Бенжи жөнүндө</h1>
  <p>Бенжи сүйкүмдүү күчүк. Анын сүйүктүү спорту - fetch. Ал токойдо узак сейилдегенди жакшы көрөт. Бир жолу ал чоң таяк таап алган.</p>
  <!-- Сынак 1 (милдеттүү эмес) Тизме кошуу. -->
  <h5> Бенжинин сүйүктүү тамактары </h5>
  <ul>
    <li>Үндүк</li>
    <li>Жер жаңгак майы</li>
    <li>Жип сыры</li>
  </ul>
</body>
```

## Сынак 2

Чечимде төмөнкүлөр болушу керек:

1. HTML: баш тегинин биринде id атрибут болуш керек. Мисалы, ```<header id="page-title">```
2. CSS: Башка аталыш түсү тармал кашаанын ичине ```color: yellow;``` кошуу менен
3. CSS: Тармал кашаанын ичине ```font-family: ‘Roboto Mono’, monospace;``` кошуу менен башка шрифт and CSS өтмөгүнүн жогору жагына @import url(‘https://fonts.googleapis.com/css?family=Roboto+Mono'); кошуу менен

```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Керектүү мета тегдер -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Бул браузер өтмөгүндө көрсөтүлөт!</title>
  </head>
  <body>
    <!-- Сынак 2: page-title id атрибуту -->
    <header id="page-title">
      <h1 id="page-title">Менин атым Бенжи</h1>
      <p>Мен үй-бүлөмдү издеп жатам.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Маалымат:</h2>
      <ul>
        <li>Мен Лабрадор/Улуу Пиреней аралашмасымын</li>
        <li>Мен 1 жаштамын</li>
        <li>Мен сен каалабаган жержаңгак майын жейм</li>
        <li>Мен сени тыйын чычкандардан коргойм</li>
      </ul>
    </div>
    <h3>Биз жакында ойнойбуз деп үмүттөнөм!</h3> 
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

## Сынак 3

Nuevo Foundation GIF сүрөттөрү: https://giphy.com/nuevofoundation 
1. 'embed' баскычын басыңыз жана GIF кыстаруу кодун көчүрүңүз.
2. GIF кыстаруу кодун ```<body>``` тегинин ичине коюңуз.

Мисал iframe коду:

```HTML
<iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
```

Код 'Өзүңүз байкап көрүңүз!' үлгүсүнө интеграцияланган:

```HTML
<!doctype html>
<html lang="en">
  <head>
    <!-- Керектүү мета тегдер -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Бул браузер өтмөгүндө көрсөтүлөт!</title>
  </head>
  <body>
    <header>
      <h1 id="page-title">Менин атым Бенжи</h1>
      <p>Мен үй-бүлөмдү издеп жатам.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Маалымат:</h2>
      <ul>
        <li>Мен Лабрадор/Улуу Пиреней аралашмасымын</li>
        <li>Мен 1 жаштамын</li>
        <li>Мен сен каалабаган жержаңгак майын жейм</li>
        <li>Мен сени тыйын чычкандардан коргойм</li>
      </ul>
    </div>
    <h3>Биз жакында ойнойбуз деп үмүттөнөм!</h3> 

    <!-- Сынак 3: Кодуңузду бул жерге коюуңуз! -->
    <iframe src="https://giphy.com/embed/oywrR92C9YBlrSuUKP" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nuevofoundation-rockstar-nuvi-oywrR92C9YBlrSuUKP">via GIPHY</a></p>
  </body>
</html>
```

## Сынак 4

Байланыш формасы студенттер үчүн мурунтан эле кошулган. Алар жөн гана электрондук почта бөлүмүндө электрондук почтасын өзгөртүп, андан кийин каалаган стилин өзгөртүшү керек!

```HTML
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Бул браузер өтмөгүндө көрсөтүлөт!</title>
  </head>
  <body>
     <header>
      <h1 id="page-title">Менин атым Бенжи</h1>
      <p>Мен үй-бүлөмдү издеп жатам.</p>
      <hr>
    </header>

    <div id="info">
      <h2>Маалымат:</h2>
      <ul>
        <li>Мен Лабрадор/Улуу Пиреней аралашмасымын</li>
        <li>Мен 1 жаштамын</li>
        <li>Мен сен каалабаган жержаңгак майын жейм</li>
        <li>Мен сени тыйын чычкандардан коргойм</li>
      </ul>
    </div>

   <!-- Сынак 4: Байланыш формасы -->
    <div class="contact-section">
      <h3>Мени менен байланыш</h3> 
      <hr>
      <!-- Төмөнкү сапты өзгөртүңүз -->
       <form action="https://formspree.io/email@nuevofoundation.com" method="POST">
         <label for="name">Ат: </label>
        <input type="text" name="name" placeholder="Бенжиге ким экениңди айт"><br>
         <label for="message">Сиздин билдирүүңүз: </label>
        <textarea name="message" placeholder="Сен жөнүндө айтып берчи"></textarea>
        <input type="submit" value="Салам!">
      </form>
    </div>

    <h3>Биз жакында ойнойбуз деп үмүттөнөм!</h3> 
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
  background-color: #FCFC69; /* Сынак 4: стилдөө үчүн бул жерде түс өзгөртүңүз */
}
```

## Сынак 5

Бул жерде эч кандай чечим жок - студенттер үйрөнгөн нерселеринин негизинде өздөрүнүн сайттарын түзүшөт. Бир нече эскертүү:
1. Окуучуларды үйрөнгөн ар кандай нерселердин баарын колдонууга үндөңүз (ie. CSS, форма, GIF)
2. Студенттерди башкаларга көрсөткүсү келген нерсени жаратууга үндөңүз. 

Жакшы убакыт өткөргүлө!