"use strict";
function addBasic(n1, n2, showResult, phrase) {
    // Runtime checks to use if you don't use TS
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5; // not best practice to write number1: number = 5 Inferred at initialization
var number2 = 2.8;
var printResults = true;
var resultPhrase = 'Result is ';
addBasic(number1, number2, printResults, resultPhrase);
