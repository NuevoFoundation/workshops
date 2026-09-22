---
title: "Тилди Аныктоо Функциясы"
draft: false
weight: 1
---

Бул функция билдирүүнүн англис же испан тилдеринде жазылганын аныктайт. Бул кандай тилди угуп жатканын дароо айтып бере алган бирөө бар сыяктуу!

## `detect_language()` Функциясы

Бул жерде LibreTranslate'ге "бул кайсы тил?" деп сураган код:

```python
def detect_language(text):
    """Бул текст кайсы тилде экенин LibreTranslateден (en/es) сураңыз."""
    try:
        data = {"q": text}
        response = requests.post("http://127.0.0.1:5000/detect", json=data, timeout=5)
        result = response.json()
        if result and len(result) > 0:
            language = result[0]["language"]
            if language in ["en", "es"]:
                return language
        return None
    except requests.exceptions.Timeout:
        return None
    except requests.exceptions.ConnectionError:
        return None
    except Exception:
        return None
```

## Бул Кантип Иштейт

1. **Текстти жөнөтүү**: Биз билдирүүнү LibreTranslate'ге жөнөтөбүз.
2. **Жооп алуу**: LibreTranslate билдирүүнүн кайсы тилде экенин айтып берет.
3. **Колдонула турганын текшерүү**: Биз англисче (`en`) же испанча (`es`) гана иштейбиз.
4. **Маселелерди карап чыгуу**: Эгерде бир нерсе туура эмес болуп калса, анда `None` кайтарабыз (бул "билбей калдым" дегенди билдирет).

## Бот Муну Мениен Эмне Кылат

Кимдир бирөө билдирүү жөнөткөндө, бот:
- Бул функцияны колдонуп, тилди аныктайт.
- Англис же испан тилдеринде эмес билдирүүлөрдү өткөрүп жиберет.
- Кимге котормо керек экенин аныктайт.

## Мисал

Кимдир бирөө "Hello world" деп жазганда, LibreTranslate төмөнкү сыяктуу нерсе жиберет:
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

Функция `"en"` маанисин кармап алып, аны кайтарат.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Nuvi талисманы" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi кеңеши:</strong> LibreTranslate'ди `--load-only en,es` менен иштетип баштаңыз, ошондо ал тезирээк иштеш үчүн англис жана испан тилдерин гана жүктөйт.
{{< /alert >}}

## Жалпы Мүчүлүштүктөр

| Эмне Туура Эмес? | Кантип Түзөтсө Болот?         |
|------------------|-------------------------------|
| Ар дайым `None` кайтат | LibreTranslate иштеп жатканын текшериңиз |
| Тилди туура эмес аныктайт | Узунураак билдирүүлөрдү жазып көрүңүз |
| Өтө жай иштейт | 5 секунддук убакыт ашыкча кыска болушу мүмкүн |