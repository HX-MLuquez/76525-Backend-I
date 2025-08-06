//* Promise and Then

//* La función Promise es un constructor que crea una nueva promesa.
//* new Promise es una función que recibe dos parámetros: resolve y reject.
//* .then() es un método que se utiliza para manejar el resultado de una promesa una vez que se ha resuelto o rechazado.
// (el .then() es una promesa en sí misma, por lo que se puede encadenar con otros .then() o .catch())

// Promise CLASS       el Promise |  new Promise(function (resolve, reject) {})
var miPromesa1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (true) {
      resolve("Bien bien bien");
    } else {
      reject(Error("Algo salió mal"));
    }
  }, 1000);
});
console.log(miPromesa1); // Promise { <pending> }

const res = miPromesa1
  .then((respuesta) => {
    console.log("01", respuesta); // Bien bien bien
    return respuesta + " papa frita";
  })
  .then((resB) => {
    console.log("02", resB);
    return true;
  })
  .then((resC) => {
    console.log("02", resC);
  })
  .catch((error) => {
    console.log(`error ${error}`);
  });
console.log(res); // -> Promise { <pending> }

//* La data de las promesas la manejamos y vemos dentro del .THEN en si
