var rotateWheel = document.getElementById("rotate-wheel");
var arrayNumber = document.getElementsByClassName("text");

document.getElementById("play").addEventListener("click", showNumber);

	function showNumber() {

     	rotateWheel.classList.add("wheel-wrap");
     	var arr1 = [];

	        setTimeout(function(){
	        if (rotateWheel.classList.contains("wheel-wrap")) {
	        	for(var j = 0; j < arrayNumber.length; j++){
	        	arr1.push(arrayNumber[j].innerText);
	        }
	     
	        var firstNumber = arr1[(Math.floor(Math.random()*arr1.length))];
	        console.log("firstNumber", firstNumber);
                $.post("http://localhost:3000/wheel",{num: firstNumber});

	        
	        } 
           
	    rotateWheel.classList.remove('wheel-wrap');
	    }, 3000);
    























      //   function checkNumber(firstNumber){
	    	// var secondNumber = Math.floor(Math.random()*(12)) + 1;
	    	// console.log("firstNumber is: ", firstNumber);
	     //    console.log("secondNumber is: " , secondNumber);
	     //    if(firstNumber == secondNumber){
	     //    	console.log("u win");
	     //    }
	     //    else{
	     //    	console.log("u lose");
	     //    }
      //   }
   
    }
