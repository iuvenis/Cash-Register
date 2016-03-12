var calculatorModule = (function(){
  var memory = 0;
  var total = 0;
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
    total = x;
    return total;
  }
  function getTotal() {
    return total;
  }
  function add(x) {
    isNum(x);
    total += x;
    return total;
  }
  function subtract(x){
    isNum(x);
    total -= x;
    return total;
  }
  function multiply(x) {
    isNum(x);
    total *= x;
    return total;
   }
   function divide(x) {
    isNum(x);
    total /= x;
    return total;
   }
  function recallMemory() {
    return memory;
   }
  function saveMemory() {
    memory = total;
    return memory;
   }
  function clearMemory() {
    memory = 0;
    return memory;
   }
   function resetMemory() {
    total = memory;
    return total;
   }

//Return public keys
return {
          total : total,
         memory : memory,
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
})();





// console.log(calc._________(x)); to execute function