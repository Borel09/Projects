//TRY AGAIN THIS FILE IS SUPPOSED TO ADD COMMA'S TO INTEGERS 
// AND NO COMMAS TO DECIMALS

function addCommas(input){
    let result = '';
    let reversedStr = input.split('').reverse().join('');
    
    //console.log(reversedStr)

    let count = 1;
    for(let i = 0; i < reversedStr.length; i++){
        result += reversedStr[i];
        count++;
        if(count === 4 && count !== reversedStr.length -1){
            result += ',';
            count = 0
        }
    }

    return result;
}
export default addCommas;

// function addCommas(input){
//     let reversedStr = input.split('').reverse().join('');
//     let middleStr = '';
//     let finalStr = '';

//     let count = 0;
//     if(input.endsWith('.')){
//         count = -1;
//     }
    
//     for(let i = 0; i < reversedStr.length; i++){
//         if(count === 3){
//             middleStr += ',';
//             count = 0;
//         }
//         middleStr += reversedStr[i];
//         count++
//     }

//     finalStr = middleStr.split('').reverse().join('');
//     return finalStr;
// }



// function commas(inputStr){
//     //let inputStr = '7697.'

//     let splitStr = '';
//     let reversedStr = '';
//     let wholeNums = '';
//     let decimals = '';
//     let finalStr = '';

//     //array
//     if(inputStr.includes('.') && !inputStr.endsWith('.')){
//         splitStr = inputStr.split('.')
//         reversedStr = addCommas(splitStr[0]);

//         wholeNums = reversedStr.split('').reverse().join('')
//         decimals = splitStr[1];    
//         finalStr = wholeNums.concat('.'+ decimals);
//     } 
//     else if(inputStr.endsWith('.')){
//         //console.log(inputStr);
//         finalStr = addCommas(inputStr)
//         return finalStr
//     }

//     finalStr = addCommas(inputStr);
//     // console.log(finalStr)
//     return finalStr;
// }

// export default commas;