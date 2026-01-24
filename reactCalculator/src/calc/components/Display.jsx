


const Display = ({currentInput, previousInput}) =>{

    return(
        //output div that will house current and previous inputs
        <div className='output'>
            <div className='previous-input'>{previousInput}</div>
            <div className='current-input'>{currentInput}</div>
        </div>
    )
};

export default Display;