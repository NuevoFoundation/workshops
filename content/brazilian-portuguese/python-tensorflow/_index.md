---
title: "Python: fundamentos de machine learning usando TensorFlow"
description: "Aprenda a classificação básica de imagens e treine modelos de ML com o TensorFlow"
date: 2020-09-09T16:19:17-07:00
prereq: "Python: Fundamentos"
difficulty: "Intermediário"
image: ""
draft: false
icon: "fab fa-python"
---


## Bem-vindo ao TensorFlow!

Neste workshop usaremos a biblioteca TensorFlow Python para treinar um modelo de rede neural para reconhecer e classificar diferentes tipos de roupas. Veremos as etapas que permitem ao modelo fazer uma previsão da categoria de melhor ajuste para uma imagem específica.

## Primeiros passos com o Google Colab
Visite o [Google Colab](https://colab.research.google.com/), um ambiente de programação on-line semelhante ao Google Docs, mas para execução de código. Após fazer login em sua conta Google, clique na opção de criar um “Novo Notebook”. Para executar o código que você completou enquanto trabalha neste workshop, clique no botão “play” à esquerda.

Recomendamos que você organize seu código criando um novo bloco para cada segmento de código utilizado nas atividades do workshop. Além disso, leia os comentários nos blocos de código para entender melhor o que cada segmento de código faz.

{{% notice warning %}}
## É necessária uma conta do Google

Para usar o Google Colab para editar e executar código, você precisa estar conectado à sua conta do Google (ou conta escolar com acesso aos serviços do Google/Google Drive).

## Não tem uma conta do Google?
Se você não possui uma conta do Google e não consegue criar uma, entre em contato com qualquer um dos administradores da Nuevo Foundation para obter acesso temporário a uma conta Nuevo apenas para este workshop. Lembre-se de que o Google Colab é necessário para este workshop para que você possa executar todo o código.

{{% /notice %}}

{{% notice note %}}
Ao executar seu código pela primeira vez, certifique-se de executá-lo clicando em _Runtime -> Run all_ na barra de menu para executar todos os seus trechos de código sequencialmente. Isso é para garantir que você não execute funções acidentalmente sem importar as bibliotecas primeiro!
![Introdução do Colab](media/colab_intro.png)

{{% /notice %}}

## Tabela de Conteúdos
<details>
<summary>Seções</summary>
{{% children /%}}
</details>

<br>

<a href="https://www.tensorflow.org/tutorials/keras/classification" target="_blank">Trabalhos citados</a>
