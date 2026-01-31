// import addCommas from "../hooks/addCommas";
import createDigits from "../hooks/createDigits";
import createOperators from "../hooks/createOperators";
import calculate from "../hooks/calculate";
import Display from "./Display";
import { useState } from "react";




const CalcAssembly = () => {
    const operators = ['÷', '*', '+', '-'];
    
    const [currentInput, setCurrentInput] = useState('');
    const [previousInput, setPreviousInput] = useState('');
    const [prevReadyBool, setPrevReadyBool] = useState(false);
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
            setCurrentInput(temp + value);
            // setCurrentInput(addCommas(temp) + ".");
            return           
        } 


        //WHOLE NUMBERS
        //setting up the first digit in calc (previousInput + operator)
        if(!previousInput && operators.includes(value)){
            console.log('testing 1');
            setPreviousInput(currentInput + value);
            setCurrentInput('');
            setPrevReadyBool(true);

            return;
        }

        if(prevReadyBool === true && operators.includes(value)){
            console.log('testing 2');
            let result = calculate(previousInput, currentInput);
            setIsCalculated(true);
            setPrevReadyBool(false);
            
            setPreviousInput(result + value);
            setCurrentInput(result);
            return;
        } else if(isCalculated === true){
            console.log('testing 3');
            setCurrentInput(value);
            setPrevReadyBool(true);
            setIsCalculated(false);
            
            return;
        }


        // if(currentInput.includes('.')){          
        //     if(operators.includes(value)){
        //         console.log('firing: currInput & operator moved to prevInput');
        //         //decimalAndPrev === true;
        //         setPreviousInput(currentInput + value);
        //         setCurrentInput(currentInput);
        //         return
        //     } 

        //     //THIS IS WHERE THE CURRENT ERROR IS ----
        //     //ADD BOOLEAN VALUE TO TRACK IF PREVINPUT IS RDY ----
        //     //FIX
        //     if(currentInput.endsWith('.') || decimalAndPrev === true){
        //         console.log('firing: decimalPrev is true');
        //         setCurrentInput(currentInput + value);


        //         return;                
        //     }
        //     // else if(operators.includes(previousInput[previousInput.length - 1])){
        //     //     console.log('testing: prev input is rdy');
        //     //     setCurrentInput(value);


        //     //     if(currentInput.endsWith('.') || decimalAndPrev === true){
        //     //         setCurrentInput(currentInput + value);
        //     //         console.log('access for right condition true');
                    
        //     //     }
        //     //     return;
        //     // } 


                       
            
        // }

        // setCurrentInput(currentInput + value); 
        // console.log('firing: Native Entry point'); 
        



        //OPERATOR CASES 
        //really analyse this code. i inadvertantly came up with it on my own just 
        //to delete and have ai spit back to me lmao   
        // if(operators.includes(value)){
        //     if(currentInput && operators.includes(previousInput.slice(-1))){
        //         console.log('firing');

        //         const result = calculate(previousInput, currentInput);
        //         setPreviousInput(result + value);
        //         setCurrentInput(result);
        //         setIsCalculated(true);
        //     } else {
        //         console.log('firing');
                
        //         setPreviousInput(currentInput + value);
        //         setCurrentInput('');
        //     }
        //     return
        // }

        

        // if(isCalculated === true){
        //     if(operators.includes(previousInput.slice(-1))){
        //         // console.log('firing');
        //         setCurrentInput(value);  
        //         setIsCalculated(false)         
        //     } else {
        //         setCurrentInput(value);
        //         setPreviousInput('');
        //         setIsCalculated(false);
        //     }
            
        //     return;
        // } 
        //IF NO CASES UPDATE CURRINPUT DISPLAY
        // let result = addCommas(currentInput + value);
        let result = currentInput + value
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
                // if(isCalculated === true) return;
                const result = calculate(previousInput, currentInput);
                
                setPreviousInput(previousInput + currentInput);
                // setCurrentInput(addCommas(result));
                setCurrentInput(result);
                setPrevReadyBool(false);
                setIsCalculated(true);
                }}>=</button>
        </>
    )
};
export default CalcAssembly;




