---
title: "Unity - Respostas"
date: 2024-10-06T00:00:00-07:00
draft: false
weight: 20
hidden: true
---

{{% notice note %}}
Este é um recurso para professores do workshop "Unity Top-Down Nuvi Space Game". O workshop tem desafios de preenchimento de código, nos quais os alunos devem adicionar linhas faltantes a scripts C# incompletos. Este guia de respostas fornece todos os scripts completos com as linhas faltantes destacadas, além de orientações de configuração para cada lição.
{{% /notice %}}

## Script 1: PlayerMovement (Movendo Nuvi, página 5)

Os alunos devem copiar e colar o código incompleto e adicionar a variável `Rigidbody2D` e o ajuste de movimento diagonal.

### Linha faltante 1

Adicione `public Rigidbody2D rb;` sob `public float speed;`:

```csharp
public float speed;
public Rigidbody2D rb;    // ADICIONE ESTA LINHA
```

Após salvar, os alunos devem arrastar o componente Rigidbody2D de Nuvi do Inspector para o campo da variável `rb`.

### Linha faltante 2

Adicione `movement = movement.normalized;` sob a atribuição do vetor de movimento para corrigir a velocidade diagonal:

```csharp
movement = new Vector3(move_x, move_y, 0.0f);
movement = movement.normalized;    // ADICIONE ESTA LINHA
```

### Script completo de PlayerMovement

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float speed;
    public Rigidbody2D rb;

    private Vector3 movement;
    private float move_x;
    private float move_y;

    void Start()
    {
        speed = 7f;
        movement = new Vector3(0.0f, 0.0f, 0.0f);
    }

    void Update()
    {
        move_x = Input.GetAxisRaw("Horizontal");
        move_y = Input.GetAxisRaw("Vertical");
        movement = new Vector3(move_x, move_y, 0.0f);
        movement = movement.normalized;
    }

    void FixedUpdate()
    {
        if (movement != Vector3.zero)
        {
            rb.MovePosition(transform.position + speed * movement * Time.deltaTime);
            transform.rotation = Quaternion.LookRotation(transform.forward, -movement);
        }
    }
}
```

**Por que normalizar?** Sem normalização, o movimento diagonal é ~1.41x mais rápido que o horizontal/vertical (teorema de Pitágoras: sqrt(1^2 + 1^2) = 1.414). `movement.normalized` ajusta o vetor para o comprimento 1 em todas as direções.

## Script 2: FiringBehavior (Disparando, página 9)

Os alunos devem copiar e colar o código incompleto e adicionar a linha `Instantiate`.

### Linha faltante

Adicione a chamada `Instantiate` acima da linha `GetComponent`:

```csharp
if (Input.GetButtonDown("Jump"))
{
    GameObject projectile = Instantiate(projectile_object, spawn_coor.position, spawn_coor.rotation);    // ADICIONE ESTA LINHA
    Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
    rb.AddForce(spawn_coor.up * projectile_speed, ForceMode2D.Impulse);
}
```

### Script completo de FiringBehavior

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FiringBehavior : MonoBehaviour
{
    public Transform spawn_coor;
    public float projectile_speed;
    public GameObject projectile_object;

    void Start()
    {
        projectile_speed = 15f;
    }

    void Update()
    {
        if (Input.GetButtonDown("Jump"))
        {
            GameObject projectile = Instantiate(projectile_object, spawn_coor.position, spawn_coor.rotation);
            Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
            rb.AddForce(spawn_coor.up * projectile_speed, ForceMode2D.Impulse);
        }
    }
}
```

**Configuração no Inspector:** Arraste o Transform vazio do ponto de disparo para `spawn_coor`. Arraste o prefab do projétil para `projectile_object`.

## Script 3: ProjectileBehavior (Comportamento do projétil/inimigo, página 11)

Os alunos devem preencher a comparação de tags e a chamada `Destroy`.

### Respostas para preencher

- Comparação de tags: `"Player"` (destruir o projétil se atingir algo EXCETO o jogador)
- Chamada `Destroy`: `Destroy(gameObject);`

### Script completo de ProjectileBehavior

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ProjectileBehavior : MonoBehaviour
{
    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag != "Player")
        {
            Destroy(gameObject);
        }
    }
}
```

## Script 4: EnemyBehavior (Comportamento do projétil/inimigo, página 11)

Os alunos devem preencher a comparação de tags e a chamada `Destroy`.

### Respostas para preencher

- Comparação de tags: `"Projectile"` (destruir o inimigo se um projétil atingi-lo)
- Chamada `Destroy`: `Destroy(gameObject);`

### Script completo de EnemyBehavior (versão inicial)

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyBehavior : MonoBehaviour
{
    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Projectile")
        {
            Destroy(gameObject);
        }
    }
}
```

**Nota:** Este script é atualizado na lição Outline (página 14) para rastrear a contagem de inimigos. Veja a versão final abaixo.

## Script 5: StartButton (UI Parte 1, página 12)

Este script é fornecido completo. Nenhum preenchimento necessário.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StartButton : MonoBehaviour
{
    public GameObject pop_up_box;

    public void popDown()
    {
        pop_up_box.SetActive(false);
    }
}
```

**Configuração no Inspector:** Arraste o GameObject do Menu para `pop_up_box`. No evento OnClick() do botão, atribua o objeto StartButton e selecione `popDown()`.

## Script 6: RestartScene (UI Parte 2, página 13)

Este script é fornecido completo. Nenhum preenchimento necessário.

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

**Configuração no Inspector:** Arraste este script para o Inspector do ReplayButton. Em On