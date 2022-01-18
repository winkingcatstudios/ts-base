"use strict";
// using ts watch mode with tsc app.ts -w
var user = 'Dan';
console.log(user);
// Can put a "!" at the end of the line below or can check if button is truthy
var button = document.querySelector('button');
// const button = document.querySelector('button')!;
if (button) {
    button.addEventListener('click', function () {
        console.log("Clicked!");
    });
}
// run tsc --init ONCE to create tsconfig.json
// to then run ts compiler on everything you can run tsc or tsc -w
