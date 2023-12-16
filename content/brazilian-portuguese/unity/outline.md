---
title: "Juntando tudo"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 14
---

Agora que temos toda a UI configurada, queremos que o jogo funcione como pretendemos. Neste momento, quando simulamos o jogo, podemos mover o Nuvi, mas a tela final já está aparecendo.
Para corrigir isso, teremos um script que ditará como o jogo deve ser. Na pasta Scripts na janela Projetos, crie um novo script chamado "Outline". Arraste este script para o inspetor "Main Camera", que podemos localizar na hierarquia.

Antes de adicionarmos qualquer coisa ao script "Outline", vamos primeiro definir algumas coisas. Se rodarmos o jogo agora, ainda poderemos mover o Nuvi e atirar nos inimigos rosa, apesar da interface do usuário subir. Vamos consertar isso configurando pontos de spawn.
"Create Empty" na janela de hierarquia e renomeá-lo para "SpawnPoints". Em seguida, crie mais quatro transformações em "SpawnPoints" e renomeie-as como "EnemyLoc1", "EnemyLoc2", "EnemyLoc3" e "PlayerLoc". Reposicione-os usando a ferramenta Move para que fiquem diretamente sobre os inimigos e jogadores assim:

<img src="../img/13_enemyspawn.png" alt="Reposicione o ponto de spawn do inimigo" width="400"/>
<img src="../img/13_playerspawn.png" alt="Reposicione o ponto de spawn do Nuvi" width="400"/>

{{< notice tip >}}
Certifique-se de que as Transformações estejam no mesmo eixo Z do Nuvi. Caso contrário, eles podem não aparecer!
{{< /notice >}}

Agora que temos tudo configurado, vamos abrir o script de estrutura de tópicos e copiar e colar este código:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Outline : MonoBehaviour
{

   public Slider num_of_enemies;


   private Transform location;

   public GameObject opening_screen;
   public GameObject winner_screen;
   public GameObject enemy1;
   public GameObject player1;

   private bool is_generated;


   // Start é chamado antes da primeira atualização do quadro
   void Start()
   {

       is_generated = false;

   }

   // A atualização é chamada uma vez por quadro
   void Update()
   {
       if(is_generated == false)
       {
           if (opening_screen.activeSelf == false)
           {
               generate();
               is_generated = true;
               enemies_left = (int) num_of_enemies.value;
           }
       }

       if(enemies_left == 0)
       {
           showEndScreen();
       }
   }

   private void generate()
   {
       for(int x = 1; x <= ; x++) //para cada número de inimigos desejados no controle deslizante
       {
           location = positions[x];    //como é um array, faça a transformação do índice x
           GameObject enemy = Instantiate(enemy1, location);   //instanciar o inimigo no local escolhido
       }
       location = positions[0];
       GameObject player = Instantiate(player1, location);
   }

   private void showEndScreen()
   {
       winner_screen.SetActive(true);
   }
}
```

Faltam algumas linhas neste código para que ele funcione corretamente. Vamos preenchê-los, certo?

Se tentarmos rodar o jogo agora, isso não permitirá. Um dos motivos é que usamos um objeto UI no script. Para acessá-lo, precisamos importar o espaço de nome da UI. Para fazer isso, adicione `using UnityEngine.UI;` na parte superior do script em `using UnityEngine;`.

A seguir, queremos armazenar as posições de spawn que criamos. Qual você acha que é a melhor estrutura de dados para armazenar esses pontos de geração? Se você pensou em arrays, você acertou! Adicione a linha `public Transform[] positions;` logo acima de `private Transform location;`. Isso nos permitirá armazenar todos os pontos de spawn sem precisar criar quatro variáveis ​​individuais.

Um problema que encontramos foi a tela final aparecer apesar de ser o início do jogo. Se você percebeu os dois scripts anteriores para o menu e a tela final, pode ter uma ideia de como consertar isso. Semelhante a como definimos a tela do Menu como falsa, precisamos definir a tela Final como falsa. Para fazer isso, adicione `winner_screen.SetActive(false);` dentro do método `Start()`.

A adição final que precisamos fazer para que o script funcione está na função `generate()`. Dentro do loop for, precisamos encontrar uma maneira de pegar o número que o jogador escolheu no controle deslizante da tela do menu. Como nos referiremos ao controle deslizante como num_of_enemies, precisamos simplesmente adicionar `num_of_enemies.value` logo após `<` e antes de `;` no loop for.

Agora, vá para o inspetor da câmera principal e localize o script Outline. Observe que há muitas variáveis ​​vazias que precisamos preencher. Primeiro, arraste o controle deslizante num_enemies da hierarquia para a variável "Num_of_enemies". Para “Positions”, escolha “4”. Arraste os locais de spawn nesta ordem, começando no Elemento 0: PlayerLoc → EnemyLoc2 → EnemyLoc1 → EnemyLoc3. Em seguida, arraste o Menu GameObject da hierarquia para a variável "Opening_screen" e o EndScreen GameObject para a variável "Winner_screen". Em seguida, na pasta Prefabs na janela Projeto, arraste o pré-fabricado "enemy1" para a variável "Enemy 1" e o pré-fabricado "Nuvi" para a variável "Player 1".

Em seguida, precisamos de uma maneira de saber quando os inimigos são derrotados, para que possamos fazer com que a tela final apareça quando não houver mais inimigos. Para fazer isso, mantemos uma contagem de quantos inimigos existem, e essa contagem deve diminuir quando um inimigo for derrotado. No script "Outline" adicione `public int inimigos_left;`. Por enquanto adicione `enemies_left = -1;` no método `Start()`. Agora, vamos pensar em quando o inimigo será derrotado. Em que roteiro destruímos o inimigo? Se você pensou no script "EnemyBehavior", então você está certo! Abra o script "EnemyBehavior" e adicione este código acima do método `OnCollisionEnter2D()`:

```csharp
  GameObject cam;
  private Outline outline;

  void Start()
  {
      cam = GameObject.Find("Main Camera");
      outline = cam.GetComponent<Outline>();
  }
```

A primeira linha do método `Start()` define a variável "cam" como o GameObject da "Câmera Principal". A segunda linha pega o script Outline de “cam” e define isso para a variável “outline”. Em seguida, adicione `outline.enemies_left--;` em `Destroy(gameObject);`. Isso subtrairá 1 da variável “enemies_left” no script “Outline”.

Finalmente, tudo o que precisamos fazer é remover todos os inimigos e Nuvi da janela Cena. Isso ocorre porque queremos que eles apareçam apenas quando pressionamos o botão Iniciar. Clique com o botão direito sobre eles na hierarquia e selecione excluir.

Ufa... foi muito, não foi? Agora tente executar seu jogo! Se tudo estiver bem, então Parabéns! Você fez seu primeiro jogo! Mas você ainda não terminou. Vamos tentar exportar seu jogo para que você possa compartilhá-lo com outras pessoas!
