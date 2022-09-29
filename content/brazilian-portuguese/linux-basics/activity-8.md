---
title: "Atividade 8 - Verificando diferenças entre arquivos"
description: "Aprendendo sobre os commandos do Linux  para comparar  arquivos"
date: 2022-09-22
difficulty: "Intermediário"
weight: 11
---

<iframe style="display: block; margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/fAI1kyAoVTA" alt="Um vídeo do YouTube sobre a atividade 8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Vamos dar uma olhada na nossa mensagem secreta para ter certeza de que esse arquivo estranho chamado malware.sh não fez nada com ela!
    </div>
</div>

## Verificando diferenças entre arquivos

Conhecemos algum comando que pode nos ajudar a encontrar a localização do arquivo `secret-message.txt`?

![comando find](../images/Act8.1.png?classes=border,shadow)

Agora, vamos entrar nesse diretório e verificar a citação "**Ser. Ou não ser. Eis a questão**" de antes. Mas qual seria o comando que pode nos ajudar a verificar a mensagem?

![comando grep](../images/Act8.2.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Este arquivo geralmente tem citações boas e divertidas, mas parece que alguém as modificou. Acho que devemos compará-las com uma boa versão conhecida desse arquivo. Vamos lá?
    </div>
</div>

Precisamos verificar se existe alguma cópia de segurança da mensagem secreta em seu diretório. Vá para o diretório de documentos e digite:

```
ls -la
```

{{% notice tip %}}
O argumento `-a` fornece informação de todos arquivos e diretórios incluindo arquivos e diretórios ocultos.
{{% /notice %}}

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Encontrou algum arquivo novo? Então vamos anotar as mudanças!
    </div>
</div>

## Compare o arquivo secret-message.txt com o arquivo da cópia de segurança

O comando `diff` é usado para comparar dois arquivos e obter informações sobre o que foi adicionado, alterado e excluído do arquivo.  
O formato é: `diff [arquivo] [nome do arquivo de comparação]`

{{% notice info %}}
Curiosidade: Executar `diff --help` produzirá informações sobre como usar a ferramenta `diff`, incluindo quais opções extras podemos usar para essa ferramenta.
{{% /notice %}}

Verifique a diferença entre os dois arquivos. Quantas diferenças você encontrou? Anote suas descobertas no arquivo que você fez!

{{% notice tip %}}

### Uma maneira melhor de ver as diferenças

O comando `vimdiff` permite a visualização dos arquivos em abas separadas, destacando as diferenças entre esses arquivos.

Vamos tentar usar `vimdiff` para visualizar melhor as diferenças entre os nossos arquivos.
{{% /notice %}}
