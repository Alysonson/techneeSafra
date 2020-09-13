// Carrega Node Packages
express = require('express');
body_parser = require('body-parser');
request = require('request');
csv = require('csv-writer');
fs = require('fs');
mysql = require('mysql');
app = express();
port = process.env.PORT || 8000

// Conexão com banco local
var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "rootpasswd",
  database: "db_customers"
});

// Criação corpo app
app.use(body_parser.urlencoded({
    extended: false
}));

app.use(body_parser.json());

app.post('/webhook/', function (req, res) {
    content = req.body

    //Cria o header do arquivo .csv e o nome do arquivo
    /*createCsvWriter = require('csv-writer').createObjectCsvWriter;
    csv_writer = createCsvWriter({
      path: 'file.csv',
      header: [
        {id: 'user_cpf', title: 'User CPF'},
        {id: 'user_salary', title: 'User Salary'},
        {id: 'user_credit', title: 'User Credit'},
        {id: 'user_email', title: 'User Email'},        
      ],
      append : true
    });*/

//Cria variáveis para obter informações do bot do dialogflow
    data = [
      {
        user_cpf: content.queryResult.parameters.userCpf,
        user_salary: content.queryResult.parameters.userSalary,
        user_credit: content.queryResult.parameters.userCredit,
        user_email: content.queryResult.parameters.userEmail,
       
      }
    ];

// Insert na tabela do banco local
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    
      con.query("SELECT * FROM requisicoes_emprestimo", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    
      var sql = `INSERT INTO requisicoes_emprestimo (cpf, renda, valor_emprestimo, email) VALUES ('${data[0].user_cpf}','${data[0].user_salary}','${data[0].user_credit}','${data[0].user_email}')`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    
      con.query("SELECT * FROM requisicoes_emprestimo", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    
    });

    /*csv_writer
      .writeRecords(data)
      .then(()=> console.log('The CSV file was written successfully'));*/

// Finalização do processo, resposta ao bot
    response =  {
      "fulfillmentText": "Seus dados foram processados com sucesso! Em breve você receberá um retorno de sua solicitação. Obrigada pela confiança! :)"
    }
  
    res.send(response);
});


// Captura os requests
app.listen(port, function () {
    console.log('webhook is running on port', port)
})