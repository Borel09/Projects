import createDigits from "../util/createDigits";
import createOperators from "../util/createOperators";



const Keypad = () => {
    let digits = createDigits();
    let operators = createOperators();
    
    

    return (
        <div className="calculator-grid">
            {digits}
            {operators}
        </div>
    );
};

export default Keypad;

