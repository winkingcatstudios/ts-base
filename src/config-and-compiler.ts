// using ts watch mode with tsc app.ts -w
const user = 'Dan'; 

console.log(user);

// Can put a "!" at the end of the line below or can check if button is truthy
const button = document.querySelector('button');
// const button = document.querySelector('button')!;

if(button) {
    button.addEventListener('click', () => {
        console.log("Clicked!");
    })
}

// run tsc --init ONCE to create tsconfig.json
// to then run ts compiler on everything you can run tsc or tsc -w