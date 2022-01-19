//Clases, molde que nos permite crear objetos 

class Animal{
    //constructor es una función 
    constructor(nombre,especie){
       //this hace referencia al contexto en que se esta utilizando
        this.nombre = nombre;
        this.especie = especie;

        //console.log('Este es un constructor')
    }

    //getters y setters 
    //solo tienen el proposito de leer o modificar un atributo 
    get getNombre(){
        return this.nombre;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getEspecie(){
        return this.especie;
    }
    set setEspecie(especie){
        this.especie = especie;
    }


    //metodos == funcion 
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return mensaje;
    }

//Metodos estaticos
//Pertenece solo a la clase y no se herreda a los objetos 
   static saludar(){
        return console.log('Hola, soy un método estático');
    }
}
//Animal.presentarse();
//console.log(Animal.getNombre);
Animal.saludar();



//Heredan los atributos y los metodos de la clase que estan utilizando en este caso es de Animal
const Animal1 = new Animal("Scooby", "Perro"); //creamos un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas","Gato");
console.log(Animal2);
const Animal3 =new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrappy"; //notacion de punto para cambiar el valor 
console.log(Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre("Oddie")); //metodo para cambiar el valor

//Getters y Setters son funciones que se pueden usar dentro de una clase 
//Getter se crean de get y nos ayudan a obtener el valor de una variable 
//Setters se crean de set y nos ayudan a fijar o cambiar el valor de un atributo
// se utilizan como si fueran atributos

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);
//Animal1.saludar();












