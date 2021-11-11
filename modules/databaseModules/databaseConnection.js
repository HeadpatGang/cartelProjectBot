var mysql = require('mysql2');
var config = require('../../json/config.json');
var connection = mysql.createConnection(config.mysql)
module.exports = {
    mysql,
    config,
    connection
}
var databaseTest = require('./databaseTest')
databaseTest.testDatabase()


