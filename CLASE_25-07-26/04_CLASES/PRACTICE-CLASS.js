//* POO - Programación Orientada a Objetos / Clases (CLASS)
// class Persona

class Persona {
  // Datos
  constructor(nombre, edad = 18) {
    this.nombre = nombre;
    this.edad = edad;
  }
  // Metodos
  getName() {
    return this.nombre;
  }
}

console.log(Persona); // CLASE

//* Su fundamento es ser una plantilla que al instanciar tenemos un OBJETO con METODOS

//* INSTANCIA - COPIA

const persona1 = new Persona("Pepe");
console.log(persona1);

const persona2 = new Persona("Jaime", 22);
console.log(persona2);
//----------------------------------------------------------

// CLASE ESTATICA - Y no necesitamos INSTANCIAR
class PersonaStatic {
  // Datos
  static nombre = "Walter"
  // Metodos estáticos
  static getName() {
    return PersonaStatic.nombre;
  }
}

console.log(PersonaStatic.getName());
console.log(PersonaStatic.nombre);

/*
¿Cómo lo hacemos? Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.

Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.

*/

// class Contador {}

// //* STATIC es el nombre de la clase punto la prop static

// class Contador {}
