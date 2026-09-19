---
title: "Sala 9: A Fortaleza da Segurança"
description: "Fortaleça seu repositório com os recursos de segurança do GitHub."
difficulties: ["avançado"]
weight: 9
---

Você entra em uma sala repleta de medidas de segurança. Travas, escudos e monitores de segurança te cercam. Uma voz severa declara: "Proteja seu código para prosseguir!"

## Sua Missão

1. Ativar os alertas do Dependabot para o seu repositório.  
2. Adicionar uma política de segurança ao seu repositório.  
3. Executar um alerta de varredura de código usando o GitHub Actions (se seu repositório for público).  

## Instruções

1. Acesse a aba "Configurações" do seu repositório.  
2. Clique em "Segurança e análise" na barra lateral esquerda.  
3. Ative os alertas do Dependabot.  
4. No seu repositório, crie um novo arquivo em `.github/SECURITY.md`.  
5. Adicione diretrizes básicas de segurança a este arquivo.  
6. Caso seu repositório seja público, ative a varredura de código nas configurações de "Segurança e análise".  

{{< notice danger >}}
**Importante:** Sempre tenha cautela ao lidar com configurações de segurança. Certifique-se de entender cada recurso antes de ativá-lo.
{{< /notice >}}

{{< expand "Exemplo de Política de Segurança" >}}

# Política de Segurança

## Relatando uma Vulnerabilidade

Se você descobrir uma vulnerabilidade de segurança neste projeto, envie um e-mail para security@example.com. Todas as vulnerabilidades de segurança serão tratadas prontamente.

## Versões Suportadas

Use esta seção para informar as pessoas sobre quais versões do seu projeto estão atualmente sendo suportadas com atualizações de segurança.

| Versão  | Suportada          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

{{< /expand >}}

Depois de configurar sua política de segurança, qual endereço de e-mail você especificou para relatar vulnerabilidades? Insira-o abaixo:

<label for="finput">Campo de entrada para endereço de e-mail:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Muito bem, especialista em segurança! Você fortaleceu seu repositório. Rumo ao desafio final!
{{< /notice >}}