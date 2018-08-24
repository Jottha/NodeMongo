var mysql = require('mysql');

var connMySql = function(){
    console.log('Conexão com bd foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
};

module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com bd');
    return connMySql;
};