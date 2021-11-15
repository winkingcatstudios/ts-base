// Not best pratice, let ts infer
// const person: {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Tuple
} = {
    name: 'Dan',
    age: 32,
    hobbies: ['Cooking', "Board Games"],
    role: [2, 'author']
};

person.role.push('admin');  // push is an exception that works on Tuples 

let favoriteActivities: string[];
favoriteActivities = ['Cooking'];

console.log(person.name);

// vanilla js version
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

