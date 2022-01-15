let cadena1 = "Hola";
console.log(cadena1);

// let cadena2 = new String("Adiós"); //Objeto String
// console.log(cadena2);

// let arreglo = new Array();
// console.log(arreglo);

//Includes() busca una cadena en otra y regresa en true o false 
// console.log(cadena2.toLowerCase().includes("a"));
// console.log(cadena2.toLowerCase()); //convierte a minuscula
// console.log(cadena2.toUpperCase()); //convierte a mayusculas

//cohersión y conversión

//cohersión- JavaScript convierte en automático un tipo de dato en otro 
console.log(cadena1.toLowerCase());

/*Funcion que recibe una palabra y la regresa invertida */
let palabra = "Hola Mundo";
let arreglo = palabra.split("");
 console.log(arreglo);
// let arregloInvertido = arreglo.reverse();
// console.log(arreglo.reverse().join());

// console.log(arregloInvertido);

function invertirPalabra(cadena){
    //metodo split()
    let arreglo = cadena.split(""); //convirtiendo la cadena en un arreglo
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("");//une los elementos de un arreglo y regresa un string
    return console.log();
};

invertirPalabra("Generation");
 document.write(arreglo);
