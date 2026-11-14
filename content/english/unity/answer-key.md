---
title: "Unity - Answer key"
date: 2024-10-06T00:00:00-07:00
draft: false
weight: 20
hidden: true
---

{{% notice note %}}
This is a teacher reference for the Unity Top-Down Nuvi Space Game workshop. The workshop has fill-in-the-blank coding challenges where students must add missing lines to incomplete C# scripts. This answer key provides all completed scripts with the missing lines highlighted, plus setup guidance for each lesson.
{{% /notice %}}

## Script 1: PlayerMovement (Making Nuvi move, page 5)

Students copy-paste incomplete code and must add the missing `Rigidbody2D` variable and the diagonal movement fix.

### Missing line 1

Add `public Rigidbody2D rb;` under `public float speed;`:

```csharp
public float speed;
public Rigidbody2D rb;    // ADD THIS LINE
```

After saving, students must drag Nuvi's Rigidbody2D component from the Inspector into the `rb` variable slot.

### Missing line 2

Add `movement = movement.normalized;` under the movement vector assignment to fix diagonal speed:

```csharp
movement = new Vector3(move_x, move_y, 0.0f);
movement = movement.normalized;    // ADD THIS LINE
```

### Complete PlayerMovement script

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

**Why normalize?** Without normalization, diagonal movement is ~1.41x faster than horizontal/vertical (Pythagorean theorem: sqrt(1^2 + 1^2) = 1.414). `movement.normalized` scales the vector to length 1 in all directions.

## Script 2: FiringBehavior (Firing, page 9)

Students copy-paste incomplete code and must add the `Instantiate` line.

### Missing line

Add the Instantiate call above the `GetComponent` line:

```csharp
if (Input.GetButtonDown("Jump"))
{
    GameObject projectile = Instantiate(projectile_object, spawn_coor.position, spawn_coor.rotation);    // ADD THIS LINE
    Rigidbody2D rb = projectile.GetComponent<Rigidbody2D>();
    rb.AddForce(spawn_coor.up * projectile_speed, ForceMode2D.Impulse);
}
```

### Complete FiringBehavior script

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

**Inspector setup:** Drag the empty spawn point Transform into `spawn_coor`. Drag the projectile prefab into `projectile_object`.

## Script 3: ProjectileBehavior (Projectile/Enemy behavior, page 11)

Students must fill in the tag comparison and the Destroy call.

### Fill-in answers

- Tag comparison: `"Player"` (destroy projectile if it hits anything EXCEPT the player)
- Destroy call: `Destroy(gameObject);`

### Complete ProjectileBehavior script

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

## Script 4: EnemyBehavior (Projectile/Enemy behavior, page 11)

Students must fill in the tag comparison and the Destroy call.

### Fill-in answers

- Tag comparison: `"Projectile"` (destroy enemy if a projectile hits it)
- Destroy call: `Destroy(gameObject);`

### Complete EnemyBehavior script (initial version)

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

**Note:** This script gets updated in the Outline lesson (page 14) to track enemy count. See the final version below.

## Script 5: StartButton (UI Part 1, page 12)

This script is provided complete. No fill-in required.

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

**Inspector setup:** Drag the Menu GameObject into `pop_up_box`. In the Button's OnClick() event, assign the StartButton object and select `popDown()`.

## Script 6: RestartScene (UI Part 2, page 13)

This script is provided complete. No fill-in required.

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

**Inspector setup:** Drag this script into the ReplayButton Inspector. In OnClick(), assign ReplayButton and select `restart()`.

## Script 7: Outline (Piecing it all together, page 14)

This is the most complex script. Students copy-paste incomplete code and must add 5 missing elements.

### Missing lines (in order)

1. Add `using UnityEngine.UI;` at the top (needed for Slider):

```csharp
using UnityEngine;
using UnityEngine.UI;    // ADD THIS LINE
```

2. Add `public Transform[] positions;` above `private Transform location;`:

```csharp
public Transform[] positions;    // ADD THIS LINE
private Transform location;
```

3. Add `winner_screen.SetActive(false);` inside `Start()`:

```csharp
void Start()
{
    is_generated = false;
    winner_screen.SetActive(false);    // ADD THIS LINE
}
```

4. Add `num_of_enemies.value` in the for loop condition:

```csharp
for (int x = 1; x <= num_of_enemies.value; x++)    // ADD num_of_enemies.value
```

5. Add `public int enemies_left;` as a class field, and `enemies_left = -1;` in Start():

```csharp
public int enemies_left;    // ADD THIS LINE (class field)
```

```csharp
void Start()
{
    is_generated = false;
    winner_screen.SetActive(false);
    enemies_left = -1;    // ADD THIS LINE
}
```

