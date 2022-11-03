const express = require("express");
const bodyParser = require("body-parser")

const port = 4000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;

    res.send("The result is: " + result);
});

app.listen(port, function(req, res) {
    console.log(`The server is running on ${port} port!`);
})

