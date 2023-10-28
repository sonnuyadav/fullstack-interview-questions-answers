//A tuple is a typed array with a pre-defined length and types for each index.

let user: [string, number, boolean]
user = ["Sonu", 123, true];

//here we use rgb

let rgb: [number, number, number] = [12, 23, 44];

type tUser = [number, string];

const newUser: tUser = [123, "sonu yadav"];

newUser[1] = 'sonu@gmail.com';
newUser.push("sonu");