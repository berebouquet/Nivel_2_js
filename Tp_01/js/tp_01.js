/*
	function funciones(){
	var nombre = prompt ('Pepe');
    }
	
	alert("Un mensaje de prueba");
*/
	var nombre = prompt('ingrese su nombre');
	console.log('Hola!' + nombre); /* ejecicio 1 pide nombre emdiante prompt y dispara una alerta con un texto mas*/

   
/*clase 2*/
 
var mostrar = false;
alert (mostrar);/*false*/


var mostrar = 'false';
alert (!mostrar); /*false*/

alert (!!mostrar);/*false*/

alert (!mostrar); /*true*/

var mostrar = '';
alert (!!mostrar);/*false no hay string*/

/*Una variable con contenido es true.*/

var variableA = '';
var variableB = 654
alert (variableB);

var variableA = '';
var variableB = 654;
alert (Boolean (variableB && variableA));/*false porque uno es f y otro v*/

var variableA = '';
var variableB = 654;
alert (Boolean (variableB && !variableA));/*true porque el ! convierte a true, y true con true da true*/

var variableA = 'algo';
var variableB = 654;
alert (Boolean (variableB && !variableA));/*false*/

/*el &, con el primer false qu encuentra deja de recorrer y lo corta*/


/* || "or" */

var variableA = 'algo';
var variableB = 654;
alert (Boolean (!variableB || !variableA));
/*  false*/


//ciclos de interacciones

//variables de excusa
var hacefrio = true;
var tengoMuchoTrabajo = false;
var estoyCansado = false;



//variables de excusa
var haceFrio = true;
var tengoMuchoTrabajo = false;
var estoyCansado = false;

var tengoExcusa = haceFrio || tengoMuchoTrabajo || estoyCansado;
    
//variables de transitionProperty
var haySubte = true;
var hayTren = true;
var hayColectivo = true;
var voyCaminando = false;

var hayFormaDeLlegar = haySubte || hayTren || hayColectivo;
var voyAClase = !tengoExcusa && hayFormaDeLlegar;

alert ('Voy a clase?' + voyAClase);
alert ('Voy a clase?' + Boolean(!tengoExcusa && hayFormaDeLlegar));



//true cualquier numero # a cero
//nulo e indefinido, uno e sun tipo el otro es un contenido. Poner para js, o, nulo o 'vacio' es NULO.

var nameA = 'Mariano';
var nameA = 'Ana';
alert(Boolean (nameA = nameB)); //es true porque es igual, muestra dos string, no compara. == o === si compara el tipo o dato. Anombre a le asigno nombre B, osea es Ana = Ana y cambia el valor.


var nameA = 'Mariano';
var nameA = 'Ana';
alert(Boolean (nameA == nameB));

//tarea


var diaSemana = ;
var diaActual = 'Lunes';
var diasDeLaSemana = 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes',

if (Lunes)===(diasDeLaSemana[0]) {
	diasemana = true;
}

else if (diaActual === diasDeLaSemana [1]){
	diaSemana = true;
}

alert(Boolean (diaSemana == diaActual));


//--------------------------

//condicionales if

var hayClase = false;
var diaActual = 'Lunes';
var diasDeClase = 'Lunes', 'Miercoles', 

if (diaActual)===(diasDeClase[0]) {
	hayClase = true;
}

if (diaActual === diasDeClase[1]){
	hayClase = true;
}


---------

var hayClase = false;
var diaActual = 'Lunes';
var diasDeClase = 'Lunes', 'Miercoles', 

if (diaActual)===(diasDeClase[0]) {
	hayClase = true;
}

else if (diaActual === diasDeClase [1]){
	hayClase = true;
}

-------

var hayClase; // es null un valor indefinido
var diaActual = 'Lunes';
var diasDeClase = 'Lunes', 'Miercoles', 

if (diaActual)===(diasDeClase[0]) ||
	(diaActual === diasDeClase [1]){
	hayClase = true;
} else{
	hayClase=false;
}


//--------------------
//switch es como el if, pero es para cuando es largo. 


switch (diaActual){
	clase diasDeClase[0];
	hayClases = true;
	break;
	default:
	//statements def
	break;
}

//el break si es verdadero saltea

switch (diaActual){
	case diasDeClase[0];
	hayClases = true;
	break;
	case diasDeClase[1];
	hayClases = true;
	break;
	default:
	//statements def
	hayClases= false;
}

//reiterar , es repetir una cantidad de pasos con un final.
// array tiene estructura \


var hayClase;
var diaActual = 'Lunes';
var diasDeClase = ['Lunes', 'Miercoles'];

for(posicion = 0; posicion < diasDeClase.lenght; posicion++){
//cdad d econtenido o arreglos que tengo. o string que tengo. o posicion = a posicion +1
\
if(!hayClase){
	hayClase = diaActual === diasDeClase[posicion];
}
} 

