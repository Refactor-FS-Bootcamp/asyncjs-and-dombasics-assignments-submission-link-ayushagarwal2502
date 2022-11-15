const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

//concat
console.log(string1.concat(' ', string2));
//endswith
console.log(string2.endsWith('primitive'));

//slice
console.log(string1.slice(-4));

//split
const chars = string1.split('');

console.log(chars[8]);

//to string
const stringObj = new String('foo');
console.log(stringObj);

//trim
const greeting = '   Hello world!   ';

//console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());