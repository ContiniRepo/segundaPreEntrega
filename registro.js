
class pacientes {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}

const paciente1 = new pacientes("Cacho", "Gomez", 123456);
const paciente2 = new pacientes("Rodrigo", "Lopez", 456456);
const paciente3 = new pacientes("Belen", "Ramirez", 369369);

const arraypacientes = [];

arraypacientes.push(paciente1);
arraypacientes.push(paciente2);
arraypacientes.push(paciente3);

console.log(arraypacientes);


function menu() {
    alert("Registro de pacientes");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de paciente \n 2) Baja de paciente \n 3) Salir"));
    return opcion;
}

function altaPaciente() {
    let nombre = prompt("Ingrese el nombre del paciente: ");
    let apellido = prompt("Ingrese el apellido del paciente: ");
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let paciente = new pacientes(nombre, apellido, dni);
    arraypacientes.push(paciente);
    console.log(arraypacientes);
}

function bajaPaciente() {
    let dni = parseInt(prompt("Ingrese el DNI del paciente: "));
    let paciente = arraypacientes.find(paciente => paciente.dni === dni);
    let indice = arraypacientes.indexOf(paciente);
    arraypacientes.splice(indice, 1);
    console.log(arraypacientes);
}

function salir() {
    alert("¡Hasta pronto!");
}





let opcion = menu();
switch (opcion) {
    case 1:
        altaPaciente();
        break;
    case 2:
        bajaPaciente();
        break;
    case 3:
        salir();
        break;
    default:
        alert("Intente de nuevo");
        break;
}





