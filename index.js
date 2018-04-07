const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const app = express();

const db = new sqlite3.Database("./Chinook_Sqlite_AutoIncrementPKs.sqlite");


const query = `SELECT * from Artist LIMIT 100`;

db.each(query, (err, row) => {
 if (err) throw err;
 console.log(row);
});


app.listen( process.env.PORT || 3000, ()=>{
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
