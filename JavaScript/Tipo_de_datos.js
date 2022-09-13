//Tipo de boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);
console.log(miFuncion);


//Tipo de dato Symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);
console.log(simbolo)

//Tipo clase es una function

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)
console.log(Persona)

//Tipo undefined
var x;
console.log(typeof x);
console.log(x);

//null = ausencia de valor
var y = null;
console.log(typeof y);
console.log(y);




// Addcional al primer ejemplo
// Concatenar variables

var nombre ="Juan";
var apellido = "Perez";
//var edad1 = 20;
//var edad2 = 14
var  edadtotal = 10 + 20;

var nombrecompleto = nombre + " " + apellido + " ,edad: " + edadtotal;
console.log(nombrecompleto);

//let y const

//let nombre;

//nombre = "Juan";

//console.log(nombre);
