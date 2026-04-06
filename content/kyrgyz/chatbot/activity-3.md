---
title: "Иш-аракет 3: Өз категорияларыңызды кошуңуз"
draft: false
weight: 7
---

## Көбүрөөк категорияларды кошуу

Азыр биздин бот "Hello" дегенге гана жооп бере алат. Боттун көбүрөөк нерселерге жооп бере алышы үчүн кошумча категорияларды кошуп көрөлү.

1. Эгерде колдонучу "What is your name?" десе, бот "My name is Chatbot" деп жооп бериши керек.  
2. Эгерде колдонучу "What is your favorite color?" десе, бот "My favorite color is blue" деп жооп бериши керек.  
3. Эгерде колдонучу "What is your favorite food?" десе, бот "My favorite food is pizza" деп жооп бериши керек.  

<img src="../img/ideas.png" alt="" width="30%" style="" /

Эскерте кетсек, бул категориянын негизги түзүлүшү:

```
<category>
    <pattern>HELLO</pattern>
    <template>
        Hello, World!
    </template>
</category>
```

{{% notice tip %}}

Эскерүү: Мүнөздү жазып жатканда бардыгын чоң тамгалар менен жазып, тыныш белгилерди колдонбоңуз. Ошондуктан, эгер "What is your name?" дегенге дал келгиңиз келсе, аны "WHAT IS YOUR NAME" деп жазышыңыз керек.

{{% /notice %}}

{{% notice tip %}}

Эскерүү: Категорияларды өзгөртүп, бот менен өз ара иштешүүнү каалаган сайын файлды сактоону унутпаңыз.

{{% /notice %}}

Бул категорияларды ботыңарга кошуп, чат виджети аркылуу сынап көрүңүз. Ушул этапта бот "Hello", "What is your name?", "What is your favorite color?" жана "What is your favorite food?" дегенге жооп бериши керек.