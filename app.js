// Not best pratice, let ts infer
// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Dan',
    age: 32,
    hobbies: ['Cooking', "Board Games"]
};
var favoriteActivities;
favoriteActivities = ['Cooking'];
console.log(person.name);
// vanilla js version
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
