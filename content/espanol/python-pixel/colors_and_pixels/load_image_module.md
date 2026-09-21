---
title: "Importar un módulo de imagen"
date: 2026-04-25T00:00:00-07:00
draft: false
weight: 1
--- 

### Configuración del proyecto

Para hacer cosas divertidas con imágenes, necesitamos desbloquear algunas funciones útiles. Para obtener estas funciones, debemos importar un módulo. En este caso, si importamos el módulo <b>Pillow</b>, podremos usar algunas funciones que nos ayudarán a modificar imágenes.

Primero, eliminemos todo en el archivo main.py. Luego, agrega las siguientes declaraciones:

<pre>
    <font color="blue">from</font> PIL <font color="blue">import</font> Image
    <font color="blue">from</font> PIL <font color="blue">import</font> ImageFilter
</pre>


Una vez que ejecutes el código, deberías ver el módulo siendo instalado en la consola:

<img src="../../media/installed_module.png" alt="Imagen de lo que deberías ver cuando instalas el módulo exitosamente" width="60%">

Si ves lo anterior, ¡significa que has importado un módulo correctamente! Si encuentras problemas, pide ayuda antes de continuar.

{{% notice note %}}

Si tienes curiosidad por ver qué funciones existen en el módulo de imágenes de Pillow, puedes encontrar información al respecto aquí: https://pillow.readthedocs.io/en/latest/handbook/index.html

{{% /notice %}}