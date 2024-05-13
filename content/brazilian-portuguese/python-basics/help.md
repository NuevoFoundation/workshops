---
title: "Socorro, estou preso!"
description: "Configurando fones de ouvido"
date: 2019-07-23T11:45:38-07:00
weight: 12
prereq: "Nenhum"
difficulty: "Iniciante"
draft: false
---
##### Sem problemas! Veja se alguma das opções a seguir ajuda você; caso contrário, sinta-se à vontade para entrar em contato com um de nós e nós o ajudaremos.

1. O recuo é muito importante quando você está trabalhando em Python. Tenha cuidado com espaços e tabulações em seu código, porque erros de indentação (um espaço no começo de uma linha escrita ou de um paragrafo) às vezes podem ser muito difíceis de detectar.

    ![IndentationError: esperava um bloco recuado](../img/screenshot-indentationerror.png)

    No entanto, pelo lado positivo, a formatação estrita torna o código Python muito limpo e organizado. Todas as suas variáveis ​​e funções estão recuadas corretamente como
    instruído?
2. SyntaxError: sintaxe inválida
    Verifique se suas palavras-chave estão escritas corretamente e se você está seguindo a estrutura definida.

3. IndentationError: recuo inesperado
    Se você vir isso, verifique seus recuos.

4. NameError: nome global \'\-\--\' não está definido
    Variáveis ​​definidas em uma função só podem ser usadas dentro da função. Se você tentar usar uma variável de uma função em outra função, receberá este erro.
    
    Para disponibilizar informações para outras funções, você as passa de uma função com a instrução `return`, possivelmente atribuindo-as a uma variável. Então você passa para outra função usando um parâmetro. Veja o link do tutorial de funções na minha assinatura para uma explicação detalhada.

5. Não é possível reconhecer o erro: erro ortográfico?
    Você geralmente recebe isso quando comete um erro ortográfico em suas palavras-chave. Verifique todas as suas palavras-chave.

6. TypeError: Não é possível converter o objeto 'int' em str implicitamente
    Verifique se você não está tentando usar um número inteiro em ações de string (você não pode concatenar uma string e um número inteiro. Você deve primeiro converter o número inteiro em uma string).
