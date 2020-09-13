USE db_customers;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

CREATE TABLE requisicoes_emprestimo (
    cpf varchar(11) not null,
    renda varchar(50),
    valor_emprestimo varchar(50),
    email varchar(200)
);