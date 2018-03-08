const express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.get('/', (req, res) =>{
  res.send('Hello Home Page!');
});
app.get('/template', (req,res)=>{
  res.render('temp');
})
app.get('/dynamic', (req, res) => {
  var output =
  res.send(output);
})
app.get('/login/:id', (req, res) =>{
  var topics = [
    'Alma..',
    'loco..',
    'what..'
  ];
  var output = `
  <a href="/topic?id=0">ALMA</a><br>
  <a href="/topic?id=0">LOCO</a><br>
  <a href="/topic?id=0">WHAT</a><br>
  ${topics[req.params.id]}
  `
  res.send(output);
})
app.listen(3000, ()=>{
  console.log('Connected port 3000!!');
});
