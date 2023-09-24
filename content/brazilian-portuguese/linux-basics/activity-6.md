---
title: "Atividade 6 - Um arquivo corrompido"
description: "Aprendendo sobre os commandos do Linux para procurar arquivos"
date: 2022-09-21
difficulty: "Intermediário"
weight: 9
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/OaXi1GN_93U" alt="Um vídeo do YouTube sobre a atividade 6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Eu sei que tinha um arquivo chamado secret-message.txt com uma das minhas citações favoritas nele. "Ser. Ou não ser. Eis a questão." Preciso encontrá-la. Você pode me ajudar?
    </div>
</div>

### Procurando padrões específicos em um arquivo?

O comando `grep` é um comando usado para pesquisar texto em arquivos. O seu significado é: "_pesquise globalmente por expressão regular e imprima o resultado_".
Ele ainda possui diferentes argumentos ou opções que podem alterar a forma como ele é usado.  
O formato é: `grep [argumento] “[padrão]” [nome do arquivo]`.

| Argumentos | Significado                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------------- |
| -c         | Retorna o número de arquivos com o padrão                                                          |
| -i         | Pesquisa arquivos ignorando as letras maiúsculas e minúsculas. “**uNiX**” é o mesmo que “**unix**” |
| -n         | Retorna o número de linhas e suas linhas correspondentes.                                          |
| -R         | Pesquisa todos os arquivos no diretório atual.                                                     |

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
            Vamos praticar este comando para podermos encontrar o meu arquivo secret-message.txt original!
    </div>
</div>

Vamos tentar o seguinte comando:

```
grep -R "Ser. Ou não ser. Eis a questão."
```

![commando grep](../images/Act6.1.png?classes=border,shadow)

---

### Por que o arquivo de mensagem secreta parece estranho?

<div style="margin: 1rem;padding: 2rem 2rem;text-align: center;">
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;">
        <img src="../images/nuvi.PNG?" alt="Uma foto de Nuvi" width="180" height="180" />
    </div>
    <div style="display: inline-block;padding: 1rem 1rem;vertical-align: middle;width:50%;border:5px solid #2980b9;border-radius:10px;font-weight: bold;">
        Você lembra daquele arquivo chamado malware.sh? Devemos encontrá-lo novamente e analisa-lo melhor. Acho que foi criado pelos hackers!
    </div>
</div>

O comando `find` filtra arquivos por parâmetros dentro de um diretório ou região de arquivos. Ele pode ser usado de várias maneiras, incluindo:

- Filtrar arquivos com um nome específico
  O formato é: `find [diretório] -name [nome do arquivo]`
- Filtrar todos os arquivos com uma extensão específica (por exemplo, arquivos de texto, terminando com .txt)
  O formato é: `find [diretório] -name *.txt`

Use o comando `find` para filtrar o arquivo dentro do diretório atual. Existe algum comando que podemos usar para descobrir qual é o diretório atual?

![comando find](../images/Act6.2.png?classes=border,shadow)
