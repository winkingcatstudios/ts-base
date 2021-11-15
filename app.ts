// Not best pratice, let ts infer
// const person: {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'Dan',
    age: 32,
    hobbies: ['Cooking', "Board Games"]
};

let favoriteActivities: string[];
favoriteActivities = ['Cooking'];

console.log(person.name);

// vanilla js version
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

