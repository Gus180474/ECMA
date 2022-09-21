// aplanamiento de un array Método flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));// el dos marca la profucnidad del aplanado del array
// aplanamiento de un array Método flatMap
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value *2]));
//Eliminar espacios en blanco de un string
let hello ='              hello world';
console.log(hello);
console.log(hello.trimStart());

let hello ='hello world          ';
console.log(hello);
console.log(hello.trimEnd());
//Cómo transformar un array de arrays en un objeto
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));
// Propiedad description de los tipos symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);



