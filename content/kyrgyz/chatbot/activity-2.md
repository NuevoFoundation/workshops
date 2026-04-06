```markdown
---
title: "Иш-чара 2: PandoraBots орнотуу"
draft: false
weight: 5
---

## AIML
Биз чатбот түзүү үчүн AIML колдоно баштайбыз. AIML деген сөздүн толук берилиши **Artificial Intelligence Markup Language**. Эгер сиз мурда HTML менен веб-сайт жасаган болсоңуз, AIML да ага өтө окшош көрүнөт. AIML жазууга киришүү үчүн бизге алды менен PandoraBots сайтында каттоо эсебин ачуу керек болот.
<img src="../img/chat_Alice.png" alt="" width="20%" style="" />

## PandoraBots
[https://www.pandorabots.com/](https://www.pandorabots.com/) сайтына өтүңүз жана **Sign Up** баскычын басыңыз. Эсеп түзүү үчүн электрондук почта менен паролду киргизиңиз. Андан тышкары, Google, Facebook, Twitter же Github аккаунттары аркылуу каттала аласыз. Эгер тандоо мүмкүнчүлүгү пайда болсо, "акысыз сыноо" опциясын тандаңыз.

## Жаңы бот түзүү
Каттоодон өткөндөн кийин сиз төмөндөгүдөй көрүнүштөгү бетти көрөсүз:

<p style="text-align: center;"><img src="../img/pandorabots_1.png" alt="PandoraBots жаңы эсеп ачуу бети" width="40%"/></p>

Жаңы бот түзүү үчүн, навигация панелиндеги My Bots деген бөлүмдүн жанындагы “+” баскычын пайдаланыңыз. Ботко ат коюп, **Create Bot** баскычын басыңыз.

<p style="text-align: center;"><img src="../img/pandorabots_2.png" alt="PandoraBots жаңы бот түзүү" width="40%"/></p>

## Ботту түзөтүү
Жаңы бот түзгөндөн кийин боттун аты навигация панелинде көрүнөт. Боттун ысымынан ылдый жактагы **Edit** баскычын басыңыз, андан соң **Code Editor** жакка өтүп, редакторго кириңиз.

<p style="text-align: center;"><img src="../img/pandorabots_3.png" alt="PandoraBots ботту түзөтүү" width="40%"/></p>

Бул редактордон AIML файлын жана категорияларды жазасыз, алар аркылуу сиз жана башкалар бот менен сүйлөшө алат.

Файл менюсунда жаңы AIML файлын түзүп, ага greetings деген ат ыйгаралы.

<p style="text-align: center;"><img src="../img/pandorabots_4.png" alt="PandoraBots жаңы файл кошуу" width="40%"/></p>

<p style="text-align: center;"><img src="../img/pandorabots_5.png" alt="PandoraBots жаңы файл кошуу" width="40%"/></p>

## Hello World

Төмөндөгү категорияны текст редакторуна, баштапкы ```<aiml>``` жана аяктоочу ```</aiml>``` тэгдеринин ортосунда көчүрүп коюңуз:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Салам, дүйнө!
    </template>
</category>
```

Бул бүтүп бүткөндөн кийин, файлыңызды "File" менюсундагы опциялар аркылуу сактаңыз.

<p style="text-align: center;"><img src="../img/pandorabots_6.png" alt="PandoraBots жаңы файл кошуу" width="40%"/></p>

## Ботту сыноо
Chat Widget сизге бот менен сүйлөшүүгө мүмкүнчүлүк берет. Оң жак астындагы "чат чаттары" сөлөкөтүн басып, ботуңуз менен сүйлөшүү баштаңыз. Мисалы, `HELLO` деп терсеңиз, жооп катары жаңы коддоп койгон нерсеңизди аласыз: `“Салам, дүйнө!”`

<p style="text-align: center;"><img src="../img/pandorabots_7.png" alt="PandoraBots жаңы файл кошуу" width="40%"/></p>
```