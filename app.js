// Pricing: Escoge tu plan en Gret //

let nombreCliente = prompt("Ingresa tu nombre");
let apellidoCliente = prompt("Ingresa tu apellido");

if ((nombreCliente !=" ") && (apellidoCliente !=" ")){
    alert("Hola ${nombreCliente}, ${apellidoCliente}, selecciona el plan que quieras");
} else {
    alert("Olvisaste escribir tu nombre y apellido");
}

let planEscogido = prompt("Escribe el nombre del plan que quieres");

if ((planEscogido == "basico") || (planEscogido == "BASICO") || (planEscogido == "plan basico") || (planEscogido == "PLAN BASICO") || (planEscogido == "básico") || (planEscogido == "BÁSICO") || (planEscogido == "plan básico") || (planEscogido == "PLAN BÁSICO") || (planEscogido == Plan básico) || (planEscogido == Plan Básico)){
    alert("¡Genial! ¿Quieres añadir alguna funcionalidad adicional a tu plan?");
} else {
    alert("Escribe el nombre de un plan que exista");
}

let funcionalidadExtra = prompt("¿Quieres añadir la funcionalidad para agendar citas y/o facturación automática a tu plan? Si o No")
if (funcionalidadExtra == Si){
    alert("Súper! A continuación escoge las(la) funcionalidades que quieras añadir");
}
if else(funcionalidadExtra == No){
    alert("El costo mensual del plan que escogiste es US $9");
} else {
    alert("Debes escribir Si o No");
}

let escogeFuncionalidadQueQuieras = parseInt(prompt("Escribe 1 para añadir Agendamiento, 2 para añadir Facturación y 3 para añadir ambas"));
if (escogeFuncionalidadQueQuieras == 1) || (escogeFuncionalidadQueQuieras ==2){
    alert ("El costo del plan es US $18");
}
if else {
    alert("El costo del plan es US $27");
} else {
    alert("Error: Escribe 1, 2 o 3");
}


// Registro clientes creadores y clientes consumidores //
function Cliente(nombre, contraseña, pais, como se entero de Gret) {
    this.nombre = nombre:
    this.apellido = apellido;
    this.edad = edad;
    this.pais = pais;
    this.comoseentero = como se entero;
    this.bienvenida = function(){alert("Hola" + this.nombre + "Comienza a crear tu espacio")}
}

const cliente1 = new Cliente("Juan", "Franco", 40, "Colombia", "Instagram"); 
cliente1.bienvenida();


let acumuladorDeNotas = 0;

for(let contador = 0; contador < 5; contador++) {
    let nota = parseFloat(prompt("Ingrese su nota"));

    acumuladorDeNotas += nota;
}

let promedioDeNotas = acumuladorDeNotas / 5;
alert ("El promedio de notas es: ${promedioDeNotas}")




let acumulador = 0;
do {
    let numero = parseInt(prompt("Ingrese un número."))
    acumulador =+ numero;
    console.log(acumulador)
}while(acumulador <= 10)