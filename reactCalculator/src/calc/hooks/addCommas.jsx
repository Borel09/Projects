function addCommas(input){
    let cleanNums = input.split(',').join('');
    let reversedStr = cleanNums.split('').reverse().join('');
    let result = '';

    let count = 0;
    for(let i = 0; i < reversedStr.length; i++){
        result += reversedStr[i];
        count++;
        if(count === 3 && i !== reversedStr.length -1){
            result += ',';
            count = 0
        }
    }
    
    return result.split('').reverse().join('');
}
export default addCommas;

