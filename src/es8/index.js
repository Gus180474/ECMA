//Métodos de transformación de objetos a arrays
const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    fronted: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}
const values = Object.values(data);
console.log(values);
console.log(values.length);

//pading Cómo rellenar un string o padding
const string ='hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' ---------------'));

//Trailing commas
const obj = {
    name: 'Gus',// para poder agregar mas datos ??
}
