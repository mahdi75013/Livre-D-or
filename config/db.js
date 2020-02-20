let mysql = require('mysql')

let connection= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "357896321AQS",
  database: "tuto",
  insecureAuth : true
});

connection.connect(function(err) {
  if (err) throw err;
  let sql = "DROP TABLE IF EXISTS messages";
  connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
  });
});

//module.exports = connection

