// Operador de reposo 
const obj = {
    name: 'GUs',
    age: 48,
    country: "MX"
};
//oper de reposo
let {name, ...all } = obj;
console.log(name,all);
// Propiedades de propagación une uno o varis elementos de dos objetos
const obj = {
    name: 'GUs',
    age: 48
}
const obj1 = {
    ...obj,
    country: 'MX'
}
console.log(obj1);
//  Método finally en promesas
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        //? resolve('hello world')
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console-log(error))
    .finally(() => console.log('Finalizo'))

//Expresiones regulares
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);
