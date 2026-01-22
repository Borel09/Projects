import Display from "../components/Display";
import Keypad from "../components/Keypad";

const Assembler = () => {
    return(
        <div className="calculator-grid">
            <Display/>           
            <Keypad/>            
        </div>
    );
};

export default Assembler;