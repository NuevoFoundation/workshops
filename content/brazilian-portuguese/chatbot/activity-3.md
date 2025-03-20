---
title: "Atividade 3: Adicione suas próprias categorias"
draft: false
weight: 7
---

## Adicione mais categorias

Atualmente, nosso bot só responde a "Olá". Vamos adicionar mais categorias para que nosso bot possa responder a mais coisas.

1. Se o usuário disser "Qual é o seu nome?" o bot deve responder "Meu nome é Chatbot".
2. Se o usuário disser "Qual é a sua cor favorita?" o bot deve responder "Minha cor favorita é azul".
3. Se o usuário disser "Qual é a sua comida favorita?" o bot deve responder "Minha comida favorita é pizza".

Como lembrete, aqui está a estrutura básica de uma categoria:

```
<category>
    <pattern>OLÁ</pattern>
    <template>
        Olá, Mundo!
    </template>
</category>
```

{{% notice tip %}}

Lembre-se: Ao escrever o padrão, use letras maiúsculas e evite usar pontuação. Então, se você quiser corresponder a "Qual é o seu nome?", você deve escrever o padrão como "QUAL É O SEU NOME".

{{% /notice %}}

{{% notice tip %}}

Lembre-se de salvar o arquivo sempre que modificar as categorias e quiser interagir com o chatbot.

{{% /notice %}}

Tente adicionar essas categorias ao seu bot e testá-las usando o widget de chat. Neste ponto, o bot deve responder a "Olá", "Qual é o seu nome?", "Qual é a sua cor favorita?" e "Qual é a sua comida favorita?".