var mysql = require('mysql');

var connMySql = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
};

module.exports = function() {
    return connMySql;
};