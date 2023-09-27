---
title: "Configuração do Android"
date: 2021-03-13T14:17:07.42-07:00
draft: false
weight: 2
---
Siga as etapas abaixo para instalar o Android Studio em seu computador. Se você já tiver o Android Studio instalado, abra-o e pule para a próxima etapa!

Essas etapas têm exemplos para instalação em computadores Windows. No entanto, as etapas são semelhantes para outros tipos de computadores também.

## Baixe e Instale o Android Studio
1. [Baixe o Android Studio](https://developer.android.com/studio/) para o seu sistema operacional.
2. [Siga estas etapas](https://developer.android.com/studio/install) para instalar o Android Studio.


## Defina a variável de ambiente JAVA_HOME
O Android Studio vem com uma versão do Java necessária para que certas partes do aplicativo funcionem. Siga as etapas abaixo para definir a variável de ambiente `JAVA_HOME` em seu computador, que informa a essas ferramentas onde encontrar o Java:
1. Na caixa de pesquisa no canto inferior esquerdo da tela, digite `env`.
2. Selecione o programa "Melhor correspondência" `Editar as variáveis de ambiente do sistema`.
<img src="../resources/_gen/images/edit_env_variable.png" height="30%" width="30%" title="Editar variáveis de ambiente do sistema" alt="Editar variáveis de ambiente do sistema"/>
3. Clique em `Variáveis de Ambiente...`.
4. `Novo...` na seção 'Variáveis do usuário'.
5. Digite JAVA_HOME como o nome da variável.
6. Copie o seguinte no valor da variável:
```
C:\Program Files\Android\Android Studio\jre
```
7. Clique em OK.
<img src="../resources/_gen/images/set_java_home.gif" height="40%" width="40%" title="Definindo JAVA_HOME" alt="mostra as etapas para definir a variável de ambiente JAVA_HOME"/>

{{% notice tip %}}
Recomendamos fortemente que você reinicie seu computador agora para que o Android Studio seja aberto corretamente.
{{% /notice %}}

## Inicie o Android Studio
Uma vez instalado, abra o Android Studio para trabalhar no aplicativo.

{{% notice tip %}}
Existem várias maneiras de iniciar o aplicativo Android Studio em seu computador Windows. Aqui estão dois métodos:
#### Método 1
1. Clique no ícone do Windows no canto inferior esquerdo do seu computador.
2. Percorra a lista até ver a pasta `Android Studio`.
3. Clique na pasta `Android Studio` para expandi-la.
4. Clique no aplicativo `Android Studio` na pasta para iniciar o Android Studio.

#### Método 2
1. Na caixa de pesquisa no canto inferior esquerdo da tela, digite `Android Studio`.
2. Na janela de resultados, se "Melhor correspondência" destacar `Android Studio`, clique no aplicativo `Android Studio` ou pressione `ENTER` no teclado.
{{% /notice %}}

## Abra os arquivos do projeto
1. Clique em `Abrir um projeto existente` na tela inicial do Android Studio.
2. Procure pelo local onde você baixou os arquivos do projeto.
3. Selecione a pasta 'TicTacToe' dentro da pasta 'TicTacToe' que você descompactou anteriormente.
 - A pasta 'TicTacToe' a ser selecionada deve ter um ícone verde do Android ao lado, indicando que é uma pasta de projeto Android.
<img src="../resources/_gen/images/open_android_project.gif" height="40%" width="40%" title="Abrir projeto TicTacToe" alt="Mostra como abrir o projeto TicTacToe no Android Studio"/>

Execute o Android Studio e abra o projeto. Sua visão será semelhante a esta:
<img src="../resources/_gen/images/android_studio.png" height="60%" width="60%" title="IDE do Android Studio" alt="Exemplo da IDE do Android Studio"/>

## Aceite as Licenças
Antes de poder executar o código, você precisará aceitar as licenças do Android seguindo as etapas abaixo:
1. Clique no botão `Terminal` na parte inferior da janela do Android Studio.
2. Digite o comando abaixo, substituindo '<usuário>' pelo nome de usuário do seu computador.
```
C:\Users\<USER_NAME>\AppData\Local\Android\Sdk\tools\bin\sdkmanager --licenses
```
3. Digite `y` e pressione `ENTER` nas solicitações, para aceitar as licenças. Isso será necessário várias vezes.
<img src="../resources/_gen/images/accept_licenses.gif" height="60%" width="60%" title="Aceitando licenças do Android" alt="mostra as etapas necessárias para aceitar as licenças do Android"/>
