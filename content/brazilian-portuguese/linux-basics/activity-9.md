---
title: "Atividade 9 - Removendo arquivos maliciosos"
description: "Aprendendo sobre os commandos do Linux para deletar arquivos e diretórios"
date: 2022-09-22
difficulty: "Intermediário"
weight: 12
---

<iframe style="display: block; margin: auto;" width="560" height="315" src="https://www.youtube.com/embed/mLsJXEIsadE" alt="Um vídeo do YouTube sobre a atividade 9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Então o arquivo malware.sh é definitivamente um arquivo ruim deixado pelos hackers? Hmm! Até o diretório foi comprometido? Precisamos urgentemente remover esse diretório junto com o arquivo malicioso!
    </div>
</div>

## Removendo um arquivo corrompido!

O comando `rm` permite remover arquivos.  
O formato é: `rm [nome do arquivo]`.

{{% notice warning %}}
O comando `rm` remove permanentemente um arquivo.
{{% /notice %}}

Vamos remover o arquivo corrompido que está nos causando problemas.
Apos, usaremos o comando `ls -l` para verificar se o arquivo foi totalmente removido.

![comando rm](../images/Act9.1.png?classes=border,shadow)

---

## E se precisarmos remover um diretório?

O comando `rmdir` permite remover um diretório vazio.  
O formato é: `rmdir [nome do diretório]`.

{{% notice warning %}}
O comando `rmdir` remove permanentemente um diretório.
{{% /notice %}}

Como podemos remover o diretório em que o arquivo inválido estava?

![comando rmdir](../images/Act9.2.png?classes=border,shadow)

{{% notice warning %}}
Remover arquivos pode ser uma operação perigosa, especialmente no Linux. Certifique-se de ter **100%** de certeza de que o arquivo que deseja excluir é seguro para remover. Ao remover o arquivo errado, você pode acidentalmente arruinar o seu computador.
{{% /notice %}}

Você se lembra do comando para refazer o diretório que excluímos?

![comando mkdir](../images/Act9.3.png?classes=border,shadow)

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Qual seria o comando que nos ajudaria a restaurar o arquivo secret-message.txt?
    </div>
</div>
