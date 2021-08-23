const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//code GP
const poolGP = require('./app/config/configDB_GP_TEST');
//-------------------


const app = express();
const db  = require("./app/models");
// db.sequelize.sync({
//     force: true}).then(() => {
//     // In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
//     console.log("Drop and re-sync db");
// });
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to RomB29 application." });
});

// simple route
// app.post("/TESTGP", async function(req, res) { 
//     //ajout du truc dans la bdd
//     try {
//         const sql = 'INSERT INTO tutorials VALUES (3, "' + req.body.usernameGivenByRequest + '","Add by using POST request with Postman", 1, NOW(), NOW() )';
//         console.log("SQL query = " + sql)
//         const rows = await poolGP.query(sql); // pool --> sémaphore
//         console.log(rows.length);
//         console.log('---------------------------');
//         console.log(rows);
//         res.send("Job done by " + req.body.usernameGivenByRequest);
//     } catch (e) {
//         console.error(e);
//         res.send("Error ! See console Log")
//     }
// });


// // simple route
// app.get("/TESTGP", async function(req, res) { 
//     //ajout du truc dans la bdd
//     try {
//     const sql = 'SELECT * FROM tutorials ';
//         console.log("SQL query = " + sql)
//         const rows = await poolGP.query(sql); // pool --> sémaphore
//    console.log(rows.length);
//         console.log('---------------------------');
//         console.log(rows);
//         res.json(rows);
//     } catch (e) {
//         console.error(e);
//         res.send("Error ! See console Log")
//     }
// });

// set port, listen for requests
require("./app/routes/tutorial.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});