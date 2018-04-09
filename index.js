const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const app = express();

const db = new sqlite3.Database("./Chinook_Sqlite_AutoIncrementPKs.sqlite");




db.close();


app.listen( process.env.PORT || 3000, ()=>{
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});
