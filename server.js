'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
let data = fs.readFileSync('words.json');
let words = JSON.parse(data);

console.log(words);

app.use(express.static('public'));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.get('/css/style.css',function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});


app.get('/add/:word/:score?', addWord);
function addWord(request,response){
 let data = request.params;
 let word = data.word;
 let score = Number(data.score);
 if (!score){
   var reply = {
     msg: "score required"
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


app.get('/all', sendAll);
function sendAll(request,response){
  response.send(words);
}

app.listen(8080);
