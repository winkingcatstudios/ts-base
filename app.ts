// unknown is better than any is you really can't know type. 
// still better to use union if you can: string | number if could be multiple types
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Dan';
// eror below, would not be an error is userInput was any
// userName = userInput;

if (typeof userInput === 'string') {
    userName = userInput;
}

// intended to never return anything, makes it clear when reading code
function generateError(message: string, code: number): never {
    throw { message: message, erroCode: code};
}

generateError('An error occured', 500);
