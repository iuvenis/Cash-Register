var calculatorModule = (function(){
  var _memory = 0;
  var _total = 0;
  var calc = {
  };
// Error throw function
  function isNum(x){
    if (typeof x !== 'number') {
      throw new Error('Not a real number');
    }
  }
//Begin Functions
function load(x) {
    isNum(x);
    _total = x;
    return _total;
  }
  function getTotal() {
    return _total;
  }
  function add(x) {
    isNum(x);
    _total += x;
    return _total;
  }
  function subtract(x){
    isNum(x);
    _total -= x;
    return _total;
  }
  function multiply(x) {
    isNum(x);
    _total *= x;
    return _total;
   }
   function divide(x) {
    isNum(x);
    _total /= x;
    return _total;
   }
  function recallMemory() {
    return _memory;
   }
  function saveMemory() {
    _memory = _total;
    return _memory;
   }
  function clearMemory() {
    _memory = 0;
    return _memory;
   }
   function resetMemory() {
    _total = _memory;
    return _total;
   }

//Return public keys
return {
           load : load,
       getTotal : getTotal,
            add : add,
       subtract : subtract,
       multiply : multiply,
         divide : divide,
   recallMemory : recallMemory,
     saveMemory : saveMemory,
    clearMemory : clearMemory,
    resetMemory : resetMemory
   };
});

// console.log(calc._________(x)); to execute function
console.log(calc.clearMemory());