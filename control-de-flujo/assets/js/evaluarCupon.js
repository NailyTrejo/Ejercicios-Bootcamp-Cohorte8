/*Escribir un programa que detecte el cupón que tiene el usuario

    Bronce se le hará un descuento del 5 %
    Plata se le hará un descuento del 10%
    Oro se le hará un descuento del 20%
    Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un cupón equivocado*/

let precio= parseInt(prompt('Ingresa el precio'));
let cuponDescuento = prompt('Ingresa el cupón');
let descuento;

switch(cuponDescuento){
    case "Bronce" :
    descuento = precio * .05;
        break;
    case "Plata":
        descuento = precio * .10;
        break;
    case "Oro":
        descuento = precio * .20;
        break;
        case "Platino":
        descuento = precio * .15;
        break;
    default:
        console.log("Cupón erróneo") 
        break;       
}

console.log(`El precio del artículo original es:  ${precio} y con su descuento es: ${descuento}`);