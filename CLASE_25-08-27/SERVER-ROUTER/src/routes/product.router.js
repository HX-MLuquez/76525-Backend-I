const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/product.controller");


router.get("/", getAllProducts);

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ staus: false, message: "id undefined" });
    }
    const product = products.find((p) => p.id === id);
    if (!product) {
      return res
        .status(404)
        .json({ staus: false, message: "product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log("Error: ", error);
  }
});

module.exports = router; // {get1, get2}