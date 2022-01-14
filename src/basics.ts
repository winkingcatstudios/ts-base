function addBasic(n1: number, n2: number, showResult: boolean, phrase: string){
    // Runtime checks to use if you don't use TS
    // if (typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;  // not best practice to write number1: number = 5 Inferred at initialization
const number2 = 2.8;
const printResults = true;
const resultPhrase = 'Result is ';

addBasic(number1, number2, printResults, resultPhrase);
