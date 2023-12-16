---
title: "Atividade 3 - Dê as boas-vindas ao cliente ao menu do seu restaurante e display"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---
## Dê as boas-vindas ao cliente ao seu menu de restaurante e display
Agora que temos um banner de restaurante para exibir ao cliente e um menu armazenado em seu programa Python, vamos exibir seu menu ao cliente e recebê-lo. Nesta atividade, escreveremos 2 funções auxiliares para realizar isso .

{{% notice info %}}
## Funções auxiliares
Funções auxiliares são funções que são chamadas em uma função principal que executa todo o código deste programa. Cada uma dessas funções auxiliares funciona com um objetivo simples.
{{% /notice %}}

A primeira função auxiliar que escreveremos é `printMenu()`, uma função que irá percorrer o dicionário `dictMenu` e resultará em um Menu semelhante ao exemplo mostrado abaixo. Como os valores de `dictMenu` são todos listas com o preço do item como o primeiro elemento e a descrição como o segundo elemento, queremos ter certeza de que quando imprimirmos as informações de cada item, acessaremos cada elemento dessa lista usando indexação.
Psiu: A descrição do item está em uma linha separada do nome e do preço do item, o que isso te diz?
Pssiu: Tem um espaço entre cada item do menu, como fazemos isso...?

Menu de exemplo:

-----Menu-----

Massa Cremosa Com Pesto ------ $15.99

Macarrão penne temperado com molho pesto cremoso, coberto com azeitonas pretas e tomate seco

Rolinhos Primavera ------ $ 8,0

Mistura de vegetais fritos, como repolho e cenoura, misturados com aletria e tiras finas de tofu frito, embrulhados em uma camada externa crocante.

A segunda função auxiliar que escreveremos é `orderFromRestaurantYN()`, onde receberemos informações do usuário sobre se ele gostaria de pedir algo do menu ou não. Lembre-se de fornecer ao usuário um exemplo do que ele deve inserir. Se eles inserem Y para Sim (Yes) e N para Não (No) ou sim/não ou Sim/Não ou y/n; isso precisa ser especificado para o cliente para que ele saiba qual é uma resposta válida.

Depois de escrever essas funções, vá em frente e chame-as em sua função `main()` após a impressão do banner do restaurante.
Ao chamar essas funções em `main()`, lembre-se que enquanto o usuário não estiver digitando nenhuma das respostas válidas para `orderFromRestaurantYN()`, devemos dizer que ele não digitou sua resposta em um formato válido, mostre o menu novamente e peça-lhes que respondam novamente.
