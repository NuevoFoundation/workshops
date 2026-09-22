```markdown
---
title: "Python Interactive - Clave de Respuestas"
date: 2020-03-27T20:24:33-07:00
weight: 15
draft: false
hidden: true
---

Aquí está la solución completa del taller. Las soluciones de cada actividad no pueden estar solas, por lo que habrá comentarios indicando dónde está la solución de cada actividad dentro del bloque más grande de código.

```python
# Actividad 2
dictMenu = {'Pasta con Pesto Cremoso':[15.99, 'Pasta penne mezclada en una salsa cremosa de pesto, y coronada con aceitunas negras y tomates secos'],
'Rollos de Primavera':[8.00, 'Verduras salteadas como repollo y zanahoria mezcladas con vermicelli y finas tiras de tofu frito, envueltas en una capa exterior crujiente. Servidos con una cremosa salsa de maní y salsa de chile dulce']}

# Actividad 3
def imprimirMenu():
  print("-----Menú-----")
  for i in dictMenu:
    print(i+ " ------ $"+str(dictMenu[i][0]))
    print(dictMenu[i][1])
    print()

# Actividad 3
def pedirEnRestauranteSN():
  pedidoSN = input("¿Te gustaría ordenar algo? (Ingresa S/N): ")
  return pedidoSN

# Actividad 4
def verificarArticuloPedido(articulo):
  if '-' not in articulo:
    return False
  nombreArticuloYCantidad = articulo.split('-')
  if nombreArticuloYCantidad[0] not in dictMenu:
    return False
  if int(nombreArticuloYCantidad[1]) <= 0:
    return False
  return True

# Actividad 4
def esPedidoCompleto():
  respuesta = input("¿Te gustaría pedir otro artículo? (Ingresa S/N): ")
  while respuesta != 'S' and respuesta != 'N':
    respuesta = input("¿Te gustaría pedir otro artículo? (Ingresa S/N): ")
  if respuesta == 'S':
    return True
  if respuesta == 'N':
    return False

# Actividad 5
def crearDictArticulosPedido(articulosPedido):
  dictArticulos = {}
  for articulo in articulosPedido:
    nombreArticulo = articulo.split('-')[0]
    cantidadArticulo = int(articulo.split('-')[1])
    if nombreArticulo not in dictArticulos:
      dictArticulos[nombreArticulo] = cantidadArticulo
    else:
      dictArticulos[nombreArticulo] += cantidadArticulo
  return dictArticulos

# Actividad 5
def calcularPrecios(dictArticulos):
  dictArticuloYPrecio = {}
  for i in dictArticulos:
    precioTotalArticulo = dictArticulos[i] * dictMenu[i][0]
    dictArticuloYPrecio[i] = precioTotalArticulo
  return dictArticuloYPrecio

# Actividad 5
def calcularPrecioTotal(dictArticuloYPrecio):
  precioTotal = 0
  for i in dictArticuloYPrecio:
    precioTotal += dictArticuloYPrecio[i]
  return round(precioTotal,2)

# Actividad 6
def imprimirRecibo(dictArticuloYPrecio, precioTotal):
  print("-----Recibo-----")
  for i in dictArticuloYPrecio:
    print(i, " $"+str(dictArticuloYPrecio[i]))
  print("Precio Total: ", "$"+str(precioTotal))

def main():
  # Actividad 1
  print(r"    _   _   _   _   _   _   _   _   _   _  ")
  print(r"   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ ")
  print(r"  ( r | e | s | t | a | u | r | a | n | t )")
  print(r"   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

  # Actividad 3
  imprimirMenu()
  pedidoSN = pedirEnRestauranteSN()

  while pedidoSN != 'S' and pedidoSN != 'N':
    print("¡Lo siento! Esa no es una respuesta válida, por favor intenta nuevamente.")
    imprimirMenu()
    pedidoSN = pedirEnRestauranteSN()

  # Actividad 4
  listaArticulosPedido = []

  if pedidoSN == 'N':
    print("¡Adiós!")
  else:
    pedidoCliente = input("Por favor ingresa el nombre y la cantidad del primer artículo que quisieras pedir. (Ejemplo: Rollos de Primavera-2):")
    while verificarArticuloPedido(pedidoCliente) == False:
      print("Ese es un formato inválido. Intenta nuevamente.")
      pedidoCliente = input("Por favor ingresa el nombre y la cantidad del primer artículo que quisieras pedir. (Ejemplo: Rollos de Primavera-2):")
    listaArticulosPedido.append(pedidoCliente)
    while esPedidoCompleto() == True:
      pedidoCliente = input("Por favor ingresa el nombre y la cantidad de un artículo que quisieras pedir. (Ejemplo: Rollos de Primavera-2):")
      while verificarArticuloPedido(pedidoCliente) == False:
        print("Ese es un formato inválido. Intenta nuevamente.")
        pedidoCliente = input("Por favor ingresa el nombre y la cantidad de un artículo que quisieras pedir. (Ejemplo: Rollos de Primavera-2):")
      listaArticulosPedido.append(pedidoCliente)
    # Actividad 5
    dictArticulos = crearDictArticulosPedido(listaArticulosPedido)
    dictArticuloYPrecio = calcularPrecios(dictArticulos)
    precioTotal = calcularPrecioTotal(dictArticuloYPrecio)
    # Actividad 6
    imprimirRecibo(dictArticuloYPrecio, precioTotal)

    # Actividad 7
    print("   _   _   _   _   _   _     _   _   _     _   _   _   _   _   _   _  ")
    print("  / \ / \ / \ / \ / \ / \   / \ / \ / \   / \ / \ / \ / \ / \ / \ / \ ")
    print(" ( G | r | a | c | i | a | s ) ( p | o | r ) ( v | e | n | i | r | ! )")
    print("  \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ \_/ ")

main()
```
