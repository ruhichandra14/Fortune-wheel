var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  	res.sendFile(path.join(__dirname+'public/index.html'));
});

app.post('/wheel', function (req, res) { 
	var number_wheel1=req.body.num;
	console.log("Number on the wheel front is = "+ number_wheel1);
    
    var arr2 =[1,2,3,4,5,6,7,8,9,10,11,12];
	var number_wheel2 = arr2[(Math.floor(Math.random()*arr2.length))];
	console.log("Number on the wheel back is = "+ number_wheel2);
   
	

    if(number_wheel1 == number_wheel2){
        return res.end('win');
    }
        return res.end('lose');


    })

app.listen(3000, function () {
   console.log("server is running...");
})

//------------------------------------------------------------------------------------------------------//
