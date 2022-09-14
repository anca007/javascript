const mySql = require('mysql');

const con = mySql.createConnection({
    host : "localhost",
    user: "root",
    password : "",
    database: "legumes"
})


let price = 30;


//requête non préparée
con.connect(function (err){
    console.log(err);
    console.log("Connecté à la base")
    con.query("SELECT * FROM articles", function (err, result){
        console.log(err);
        console.log(result)
    })
    con.query("SELECT * FROM articles WHERE prix = ?", [price], function (err, result){
        console.log(err);
        console.log(result)
    })
})
