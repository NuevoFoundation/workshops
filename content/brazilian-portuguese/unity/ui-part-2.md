---
title: "Construindo a UI: Parte 2"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 13
---

## Tela final

A seguir, queremos fazer uma tela final que será exibida assim que Nuvi derrotar todos os alienígenas. A maior parte deste processo será muito semelhante a como você criou a tela do menu!

Em "Canvas", crie "UI" → "Image" como você fez para o menu inicial, e desta vez renomeie-o para "EndScreen". Redimensione para o mesmo tamanho do Menu.

Crie "UI" → "Text" em EndScreen, renomeie-o como "EndMessage" e digite o que quiser - esta mensagem será exibida quando Nuvi derrotar todos os alienígenas e o jogo terminar! No nosso exemplo, dissemos: “Você derrotou todos os Aliens e ajudou Nuvi a salvar o Universo!”

Agora queremos que nosso jogador possa repetir o jogo assim que terminar. Crie "UI" → "Button" em EndScreen. Como você fez para o StartButton, expanda Button para encontrar o objeto Text e renomeie-o para "ReplayButton". Edite o texto para que mostre "Replay".

Mas, assim como o botão Iniciar, clicar neste botão Repetir ainda não faz nada. Faça outro script na sua pasta Scripts e nomeie-o como "RestartScene".

Desta vez, em vez de apenas fazer desaparecer o EndScreen, queremos recarregar tudo: o menu inicial, o Nuvi e os alienígenas que o Nuvi derrotou. Copie e cole o código abaixo em seu script:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RestartScene : MonoBehaviour
{
   public void restart()
   {
       Scene scene = SceneManager.GetActiveScene();
       SceneManager.LoadScene(scene.name);
   }
}
```

{{< notice tip >}}
Para recarregar tudo, usamos Scenes; mas para fazer isso, você precisa ter `using UnityEngine.SceneManagement;` declarado nas 3 linhas usuais.
{{< /notice >}}

Arraste e solte este script da pasta Scripts no inspetor ReplayButton. Na caixa `OnClick()`, clique em "+" e como você fez para o StartButton, arraste o objeto ReplayButton para a caixa que diz "None (Object)". Em seguida, encontre e selecione a função `restart()` no script RestartScene.
