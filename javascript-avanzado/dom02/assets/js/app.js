//si tiene el simbolo de $ quiere decir que estoy accediendo al DOM
/* let $titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo escrito desde JS';*/

//querySelector  si es una etiqueta (p),clase (.), id (#)
let $titulo = document.querySelector('#titulo');
$titulo.textContent='Titulo escrito desde JS';

let $parrafo = document.querySelector('p');
// console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll('p');
// console.log($parrafos[1].textContent);

let subtitulo = document.createElement('h3');
subtitulo.textContent = 'Este es un subtitulo desde JS';

//document accedo a body y el append nos ayuda a insertar un nodo al final de la ultima etiqueta que tenemos. 
//document.body.append agrega un elemento al body al final.
/*document.body.append(subtitulo);*/
//el elemento se posiciona antes del elemento
/*document.body.insertAdjacentElement("beforebegin",subtitulo);*/
//trabaja a nivel de hermanos se coloca dentro del elemento
$titulo.insertAdjacentElement("afterend",subtitulo);
//sirve para borrar/ocultar elementos
$titulo.remove();

let $contenido = document.querySelector('#contenido');
//texto
/*console.log($contenido.textContent = //'Hola');*/
// introduccir contenido en el html
/*console.log($contenido.innerHTML = '<br>' //= 'Hola');*/
/*console.log($contenido.outerHTML = 'Hola')*/
let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
//appendChild convierte lo que ponga en hijo de append
$contenido.appendChild(contenidoParrafo);

