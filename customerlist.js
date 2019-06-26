var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("CAlling rest api");
  var customers=[
            {firstName:'Neelam',lastName:'Kokane',age:24},
            {firstName:'Kedat',lastName:'Dixit',age:26},
            {firstName:'Rohit',lastName:'Bande',age:28},
            {firstName:'Shivani',lastName:'Horke',age:25},
            {firstName:'Manoj',lastName:'Patil',age:27}
      ];
  res.send(customers);
};


app.get('/customers',customerController );

var server = app.listen(2500, function () {
 

  console.log("Example app listening at http://localhost:2500");
})