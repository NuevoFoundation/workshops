```markdown
---
title: "Atividade 3 - Acolha o Cliente no seu Restaurante e Exiba o Menu"
date: 2019-07-25T13:24:17-07:00
weight: 4
draft: false
---
## Acolha o Cliente no seu Restaurante e Exiba o Menu
Agora que já temos tanto um banner para exibir ao cliente quanto um menu armazenado no seu programa Python, vamos exibir o menu ao cliente e recebê-lo de forma acolhedora. Nesta atividade, vamos escrever duas funções auxiliares para realizar essa tarefa.

{{% notice info %}}
## Funções Auxiliares
Funções auxiliares são funções chamadas dentro de uma função principal que executa todo o código deste programa. Cada uma dessas funções auxiliares trabalha para atingir um objetivo simples.
{{% /notice %}}

A primeira função auxiliar que escreveremos será `printMenu()`, uma função que percorrerá o dicionário `dictMenu` e resultará em um menu que se parecerá com o exemplo mostrado abaixo. Como os valores de `dictMenu` são todos listas com o preço do item como o primeiro elemento e a descrição como o segundo elemento, queremos garantir que, ao imprimir a informação de cada item, acessaremos cada elemento dessa lista utilizando indexação.  
Psst: A descrição do item está em uma linha separada do nome e do preço do item. O que isso lhe diz?  
Pssst: Há um espaço entre cada item no menu. Como podemos fazer isso...?

Exemplo de Menu:

-----Menu-----

Pasta ao Pesto Cremosa ------ R$15,99

Penne ao molho pesto cremoso, coberto com azeitonas pretas e tomates secos.

Rolinhos Primavera ------ R$8,00

Legumes grelhados como repolho e cenoura misturados com bifum e tiras finas de tofu frito, envolvidos por uma camada crocante.

A segunda função auxiliar que escreveremos é `orderFromRestaurantYN()`, onde vamos receber a entrada do usuário sobre se ele gostaria de pedir algo do menu ou não. Lembre-se de fornecer ao usuário um exemplo do que ele deve digitar. Seja "Y" para "Yes" e "N" para "No", ou "yes/no", ou "Yes/No", ou "y/n"; isso precisa ser especificado ao cliente para que ele saiba o que é uma resposta válida.

Depois de escrever estas funções, vá em frente e chame-as na sua função `main()` após a exibição do banner do restaurante.  
Ao chamar essas funções no `main()`, lembre-se de que, enquanto o usuário não estiver inserindo uma das respostas válidas para `orderFromRestaurantYN()`, devemos informar que ele não digitou sua resposta em um formato válido, mostrar o menu novamente e, em seguida, pedir-lhe a resposta outra vez.
```