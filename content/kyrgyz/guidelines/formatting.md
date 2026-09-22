---
title: "Форматтоо"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 5
---
Семинарларды түзүү же түзөтүү учурунда сиз стандарттык Markdown синтаксисин, ошондой эле айрым кошумча ыңгайлаштырылган синтаксистерди колдоносуз. Бул баракта семинарга атайын форматтарды кошуу үчүн кандай синтаксис колдонуу керек экени түшүндүрүлөт.

## Форматтоо маалыматы

- [Стандарттык Markdown боюнча кыскача маалымат](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Шорткоддорду колдонуу менен кастом форматтоо параметрлери](/guidelines/shortcodes/)

## Форматтоо мисалдары

Бул тема сайтыңыздын көрүнүшүн жана сезимдерин ыңгайлаштыруунун бир катар варианттарын камтыйт. Төмөндө сиз бир нече колдонуу мисалдарын таба аласыз, алар берген синтаксис жана ошол синтакс колдонгондо бетте эмне көрсөтүлөрү менен коштолот.

### Эскертүүлөр

#### Маалымат

    {{</* alert theme="info" */>}}**Бул** маалымат {{</* /alert */>}}

{{< alert theme="info">}}**Бул** маалымат{{< /alert >}}

#### Ийгилик

    {{</* alert theme="success" */>}}**Ооба!** бул ийгилик {{</* /alert */>}}

{{< alert theme="success" >}}**Ооба!** бул ийгилик{{< /alert >}}

#### Эскертүү

    {{</* alert theme="warning" */>}}**Этият болуңуз** бул эскертүү {{</* /alert */>}}

{{< alert theme="warning" >}}**Этият болуңуз** бул эскертүү{{< /alert >}}

#### Коркунуч

    {{</* alert theme="danger" */>}}**Сак болуңуз!** бул коркунуч {{</* /alert */>}}

{{< alert theme="danger" >}}**Сак болуңуз!** бул коркунуч{{< /alert >}}

### Төмөнкү баскычтар

    {{</* button href="https://nuevofoundation.org" */>}} Nuevo Foundation'га өтүү {{</* /button */>}}

{{<button href="https://google.com" >}} Nuevo Foundation'га өтүү {{< /button >}}

#### Ийгиликтүү баскыч

    {{</* button href="https://nuevofoundation.org" theme="success" */>}} Ийгилик {{</* /button */>}}

{{<button href="https://google.com" theme="success">}} Ийгилик {{< /button >}}

#### Маалымат баскычы

    {{</* button href="https://nuevofoundation.org" theme="info" */>}} Маалымат {{</* /button */>}}

{{<button href="https://google.com" theme="info">}} Маалымат {{< /button >}}

#### Эскертүү баскычы

    {{</* button href="https://nuevofoundation.org" theme="warning" */>}} Эскертүү {{</* /button */>}}

{{<button href="https://google.com" theme="warning">}} Эскертүү {{< /button >}}

#### Опасный баскыч

    {{</* button href="https://nuevofoundation.org" theme="danger" */>}} Опасный! {{</* /button */>}}

{{<button href="https://google.com" theme="danger">}} Опасный! {{< /button >}}

#### Негизги баскыч

    {{</* button href="https://nuevofoundation.org" theme="default" */>}} Опасный! {{</* /button */>}}

{{<button href="https://google.com" theme="default">}} Опасный! {{< /button >}}

### Кеңейтүү

    {{</*expand "Бул жерди басып, кеңейтиңиз!"*/>}}
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    {{</* /expand*/>}}

{{< expand "Бул жерди басып, кеңейтиңиз!" >}}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{< /expand >}}

### Эскертмелер

#### Эскертүү

    {{</* notice note */>}}
    Бир эскертүү жазуусу
    {{</* /notice */>}}

{{< notice note >}}
Бир эскертүү жазуусу
{{< /notice >}}

#### Маалымат эскертүүсү

    {{</* notice info */>}}
    Маалыматтык эскертүү
    {{</* /notice */>}}

{{< notice info >}}
Маалыматтык эскертүү
{{< /notice >}}

#### Кеңеш эскертүүсү

    {{</* notice tip */>}}
    Кеңеш боюнча эскертүү
    {{</* /notice */>}}

{{< notice tip >}}
Кеңеш боюнча эскертүү
{{< /notice >}}

#### Эскертүү эскертүүсү

    {{</* notice warning */>}}
    Эскертүү боюнча эскертүү
    {{</* /notice */>}}

{{< notice warning >}}
Эскертүү боюнча эскертүү
{{< /notice >}}

### Мисал сүрөтчөлөрү

[Толук тизмесин бул жерден көрүңүз](/guidelines/shortcodes/icon)

|Иконка|Иконканын аты|Колдонуунун мисалы|
|----|---------|-------------|
|{{< icon name="asterisk" size="large" >}}|жатка белги|<code>{{&lt;icon name=&quot;asterisk&quot; size=&quot;large&quot;&gt;}}</code>|
|{{< icon name="plus" size="large" >