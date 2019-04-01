'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/style.css',function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

app.listen(8080);
