---
title: "Scripts Explicados"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 4
---

Antes de começarmos a mover o Nuvi, vamos primeiro explicar a estrutura de um script do Unity. Há muitas maneiras de fazer o Nuvi se mover dentro do Unity, e uma maneira de fazer isso é adicionar um componente Script ao Nuvi. Um componente Script é um componente que você pode criar sozinho do zero.

Um Unity Script vazio terá a seguinte aparência:

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EmptyScript : MonoBehaviour
{
   void Start()
   {
   }

   void Update()
   {
   }
}
```

Cada novo script terá as 3 primeiras linhas que começam com `using`. Essas linhas são necessárias para que o Unity possa usar esse script recém-criado, portanto, geralmente deixamos essas linhas de código de lado. A próxima linha que começa com `public class 'script_name'` é necessária para que o Unity acesse este script específico.

{{< notice note >}}
Certifique-se de que o nome do script corresponda ao 'script_name'! Se você decidir alterar o nome do script fora do script, isso não atualizará a linha de código que contém o nome do script, então certifique-se de voltar e atualizá-lo, caso contrário o jogo não rodará!
{{< /notice >}}

Cada script possui dois métodos predefinidos.

**void Start()**: Este método é chamado apenas uma vez quando o script é chamado inicialmente. Geralmente é usado para inicializar variáveis ​​que podemos precisar ao longo do script.

**void Update()**: Este método é chamado à cada quadro e geralmente é usado quando queremos alterar o comportamento de um jogo.

Existe outro método que usaremos para fazer o movimento do Nuvi chamado `void FixedUpdate()`.

**void FixedUpdate()**: Este método é chamado com menos frequência que Update(), mas é melhor usado ao lidar com física para movimentos mais suaves, como ao usar Rigidbody.

Haverá outros métodos da biblioteca Unity que usaremos mais tarde, mas por enquanto isso é tudo que você precisa saber!
