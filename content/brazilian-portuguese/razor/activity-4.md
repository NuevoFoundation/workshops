---
title: "Atividade 4 - Adicionando uma nova página Razor"
date: 2023-09-12T11:45:38-07:00
draft: false
weight: 8
---

## Instruções

### Criar nova página

1. Certifique-se de que o Visual Studio Code está aberto e que na **barra de atividades**, **Explorer** está selecionado.

2. No **Solution Explorer**, ao lado do diretório **Pages**, selecione o botão **Adicionar novo arquivo...**.

<img src="../media/add-new-file.png" width="300" alt="Captura de tela do botão Adicionar novo arquivo" />

Isso exibirá uma lista de tipos de arquivo.

3. Selecione **Componente Razor** na lista.

<img src="../media/select-razor-component.png" width="300" alt="Captura de tela do comando para criar novo arquivo" />

4. Nomeie como ```todo``` e pressione **Enter**.

    Isso criará o arquivo e o abrirá no editor.

5. Em seguida, atualize a página para adicionar uma diretiva ```@page``` para que a página responda a /todo e adicione um título de página usando a tag ```<PageTitle>```.

### Adicionar link para a página na navegação

1. Localize a página do menu de navegação (**NavMenu.razor**) em **Shared** e abra-a.

2. Adicione um item de navegação para sua lista de tarefas acima de ***Buscar Dados*** copiando o ```<div>``` do Buscar Dados e alterando onde diz FetchData ou Fetch Data para Todo

3. No **Solution Explorer**, clique com o botão direito no nome do seu projeto, selecione **Depurar** e depois **Iniciar nova instância** para ver as alterações e visualizar sua To Do List.

<img src="../media/empty-todo.png" alt="Captura de tela da To Do List adicionada à página" />

### Criar a To Do List

1. Crie um novo arquivo de classe chamado TodoItem.cs para conter uma classe que representa o objeto todo.

No nível superior do seu projeto, clique no botão **Adicionar novo arquivo...** e selecione **Classe** na lista. Dê o nome de ```TodoItem```.

2. Adicione o seguinte código para que um TodoItem tenha um ```Title``` que é uma ```string``` e uma propriedade chamada ```IsDone``` que é um ```boolean```.

```csharp
public class TodoItem
{
    public string? Title { get; set; }
    public bool IsDone { get; set; }
}
```

3. Volte para o arquivo ```todo.razor``` e:
* No bloco @code, adicione um objeto List de ```TodoItem``` chamado todos. O componente Todo usa esse campo para manter o estado da lista de tarefas.
* Adicione um título (```<h3>```) chamado "Todo"
* Abaixo do título, adicione uma marcação de lista não ordenada (```<ul>```) e um loop foreach para renderizar cada item todo como um item de lista (```<li>```).
* Adicione um campo de texto (```<input>```) com um placeholder dizendo "Algo a fazer" e um botão (```<button>```) com o texto "Adicionar tarefa" abaixo da lista não ordenada

4. Ao clicar no botão **Adicionar tarefa**, nada acontece neste momento. Agora você precisará adicionar um manipulador de evento.

* Altere o botão para incluir uma ação **onclick**.
* No bloco ```@code```:
    * adicione uma nova string para armazenar o nome do novo todo.
    * adicione um novo método ```AddTodo``` que verifica se a nova string possui texto. Você pode fazer isso usando o método ```IsNullOrWhiteSpace``` da string. Se houver texto, crie uma nova instância de ```TodoItem``` com o texto como ```Title``` e adicione essa instância ao objeto ```List``` criado anteriormente.
    * Limpe o valor do campo de texto definindo ```newTodo``` como uma string vazia
* Modifique o elemento de texto ```<input>``` para vincular ```newTodo``` com o atributo ```@bind```.

5. Atualize a lista para que os títulos sejam editáveis (```<input>```) e adicione uma checkbox para marcar itens concluídos. Certifique-se de que você usa ```@bind``` na checkbox para a propriedade ```IsDone``` do ```todo```.

6. Atualize o ```<h3>``` para mostrar a contagem de tarefas que ainda não foram concluídas.

7. Salve e execute uma nova instância do seu app para testar.

<img src="../media/new-todo-list.png" alt="Captura de tela do app concluído" />