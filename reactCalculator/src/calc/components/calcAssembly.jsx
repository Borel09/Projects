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

    const updateDisplay = value => {

        
        //EDGE CASES
        if(currentInput === '0' && value === '0' 
            || currentInput.includes('.') && value === '.'){
            return
        } 
        
        if(!currentInput.includes('.') && value === '.'){
            // console.log("firing");
            let temp = currentInput.split(',').join('');
            setCurrentInput(addCommas(temp) + ".");
            return           
        }
        if(currentInput.includes('.')){          
            if(operators.includes(value)){
                console.log('firing');
                
                setPreviousInput(currentInput + value);
                setCurrentInput(currentInput);
                return
            } 

            //THIS IS WHERE THE CURRENT ERROR IS 
            //FIX
            // else if(currentInput && operators.includes(previousInput[previousInput.length - 1])){
            //     console.log('testing');
            //     setCurrentInput(value);
            //     return;
            // }
            
            setCurrentInput(currentInput + value); 
            console.log('firing'); 
            return
            
        }



        //OPERATOR CASES 
        //really analyse this code. i inadvertantly came up with it on my own just 
        //to delete and have ai spit back to me lmao   
        if(operators.includes(value)){
            if(currentInput && operators.includes(previousInput.slice(-1))){
                console.log('firing');

                const result = calculate(previousInput, currentInput);
                setPreviousInput(result + value);
                setCurrentInput(result);
                setIsCalculated(true);
            } else {
                console.log('firing');
                
                setPreviousInput(currentInput + value);
                setCurrentInput('');
            }
            return
        }

        if(operators.includes(value)){
            setPreviousInput(currentInput + value);
            setCurrentInput('')
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
        //IF NO CASES UPDATE CURRINPUT DISPLAY
        let result = addCommas(currentInput + value);
        // console.log("firing");
        
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
  

    return(
        <>
            <Display currentInput={currentInput} previousInput={previousInput}/>
            <button className="double-button top-row" id="clearButton" key={'allClear'} onClick={() => {setCurrentInput(''); setPreviousInput('')}}>AC</button>
            <button className="delete-key top-row" id="deleteButton" key={'delete'} onClick={() => setCurrentInput(currentInput.slice(0, -1))}>DEL</button>
            {finalKeys}
            <button className="double-button bottom-right" id="equalsButton" key={'='} onClick={() => {
                if(!previousInput || !currentInput) return;
                if(isCalculated === true) return;
                const result = calculate(previousInput, currentInput);
                
                setPreviousInput(previousInput + currentInput);
                setCurrentInput(addCommas(result));
                setIsCalculated(true);
                }}>=</button>
        </>
    )
};
export default CalcAssembly;




