---
title: "Disparando"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 9
---

Agora que o projétil está pronto, vamos fazer o Nuvi disparar esses projéteis. Faça um script chamado "FiringBehavior" (Comportamento de Disparo) e copie e cole este código:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FiringBehavior : MonoBehaviour
{

   public Transform spawn_coor;        //onde o projétil será gerado
   public float projectile_speed;          //quão rápido o projétil irá

   public GameObject projectile_object;    //sprite de projétil vermelho

   // Start é chamado antes da primeira atualização do quadro
   void Start()
   {
       projectile_speed = 15f;
   }      

   // A atualização é chamada uma vez por quadro
   void Update()
   {
       if(Input.GetButtonDown("Jump")) //barra de espaço gerará projétil
       {

           Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
           rb.AddForce(spawn_coor.up * projectile_speed, ForceMode2D.Impulse); //faz o projétil se mover
       }
   }
}
```

No momento este script não funciona; precisamos dizer ao jogo o que gerar quando a barra de espaço for pressionada. Para fazer isso, adicione `GameObject projectile = Instantiate(projectile_object, spawn_coor.position, spawn_coor.rotation);` sobre `Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();`. O método Instantiate indica o que criar, onde criar e em que direção deve estar voltado.

Arraste e solte este script no inspetor do Nuvi. Se você executar o script agora, notará que nada mudou. Isso ocorre porque existem variáveis ​​públicas que ainda não foram atribuídas.
Vá até o inspetor do Nuvi e role para baixo até o script Comportamento. Observe que spawn_coor e projectile_object estão vazios. Para spawn_coor, arraste e solte o GameObject vazio que você criou na última lição que representa onde os projéteis aparecem. Para projectile_object, arraste e solte o projétil pré-fabricado que você também criou na última lição.

Além disso, agora que o Nuvi tem tudo o que precisa para defender, vamos também transformar o Nuvi em um pré-fabricado!

Execute o jogo e observe o que você vê. Fizemos o Nuvi disparar projéteis, mas esses projéteis não podem fazer nada! Nas próximas lições, você aprenderá como fazê-los interagir com outros objetos.
