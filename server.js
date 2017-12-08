var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack/prod.config.js')

var app = express();
var compiler = webpack(config);

// app.use(express.static('public'))
// app.use('/public/* ', express.static('public'));

app.get('/two/bundle.js', function(req,res){
  res.sendFile(path.join(__dirname, 'dist', 'two', 'bundle.js'));
})



app.get('/public/*', function(req,res){
  res.sendFile(path.join(__dirname, 'dist', 'public', req.params[0]));
})



  // express.static('./node_modules/font-awesome/fonts'))


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});





app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
 
