//Qué es la importación dinámica
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

// ECMAScript 2020 - características importantes
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);
// Manejo de varias promesas
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2,promise3])
    .then(response => console.log(response));

//Objeto global para cualquier plataforma
console.log(window);
console.log(globalThis);
//Operador Nullish Coalescing
const fooo= null ?? 'default string';
console.log(fooo);
//Encadenamiento opcional 
const user = {};
console.log(user?.profile?.email);
if(user?.profile?.email){
    console.log('email')
}else {
    console.log('fail');
}
