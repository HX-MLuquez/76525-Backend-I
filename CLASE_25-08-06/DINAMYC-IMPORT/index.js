//* IMPLEMENTACION DE UN MODULO CON IMPORTACION DINAMICA (DYNAMIC IMPORTS)

async function ejemplo() {
  try {
    const modulo = await import("./calculadora.js");
    console.log(modulo.sumar(2,3));
  } catch (error) {
    console.log(`El error es ${error}`);
  }
}

/*
package.json

{
  "name": "dinamyc-import",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",

Importar y exportar a la manera de ES

import ... from "./....js"    export o export default


X   "type": "module", <- Sin esto
Node -> Command JS
Importar                           exportar 
const ... = require("...")      module.exports = {}
*/