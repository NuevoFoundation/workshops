---
title: "Баштапкы кадамдар"
date: 2020-07-29T14:08:32-07:00
draft: false
weight: 2
---

## Сунуштар

| Курал | Максаты | Орнотуу шилтемеси |
|-------|---------|------------------|
| **Git** | Версияларды көзөмөлдөө | [git-scm.com/downloads](https://git-scm.com/downloads) |
| **Hugo (Extended)** | Семинар сайты курулат | [gohugo.io/installation](https://gohugo.io/installation/) |
| **VS Code** (сунушталат) | Тексттик редактор | [code.visualstudio.com](https://code.visualstudio.com/download) |

Git менен жаңы таанышсызбы? GitHub'дун [Тез баштоо колдонмосун](https://docs.github.com/en/get-started/quickstart) караңыз.

### Hugo үчүн тез орнотуу

**Windows (winget):**
```
winget install Hugo.Hugo.Extended
```

**macOS (Homebrew):**
```
brew install hugo
```

**Linux (snap):**
```
snap install hugo
```

`hugo version` буйругу менен текшериңиз. Натыйжада **extended** деген жазуу пайда болушу керек.

## Көзөмөл шилтемелери

- [GitHub репосу](https://github.com/NuevoFoundation/workshops)
- [Семинарлардын веб-сайты](https://workshops.nuevofoundation.org/)

## Видеонускамалар

- [Семинарлардын GitHub репосу боюнча өнүгүү цикли](https://youtu.be/LpjucoAVviI)
- [Семинарлардын GitHub репосу структурасы](https://youtu.be/cygmE6LGcOw)

## Репону тармактоо жана көчүрүү

Кошулуулардын [тармактоо модели](https://help.github.com/articles/fork-a-repo/) колдонулуп ишке ашырылат. Өзүңүздүн тармакка өзгөртүүлөрдү киргизип, анан аларды негизги репого бириктирүү үчүн суроо өтүнүчүн ачасыз.

### 1. Репону тармактаңыз

<a target="_blank" href="https://github.com/nuevoFoundation/workshops">Семинарлар репосунун </a> жогорку оң бурчундагы **Fork** баскычын басыңыз:

![GitHub сайтындагы Fork баскычы көрсөтүлгөн скриншот](/guidelines/media/fork.png)

### 2. Өз тармагыңызды көчүрүңүз (clone)

`[your-username]` ордуна GitHubдагы колдонуучу атыңызды коюңуз:

```bash
git clone https://github.com/[your-username]/workshops.git
cd workshops
```

### 3. Жогорку тармак алыстан башкаруу орнотуңуз

Бул негизги реподон жаңыртууларды алып, кокусунан өзгөртүүлөрдү жиберүүдөн сактайт:

```bash
git remote add upstream https://github.com/NuevoFoundation/workshops.git
git remote set-url --push upstream no_push
```

`git remote -v` буйругу менен текшериңиз:

```
origin    https://github.com/[your-username]/workshops.git (fetch)
origin    https://github.com/[your-username]/workshops.git (push)
upstream  https://github.com/NuevoFoundation/workshops.git (fetch)
upstream  no_push (push)
```

## Локалдык түрдө куруу жана тестирлөө

`workshops` каталогунан төмөнкү буйрукту ишке киргизиңиз:

```bash
hugo server -D
```

- `-D` болгон мазмунду чагылдырганга мүмкүндүк берет, ал иштелип жаткан иштерди алдын ала көрүүгө мүмкүнчүлүк берет.
- Сайт бир нече секунддун ичинде курулуп, **http://localhost:1313/** дарегинде жеткиликтүү болот.
- Hugo файлдардагы өзгөртүүлөрдү байкап, браузериңизди автоматтык түрдө жаңыртат.

Сервердүү токтотуу үчүн `Ctrl+C` басыңыз.

## Өзүңүздүн тармагыңызды жаңыртыңыз

Жаңы ишти баштаардан мурун жогорку версия менен синхрондоо жасаңыз:

```bash
git fetch --all --prune
git checkout master
git merge upstream/master
git push origin master
```

## Мисалдуу колдонмо

**Сценарий**: Жөнөкөй өзгөртүүнү жасап, суроо өтүнүчүн жөнөтүңүз.

### Тема боюнча бутак түзүү (branch)

Алгач тармагыңыз жаңыланганына ишениңиз:

```bash
git checkout master
git checkout -b my-change
git push --set-upstream origin my-change
```

### Өзгөртүү жасаңыз

Репо каталогуңузду VS Code'до ачыңыз. Өзгөртүүнү каалаган файлды табыңыз. Бул мисалда, `content/english/guidelines/getting-started.md` файлына өзгөртүү киргизилет. Файл структурасын тереңирээк түшүнүү үчүн [сайтты кантип куруу керектиги](../site-architecture/) боюнча маалыматтарды караңыз.

### Өзгөртүүнү сактап, жүктөңүз

```bash
git add content/english/guidelines/getting-started.md
git commit -m "Эмне өзгөртүлгөнү тууралуу сүрөттөө"
git push
```

**Кеңеш**: Бардык түрткөн файлдарды сахнага коюп, бир кадамда сактап коюу үчүн `git commit -am "кат" ` буйругун колдонуңуз.

### Суроо өтүнүчүн ачыңыз

GitHub'дагы өз тармагыңызга өтүңүз. Жакында түртүп жиберилген өзгөртүү үчүн суроо өтүнүчүн түзүү боюнча ырааттаманы көрөсүз:

![GitHub сайтындагы салыштыруу жана суроо өтүнүч баскычы көрсөтүлгөн скриншот](/guidelines/media/compare-and-pull.png)

Эгерде ырааттама көрүнбөсө, **Pull Requests > New pull request** бөлүмүнө өтүңүз:

![GitHub сайтындагы Жаңы Суроо Өтүнүч баскычы көрсөтүлгөн скриншот](/guidelines/media/create-new-pr.png)

Негизги бутакты (target) жана булак бутакты (source) туура тандооңузга ынаныңыз, аталыш жана сүрөттөмө кош