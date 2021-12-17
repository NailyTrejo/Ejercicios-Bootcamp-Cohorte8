
/*Variable var se utilizaba anteriormente, son variables globales
Variable let es una variable de contexto, solo vive en un bloque del código*/

var numero = 40;
console.log(numero); //40

if(true){
    var numero =50;
    console.log(numero); //50 
}

console.log(numero); //50 

var texto = 'Bootcamp Java';
console.log(texto); //Bootcamp Java

if (true){
    let texto ='Cohorte 8';
    console.log(texto); //Cohorte 8
}

console.log(texto); //Bootcamp Java

