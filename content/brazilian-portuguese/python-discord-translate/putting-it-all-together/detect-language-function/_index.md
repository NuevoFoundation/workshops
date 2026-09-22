---
title: "Função Detectar Idioma"
draft: false
weight: 1
---

Esta função descobre se uma mensagem está escrita em inglês ou espanhol. É como ter alguém que pode instantaneamente dizer qual idioma está ouvindo!

## A Função `detect_language()`

Aqui está o código que pergunta ao LibreTranslate "qual idioma é este?":

```python
def detect_language(text):
    """Pergunta ao LibreTranslate qual é o idioma deste texto (en/es)."""
    try:
        data = {"q": text}
        response = requests.post("http://127.0.0.1:5000/detect", json=data, timeout=5)
        result = response.json()
        if result and len(result) > 0:
            language = result[0]["language"]
            if language in ["en", "es"]:
                return language
        return None
    except requests.exceptions.Timeout:
        return None
    except requests.exceptions.ConnectionError:
        return None
    except Exception:
        return None
```

## Como Funciona

1. **Enviar o texto**: Enviamos a mensagem para o LibreTranslate.  
2. **Obter uma resposta**: O LibreTranslate nos informa qual idioma ele acha que é.  
3. **Verificar se podemos usar**: Trabalhamos apenas com inglês (`en`) ou espanhol (`es`).  
4. **Tratar problemas**: Se algo der errado, retornamos `None` (que significa "não sei").  

## O Que o Bot Faz Com Isso

Quando alguém envia uma mensagem, o bot:
- Usa esta função para descobrir o idioma.  
- Ignora mensagens que não são em inglês ou espanhol.  
- Decide quem precisa de uma tradução.  

## Exemplo

Quando alguém digita "Hello world", o LibreTranslate retorna algo como:
```json
[
  {
    "language": "en",
    "confidence": 0.95
  }
]
```

A função extrai `"en"` disso e o retorna.

{{< alert theme="info" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Dica do Nuvi:</strong> Inicie o LibreTranslate com `--load-only en,es` para carregar apenas inglês e espanhol, garantindo um início mais rápido.
{{< /alert >}}

## Problemas Comuns

| O Que Está Errado       | Como Corrigir               |
|-------------------------|-----------------------------|
| Sempre retorna `None`   | Verifique se o LibreTranslate está funcionando |
| Identifica o idioma errado | Tente digitar mensagens mais longas |
| Demora muito            | O limite de 5 segundos pode ser curto demais |