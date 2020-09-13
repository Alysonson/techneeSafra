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

### Banco de dados (MySql e Docker)
Banco de dados local para receber as informações do chatbot e gravá-las.

### BackEnd (Node.js)
Integra as partes da aplicação. Conecta com o bot do dialogflow. Recebe as informações que o usuário digita como resposta no bot.
Envia as informações das variáveis para o banco local.

