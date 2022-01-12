/* Buenos dias 6-11
Buenas tardes 12-18
Buenas noches 19-23
Dejame dormir 0-5
 */


let hora = prompt('Ingresa la hora');

if ((hora >=6) && (hora<12))
{
    console.log('Buenos dias');
} else if((hora >= 12) && (hora <19)){
    console.log('Buenas tardes')
}else if ((hora >=19) && (hora <=23)){
    console.log('Buenas noches')
}
else if ((hora >=0) && (hora <=6)){
    console.log('Dejame Dormir')
} else{
    console.log('No existe esa hora')
}

