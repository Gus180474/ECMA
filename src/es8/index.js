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
// Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (fals)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
};
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();
// otra
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
};
anotherFunction();


