---
title: "Teste uma Tradução"
draft: false
weight: 2
---

## Teste uma Tradução (Script Simples)
Nuvi precisa de uma prova de que o mecanismo tradutor realmente funciona antes de integrá-lo ao bot. Este pequeno script serve como essa prova.

Vamos enviar algum texto ao servidor usando um pequeno arquivo Python.

Crie um novo arquivo chamado `test_translate.py`:
```python
import requests

# Teste 1: Detecção de Idioma
print("Testando detecção de idioma...")
detect_payload = {"q": "Hello world!"}
detect_resp = requests.post("http://127.0.0.1:5000/detect", json=detect_payload)
print("Resultado da detecção:", detect_resp.json())

# Teste 2: Tradução
print("\nTestando tradução...")
translate_payload = {
    "q": "Hello world!",
    "source": "en",
    "target": "es",
    "format": "text"
}
translate_resp = requests.post("http://127.0.0.1:5000/translate", json=translate_payload)
print("Resultado da tradução:", translate_resp.json())
```

Execute o script (garanta que o servidor LibreTranslate ainda está em execução):
1. Abra `test_translate.py` no editor.
1. Clique no ícone Executar & Depurar (um botão de reprodução com um inseto) à esquerda.
1. Verifique o painel Debug Console / Terminal para ver a saída.

Você deverá ver algo como: `{'translatedText': '¡Hola Mundo!'}`

![Saída no terminal](../../media/test_terminal.png)

---

### O que está acontecendo aqui?
**biblioteca requests:** Uma biblioteca popular do Python que facilita a comunicação com sites ou servidores locais sem precisar escrever muito código de baixo nível.

**Requisição web:** Uma mensagem que seu programa envia a um servidor solicitando que ele faça algo (aqui: traduzir texto) e retorne uma resposta.

**Payload:** Os dados enviados junto com uma requisição. Neste script, `payload` representa os dados, como o texto a ser traduzido e os idiomas de origem/destino, armazenados como JSON.

**JSON:** Um formato de texto simples para dados. O servidor envia sua resposta como JSON para que diferentes programas e linguagens possam lê-la.

**resp.json():** Converte a resposta em JSON do servidor em algo que o Python pode interpretar.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Dica da Nuvi:</strong> Se você receber um erro de conexão, verifique se o terminal do servidor ainda está em execução e se a URL é `http://127.0.0.1:5000`.
{{< /alert >}}

**Endpoint:** A URL específica (`/translate`) no servidor que executa uma tarefa—neste caso, traduzir.

### Experimente Você Mesmo
1. Traduza uma frase diferente
1. Inverta a direção, traduzindo de espanhol para inglês
1. Adicione outro idioma!

Agora você conhece cada peça! A seguir, você conectará essa ideia ao seu bot do Discord para que os amigos da Nuvi finalmente possam se entender.