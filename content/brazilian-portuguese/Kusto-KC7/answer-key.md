---
title: "KC7: Jogo de Defesa Cibernética - Gabarito"
date: 2026-04-29T00:00:00-07:00
draft: false
weight: 15
hidden: true
---

{{% notice note %}}
Este é um documento de referência para professores do workshop KC7 Cyber Defender. Ele contém soluções de consultas KQL e metodologias para as Atividades 2-4. Os resultados numéricos exatos dependem do banco de dados ao vivo SecurityLogs e podem variar entre as sessões.

Também estão disponíveis vídeos explicativos para a Atividade 3.5 (respostas do KQL 101) e para a Atividade 4.5 (respostas de Pegue o Hacker).

As respostas de Bônus 1 e Bônus 3 são verificadas no placar KC7. O Bônus 2 é um exercício de análise aberto, sem gabarito fixo.
{{% /notice %}}

## Atividade 2: Jogo de Inteligência de Ameaças (Quem fez isso?)

Três perguntas baseadas em cenários de atribuição. Os alunos identificam o tipo de adversário.

| Pergunta | Cenário | Resposta | Raciocínio |
|----------|----------|----------|------------|
| 1 | Operações cibernéticas alinhadas ao governo | **C. Patrocinado por nação** | Direcionado, bem financiado, motivado politicamente |
| 2 | Ataque motivado financeiramente | **B. Criminoso cibernético** | Movido por dinheiro, alvo indiscriminado |
| 3 | Campanha cibernética dirigida por um estado | **C. Patrocinado por nação** | Financiado pelo governo, direcionado de forma seletiva, longo prazo |

{{% notice tip %}}
Assista ao vídeo da Atividade 2 para exemplos detalhados do mundo real por trás de cada cenário, incluindo o estudo de caso POLONIUM.
{{% /notice %}}

## Atividade 3: KQL 101

Essas perguntas ensinam os operadores básicos do KQL usando o banco de dados **SecurityLogs**. As consultas abaixo mostram a abordagem correta; os valores exatos dos resultados dependem dos dados ao vivo.

### Pergunta 1: Explore todas as tabelas com `take`

```KQL
Employees
| take 10

Email
| take 10

OutboundBrowsing
| take 10

PassiveDns
| take 10

AuthenticationEvents
| take 10

FileCreationEvents
| take 10

ProcessEvents
| take 10

SecurityAlerts
| take 10
```

**Objetivo:** Os alunos exploram o esquema de cada tabela para entender quais colunas e tipos de dados estão disponíveis.

### Pergunta 2: Quantos funcionários estão na empresa?

```KQL
Employees
| count
```

**Conceito esperado:** O operador `count` retorna o número total de linhas na tabela. Cada linha representa um funcionário.

### Pergunta 3: Qual funcionário tem o endereço IP 192.168.0.191?

```KQL
Employees
| where ip_addr == "192.168.0.191"
```

**Conceito:** O operador `where` filtra linhas. O operador `==` verifica uma correspondência exata.

### Pergunta 4: Quantos e-mails Betty Parrish recebeu?

```KQL
Email
| where recipient == "betty_parrish@envolvelabs.com"
| count
```

**Conceito:** Filtre a tabela Email pela coluna de destinatário, depois conte os resultados. O formato de e-mail segue `firstname_lastname@envolvelabs.com`.

### Pergunta 5: Quantos usuários receberam e-mails com "vaccine" no assunto?

```KQL
Email
| where subject has "vaccine"
| distinct recipient
| count
```

**Conceito:** Combine múltiplos operadores: `where` para filtrar, `distinct` para eliminar duplicados, `count` para totalizar. O operador `has` realiza uma correspondência de termos inteiros (baseada em limites de palavras), identificando "vaccine" como uma palavra completa no campo de assunto.

### Pergunta 6: Quantos sites únicos Keith Mitchell visitou?

Isso exige **pivotamento** entre duas tabelas:

```KQL
// Etapa 1: Descubra o endereço IP de Keith Mitchell
Employees
| where name == "Keith Mitchell"
```

```KQL
// Etapa 2: Use o IP dele para consultar OutboundBrowsing
OutboundBrowsing
| where src_ip == "[Keith's IP da Etapa 1]"
| distinct url
| count
```

Ou, usando uma declaração `let` para combinar ambas as etapas:

```KQL
let keith_ip = Employees
| where name == "Keith Mitchell"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (keith_ip)
| distinct url
| count
```

**Conceito:** Pivotamento: usar dados de uma tabela (Employees) para consultar outra (OutboundBrowsing). Essa é uma habilidade principal na análise cibernética.

### Pergunta 7: Quantos domínios em PassiveDns contêm "vaccine"?

```KQL
PassiveDns
| where domain contains "vaccine"
| distinct domain
| count
```

**Conceito:** O operador `contains` (não `has`) é necessário aqui, porque "vaccine" pode aparecer como parte de um nome de domínio mais longo.

### Pergunta 8: Para quais IPs "biotechenvolv.science" se resolveu?

```KQL
PassiveDns
| where domain == "biotechenvolv.science"
```

**Conceito:** Observe a coluna de endereço IP nos resultados para ver todos os IPs associados a este domínio.

### Pergunta 9: Quantos URLs únicos foram visitados por funcionários chamados "Karen"?

```KQL
let karen_ips = Employees
| where name has "Karen"
| distinct ip_addr;
OutboundBrowsing
| where src_ip in (karen_ips)
| distinct url
| count
```

**Conceito:** Esta consulta combina a declaração `let` com pivotamento. O `let` armazena o resultado da primeira consulta (IPs de Karen) para que possa ser reutilizado na segunda consulta.

{{% notice tip %}}
**Dica para professores:** A declaração `let` é um dos padrões mais poderosos do KQL. Incentive os alunos a nomear suas variáveis de forma descritiva (como `karen_ips` em vez de `x`) para tornar as consultas mais fáceis de ler.
{{% /notice %}}

### Referência rápida do KQL 101

| Operador | Objetivo | Exemplo |
|----------|---------|---------|
| `take` | Amostrar linhas de uma tabela | `Employees \| take 10` |
| `count` | Contar total de linhas | `Employees \| count` |
| `where` | Filtrar linhas por