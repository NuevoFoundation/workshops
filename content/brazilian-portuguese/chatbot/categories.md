---
title: "Categorias"
draft: false
weight: 6
---

## Fundamentos de AIML
A unidade básica do AIML é a **categoria**. Uma categoria consiste em um padrão e um template. O **padrão** é o que o usuário diz ao bot. O **template** é a resposta que o bot dá ao usuário.

Olhando para o exemplo a seguir, podemos ver que o padrão é "OLÁ" e o template é "Olá, Mundo!". Quando o usuário diz "OLÁ", o bot responderá com "Olá, Mundo!". Note que a correspondência de padrões não diferencia maiúsculas de minúsculas, então o bot responderá a "olá", "OLÁ", "Olá" e "OlÁ" da mesma maneira.

```
<category>
    <pattern>OLÁ</pattern>
    <template>
        Olá, Mundo!
    </template>
</category>
```

{{% notice info %}}

Ao escrever o padrão, recomendamos escrever em letras maiúsculas e evitar usar pontuação. Então, se você quiser corresponder a "Qual é o seu nome?", você deve escrever o padrão como "QUAL É O SEU NOME". O Pandora removerá qualquer pontuação na entrada do usuário antes de corresponder ao padrão.

{{% /notice %}}