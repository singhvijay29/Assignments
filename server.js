const express = require('express');

const users = require('./MOCK_DATA.json')

const app = express();

app.get("/", function(req,res){
  res.send(users)
})

app.get("/users", function(req, res){
    res.send("hello world")
})

app.listen(2345, function (){
    console.log("Listen on port 2345")
})
