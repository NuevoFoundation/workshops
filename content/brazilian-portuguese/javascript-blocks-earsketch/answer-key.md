---
title: "Blocos: EarSketch - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um recurso para professores utilizado no workshop de EarSketch com blocos em JavaScript. O workshop utiliza blocos de arrastar e soltar, mas cada bloco gera código JavaScript por trás. Este gabarito mostra o código JavaScript equivalente para cada atividade, para que os professores possam verificar o trabalho dos alunos. Como este é um workshop criativo de música, existem várias respostas válidas. Seu código está correto se rodar sem erros e produzir música!
{{% /notice %}}

## Atividade 1: Definir o Tempo e Adicionar Sons

Arraste um bloco `fitMedia()` abaixo do bloco `setTempo` e preencha os parâmetros:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 1, 1, 9);
```

**Parâmetros do bloco:**

| Parâmetro | Valor | Como configurá-lo |
|-----------|-------|-------------------|
| Som | `YG_TRAP_ELECTRIC_PIANO_FILTERED_1` | Clique em "som" no bloco e cole a opção do painel de Sons |
| Faixa | `1` | Use o menu suspenso |
| Início | `1` | Medida inicial |
| Fim | `9` | Medida final |

## Atividade 2: Criar uma Música (Vários Sons)

Adicione quatro blocos `fitMedia()`, cada um em uma faixa diferente:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
```

{{% notice tip %}}
**Conceito chave para os alunos:** Cada bloco `fitMedia()` deve usar um número de faixa diferente. Isso mantém os sons organizados e permite que vários sons toquem ao mesmo tempo.
{{% /notice %}}

## Atividade 3: Adicionar Efeitos

Arraste um bloco `setEffect()` (a versão de 4 parâmetros) abaixo dos blocos `fitMedia()`:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
```

**Parâmetros de `setEffect` (versão de 4 parâmetros):**

| Parâmetro | Valor | Significado |
|-----------|-------|------------|
| Faixa | `2` | Qual faixa (use `0` para master/todas as faixas) |
| Tipo de efeito | `DELAY` | Selecione no menu suspenso |
| Parâmetro | `DELAY_FEEDBACK` | Selecione no menu suspenso |
| Valor | `-6.0` | Intervalo: -120.0 a -1.0 |

## Atividade 4: Criar um Fade-in com Efeitos

Arraste o bloco `setEffect()` de 7 parâmetros para criar um fade-in de volume:

**JavaScript equivalente:**
```javascript
setTempo(120);
fitMedia(RD_TRAP_BELLLEAD_1, 1, 1, 9);
fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17);
fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17);
fitMedia(YG_TRAP_BASS_9, 4, 1, 9);
setEffect(2, DELAY, DELAY_FEEDBACK, -6.0);
setEffect(0, VOLUME, GAIN, -60, 1, 0, 3);
```

**Parâmetros de `setEffect` (versão de 7 parâmetros):**

| Parâmetro | Valor | Significado |
|-----------|-------|------------|
| Faixa | `0` | Faixa mestre (todos os sons) |
| Tipo de efeito | `VOLUME` | Controle de volume |
| Parâmetro | `GAIN` | Configuração de volume |
| Valor inicial | `-60` | Quase silencioso (em decibéis) |
| Medida inicial | `1` | Quando o fade começa |
| Valor final | `0` | Volume normal |
| Medida final | `3` | Quando o fade termina |

{{% notice tip %}}
**Como o fade-in funciona:** O volume começa em -60 dB (quase silencioso) na medida 1 e aumenta para 0 dB (volume normal) na medida 3. Quanto mais negativo o número de decibéis, mais baixo o som. Não exceda 0 dB.
{{% /notice %}}

## Referência Rápida do EarSketch

| Bloco | Finalidade | Principais Parâmetros |
|-------|------------|-----------------------|
| `setTempo(bpm)` | Define a velocidade da música | 45-220 BPM |
| `fitMedia(clip, track, start, end)` | Adiciona um som | Escolha o clip no painel de Sons |
| `setEffect(track, type, param, value)` | Adiciona um efeito | Escolha o tipo/parâmetro nos menus suspensos |
| `setEffect(track, type, param, startVal, start, endVal, end)` | Automatiza um efeito | Para fade-in/fade-out |