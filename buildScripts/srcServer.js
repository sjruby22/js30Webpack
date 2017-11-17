var express = require("express")
var path = require("path")
var open = require("open")

var port = 8080
var app = express()

app.get('/', function(request, result) {
    result.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err) {
    if (err) {
        console.log(err)
    } else {
        open('http://localhost:' + port)
        console.log("Opened on port: " + port)
        console.log("In C9 that means you have to go to: " +  'http://createstuff-sjruby.c9users.io/')
    }
})