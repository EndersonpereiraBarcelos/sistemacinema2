const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000; //porta padrão
const mysql = require("mysql");
const db = require("../connectiondb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get("/", (req, res) => execSQLQuery("SELECT * FROM tb_atendimentos"));
app.use("/", router);
//app.use("/exitfiles", router);
/*
router.get("/exitfiles", (req, res) => {
  execSQLQuery("SELECT * FROM tb_atendimentos" );
});
*/
app.listen(port);
console.log("API funcionando!");
