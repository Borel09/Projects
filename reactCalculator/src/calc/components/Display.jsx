const Display = ({currentInput, previousInput}) =>{

    return(
        //output div that will house current and previous inputs
        <div className='output'>
            {/* if it exists ? show x  :(otherwise) show y */}
            <div className='previous-input'>{previousInput}</div>          
            <div className='current-input'>{currentInput ? currentInput : ''}</div>
        </div>
    )
};

export default Display;