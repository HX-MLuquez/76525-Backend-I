//* THIS - APUNTADOR
var nombre = "Manuel"

console.log(nombre)

//* THIS
const plantillaRegistro = {
    // Datos
    nombre: "Walter",
    edad: 32,
    dni: 1234,
    // Funciones que trabajen solo con el objeto en si - METODOS
    getName: function(){
        console.log(this.nombre)
        return this.nombre
    }
}
console.log(plantillaRegistro.getName())

//* Objeto y una function dentro del objeto a fin de los datos del objeto en sí
//*              METODO

console.log(plantillaRegistro)

const laMau = {...plantillaRegistro} // CLONAR

laMau.nombre = "Mauro"
console.log(plantillaRegistro)
console.log(laMau)
//----------------------------