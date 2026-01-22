import Display from "../components/Display";
import Keypad from "../components/Keypad";

// function assembler(){
//     return(
//         <div className="calculator-grid">
//             <Display/>
//             <Keypad/>
//         </div>
//     )
// }
const Assembler = () =>{
    return(
        <div className="calculator-grid">
            <Display/>
            <Keypad/>
        </div>
    )
}


export default Assembler;