import createDigits from "../util/createDigits";
import createOperators from "../util/createOperators";

const Keypad = () => {
    let keyPad = keyOrder();   
    return(
        <>
            <button className="double-button" id="clearButton">AC</button>
            <button className="delete-key" id="deleteButton">DEL</button>
            {keyPad}
            <button className="double-button" id="equalsButton">=</button>
        </>
    )
};
export default Keypad;


function keyOrder(){
    let digits = createDigits();
    let operators = createOperators();
    let result = [];

    let count = 0;
    for(let i = 0; i < operators.length; i++){
        digits.splice(count, 0, operators[i]);        
        count += 4;
    }

    digits.pop();
    digits.push(
        <button className="number" id="bottom-left">.</button>
    )
    digits.push(
        <button className="number">0</button>
    )
    
    result.push([...digits]);
    console.log(result)
    
    return result;
}
