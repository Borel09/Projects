import addCommas from "./addCommas";

const  calculate = (previousInput, currentInput) => {
    let result;

    if(previousInput.includes('.') || currentInput.includes('.')){
        result = calcDecimal(previousInput, currentInput);
        // console.log('Decimal Calculation: ' + result);
        return result;
    } else {
        result = calcWholeNum(previousInput, currentInput);
        // console.log('Whole Number Calculation: ' + result);
        return result;        
    }
};
export default calculate;

//DECIMAL OR WHOLE NUMBER HANDLER
function calcDecimal(previousInput, currentInput){
    let rawPrev = previousInput.split(',').join(''); //will include the operator
    let rawCurr = currentInput;
    let prevInput = parseFloat(rawPrev.slice(0, -1))
    let currInput = parseFloat(rawCurr);
    let operator = rawPrev[rawPrev.length - 1];
    let result = '';

    //conditionals for which operation to do
    if(operator === '+'){
        result = add(prevInput, currInput);
    } else if(operator === '-'){
        result = subtract(prevInput, currInput);   
    } else if(operator === '*'){
        result = multiply(prevInput, currInput);
    } else if(operator === '÷'){
        result = divide(prevInput, currInput);
    }
    
    //FIX DECIMALS FOR THIS CURRENTLY THE MATH ONLY WORKS WITH DECIMALS
    //NEEDS TO WORK WITH BOTH DECIMALS AND WHOLE NUMBERS
    let splitResult = result.toString().split('.');
    let wholeNums = addCommas(splitResult[0])
    let decimals = splitResult[1] ? '.' + splitResult[1] : '';
    return wholeNums + decimals;
}

function calcWholeNum(previousInput, currentInput){
    let rawPrev = previousInput.split(',').join('');

    let prevInput = parseFloat(rawPrev.slice(0, -1));
    let currInput = parseFloat(currentInput);
    let operator = rawPrev[rawPrev.length - 1];

    let result = 0;
    if(operator === '+'){
        result = add(prevInput, currInput);
    } else if(operator === '-'){
        result = subtract(prevInput, currInput);
    } else if(operator === '*'){
        result = multiply(prevInput, currInput);
    } else if(operator === '÷'){
        result = divide(prevInput, currInput);
    }

    let finalResult = result.toString();    
    return finalResult;
}

//OPERATIONS
function add(x, y){
    let z = x + y;
    return z
}

function subtract(x, y){
    let z = x - y;
    return z;
}

function multiply(x, y) {
    let z = x * y;
    return z;
}

function divide(x, y){
    let z = x / y;
    return z;
}


