var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var names=[];
app.get('/submit-name', function (req, res) {
  //get the name from request 
  var name=req.query.name;
  names.push('name');
  //JSON
  res.send(JSON.stringify(name));
  
});
var counter=0;
app.get('/counter', function (req, res) {
    
  counter=counter+1;
  res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
  
});
//bootstrap CSS FILES
app.get('/ui/css/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap.css'));
});
app.get('/ui/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/css', 'bootstrap.min.css'));
});

//bootstrap JS FILES
app.get('/ui/js/bootstrap.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/js', 'bootstrap.js'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/150X200pxl.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '150X200pxl.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
