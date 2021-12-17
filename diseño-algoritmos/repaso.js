/*Metodos
 Length = Longitud 
const letras =['A', 'B', 'C', 'D'];
console.log(letras.length);

push = añade un elemento al final de nuestro arreglo 
letras.push('E');
console.log(letras);

pop = elimina el ultimo elemento 
letras.pop();
console.log(letras);

unshift = agrega un elemento la inicio  
letras.unshift(1);
console.log(letras);

shift = elimina el primer elemento
letras.shift();
console.log(letras); */


/*
Arreglos
 */

const comidas = ['Pozole', 'Quesadillas', 'Tacos'];
/**
 length longitud de nuestro arreglo
 */

 console.log(comidas.length)

 /* 
 push -agrega al final
 pop- quita elemento del final
 unshift-  agrega al inicio
 shift- quita elemento del inicio
 */

 comidas.push ('Torta');
 console.log(comidas);

 comidas.unshift('Pancita');
 console.log(comidas);

comidas.pop();
 console.log(comidas);

 comidas.shift();
 console.log(comidas);


 /*forEach nos puede servir para realizar 
 por cada elemento de nuestro arreglo */

 console.log(comidas [0]);
 console.log(comidas [1]);
 console.log(comidas [2]);
  
 comidas.forEach(function(el){
    console.log(el);
 })

 const numeros = [1, 4, 7, 8];
 numeros.forEach(function(el){
     let suma= el + 1;
     console.log(suma);
 })
 console.log(numeros);


/*ejercicio */

const arr = [];

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
}

suma (3);
suma (5);
suma (6);
suma (2);
suma (78);

console.log(arr);
