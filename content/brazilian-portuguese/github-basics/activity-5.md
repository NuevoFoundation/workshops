---
title: "Sala 5: O Desfiladeiro do Conflito"
description: "Aprenda a resolver conflitos de merge e sincronizar com o repositório original."
difficulties: ["avançado"]
weight: 5
---

# Sala 5: O Desfiladeiro do Conflito

Você entra em uma sala com um profundo abismo. Duas pontes se estendem de cada lado, mas não se encontram no meio. Uma placa diz: "Apenas resolvendo conflitos você poderá atravessar."

## Sua Missão

1. Faça o pull das alterações mais recentes do repositório original.  
2. Resolva o conflito de merge que aparecer.  
3. Commit a resolução e envie as alterações.  

## Instruções

1. Adicione o repositório original como um remoto:

```
git remote add upstream https://github.com/CodeDungeon/escape-room.git
```

2. Busque e mergeie as mudanças:

```
git fetch upstream
git merge upstream/main
```

3. Você verá um conflito de merge. Abra o(s) arquivo(s) em conflito e resolva os conflitos.  
4. Após resolver, adicione, commit e envie as alterações:  

```
git add .
git commit -m "Resolver conflito de merge"
git push origin main
```

{{< notice info >}}
**Dica:** Procure pelos marcadores de conflito (`<<<<<<<`, `=======`, `>>>>>>>`) nos arquivos. Escolha quais alterações manter ou combine-as conforme necessário.
{{< /notice >}}

{{< expand "Exemplo de um Conflito de Merge" >}}
```diff
<<<<<<< HEAD
Este é um conteúdo do seu branch atual.
=======
Este é um conteúdo em conflito do branch que você está integrando.
>>>>>>> upstream/main
{{< /expand >}}

<label for="finput">Depois de resolver o conflito, qual foi a linha final do arquivo em conflito? Insira abaixo:</label><br>
<input type="text" id="finput" name="finput"><br>

{{< notice success >}}
Trabalho excepcional! Você conquistou o Desfiladeiro do Conflito e completou todos os desafios. Agora você é um mestre do GitHub!
{{< /notice >}}