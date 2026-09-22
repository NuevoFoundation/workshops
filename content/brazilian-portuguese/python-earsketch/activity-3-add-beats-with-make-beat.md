```markdown
---
title: "Atividade 3 - Adicione batidas à sua música com makeBeat"
description: "Configurando os fones de ouvido"
prereq: "Noções Básicas de Python: Funções"
difficulties: ["intermediário"]
weight: 7
draft: false
---

Vamos tentar adicionar algumas batidas interessantes à música! Usaremos a função `makeBeat`.

Antes de usar a função `makeBeat`, vamos entender como funcionam as **strings**.

## Strings

Tudo o que você vê entre **aspas** é chamado de **string**. Uma string é apenas uma sequência de caracteres (sejam eles letras, números ou símbolos). Por exemplo, `"olá mundo"` é uma string.

Para usar o `makeBeat`, vamos misturar e combinar os três tipos de batidas a seguir para criar um ritmo interessante para nossa música:

- `"0"` reproduz o som por uma nota.
- `"-"` faz uma pausa (ou seja, cria silêncio) por uma nota.
- `"+"` estica (ou seja, mantém) o som ou silêncio por uma nota adicional.

A função `makeBeat` assume que queremos criar batidas que cubram 16 notas por compasso. Para facilitar, criaremos batidas com strings que tenham exatamente 16 caracteres. Embora também seja possível usar strings de qualquer comprimento, é melhor que elas tenham um comprimento múltiplo de 16 (ou seja, 16, 32, 48, etc.).

Aqui estão alguns exemplos de batidas válidas:

- `"0+------0+------"`: reproduz 2 sons por compasso, e cada som dura 2 notas, seguido por 6 notas de pausa.

<figure>
    <audio
        controls
        src="../audio/makebeat1.mp3">
            Teste o áudio para verificar se o seu navegador suporta o elemento de áudio. Se você não conseguir reproduzir o áudio, provavelmente significa que o seu navegador não suporta este 
            elemento <code>audio</code>.
    </audio>
</figure>

- `"0-0-0-0-0-0-0-0-"`: reproduz 8 sons por compasso, e cada som dura 1 nota.

<figure>
    <audio
        controls
        src="../audio/makebeat2.mp3">
            Teste o áudio para verificar se o seu navegador suporta o elemento de áudio. Se você não conseguir reproduzir o áudio, provavelmente significa que o seu navegador não suporta este 
            elemento <code>audio</code>.
    </audio>
</figure>

- `"0++0++0++0++0-0-"`: reproduz 6 sons em um padrão balançado.

<figure>
    <audio
        controls
        src="../audio/makebeat3.mp3">
            Teste o áudio para verificar se o seu navegador suporta o elemento de áudio. Se você não conseguir reproduzir o áudio, provavelmente significa que o seu navegador não suporta este 
            elemento <code>audio</code>.
    </audio>
</figure>

Agora é hora de adicionar batidas à sua música!

## Atividade 3

1. Certifique-se de que o cursor no seu programa está abaixo das funções `fitMedia()`.

2. Role pela lista **API** no lado esquerdo do editor de código e encontre a primeira função `makeBeat()`.

<img src="../img/screenshot-find-makebeat.png" height="400"/>

3. Clique no ícone **Colar** no canto direito da função `makeBeat()` para inseri-la abaixo da função `fitMedia`.

<img src="../img/icon-paste.png"/>

4. Mais uma vez, ao colar a função, o Earsketch irá gerar alguns `parâmetros` que precisaremos substituir posteriormente.

<img src="../img/screenshot-makebeat.png" />

Você pode especificar seus próprios valores para o seguinte:

- `sound` - Navegue até o painel **Sounds**. Clique em **GENRES** e, em seguida, clique no filtro **MAKEBEAT**. Encontre um som de que você goste nesta lista.

<img src="../img/screenshot-makebeat-sounds.png" height="400"/>

- `track` - Escolha qualquer número inteiro positivo como o número da trilha. Certifique-se de usar um número de trilha que ainda não foi utilizado.
- `start` - Especifique o compasso inicial da batida.
- `beat` - Especifique a batida que deseja adicionar como uma `string`, que idealmente deve ter 16 caracteres.

Se você não tiver certeza sobre os valores a escolher, experimente o seguinte:

- `makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")`

Depois, adicione mais algumas funções `makeBeat` à sua música. Tente adicionar pelo menos duas funções `makeBeat`.

Seu código agora deverá se parecer com isso:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)  

fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

makeBeat(OS_CLAP01, 6, 1, "--0+--0+--0+0+0+")
makeBeat(OS_CLAP01, 6, 2, "--0+--0+--000000")
makeBeat(OS_CLAP01, 6, 3, "0+-0+-0+-0+-0-0-")
makeBeat(OS_CLAP01, 6, 4, "0+-0+-0+-0+-0000")
```
```