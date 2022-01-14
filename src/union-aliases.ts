// // Union types
// function combine(input1: number | string, input2: number | string){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// // Literal types
// function combine(
//     input1: number | string, 
//     input2: number | string, 
//     resultConversion: 'as-number' | 'as-text'
//     ){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     if (resultConversion === 'as-number'){
//         return +result;
//     } else {
//         return result.toString();
//     }
// }

// Type aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable,
    input2: Combinable, 
    resultConversion: ConversionDescriptor
    ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number'){
        return +result;
    } else {
        return result.toString();
    }
}
 // More aliases
type User = { name: string; age: number};
function greet(user: User){
    console.log('Hi, I am ' + user.name);
}

const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const conbinedNames = combine('Max', 'Anna', 'as-text');
console.log(conbinedNames);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
