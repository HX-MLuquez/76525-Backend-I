const express = require("express");
const app = express();
const PORT = 3000;

//* -> app <- nuestro server -> {...}.get

//* MIDDELWARE
// app.use()

function saludar(req, res, next) {
  console.log("HOLA!!!!!");
  next();
}
app.use(saludar)

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//                          pedido y respuesta
//  Método (path,           final(req,res)=>{})
app.post("/api/products/create", (req, res) => {});
app.put("/api/products/update/:id", (req, res) => {});
app.delete("/api/products/delete/:id", (req, res) => {
    console.log("HOLA!!!!!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});

//-------------------------------------------------

// console.log("hola munditooooo")

// const http = require("http");
// // http -> { }

// const PORT = 3003;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hola mundo desde mi servidor 23342342345!\n");
// });

// server.listen(PORT, () => {
//   console.log(
//     `Servidor HTTP está escuchando en el puerto http://localhost:${PORT}`
//   );
// });
