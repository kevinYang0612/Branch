const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>
{
    res.send("hello");
});

app.listen(3000, ()=>
{
    console.log("Server started on port 3000");
});
