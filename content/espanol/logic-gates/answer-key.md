---
title: "Taller de Comp. Lógicas: Respuestas del Workshop de Logic Gates"
date: 2025-12-04T10:00:00-06:00
draft: false
hidden: true
weight: 300
---

<link rel="stylesheet" href="../_logic-gates.css" type="text/css"></link>

{{% notice tip %}}
Nota: Para este taller, asegúrate de usar un navegador compatible y tener habilitado JavaScript para el simulador interactivo.

Las actividades pueden incluir seleccionar opciones o componentes en el simulador.
{{% /notice %}}

### Actividad 1: Compuerta AND
Respuesta esperada: La salida se activa (1) solo si ambas entradas están activas (1).

Tip: Prueba todas las combinaciones posibles de las dos entradas. Solo cuando ambas estén en 1, la salida será 1.

<img src="../media/answer_1.png" alt="Solución visual del circuito AND con dos entradas y una salida" width="40%" class="lg-img"/>

---

### Actividad 2: Compuerta OR
Respuesta esperada: La salida se activa (1) si al menos una de las entradas está activa (1).

Tip: Si una o ambas entradas están en 1, la salida será 1. Solo será 0 si ambas entradas están en 0.

<img src="../media/answer_2.png" alt="Solución visual del circuito OR con dos entradas y una salida" width="40%" class="lg-img"/>

---

### Actividad 3: Compuerta NOT
Respuesta esperada: La salida es siempre lo opuesto a la entrada.

Tip: Si la entrada es 0, la salida será 1. Si la entrada es 1, la salida será 0.

<img src="../media/answer_3.png" alt="Solución visual del circuito NOT con una entrada y una salida" width="40%" class="lg-img"/>

**Desafío doble NOT:**
Si colocas dos compuertas NOT en serie, la señal se invierte dos veces. Es decir:
- Si la entrada es 0: la primera NOT la convierte en 1, la segunda la vuelve a convertir en 0.
- Si la entrada es 1: la primera NOT la convierte en 0, la segunda la vuelve a convertir en 1.

**Conclusión:** Dos NOT seguidas anulan el efecto de inversión y la salida será igual a la entrada original.

---

### Actividad 4: Combinación de compuertas (AND, OR, NOT)
Respuesta esperada: La salida se activa si B está en 1, o si A está en 1 y C está en 0 (usa NOT para invertir C).

Tip: Construye el circuito combinando las compuertas según la condición lógica dada. Prueba los casos sugeridos en la actividad.

1. **Identifica las entradas y salidas:**
	- Entradas: A, B, C
	- Salida: Output

2. **Invierte la entrada C usando NOT:**
	- Conecta C a la compuerta NOT para obtener `NOT C`.

3. **Combina A y NOT C con AND:**
	- Conecta A y `NOT C` a la compuerta AND para obtener `A AND NOT C`.

4. **Combina el resultado anterior con B usando OR:**
	- Conecta `A AND NOT C` y B a la compuerta OR para obtener la salida final: `(A AND NOT C) OR B`.

5. **Conecta la salida de la OR al Output.**

**Ejemplo de conexiones:**

<img src="../media/answer_4.png" alt="Solución visual del circuito combinado AND, OR, NOT con tres entradas y una salida" width="40%" class="lg-img"/>

**Pruebas guiadas:**

- A = 1, B = 0, C = 0 → Output = 1
- A = 1, B = 0, C = 1 → Output = 0
- A = 0, B = 1, C = 1 → Output = 1
- A = 0, B = 0, C = 0 → Output = 0

---

### Actividad 5: AND + NOT (Puerta invertida)
Respuesta esperada: La salida es 1 salvo cuando ambas entradas están en 1 (usa AND y luego NOT).

Tip: La compuerta NOT invierte el resultado de la AND. Solo si ambas entradas son 1, la salida será 0.

<img src="../media/answer_5.png" alt="Solución visual del circuito AND seguido de NOT con dos entradas y una salida" width="40%" class="lg-img"/>

---

### Actividad 6: OR + NOT (Salida silenciosa)
Respuesta esperada: La salida es 1 solo si ambas entradas están en 0 (usa OR y luego NOT).

Tip: La compuerta NOT invierte el resultado de la OR. Si alguna entrada es 1, la salida será 0.

