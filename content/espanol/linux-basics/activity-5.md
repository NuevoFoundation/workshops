```markdown
---
title: "Actividad 5 - Asegurar Permisos de Usuario"
description: "Usa un comando de Linux para asegurar tus archivos"
date: 2022-09-23
difficulties: ["intermedio"]
weight: 8
---

<p style="text-align: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/D5Y6LH0mBi0" title="Actividad 5 - Asegurar Permisos de Usuario - Video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Una foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        ¡Oh no! Algunos de nuestros archivos podrían haber sido modificados. ¡Vamos a asegurar nuestras notas, file1. No queremos que un hacker interfiera con ellos!
    </div>
</div>

### ¿Cómo limitamos el acceso a nuestros archivos?

¡Dando "permisos" a los usuarios para los archivos!

Los permisos son una forma de que la computadora determine quién tiene acceso a los archivos y qué pueden hacer con ellos.

En Linux, hay tres tipos comunes de acceso a un archivo que un usuario puede solicitar: "leer", "escribir" o "ejecutar".

{{% notice note %}}

El acceso de "leer" significa que un usuario puede abrir y leer un archivo. El acceso de "leer" a menudo se denota con el símbolo `r`.

El acceso de "escribir" significa que un usuario puede abrir y escribir en un archivo. Esto incluye renombrar y mover un archivo a una ubicación diferente en el sistema de archivos. El acceso de "escribir" a menudo se denota con el símbolo `w`.

El acceso de "ejecutar" significa que un usuario puede intentar ejecutar el archivo como un programa. El acceso de "ejecutar" a menudo se denota con el símbolo `x`.

{{% /notice %}}

### Pero, ¿cómo sabemos qué tan seguros están nuestros archivos?

¿Hay algún comando que hayamos aprendido hasta ahora que pueda mostrar qué tan seguros están nuestros archivos?  
¡Si lo necesitas, vuelve atrás!

![Comando ls -l](../images/Act5.1.png?classes=border,shadow)

Debemos seguir usando ese comando para verificar si hemos cambiado los permisos como esperábamos.

---

### Entonces, ¿cómo aseguramos los archivos con permisos?

```
chmod u=rwx g=rx o=x file1
```

`chmod` es un comando usado para modificar los permisos de tus archivos (significa "Cambiar Modo") para los siguientes tres grupos de usuarios diferentes:

- el <b>u</b>suario y dueño del archivo
- el <b>g</b>rupo y los miembros del grupo de personas con acceso al archivo
- los <b>o</b>tros o cualquier otra persona

Estos grupos pueden ser modificados para tener permisos para hacer lo siguiente:

- <b>r</b>ead (leer)
- <b>w</b>rite (escribir)
- e<b>x</b>ecute (ejecutar).

---

### ¡Inténtalo por tu cuenta!

Ahora, intentemos cambiar los permisos de nuestros archivos. Queremos que nadie fuera de nuestro grupo, aparte de nosotros mismos, pueda acceder a `file1`. ¿Cómo haríamos esto?

![Comando chmod](../images/Act5.2.png?classes=border,shadow)

#### Dato Curioso: ¡Método abreviado!

`chmod` también puede utilizarse con comandos numéricos simples. Estos comandos se escriben como:

```
chmod 751 [insertar nombre del archivo]
```

Los valores pueden entenderse como dar a los usuarios el permiso para leer, escribir y ejecutar.  
¿Qué permisos dan los otros dos valores?

| Número |        Significado         |
| :----: | :------------------------: |
|   7    | leer + escribir + ejecutar |
|   6    |        leer + escribir     |
|   5    |      leer + ejecutar       |
|   4    |            leer            |
|   3    |     ejecutar + escribir    |
|   2    |          escribir          |
|   1    |         ejecutar           |
|   0    |      sin permiso           |
```