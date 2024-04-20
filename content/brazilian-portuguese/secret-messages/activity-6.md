---
title: "Atividade 6 – Funções"
date: 2019-07-25T13:24:17-07:00
weight: 7
draft: false
---

Muito bem!

Você já fez muito do programa!

Nesta atividade usaremos **funções** para agrupar seções do código.

{{% notice tip %}}

### Funções
As funções nos permitem dividir o trabalho de um programa em tarefas menores separadas da seção principal, ou seja, da função `main`.

Podemos pensar nas funções como uma máquina que, ao ser ligada, executa instruções para retornar um resultado final. Você pode ter diversas máquinas que realizam processos diferentes, e identificamos cada uma delas com um nome, e o tipo de resultado que ela retorna.

Nesta atividade usaremos funções com o tipo de retorno **void** (vazio). Essas funções processam apenas instruções e não retornam nada.

Para declarar (criar) uma função, devemos usar a seguinte estrutura **fora da função principal**:
```
void name_function(){
    //Código aqui
}
```
Vamos analisar este código com mais detalhes:
1. O **tipo de retorno** da função indica o tipo de objeto que a função retornará. Neste caso, usamos `void` para especificar que esta função não retorna nada.
2. O **nome** desta função é `name_function`.
3. Os parênteses `()` são adicionados após o nome para identificar que se trata de uma função.
4. As chaves `{}` determinam o bloco de código que será executado quando usarmos a função.

### Chamando uma função

Como as funções que declaramos vão fora da função `main()`, quando pressionamos **Run**, o bloco de código que escrevemos nas funções não será executado. Portanto, dentro da função `main()` devemos **chamar** a função. Devemos informar ao programa quando queremos que aquele bloco de código seja executado. Para chamar uma função, devemos usar a seguinte instrução:
```
name_function();
```
Basta escrever o nome que demos à função, seguido dos parênteses e terminar com ponto e vírgula `;`.
Isso fará com que as instruções que estão dentro da função `name_function()` sejam executadas.

### Parâmetros de uma função
Quando declaramos uma função, podemos passar **parâmetros** para ela. Estes são objetos adicionais que a função pode usar para executar suas instruções.
Os parâmetros ficam entre parênteses da função. Por exemplo:
```
void name_function(int sum, int &number){
    number += sum;
}
```
E na função `main()` podemos chamar `name_function` com alguns parâmetros:
```
int main(){
    int x = 25;
    int y = 5;
    name_function(y, x);
}
```
Vamos entender em detalhes o que fizemos:
1. Ao declarar `name_function`, escrevemos entre parênteses quais variáveis ​​vamos passar para a função. Então, dentro do corpo da função, podemos usar essas variáveis.
2. Em `main`, já tínhamos duas variáveis ​​​​declaradas, que então passamos como parâmetros para a função criada `name_function`. Ao fazer isso, a variável `sum` é igual à variável `y`.
3. A variável `number` possui este símbolo `&` na frente. Isso significa que se modificarmos a variável dentro da função, a variável que passamos para ela na função principal também será modificada. Ou seja, a variável `x` será modificada pela função já que a passamos **por referência** ao escrever aquele símbolo na frente. Quando não colocamos este símbolo, mesmo que modifiquemos seu valor na função, não veremos essa mudança em `main`.
{{% /notice %}}

Isso é ótimo!
Agora, vamos criar 2 funções – uma para criptografar a mensagem e outra para descriptografá-la. Para isso usaremos um código que já tínhamos e programaremos algo novo também.

1. Primeiro, declare uma função do tipo de retorno `void`, assim como a criptografia, mas para descriptografar o nome. Nomeie esta função como `decrypt()`.

2. Copie o conteúdo da função `encrypt()` para a nova função `decrypt`.

3. Na variável `sum`, em vez de somar, subtraia o caractere do nome e o caractere da palavra-chave, e adicione uma letra `a` (em vez de subtrair) para que o caractere final seja uma letra do alfabeto e não algum personagem aleatório.

4. Altere a condição para entregar o alfabeto. Em vez de verificar se a `soma` é maior que o caractere `z`, verifique se a `soma` é menor que `a`; em caso afirmativo, adicione `25` à variável, em vez de subtrair.

5. Na função `main`, chame a função correspondente na condição `if` dependendo se queremos criptografar ou descriptografar uma mensagem.

Quando terminar, pressione **Executar** e tente os seguintes exemplos:
```
programmer
1
reina
```
```
witvczxipigrmg
2
reina
```
Você também deve tentar usar suas próprias palavras secretas!

{{< alert theme="warning" >}} **Atenção:** neste programa devemos sempre escrever as strings e caracteres em **letras minúsculas**. {{< /alert >}}

Lembre-se que você sempre pode voltar às atividades anteriores para revisar qualquer coisa!

<a class="my-2 mx-4 btn btn-info" href="https://replit.com/@nuevofoundation/activity-6-english" target="_blank">Iniciar Replit</a>

{{< alert theme="danger" >}}**Importante:** Para colar no console, clique com o botão direito no console e clique em "Colar". Caso contrário, a operação de colagem poderá não funcionar corretamente. {{< /alert >}}
