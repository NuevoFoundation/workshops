---
title: "KC7: Juego de Defensor Cibernético - Clave de Respuestas"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Esta es una referencia para docentes del taller KC7 Defensor Cibernético. Contiene soluciones de consultas KQL y metodología para las Actividades 2-4. Los resultados numéricos exactos dependen de la base de datos en vivo SecurityLogs y pueden variar entre sesiones.

También están disponibles los videos instructivos para la Actividad 3.5 (respuestas de KQL 101) y la Actividad 4.5 (respuestas de Atrapar al Hacker).

Las respuestas de los Bonos 1 y 3 se verifican en el Tablero de Puntuación de KC7. El Bono 2 es un ejercicio de análisis abierto sin una clave de respuesta definida.
{{% /notice %}}

## Actividad 2: Juego de Intel de Amenazas (¿Quién lo hizo?)

Tres preguntas de atribución basadas en escenarios. Los estudiantes identifican el tipo de adversario.

| Pregunta | Escenario | Respuesta | Razonamiento |
|----------|-----------|-----------|--------------|
| 1 | Operaciones cibernéticas alineadas con el gobierno | **C. Patrocinado por el Estado** | Dirigido, bien financiado, motivado políticamente |
| 2 | Ataque con motivación financiera | **B. Ciberdelincuente** | Impulsado por dinero, objetivo indiscriminado |
| 3 | Campaña cibernética dirigida por el estado | **C. Patrocinado por el Estado** | Patrocinado por el gobierno, objetivo selectivo, a largo plazo |

{{% notice tip %}}
Mira el video de la Actividad 2 para ejemplos detallados del mundo real detrás de cada escenario, incluyendo el estudio de caso de POLONIUM.
{{% /notice %}}

## Actividad 3: KQL 101

Estas preguntas enseñan operadores básicos de KQL usando la base de datos **SecurityLogs**. Las consultas a continuación muestran el enfoque correcto; los valores exactos de los resultados dependen de los datos en vivo.

### Pregunta 1: Explora todas las tablas con `take`

```KQL
Employees
| take 10

Email
| take 10

OutboundBrowsing
| take 10

PassiveDns
| take 10

AuthenticationEvents
| take 10

FileCreationEvents
| take 10

ProcessEvents
| take 10

SecurityAlerts
| take 10
```

**Propósito:** Los estudiantes exploran el esquema de cada tabla para entender qué columnas y tipos de datos están disponibles.

### Pregunta 2: ¿Cuántos empleados hay en la empresa?

```KQL
Employees
| count
```

**Concepto esperado:** El operador `count` devuelve el número total de filas en la tabla. Cada fila representa a un empleado.

### Pregunta 3: ¿Qué empleado tiene la dirección IP 192.168.0.191?

```KQL
Employees
| where ip_addr == "192.168.0.191"
```

**Concepto:** El operador `where` filtra filas. El operador `==` verifica una coincidencia exacta.

### Pregunta 4: ¿Cuántos correos electrónicos recibió Betty Parrish?

```KQL
Email
| where recipient == "betty_parrish@envolvelabs.com"
| count
```

**Concepto:** Filtrar la tabla Email por la columna recipient, luego contar los resultados. El formato del correo sigue la estructura `firstname_lastname@envolvelabs.com`.

### Pregunta 5: ¿Cuántos usuarios recibieron correos electrónicos con "vacuna" en el asunto?

```KQL
Email
| where subject has "vaccine"
| distinct recipient
| count
```

**Concepto:** Encadenar múltiples operadores: `where` para filtrar, `distinct` para eliminar duplicados, `count` para el total. El operador `has` realiza una coincidencia de término completo (basada en delimitaciones de palabras), encontrando "vaccine" como una palabra completa en el asunto.

### Pregunta 6: ¿Cuántos sitios web únicos visitó Keith Mitchell?

Esto requiere **hacer pivot** entre dos tablas:

```KQL
// Paso 1: Encuentra la dirección IP de Keith Mitchell
Employees
| where name == "Keith Mitchell"
```

```KQL
// Paso 2: Utiliza su IP para consultar OutboundBrowsing
OutboundBrowsing
| where src_ip == "[IP de Keith del Paso 1]"
| distinct url
| count
```

O, usando una declaración `let` para combinar ambos pasos:

```KQL
let keith_ip = Employees
| where name == "Keith Mitchell"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (keith_ip)
| distinct url
| count
```

**Concepto:** Hacer pivot, es decir, usar datos de una tabla (Employees) para consultar otra (OutboundBrowsing). Esta es una habilidad esencial en el análisis cibernético.

### Pregunta 7: ¿Cuántos dominios en PassiveDns contienen "vaccine"?

```KQL
PassiveDns
| where domain contains "vaccine"
| distinct domain
| count
```

**Concepto:** El operador `contains` (no `has`) es necesario aquí porque "vaccine" puede aparecer como parte de un nombre de dominio más largo.

### Pregunta 8: ¿A qué direcciones IP resolvió "biotechenvolv.science"?

```KQL
PassiveDns
| where domain == "biotechenvolv.science"
```

**Concepto:** Busca en la columna de direcciones IP en los resultados para ver todas las direcciones asociadas con este dominio.

### Pregunta 9: ¿Cuántas URLs únicas fueron visitadas por empleados con el nombre "Karen"?

```KQL
let karen_ips = Employees
| where name has "Karen"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (karen_ips)
| distinct url
| count
```

**Concepto:** Esto combina la declaración `let` con hacer pivot. La `let` almacena el resultado de la primera consulta (IPs de Karen) para que se pueda reutilizar en la segunda consulta.

{{% notice tip %}}
**Consejo para docentes:** La declaración `let` es uno de los patrones más potentes en KQL. Motiva a los estudiantes a nombrar sus variables descriptivamente (como `karen_ips` en lugar de `x`) para que las consultas sean más fáciles de leer.
{{% /notice %}}

### Referencia rápida de KQL 101

| Operador | Propósito | Ejemplo |
|----------|-----------|---------|
| `take` | Muestra filas de una tabla | `Employees \| take 10` |
| `count` | Cuenta filas totales |