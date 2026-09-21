---
title: "micro:bit verificador de distância - Gabarito"
date: 2024-07-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um material de referência para professores sobre o workshop de Distanciamento Social com micro:bit via Wireless (Sem fio). O workshop guia os estudantes na construção de um projeto completo passo a passo utilizando os Blocos no MakeCode. Este gabarito fornece o código final completo (em descrição de Blocos e JavaScript), explica os conceitos-chave e inclui orientações para resolução de problemas.
{{% /notice %}}

## Solução completa

### Código final (equivalente em JavaScript)

Este é o programa completo que os estudantes desenvolvem ao longo das atividades do workshop:

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (strength > -67) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let strength = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
```

### Código final (descrição em Blocos)

Para professores que preferem seguir com a visão baseada em blocos:

| Local do bloco | Bloco | Configurações |
|---------------|-------|---------------|
| **on start** | `radio set group` | Grupo: `1` |
| **forever** | `radio send number` | Número: `0` |
| **on radio received (receivedNumber)** | `set strength to` | `received packet signal strength` |
| (dentro do bloco recebido) | `if strength > -67 then` | Mostrar ícone: carinha triste |
| (senão) | `else` | Mostrar ícone: carinha feliz |

**O que ele faz:** Cada micro:bit transmite continuamente um sinal de rádio. Quando recebe um sinal de outro micro:bit, verifica a intensidade desse sinal. Se o sinal for mais forte que -67 dBm (indicando que os micro:bits estão a menos de 6 pés / 2 metros de distância), ele mostra uma carinha triste. Se o sinal for mais fraco (indicando distância suficiente), mostra uma carinha feliz.

## Detalhamento passo a passo

### Passo 1: O que é um micro:bit (página 1)

Esta é uma página introdutória. Nenhum código é escrito. Pontos-chave:

- Funcionalidades do micro:bit: 25 LEDs, 2 botões, pinos IO, bússola, acelerômetro, Bluetooth
- Os estudantes desembalam o hardware: micro:bit, 2 pilhas, cabo USB, suporte para pilhas
- **Simulador:** Estudantes sem hardware podem usar o simulador MakeCode com dois micro:bits virtuais lado a lado. A antena de rádio (quadrado amarelo ondulado) pode ser clicada e arrastada para simular mudanças na intensidade do sinal.
- Limite de intensidade de sinal para o simulador: `strength > -67` ativa a carinha triste 

### Passo 2: Transmitindo um sinal (página 2)

**Código adicionado neste passo:**

```javascript
// on start
radio.setGroup(1)

// forever
basic.forever(function () {
    radio.sendNumber(0)
})
```

**Conceitos-chave:**
- `radio set group 1` vai no bloco "on start" para ser executado uma vez quando o micro:bit é ligado
- Todos os micro:bits devem usar o mesmo número de grupo para se comunicarem
- `radio send number 0` vai no bloco "forever" para transmitir continuamente
- O número enviado (0) não importa para este projeto; apenas a intensidade do sinal é relevante

### Passo 3: Recebendo uma mensagem (página 3)

**Código adicionado neste passo:**

```javascript
radio.onReceivedNumber(function (receivedNumber) {
    strength = radio.receivedPacket(RadioPacketProperty.SignalStrength)
})
let strength = 0
```

**Conceitos-chave:**
- O bloco `on radio received` é acionado toda vez que o micro:bit recebe um número de outro micro:bit
- Uma **variável** chamada `strength` é criada para armazenar a intensidade do sinal recebido
- `received packet signal strength` fornece o valor RSSI (Indicador da Intensidade do Sinal Recebido)
- Variáveis são recipientes nomeados que armazenam informações e podem ser usadas e atualizadas posteriormente

### Passo 4: Interpretando a intensidade do sinal (página 4)

**Código adicionado neste passo:**

```javascript
if (strength > -67) {
    // muito próximo - menos de 6 pés de distância
} else {
    // distância segura - mais de 6 pés de distância
}
```

**Conceitos-chave:**
- -67 dBm é a intensidade de sinal previamente medida a 6 pés (2 metros) para o Bluetooth do micro:bit
- Intensidade de sinal mais próxima de 0 = sinal mais forte = distância mais próxima
- Intensidade de sinal mais distante de 0 (mais negativa) = sinal mais fraco = distância maior
- `strength > -67` significa que os dispositivos estão **mais próximos** do que 6 pés (sinal mais forte que o limite)

**Pergunta comum dos estudantes:** "Por que -67?" Porque -67 dBm foi medido como o nível de potência quando dois micro:bits estão a 6 pés de distância. Diferentes rádios Bluetooth podem ter valores diferentes na mesma distância.

### Passo 5: Iluminando os LEDs (página 5)

**Código adicionado neste passo:**

```javascript
if (strength > -67) {
    basic.showIcon(IconNames.Sad)    // muito próximo
} else {
    basic.showIcon(IconNames.Happy)  // distância segura
}
```

**Conceitos-chave:**
- Carinha triste = muito próximo (menos de 6 pés)
- Carinha feliz = distância segura (6 pés ou mais)
- Ícones são encontrados na seção Basic do MakeCode

Para uma referência visual do código final em blocos, veja a captura de tela no final da página [Lighting it up](../light-it-up).

### Passo 6: Fazendo download do código (página 6)

Nenhum novo código é escrito. Esta página aborda:

1. **Pareamento:** Conecte via USB, clique em `...` ao lado de Download, selecione "Pair device", clique em "BBC micro:bit CMSIS-DAP" e depois em Connect
2. **Download:** Clique novamente em `...`, selecione "Download to micro:bit", e aguarde o balão de "Download complete"
3. Os estudantes só precisam emparelhar uma vez

## Resolução de problemas

|