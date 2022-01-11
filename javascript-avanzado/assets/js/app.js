/*forma de acceder */
let title = document.getElementById('title');
console.log(title);

title.textContent ='Este texto esta escrito desde Javascript';

/*otra forma de acceder es la siguiente */
let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/*para cambiar el texto debes de llamarlo como un arreglo*/
/*parrafos[0].textContent = 'Parrafos escritos desde Javascript';*/

/*para llamar a todos los parrafos tendras que poner un for o un forEach porque es un arreglo */
/*for(let i=0; i<parrafos.length; i++){
    parrafos[i].textContent = 'Parrafos ' + i + ' escritos desde Javascript';
}*/

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}
