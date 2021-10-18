

var express = require('express')
var app = express.Router()

app.get('/', (req, res) => {
  res.send('Hello World reloader 2')
})

module.exports = app