// Not best pratice, let ts infer
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Dan',
//     age: 32,
// };

// Same as above with inference, this is best practice
// const person = {
//     name: 'Dan',
//     age: 32,
// };

// Cant use inference when working with tuples though, must specify
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple support
// } = {
//     name: 'Dan',
//     age: 32,
//     hobbies: ['Cooking', "Board Games"],
//     role: [2, 'author']
// };

// Working with arrays and tuples
// person.role.push('admin');  // push is an exception that isn't enforced on tuples 
// person.role = [0, 'admin'];  // tuple is enforced this way
// let favoriteActivities: string[];
// favoriteActivities = ['Cooking'];

// Enums
// best pracice is to caps the enum types and Capitalize first letter of enum name
// instead of this:
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// Do this:
enum Role { ADMIN, READ_ONLY, AUTHOR };
const person = {
    name: 'Dan',
    age: 32,
    hobbies: ['Cooking', "Board Games"],
    role: Role.ADMIN
};


console.log(person.name);

// vanilla js version
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN){
    console.log('is admin');
}