<img src="../media/answer_6.png" alt="Solución visual del circuito OR seguido de NOT con dos entradas y una salida" width="40%" class="lg-img"/>

---

### Actividad 7: Diferencia exclusiva (XOR con AND/OR/NOT)
Respuesta esperada: La salida es 1 solo si las entradas son diferentes (usa combinación de AND, OR y NOT).

Tip: Prueba todas las combinaciones. La salida será 1 solo si una entrada es 1 y la otra es 0.

1. **Identifica las entradas y la salida:**
	- Entradas: A, B
	- Salida: Output

2. **Crea la combinación OR:**
	- Conecta A y B a la compuerta OR para obtener `OR_AB`.

3. **Crea la combinación AND:**
	- Conecta A y B a la compuerta AND para obtener `AND_AB`.

4. **Invierte el resultado de AND:**
	- Conecta la salida de `AND_AB` a la compuerta NOT para obtener `NOT_AND_AB`.

5. **Combina ambas con otra AND:**
	- Conecta `OR_AB` y `NOT_AND_AB` a una segunda compuerta AND para obtener la salida final: `XOR = (A OR B) AND NOT(A AND B)`.

6. **Conecta la salida de la segunda AND al Output.**

**Ejemplo de conexiones:**

<img src="../media/answer_7.png" alt="Solución visual del circuito XOR usando AND, OR y NOT con dos entradas y una salida" width="40%" class="lg-img"/>

**Pruebas guiadas:**

- A = 0, B = 0 → Output = 0
- A = 0, B = 1 → Output = 1
- A = 1, B = 0 → Output = 1
- A = 1, B = 1 → Output = 0

**Explicación de los pasos intermedios:**
- **A OR B**: Es 1 si al menos una entrada es 1.
- **A AND B**: Es 1 solo si ambas entradas son 1.
- **NOT(A AND B)**: Invierte el resultado de AND; es 1 salvo cuando ambas son 1.
- **(A OR B) AND NOT(A AND B)**: Solo es 1 si una entrada es 1 y la otra es 0 (diferentes).



---

### Actividad 8: Igualdad (XNOR con AND/OR/NOT)
Respuesta esperada: La salida es 1 solo si ambas entradas son iguales (usa combinación de AND, OR y NOT).

Tip: La salida será 1 si ambas entradas son 0 o ambas son 1.

1. **Identifica las entradas y la salida:**
	- Entradas: A, B
	- Salida: Output

2. **Invierte ambas entradas:**
	- Conecta A a una compuerta NOT para obtener `NOT_A`.
	- Conecta B a otra compuerta NOT para obtener `NOT_B`.

3. **Crea la combinación “A AND B”:**
	- Conecta A y B a una compuerta AND para obtener `AND1 = A AND B`.

4. **Crea la combinación “NOT_A AND NOT_B”:**
	- Conecta `NOT_A` y `NOT_B` a otra compuerta AND para obtener `AND2 = NOT_A AND NOT_B`.

5. **Combina ambas con una OR:**
	- Conecta `AND1` y `AND2` a una compuerta OR para obtener la salida final: `XNOR = (A AND B) OR (NOT_A AND NOT_B)`.

6. **Conecta la salida de la OR al Output.**

**Ejemplo de conexiones:**

<img src="../media/answer_8.png" alt="Solución visual del circuito XNOR usando AND, OR y NOT con dos entradas y una salida" width="40%" class="lg-img"/>

**Pruebas guiadas:**
- A = 0, B = 0 → Output = 1
- A = 0, B = 1 → Output = 0
- A = 1, B = 0 → Output = 0
- A = 1, B = 1 → Output = 1

{{% notice tip %}}
**Funcionamiento de XOR:** 
Una puerta XOR (OR exclusiva) es una puerta lógica digital que produce una salida de nivel alto (1) si y solo si sus entradas son diferentes entre sí
{{% /notice %}}

---

### Actividad extra: Usando el simulador
Tip: Explora el simulador para crear tus propios circuitos y probar diferentes combinaciones de compuertas lógicas. Observa cómo cambian las salidas según las entradas.

<img src="../media/answer_us.png" alt="Ejemplo visual de un circuito personalizado creado en el simulador" width="40%" class="lg-img"/>

---

Si tienes dudas, revisa la tabla de verdad de cada compuerta y experimenta en el simulador. ¡La lógica digital se aprende mejor probando!
