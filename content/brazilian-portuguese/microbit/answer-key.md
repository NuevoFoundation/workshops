---
title: "Micro:Bit - Gabarito de Respostas"
date: 2026-04-28T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um guia de referência para professores do workshop Micro:Bit. O workshop é, principalmente, um tutorial guiado com exemplos de código embutidos, em vez de exercícios de preenchimento de lacunas. Este gabarito consolida todos os conceitos-chave, amostras de código, resultados do tutorial e projetos de exemplo para a seção aberta "Sua vez".
{{% /notice %}}

## Referência básica de JavaScript

### Variáveis e tipos de dados

O workshop introduz cinco tipos de dados. Aqui está um resumo com exemplos:

| Tipo de Dado | Descrição | Exemplo |
|--------------|-----------|---------|
| Inteiro | Números inteiros (sem decimais) | `var a = 5;` |
| Double | Números com decimais | `var x = 0.5;` |
| String | Texto (entre aspas duplas) | `var company = "Minha empresa";` |
| Caracter | Uma única letra (em aspas simples) | `var letter = 'A';` |
| Booleano | Valores verdadeiro ou falso | `var codingIsCool = true;` |

**Regras principais para nomes de variáveis:**
- Podem conter letras, dígitos, sublinhados e sinais de dólar
- Não podem ter espaços
- Devem começar com uma letra

### Operações matemáticas

| Operação | Operador | Exemplo | Resultado |
|----------|----------|---------|-----------|
| Adição | `+` | `var c = 13 + 10;` | `c = 23` |
| Subtração | `-` | `var c = 15 - 10;` | `c = 5` |
| Multiplicação | `*` | `var c = 2 * 5;` | `c = 10` |
| Divisão | `/` | `var c = 20 / 2;` | `c = 10` |
| Módulo | `%` | `var d = 10 % 2;` | `d = 0` |

**Nota:** A fonte do workshop mostra `c = a + b; // c = 25`, mas 13 + 10 = 23. Este é um erro de digitação no workshop original.

**Operadores abreviados:**
- `c += a;` adiciona `a` a `c`
- `c -= a;` subtrai `a` de `c`
- `c *= a;` multiplica `c` por `a`
- `c /= a;` divide `c` por `a`
- `c++` incrementa por 1, `c--` decrementa por 1

**Nota:** O exemplo de divisão com comentário no workshop mostra `c /= a; // c = 5`, mas o resultado real é `0.5` (10 dividido por 20). Os professores devem estar cientes dessa discrepância.

### Declarações de impressão

```javascript
// Exibir no console do navegador (não visível na página da web)
console.log("Olá!");

// Exibir como uma janela pop-up
alert("Olá!");

// Janela pop-up com caixa de entrada - armazena a resposta do usuário
var userResponse = prompt("Qual é o seu nome?");
```

### Condicionais

```javascript
var age = 10;
if (age < 18) {
  print("Você ainda não é um adulto! :( ");
}
```

**Nota:** O workshop usa `print()` neste exemplo, que não é padrão do JavaScript em navegadores. No MakeCode, o equivalente seria `basic.showString()`. Em um navegador, use `console.log()` ou `alert()`. Além disso, a fonte do workshop possui um erro de comentário: diz "Se a idade for menor que 10", mas a condição verifica `age < 18`.

### Laços de repetição

```javascript
// while loop - conta de 10 para baixo
var count = 10;
while (count > 0) {
  alert(count);
  count--;
}

// for loop - conta de 10 para baixo
for (var i = 10; i > 0; i--) {
  alert(i);
}
```

**Importante:** Um loop infinito `while (true)` congelará o navegador. No micro:bit, `basic.forever()` é o equivalente seguro para execução contínua.

**Adicional:** O comando `break;` pode parar um loop imediatamente e mover a execução para a linha abaixo do loop.

## Configuração do Micro:bit

### Visão geral do hardware

O micro:bit possui:
- 25 LEDs programáveis individualmente (grade de 5×5)
- 2 botões programáveis (A e B)
- Pinos de conexão física
- Sensores de movimento (acelerômetro e bússola)
- Comunicação sem fio (Bluetooth e rádio)
- Interface USB

### Conectando ao computador

1. Conecte o micro:bit via cabo USB
2. Ele aparece como uma unidade chamada `MICROBIT` no Explorador de Arquivos
3. Para carregar programas: copie arquivos `.hex` para a unidade MICROBIT (ou clique com o botão direito → Enviar para → MICROBIT)
4. O LED amarelo na parte de trás piscará durante o download do código

### Editor MakeCode

O ambiente de programação está em [makecode.microbit.org](https://makecode.microbit.org/). Os alunos podem alternar entre os modos Bloco e JavaScript.

## Resultados dos tutoriais

### Tutorial do Coração Pulsante

Os alunos seguem o tutorial integrado do MakeCode. O resultado esperado:

```javascript
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(500)
})
```

**O que faz:** Alterna entre um ícone de coração grande e pequeno no display de LEDs, criando uma animação que parece um coração batendo.

### Tutorial Micro Chat

Os alunos seguem o tutorial integrado do MakeCode. O resultado esperado:

```javascript
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Olá")
    basic.showString("Olá")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Adeus")
    basic.showString("Adeus")
})
radio.setGroup(1)
```

**O que faz:** Envia e recebe mensagens de texto entre dois micro:bits usando comunicação por rádio. O botão A envia "Olá" e o botão B envia "Adeus". Ambos os micro:bits devem estar configurados no mesmo grupo de rádio.

**Nota