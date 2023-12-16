---
title: "Fazendo Nuvi se Mover"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 5
---

Agora que sabemos como é um Script, vamos criar um.

Primeiro, queremos criar uma nova pasta chamada "Scripts" em Assets na janela Project, semelhante à pasta Drawings. Faremos isso porque é uma boa prática ter todos os scripts em um local de fácil acesso. Clique duas vezes na pasta Scripts e crie um script clicando com o botão direito e selecionando “C# Script”. Você também pode acessar a guia "Assets" e escolher "Create -> C# Script" conforme mostrado abaixo.

![Criando um Script C#](../img/4_CreateScript.png)

Nomeie este script como "PlayerMovement" e arraste e solte este script na janela do Nuvi Inspector. Também podemos pesquisar o nome do script no Nuvi Inspector, como fizemos para o componente Rigidbody2D.

Abra o script e copie e cole o código abaixo:
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
   public float speed;


   private Vector3 movement;     //(x,y,0) vetor
   private float move_x;               //x coordenada do jogador
   private float move_y;               //y coordenada do jogador

   void Start()
   {
       speed = 7f;
       movement = new Vector3(0.0f, 0.0f, 0.0f);
   }

   void Update()
   {
       move_x = Input.GetAxisRaw("Horizontal"); //retorna -1/0/1
       move_y = Input.GetAxisRaw("Vertical");

       movement = new Vector3(move_x, move_y, 0.0f);

   }

   void FixedUpdate()
   {
       if(movement != Vector3.zero) //se não houver entrada, então não se mova
       {
           rb.MovePosition(transform.position + speed * movement * Time.deltaTime); //move fisicamente o Nuvi na direção
           transform.rotation = Quaternion.LookRotation(transform.forward, -movement); //por se virar à direção em que está se movendo
           //-movimento porque caso contrário ele ficará na direção oposta, já que a transformação está voltada para baixo
       }
   }
}
```

Se tentássemos executar o script agora, ele não funcionaria devido a erros do compilador. Para corrigir isso, precisamos adicionar `public Rigidbody2D rb;` em `public float speed;`. Em seguida, salve para atualizar o script no Unity.

Como podemos ver na seção PlayerMovement do Nuvi Inspector, a variável rb está vazia. Precisamos arrastar e soltar o rigidbody2D do Nuvi de seu inspetor para a variável rb. Agora, tente executar o jogo!

Parecendo tudo bem! ...Ou não?

Reserve um momento para observar como o Nuvi se move horizontalmente/verticalmente em comparação com diagonalmente. Na verdade, o Nuvi se move um pouco mais rápido na diagonal. Devemos consertar isso – é um pequeno detalhe, mas importante. Para entender o porquê, precisamos trazer um pouco de matemática.

{{<notice info>}}

Lembre-se do Teorema de Pitágoras, a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>. Quando o Nuvi se move diagonalmente, os movimentos horizontais e verticais são mesclados. Isso acontece em `movement = new Vector3(move_x, move_y, 0.0f)`.

<img src="../img/4_pythagorean_theorem.png" alt="Movimento do jogador usando o Teorema de Pitágoras" width="600"/>

Nosso jogo recebe "1" como entrada horizontal quando as teclas horizontais são pressionadas e "1" como entrada vertical quando as teclas verticais são pressionadas. Mas quando eles são pressionados ao mesmo tempo, nosso jogo usa o Teorema de Pitágoras para descobrir o movimento diagonal de Nuvi, c.

Se definirmos a=1 e b=1, então nossa equação será semelhante a:

a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>

1<sup>2</sup> + 1<sup>2</sup> = c<sup>2</sup>

2 = c<sup>2</sup>

√2 = c

1.414... = c

Portanto, o Nuvi está se movendo 1.414 vezes mais rápido do que horizontal ou verticalmente.

Para corrigir isso, adicione `movement = motion.normalized;` em `movement = new Vector3(move_x, move_y, 0.0f)`. Esta linha transformará 1,414 em 1. Agora execute o jogo para ver que Nuvi se move na mesma velocidade na diagonal

{{</notice>}}

Há também uma coisa importante que está faltando no nosso jogo. Você percebe como o Nuvi pode sair da tela? Agora, isso é um grande problema – não queremos que o Nuvi fuja para o espaço, não é? Na próxima lição corrigiremos isso completamente.