### Complete Outline script

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Outline : MonoBehaviour
{
    public Slider num_of_enemies;
    public Transform[] positions;
    private Transform location;

    public GameObject opening_screen;
    public GameObject winner_screen;
    public GameObject enemy1;
    public GameObject player1;

    public int enemies_left;
    private bool is_generated;

    void Start()
    {
        is_generated = false;
        winner_screen.SetActive(false);
        enemies_left = -1;    // Sentinel value: prevents end screen before enemies spawn
    }

    void Update()
    {
        if (is_generated == false)
        {
            if (opening_screen.activeSelf == false)
            {
                generate();
                is_generated = true;
                enemies_left = (int)num_of_enemies.value;
            }
        }

        if (enemies_left == 0)
        {
            showEndScreen();
        }
    }

    private void generate()
    {
        for (int x = 1; x <= num_of_enemies.value; x++)
        {
            location = positions[x];
            GameObject enemy = Instantiate(enemy1, location);
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

**Inspector setup for Main Camera:**
- `num_of_enemies`: drag the EnemySlider from the hierarchy
- `positions` (size 4): Element 0 = PlayerLoc, Element 1 = EnemyLoc2, Element 2 = EnemyLoc1, Element 3 = EnemyLoc3
- `opening_screen`: drag Menu GameObject
- `winner_screen`: drag EndScreen GameObject
- `enemy1`: drag enemy1 prefab from Prefabs folder
- `player1`: drag Nuvi prefab from Prefabs folder

## EnemyBehavior: Final version (updated in Outline lesson)

After the Outline lesson, EnemyBehavior is updated to track enemy count:

{{% notice info %}}
The workshop's Outline page incorrectly refers to `OnCollisionEnter2D()` in its instructions, but the correct method name from the earlier Projectile/Enemy Behavior lesson is `OnTriggerEnter2D()`. This is a typo in the workshop source.
{{% /notice %}}

```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyBehavior : MonoBehaviour
{
    GameObject cam;
    private Outline outline;

    void Start()
    {
        cam = GameObject.Find("Main Camera");
        outline = cam.GetComponent<Outline>();
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.tag == "Projectile")
        {
            Destroy(gameObject);
            outline.enemies_left--;
        }
    }
}
```

**What the update adds:** When an enemy is destroyed, it decrements `enemies_left` in the Outline script. When `enemies_left` reaches 0, the end screen appears.

## Non-script setup reference

### Component checklist

| GameObject | Components needed |
|-----------|------------------|
| Nuvi | SpriteRenderer, Rigidbody2D (gravity=0, freeze rotation), BoxCollider2D, PlayerMovement, FiringBehavior |
| Walls (4x cubes) | BoxCollider2D (not BoxCollider) |
| alien_pink | SpriteRenderer, BoxCollider2D, EnemyBehavior |
| projectile (prefab) | SpriteRenderer, BoxCollider2D (IsTrigger=true), Rigidbody2D (gravity=0), ProjectileBehavior |
| Main Camera | Outline script |
| StartButton | StartButton script (OnClick -> popDown) |
| ReplayButton | RestartScene script (OnClick -> restart) |

### Tags

| GameObject | Tag |
|-----------|-----|
| Nuvi | Player |
| projectile | Projectile |
| alien_pink | Enemy |

### Key Unity concepts covered

| Concept | Lesson | Purpose |
|---------|--------|---------|
| Rigidbody2D | Setting up Nuvi | Physics-based movement |
| BoxCollider2D | Colliders | Collision detection between objects |
| Prefab | Projectile setup | Reusable object templates |
| Trigger | Triggers and tags | Custom collision behavior (no physics bounce) |
| Tag | Triggers and tags | Identify GameObjects in scripts |
| Instantiate | Firing, Outline | Create copies of prefabs at runtime |
| Canvas/UI | UI Part 1-2 | Menu screens, buttons, sliders |
| SceneManager | UI Part 2 | Reload the game scene |

### Common issues and fixes

| Problem | Cause | Solution |
|---------|-------|----------|
| Nuvi falls down | Gravity Scale = 1 | Set Gravity Scale to 0 in Rigidbody2D |
| Nuvi runs off screen | No colliders | Add BoxCollider2D to Nuvi and create invisible walls |
| Nuvi spins on wall collision | Rotation not frozen | Check "Freeze Rotation" in Rigidbody2D Constraints |
| Nuvi hidden behind background | Layer order | Set Nuvi's Order in Layer to 1 in SpriteRenderer |
| Nuvi moves faster diagonally | Not normalized | Add `movement = movement.normalized;` |
| Projectile invisible | Layer order | Increase Order in Layer in SpriteRenderer |
| Projectile passes through enemies | Missing trigger/tag | Check IsTrigger on projectile, verify tags are set |
| End screen shows at start | Not hidden on start | Add `winner_screen.SetActive(false);` in Outline Start() |
| Script name mismatch | Renamed file outside editor | Update class name inside the script to match filename |

### Build and export

To export the finished game: **File > Build Settings > select target platform > Build**. The exported game can be shared as a standalone application.
