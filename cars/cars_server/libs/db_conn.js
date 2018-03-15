const mysql = require('mysql');

const db = mysql.createConnection({
  host : 'localhost',
  user: 'root',
  database: 'a4app_users'
});
db.connect(err => {
  if(err){
    throw err;
  }
  console.log('MySql Connected...')
})

module.exports = db