function add(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;  // not best practice to write number1: number = 5 Inferred at initialization
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';

add(number1, number2, printResult, resultPhrase);
