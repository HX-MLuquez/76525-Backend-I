// NULLISH

// VAR-PRIVADAS

//todo__ ES11
//* NULLISH

// ??

//* VAR PRIVADA - ENCAPSULAMIENTO

class Gato {
  #nombre;
  static peso = 0.2
  static altura = 2; //* Se accede desde la clase o con un método
  constructor(nombre, edad = 9) {
    this.#nombre = nombre; //* Solo se accede desde un método
    this.edad = edad; //* Necesita ser instanciada
  }
  getNombre() {
    return this.#nombre;
  }
  getAltura() {
    return Gato.altura;
  }
  changeAltura(alt) {
    Gato.altura = alt;
    return Gato.altura;
  }
  static getPeso(){
    return Gato.peso
  }
}
//* Desde la CLASSE en sí
console.log(Gato.nombre); // -> undefined
// console.log(Gato.#nombre) //! SyntaxError: Private field '#nombre' must be declared in an enclosing class
console.log(Gato.altura); // -> 2
console.log(Gato.edad); // -> undefined

//* INSTANCIANDO
console.log("----------------INSTANCIANDO-------------");
const gatitoA = new Gato("Mishi");
console.log(gatitoA.nombre); // -> undefined
// console.log(gatitoA.#nombre) //! SyntaxError: Private field '#nombre' must be declared in an enclosing class
console.log(gatitoA.altura); // -> undefined
console.log(gatitoA.edad); // -> 9

//* Desde los métodos
console.log("----------------METODOS-------------");
console.log(gatitoA.getNombre()); // -> Mishi
console.log(gatitoA.getAltura()); // -> 2

const gatitoB = new Gato("Luki"); 
console.log(gatitoB.getNombre()); // -> Luki
console.log(gatitoB.getAltura()); // -> 2
console.log(gatitoB.changeAltura(8));

console.log("-----------------------------");
console.log(gatitoA.getNombre()); // -> Mishi
console.log(gatitoA.getAltura()); // -> 8

console.log(gatitoB.getNombre()); // -> Luki
console.log(gatitoB.getAltura()); // -> 8
gatitoB.edad = 101
console.log(gatitoB.edad); // -> 101

Gato.altura = 9986787756
console.log(gatitoA.getAltura()); // -> 9986787756
console.log(gatitoB.getAltura()); // -> 9986787756


console.log(Gato.getPeso()); // -> 0.2

//* FUNCIONES CONSTRUCTORAS - Nombre con mayúscula
function Product(nombre){
    this.nombre = nombre
    

}