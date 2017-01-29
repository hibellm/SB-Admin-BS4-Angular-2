/* CONNECT TO DATABASE*/
var express    = require('express');
var mysql  = require('mysql');
var app = express();


/*CONNECTION DETAILS*/
var dbconn = mysql.createPool({
  connectionLimit: 50,
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'rwd_meta_mdh'
});

/*SENDS THE HTML TO THE WEBPAGE!!!*/
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
				     res.json(rows);
		        }
    })
	}
  });
});

app.listen(3000);/*PORTNUMBER - visit localhost:3000 */