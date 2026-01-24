function createOperators(){
    let operators = ['÷', '*', '+', '-'];
    let result = [];

    for(let i = 0; i < operators.length; i++){
        result.push(
            <button className="operator" key={operators[i]}>{operators[i]}</button>
        );
    };    
    return result;
}
export default createOperators;