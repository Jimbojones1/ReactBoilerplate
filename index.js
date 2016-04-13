var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    router = express.Router(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path')

server.listen(8080)
console.log("server is listening on 8080")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})
