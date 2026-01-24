import createDigits from "../util/createDigits";
import createOperators from "../util/createOperators";
import Display from "./Display";
import { useState } from "react";




const CalcAssembly = () => {
    const [currentInput, setCurrentInput] = useState('');
    const updateDisplay = value => {
        setCurrentInput(currentInput + value);
    }

    function addBtnClick(buttonArray) {
        let buttons = buttonArray;
        let result = [];
        for(let i = 0; i < buttons.length; i++){
            result.push(
                <button className={i.className} key={i.key} onClick={() => {
                    updateDisplay(buttons[i].key)}
                }>{buttons[i].key}</button>
            )
        }
        return result
    }

    const buidKeypad = () => {
        let digits = createDigits();
        let operators = createOperators();

        let count = 0;
        for(let i = 0; i < operators.length; i++){
            digits.splice(count, 0, operators[i]);        
            count += 4;
        }

        digits.pop();
        digits.push(<button className="number" id="bottom-left" key={'.'} onClick={() => updateDisplay('.')}>.</button>)
        digits.push(<button className="number" key={'0'} onClick={() => updateDisplay('0')}>0</button>)
        
        return digits;
    }

    let keyPadOrder = buidKeypad();
    let finalKeys = addBtnClick(keyPadOrder);
    return(
        <>
            <Display currentInput={currentInput}/>
            <button className="double-button" id="clearButton" key={'allClear'} onClick={() => setCurrentInput('')}>AC</button>
            <button className="delete-key" id="deleteButton" key={'delete'} onClick={() => setCurrentInput(currentInput.slice(0, -1))}>DEL</button>
            {finalKeys}
            <button className="double-button" id="equalsButton" key={'='} >=</button>
        </>
    )
};
export default CalcAssembly;




