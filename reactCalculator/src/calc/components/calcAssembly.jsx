import addCommas from "../hooks/addCommas";
import createDigits from "../hooks/createDigits";
import createOperators from "../hooks/createOperators";
import calculate from "../hooks/calculate";
import Display from "./Display";
import { useState } from "react";




const CalcAssembly = () => {
    const operators = ['÷', '*', '+', '-'];
    const [currentInput, setCurrentInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [isCalculated, setIsCalculated] = useState(false);
    // const equalHandler = calculate(previousInput, currentInput);

    const updateDisplay = value => {
        //EDGE CASES
        if(currentInput === '0' && value === '0' 
            || currentInput.includes('.') && value === '.'){
            return
        } 
        
        //OPERATOR CASES    
        if(operators.includes(value)){
            if(currentInput && operators.includes(previousInput.slice(-1))){
                // console.log('firing');

                const result = calculate(previousInput, currentInput);
                setPreviousInput(result + value);
                setCurrentInput(result);
                setIsCalculated(true);
            } else {
                setPreviousInput(currentInput + value);
                setCurrentInput('');
            }
            return
        }

        if(isCalculated === true){
            if(operators.includes(previousInput.slice(-1))){
                // console.log('firing');
                setCurrentInput(value);  
                setIsCalculated(false)         
            } else {
                setCurrentInput(value);
                setPreviousInput('');
                setIsCalculated(false);
            }
            return;
        } 
        
        //STANDARD ENTRY
        if(currentInput === ''){
            setCurrentInput(value);
        } else {
            const nextValue = currentInput + value;
            setCurrentInput(nextValue.includes('.') ? nextValue : addCommas(nextValue))
        }
        

        //IF NO CASES UPDATE CURRINPUT DISPLAY
        let result = addCommas(currentInput + value);
        setCurrentInput(result);    
    }
    

    
    function addBtnClick(buttonArray) {
        let buttons = buttonArray;
        let result = [];
        for(let i = 0; i < buttons.length; i++){
            result.push(
                <button className={buttons[i].props.className}
                    id={buttons[i].props.id}
                    key={buttons[i].key} 
                    onClick={() => {
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
    
    // console.log(equalHandler);
    
    return(
        <>
            <Display currentInput={currentInput} previousInput={previousInput}/>
            <button className="double-button" id="clearButton" key={'allClear'} onClick={() => {setCurrentInput(''); setPreviousInput('')}}>AC</button>
            <button className="delete-key" id="deleteButton" key={'delete'} onClick={() => setCurrentInput(currentInput.slice(0, -1))}>DEL</button>
            {finalKeys}
            <button className="double-button" id="equalsButton" key={'='} onClick={() => {
                if(!previousInput || !currentInput) return;
                const result = calculate(previousInput, currentInput);
                
                setPreviousInput(previousInput + currentInput);
                setCurrentInput(result);
                setIsCalculated(true)}}>=</button>
        </>
    )
};
export default CalcAssembly;




