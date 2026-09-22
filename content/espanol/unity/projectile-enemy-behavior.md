---
title: "Comportamiento del Proyectil/Enemigo"
date: 2021-10-06T11:45:38-07:00
draft: false
weight: 11
---

## Comportamiento del proyectil

¡Ahora que sabemos cómo funcionan los disparadores y las etiquetas, configuremos el comportamiento del proyectil! Crea un nuevo script dentro de la carpeta Scripts llamado "ProjectileBehavior". Luego, arrástralo y suéltalo en el inspector del proyectil desde la carpeta Prefabs y abre el script. Elimina las funciones `Start()` y `Update()` y reemplázalas con esto:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag != "")  // destruir el proyectil si colisiona con algo que no sea el jugador
    {
      // hacer que el proyectil desaparezca

    }
}
```

En esta función, queremos destruir el proyectil si colisiona con algo que no sea el jugador. Dentro de las comillas, ¿qué crees que deberíamos agregar? Dentro del cuerpo de la función, ¿qué deberíamos poner para que el proyectil desaparezca?

{{< notice tip >}}
¡Podemos usar la etiqueta de Nuvi en la declaración if!
{{< /notice >}}

{{< notice tip >}}
- Destroy(???) destruirá el objeto especificado por ???
- gameObject es una variable que se refiere al objeto al que está adjunto este script
{{< /notice >}}

{{< expand "¡Haz clic aquí para ver la respuesta!" >}}
```csharp
   void OnTriggerEnter2D(Collider2D collision)
   {
       if(collision.gameObject.tag != "Player")  // destruir el proyectil si colisiona con algo que no sea el jugador
       {
		       // hacer que el proyectil desaparezca
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

## Comportamiento del enemigo

¡Ahora probemos ejecutando el juego! Si lo hicimos correctamente, el proyectil debería desaparecer al contacto cuando toca algo que no sea Nuvi. Sin embargo, cuando disparamos al enemigo, fíjate cómo el proyectil desaparece, pero el enemigo no. Para solucionar este problema, debemos crear un script similar que se enfoque en el comportamiento del enemigo.  
Para hacer esto, crea un nuevo script en la carpeta Scripts llamado "EnemyBehavior" y adjúntalo al inspector de Alien_pink. Similar a como hicimos el script "ProjectileBehavior", elimina las funciones `Start()` y `Update()` y agrega esto:

```csharp
void OnTriggerEnter2D(Collider2D collision)
{
    if(collision.gameObject.tag == "") // destruir enemigo si colisiona con un proyectil
    {
        // hacer que el enemigo desaparezca

    }
}
```

En esta función, queremos destruir al enemigo si colisiona con un proyectil. ¿Qué crees que deberíamos agregar? ¿Qué deberíamos poner en el cuerpo de la función para que el proyectil desaparezca?

{{< notice tip >}}
¡Podemos usar la etiqueta del proyectil en la declaración if!
{{< /notice >}}

{{< notice tip >}}
¡Es lo mismo que el script "ProjectileBehavior"!
{{< /notice >}}

{{< expand "¡Haz clic aquí para ver la respuesta!" >}}
```csharp
   void OnTriggerEnter2D(Collider2D collision)
   {
       if(collision.gameObject.tag == "Projectile") // destruir enemigo si colisiona con un proyectil
       {
           Destroy(gameObject);
       }
   }
```
{{< /expand >}}

---

Ahora que hemos agregado estos dos scripts, ¡intentemos ejecutar nuestro juego! Revisa lo siguiente:
1. Los proyectiles desaparecen cuando golpean al alienígena.
2. Los proyectiles desaparecen cuando golpean las paredes invisibles.
3. El alienígena desaparece cuando lo golpea un proyectil.

Mientras estamos en ello, ¡hagamos que el alien_pink sea un prefab también! Sin embargo, en lugar de eliminar al alienígena después de convertirlo en un prefab, agreguemos dos alienígenas más a la escena. Simplemente arrastra y suelta al alienígena en la jerarquía y reposiciónalos como quieras usando la herramienta de movimiento.

---

Echemos un vistazo atrás para ver lo que has logrado. Fuiste capaz de hacer que Nuvi se moviera en 8 direcciones, le diste a Nuvi la habilidad de disparar proyectiles y los enemigos junto con los proyectiles pueden desaparecer cuando colisionan. ¡Date una palmada en la espalda; has logrado mucho! ¡Sigamos adelante! ¡Estamos casi terminados!