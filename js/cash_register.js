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
// var total = 0;
// var display;

// function getDisplay(){

// }

function init(){
  document.getElementById("one").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("two").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("three").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("four").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("five").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("six").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("seven").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("eight").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
  document.getElementById("nine").addEventListener('click', function(){
    var numString = this.innerHTML;
    console.log(numString.substr(1, numString.length -2));
  });
}
document.addEventListener('DOMContentLoaded', function(){
  init();
});