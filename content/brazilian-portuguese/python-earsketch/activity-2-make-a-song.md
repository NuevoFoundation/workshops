---
title: "Atividade 2 – Faça uma música!"
description: "Configurando fones de ouvido"
prereq: "Python: Fundamentos. Impressão, comentários, funções"
difficulty: "Intermediário"
weight: 6
draft: false
---

Agora que você aprendeu como adicionar sons ao Earsketch, vamos tentar fazer uma música! Você já deve ter um clipe de áudio no Earsketch, mas
as músicas são compostas por vários instrumentos, por isso precisamos adicionar mais clipes de áudio.

1. Adicione outra chamada `fitMedia()`.
2. Encontre um clipe de áudio que você gostaria de adicionar à sua música atual e insira-o no parâmetro `fileName`.
3. O parâmetro `trackNumber` deve ser um número único. Isso nos permitirá colocar nossos sons em faixas diferentes. Ter sons diferentes em faixas diferentes nos permite manter a organização dos nossos sons e reproduzir sons diferentes ao mesmo tempo. Exemplo: Se a primeira chamada `fitMedia()` estiver na trilha 1, a segunda chamada `fitMedia()` deverá estar na trilha 2.
4. Preencha o restante dos parâmetros.
5. Repita essas etapas até ter quatro sons de áudio diferentes em sua música.

Seu código agora deve ser parecido com isto:
    {{% notice info %}}

    from earsketch import *\
    init()
    setTempo(120)\
    fitMedia(RD_TRAP_BELLLEAD_1, 1, 5, 9)
    fitMedia(YG_TRAP_STRINGS_2, 2, 1, 17) 
    fitMedia(YG_TRAP_ELECTRIC_PIANO_FILTERED_1, 3, 1, 17) 
    fitMedia(YG_TRAP_BASS_9, 4, 1, 9)\
    finish()

    {{% /notice %}}

![Robô compondo uma música](https://media.giphy.com/media/9RJRzvIuKGrL3tAchc/giphy.gif)