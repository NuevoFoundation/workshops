```markdown
---
title: "Ишмердүүлүк 2: PandoraBots орнотуу"
draft: false
weight: 5
---

## AIML
Биз чатбот түзүү үчүн AIML колдоно турган болобуз. AIML — бул **Жасалма Интеллект Мейкиндигинин Белгилөө Тили** (Artificial Intelligence Markup Language). Эгерде буга чейин HTMLди колдонуп веб-сайт түзгөн болсоңуз, AIML сизге абдан окшош көрүнөт. AIML жазууга киришүүдөн мурун, PandoraBots сайтында аккаунт түзүшүңүз керек.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## Pandorabots
[https://www.pandorabots.com/](https://www.pandorabots.com/) баракчасына барып, **Sign Up** дегенди басыңыз. Электрондук почта жана сыр сөз киргизип аккаунт түзсөңүз болот. Альтернативдүү түрдө Google, Facebook, Twitter, же Github аккаунту менен каттала аласыз. Эгер сизге сунушталса, акысыз сыноо вариантын тандаңыз.

## Жаңы бот түзүү
Катталгандан кийин, төмөнкүдөй баракча пайда болот:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="pandorabots бетиндеги жаңы аккаунт" width="40%"/></p>

Жаңы бот түзүү үчүн навигациялык панелдеги My Bots бөлүгүнүн жанындагы “+” баскычын колдонуңуз. Ботко ат бериңиз жана “Create Bot” дегенди басыңыз.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="pandorabots'ta жаңы бот түзүү" width="40%"/></p>

## Ботту түзөтүү
Жаңы бот түзүлгөндөн кийин, боттун аты навигациялык панелде пайда болот. Боттун атынын астындагы **Edit** дегенди басыңыз жана кийин **Code Editor** бөлүмүнө өтүп, редакторго кириңиз.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="pandorabots'ta ботту түзөтүү" width="40%"/></p>

Редактор маектешүү ботун түзүү (чалуу/категорияларды жазуу) үчүн AIML файлдарын жазган жер болот. 

Файл менюсун колдонуп, greetings атты жаңы AIML файлын түзүңүз.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="pandorabots'ta жаңы файл кошуу" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="pandorabots'ta жаңы файл кошуу" width="40%"/></p>

## Салам, дүйнө

Төмөндө берилип жаткан категория кодун тексттик редакторго алып, башталгыч ```<aiml>``` жана аяктоочу ```</aiml>``` тэгдин ортосуна коюңуз:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

Толук бүтүп калгандан кийин, файлыңызды “File” менюсу аркылуу сактап коюңуз.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="pandorabots'ta жаңы файл кошуу" width="40%"/></p>

## Ботуңузду текшерүү
Chat Widget сизге бот менен сүйлөшүүгө мүмкүнчүлүк берет. Төмөнкү оң бурчтагы "сүйлөшүү көптүрлары" иконасын басып, ботуңуз менен сүйлөшүүнү баштаңыз. `Hello` деп текст жазыңыз, жана сиз жазган жоопту, `“Hello, world!”` аласыз.

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="pandorabots'ta жаңы файл кошуу" width="40%"/></p>
```