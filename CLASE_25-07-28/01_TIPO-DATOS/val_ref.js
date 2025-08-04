//* Tipos de Datos Primitivos
// str num bool null undf
var numero = 455;

var unBollean = true;

var vacio = null;

var nombre = "Walter";

var edad = undefined;

//-----------------------

// Objetos { }   Listas o Array [ ]    Funciones  function(){}

const objetoObjeto = {
  nombre: "Sip",
  edad: 11,
};
console.log(objetoObjeto); // { nombre: 'Sip', edad: 11 }

objetoObjeto.altura = 435

objetoObjeto.nombre = "San"
console.log(objetoObjeto);


const objetoLista = [2, 4, "holis"]; // es un objeto indexado {0: 2, 1: 4, 2: "holis"}
console.log(objetoLista);

objetoLista[6] = "sarasasa"
console.log(objetoLista);

objetoLista[1] = "aaaaaaaaaaaaaa"
console.log(objetoLista);
// Tipo especial - Function <- objetoFuncion

const objetoFuncion = function(){
    return "holis de nuevo" 
}
console.log(objetoFuncion); // [Function: objetoFuncion]

objetoFuncion.altura = 8787
console.log(objetoFuncion); // [Function: objetoFuncion] { altura: 8787 }
console.log(objetoFuncion.altura);
// console.log(global);

// var nombre = "Manuel"

// console.log(nombre)

// //* THIS
// const plantillaRegistro = {

// }
// //* Objeto y una function dentro del objeto a fin de los datos del objeto en sí
// //*              METODO

// console.log(plantillaRegistro)

//----------------------------

// Objetos -> { objeto }  [ array ]  function  <- REFERENCIA

//* En bloques - function if while for --> let
//* Para OBJECT { }  [ ]  function  -->  const

//* Para espacios global o de mucho alcance -->  var
