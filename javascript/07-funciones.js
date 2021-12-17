/*
Las funciones nos sirven para escribir bloques de código
que se pueden reutilizar 
*/

/* Estructura de la funcion
palabra reservada, 
seguida de nombre de la funcion, 
seguida de parentesis, 
seguida de llaves

function nombre (parametros){
}
*/

function sumar (numero1, numero2){
    // let numero1= 10;
   // let numero2= 20;
    let suma = numero1 + numero2;
    document.write('<h1>' + suma + '</h1>');
}
sumar (12, 12);
sumar (50, 8);
sumar (25, 25);
/* en lugar de esto largo mejor lo de arriba 
let numero1= 10;
let numero2= 20;
let suma = numero1 + numero2;
document.write('<h1>' + suma + '</h1>');

let numero3 = 23;
let numero4 = 2132; 
let suma2 = numero3 + numero4; 
document.write('<h1>' + suma2 + '</h1>');*/
