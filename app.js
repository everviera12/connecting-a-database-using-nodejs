const mysql = require("mysql");
const connect = mysql.createConnection({
  host: "127.0.0.1",
  database: "prueba",
  user: "root",
  password: "root123",
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
