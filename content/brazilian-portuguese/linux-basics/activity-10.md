---
title: "Atividade 10 - Aprendendo a mover e substituir arquivos"
description: "Aprendendo sobre os commandos do Linux para mover e copiar arquivos"
date: 2020-09-17
difficulty: "Intermediário"
weight: 13
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/LPcQW4oGK6g" alt="Um vídeo do YouTube sobre a Atividade 10 - Aprendendo a mover e substituir arquivos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Excelente! Agora que o arquivo malicioso dos hackers não nos causará mais problemas, vamos restaurar o arquivo antigo para que as coisas voltem a funcionar normalmente.
    </div>
</div>

### Como corrigir o nosso arquivo secreto

O comando `mv` também pode ser usado para substituir o arquivo de destino pelo arquivo de origem.  
O formato é: `mv [source filename] [destination name]`.

Agora, vamos substituir a mensagem secreta corrompida pelo backup que encontramos anteriormente.
E também vamos mover o arquivo para o novo diretório que criamos.

![comando mv](../images/Act10.1.png?classes=border,shadow)

---

### Salvando uma cópia de segurança dos nossos arquivos

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        O arquivo de backup anterior foi útil para corrigir o arquivo adulterado. Vamos fazer uma cópia de segurança dos arquivos em nosso diretório!
    </div>
</div>

O comando `cp` copia um arquivo de um logar para outro.
O formato é: `cp [arquivo atual] [arquivo destino]`.

Faça uma cópia do arquivo secreto `secret-message.txt`.

![comando cp](../images/Act10.2.png?classes=border,shadow)
