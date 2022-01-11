let añoActual = 2022;
let edad = document.getElementById('edad');

function getEdad(){

    let añoNacimiento = prompt('Año de nacimiento');
    edad.textContent = 'Tu edad es de: ' + (añoActual-añoNacimiento) + ' años';
}