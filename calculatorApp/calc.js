const clearButton = document.getElementById('clearButton');
const deleteButton = document.getElementById('deleteButton');
const equalsButton = document.getElementById('equalsButton');
const operator = document.querySelectorAll('.operator');
const number = document.querySelectorAll('.number');
const previousInput = document.getElementById('prevTopInput');
const currentInput = document.getElementById('currBotInput');


class Calculator{
    constructor(currentInput, previousInput){
        this.previousInput = previousInput;
        this.currentInput = currentInput;
        this.clearAll();
    }
    
    clearAll(){
        this.currentInput.textContent = '';
        this.previousInput.textContent = '';
        this.operator = undefined;
    }

    deleteButton(){
        let str = this.currentInput.textContent.slice(0, -1);
        this.currentInput.textContent = str;


    }

    appendDisplay(num){
        if(this.currentInput.textContent.includes('.') && num === '.'){
            console.log("ERROR");
            return;
        }
        this.currentInput.textContent += num;

        let str;
        let result = '';
        let finished = '';
        let count = 0;

        if(!this.currentInput.textContent.includes('.')){
            str = this.currentInput.textContent;
            str = str.replace(/,/g, '');
            for(let i = str.length - 1; i >= 0; i--){
                result += str[i];
                count++;
                if(count === 3 && i !== 0){
                    result += ',';
                    count = 0;
                }
            }
            finished = result.split('').reverse().join('');
            this.currentInput.textContent = finished;
        }

        

    }

    chooseOperator(operators){
        this.previousInput.textContent += this.currentInput.textContent + ' ' + operators;
        this.currentInput.textContent = '';
    }

    compute(){
        let x = this.previousInput.textContent;
        let y = this.currentInput.textContent;
        let result;

        console.log(x)
        console.log(y)

        

        //DIVISION
        if(x.includes('÷')){
            let rawX = x.slice(0, -2);
            let numX = parseFloat(rawX);
            let numY = parseFloat(y);

            result = numX / numY;
            this.previousInput.textContent = this.previousInput.textContent + " " + this.currentInput.textContent;
            this.currentInput.textContent = result;
        }

        //MULTIPLICATION
        if(x.includes('*')){
            let rawX = x.slice(0, -2);
            let numX = parseFloat(rawX);
            let numY = parseFloat(y);

            result = numX * numY;
            this.previousInput.textContent = this.previousInput.textContent + " " + this.currentInput.textContent;
            this.currentInput.textContent = result;
        }

        //ADDITION
        if(x.includes('+')){
            // console.log('HAS A ++++')
            let rawX = x.slice(0, -2);
            let numX = parseFloat(rawX);
            let numY = parseFloat(y);
            

            result = numX + numY;
            console.log(result)
            
            this.previousInput.textContent = this.previousInput.textContent + " " + this.currentInput.textContent;
            this.currentInput.textContent = result;
        } 

        //SUBTRACTION
        if(x.includes('-')){
            let rawX = x.slice(0, -2);
            let numX = parseFloat(rawX);
            let numY = parseFloat(y);

            result = numX - numY;
            console.log(result);

            this.previousInput.textContent = this.previousInput.textContent + " " + this.currentInput.textContent;
            this.currentInput.textContent = result;
        }
    }


    // updateDisplay(){
    //     //this.appendDisplay();
        
    // }
}

let calc = new Calculator(currentInput, previousInput);

// EVENT LISTENERS FOR NUMBER BUTTONS
number.forEach( button => {
    button.addEventListener('click', () => {
        calc.appendDisplay(button.textContent);
    });
});

// EVENT LISTENERS FOR OPERATOR BUTTONS
operator.forEach(button => {
    button.addEventListener('click', () => {
        calc.chooseOperator(button.textContent);
    })
});

//EVENT LISTENER FOR ALL CLEAR BUTTON
clearButton.addEventListener('click', () =>{
    calc.clearAll();
})

deleteButton.addEventListener('click', ()=> {
    calc.deleteButton();
})

//EVENT LISTENER FOR EQUALS BUTTON
equalsButton.addEventListener('click', () => {
    calc.compute();
})


// FOR LOOP VERSION OF EVENT LISTENER
//loop through numbers
// for(let i = 0; i < number.length; i++){   
//     //add event listener to all number buttons
//     number[i].addEventListener('click', () => {       
//         calc.appendDisplay(number[i].textContent);
//     });
// }



//testFunc(number)
// function testFunc(num){
//    console.log(`Button ${num} clicked!`);
// }

function commmaMe(){
    
}

