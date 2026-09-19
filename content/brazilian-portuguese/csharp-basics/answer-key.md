---
title: "C#: Básico - Gabarito"
date: 2026-04-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Estas são soluções de exemplo. Muitos desafios têm várias respostas válidas, especialmente aqueles que pedem para você criar seus próprios exemplos. Sua solução está correta se produzir a saída esperada!
{{% /notice %}}

## Variáveis e Tipos de Dados

### Ajude Patrick a Corrigir Suas Variáveis

O código de Patrick tem os tipos de dados errados atribuídos a cada variável. Aqui estão as declarações corrigidas:

```csharp
string bestFriend = "Minerva";
int numOfFriends = 4;
double GPA = 3.6;
char meaningOfLife = '$';
bool loveMusic = true;
```

**Explicação:** Cada variável precisa de um tipo de dado que corresponda ao valor armazenado:

| Variável | Tipo Errado | Tipo Correto | Por quê |
|----------|-------------|--------------|---------|
| `bestFriend` | `int` | `string` | `"Minerva"` é texto, não um número |
| `numOfFriends` | `bool` | `int` | `4` é um número inteiro, não verdadeiro/falso |
| `GPA` | `string` | `double` | `3.6` é um número decimal, não texto |
| `meaningOfLife` | `double` | `char` | `'$'` é um único caractere, não um decimal |
| `loveMusic` | `char` | `bool` | `true` é um valor booleano, não um caractere |

Saída:
```
Você consertou!
```

## Operadores

### Estatísticas do Exame

Dadas as notas: Patrick (88), Tom (89), Mary (95), Chris (84), Jen (92):

```csharp
// 1. Declarar variáveis de nota dos alunos
int patrickGrade = 88;
int tomGrade = 89;
int maryGrade = 95;
int chrisGrade = 84;
int jenGrade = 92;

// 2. Calcular a média da turma
average = (patrickGrade + tomGrade + maryGrade + chrisGrade + jenGrade) / 5.0;

// 3. Usar operadores relacionais para as comparações
bool over60 = average > 60;
bool over70 = average > 70;
bool over80 = average > 80;
bool over90 = average > 90;
```

{{% notice tip %}}
Dividimos por `5.0` em vez de `5` para obter um resultado decimal. Em C#, dividir dois inteiros retorna um inteiro (o resto é descartado). Usar `5.0` garante que obteremos a média exata.
{{% /notice %}}

Saída:
```
---------------------------
     Relatório de Notas    
---------------------------

Notas dos Alunos:          
- Patrick: 88
- Tom: 89
- Mary: 95
- Chris: 84
- Jen: 92

Média da Turma: 89,6
- Média Acima de 60: True
- Média Acima de 70: True
- Média Acima de 80: True
- Média Acima de 90: False
```

## Estruturas de Controle

### If-Statement: Saudação de Patrick

Preencha as expressões booleanas para que Patrick diga a saudação correta com base na hora:

```csharp
int currentHour = 10; // altere isso para testar diferentes horas (0-23)

if (currentHour < 12)
{
    Console.WriteLine("Bom dia");
}
else if (currentHour < 20)
{
    Console.WriteLine("Boa tarde");
}
else
{
    Console.WriteLine("Boa noite");
}
```

**Como funciona:**
- Horas 0-11: `currentHour < 12` é `true` → imprime "Bom dia"
- Horas 12-19: `currentHour < 12` é `false`, mas `currentHour < 20` é `true` → imprime "Boa tarde"
- Horas 20-23: ambas as condições são `false` → entra no `else` → imprime "Boa noite"

### For-Loop: Soma de 1 a 100

Converta o loop while para um loop for que calcula 1 + 2 + 3 + ... + 100:

```csharp
int total = 0;
for (int num = 1; num <= 100; num = num + 1)
{
    total = total + num;
}
Console.WriteLine("Resposta calculada em um loop for: " + total);
```

Saída:
```
Resposta calculada em um loop for: 5050
```

{{% notice tip %}}
A resposta é 5050. Uma história famosa diz que o matemático Carl Friedrich Gauss descobriu isso quando criança, percebendo que 1 + 100 = 101, 2 + 99 = 101, e assim por diante — resultando em 50 pares de 101, o que equivale a 5050!
{{% /notice %}}

## Métodos

### Conte a Pirâmide

Escreva um método que calcule o número total de miçangas em uma pirâmide de números quadrados com `n` níveis. O nível 1 tem 1×1 = 1 miçanga, o nível 2 tem 2×2 = 4 miçangas, o nível 3 tem 3×3 = 9 miçangas, e assim por diante.

```csharp
public static int pyramidCount(int levels)
{
    int total = 0;
    for (int i = 1; i <= levels; i++)
    {
        total = total + (i * i);
    }
    return total;
}
```

**Como funciona:** O método itera por cada nível de 1 a `levels`, somando o quadrado do número do nível (`i * i`) ao total acumulado.

Valores de exemplo:

| Níveis | Cálculo | Total |
|--------|---------|-------|
| 1 | 1×1 | 1 |
| 2 | 1 + 4 | 5 |
| 3 | 1 + 4 + 9 | 14 |
| 4 | 1 + 4 + 9 + 16 | 30 |

Saída:
```
Parabéns! Desafio Resolvido!
```

## Classes e Objetos

### Construa a Classe Bird

Aqui está a classe `Bird` completa com todos os campos, o construtor e todos os métodos:

```csharp
public class Bird
{
    // Passo 1: Declarar campos privados
    private string species;
    private string name;
    private string hobby;
    private int age;
    private bool loveMusic;

    // Passo 