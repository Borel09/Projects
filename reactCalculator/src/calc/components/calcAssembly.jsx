import addCommas from "../hooks/addCommas";
import createDigits from "../hooks/createDigits";
import createOperators from "../hooks/createOperators";
import Display from "./Display";
import { useState } from "react";




const CalcAssembly = () => {
    const operators = ['÷', '*', '+', '-'];
    const [currentInput, setCurrentInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const updateDisplay = value => {
        if(currentInput === '0' && value === '0' 
            || currentInput.includes('.') && value === '.'){
            return
        } 
        if(currentInput === ''){
            let result = currentInput.replace('', value);
                       
            setCurrentInput(result);
            return
        }
        if(currentInput.includes('.')){
            if(operators.includes(value)){
                console.log("firing");
                setPreviousInput(currentInput + value);
                setCurrentInput('');
            }
            setCurrentInput(currentInput + value);
            return
        } 
        if(value === '.'){
            let result = currentInput;
            
            addCommas(result);
            result += value;
           
            setCurrentInput(result);
            return
        }
              
        if(operators.includes(value)){
            console.log("firing");
            setPreviousInput(currentInput + value);
            setCurrentInput('');
            return
        }


        let result = addCommas(currentInput + value);
        setCurrentInput(result);    
    }
    

    
    function addBtnClick(buttonArray) {
        let buttons = buttonArray;
        let result = [];
        for(let i = 0; i < buttons.length; i++){
            result.push(
                <button className={buttons[i].props.className} key={buttons[i].key} onClick={() => {
                    updateDisplay(buttons[i].key)
                }
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
            <Display currentInput={currentInput} previousInput={previousInput}/>
            <button className="double-button" id="clearButton" key={'allClear'} onClick={() => {setCurrentInput(''); setPreviousInput('')}}>AC</button>
            <button className="delete-key" id="deleteButton" key={'delete'} onClick={() => setCurrentInput(currentInput.slice(0, -1))}>DEL</button>
            {finalKeys}
            <button className="double-button" id="equalsButton" key={'='} >=</button>
        </>
    )
};
export default CalcAssembly;




