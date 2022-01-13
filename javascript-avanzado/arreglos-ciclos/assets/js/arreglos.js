/*const numeros = [5]; */
let numeros = new Array();
numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];
/*document.write(numeros[0]);*/

// si necesito saber que hace una parte del codigo lo mando en consola
console.log(numeros.length);

// for(let i=0; i< numeros.length; i= i+ 2) esto es si quiero que valla de dos en dos y asi 

for(let i=0; i< numeros.length; i++){
    document.write(`${numeros[i]} <br>`);
     
    /* Otra forma de solución
     const numero =numeros[i];
    document.write(numero + '<br>');*/
}




