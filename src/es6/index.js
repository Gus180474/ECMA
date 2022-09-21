function newfunction(name, age, country){
    var name =name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);

}
// ECMA 6
function newfunction2(name = 'oscar', age=32, country='MX'){
    console.log(name, age, country);
}

// llamar a la funcion

newfunction2();
newfunction2('Ricardo', '23', 'CO');

// antes
let hello = "Hola";
let world ="Mundo";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
// antes
let lorem = "cualquier frase epica que podamos separar \n" + "otra fase que necesitamos concatenar";
// ES6
let lorem2 = `otra fase epica que nesecitamos
ahora es otra fase epica`;

console.log(lorem);
console.log(lorem2);
// clase 2
let person = {
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX'
}
//como se acceede  estos normalmente 
console.log(person.name, person.age);

//destructurar estos elementos con ECMa6
let {name,age}= person;
console.log(name,age);

//algoritmo de propagacion con Ecma6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David',...team1, ...team2];
console.log(education);
// let unicamente funciona como variable local "scope"
{
    var globalVar = "Gobal Var";
}
{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
console.log(globalVar);
//console.log(globalLet);
// CONST en ECMA6 permite generar constantes
const a='b';
a = 'a';
console.log(a);
//clase 4 Arrow Functions, Promesas y Parámetros en objetos

let name ='gus';
let age = 32;
//ES5
//obj ={names: name, ages: age};
//ES6
obj2 ={name, age};
console.log(obj2);
// Arrow function ??
const names = [
    {name: 'Gus', age: 50},
    {name: 'Yes', age: 27}
]
let listOfNames = names.map(function(item){
    console.log(item.name):
})

let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name,age,country)=>{
    ...
} 

const listOfNames4 = name =>{
    ...
}

const square = num => num * num;

//Promesas para trabajar asincronismos calback
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        }else {
            reject('Ups!!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(eror => console.log(error));

// Clases
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.sum(2,2));

// Impoort y export modulos
import { hello } from './module';
hello();

//generators funcion que retorna una serie de valores 
function* helloWorld(){
    if (true){
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);















