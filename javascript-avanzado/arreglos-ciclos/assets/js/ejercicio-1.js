// Crear un arreglo con 20 números. Mostrar en HTML la suma de dichos números y el promedio

let calificaciones = [9, 8, 7, 6, 8, 9, 10, 9, 8, 7, 6, 10, 9, 8, 7, 6, 8, 9, 10, 9];
let suma = 0;
let promedio = 0;

for(let i=0; i< calificaciones.length; i++){
    suma += calificaciones[i];
    promedio = suma / calificaciones.length;
}
document.write(`La suma total es de: ${suma} <br>`)
document.write(`El promedio es de: ${promedio} <br>`)