---
title: "Projectile/Enemy Behavior"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 11
---

## Projectile behavior

Now that we know how triggers and tags work, let's set up the projectile behavior! Create a new script within the Scripts folder called "ProjectileBehavior". Then drag and drop it in the projectile inspector from the projectile in the Prefabs folder, and open the script up. Remove the `Start()` and `Update()` function and replace it with this:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag != "")  //destroy projectile if it collides with anything but the player
    {
      // make the projectile disappear

    }
}
```

In this function, we want to destroy the projectile if it collides with anything but the player. Inside the quotation mark, what do you think we should add? Within the body of the function, what should we put to make the projectile disappear?

{{< notice tip >}}
We can call upon Nuvi's tag in the if-statement!
{{< /notice >}}

{{< notice tip >}}
- Destroy(???) will destroy the gameObject specified by ???
- gameObject is a variable that refers to the object that this script is attached to
{{< /notice >}}

{{< expand "Click here to see the answer!" >}}
```csharp
   void OnTriggerEnter2D(Collider2D collision)
   {
       if(collision.gameObject.tag != "Player")  //destroy projectile if it collides with anything but the player
       {
		       // make the projectile disappear
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

## Enemy behavior

Now let's test by running the game! If we did it correctly, the projectile should disappear upon contact when it touches anything but Nuvi! However, when we fire at the enemy, notice how the projectile disappears, but the enemy does not. To fix this issue, we must create a similar script that revolves around the enemy's behavior.
To do this, create a new script in the Scripts folder called "EnemyBehavior" and attach it to the Alien_pink's inspector. Similar to how we made the "ProjectileBehavior" script, remove the `Start()` and `Update()` function and add this:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag == "") //destroy enemy if it collides with a projectile
    {
        // make the enemy disappear

    }
}
```

In this function, we want to destroy the enemy if it collides with a projectile. What do you think we should add? What should we put in the body of the function to make the projectile disappear?

{{< notice tip >}}
We can call upon the projectile's tag in the if-statement!
{{< /notice >}}

{{< notice tip >}}
It's the same as the "ProjectileBehavior" script!
{{< /notice >}}

{{< expand "Click here to see the answer!" >}}
```csharp
   void OnTriggerEnter2D(Collider2D collision)
   {
       if(collision.gameObject.tag == "Projectile") //destroy enemy if it collides with a projectile
       {
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

Now that we have added these two scripts, let's try running our game! Check to see the following:
1. projectiles disappear when they hit the alien
2. projectiles disappear when they hit the invisible walls
3. the alien disappears when it is hit by a projectile

While we are at it, let's make the alien_pink into a prefab as well! However, instead of deleting the alien after we make it into a prefab, let's add two more aliens into the scene. Simply drag and drop the alien into the hierarchy and reposition them however you like using the Move tool!

---

Let's take a step back and look at what you accomplished. You were able to make Nuvi move in 8 directions, provide Nuvi with the ability to fire projectiles, and the enemies along with the projectiles are able to disappear when they collide! Pat yourself on the back; you've accomplished a lot! Let's keep going! We are almost done!
