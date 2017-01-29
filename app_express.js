/* CONNECT TO DATABASE*/
var express    = require('express');
var mysql  = require('mysql');
var app = express();


/*CONNECTION DETAILS*/
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'rwd_meta_mdh'
});


/*CONNECTION OK?*/
dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

/*SENDS THE HTML TO THE WEBPAGE!!!*/
app.get('/',function(req,res){

  dbconn.query('SELECT * FROM RWD_META_MDH.users',function(err, rows, fields){

  dbconn.end();
    if(!err)  {
      console.log('Data received from Db\n');
	  console.log(rows[1].firstname);
	  res.send('<h1>Hello</h1>, ' + rows[1].firstname);
	  }
    else 
      console.log('Error whiile performing Query');
   });
});

app.listen(3000);/*PORTNUMBER - visit localhosdt:3000 */