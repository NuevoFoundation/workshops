---
title: "Atividade 5 – Declarar e usar uma variável para fonte"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

Grande progresso até agora! Agora vamos usar uma variável para alterar a fonte do texto no jogo.

Nesta atividade, você precisa aplicar seu conhecimento sobre variáveis ​​que aprendeu no workshop Python: Fundamentos.

Encontre `# TODO (ACTIVITY 5)` no código. Declare a variável `font_label` e atribua a ela o valor `'arial'`. Agora dê uma olhada nesta declaração no código `font_name = pygame.font.match_font('arial')`. Você consegue descobrir onde nesta declaração essa nova variável deve ser usada para controlar a fonte exibida na tela?

{{% notice tip %}}

Você pode obter uma lista de fontes suportadas pelo seu computador executando `pygame.font.get_fonts()`. Tente usar uma fonte diferente de `'arial'`. Qual fonte você mais gosta? Pressione **Run** para ver o resultado.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Iniciar Replit</a>

## Aprendizado

Você acabou de modificar o parâmetro font usando uma variável. Se acontecer de você usar a mesma fonte em vários lugares do seu programa, você pode simplesmente modificar a variável em um lugar, e ela terá efeito em todos os lugares em que você usou a variável!
