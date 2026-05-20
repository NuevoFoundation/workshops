---
title: "Atividade 5 - Declare e use uma variável para a fonte"
date: 2019-07-29T13:24:17-07:00
weight: 7
draft: false
---

Você está indo muito bem! Agora vamos usar uma variável para mudar a fonte do texto no jogo.

Nesta atividade, você vai aplicar o que aprendeu sobre variáveis no workshop de Fundamentos de Python.

Encontre `# TODO (ACTIVITY 5)` no código.  
Declare a variável `font_label` e atribua a ela o valor `'arial'`.  
Agora dê uma olhada nesta linha no código: `font_name = pygame.font.match_font('arial')`.  
Será que você consegue descobrir em qual parte dessa linha a nova variável deve ser usada para controlar a fonte mostrada na tela?

{{% notice tip %}}

Você pode ver uma lista das fontes que seu computador suporta rodando `pygame.font.get_fonts()`.  
Tente usar uma fonte diferente de `'arial'`. Qual fonte você mais gostou? Pressione **Run** para ver o resultado.

{{% /notice %}}

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/PongLessonStudent" target="_blank">Abrir no Replit</a>

## O Que Você Aprendeu

Você acabou de modificar o parâmetro da fonte usando uma variável.  
Se você usar a mesma fonte em vários lugares no seu programa, basta mudar a variável em um só lugar e isso será refletido em todos os pontos onde a variável for usada!
