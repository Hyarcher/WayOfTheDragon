'use strict';

//Creating Neccessary Variables for server
const express = require('express');
const app = express();
const fs = require('fs');
let data = fs.readFileSync('words.json');
let words = JSON.parse(data);
let bodyParser = require('body-parser');



 // for parsing application/json
 // for parsing application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//testing purposes, logging data to terminal
console.log(words);

//HTTP method that the middleware function handles
app.use(express.static('public'));

//GET method for sending the index file on startup Localhost
app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//GET method for CSS design
app.get('/css/style.css',function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

//POST method for adding the data to JSON, unfotunately implementation failed as data wasnt storing persistantly and was overwriting
app.post('/movies', addMovie);
function addMovie(request,response){
  console.log("Adding movie",request.body);
  fs.writeFile('words.json', JSON.stringify(request.body),  (err) => {
    if (err) {
      console.log('Save failed!');
      response.json(false);
      throw err;
    } else {
      console.log('The file has been saved!');
      response.json(true);
    }
  });
}

//GET method that allows a user to pass in variables that are added to JSON, slightly abstract but fully functional.
//Cathes the error if user does not add a time variable as require and responds by Prompting the user to add time
 app.get('/add/:word/:score?', addWord);
 function addWord(request,response){
  let data = request.params;
  let word = data.word;
  let score = Number(data.score);
  if (!score){
    var reply = {
      msg: "number required"
    }
   response.send(reply);
  } else {
    words[word] = score;
    let data = JSON.stringify(words, null, 2);
  fs.writeFile('words.json', data, finished);
function finished(err){
      console.log('all set...');
      reply = {
        word: word,
        score: score,
       status: "success"
      }
      response.send(reply);
    }


 }
 }

//GET method that returns all data inside the words parameter (JSON data)
app.get('/all', sendAll);
function sendAll(request,response){
  response.send(words);
}

app.listen(8080);
