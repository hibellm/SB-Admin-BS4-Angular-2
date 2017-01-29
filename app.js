/* CONNECT TO DATABASE*/
var mysql  = require('mysql');
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

/* ACTION: INSERT DATA
var record= { firstname: 'Noemi', lastname: 'Gbsgb', email: 'xyz@domain.com' };

dbconn.query('INSERT INTO users SET ?', record, function(err,res){
  if(err) throw err;

  console.log('Last record insert id:', res.insertId);
});
*/
/*SELECT FROM THE TABLE
dbconn.query('SELECT * FROM RWD_META_MDH.users WHERE id = 3',function(err, records){
  if(err) throw err;

  console.log('Data received from Db:n');
  console.log(records);
});
*/
/* UPDATE EXISTING DATA 
dbconn.query('UPDATE RWD_META_MDH.users SET email = ? WHERE id = ?', ['new@domain.com', 3], function(err, result){
  if(err) throw err;

  console.log('Record Updated ' + result.changedRows + ' rows');
});
*/
dbconn.query('SELECT * FROM RWD_META_MDH.users WHERE id = 3',function(err, records){
  if(err) throw err;

  console.log('Data received from Db:n');
  console.log(records);
});

/*CLOSE CONNECTION*/
dbconn.end(function(err) {
  // Function to close database connection
});