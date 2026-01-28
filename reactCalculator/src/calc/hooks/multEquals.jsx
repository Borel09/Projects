import calculate from "./calculate";

function multiEquals(){
    let previousInput = '2*3';
    let currentInput = '6';
    let operators = ['÷', '*', '+', '-'];
    let foundOp = null;
    let result

    // console.log('working');
    for(let op of operators){
        if(previousInput.includes(op)){
            foundOp = op;
            break
        }
    }

    if(foundOp){
        const parts = previousInput.split(foundOp);
        console.log("Numbers: ", parts);
        console.log('Operator: ', foundOp);
        
        let formattedPrev = parts[1] + foundOp;
        result = calculate(formattedPrev, currentInput);       
    }
    return result
}
export default multiEquals;