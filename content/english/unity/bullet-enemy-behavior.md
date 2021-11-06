---
title: "Bullet/Enemy Behavior"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 11
---

## Bullet behavior

Now that we know how triggers and tags work, let's set up the bullet behavior! Create a new script within the Scripts folder called "BulletBehavior". Then drag and drop it in the bullet inspector from the bullet in the Prefabs folder and open the script up. Remove the `Start()` and `Update()` function and replace it with this:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag != "")  //destroy bullet if it collides with anything but the player
    {
      // make the bullet disappear

    }
}
```

In this function, we want to destroy the bullet if it collides with anything but the player. Inside the quotation mark, what do you think we should add? Within the body of the function, what should we put to make the bullet disappear?

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
       if(collision.gameObject.tag != "Player")  //destroy bullet if it collides with anything but the player
       {
		       // make the bullet disappear
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

## Enemy behavior

Now let's test by running the game! If we did it correctly, the bullet should disappear upon contact when it touches anything but Nuvi! However, when we shoot the enemy, notice how the bullet disappears, but the enemy does not. To fix this issue, we must create a similar script that revolves around the enemy's behavior.
To do this, create a new script in the Scripts folder called "Enemy Behavior" and attach it to the Alien_pink's inspector. Similar to how we made the "Bullet Behavior" script, remove the `Start()` and `Update()` function and add this:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag == "") //destroy enemy if it collides with a bullet
    {
        // make the enemy disappear

    }
}
```

In this function, we want to destroy the enemy if it collides with a bullet. What do you think we should add? What should we put in the body of the function to make the bullet disappear?

{{< notice tip >}}
We can call upon the bullet's tag in the if-statement!
{{< /notice >}}

{{< notice tip >}}
It's the same as the "Bullet Behavior" script!
{{< /notice >}}

{{< expand "Click here to see the answer!" >}}
```csharp
   void OnTriggerEnter2D(Collider2D collision)
   {
       if(collision.gameObject.tag == "Bullet") //destroy enemy if it collides with a bullet
       {
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

Now that we have added these two scripts, let's try running our game! Check to see the following:
1. bullets disappear when they hit the alien
2. bullets disappear when they hit the invisible walls
3. the alien disappears when it is hit by a bullet

While we are at it, let's make the alien_pink into a prefab as well! However, instead of deleting the alien after we make it into a prefab, let's add two more aliens into the scene. Simply drag and drop the alien into the hierarchy and reposition them however you like using the Move tool!

---

Let's take a step back and look at what you accomplished. You were able to make Nuvi move in 8 directions, provide Nuvi with the ability to shoot bullets, and the enemies along with the bullets can disappear when they collide! Pat yourself on the back; you've accomplished a lot! Let's keep going! We are almost done!
