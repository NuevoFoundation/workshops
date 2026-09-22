```markdown
---
title: "Unity - Clave de respuestas"
date: 2024-10-06T00:00:00-07:00
draft: false
weight: 20
hidden: true
---

{{% notice note %}}
Este es un material de referencia para el maestro del taller del juego espacial Nuvi con perspectiva superior en Unity. El taller incluye desafíos de programación con espacios en blanco donde los estudiantes deben agregar líneas faltantes a scripts incompletos en C#. Esta clave de respuestas provee todos los scripts completos con las líneas faltantes resaltadas, además de orientaciones de configuración para cada lección.
{{% /notice %}}

## Script 1: PlayerMovement (Moviendo a Nuvi, página 5)

Los estudiantes copian y pegan el código incompleto y deben agregar la variable `Rigidbody2D` y la solución para el movimiento diagonal.

### Línea faltante 1

Agrega `public Rigidbody2D rb;` debajo de `public float speed;`:

```csharp
public float speed;
public Rigidbody2D rb;    // AGREGA ESTA LÍNEA
```

Después de guardar, los estudiantes deben arrastrar el componente Rigidbody2D de Nuvi desde el Inspector al espacio de la variable `rb`.

### Línea faltante 2

Agrega `movement = movement.normalized;` debajo de la asignación del vector de movimiento para corregir la velocidad en movimiento diagonal:

```csharp
movement = new Vector3(move_x, move_y, 0.0f);
movement = movement.normalized;    // AGREGA ESTA LÍNEA
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

**¿Por qué normalizar?** Sin normalización, el movimiento diagonal es aproximadamente 1.41 veces más rápido que en dirección horizontal/vertical (Teorema de Pitágoras: sqrt(1^2 + 1^2) = 1.414). `movement.normalized` escala el vector a longitud 1 en todas las direcciones.

## Script 2: FiringBehavior (Disparo, página 9)

Los estudiantes copian y pegan código incompleto y deben agregar la línea `Instantiate`.

### Línea faltante

Agrega la llamada a Instantiate encima de la línea `GetComponent`:

```csharp
if (Input.GetButtonDown("Jump"))
{
    GameObject projectile = Instantiate(projectile_object, spawn_coor.position, spawn_coor.rotation);    // AGREGA ESTA LÍNEA
    Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
    rb.AddForce(spawn_coor.up * projectile_speed, ForceMode2D.Impulse);
}
```

### Script completo FiringBehavior

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

**Configuración en el Inspector:** Arrastra el punto de generación vacío Transform hacia `spawn_coor`. Arrastra el prefab de proyectil hacia `projectile_object`.

## Script 3: ProjectileBehavior (Comportamiento del proyectil/enemigo, página 11)

Los estudiantes deben completar la comparación de etiquetas (tags) y la llamada a Destroy.

### Respuestas de los espacios en blanco

- Comparación de etiquetas: `"Player"` (destruye el proyectil si golpea cualquier cosa EXCEPTO al jugador)
- Llamada Destroy: `Destroy(gameObject);`

### Script completo ProjectileBehavior

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

## Script 4: EnemyBehavior (Comportamiento del proyectil/enemigo, página 11)

Los estudiantes deben completar la comparación de etiquetas (tags) y la llamada a Destroy.

### Respuestas de los espacios en blanco

- Comparación de etiquetas: `"Projectile"` (destruye al enemigo si un proyectil lo golpea)
- Llamada Destroy: `Destroy(gameObject);`

### Script completo EnemyBehavior (versión inicial)

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

**Nota:** Este script se actualiza en la lección Outline (página 14) para rastrear el conteo de enemigos. Ver la versión final abajo.

## Script 5: StartButton (Interfaz gráfica, Parte 1, página 12)

Este script se proporciona completo. No requiere espacios a llenar.

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

**Configuración en el Inspector:** Arrastra el GameObject del menú hacia `pop_up_box`. En el evento OnClick() del botón, asigna el objeto StartButton y selecciona `popDown()`.

## Script 6: RestartScene (Interfaz gráfica, Parte 2, página 13)

Este script se proporciona completo. No requiere espacios a llenar.

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class RestartScene : MonoBehaviour
{
    public void restart()
    {
        Scene scene = SceneManager.GetActiveScene