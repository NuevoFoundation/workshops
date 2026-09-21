---
title: "Python: EarSketch - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas são soluções de exemplo para o workshop EarSketch. Como o EarSketch é um workshop criativo de música, existem muitas respostas válidas. Os clipes de som, tempos e números de trilhas que você escolher são por sua conta. Seu código está correto se executar sem erros e produzir música! Os exemplos abaixo correspondem ao código de exemplo mostrado em cada atividade.
{{% /notice %}}

## Atividade 1: Definir Tempo e Adicionar Sons

Defina um tempo e adicione um som usando `fitMedia()`:

```python
from earsketch import *

setTempo(120)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
```

**O que cada parâmetro significa:**

| Parâmetro | Valor | Significado |
|-----------|-------|-------------|
| Clipe de som | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | O clipe de áudio a ser reproduzido (procure na aba Sounds para encontrar clipes) |
| Trilha | `3` | Em qual trilha colocar o som (qualquer número inteiro positivo) |
| Início | `1` | Compasso onde o som começa |
| Fim | `17` | Compasso onde o som termina |

{{% notice tip %}}
**Pergunta comum dos alunos:** "Qual tempo devo usar?"

Qualquer número entre 45-220 funciona. Aqui estão algumas orientações:
- **80-90**: Hip-hop, Trap
- **100-130**: Pop, House
- **140-180**: Drum & Bass, Dubstep
{{% /notice %}}

## Atividade 2: Criar uma Música (Múltiplos Sons)

Adicione quatro clipes de áudio diferentes em trilhas diferentes:

```python
from earsketch import *

setTempo(120)
fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17)
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17)
fitMedia(YG_TRAP_BASS_9, 4, 1, 9)
```

{{% notice tip %}}
**Conceito chave:** Cada chamada de `fitMedia()` deve usar um número de trilha diferente. Isso mantém os sons organizados e permite que vários sons sejam reproduzidos ao mesmo tempo. A trilha 1 toca um som, a trilha 2 toca outro, e assim por diante.
{{% /notice %}}

## Atividade 3: Organizar Usando Funções

Use funções para criar seções de uma música no padrão A-B-A:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# Seção A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# Seção B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
```

**Como funciona a estrutura A-B-A:**

| Compassos | Seção | Função chamada |
|-----------|-------|----------------|
| 1-9 | A | `sectionA(1, 9)` |
| 9-17 | B | `sectionB(9, 17)` |
| 17-25 | A (repetir) | `sectionA(17, 25)` |

{{% notice tip %}}
**Pergunta comum dos alunos:** "Por que usar funções em vez de mais chamadas `fitMedia`?"

Funções permitem reutilizar um grupo de sons sem copiar todas as chamadas de `fitMedia`. Para tocar a seção A duas vezes, basta chamar `sectionA()` duas vezes com compassos de início/fim diferentes em vez de escrever 6 chamadas de `fitMedia`.
{{% /notice %}}

## Atividade 4: Adicionar Efeitos

Use `setEffect()` para adicionar um efeito de delay:

```python
from earsketch import *

setTempo(120)

fitMedia(HOUSE_DEEP_CRYSTALCHORD_001, 3, 1, 5)
fitMedia(HOUSE_DEEP_CRYSTALCHORD_002, 3, 5, 9)

# Seção A
def sectionA(startMeasure, endMeasure):
    fitMedia(RD_UK_HOUSE__AIRYPAD_1, 1, startMeasure, endMeasure)
    fitMedia(HOUSE_MAIN_BEAT_002, 4, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)

# Seção B
def sectionB(startMeasure, endMeasure):
    fitMedia(Y37_ORGAN_1, 2, startMeasure, endMeasure)
    fitMedia(HOUSE_ROADS_BASS_001, 5, startMeasure, endMeasure)
    fitMedia(RD_UK_HOUSE__ARPLEAD_1, 6, startMeasure, endMeasure)

sectionA(1, 9)
sectionB(9, 17)
sectionA(17, 25)
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0)
setEffect(2, DELAY, DELAY_TIME, 1200.0)
```

**Parâmetros de `setEffect` (versão com 4 parâmetros):**

| Parâmetro | Valor | Significado |
|-----------|-------|-------------|
| Trilha | `2` | Em qual trilha aplicar o efeito (use `0` para master/todas as trilhas) |
| Tipo | `DELAY` | O tipo de efeito |
| Parâmetro | `DELAY_FEEDBACK` | Qual configuração ajustar |
| Valor | `-6.0` | O valor para essa configuração (intervalo: -120.0 a -1.0 para DELAY_FEEDBACK) |

## Atividade