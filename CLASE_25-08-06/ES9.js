//* DESTRUCTURING

const nuevaLista = [2, 3, 7, 8, 9];

const [elementA, elemntB] = nuevaLista; // Hace destructuring por orden (por posicion)
console.log(elemntB);

const nuevoObj = {
  nombre: "Dilma",
  edad: 87,
  idCode: 21,
};
// Hace destructuring por la identica key mencionada

const { idCode } = nuevoObj;
console.log(idCode);

//* ... SPREAD
const cloneList = [...nuevaLista];

const cloneObj = { ...nuevoObj };

//* REST - RESTO

const listita = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a, b, ...restoAca] = listita;
console.log(a);
console.log(b);

console.log(restoAca); /* [3, 4, 5, 6, 7, 8, 9] */

const [...resttito] = listita;
// ===
const resttitoB = [...listita];

const copiarAsiNoma = listita;
listita.push("EEEEEE");
console.log(resttito);
console.log(resttitoB);
console.log(copiarAsiNoma);
// Destructuring

const persona = {
  nombre: "Dilma",
  edad: 87,
  id: 21,
  password: 1234
};

const { password, ...restoPersona } = persona;
console.log(password);
console.log(restoPersona);

const clonarPersona = { ...persona };

const lista = [32, "ww", 12, 11];

const copy1 = lista;

const copy2 = [...lista];
