/* Ciclos - Bucles - Loops
while 
do while 
for 
*/
 
/*
while  Estructura 

let condicion = 1; - valor inicial

while (condicion){
    tu código
    modificación a nuestro valor inicial 
}
*/
//imprimir todos los numeros del 1 - 10 
// si la condicion es falsa nunca se va a ejecutar 

/*let condicion = 1; 

while(condicion <= 10 ){
    console.log(condicion);
  //  condicion = condicion + 1; 
    condicion++; //hace lo mismo que la linea 23 
}*/

/*let numero = 1; 
numero++; //2  es lo mismo que => numero = numero +1 
numero++; //3
numero++; //4
numero--; //3
numero--; //2
numero--; //1
console.log(numero);
*/


/*do while 
imprimir todos los numeros del 1 al 10 */

/*let  numero = 1;

do {
    console.log(numero);
    numero++;
} while (numero <= 10);

*/
/*
for 
utiliza un contador 
 */

/*for (let control = 1; control <= 10; control++) {
    console.log(control );
    
}*/

const comidas = ['Pozole', 'Tacos', 'Tamales', 'Tortas'];

for( let i = 0; i < comidas.length; i++ ){
    console.log(comidas[i]);
}

