var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var root = __dirname;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './')));


app.listen(9000, function(){console.log("Listening on port 9000");
})