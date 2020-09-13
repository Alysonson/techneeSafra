# Programa TechNee Safra - Safra Green

## Objetivos
Este documento tem como objetivo apresentar as funcionalidades da aplicação web Safra Green, bem como instruções para sua utilização.

## Funcionalidades
### Plataforma Web (Js, HTML, CSS)
A plataforma conta com o front-end feito em javascript, HTML, CSS e BootStrap. Temos a páginas:
 * Inicial (index)
 * Login (x)
 * Informações sobre o produto com linhas de crédito para energia solar
 * Cálculo e demonstração do crédito em energia solar (vantagens)
 * Redirecionamento para página com chatbot que guiará o usuário para solicitação do crédito

### ChatBot (Dialogflow)
O chatbot recebe informações do usuário para realizar a solicitação de crédito.

### Banco de dados (MySql em container Docker)
Banco de dados local para receber as informações do chatbot e gravá-las.

### BackEnd (Node.js)
Integra as partes da aplicação. Conecta com o bot do dialogflow. Recebe as informações que o usuário digita como resposta no bot.
Envia as informações das variáveis para o banco local.

## Intruções de uso em servidor local
Após baixar a pasta contendo as aplicações em node.js, o banco de dados e as páginas web, seguir os passos abaixo.

### Configurando o docker
Nesta aplicação, utilizamos MySql em container docker, imagem docker do MySql 5.7. Para configurar no ambiente local:
* Instale docker e docker-compose.
* Pelo terminal, vá até a pasta onde está o arquivo docker-compose.yml.
* No mesmo terminal execute o comando: docker-compose up -d
  * Isso irá fazer o container rodar em background
  * Caso ainda não possua a imagem do mysql, ela será baixada e então o container executado
* Após finalizar execute o comando: docker container ls. Se for exibido uma linha com um container chamado mysql_dev o mesmo estará rodando.

### Compilando app.js no prompt de comando
Compilar a aplicação principal app.js utilizando ***node app.js*** no prompt de comando do windows. O webhook irá rodar na porta 8000, enquanto a aplicação estiver em uso.

### Utilizando o ngrok
O ngrok criará uma URL pública para acessar nosso localhost. Dessa forma, podemos inserir essa URL no DialogFlow do Google, local onde está hospedado nosso chatbot.
Dessa forma, conseguiremos acessar o bot através do nosso backend, extraindo as variáveis que são capturadas pelo bot ao conversar com o usuário.
* É necessário baixar o ngrok: [ngrok website](https://ngrok.com/).
* Após baixar, acessar a pasta em que o .exe encontra-se. No prompt de comando inserir ***ngrok http 8000***.
* Copiar a URL gerada pelo ngrok (a URL em https, última). Esta página ficará aberta para mostrar os status de ***POST*** do bot e para manter o token atual do ngrok.

### Dialogflow
O Google Dialogflow é uma plataforma de entendimento de linguagem natural. É utilizada para o desenvolvimento de aplicações que contam com um usuário conversacional, o chatbot. Pode ser utilizada em plataformas web, android, entre outros. [Dialogflow Link](https://dialogflow.cloud.google.com/).
* Após a criação e hospedagem do nosso chatbot, acessar a página de fulfillment.
* Inserir a URL gerada pelo ngrok e salvar.

### Acessando a webpage
Agora é só acessar a webpage principal do Safra Green. Nela, poderá navegar para fazer a simulação de crédito em energia solar, vendo as demonstrações, valores e benefícios.
Após verificar as informações, dar continuidade ao pedido de crédito, que guiará para a página do chatbot. O chatbot solicitará as informações necessárias para o usuário e enviará as informações para o banco local.

## Melhorias na implementação
Identificamos melhorias na implementação do protótipo, listadas abaixo.
* Deploy do código node.js e do banco de dados para uma plataforma como a ***Heroku***. Dessa maneira, a ferramenta não será implementada no servidor local, mas sim público.
* Após o deploy, inserir a URL pública do Heroku no dialogflow, fazendo com que não seja necessário utilizar o ***ngrok***
* Implementação de mais funcionalidades para o bot, tais como: recebimento de arquivos anexados e envio de e-mail de confirmação para o usuário.
* Implementação de componentes que permitam acessibilidade. No bot, por exemplo, recebimento de áudio e transcrição. 
