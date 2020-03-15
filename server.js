const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '*****************';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {operationResult: null, error: null});
})

app.post('/', function (req, res) {
  let number1= parseInt(req.body.number1);
  let number2=  parseInt( req.body.number2);
  let operation = req.body.operation;
  let result;
 // console.log("inside server file "+operation);
  if(operation == 'add'){
    result = number1+number2;
  }
  if(operation == 'Subtract'){
      result = number1-number2;
        }
   if(operation == 'Multiply'){
       result = number1*number2;
        }
    if(operation == 'Divide'){
       result = number1/number2;
            }
  res.render('index',{ operationResult : result});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
