```markdown
---
title: "Actividad 4 - Añadiendo una nueva página Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 8
---

## Instrucciones

### Crear nueva página

1. Asegúrate de que tienes Visual Studio Code abierto y que en la **Barra de Actividades**, **Explorador** esté seleccionado.

2. En el **Explorador de la Solución**, junto al directorio **Pages**, selecciona el botón **Añadir nuevo archivo...**.

<img src="../media/add-new-file.png" width="300" alt="Captura de pantalla del botón Añadir nuevo archivo" />

Esto mostrará una lista de tipos de archivo.

3. Selecciona **Razor component** de la lista.

<img src="../media/select-razor-component.png" width="300" alt="Captura de pantalla del comando de paleta para crear un nuevo archivo" />

4. Nómbralo ```todo``` y presiona **Enter**.

    Esto creará el archivo y lo abrirá en el editor.

5. A continuación, actualiza la página para añadir una directiva ```@page``` de manera que la página responda a /todo y añade un título a la página usando la etiqueta ```<PageTitle>```.

### Añadir un enlace a la página desde la navegación

1. Localiza la página del menú de navegación (**NavMenu.razor**) bajo **Shared** y ábrela.

2. Añade un ítem de navegación para tu lista de tareas justo encima de ***Fetch Data*** copiando el ```<div>``` de Fetch Data y cambiando donde dice FetchData o Fetch Data por Todo.

3. En el **Explorador de la Solución**, haz clic derecho sobre el nombre de tu proyecto, selecciona **Depurar** y selecciona **Iniciar nueva instancia** para ver los cambios y visualizar tu Lista de Tareas.

<img src="../media/empty-todo.png" alt="Captura de pantalla de la Lista de Tareas añadida a la página" />

### Crear la Lista de Tareas

1. Crea un nuevo archivo de clase llamado TodoItem.cs para mantener una clase que represente el objeto tarea pendiente.

En el nivel principal de tu proyecto, haz clic en el botón **Añadir nuevo archivo...** y selecciona **Class** de la lista. Nómbralo ```TodoItem```.

2. Añade el siguiente código para dar a una tarea pendiente (TodoItem) una ```Title``` que es un ```string``` y una propiedad llamada ```IsDone``` que es un ```boolean```.

```csharp
public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```

3. Vuelve al archivo ```todo.razor``` y:
* En el bloque @code, agrega un objeto List de tipo ```TodoItem``` llamado todos. El componente Todo usará este campo para mantener el estado de la lista de tareas.
* Añade un encabezado (```<h3>```) llamado "Tareas Pendientes".
* Debajo del encabezado, añade un marcado de lista no ordenada (```<ul>```) y un bucle foreach para renderizar cada tarea como un elemento de lista (```<li>```).
* Añade un campo de texto (```<input>```) que contenga un marcador de posición que diga "Algo para hacer" y un botón (```<button>```) que diga "Añadir tarea" debajo de la lista no ordenada.

4. Cuando hagas clic en el botón **Añadir tarea**, no sucederá nada en este punto. Ahora tendrás que añadir un controlador de eventos.

* Cambia el botón para incluir una acción **onclick**.
* En el bloque ```@code```:
    * Añade una nueva cadena para guardar el nombre de la nueva tarea.
    * Añade un nuevo método ```AddTodo``` que verifique si la nueva cadena tiene texto. Puedes hacer esto utilizando el método ```IsNullOrWhiteSpace``` de la clase string. Si tiene texto, crea una nueva instancia de ```TodoItem``` con el texto como ```Title``` y agrega esa instancia al objeto ```List``` que creaste anteriormente.
    * Limpia el valor del campo de texto estableciendo ```newTodo``` en una cadena vacía.
* Modifica el elemento de texto ```<input>``` para enlazar ```newTodo``` con el atributo ```@bind```.

5. Actualiza la lista para que los títulos sean editables (```<input>```) y añade una casilla de verificación para realizar un seguimiento de los ítems completados. Asegúrate de enlazar (```@bind```) la casilla de verificación con la propiedad ```IsDone``` del ```todo```.

6. Actualiza el ```<h3>``` para mostrar el conteo de tareas que aún no están completas.

7. Guarda y ejecuta una nueva instancia de tu aplicación para probarla.

<img src="../media/new-todo-list.png" alt="Captura de pantalla de la aplicación completada" />
```