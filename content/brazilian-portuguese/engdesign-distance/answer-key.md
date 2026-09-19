---
title: "Projeto de Engenharia DISTANCE - Gabarito"
date: 2024-01-15T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um material de referência para professores do workshop de Projeto de Engenharia DISTANCE. Este workshop está atualmente em estado de rascunho (todas as páginas de atividades estão marcadas como `draft: true`) e possui conteúdo incompleto, incluindo imagens ausentes, um arquivo de código MATLAB/Octave não fornecido e uma tabela de critérios de avaliação pendente. Este gabarito documenta os passos do processo de design do workshop e as escolhas esperadas de parâmetros para ajudar os professores a entenderem o fluxo pretendido caso o workshop seja concluído no futuro.
{{% /notice %}}

{{% notice warning %}}
**Status do workshop: Incompleto.** Todas as 11 páginas de atividades estão `draft: true`. Múltiplas páginas possuem marcadores `[insert image]` e `[insert table]`. O código MATLAB/Octave mencionado em todo o workshop não é fornecido. As instruções de instalação do Octave fazem referência a um arquivo ("Octave Instructions.docx") que não existe no repositório. Este workshop não pode ser realizado com os estudantes em seu estado atual.
{{% /notice %}}

## Visão geral do workshop

Os estudantes participam de uma competição fictícia de corrida chamada DISTANCE (San Diego Student Racing Competition). A tarefa deles é projetar um eixo de transmissão para um carro de corrida usando o Processo de Design da Engenharia, com um programa MATLAB/Octave que calcula o diâmetro recomendado do eixo com base em parâmetros escolhidos pelos estudantes.

## Os 5 parâmetros de design

O workshop guia os estudantes por meio de 5 escolhas que alimentam o cálculo no MATLAB:

### 1. Fator de Segurança (Atividade 5)

Uma relação entre o limite do material e a carga atual. Valores mais altos indicam designs mais seguros, mas potencialmente superdimensionados.

| Fator de Segurança | Significado |
|--------------------|-------------|
| 1 | O limite do material é igual à carga atual (arriscado) |
| 2-3 | Típico para muitas aplicações de engenharia |
| 6 | Fator de segurança da Ponte Golden Gate |
| Valores mais altos | Mais seguros, mas mais pesados/custosos |

**Escolha esperada dos estudantes:** Um número maior que 1. O workshop fornece exemplos do mundo real (pontes, motores, aeronaves) como contexto.

### 2. Seleção de material (Atividade 6)

Os estudantes escolhem entre 5 materiais, cada um com diferentes propriedades mecânicas:

| Material | Característica principal |
|----------|--------------------------|
| Aço | Forte, pesado, difícil de quebrar |
| Madeira | Leve, fácil de trabalhar, menos durável |
| Vidro | Quebra facilmente, muito frágil |
| Alumínio | Mais leve que o aço, resistência moderada |
| Plástico | Flexível, leve, a opção mais fraca |

**Escolha esperada dos estudantes:** Aço ou alumínio são as opções mais práticas para um eixo de transmissão. O programa utiliza as propriedades mecânicas de cada material (limite de escoamento, limite de resistência) no cálculo do diâmetro.

### 3. Condições do eixo (Atividade 7)

Três condições ambientais que afetam o desempenho do eixo:

| Condição | Opções | Impacto |
|----------|--------|---------|
| Polimento da superfície | Polida x Não polida | Riscos/defeitos aumentam o risco de falha |
| Temperatura do motor | Excelente até risco de superaquecimento | Superaquecimento pode derreter ou danificar partes |
| Clima (chuva) | Otimista x Realista | Água provoca corrosão e deterioração do material |

**Escolhas esperadas dos estudantes:** Estas são decisões baseadas em julgamento. Escolhas otimistas produzem diâmetros menores; escolhas realistas produzem diâmetros maiores (mais seguros).

### 4. Parâmetros de carga (Atividade 8)

Dois tipos de força no eixo de transmissão:

| Tipo de carga | Descrição | Faixa |
|---------------|-----------|-------|
| Torque | Força rotacional do motor para as rodas | 0-10.000 (baseado em valores reais de torque de carro) |
| Momento (flexão) | Forças que causam a flexão do eixo | 0-10.000 |

**Entrada esperada dos estudantes:** Os estudantes selecionam valores mínimos e máximos para torque e momento. Valores mais altos exigem um diâmetro maior do eixo.

### 5. Geometria (Atividade 9)

Os estudantes escolhem entre dois tipos de cantos na seção transversal do eixo:

| Geometria | Descrição | Efeito |
|-----------|-----------|--------|
| Cantos quadrados | Bordas afiadas | Maiores concentrações de tensão (mais perigosas) |
| Cantos arredondados | Bordas arredondadas | Menores concentrações de tensão (mais seguros) |

**Escolha esperada dos estudantes:** Cantos arredondados são a escolha de engenharia mais segura. O workshop explica concentrações de tensão usando o exemplo de janelas de avião (janelas arredondadas vs. retangulares).

## Resultado esperado

O programa MATLAB/Octave calcula um diâmetro mínimo do eixo com base nos 5 parâmetros. Os estudantes então verificam o diâmetro obtido em uma tabela de critérios de avaliação (Atividade 11, não fornecida no workshop) para determinar o "posicionamento" do carro na competição.

**Princípios gerais** (baseado em princípios padrão de engenharia; o código real não está disponível para verificação):
- Fatores de segurança maiores produzem diâmetros maiores.
- Materiais mais fortes (aço) permitem diâmetros menores.
- Piores condições (superaquecimento, chuva, não polido) aumentam o diâmetro.
- Cargas mais altas (torque, momento) aumentam o diâmetro.
- Cantos quadrados exigem diâmetros maiores do que cantos arredondados.

## Status de conclusão do workshop

| Atividade | Título | Status |
|-----------|--------|--------|
| 1 | Fundamentos do eixo de transmissão | Rascunho, texto incompleto |
| 2 | Desenhe seu eixo de transmissão | Rascunho, imagem ausente |
| 3 | Código (MATLAB/Octave) | Rascunho, arquivo de código não fornecido, arquivo de instalação do Octave ausente |
| 4 | Estrutura do código | Rascunho, imagem ausente |
| 5 | Fator de segurança | Rascunho, imagem ausente, possui links externos |
| 6 | Escolha de material | Rascunho, imagem ausente |
| 7 | Escolha de condições | Rascun