//-------------

var hayClase; false
var diaActual = 'Miercoles';
var diasDeClase = ['Lunes', 'Miercoles'];

for(diaDeClase in diasDeClase){
if(!hayClase){
	hayClase = diaActual === diasDeClase[posicion];
}
} 

//---------------------

var hayClase; false
var diaActual = 'Miercoles';
var diasDeClase = ['Lunes', 'Miercoles'];
var pos = 0

while(!hayClase && pos < diasDeClase.lenght) { //while incrementa dentro de la estructura. Compara wl while dos condiciones de verdad.
	hayClase = diaActual === diasDeClase[pos];
	pos++;
} 

//----------------
//Esta estructura de do, while se usa muy poco.

var hayClase; false;
var diaActual = 'Miercoles';
var diasDeClase = ['Lunes', 'Miercoles'];
var pos = 0

do(hayClase = diaActual === diasDeClase[pos];
	pos++;
} while(!hayClase && pos < diasDeClase.lenght);


//----------------CLASE 3 ARRAYS -------------------


function mostrarMensajeBienvenida (){
	alert('Bienvenido alcurso de js');
}



function sumar (operandoA, operandoB){
alert('Este es un cambio'mensaje);
)	
}


function sumar (operandoA, operandoB)(
alert(operandoA + operandoB);
)	



//Mi array de numeros primos
var arrayDePrimos = [1,2,3,4,5,7];
function sumarArray(numerosPrimos)


function sumarArray(numeros){
	var resultado = 0;
	for (i = 0;i <numeros.length; i++){//posiciono al array

//1 = 0
//numeros[1]-> 1
//resultado = 1

//1 = 1 
//numeros[1]-> 2
// resultado = 3

// i =2
// numeros[1]->3
//resultado = 6

	resultado = resultado + numeros[i];
	return resultado; //siempre muere al final de la funcion
}

	console.log ("La variable i contiene" + i);
	console.log ("nu")


for (i = 0;i <3; i++){//posiciono al array siempre en cero


console.log (resultado);
return resultado;
}

//scope, de llave a llave, donde vive la funcion

var miVariableGlobal = 'global'; // variable global # local, cada una esta en un contexto

function miFuncion(){
	console.log(miVariableGlobal);
}

function miFuncion(){
	console.log(miVariableLocal);
}


//Ejemplo de funcion con llamamda a variable global

function miFuncion(){
	console.log(miVariableGlobal);
}


//Ejemplo de funcion con llamamda a variable local

var miVariableGlobal = 'global';

function miFuncion(){
	miVariable = 'demostracion';

	console.log(miVariable); //va a local proque para que vaya a global hay que declararlo.
}


function miFuncion(){
	miNuevaVariable = 'estavariabletermina siendo global';

	console.log(miVariable); //va a local porque para que vaya a global hay que declararlo.
}



//ejemplo imprimir por antalla o consola
// Ejemplo de como una variable puede ser una funcion:

function imprimirPorConsola(){
	console.log('esto imprime por consola');	
}

function imprimir (funcionQueImprime){
	funcionQueImprime(); //imprimri pide como parametro una funcion que se imprimir.
}

imprimirPorConsola();// llamo a la variable y la imprimo.


typeof (miNuevaVariable)

	function MifuncionVacia(){
		funcionQueImprime();//ejecuto ahi
	}



//Tarea nombre y apellido

function pedirNombreApellido() {
	var nombre =  prompt('ingrese su nombre');
	var apellido =  prompt('ingrese su apellido');

	console.log('nombre' + 'apellido');	
}

pedirNombreApellido
pedirNombreApellido() {
	var nombre =  prompt('ingrese su nombre');
	var apellido =  prompt('ingrese su apellido');

	console.log('nombre' + 'apellido');	
}
pedirNombreApellido()
nombreapellido

//Tarea Crear una funcion que en base a un paramentro muestre los dias habiles o de fines de semana en consola




function sumarArray(numeros){
	var resultado = 0;
	for (i = 0;i <5; i++){//posiciono al array

}

var esDiaHabil = true;
var diasDeLaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
var diasDeFinDeSemana = ['sabado', 'domingo'];
//var dias =  ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'sabado', 'domingo'];


function mostrarDias(esDiaHabil) {

	if (esDiaHabil) {

		mostrarArray(diasDeLaSemana);

	} else {

		mostrarArray(diasDeFinDeSemana);

	}

}

function mostrarArray(miArray) {

	for (i = 0; i < miArray.length; i++) {
			alert(miArray[ï]);
		}

}



for(posicion = 0; posicion < dias.lenght; posicion++){

if(!hayClase){
	diaDelFinde = dias === diasDeLaSemana];
}

	console.log('diaDelFinde');	

} 


























