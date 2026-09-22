---
title: "Análise da Cadeia de Suprimentos - Gabarito"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um material de referência para o professor sobre o workshop de Análise da Cadeia de Suprimentos. Ele contém a configuração completa da otimização, a configuração do Excel Solver e as soluções para tanto o problema principal quanto o desafio extra. Os alunos também têm acesso ao arquivo de respostas em Excel, disponível na página de Resolução.
{{% /notice %}}

## Configuração do Problema

Os alunos gerenciam uma padaria que vende dois tipos de biscoitos. O objetivo é maximizar o lucro usando o Excel Solver.

### Dados do Cenário

**Receita, custo e lucro por lote (12 biscoitos):**

| Biscoito         | Receita | Custo | Lucro |
|------------------|---------|-------|-------|
| Chocolate Chip   | $20     | $10   | $10   |
| Biscoito de Açúcar | $15     | $7    | $8    |

**Ingredientes necessários por lote:**

| Ingrediente     | Chocolate Chip | Biscoito de Açúcar | Disponível |
|-----------------|----------------|--------------------|------------|
| Ovos            | 3              | 2                  | 24         |
| Farinha (xícaras) | 8              | 5                  | 55         |
| Açúcar (xícaras) | 5              | 6                  | 50         |

## Formulação da Otimização

Seja **x** = lotes de biscoitos chocolate chip, **y** = lotes de biscoitos de açúcar.

**Variáveis de decisão:** x e y (devem ser números inteiros não-negativos)

**Função objetivo (maximizar):**

```
Lucro = 10x + 8y
```

**Restrições:**

```
3x + 2y ≤ 24    (ovos)
8x + 5y ≤ 55    (farinha)
5x + 6y ≤ 50    (açúcar)
x, y ≥ 0        (não-negativos)
x, y inteiros   (apenas lotes inteiros)
```

{{% notice tip %}}
**Dica para o Professor:** Explique aos alunos como traduzir o problema textual para matemática. Cada linha da tabela de restrições se transforma em uma desigualdade. O lado esquerdo é "quanto usamos desse ingrediente" e o lado direito é "quanto temos disponível."
{{% /notice %}}

## Solução: Problema Principal

**Resposta Ótima: 5 lotes de chocolate chip, 3 lotes de biscoitos de açúcar**

**Lucro Máximo: $74**

Cálculo: Lucro = 10(5) + 8(3) = 50 + 24 = **$74**

### Verificação de Restrições

| Restrição   | Cálculo       | Usado | Disponível | Sobra |
|-------------|---------------|-------|------------|-------|
| Ovos        | 3(5) + 2(3) = 21 | 21    | 24         | 3 sobrando |
| Farinha     | 8(5) + 5(3) = 55 | 55    | 55         | 0 (uso total) |
| Açúcar      | 5(5) + 6(3) = 43 | 43    | 50         | 7 sobrando |

{{% notice tip %}}
**Dica para o Professor:** Aponte que a farinha é a "restrição vinculante" (zero de sobra). Isso significa que a farinha é o ingrediente que limita a quantidade de biscoitos que podemos fazer. Se conseguíssemos mais farinha, poderíamos obter mais lucro. Ovos e açúcar têm capacidade sobrando.
{{% /notice %}}

## Configuração do Excel Solver

No diálogo do Solver, os alunos devem configurar:

| Campo do Solver         | Célula/valor                       |
|--------------------------|------------------------------------|
| **Definir Objetivo**     | A célula do Lucro Total (Passo 3) |
| **Para**                 | Máx                               |
| **Alterando Células Variáveis** | As duas células "# de lotes" (Passo 2) |
| **Restrições**           | Fórmula dos ovos ≤ 24, fórmula da farinha ≤ 55, fórmula do açúcar ≤ 50 |
| **Restrição de Inteiros** | Células dos lotes = Inteiros (para que o Solver retorne números inteiros) |
| **Tornar Variáveis Não Restritas Não Negativas** | Marcado |
| **Método de Resolução**  | Simplex LP                        |

Certifique-se também de que a opção "Tornar Variáveis Não Restritas Não Negativas" esteja marcada nas opções do Solver.

### Referência de fórmulas no Excel

| Propósito da célula | Padrão de fórmula                    |
|----------------------|-------------------------------------|
| Lucro por lote       | `=Receita - Custo` (ex.: `=C7-D7`) |
| Lucro Total          | `=Lucro_CC * Lotes_CC + Lucro_Açúcar * Lotes_Açúcar` |
| Uso de ovos          | `=Ovos_por_CC * Lotes_CC + Ovos_por_Açúcar * Lotes_Açúcar` |
| Uso de farinha       | `=Farinha_por_CC * Lotes_CC + Farinha_por_Açúcar * Lotes_Açúcar` |
| Uso de açúcar        | `=Açúcar_por_CC * Lotes_CC + Açúcar_por_Açúcar * Lotes_Açúcar` |

## Desafio Extra: Escassez de ovos

A cerca se quebra e as galinhas escapam. Os ovos disponíveis caem de 24 para 15.

**Nova resposta ótima: 1 lote de chocolate chip, 6 lotes de biscoitos de açúcar**

**Novo lucro máximo: $58**

Cálculo: Lucro = 10(1) + 8(6) = 10 + 48 = **$58**

### Verificação de Restrições (Desafio)

| Restrição   | Cálculo       | Usado | Disponível | Sobra |
|-------------|---------------|-------|------------|-------|
| Ovos        | 3(1) + 2(6) = 15 | 15    | 15         | 0 (uso total) |
| Farinha     | 8(1) + 5(6) = 38 | 38    | 55         | 17 sobrando |
| Açúcar      | 5(1) + 6(6) = 41 | 41    | 50         | 9 sobrando |

**O lucro diminuiu em