import createDigits from "../util/createDigits";
import createOperators from "../util/createOperators";
import Display from "./Display";
import { useState } from "react";
import React from "react";



const Keypad = () => {
    const [displayValue, setDisplayValue] = useState('0');

    const updateDisplay = (currInput) => {
        setDisplayValue((prevInput) => {
            if(prevInput === '0'){
                return currInput;
            } else {
                return prevInput + currInput;
            }
        });
    };

    const addOnclick = (buttonArray) => {
        return buttonArray.map((button) => {
            return React.cloneElement(button, {
                onClick: () => {
                    //updateDisplay(button.props.children)
                    //CURRENTLY WORKING ON THIS PART
                    console.log("Clicked:", button.props.children.textConte);
                }
                
            });
        });
    };

    const keyOrder = () => {
        let digits = addOnclick(createDigits());
        let operators = createOperators();

        let count = 0;
        for(let i = 0; i < operators.length; i++){
            digits.splice(count, 0, operators[i]);        
            count += 4;
        }

        digits.pop();
        digits.push(<button className="number" id="bottom-left" key={'.'}>.</button>)
        digits.push(<button className="number" key={'0'}>0</button>)
        
        console.log(digits);
        return digits;
    }

    let keyPadOrder = keyOrder();
    return(
        <>
            <Display value={displayValue}/>
            <button className="double-button" id="clearButton" key={'allClear'} onClick={() => setDisplayValue('0')}>AC</button>
            <button className="delete-key" id="deleteButton" key={'delete'} onClick={() => setDisplayValue(displayValue.slice(0, -1))}>DEL</button>
            {keyPadOrder}
            <button className="double-button" id="equalsButton" key={'='}>=</button>
        </>
    )
};
export default Keypad;


