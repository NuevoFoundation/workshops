---
title: "Arduino - Respostas do Professor"
date: 2024-07-27T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um material de referência para professores da oficina Arduino Light Game. A oficina guia os alunos através de 4 atividades de hardware utilizando um Arduino UNO e o kit inicial Elegoo. Todo o código é fornecido na oficina, portanto, este gabarito consolida as soluções completas, explica conceitos principais e aponta um bug no código-fonte que os professores devem estar cientes.
{{% /notice %}}

## Atividade 1: LED piscando

### Resumo de conexões

1. Pino longo do LED (ânodo) conectado ao pino 25J e pino curto (catodo) à trilha azul [-].
2. Resistor de 220 ohms do 25H para a trilha vermelha [+].
3. Cabo jumper da trilha vermelha [+] para 5V no Arduino.
4. Cabo jumper da trilha azul [-] (31Z) para GND no Arduino.
5. Conecte o Arduino via USB.

### Código

Os alunos carregam o exemplo embutido: **File > Examples > 01.Basics > Blink**

O código abaixo é o núcleo funcional do exemplo embutido Blink. O exemplo completo carregado pelos alunos inclui comentários adicionais e atribuições.

```c++
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

### Conceitos principais

- `setup()` executa uma vez quando o Arduino é ligado.
- `loop()` é executado repetidamente indefinidamente.
- `pinMode()` define um pino como INPUT ou OUTPUT.
- `digitalWrite()` define um pino como HIGH (ligado) ou LOW (desligado).
- `delay(1000)` faz uma pausa de 1000 milissegundos (1 segundo).

### Resposta ao desafio extra

A oficina pergunta: "O que você poderia modificar para alterar o tempo?" Resposta: alterar o número no `delay(1000)`. Por exemplo, `delay(500)` faz o LED piscar duas vezes mais rápido. 1000 milissegundos = 1 segundo, então 10 minutos = 600000 milissegundos.

## Atividade 2: Joystick com saída serial

### Resumo de conexões

1. GND do joystick conectado ao GND do Arduino.
2. +5V do joystick conectado a 5V do Arduino.
3. VRx do joystick ao pino analógico A0.
4. VRy do joystick ao pino analógico A1.
5. SW do joystick ao pino digital 2.
6. Conectar o Arduino via USB.

### Código

```c++
//www.elegoo.com
//2016.12.09

// Números dos pinos do Arduino
const int SW_pin = 2; // pino digital conectado à saída do interruptor
const int X_pin = A0; // pino analógico conectado à saída X
const int Y_pin = A1; // pino analógico conectado à saída Y

void setup() {
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  Serial.begin(9600);
}

void loop() {
  Serial.print("Interruptor: ");
  Serial.print(digitalRead(SW_pin));
  Serial.print("\n");
  Serial.print("Eixo X: ");
  Serial.print(analogRead(X_pin));
  Serial.print("\n");
  Serial.print("Eixo Y: ");
  Serial.println(analogRead(Y_pin));
  Serial.print("\n\n");
  delay(500);
}
```

### Conceitos principais

- `Serial.begin(9600)` inicia a comunicação serial a uma taxa de transmissão de 9600 baud.
- `Serial.print()` envia texto para o Monitor Serial (clique na lupa no IDE do Arduino).
- `analogRead()` lê um valor entre 0 e 1023 de um pino analógico.
- `digitalRead()` lê HIGH (1) ou LOW (0) de um pino digital.
- `digitalWrite(SW_pin, HIGH)` ativa o resistor pull-up interno no pino 2, de modo que o interruptor lê HIGH quando não pressionado e LOW quando pressionado.
- Posição central do joystick é aproximadamente X=490, Y=490.

### Saída esperada na serial

Quando o joystick está centralizado, os alunos devem ver valores próximos de:
```
Interruptor:  1
Eixo X: 490
Eixo Y: 490
```

Mover o joystick altera os valores de X e Y (intervalo 0-1023). Pressionar o botão do joystick altera o valor de Interruptor de 1 para 0.

## Atividade 3: Joystick e LEDs

### Resumo de conexões

Esta atividade combina o joystick e 4 LEDs coloridos (azul, amarelo, vermelho, verde) além de um 5º LED no pino 7 para o botão. As conexões completas incluem 25 etapas detalhadas na oficina. Conexões principais:

| Componente | Pino do Arduino |
|------------|-----------------|
| Joystick VRx | A0 |
| Joystick VRy | GND |
| Joystick SW | Pino digital 2 |
| Joystick +5V | Trilha vermelha [+] da breadboard |
| Joystick GND | Trilha azul [-] da breadboard |
| LED azul | Pino digital 11 |
| LED amarelo | Pino digital 10 |
| LED vermelho | Pino digital 9 |
| LED verde | Pino digital 8 |
| Botão LED | Pino digital 7 |

### Código

{{% notice warning %}}
**Bug no código-fonte da oficina:** O código utiliza variáveis `joyX` e `joyY`, mas elas não estão declaradas. O código não será compilado como está. Os professores devem adicionar as declarações de variáveis ausentes mostradas abaixo antes da função `setup()`.

Além disso, a etapa de fiação 4 da oficina conecta o VRy ao GND em vez de um pino analógico. Isso parece ser um erro de fiação - o código espera um sinal ativo do eixo Y de `analogRead(joyY)`, que requer o VRy conectado ao pino A1 (como na Atividade 2). Os professores devem conectar o VRy ao A1 em vez do GND para que o código funcione corretamente.
{{% /notice %}}

{{% notice info %}}
**Fiação ausente para o LED do pino 7:** O código utiliza o pino 7 como um OUTPUT para um LED controlado pelo botão, mas as 25 etapas de fiação da oficina não incluem a conexão de um LED ao pino