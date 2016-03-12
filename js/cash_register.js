

// [________________] <-----( display )

// [7] [8]  [9]   [÷]  [clear]
// [4] [5]  [6]   [×]  [get balance]
// [1] [2]  [3]   [-]  [deposit cash]
// [0] [00] [.]   [+]  [withdraw cash]
//                [=]


// var one = 1;
// var two = 2;
// var three = 3;
// var four = 4;
// var five = 5;
// var six = 6;
// var seven = 7;
// var eight = 8;
// var nine = 9;
// var zero = 0;
// var doubleZero = 00;
// var dot;  // CONCATINATION OF ARRAY



//<div id="Number" src=""></div>

// document.getElementById( ~ * ~ * ~ * ~).innerText = " ~ * ARRAY OF WHATEVER * ~ ";
// div id
// if ~ * BUTTON CLICKED * ~  document.getElementById ~ * ID GIVEN TO FUNCTION * ~. src=" ~ * SAUCE * ~ "
// document.getElementById("test").onclick = foo2;
// ^^^^^^^^^^^
// Accepts only functions, no strings

//.onclick
// each part as object string
//
    // IF ANOTHER NUMBER CLICKED MULTIPLY BY TEN AND ADD THAT NUMBER OR WAIT NAWWWWW
    //PARSE THAT SHIEEEEET N
    // FUCK UP SOME COMMAS
    // ALSO USE SOME MODULAR EXPORTS MUTHA FUKKKA


    //var twoPlacedFloat = parseFloat(yourString).toFixed(2)



var total = 0;
var newDisplay; //Array then parse?
var numArray = [];

function setDisplay(newDisplay){
  document.getElementById("display").innerHTML = newDisplay;
}

function init(){

  document.getElementById("one").addEventListener('click', function(){
    var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("two").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("three").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("four").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("five").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("six").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("seven").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("eight").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
    document.getElementById("nine").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("zero").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("doubleZero").addEventListener('click', function(){
  var numString = this.innerText;
    parseFloat(numString);
    numArray.push(numString);
    console.log(numArray);
    newDisplay = numArray.join('');
    setDisplay(newDisplay);
  });
  document.getElementById("clear").addEventListener('click', function(){
    var newDisplay = 0;
    setDisplay(newDisplay);
  });
  document.getElementById("dot").addEventListener('click', function(){
    var newDot = ".";
    var newDisplay = newDisplay.concat(newDot);
    setDisplay(newDisplay);
  });
}





document.addEventListener('DOMContentLoaded', function(){
  init();
});

//var calculationFunctions = require("./calculator.js");