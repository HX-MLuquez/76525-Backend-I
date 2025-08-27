const express = require("express");
const { paths } = require("./config/config");
const petsRouter = require("./routes/pets");

const app = express();

// Configurar Express para manejar datos de formularios
app.use(express.urlencoded({ extended: true })); // -> FORM - DATA
app.use(express.json()); // -> navegador data por body -> Server {data} <- req.body

// Servir archivos estáticos desde la carpeta "public"
app.use("/public", express.static(paths.public)) //* OK 'STATIC CONFIG'


// Usar el router de pets
app.use("/api/pets", petsRouter);

// Si comentamos el Middleware de express.static, podemos acceder a esta route "/", de lo contrario,
// si configuramos el middleware static y dentro de la carpeta public tenemos un index.html, siempre
// se va a cargar el index.html y no la ruta "/"
app.get("/", (req, res) => {
  res.status(200).send("Hola desde el servidor Express!");
});

module.exports = app;
