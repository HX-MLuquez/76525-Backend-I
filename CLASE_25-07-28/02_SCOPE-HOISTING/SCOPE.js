// Ejemplo de Hoisting (PRE-CARGA Funciones - VAR - IMPORT) y Scope

// Hoisting con var
console.log("--- Hoisting con var ---");
console.log(algo); // undefined (hoisted, pero no inicializado)
var algo = 10;
console.log(algo); // 10

//---  CONST siempre para los objetos

const objetData = {};
const listData = [];

funcData();

function funcData() {
  console.log("que milagro");
  return "nada";
}

//---  LET - Por BLOQUE - el LET nace y muere en el bloque
var edad = 23;
if (false) {
  let edad = 45;
}
console.log(edad);

// SCOPE en CONTEXTOS - GLOBAL y cada funcion en si es un contexto

// const dataA = "PipiA";

function sampleA() {
  const dataA = "PipiB";
  console.log(dataA);
  function sampleB() {
    const dataA = "PipiC";
    console.log(dataA);
    function sampleC() {
      const dataA = "PipiD";
      console.log(dataA);
    }
    sampleC()
  }
  sampleB()
}
console.log(dataA)
sampleA()

// Hoisting con let y const
console.log("--- Hoisting con let y const ---");

// Scope de var, let y const

// var tiene scope global o de función
console.log("--- Scope de var ---");

// let y const tienen scope de bloque
console.log("--- Scope de let y const ---");

// // Uso de var en el scope global
// var globalVar = "Global var";
// console.log(globalVar); // 'Global var'

// // Uso de let y const en el scope global
// let globalLet = "Global let";
// const globalConst = "Global const";
// console.log(globalLet); // 'Global let'
// console.log(globalConst); // 'Global const'
