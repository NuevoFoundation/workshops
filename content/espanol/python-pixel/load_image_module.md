---
title: "Importar un módulo de imagen"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 1
---

### Configurando el proyecto

Para hacer cosas divertidas con imágenes, necesitamos desbloquear algunas funciones útiles. Para obtener estas funciones, necesitamos importar un módulo. En este caso, si importamos el módulo <b>Pillow</b>, podemos usar algunas funciones que nos ayudarán a modificar imágenes.

Primero, eliminemos todo en el archivo main.py. Luego, agrega las siguientes declaraciones:

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
</pre>

Una vez que ejecutes, deberías ver que el módulo se está instalando en la consola:

![alt text](../../media/installed_module.png "imagen de lo que deberías ver cuando instales el módulo correctamente")

Si ves lo anterior, significa que has importado un módulo con éxito. Si tienes problemas, por favor pide ayuda antes de continuar.

{{% notice note %}}

Si tienes curiosidad por ver qué funciones hay en el módulo Pillow Image, puedes encontrar información aquí: https://pillow.readthedocs.io/en/latest/handbook/index.html

{{% /notice %}}