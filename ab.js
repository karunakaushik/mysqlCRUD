const express = require("express")
const app = express();
const mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'root',
    port:'3306',

})

connection.connect((err)=> {
    if(err) throw err;

    console.log("DATABASE CONNECTED");//database connection
})
app.listen(process.env.port || 9000);       //starting server   
console.log('Running at Port 9000');

