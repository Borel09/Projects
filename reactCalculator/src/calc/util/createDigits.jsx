function createDigits(){
    let result = [];

    for(let i = 1; i < 10; i++){
        result.push(
            <button className="number" key={i}>{i}</button>
        );
    };
    result.push(<button className="number" key={0}>0</button>)
    return result;
}

export default createDigits;