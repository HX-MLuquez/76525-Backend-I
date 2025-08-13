//* module path es nativo de NODE y no necesitamos instalar
const path = require("path");

console.log("__dirname:", __dirname);
// c:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\[ 76525 BACK-I MIERC 10-00 ]\76525-CLASE\CLASE_25-08-13

const rutaArchivo = path.join(__dirname, "data", "archi.txt");
// c:\Users\mauuu\OneDrive\Escritorio\CODERHOUSE\[ 76525 BACK-I MIERC 10-00 ]\76525-CLASE\CLASE_25-08-13\data\archi.txt

console.log("Ruta final:", rutaArchivo);
