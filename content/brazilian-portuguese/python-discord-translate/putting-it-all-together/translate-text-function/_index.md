---
title: "Função de Tradução de Texto"
draft: false
weight: 2
---

Esta função realiza a tradução propriamente dita - ela pega o texto em um idioma e o transforma em outro!

## A Função `translate_text()`

Aqui está o código que faz a mágica acontecer:

```python
def translate_text(texto, idioma_origem, idioma_destino):
    """Traduz texto de um idioma para outro usando o LibreTranslate."""
    try:
        data = {
            "q": texto,
            "source": idioma_origem,
            "target": idioma_destino,
            "format": "text"
        }
        response = requests.post("http://127.0.0.1:5000/translate", json=data, timeout=10)
        result = response.json()
        return result.get("translatedText")
    except:
        return None
```

## O Que Cada Parte Significa

| Parte | O que faz | Exemplo |
|-------|-----------|---------|
| `text` | As palavras que você deseja traduzir | `"Hello world"` |
| `from_language` | O idioma original | `"en"` (Inglês) |
| `to_language` | O idioma para o qual você quer traduzir | `"es"` (Espanhol) |

## Como Funciona

1. **Empacotar as informações**: Colocamos o texto e os códigos de idioma em um pacote
2. **Enviar para o LibreTranslate**: Pedimos para ele traduzir
3. **Receber a tradução**: O LibreTranslate devolve o texto traduzido
4. **Se algo der errado**: Retorna `None` (significando "não foi possível traduzir")

## Exemplos de Uso

### Na Tradução Automática
```python
# Traduzir uma mensagem para o idioma desejado pelo usuário
translation = translate_text(message.content, detected_lang, preferred_lang)
if translation:
    # Enviar para o usuário!
```

### No Comando Manual
```python
# Inglês para Espanhol
result = translate_text("Hello", "en", "es")  
# Resultado: "Hola"

# Espanhol para Inglês  
result = translate_text("Gracias", "es", "en")
# Resultado: "Thank you"
```

## O Que o LibreTranslate Retorna

Quando funciona, você recebe algo como:
```json
{
    "translatedText": "Hola mundo"
}
```

## Quando Algo Dá Errado

A função retorna `None` quando:
- O LibreTranslate não está funcionando
- Problemas de conexão com a internet
- Códigos de idioma incorretos
- O texto é muito longo (timeout após 10 segundos)

{{< alert theme="warning" >}}
<img src="../../media/NF_mascot.jpg" alt="Mascote Nuvi" width="70px" style="float:right;margin:0 0 6px 10px;" />
<strong>Atenção:</strong> Mensagens muito longas podem levar mais de 10 segundos. Se isso acontecer com frequência, você pode ajustar o valor do timeout!
{{< /alert >}}

## Dicas para o Sucesso

1. **Sempre verifique se funcionou**: Certifique-se de que a função não retornou `None`
2. **Use os códigos corretos**: "en" para Inglês, "es" para Espanhol
3. **Mantenha mensagens razoáveis**: Textos super longos demoram mais
4. **Seja paciente**: A tradução leva um tempinho

## Onde o Bot Usa Isso

O bot chama essa função em dois lugares:
- **Tradução automática**: Quando alguém digita uma mensagem em outro idioma
- **Comando manual**: Quando alguém usa `/translate`