---
title: "Métodos"
date: 2020-02-10T13:24:17-07:00
draft: false
weight: 2
--- 

## Hashmaps

Um HashMap pode armazenar itens em pares chave/valor e você pode atribuir esses pares a diferentes tipos, como strings ou inteiros.

Como sempre, para criar um `HashMap`, você terá que importar a classe HashMap assim.

```js javascript
import java.util.HashMap; // importará o HashMap

HashMap<String, String> addresses = new HashMap<String, String>();
```
Neste caso, criamos um `HashMap` chamado endereços que armazena chaves do tipo `String` e valores do tipo `String`.


## Adicionando Elementos

Para adicionar pares chave/valor ao HashMap, use o método `put()`.

```js javascript
// Importe a classe HashMap
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Crie um objeto HashMap chamado capitalCities
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Adicione chaves e valores (país, cidade)
        addresses.put("Melissa", "Rua Foster nº 333. Conyers, GA 30012");
        addresses.put("Jun", "Avenida E. Wentworth nº 66. Annandale, VA 22003");
        addresses.put("Isabelle", "Avenida John nº 11. Champaign, IL 61821");
        addresses.put("Tom", "Rua Blue Spring nº 808. Colorado Springs, CO 80911");
  }
}
```
Como você pode ver, o código acima insere um par chave/valor em nossos endereços HashMap.

## Acessando Elementos

Para acessar um item em um `HashMap`, use o método `get()`.

```js javascript
// Importe a classe HashMap
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Crie um objeto HashMap chamado endereços
        HashMap<String, String> addresses = new HashMap<String, String>();

        // Adicione chaves e valores (nome, endereço)
        addresses.put("Melissa", "Rua Foster nº 333. Conyers, GA 30012");
        addresses.put("Jun", "Avenida E. Wentworth nº 66. Annandale, VA 22003");
        addresses.put("Isabelle", "Avenida John nº 11. Champaign, IL 61821");
        addresses.put("Tom", "Rua Blue Spring nº 808. Colorado Springs, CO 80911");
                                          
        String junAddress = addresses.get("Jun");
        System.out.println("Jun's address is: " + junAddress); //exibe o endereço de Jun
    }
}
```

Usando o método `get()`, chamamos `addresses.get("Jun")` e retorna o endereço de Jun.

Esses são alguns dos métodos mais básicos do HashMap. Outros métodos podem incluir o método `remove()`, que remove um item ou o método `size()` que retorna quantos itens estão no HashMap. Daremos mais exemplos para que você experimente na próxima página!
