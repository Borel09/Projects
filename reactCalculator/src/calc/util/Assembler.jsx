import Display from "../components/Display";
import Keypad from "../components/Keypad";
import { useState } from "react";

const Assembler = () => {
    const [currentInput, setCurrInput] = useState('0');
    const [previousInput, setPrevInput] = useState('');

    const updateDisplay = (newInput) => {
        setCurrInput(newInput);
        setPrevInput(currentInput);
    }

    return( 
        <div className="calculator-grid">   
            {/* {test}      */}
            <Keypad/>            
        </div>
    );
};

export default Assembler;