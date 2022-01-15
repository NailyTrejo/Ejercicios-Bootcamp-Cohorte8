/*Operadores Aritméticos */
// + - / % ()

let operacion = 3 * 5 + (10 - 5);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/*Operadores relacionales */
//<, >, >=, <=, ==, === (operador estricto), != (operador de diferencia), !== (operador de diferencia extricto).
//dan como resultado un boolean true o false

console.log(7 < 7 ); //no estamos incluyendo el numero a comparar 
console.log(7 <= 7); //incluyendo el numero a comparar 

console.log( 7 == "7"); //compara el valor no el tipo de dato
console.log( 7 === "7");//compara el tipo de dato y valor

console.log( 7 != "7");  
console.log( 7 !== "7");//evalua valor y tipo de dato

/*Incremento y decremento */
//+=, -=, *=, /=

let incremento = 5;
incremento += 5;  //incremento = incremento(5) +5 = 10
console.log(incremento);

incremento -= 5;  //incremento = incremento(5) -5 = 5
console.log(incremento);

incremento *= 5;  //incremento = incremento(5) * 5 = 25
console.log(incremento);

incremento /= 5;  //incremento = incremento(5) /5 = 5 osea es el incremento que era 25 / 5 = 5 
console.log(incremento);


/*Operador unario */
//realiza solo una opcion en la variable que aplicamos
// ++, --
//incremento y decremento
//sumar uno, restar uno

let sumar = 0;
console.log(sumar + "Linea 47");
sumar++;
console.log(sumar + "Linea 49");
sumar++;
console.log(sumar);
sumar--;
sumar--; // 0
//sumar--; -1
console.log(sumar);

/*  */
for(let i=0; i < 10; i++){
    /*codigo*/
}
/* 
++variable = preincremento - primero modifica el valor y ya despues hace uso de la variable 
variable++ = postincremento - hace lo contrario, usando la variable y despues hace incremento*/
let num = 5;
console.log(num++);//5
console.log(num); //6


for(let i=0; i < 5; i++){ 
    //iteracion
    //primer iteracion, se detiene 
    console.log("Este es un ciclo padre");
    for(let j=0; j < 5; j++){
        //hace sus iteraciones(repeticiones) propias
        console.log("Este es un ciclo hijo");
    }
}