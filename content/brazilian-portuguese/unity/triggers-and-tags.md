---
title: "Gatilhos e Tags"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 10
---

## Gatilhos

Agora, vamos parar e pensar em como queremos que nosso projétil funcione. Um projétil será disparado e, quando atingir um inimigo, desaparecerá. ...Isso não é realmente física, é? A física não pode fazer um objeto desaparecer no ar, então esse desaparecimento terá que ser um comportamento personalizado que adicionamos ao projétil usando um script. O comportamento de desaparecimento acontecerá quando o projétil tocar um inimigo.

Fazemos isso transformando este projétil em um gatilho. Vá para o componente BoxCollider2D no inspetor de projéteis que você adicionou e marque a caixa "IsTrigger". Um gatilho informará que tocou em algo, portanto, em seu script, você pode verificar se essa interação aconteceu e, em seguida, fazer com que ocorra esse comportamento de desaparecimento personalizado.

<img src="../img/9_isTrigger.png" alt="Marque a caixa IsTrigger" width="400"/>

Observe que, como esse projétil é um gatilho, ele não funcionará mais pela física. A menos que você adicione um script para fazê-lo desaparecer, ele passará pelos objetos, incluindo as paredes invisíveis que você adicionou anteriormente.

{{< notice info >}}
Transformar um Collider (colisor) em um Trigger (gatilho) desativa as reações físicas, mas esse objeto ainda pode avisar quando uma colisão acontece.
{{< /notice >}}

## Tags

Antes de começarmos a criar o próximo script, devemos falar sobre mais uma coisa – tags. Tags são usadas para identificar facilmente GameObjects no Unity. Iremos usá-los ao criar os próximos dois scripts! Primeiro, devemos configurar tags em nosso jogo.

Bem no topo da janela do inspetor Nuvi, localize o menu suspenso “Tag”. Neste momento, deverá dizer "Untagged". Abra o menu suspenso e selecione "Player" (jogador). Agora, o Nuvi tem uma tag “Player” que podemos localizar facilmente. Vamos repetir isso tanto para o projétil quanto para o inimigo. Se você quiser criar uma nova tag, selecione "Add Tag…" no menu suspenso e selecione o sinal "+". Em seguida, nomeie suas novas tags como “Projectile” (projétil) e “Enemy” (inimigo) e salve.
