import createDigits from "../util/createDigits";
import createOperators from "../util/createOperators";
import Display from "./Display";
import { useState } from "react";
import React from "react";

const Keypad = () => {
    let keyPadOrder = keyOrder();   
    return(
        <>
            <button className="double-button" id="clearButton" key={'allClear'}>AC</button>
            <button className="delete-key" id="deleteButton" key={'delete'}>DEL</button>
            {keyPadOrder}
            <button className="double-button" id="equalsButton" key={'='}>=</button>
        </>
    )
};
export default Keypad;

function addOnclick(buttonArr){
    //let test = [<button className="test">test</button>]
    //let result = [];

    const addClick = (buttonArr) => {
        return buttonArr.map((button) => {
            return React.cloneElement(
                button, {
                    onClick: () => {
                        console.log('working');

                    }
                }
            ) 
        })
    }
    
    console.log(addClick(buttonArr));
    return addClick(buttonArr);
}




function keyOrder(){
    let digits = createDigits();
    //let digits = addOnclick(rawDigits);
    let operators = createOperators();
    let result = [];

    let count = 0;
    for(let i = 0; i < operators.length; i++){
        digits.splice(count, 0, operators[i]);        
        count += 4;
    }

    digits.pop();
    digits.push(
        <button className="number" id="bottom-left" key={'.'}>.</button>
    )
    digits.push(
        <button className="number" key={'0'}>0</button>
    )
    
    result.push([...digits]);
    //console.log(result)
    
    return result;
}
