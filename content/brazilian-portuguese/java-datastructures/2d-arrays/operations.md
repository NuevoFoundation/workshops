---
title: "Operações"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 3
---

Os arrays 2D funcionam de maneira muito semelhante aos arrays regulares, e muitas das ideias ou métodos que usamos nos arrays também se aplicam aos arrays multidimensionais. Como um lembrete rápido, veja como inicializar um array 2D e acessar um elemento:

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    arr[0][0] = 1; 
    System.out.println(arr[0][0]); 
} 
    // Saídas 1
```

A única parte difícil que pode não fazer muito sentido no início é iterar por meio de um array 2D, mas isso também é bastante simples. Em vez de um único loop (laço) `for`, usaremos dois loops `for`. Aqui está um exemplo rápido para você ter uma ideia.

```js javascript
public static void main(String[] args) { 
    int[][] arr = new int[10][20]; 
    int num = 0;

    // Iterar sobre o array de arrays
    for (int i = 0; i < arr.length; i++) {

        // Iterar sobre um array individual dentro do array 2D
        for (int j = 0; j < arr[i].length; j++) {

            // Acesse valores individuais
            arr[i][j] = num;
            num++;
        }
    }
} 
```

Como você pode ver, criamos um array vazio chamado `arr`. Nele, temos `10` arrays, cada um com `20` elementos respectivamente. Para iterar por todos os arrays, usamos um loop `for` padrão, assim como faríamos com um array normal. No entanto, a única diferença é que agora precisamos criar um segundo loop `for` que itera através do `i`ésimo array. Neste exemplo, simplesmente definimos `arr[i][j]` como `num` e `num++`.