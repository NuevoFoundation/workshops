---
title: "Execute o LibreTranslate Localmente"
draft: false
weight: 1
---

Nuvi quer traduções rápidas e privadas—então você vai hospedar o “cérebro” da tradução diretamente na sua máquina.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Nuvi diz:</strong> Manter local significa sem atraso na internet e mais privacidade para projetos de prática.
{{< /alert >}}

## 1. Adicione ao requirements.txt
Abra o arquivo `requirements.txt` do seu projeto e adicione (ou confirme que estas linhas estão presentes):
```text
libretranslate
requests
```
Salve o arquivo.

### Instale usando o terminal do VS Code
Para abrir o terminal, você pode:
- Usar o menu: Visualizar → Terminal
- OU pressionar o atalho de teclado: `Ctrl+`` (tecla acento grave, usualmente acima do Tab). No macOS é `Cmd+``.
- OU clicar na aba Terminal / ícone de mais (+) na parte superior da área do painel.

1. Certifique-se de que seu ambiente virtual está selecionado (procure por `.venv` na barra de status inferior). Se não estiver, selecione-o.
2. Abra um novo terminal no VS Code (``Ctrlxd+` ``).
3. Execute:
```pwsh
pip install -r requirements.txt
```
4. Aguarde a instalação finalizar sem erros.
5. (Opcional) Liste os pacotes instalados para verificar:
```pwsh
pip show libretranslate
```

---

## 2. Execute o LibreTranslate Localmente
Inicie o servidor no terminal (mantenha esta janela aberta enquanto testa):

```bash
libretranslate --load-only en,es
```
Isso iniciará o servidor com suporte para tradução em inglês e espanhol—os dois idiomas que Nuvi quer suportar primeiro.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Dica de Nuvi:</strong> Precisa de mais idiomas depois? Reinicie sem `--load-only` ou adicione códigos (ex.: `--load-only en,es,fr`).
{{< /alert >}}

Na primeira execução, pode ser necessário baixar os dados do idioma. Isso pode levar alguns minutos.

![Iniciando o LibreTranslate](../../media/libretranslate-starting.png)

Assim que finalizar, abra um navegador e acesse:
```
http://127.0.0.1:5000
```
Você verá uma página simples. Para ver os idiomas que o servidor suporta, visite:
```
http://127.0.0.1:5000/languages
```

---

## 3. Solução de Problemas
| Problema | Correção |
|---------|----------|
| `No module named libretranslate` | Certifique-se de que seu terminal mostra o texto (.venv) ou peça a ajuda de um adulto. |
| O servidor inicia e depois fecha | Leia o texto do erro; reinstale ou tente novamente. |
| Não consegue abrir 127.0.0.1:5000 | Certifique-se de que o servidor ainda está em execução; verifique o firewall. |
| Primeira tradução lenta | Os modelos ainda estão carregando. Espere um pouco. |
| Saída vazia / estranha | Certifique-se de que você usou POST com as chaves: `q`, `source`, `target`, `format`. |
| Porta já em uso | Use uma diferente: `python -m libretranslate --port 5001` e atualize a URL. |

---