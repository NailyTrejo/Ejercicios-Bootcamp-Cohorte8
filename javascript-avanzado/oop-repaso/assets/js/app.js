class Animalito{
    constructor(nombre,edad,especie,revisado){
        this.nombre = nombre; 
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado; //antes estaba como this.revisado = false;
        this.enfermo = false;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        // this.cantidadPacientes ++;
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }
    modificarPacientesRevisados(){
       this.pacientesRevisados++;

    }
    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.modificarPacientesRevisados();
           // this.pacientesRevisados++;
            document.write('<br> Paciente ha sido revisado');
        }else{
            document.write('Este paciente ya fue revisado');
        }
    }
    mostrarLista(){
        for(let i=0; i < this.listaPacientes.length; i ++){
            document.write(" "+ this.listaPacientes[i].nombre)
        }
        document.write(`<br> cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados:${this.pacientesRevisados} <br>`)
    }
} 


//instancia creada para poder usar agregar paciente
const VeterinariaPanchito = new Veterinario();

//objetos creados de la clase Animalito
const Animalito1 = new Animalito('Manchas', 5, 'Perro', false); //objeto 1
console.log(Animalito1);
const Animalito2 = new Animalito('Galleta', 2, 'Gato', true); //objeto 2 
console.log(Animalito1);
console.log(Animalito2);

VeterinariaPanchito.agregarPaciente(Animalito1);
VeterinariaPanchito.agregarPaciente(Animalito2);

console.log(VeterinariaPanchito.listaPacientes);

VeterinariaPanchito.mostrarLista();
VeterinariaPanchito.revisarPaciente(Animalito1);
VeterinariaPanchito.mostrarLista();


//Operador de cortocircuito
// let variable = 0;
// console.log()

VeterinariaPanchito.revisarPaciente(Animalito2);