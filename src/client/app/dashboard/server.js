// server.js
// load the things we need
var express = require('express');
var app = express();
// CONNECT TO DATABASE
var mysql  = require('mysql');

//CONNECTION DETAILS
var dbconn = mysql.createPool({
  connectionLimit: 50,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'rwd_meta_mdh'
});

// set the view engine to ejs
app.set('view engine', 'ejs');


//SENDS THE HTML TO THE WEBPAGE!!!
app.get('/',function(req,res){

  dbconn.getConnection(function(err, tempCont){
     if(!!err) {
	     tempCont.release();
	     console.log('Error');
		 } else {
		      console.log('Connected!');
			  tempCont.query('SELECT * FROM RWD_META_MDH.users',function(err, rows, fields){
			    tempCont.release();
				if(!!err){
				   console.log('Error in the query');
				} else {
				    res.render('pages/index',{rows : rows});
		        }
    })
	}
  });
});


// use res.render to load up an ejs view file

/*
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});
*/
// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');