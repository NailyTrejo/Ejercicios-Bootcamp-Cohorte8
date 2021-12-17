/*Coleccion de elementos 
Tienen metodos o funciones que nos permiten 
ordenar o manipilar los datos almacenados
 */
 
 //manera 1 
 const arreglo1 = [4, 'hola', true, [1,2,6]];
    console.log(arreglo1);

/*manera 2
 const arreglo2 = Array.of(datos que queremos usar); 
 */
    const arreglo2 = Array.of( 1, 'Hola', true);
    console.log(arreglo2);

//manera 3 mas antigua
const arreglo3 = new Array(3, true ,'adiós');
    console.log(arreglo3);

/* let variable1 = 3; 
console.log(variable1);
*/

/*no es recomendable
varible1 = 'tres';
console.log(variable1);
*/

const frutas =['manzana', 'naranjas', 'uvas','sandias',[1, 2, 3, 4, 5, ['A', 'B', 'C']]];
//notacion de corchetes 
console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4][4]);
console.log(frutas[4][5][1]);
console.log(frutas);
frutas[4][5].push('D');
console.log(frutas);


//Metodos
/* Length = Longitud  */
const letras =['A', 'B', 'C', 'D'];
console.log(letras.length);

/* push = añade un elemento al final de nuestro arreglo */
letras.push('E');
console.log(letras);

/*pop = elimina el ultimo elemento */
letras.pop();
console.log(letras);

/*unshift = agrega un elemento la inicio  */
letras.unshift(1);
console.log(letras);

/* shift = elimina el primer elemento*/
letras.shift();
console.log(letras);


