"use strict";
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
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var conbinedNames = combine('Max', 'Anna', 'as-text');
console.log(conbinedNames);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
