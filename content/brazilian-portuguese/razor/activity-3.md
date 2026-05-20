---
title: "Atividade 3 - Criar um Aplicativo Web"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 7
---

## Instruções

### Criando um Projeto

1. Certifique-se de que o Visual Studio Code está aberto.

2. Na **barra de atividades**, selecione **Explorer**.

3. Selecione o botão **Criar Projeto .NET**.

    O command palette exibirá uma lista de tipos de projeto para selecionar.

4. Na lista, selecione **Blazor Server App**

5. Selecione a pasta onde deseja salvar seu novo aplicativo.

6. Dê um nome para o projeto.

    O aplicativo será criado e um menu **Solution** aparecerá no Explorer.

    <img src="../media/solution-explorer.png" alt="Captura de tela do Solution Explorer no VS Code" />

Agora você tem um site!
### Revise a estrutura do projeto Razor Pages

A tabela a seguir descreve a estrutura do projeto que foi gerada.

|Nome   | Descrição |
|-------|------------|
|Pages/ |Contém Razor Pages e arquivos de suporte. Cada página Razor possui um arquivo .cshtml e um arquivo de classe PageModel .cshtml.cs.|
|wwwroot/ |Contém arquivos de ativos estáticos como HTML, JavaScript e CSS. |
|ContosoPizza.csproj |Contém metadados de configuração do projeto, como dependências.|
|Program.cs| Serve como ponto de entrada do app e configura o comportamento do app, como roteamento.|

Outras observações importantes:

* Arquivos de página Razor e seus arquivos de classe PageModel pareados

    As páginas Razor são armazenadas no diretório Pages. Como mencionado acima, cada página Razor possui um arquivo .cshtml e um arquivo de classe PageModel .cshtml.cs. A classe PageModel permite separar a lógica e a apresentação da página Razor, define manipuladores de página para requisições e encapsula propriedades de dados e lógica com escopo para sua página Razor.

* Estrutura do diretório Pages e roteamento de requisições

    O Razor Pages usa a estrutura do diretório Pages como convenção para roteamento de requisições. A tabela a seguir mostra como as URLs são mapeadas para nomes de arquivos:

|URL| Mapeia para página Razor|
|---|---------|
|www.domain.com |Pages/Index.cshtml|
|www.domain.com/Index |Pages/Index.cshtml|
|www.domain.com/Privacy |Pages/Privacy.cshtml|
|www.domain.com/Error |Pages/Error.cshtml|

Subpastas no diretório Pages são usadas para organizar páginas Razor. Por exemplo, se houver um diretório Pages/Products, as URLs refletirão essa estrutura:

|URL |Mapeia para página Razor|
|-----|--------|
|www.domain.com/Products |Pages/Products/Index.cshtml|
|www.domain.com/Products/Index |Pages/Products/Index.cshtml|
|www.domain.com/Products/Create |Pages/Products/Create.cshtml|

* Layout e outros arquivos compartilhados

Existem vários arquivos que são compartilhados entre várias páginas. Esses arquivos determinam elementos de layout comuns e importações de página. A tabela a seguir descreve o propósito de cada arquivo.

|Arquivo |Descrição|
|-------|----------|
|_ViewImports.cshtml |Importa namespaces e classes usados em várias páginas.|
|_ViewStart.cshtml |Especifica o layout padrão para todas as páginas Razor.|
|Pages/Shared/_Layout.cshtml |Este é o layout especificado pelo arquivo _ViewStart.cshtml. Implementa elementos de layout comuns em várias páginas.|
|Pages/Shared/_ValidationScriptsPartial.cshtml |Fornece funcionalidade de validação para todas as páginas.|

### Execute seu projeto

1. Certifique-se de que o Visual Studio Code está aberto e que na **barra de atividades**, **Explorer** está selecionado.

2. No **Solution Explorer**, clique com o botão direito no nome do seu projeto, selecione **Debug** e depois **Start new instance**.

    Isso irá compilar e iniciar seu novo site.

    <img src="../media/website1.png" alt="Captura de tela do site que você acabou de criar" />

3. Clique nos links ***Counter*** e ***Fetch Data*** para navegar pelo seu site.

### Personalize a página inicial

Vamos fazer algumas alterações na página inicial para deixá-la mais relevante para o seu app.

1. Em *Pages/Index.razor*, adicione um bloco de código C# com o seguinte código:

```C#
@code {
TimeSpan timeInBusiness = DateTime.Now - new DateTime(2010, 01, 17);
}
```

O código acima:

* Calcula o tempo que passou desde a abertura do negócio.

2. Altere o elemento ```PageTitle``` para dizer "Bem-vindo à minha primeira página web"

3. Altere o ```h1``` para dizer "Bem-vindo ao meu primeiro aplicativo web Razor"

4. Substitua o texto restante pelo seguinte código:

```CSHTML
<p class="lead">O melhor site da cidade há @Convert.ToInt32(timeInBusiness.TotalDays) dias!</p>
```
O código acima:

* Exibe o número de dias que se passaram desde 17 de janeiro de 2010.
    * O caractere @ é usado para alternar de HTML para sintaxe Razor.
    * O método Convert.ToInt32 é usado para converter a propriedade TotalDays da variável timeInBusiness em um inteiro.
    * A classe Convert faz parte do namespace System, que é importado automaticamente pelo elemento ```<ImplicitUsings>``` no arquivo .csproj.

3. Salve o arquivo. Atualize a aba do navegador com o app para exibir as alterações.

<img src="../media/end-of-activity-3.png" alt="Captura de tela do site após as alterações da Atividade 3" />