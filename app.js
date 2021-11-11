function add(n1, n2, showResult, phrase) {
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
var printResult = true;
var resultPhrase = 'Result is ';
add(number1, number2, printResult, resultPhrase);
