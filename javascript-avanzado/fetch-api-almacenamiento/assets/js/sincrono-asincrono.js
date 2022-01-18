/*Código sincrono */

let variablesSincrona; 
variablesSincrona = 10 * 3;
console.log(variablesSincrona);

/*Código asincrono */

let variableAsincrona;
//setTimeout se ejecutara a futuro o despúes porque es un tarea asincrona 
setTimeout(() =>{
    variableAsincrona = 10 * 3; 
    console.log(variableAsincrona);
}, 2000);//2000 esta en milisegundos esto eqivale a dos segundos

console.log(variableAsincrona);
