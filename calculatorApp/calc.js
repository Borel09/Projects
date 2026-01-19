const clearButton = document.getElementById('clearButton');
const deleteButton = document.getElementById('deleteButton');
const equalsButton = document.getElementById('equalsButton');
const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
const previousInput = document.getElementById('prevTopInput');
const currentInput = document.getElementById('currBotInput');


class Calculator{
    calculator(currentInput, previousInput){
        this.previousInput = previousInput;
        this.currentInput = currentInput;
        this.clearAll();
    }
    
    clearAll(){
        this.currentInput = '';
        this.previousInput = '';
        this.operator = undefined;
    }

    deleteButton(){

    }

    appendDisplay(num){
       this.currentInput.textContent += num;
       //console.log(`button ${this.currentInput.textContent} clicked`);
    }

    chooseOperator(){

    }


    updateDisplay(){
        this.appendDisplay();
        
    }


}

let calc = new Calculator(currentInput, previousInput);



//console.log(currentInput);
//currentInput.value = '';
//console.log(currentInput);
//loop through numbers
for(let i = 0; i < number.length; i++){
    
    //add event listener to all number buttons
    number[i].addEventListener('click', () => {
        console.log(`button ${i+1} clicked`);
        calc.appendDisplay(number[i].textContent);
        //currentInput.textContent += number[i].textContent;

    });

    
}






//testFunc(number)
// function testFunc(num){
//    console.log(`Button ${num} clicked!`);
// }

