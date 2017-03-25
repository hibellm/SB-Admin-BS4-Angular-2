var express    = require("express");
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database : 'sakila',
  debug    :  false
});

//Connection
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

app.get("/",function(req,res){
//Query
con.query('SELECT * FROM actor',function(err,rows){
  if(err) throw err;
  console.log('Data received from Db:\n');
  console.log(rows);
});
});

app.listen(3000);

//Terminate
//con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
//});