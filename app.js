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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Dan',
    age: 32,
    hobbies: ['Cooking', "Board Games"],
    role: Role.ADMIN
};
console.log(person.name);
// vanilla js version
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
