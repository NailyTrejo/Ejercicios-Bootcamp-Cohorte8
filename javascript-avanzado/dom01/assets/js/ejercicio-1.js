let title = document.getElementById('title');

function cambiarNombre(){
    let name = prompt('Ingresa tu nombre');
    title.textContent = 'Hola ' + name;
}