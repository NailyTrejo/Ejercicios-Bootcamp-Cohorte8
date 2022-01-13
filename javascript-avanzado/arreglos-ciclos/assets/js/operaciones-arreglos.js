let numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812, 213, 123];

//forEach recorre todos los elementos de un arreglo
// función anonima
/*numeros.forEach(function (elemento) {
    document.write(elemento + ', ');
});*/
numeros.forEach(elemento => {
    document.write(elemento + ', ');
});
/*numeros.forEach(function (numero) {
    document.write(numero + ', ');
});*/
/* numeros.forEach(function (elemento, indice) {
    document.write(elemento + '-' + indice +'<br>');
}); */

//map nos permite crear un arreglo diferente apartir de otro arreglo y nos ayuda a copiar un arreglo para modificarlo, sin afectar el original.
//regresa un arreglo del mismo tamaño.
let numeros2 = numeros.map(function(elemento){
    return elemento; 
});
document.write('<br>' + numeros2 + '<br>');

/*let frutas =['mango', 'uva', 'piña'];
let frutas2 = frutas;
//ambos apuntan a la misma direccion 
document.write('<br>'+ frutas + '<br>');
document.write('<br>'+ frutas2 + '<br>');

frutas2.push('pera');
document.write('<br>'+ frutas + '<br>');
document.write('<br>'+ frutas2 + '<br>');*/

/*let frutas =['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemento){
    return elemento;
});
document.write('<br>'+ frutas + '<br>');
document.write('<br>'+ frutas2 + '<br>');

frutas2.push('pera'); //a que elemento se lo quiero agregar 
document.write('<br>'+ frutas + '<br>');
document.write('<br>'+ frutas2 + '<br>');*/

//quiero el arreglo pero multiplicado por dos

/*let numeros2 = numeros.map(function(elemento){
    return elemento *2; 
});
document.write('<br>' + numeros2 + '<br>');*/
 
//includes
//da verdadero o falso  
document.write('<br>'+ numeros.includes(320) + '<br>');

//filter()
/*Filtra los elementos */
/*crea un nuevo arreglo con un filtro
para ver que elementos cumplen con la condicion nueva, en este caso solo son los numeros pares los que necesito imprimir*/  
let numerosPares = numeros.filter((elemento) =>{
    if (elemento % 2 == 0){
        return true;
    } else{
        return false
    }
    //console.log(elemento % 2 == 0); muestra que es lo que hace en consola
    /* este es el metodo corto en lugar del if 
    return elemento % 2 == 0;*/
    //como sacar los elementos mayores a 10 
   /* if (elemento > 10){
        return true;*/
    
});

document.write('<br>' + numerosPares + '<br>');


 let frutas = ['mango', 'uva', 'piña', 'mandarina', 'manzana', 'aguacate', 'sandia'];

 let frutasFiltro = frutas.filter((fruta) => {
     if(fruta.includes('m')== true){
         return true;
     }
     //forma corta
     /*return frutas.includes('m');*/
     //forma corta pero si pongo minusculas con toLowerCase lo jala 
     //Mango toLowerCase mango 
     /*return frutas.toLowerCase().includes('m');*/
     //mango toUpperCase Mango
     /* para convertir a mayusculas return frutas.toUpperCase().includes('m');*/

 });
 document.write('<br>' + frutasFiltro + '<br>');

/*Sort
Ordena los elementos del arreglo pero como si fueran String, sort ordena según el valor unicode*/
let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7]
document.write('<br>' + numeros.sort() + '<br>');
//cuando no afecto a un elemento se le conoce como mutar, sort si modifica un elemento 

/* Reverse invierte el orden de los elementos de un arreglo, no ordena solo invierte */
document.write('<br>' + numeros.reverse() + '<br>')


/*Find nos devuelve un elemento, en este caso debolvera el primer elemento del arreglo que es el mango*/
let frutaEncontrada = frutas.find((elemento)=>{
    // return elemento.toLowerCase.includes('ma') esto es cuando puse en mayuscula el arreglo
    return elemento.includes('ma')
});
document.write('<br>' + frutaEncontrada + '<br>');