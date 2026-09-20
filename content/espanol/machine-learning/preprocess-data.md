```markdown
---
title: "Paso 4: Preprocesar datos"
description: "Conceptos Básicos de Aprendizaje Automático"
prereq: "ninguno"
difficulties: ["intermedio"]
draft: false
weight: 4
---

Hasta ahora, hemos importado nuestro conjunto de datos. En la vida real, cada jugador de fútbol tiene una posición específica. Diferentes posiciones requieren fuerza en diferentes atributos. Así que vamos a limitar el alcance al delantero.

Primero, listemos todas las posiciones.
Esta declaración parece un poco más larga, pero hace el trabajo. El `fifa_data['position']` selecciona la columna de posición de `fifa_data`, el `dropna()` elimina las celdas que están en blanco, y `unique()` nos elimina todos los elementos duplicados.

```python
# para averiguar cuántas posiciones hay
print(fifa_data['Position'].dropna().unique())
```

    ['RF' 'ST' 'LW' 'GK' 'RCM' 'LF' 'RS' 'RCB' 'LCM' 'CB' 'LDM' 'CAM' 'CDM'
     'LS' 'LCB' 'RM' 'LAM' 'LM' 'LB' 'RDM' 'RW' 'CM' 'RB' 'RAM' 'CF' 'RWB'
     'LWB']

Ahora podemos filtrar los datos por la posición "ST". Te animamos a seleccionar otras posiciones para ver cuál es la diferencia.

```python
# obtener jugadores por posición
fifa_data_by_pos = fifa_data[fifa_data['Position']=='ST']
```

Vamos a graficar un histograma para las calificaciones generales de todos los delanteros.

```python
plt.hist(x=fifa_data_by_pos[target], bins=10, alpha=0.75, rwidth=0.85)
```

    (array([ 40., 186., 363., 463., 601., 341., 113.,  34.,   9.,   2.]),
     array([47. , 51.7, 56.4, 61.1, 65.8, 70.5, 75.2, 79.9, 84.6, 89.3, 94. ]),
     <a list of 10 Patch objects>)

![Imagen de salida](../images/output_11_1.png)

A continuación, queremos dividir los datos en dos conjuntos: uno se usa para entrenar el modelo y otro se usa para verificar que el modelo entrenado sea bueno.

Podrías pensar que deberíamos dejar la mayor cantidad posible de datos para el entrenamiento porque esto hace que el modelo sea mejor. El modelo se ajusta mejor, pero solo para los conjuntos de datos de entrenamiento. Cuando aplicas el modelo a datos de prueba, la precisión de la predicción puede disminuir. Esto se llama "sobreajuste."

Ahora, dejamos el 25% de los datos para pruebas.

```python
# dividir los datos en train_data y test_data aleatoriamente
# eres bienvenido a cambiar la proporción de test_size para ver lo que sucede
train_data, test_data = train_test_split(fifa_data_by_pos,test_size=0.25)

# imprimir el número de jugadores en train_data y test_data
# len() te da el número de jugadores en formato numérico
# str() convierte el valor numérico en cadena de texto
print("El número de datos de entrenamiento es " + str(len(train_data)))
print("El número de datos de prueba es " + str(len(test_data)))
```

    El número de datos de entrenamiento es 1614
    El número de datos de prueba es 538
```