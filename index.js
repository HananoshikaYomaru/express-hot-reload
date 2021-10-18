var express = require ("express")
var reload = require ("express-reload")

var app = express() 
var path = __dirname + "/project/"

app.use(reload(path))
app.listen(3000, ()=> console.log("listening on 3000"))