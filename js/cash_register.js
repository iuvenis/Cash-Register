var newDisplay = 0; //"screen" display
function setDisplay(newDisplay) {
    document.getElementById("display").innerHTML = newDisplay;
}

function init() {
    var clickReturn = document.getElementsByClassName('clickable');
    var firstArray = []; // array before operator
    var secondArray = []; //Array after operator
    var numString = "";
    var operatorControl ={
      adding : "",
      subtracting : "",
      dividing : "",
      multiplying : ""
    };

    stringTakerNumbaMaker = function() {
        if (typeof firstArray === 'number') {
            parseFloat(numString);
            secondArray.push(numString);
            newDisplay = secondArray.join('');
            setDisplay(newDisplay);
            console.log(firstArray);
            console.log(secondArray);
        } else {
            parseFloat(numString);
            firstArray.push(numString);
            newDisplay = firstArray.join('');
            setDisplay(newDisplay);
            console.log(firstArray);
            console.log(secondArray);
        }
    };

    for (var i = 0; i < clickReturn.length; i++) {
        clickReturn[i].addEventListener('click', function(event) {
            numString = (event.target.innerHTML);
            stringTakerNumbaMaker();
        });
    }
    document.getElementById("clear").addEventListener('click', function() {
        newDisplay = 0;
        answer = 0;
        firstArray = [];
        numArray2 = [];
        setDisplay(newDisplay);
    });
    document.getElementById("add").addEventListener('click', function addItUp() {
        var newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.adding = calculatorModule.memory + " " + "+";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.adding);
        return {
            adding: operatorControl.adding,
        };
    });

    document.getElementById("subtract").addEventListener('click', function subItUp() {
        var newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.subtracting = calculatorModule.memory + " " + "-";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.subtracting);
        return {
            subtracting : operatorControl.subtracting,
        };
    });
    document.getElementById("divide").addEventListener('click', function divItUp() {
        var newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.dividing = calculatorModule.memory + " " + "/";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.dividing);
        return {
            dividing: operatorControl.dividing,
        };
    });

    document.getElementById("multiply").addEventListener('click', function multIt() {
        var newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.multiplying = calculatorModule.memory + " " + "*";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.multiplying);
        return {
            multiplying: operatorControl.multiplying,
        };
    });

    document.getElementById("equals").addEventListener('click', function() {

        var numberAfterOperator;
        var answer;

        equalsPt1 = function() {
            numberAfterOperator = secondArray.toString();
            numberAfterOperator = Number(numberAfterOperator.replace(/,/g, ''));
        };
        equalsPt2 = function() {
            setDisplay(answer);
            firstArray=answer;
            answer = 0;
            secondArray = [];
        };

        if (operatorControl.adding) {
            equalsPt1();
            answer = calculatorModule.sum(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.adding = "";
        } else if (operatorControl.subtracting) {
            equalsPt1();
            answer = calculatorModule.decrease(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.subtracting = "";
        } else if (operatorControl.dividing) {
            equalsPt1();
            answer = calculatorModule.division(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.dividing = "";
        } else if (operatorControl.multiplying) {
            equalsPt1();
            answer = calculatorModule.multiplication(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.multiplying = "";
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    init();
});
