const express = require("express");
const app = express();
const routes = require("./routes/index"); // index.js <- {{/users}{/products}}
// const routesProducts = require("./routes/product.router"); // index.js

const products = [
  {
    id: "1",
    nombre: "Camiseta deportiva",
    precio: 15000,
    stock: 10,
  },
  {
    id: "2",
    nombre: "Zapatillas running",
    precio: 65000,
    stock: 5,
  },
  {
    id: "3",
    nombre: "Gorra",
    precio: 8000,
    stock: 20,
  },
];

app.use(express.json()); // {} por body es de lectura

app.get("/", (req, res) => {
  res.json({ API: "BACKEND - ROUTER", break: "a las 21:15 volvemos" });
});

// app.get("/products", (req, res) => {
//   res.json(products);
// });

// app.get("/products/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     if (!id) {
//       return res.status(404).json({ staus: false, message: "id undefined" });
//     }
//     const product = products.find((p) => p.id === id);
//     if (!product) {
//       return res
//         .status(404)
//         .json({ staus: false, message: "product not found" });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// });

app.use("/api", routes)

/*
http://localhost:8080/

http://localhost:8080/api/
                    http://localhost:8080/api/users
                                                  /
                                                  /gender
                    http://localhost:8080/api/products
                                                   /
                                                   /324234
*/

/*
Sin el index router

const productsRouter = require("./routes/product.router")
const usersRouter = require("./routes/product.router")
app.use("/api", productsRouter)
app.use("/api", usersRouter)
*/


module.exports = app;
