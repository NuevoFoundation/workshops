---
title: "Comportamento de projéteis/inimigo"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 11
---

## Comportamento do projétil

Agora que sabemos como funcionam os gatilhos e tags, vamos configurar o comportamento do projétil! Crie um novo script na pasta Scripts chamado "ProjectileBehavior". Em seguida, arraste e solte-o no inspetor de projéteis na pasta Prefabs e abra o script. Remova as funções `Start()` e `Update()` e substitua-as por isto:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag != "")  //destrói o projétil se ele colidir com qualquer coisa que não seja o jogador
    {
      // faz o projétil desaparecer

    }
}
```

Nesta função, queremos destruir o projétil se ele colidir com qualquer coisa que não seja o jogador. Dentro das aspas, o que você acha que devemos acrescentar? Dentro do corpo da função, o que devemos colocar para que o projétil desapareça?

{{< notice tip >}}
Podemos recorrer à tag do Nuvi na declaração if!
{{< /notice >}}

{{< notice tip >}}
- Destroy(???) destruirá o gameObject especificado por ???
- gameObject é uma variável que se refere ao objeto ao qual este script está anexado
{{< /notice >}}

{{< expand "Clique aqui para ver a resposta!" >}}
```csharp
   void OnTriggerEnter2D(Collider2D collision)
   {
       if(collision.gameObject.tag != "Player")  //destrói o projétil se ele colidir com qualquer coisa que não seja o jogador
       {
		       // faz o projétil desaparecer
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

## Comportamento inimigo

Agora vamos testar rodando o jogo! Se fizermos isso corretamente, o projétil deverá desaparecer ao entrar em contato quando tocar em qualquer coisa que não seja o Nuvi! Porém, quando disparamos contra o inimigo, observe como o projétil desaparece, mas o inimigo não. Para corrigir esse problema, devemos criar um script semelhante que gire em torno do comportamento do inimigo.
Para fazer isso, crie um novo script na pasta Scripts chamado "EnemyBehavior" e anexe-o ao inspetor Alien_pink. Semelhante a como criamos o script "ProjectileBehavior", remova as funções `Start()` e `Update()` e adicione isto:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag == "") //destrói o inimigo se ele colidir com um projétil
    {
        // faz o inimigo desaparecer

    }
}
```

Nesta função queremos destruir o inimigo caso ele colida com um projétil. O que você acha que deveríamos acrescentar? O que devemos colocar no corpo da função para fazer desaparecer o projétil?

{{< notice tip >}}
Podemos recorrer à etiqueta do projétil na declaração if!
{{< /notice >}}

{{< notice tip >}}
É igual ao script "ProjectileBehavior"!
{{< /notice >}}

{{< expand "Clique aqui para ver a resposta!" >}}
```csharp
   void OnTriggerEnter2D(Collider2D collision)
   {
       if(collision.gameObject.tag == "Projectile") //destrói o inimigo se ele colidir com um projétil
       {
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

Agora que adicionamos esses dois scripts, vamos tentar rodar nosso jogo! Verifique se o seguinte acontece:
1. Os projéteis desaparecem quando atingem o alienígena
2. Os projéteis desaparecem quando atingem paredes invisíveis
3. o alienígena desaparece ao ser atingido por um projétil

Enquanto estamos nisso, vamos transformar o alien_pink em um pré-fabricado também! No entanto, em vez de excluir o alienígena depois de transformá-lo em um pré-fabricado, vamos adicionar mais dois alienígenas à cena. Basta arrastar e soltar o alienígena na hierarquia e reposicioná-lo como quiser usando a ferramenta Mover!

---

Vamos dar um passo para trás e ver o que você realizou. Você foi capaz de fazer o Nuvi se mover em 8 direções, fornecer ao Nuvi a habilidade de disparar projéteis, e os inimigos junto com os projéteis podem desaparecer quando colidirem! Se dê tapinhas nas costas; você conquistou muito! Vamos continuar! Estamos quase terminando!
