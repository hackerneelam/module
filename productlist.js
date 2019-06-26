var express = require('express');
var app = express();



var productController=function (req, res) {
  console.log("CAlling rest api");

  var productdetails =[{
		title:"Salwar-Kurti",
		description:"Decent look and design",
		unitprice:500,
		likes:550,
		quantity:500},
		
		{
		title:"Sari",
		description:"traditional wears",
		unitprice:1500,
		likes:2000,
		quantity:230},
		
		{
		title:"Hojiary",
		description:"stylish cloths for children",
		unitprice:700,
		likes:200,
		quantity:160}
		];

      
  res.send(productdetails);
};


app.get('/customers',productController );

var server = app.listen(2800, function () {
 

  console.log("Example app listening at http://localhost:2800");
})