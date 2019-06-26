var express = require('express');
var app = express();


var EntityController=function(req, res){
  console.log("list of Entities");
  var entityList = 
    [
	{Entity:'EntityList'},
	{Entity:'Authentication'},
	{Entity:'ProductController'},
	{Entity:'OrderController'},
	{Entity:'AddToCart'},
	{Entity:'BillController'},
	];
  res.send(entityList);
};
 


app.get('/entities',EntityController);

var server = app.listen(2000, function () {
  console.log("Example app listening at http://localhost:2000")
})