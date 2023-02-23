const mysql = require("mysql");
const connect = mysql.createConnection({
  host: "127.0.0.1",   //your host
  database: "prueba",  //name of your database
  user: "root",        //your user
  password: "root123", //ypur password
});

connect.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

connect.query("select * from persona", function (error, results, fields) {
  if (error) throw error;
  results.forEach((result) => {
    console.log(result);
  });
});

connect.end();
