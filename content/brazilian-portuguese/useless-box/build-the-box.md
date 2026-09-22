---
title: "Construir a caixa - projeto do circuito"
description: ""
draft: true
weight: 3
---

## Vamos construir a caixa

Aqui está o design do circuito:
![diagrama do circuito final](../img/circuit-color.png)
**Como lemos o diagrama acima?**

O círculo com a letra “M” representa o motor, e o círculo com a letra “B” representa a bateria. Usaremos uma protoboard para montar as conexões. Uma protoboard é um dispositivo que nos permite fazer conexões elétricas sem unir os fios permanentemente (o que é chamado de “soldar”!). Vamos falar mais sobre isso e mostrar uma imagem daqui a pouco.

Quando o limite de acionamento conecta e algo (por exemplo: você) muda a posição da chave basculante para LIGADO, a bateria alimenta o motor, que move o dedo.  
O dedo mecânico dentro da caixa sai e desliga a chave basculante, fazendo o dedo mecânico se retrair.

Vamos revisar os componentes. Temos um total de 12 fios em uso:
- 2 amarelos, 3 verdes, 3 azuis, 2 vermelhos, 2 pretos.
- O **interruptor de limite** inferior está conectado a 2 fios (amarelo, verde) vindos de seus 2 terminais. 
![interruptor de limite com fios](../img/limitSwitchWithWires.jpg)
- O **pacote de baterias** está conectado a 2 fios (vermelho, preto). 
![pacote de baterias com fios](../img/batteryPackWithWires.jpg)
- O **motor** está conectado a 2 fios (verde, azul). 
![motor com 2 fios](../img/motorWith2Wires.jpg)
- O motor deve ter um dedo de acrílico anexado.
![motor com dedo de acrílico](../img/motorWithFinger.jpg)
- A **chave basculante** superior está conectada a 6 fios (amarelo, verde, 2 azuis, vermelho, preto) vindos dos seus 6 terminais identificados na figura acima. 
Deve ficar algo assim:
![chave com fios](../img/switchWithWires.jpg)

Aqui está uma visão mais ampla da peça que contém o motor, o dedo e o interruptor de limite anexados:
![vista da peça com motor, dedo e interruptor de limite com fios conectados](../img/motorFingerAndLimitSwitchPiece.jpg)
- Uma **protoboard** funciona criando conexões elétricas para você! Cada linha de cada lado do divisor vertical da protoboard está conectada. O divisor central separa as duas metades da placa - as duas metades também não estão conectadas entre si, então por exemplo: 1A-1E estão conectados, ou 7F-7J. Fios na mesma coluna não estão conectados entre si.
![protoboard](../img/breadboard1.png)
Aqui está um diagrama da protoboard (que mostra que as linhas amarelas estão conectadas):

	![diagrama da protoboard](../img/breadboardDiagram.png)