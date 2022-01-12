/*flujo es orden el que se ejecutan las declaraciones que escribimos 
por lo general van de arriba hacia abajo*/

let miVariable = 10;
console.log(miVariable);


/*Estructuras de control de flujo*/

let edad = 17;
let tienesINE = false;

if (edad >= 18 || tienesINE == true)
{
    console.log('Puedes entrar');
} /*else{
    console.log('No puedes entrar')
}*/



/*Operador Ternario */
/*(condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso; */

let edad1 = 17;

/*(edad1 >= 18)
    ? console.log("Mayor de edad")
    : console.log("Menor de edad");
*/
/*otra forma de poder usarlo */
/*let pregunta =(edad1 >=18)
    ? "Mayor de edad"
    : "Menor de edad";

    console.log(pregunta);*/

let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >=18) ? "Mayor de edad": "Menor de edad"} de edad`;

console.log(preguntaEdad);

/*Domingo-0
Lunes -1
Martes -2
Miercoles -3
Jueves -4
Viernes -5
Sabado -6 */
/*let dia = 5;*/
/*
if(dia === 0){
    console.log("Domingo");
}else if (dia === 1){
    console.log("Lunes");
}else if (dia === 2){
    console.log("Martes");
}else if (dia === 3){
    console.log("Miercoles");
}else if (dia === 4){
    console.log("Jueves");
}else if (dia === 5){
    console.log("Viernes");
}else if (dia === 6){
    console.log("Sabado");
}else {
    console.log("Ese no es un dia");
}
*/

//Swhitch- case 
/* switch (variable a evaluar){
    case calor:
        -codigo a ejecutar-
        break;
    case valor:
        -codigo a ejecutar-
        break;
        default:
            -codigo a ejecutar si sale de las opciones-
            break;
} */

let dia = 5;

switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
    console.log("Lunes");
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
    console.log("Viernes")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Ese no es un dia válido")
        break;
}

let cuponDescuento = "Oro";
let descuento;

switch(cuponDescuento){
    case "Bronce" :
    descuento = 5;
        break;
    case "Plata":
    descuento = 10;
        break;
    case "Oro":
        descuento = 15;
        break;
    default:
        console.log("Cupón erróneo")        

}
console.log(descuento);













